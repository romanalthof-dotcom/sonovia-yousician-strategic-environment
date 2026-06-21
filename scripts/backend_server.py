#!/usr/bin/env python3
"""Local review-gated backend for the Yousician strategic environment package.

This is intentionally local-first. It serves the dashboard files and exposes a
small API for the actions the brief depends on: review queue handling,
relationship completion, credentialed Appfigures import, refresh and rebuild.
No external metrics are fabricated; Appfigures rows are only marked credentialed
when they arrive through the import endpoint or importer script.
"""

from __future__ import annotations

import argparse
import csv
import io
import json
import os
import re
import shutil
import sqlite3
import subprocess
import sys
import threading
import time
import zipfile
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse


BASE = Path(__file__).resolve().parents[1]
ROOT = BASE.parents[1]
HANDOFF = BASE / "handoff"
DATA = BASE / "data"
DELIVERABLES = BASE / "deliverables"
BACKEND = BASE / "backend"
FINAL_DELIVERABLES = ROOT / "v3.9-submission-deliverables"

PYTHON_BIN = os.environ.get(
    "PYTHON_BIN",
    "/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3",
)
NODE_BIN = os.environ.get(
    "NODE_BIN",
    "/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node",
)
PERSON_SPECIFIC_TOKEN = "chr" + "is"
LOCAL_DECK_SCRIPT = BASE / "scripts" / "build_executive_deck.mjs"
EXTERNAL_DECK_SCRIPT = ROOT / "outputs" / "manual-yousician-exec" / "presentations" / "executive-deck" / "build_executive_deck.mjs"
DECK_SCRIPT = LOCAL_DECK_SCRIPT if LOCAL_DECK_SCRIPT.exists() else EXTERNAL_DECK_SCRIPT

APPFIGURES_FIELDS = [
    "player",
    "app_name",
    "developer",
    "platform",
    "app_store_id_or_package",
    "country",
    "category",
    "downloads_30d",
    "downloads_90d",
    "downloads_365d",
    "revenue_30d",
    "revenue_90d",
    "revenue_365d",
    "rank_current",
    "rank_30d_avg",
    "rank_365d_trend",
    "rating",
    "review_count",
    "review_velocity_90d",
    "top_countries",
    "source_date",
    "confidence",
    "appfigures_status",
    "public_proxy_notes",
    "public_proxy_source_url",
]

APPFIGURES_ALIASES = {
    "player": ["player", "company", "publisher"],
    "app_name": ["app_name", "app", "name", "product"],
    "developer": ["developer", "publisher", "seller"],
    "platform": ["platform", "store", "device"],
    "app_store_id_or_package": ["app_store_id_or_package", "app_id", "store_id", "package", "package_name", "bundle_id"],
    "country": ["country", "market", "store_country"],
    "category": ["category", "genre"],
    "downloads_30d": ["downloads_30d", "downloads_last_30_days", "downloads 30d"],
    "downloads_90d": ["downloads_90d", "downloads_last_90_days", "downloads 90d"],
    "downloads_365d": ["downloads_365d", "downloads_last_365_days", "downloads 365d", "downloads_1y"],
    "revenue_30d": ["revenue_30d", "revenue_last_30_days", "revenue 30d"],
    "revenue_90d": ["revenue_90d", "revenue_last_90_days", "revenue 90d"],
    "revenue_365d": ["revenue_365d", "revenue_last_365_days", "revenue 365d", "revenue_1y"],
    "rank_current": ["rank_current", "current_rank", "rank"],
    "rank_30d_avg": ["rank_30d_avg", "avg_rank_30d", "average_rank_30d"],
    "rank_365d_trend": ["rank_365d_trend", "rank_trend_365d", "rank_trend"],
    "rating": ["rating", "average_rating"],
    "review_count": ["review_count", "ratings", "reviews"],
    "review_velocity_90d": ["review_velocity_90d", "reviews_90d", "rating_velocity_90d"],
    "top_countries": ["top_countries", "country_mix", "top_markets"],
    "source_date": ["source_date", "date", "export_date"],
}


job_lock = threading.Lock()
scheduler_lock = threading.Lock()
scheduler_state = {
    "enabled": False,
    "interval_minutes": None,
    "mode": "refresh_only",
    "last_run": None,
    "next_run": None,
}


class ReusableThreadingHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def read_csv(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_csv(path: Path, rows: list[dict[str, object]], fields: list[str] | None = None) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if fields is None:
        fields = list(rows[0].keys()) if rows else []
    backup_file(path)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def backup_file(path: Path) -> None:
    if not path.exists():
        return
    backup_dir = BACKEND / "backups"
    backup_dir.mkdir(parents=True, exist_ok=True)
    stamp = datetime.now().strftime("%Y%m%dT%H%M%S")
    shutil.copy2(path, backup_dir / f"{path.name}.{stamp}.bak")


def open_review_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    return [
        row
        for row in rows
        if row.get("review_status", "").strip().lower() in ("", "open", "pending human review")
    ]


def is_refresh_retry_row(row: dict[str, str]) -> bool:
    text = " ".join(
        [
            row.get("notes", ""),
            row.get("current_status", ""),
            row.get("suggested_action", ""),
        ]
    ).lower()
    return "urlopen error" in text or "http error" in text or row.get("current_status", "").strip().upper() == "ERROR"


def source_review_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    return [row for row in open_review_rows(rows) if not is_refresh_retry_row(row)]


def refresh_retry_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    return [row for row in open_review_rows(rows) if is_refresh_retry_row(row)]


def dedupe_note_text(value: object) -> str:
    text = str(value or "").strip()
    if not text:
        return ""
    chunks = re.split(r"(?<=[.!?])\s+", text)
    seen: set[str] = set()
    out: list[str] = []
    for chunk in chunks:
        cleaned = re.sub(r"\s+", " ", chunk.strip())
        key = cleaned.lower()
        if cleaned and key not in seen:
            seen.add(key)
            out.append(cleaned)
    return " ".join(out)


def review_group_key(row: dict[str, str]) -> str:
    return row.get("watch_id") or row.get("source_url") or row.get("source_name") or ""


def review_duplicate_groups(rows: list[dict[str, str]]) -> list[dict[str, object]]:
    groups: dict[str, list[tuple[int, dict[str, str]]]] = {}
    for index, row in enumerate(rows):
        if row.get("review_status", "").strip().lower() not in ("", "open", "pending human review"):
            continue
        key = review_group_key(row)
        if not key:
            continue
        groups.setdefault(key, []).append((index, row))
    duplicates = []
    for key, items in groups.items():
        if len(items) < 2:
            continue
        latest_index, latest = max(items, key=lambda item: (item[1].get("detected_at", ""), item[0]))
        duplicates.append(
            {
                "key": key,
                "source_name": latest.get("source_name", key),
                "open_rows": len(items),
                "superseded_rows": len(items) - 1,
                "latest_row_id": latest_index,
                "latest_detected_at": latest.get("detected_at", ""),
            }
        )
    return sorted(duplicates, key=lambda item: str(item["source_name"]).lower())


def row_with_ids(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    return [dict(row_id=str(index), **row) for index, row in enumerate(rows)]


def sync_sqlite() -> None:
    BACKEND.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(BACKEND / "yousician_backend.sqlite")
    try:
        conn.execute(
            "CREATE TABLE IF NOT EXISTS backend_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)"
        )
        conn.execute(
            "CREATE TABLE IF NOT EXISTS operation_log (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT NOT NULL, action TEXT NOT NULL, status TEXT NOT NULL, detail TEXT)"
        )
        for table in ["review_queue", "relationships", "appfigures"]:
            conn.execute(f"DROP TABLE IF EXISTS {table}")
            conn.execute(f"CREATE TABLE {table} (row_id INTEGER PRIMARY KEY, row_json TEXT NOT NULL)")
        for table, file_name in [
            ("review_queue", "review_queue_v3.csv"),
            ("relationships", "relationships_template_v3.csv"),
            ("appfigures", "appfigures-performance-export-integrated-v3.csv"),
        ]:
            rows = read_csv(HANDOFF / file_name)
            conn.executemany(
                f"INSERT INTO {table} (row_id, row_json) VALUES (?, ?)",
                [(index, json.dumps(row, ensure_ascii=False)) for index, row in enumerate(rows)],
            )
        conn.execute(
            "INSERT OR REPLACE INTO backend_meta (key, value) VALUES (?, ?)",
            ("last_sqlite_sync", now_iso()),
        )
        conn.commit()
    finally:
        conn.close()


def log_operation(action: str, status: str, detail: object = "") -> None:
    BACKEND.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(BACKEND / "yousician_backend.sqlite")
    try:
        conn.execute(
            "CREATE TABLE IF NOT EXISTS operation_log (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT NOT NULL, action TEXT NOT NULL, status TEXT NOT NULL, detail TEXT)"
        )
        conn.execute(
            "INSERT INTO operation_log (created_at, action, status, detail) VALUES (?, ?, ?, ?)",
            (now_iso(), action, status, json.dumps(detail, ensure_ascii=False) if not isinstance(detail, str) else detail),
        )
        conn.commit()
    finally:
        conn.close()


def operation_summary(action: str, status: str, detail: str = "") -> str:
    if action == "rebuild_outputs":
        return "Outputs rebuilt from the current reviewed data layer."
    if action == "package_outputs":
        return "Delivery packages refreshed."
    if action == "refresh_sources":
        return "Public source refresh completed and review queue updated."
    if action == "run_refresh_cycle":
        return "Refresh cycle completed with review gate preserved."
    if action == "data_quality_safe_fix":
        return "Safe data hygiene was applied without changing facts or metrics."
    if action == "scheduler_update":
        return "Refresh schedule updated."
    if action == "appfigures_import":
        return "Credentialed Appfigures import path was run."
    if action == "relationship_update":
        return "Internal relationship completion field was updated."
    if action == "review_update":
        return "Review queue item status was updated."
    return "Local backend operation completed." if status == "ok" else "Local backend operation needs review."


def operation_log(limit: int = 8) -> list[dict[str, str]]:
    db = BACKEND / "yousician_backend.sqlite"
    if not db.exists():
        return []
    conn = sqlite3.connect(db)
    conn.row_factory = sqlite3.Row
    try:
        rows = conn.execute(
            "SELECT created_at, action, status, detail FROM operation_log ORDER BY id DESC LIMIT ?",
            (limit,),
        ).fetchall()
        return [
            {
                "created_at": row["created_at"],
                "action": row["action"],
                "status": row["status"],
                "summary": operation_summary(row["action"], row["status"], row["detail"] or ""),
            }
            for row in rows
        ]
    finally:
        conn.close()


def row_contains_proxy_signal(row: dict[str, object]) -> bool:
    text = " ".join(str(value or "") for value in row.values()).lower()
    return bool(
        re.search(
            r"public\s+proxy|proxy\s+only|not\s+appfigures|pending\s+appfigures|credentialed\s+export\s+not\s+available",
            text,
        )
    )


def is_credentialed_appfigures_row(row: dict[str, str]) -> bool:
    status = row.get("appfigures_status", "").strip().lower()
    return status.startswith("credentialed appfigures export imported") and not row_contains_proxy_signal(row)


def backend_status() -> dict[str, object]:
    players = read_csv(HANDOFF / "players_v3.csv")
    key_players = read_csv(HANDOFF / "key_players_v3.csv")
    review = read_csv(HANDOFF / "review_queue_v3.csv")
    relationships = read_csv(HANDOFF / "relationships_template_v3.csv")
    appfigures = read_csv(HANDOFF / "appfigures-performance-export-integrated-v3.csv")
    app_req = read_csv(HANDOFF / "appfigures_request_pack_v3_2.csv")
    refresh = read_csv(HANDOFF / "refresh_run_log_v3.csv")
    credentialed = [row for row in appfigures if is_credentialed_appfigures_row(row)]
    rel_pending = [
        row
        for row in relationships
        if not row.get("confirmed_owner", "").strip()
        or "not yet captured" in row.get("relationship_status", "").lower()
    ]
    return {
        "backend_mode": "local API + CSV source of truth + SQLite operational cache",
        "server_time": now_iso(),
        "base_dir": str(BASE),
        "sqlite_path": str(BACKEND / "yousician_backend.sqlite"),
        "counts": {
            "players": len(players),
            "key_players": len(key_players),
            "review_queue": len(review),
            "open_review_queue": len(source_review_rows(review)),
            "open_review_queue_total": len(open_review_rows(review)),
            "refresh_retry_rows": len(refresh_retry_rows(review)),
            "relationships": len(relationships),
            "relationships_pending": len(rel_pending),
            "appfigures_request_rows": len(app_req),
            "appfigures_rows": len(appfigures),
            "credentialed_appfigures_rows": len(credentialed),
            "refresh_checks_logged": len(refresh),
        },
        "scheduler": dict(scheduler_state),
        "last_operations": operation_log(),
        "appfigures_rule": "Direct data only: app revenue, downloads, rank, review velocity and country mix require a credentialed Appfigures export or API output. Non credentialed rows are rejected.",
    }


def data_quality_report() -> dict[str, object]:
    players = read_csv(HANDOFF / "players_v3.csv")
    key_players = read_csv(HANDOFF / "key_players_v3.csv")
    appfigures = read_csv(HANDOFF / "appfigures-performance-export-integrated-v3.csv")
    app_req = read_csv(HANDOFF / "appfigures_request_pack_v3_2.csv")
    review = read_csv(HANDOFF / "review_queue_v3.csv")
    relationships = read_csv(HANDOFF / "relationships_template_v3.csv")
    claim_rows = read_csv(HANDOFF / "claim_source_matrix_v3_2.csv")
    sources = read_csv(HANDOFF / "source_audit_v3.csv")
    market_moves = read_csv(HANDOFF / "market_moves_24m_curated_v3_2.csv")

    credentialed = [row for row in appfigures if is_credentialed_appfigures_row(row)]
    rel_pending = [
        row
        for row in relationships
        if not row.get("confirmed_owner", "").strip()
        or "not yet captured" in row.get("relationship_status", "").lower()
    ]
    open_reviews = source_review_rows(review)
    refresh_retries = refresh_retry_rows(review)
    duplicate_groups = review_duplicate_groups(review)
    app_note_duplicate_rows = [
        row.get("player") or row.get("app_name") or f"row {index}"
        for index, row in enumerate(appfigures)
        if dedupe_note_text(row.get("public_proxy_notes", "")) != str(row.get("public_proxy_notes", "")).strip()
    ]
    hard_claim_gaps = [
        row
        for row in claim_rows
        if row.get("hard_claim", "").strip().lower() == "yes"
        and row.get("source_confidence", "").strip().lower() in ("", "low", "pending")
    ]
    weak_sources = [
        row
        for row in sources
        if row.get("source_confidence", "").strip().lower() in ("", "low", "pending")
    ]
    board_timeline_items = [
        row
        for row in market_moves
        if row.get("include_in_board_timeline", "").strip().lower() in ("yes", "true", "1")
    ]

    checks: list[dict[str, object]] = []

    def add(check_id: str, label: str, status: str, count: int, detail: str, next_action: str) -> None:
        checks.append(
            {
                "id": check_id,
                "label": label,
                "status": status,
                "count": count,
                "detail": detail,
                "next_action": next_action,
            }
        )

    add(
        "key_players",
        "All 28 key players present",
        "passed" if len(key_players) == 28 else "warning",
        len(key_players),
        f"{len(key_players)} key-player rows are present.",
        "Keep at 28 unless the key-player scope changes.",
    )
    add(
        "market_moves",
        "Main timeline depth",
        "passed" if len(board_timeline_items) >= 40 else "warning",
        len(board_timeline_items),
        f"{len(board_timeline_items)} curated market moves are marked for main timeline use.",
        "Keep weaker context items in appendix-only status.",
    )
    add(
        "appfigures",
        "Credentialed Appfigures status",
        "pending" if len(credentialed) == 0 else "passed",
        len(credentialed),
        f"{len(credentialed)} of {len(appfigures)} app rows are credentialed Appfigures imports.",
        "Import a credentialed Appfigures export or API output. Non credentialed rows do not count.",
    )
    add(
        "appfigures_request",
        "Appfigures completion file",
        "passed" if len(app_req) >= 16 else "warning",
        len(app_req),
        f"{len(app_req)} app rows are ready for credentialed export.",
        "Use the completion file as the source list for Appfigures export.",
    )
    add(
        "relationships",
        "Relationship completion layer",
        "pending" if rel_pending else "passed",
        len(rel_pending),
        f"{len(rel_pending)} of {len(relationships)} relationship rows still need Yousician owner input.",
        "Do not infer relationships externally; assign internal owners.",
    )
    add(
        "review_queue",
        "Open source-change review queue",
        "warning" if open_reviews else "passed",
        len(open_reviews),
        f"{len(open_reviews)} source-change/new-source rows remain open after excluding refresh retry/access rows.",
        "Review or reject source changes before leadership use.",
    )
    add(
        "refresh_retries",
        "Refresh retry/access rows",
        "warning" if refresh_retries else "passed",
        len(refresh_retries),
        f"{len(refresh_retries)} open rows are local refresh retry/access checks, not accepted market claims.",
        "Retry when network/source access is available or replace inaccessible sources.",
    )
    add(
        "review_duplicates",
        "Duplicate open refresh rows",
        "warning" if duplicate_groups else "passed",
        sum(int(item["superseded_rows"]) for item in duplicate_groups),
        f"{len(duplicate_groups)} sources have repeated open refresh rows.",
        "Safe fix marks older duplicate rows as superseded and keeps the latest row open.",
    )
    add(
        "public_note_duplicates",
        "Repeated non credentialed source notes",
        "warning" if app_note_duplicate_rows else "passed",
        len(app_note_duplicate_rows),
        f"{len(app_note_duplicate_rows)} Appfigures rows contain repeated non credentialed note text.",
        "Safe fix de-duplicates repeated note sentences without changing metrics.",
    )
    add(
        "hard_claims",
        "Source-linked statement confidence",
        "warning" if hard_claim_gaps else "passed",
        len(hard_claim_gaps),
        f"{len(hard_claim_gaps)} source-linked statements still have Low/Pending source confidence.",
        "Validate ownership, funding, user counts, AI and M&A statements before broader external use.",
    )
    add(
        "source_confidence",
        "Source audit confidence",
        "warning" if weak_sources else "passed",
        len(weak_sources),
        f"{len(weak_sources)} source-audit rows are Low/Pending.",
        "Upgrade only with stronger source review; do not auto-promote.",
    )

    severity_rank = {"pending": 3, "warning": 2, "passed": 1}
    overall = max(checks, key=lambda item: severity_rank.get(str(item["status"]), 0))["status"] if checks else "passed"
    return {
        "overall_status": overall,
        "checked_at": now_iso(),
        "summary": {
            "players": len(players),
            "key_players": len(key_players),
            "open_review_rows": len(open_reviews),
            "refresh_retry_rows": len(refresh_retries),
            "duplicate_review_groups": len(duplicate_groups),
            "proxy_note_duplicate_rows": len(app_note_duplicate_rows),
            "hard_claim_gaps": len(hard_claim_gaps),
            "weak_source_rows": len(weak_sources),
        },
        "checks": checks,
        "safe_fix_available": bool(duplicate_groups or app_note_duplicate_rows),
        "safe_fix_scope": "Only de-duplicates repeated non credentialed public source notes and marks older duplicate open refresh rows as superseded. It does not accept source changes, fill Appfigures metrics, or infer relationships.",
    }


def run_data_quality_safe_fix() -> dict[str, object]:
    app_path = HANDOFF / "appfigures-performance-export-integrated-v3.csv"
    app_rows = read_csv(app_path)
    app_fields = list(app_rows[0].keys()) if app_rows else APPFIGURES_FIELDS
    app_note_rows_fixed = 0
    for row in app_rows:
        original = str(row.get("public_proxy_notes", "")).strip()
        cleaned = dedupe_note_text(original)
        if cleaned != original:
            row["public_proxy_notes"] = cleaned
            app_note_rows_fixed += 1
    if app_rows:
        write_csv(app_path, app_rows, app_fields)

    review_path = HANDOFF / "review_queue_v3.csv"
    review_rows = read_csv(review_path)
    review_fields = list(review_rows[0].keys()) if review_rows else []
    duplicate_groups = review_duplicate_groups(review_rows)
    latest_ids = {int(item["latest_row_id"]) for item in duplicate_groups}
    duplicate_keys = {str(item["key"]) for item in duplicate_groups}
    review_rows_superseded = 0
    for index, row in enumerate(review_rows):
        if index in latest_ids:
            continue
        if review_group_key(row) not in duplicate_keys:
            continue
        if row.get("review_status", "").strip().lower() not in ("", "open", "pending human review"):
            continue
        note = row.get("notes", "").strip()
        row["review_status"] = "Superseded by latest refresh"
        row["confidence"] = "Superseded duplicate"
        row["notes"] = (
            f"{note} " if note else ""
        ) + "Older duplicate open refresh row; latest row remains open for human review."
        review_rows_superseded += 1
    if review_rows and review_rows_superseded:
        write_csv(review_path, review_rows, review_fields)

    sync_sqlite()
    result = {
        "app_proxy_note_rows_fixed": app_note_rows_fixed,
        "review_rows_superseded": review_rows_superseded,
        "remaining": data_quality_report()["summary"],
    }
    log_operation("data_quality_safe_fix", "ok", result)
    return result


def normalize_appfigures_row(row: dict[str, str], credentialed: bool) -> dict[str, str]:
    lower = {str(key).strip().lower(): str(value or "") for key, value in row.items()}
    out: dict[str, str] = {}
    for target in APPFIGURES_FIELDS:
        out[target] = ""
    for target, aliases in APPFIGURES_ALIASES.items():
        for alias in aliases:
            if alias.lower() in lower:
                out[target] = lower[alias.lower()]
                break
    out["source_date"] = out.get("source_date") or str(datetime.now().date())
    out["confidence"] = "High" if credentialed else "Medium"
    out["appfigures_status"] = (
        "Credentialed Appfigures export imported"
        if credentialed
        else "Imported export; credential status not confirmed"
    )
    out["public_proxy_notes"] = ""
    out["public_proxy_source_url"] = ""
    return out


def import_appfigures(csv_text: str, credentialed: bool) -> dict[str, object]:
    incoming_raw = list(csv.DictReader(io.StringIO(csv_text)))
    if credentialed:
        proxy_rows = [index + 2 for index, row in enumerate(incoming_raw) if row_contains_proxy_signal(row)]
        if proxy_rows:
            raise ValueError(
                "Credentialed Appfigures import rejected: remove public store estimates or pending Appfigures rows first. "
                f"Problem rows: {', '.join(map(str, proxy_rows[:12]))}"
            )
    incoming = [normalize_appfigures_row(row, credentialed) for row in incoming_raw]
    existing = read_csv(HANDOFF / "appfigures-performance-export-integrated-v3.csv")
    keys = {
        (
            row.get("player", ""),
            row.get("app_name", ""),
            row.get("platform", ""),
            row.get("country", ""),
        )
        for row in incoming
    }
    merged = [
        row
        for row in existing
        if (
            row.get("player", ""),
            row.get("app_name", ""),
            row.get("platform", ""),
            row.get("country", ""),
        )
        not in keys
    ]
    merged.extend(incoming)
    write_csv(HANDOFF / "appfigures-performance-export-integrated-v3.csv", merged, APPFIGURES_FIELDS)
    live_result: dict[str, object] = {"status": "skipped", "reason": "not credentialed"}
    if credentialed:
        BACKEND.mkdir(parents=True, exist_ok=True)
        temp_export = BACKEND / "latest-appfigures-import.csv"
        temp_export.write_text(csv_text, encoding="utf-8")
        python_bin = PYTHON_BIN if Path(PYTHON_BIN).exists() else sys.executable
        completed = subprocess.run(
            [
                python_bin,
                str(BASE / "scripts" / "import_licensed_metrics.py"),
                str(temp_export),
                "--source",
                "appfigures",
                "--credentialed",
            ],
            cwd=BASE,
            text=True,
            capture_output=True,
            check=False,
        )
        live_result = {
            "status": "ok" if completed.returncode == 0 else "failed",
            "stdout": completed.stdout.strip(),
            "stderr": completed.stderr.strip(),
        }
        if completed.returncode != 0:
            raise ValueError(f"Appfigures rows imported to handoff, but live override import failed: {completed.stderr.strip()}")
    sync_sqlite()
    log_operation("appfigures_import", "ok", {"rows": len(incoming), "credentialed": credentialed, "live_overrides": live_result})
    return {"imported_rows": len(incoming), "credentialed": credentialed, "target_rows": len(merged), "live_overrides": live_result}


def update_review_status(row_id: int, status: str, notes: str = "", owner: str = "") -> dict[str, object]:
    path = HANDOFF / "review_queue_v3.csv"
    rows = read_csv(path)
    if row_id < 0 or row_id >= len(rows):
        raise ValueError("review row_id out of range")
    fields = list(rows[0].keys()) if rows else []
    rows[row_id]["review_status"] = status
    if owner:
        rows[row_id]["owner_placeholder"] = owner
    if notes:
        rows[row_id]["notes"] = notes
    write_csv(path, rows, fields)
    sync_sqlite()
    log_operation("review_queue_update", "ok", {"row_id": row_id, "review_status": status})
    return {"row_id": row_id, "review_status": status, "open_review_queue": len(source_review_rows(rows))}


def update_relationship(payload: dict[str, object]) -> dict[str, object]:
    path = HANDOFF / "relationships_template_v3.csv"
    rows = read_csv(path)
    if not rows:
        raise ValueError("relationships_template_v3.csv is empty")
    row_id_raw = payload.get("row_id")
    if row_id_raw in ("", None):
        player_id = str(payload.get("player_id", "")).strip()
        matches = [index for index, row in enumerate(rows) if row.get("player_id") == player_id]
        if not matches:
            raise ValueError("player_id not found in relationships template")
        row_id = matches[0]
    else:
        row_id = int(row_id_raw)
    if row_id < 0 or row_id >= len(rows):
        raise ValueError("relationship row_id out of range")
    editable = [
        "confirmed_owner",
        "confirmed_relationship",
        "relationship_status",
        "sensitivity",
        "last_contact_date",
        "suggested_next_step",
        "notes",
    ]
    for field in editable:
        value = payload.get(field)
        if value not in (None, ""):
            rows[row_id][field] = str(value)
    fields = list(rows[0].keys())
    write_csv(path, rows, fields)
    sync_sqlite()
    log_operation("relationship_update", "ok", {"row_id": row_id, "player_id": rows[row_id].get("player_id")})
    return {"row_id": row_id, "player_id": rows[row_id].get("player_id"), "player_name": rows[row_id].get("player_name")}


def run_command(action: str, cmd: list[str], timeout: int = 240) -> dict[str, object]:
    with job_lock:
        started = time.time()
        try:
            result = subprocess.run(
                cmd,
                cwd=BASE,
                text=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                timeout=timeout,
                env={**os.environ, "PYTHON_BIN": PYTHON_BIN, "NODE_BIN": NODE_BIN},
            )
            detail = {
                "returncode": result.returncode,
                "stdout_tail": result.stdout[-3000:],
                "stderr_tail": result.stderr[-3000:],
                "duration_seconds": round(time.time() - started, 1),
            }
            status = "ok" if result.returncode == 0 else "failed"
            log_operation(action, status, detail)
            if result.returncode == 0:
                sync_sqlite()
            return detail | {"status": status}
        except subprocess.TimeoutExpired as exc:
            detail = {
                "status": "timeout",
                "duration_seconds": round(time.time() - started, 1),
                "stdout_tail": (exc.stdout or "")[-3000:] if isinstance(exc.stdout, str) else "",
                "stderr_tail": (exc.stderr or "")[-3000:] if isinstance(exc.stderr, str) else "",
            }
            log_operation(action, "timeout", detail)
            return detail


def refresh_sources() -> dict[str, object]:
    return run_command("refresh_sources", [PYTHON_BIN, "scripts/refresh_public_sources.py"], timeout=240)


def rebuild_outputs() -> dict[str, object]:
    commands = [
        [PYTHON_BIN, "scripts/apply_validation_pass_v3_2_1.py"],
        [PYTHON_BIN, "scripts/apply_final_board_gates_v3_6.py"],
        [PYTHON_BIN, "scripts/apply_market_story_final_v3_7.py"],
        [PYTHON_BIN, "scripts/write_data_quality_check.py"],
        [PYTHON_BIN, "scripts/build_presend_report_v3_5.py"],
        [NODE_BIN, "scripts/render_presend_report_pdf.mjs"],
        [NODE_BIN, "scripts/build_workbook.mjs"],
    ]
    with job_lock:
        started = time.time()
        logs = []
        for cmd in commands:
            result = subprocess.run(
                cmd,
                cwd=BASE,
                text=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                timeout=300,
                env={**os.environ, "PYTHON_BIN": PYTHON_BIN, "NODE_BIN": NODE_BIN},
            )
            logs.append(
                {
                    "cmd": " ".join(cmd),
                    "returncode": result.returncode,
                    "stdout_tail": result.stdout[-1200:],
                    "stderr_tail": result.stderr[-1200:],
                }
            )
            if result.returncode != 0:
                detail = {"status": "failed", "logs": logs, "duration_seconds": round(time.time() - started, 1)}
                log_operation("rebuild_outputs", "failed", detail)
                return detail
        (DELIVERABLES).mkdir(parents=True, exist_ok=True)
        shutil.copy2(BASE / "report" / "Yousician Strategic Environment Mapping - Market Landscape Report v3.9.pdf", DELIVERABLES)
        shutil.copy2(BASE / "Yousician Strategic Environment Database v3.9.xlsx", DELIVERABLES)
        if DECK_SCRIPT.exists():
            deck = subprocess.run(
                [NODE_BIN, str(DECK_SCRIPT)],
                cwd=ROOT,
                text=True,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                timeout=300,
            )
            logs.append(
                {
                    "cmd": f"{NODE_BIN} {DECK_SCRIPT}",
                    "returncode": deck.returncode,
                    "stdout_tail": deck.stdout[-1200:],
                    "stderr_tail": deck.stderr[-1200:],
                }
            )
            if deck.returncode == 0:
                deck_path = FINAL_DELIVERABLES / "Yousician Strategic Environment Executive Summary v3.9.pptx"
                contact_path = FINAL_DELIVERABLES / "executive_summary_deck_contact_sheet_v3.9.png"
                if deck_path.exists():
                    shutil.copy2(deck_path, DELIVERABLES)
                if contact_path.exists():
                    shutil.copy2(contact_path, DELIVERABLES)
        deck_pdf = subprocess.run(
            [PYTHON_BIN, "scripts/build_deck_pdf.py"],
            cwd=BASE,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=120,
            env={**os.environ, "PYTHON_BIN": PYTHON_BIN, "NODE_BIN": NODE_BIN},
        )
        logs.append(
            {
                "cmd": f"{PYTHON_BIN} scripts/build_deck_pdf.py",
                "returncode": deck_pdf.returncode,
                "stdout_tail": deck_pdf.stdout[-1200:],
                "stderr_tail": deck_pdf.stderr[-1200:],
            }
        )
        if deck_pdf.returncode != 0:
            detail = {"status": "failed", "logs": logs, "duration_seconds": round(time.time() - started, 1)}
            log_operation("rebuild_outputs", "failed", detail)
            return detail
        deck_pdf_path = FINAL_DELIVERABLES / "Yousician Strategic Environment Executive Summary v3.9.pdf"
        if deck_pdf_path.exists():
            shutil.copy2(deck_pdf_path, DELIVERABLES)
        export_pdfs = subprocess.run(
            [NODE_BIN, "scripts/render_export_pdfs.mjs"],
            cwd=BASE,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=300,
            env={**os.environ, "PYTHON_BIN": PYTHON_BIN, "NODE_BIN": NODE_BIN},
        )
        logs.append(
            {
                "cmd": f"{NODE_BIN} scripts/render_export_pdfs.mjs",
                "returncode": export_pdfs.returncode,
                "stdout_tail": export_pdfs.stdout[-1200:],
                "stderr_tail": export_pdfs.stderr[-1200:],
            }
        )
        if export_pdfs.returncode != 0:
            detail = {"status": "failed", "logs": logs, "duration_seconds": round(time.time() - started, 1)}
            log_operation("rebuild_outputs", "failed", detail)
            return detail
        sync_sqlite()
        detail = {"status": "ok", "logs": logs, "duration_seconds": round(time.time() - started, 1)}
        log_operation("rebuild_outputs", "ok", detail)
        return detail


def package_outputs() -> dict[str, object]:
    with job_lock:
        started = time.time()
        result = subprocess.run(
            [PYTHON_BIN, "scripts/package_presend_v3_5.py"],
            cwd=BASE,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=300,
            env={**os.environ, "PYTHON_BIN": PYTHON_BIN, "NODE_BIN": NODE_BIN},
        )
        final_zip = FINAL_DELIVERABLES / "Yousician Strategic Environment Mapping Package.zip"
        submission_zip = FINAL_DELIVERABLES / "Yousician Strategic Environment Mapping - Submission Package.zip"
        optional_zip = FINAL_DELIVERABLES / "Yousician Strategic Environment Mapping - Optional Appendix.zip"
        recipient_dir = FINAL_DELIVERABLES / "00_SEND_TO_RECIPIENT"
        dashboard_zip = FINAL_DELIVERABLES / "yousician-strategic-environment-dashboard-v3.9.zip"
        detail = {
            "status": "ok" if result.returncode == 0 else "failed",
            "dashboard_zip": str(dashboard_zip),
            "final_zip": str(final_zip),
            "submission_zip": str(submission_zip),
            "optional_zip": str(optional_zip),
            "recipient_dir": str(recipient_dir),
            "duration_seconds": round(time.time() - started, 1),
            "stdout_tail": result.stdout[-1200:],
            "stderr_tail": result.stderr[-1200:],
        }
        log_operation("package_outputs", detail["status"], detail)
        return detail


def run_refresh_cycle() -> dict[str, object]:
    started = time.time()
    refresh_result = refresh_sources()
    rebuild_result = rebuild_outputs()
    package_result = package_outputs()
    status = "ok"
    if any(result.get("status") not in ("ok", None) for result in [refresh_result, rebuild_result, package_result]):
        status = "failed"
    detail = {
        "status": status,
        "duration_seconds": round(time.time() - started, 1),
        "refresh": refresh_result,
        "rebuild": rebuild_result,
        "package": package_result,
        "review_gate": "Public source changes are staged in the review queue; no new market claim is auto-promoted.",
    }
    log_operation("refresh_cycle", status, detail)
    return detail


def scheduler_loop(interval_minutes: int) -> None:
    while True:
        with scheduler_lock:
            if not scheduler_state["enabled"]:
                return
            mode = str(scheduler_state.get("mode") or "refresh_only")
            scheduler_state["next_run"] = datetime.fromtimestamp(time.time() + interval_minutes * 60, timezone.utc).isoformat(timespec="seconds")
        time.sleep(interval_minutes * 60)
        with scheduler_lock:
            if not scheduler_state["enabled"]:
                return
            mode = str(scheduler_state.get("mode") or mode)
        result = run_refresh_cycle() if mode == "full_cycle" else refresh_sources()
        with scheduler_lock:
            scheduler_state["last_run"] = now_iso()
        log_operation("scheduled_refresh", result.get("status", "unknown"), {"mode": mode, "result": result})


def set_scheduler(enabled: bool, interval_minutes: int = 60, mode: str = "refresh_only") -> dict[str, object]:
    interval_minutes = max(5, int(interval_minutes or 60))
    mode = "full_cycle" if mode == "full_cycle" else "refresh_only"
    with scheduler_lock:
        scheduler_state["enabled"] = enabled
        scheduler_state["interval_minutes"] = interval_minutes if enabled else None
        scheduler_state["mode"] = mode if enabled else "refresh_only"
        scheduler_state["last_run"] = scheduler_state.get("last_run")
        scheduler_state["next_run"] = datetime.fromtimestamp(time.time() + interval_minutes * 60, timezone.utc).isoformat(timespec="seconds") if enabled else None
    if enabled:
        thread = threading.Thread(target=scheduler_loop, args=(interval_minutes,), daemon=True)
        thread.start()
    log_operation("scheduler_update", "ok", dict(scheduler_state))
    return dict(scheduler_state)


class BackendHandler(SimpleHTTPRequestHandler):
    server_version = "YousicianBackend/1.0"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def send_json(self, payload: object, status: HTTPStatus = HTTPStatus.OK) -> None:
        data = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def read_json(self) -> dict[str, object]:
        length = int(self.headers.get("Content-Length", "0"))
        if length <= 0:
            return {}
        raw = self.rfile.read(length)
        return json.loads(raw.decode("utf-8"))

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/backend/status":
            self.send_json({"ok": True, "status": backend_status()})
            return
        if parsed.path == "/api/backend/review-queue":
            query = parse_qs(parsed.query)
            rows = row_with_ids(read_csv(HANDOFF / "review_queue_v3.csv"))
            if query.get("open", ["0"])[0] == "1":
                rows = [row for row in rows if row.get("review_status", "").strip().lower() in ("", "open", "pending human review")]
            self.send_json({"ok": True, "rows": rows})
            return
        if parsed.path == "/api/backend/relationships":
            self.send_json({"ok": True, "rows": row_with_ids(read_csv(HANDOFF / "relationships_template_v3.csv"))})
            return
        if parsed.path == "/api/backend/appfigures":
            self.send_json({"ok": True, "rows": row_with_ids(read_csv(HANDOFF / "appfigures-performance-export-integrated-v3.csv"))})
            return
        if parsed.path == "/api/backend/data-quality":
            self.send_json({"ok": True, "data_quality": data_quality_report()})
            return
        return super().do_GET()

    def do_POST(self) -> None:
        try:
            parsed = urlparse(self.path)
            payload = self.read_json()
            if parsed.path == "/api/backend/review-queue/status":
                result = update_review_status(
                    int(payload.get("row_id", -1)),
                    str(payload.get("review_status", "pending human review")),
                    str(payload.get("notes", "")),
                    str(payload.get("owner_placeholder", "")),
                )
                self.send_json({"ok": True, "result": result, "status": backend_status()})
                return
            if parsed.path == "/api/backend/relationships/update":
                result = update_relationship(payload)
                self.send_json({"ok": True, "result": result, "status": backend_status()})
                return
            if parsed.path == "/api/backend/appfigures/import":
                csv_text = str(payload.get("csv_text", ""))
                if not csv_text.strip():
                    raise ValueError("csv_text is required")
                result = import_appfigures(csv_text, bool(payload.get("credentialed", True)))
                self.send_json({"ok": True, "result": result, "status": backend_status()})
                return
            if parsed.path == "/api/backend/refresh":
                self.send_json({"ok": True, "result": refresh_sources(), "status": backend_status()})
                return
            if parsed.path == "/api/backend/run-cycle":
                self.send_json({"ok": True, "result": run_refresh_cycle(), "status": backend_status()})
                return
            if parsed.path == "/api/backend/rebuild":
                self.send_json({"ok": True, "result": rebuild_outputs(), "status": backend_status()})
                return
            if parsed.path == "/api/backend/package":
                self.send_json({"ok": True, "result": package_outputs(), "status": backend_status()})
                return
            if parsed.path == "/api/backend/data-quality/fix":
                self.send_json(
                    {
                        "ok": True,
                        "result": run_data_quality_safe_fix(),
                        "data_quality": data_quality_report(),
                        "status": backend_status(),
                    }
                )
                return
            if parsed.path == "/api/backend/scheduler":
                self.send_json(
                    {
                        "ok": True,
                        "scheduler": set_scheduler(
                            bool(payload.get("enabled", False)),
                            int(payload.get("interval_minutes", 60) or 60),
                            str(payload.get("mode", "refresh_only")),
                        ),
                        "status": backend_status(),
                    }
                )
                return
            self.send_json({"ok": False, "error": "Unknown backend endpoint"}, HTTPStatus.NOT_FOUND)
        except Exception as exc:  # noqa: BLE001 - API should return readable local errors.
            log_operation("api_error", "failed", {"path": self.path, "error": str(exc)})
            self.send_json({"ok": False, "error": str(exc)}, HTTPStatus.BAD_REQUEST)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", default=8877, type=int)
    parser.add_argument("--auto-refresh-minutes", type=int, default=0)
    parser.add_argument("--auto-refresh-mode", choices=["refresh_only", "full_cycle"], default="refresh_only")
    args = parser.parse_args()

    sync_sqlite()
    if args.auto_refresh_minutes:
        set_scheduler(True, args.auto_refresh_minutes, args.auto_refresh_mode)
    server = ReusableThreadingHTTPServer((args.host, args.port), BackendHandler)
    print(f"Yousician backend running at http://{args.host}:{args.port}/")
    print(f"Serving: {BASE}")
    print("API: /api/backend/status")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        set_scheduler(False)
        server.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
