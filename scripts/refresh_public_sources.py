#!/usr/bin/env python3
"""Refresh public source watchlist and write a review queue.

This script intentionally does not promote new facts into the final report.
It checks watched public URLs, detects status/content changes, and writes
review items for a human to approve before board-ready outputs are rebuilt.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
CONFIG = BASE / "config"
DATA = BASE / "data"
RUNS = BASE / "refresh_runs"

WATCHLIST = CONFIG / "source-watchlist-v3.csv"
STATE = DATA / "refresh-state.json"
REVIEW_QUEUE = HANDOFF / "review_queue_v3.csv"
RUN_LOG = HANDOFF / "refresh_run_log_v3.csv"


QUEUE_FIELDS = [
    "run_id",
    "detected_at",
    "watch_id",
    "source_name",
    "source_url",
    "claim_area",
    "change_type",
    "previous_status",
    "current_status",
    "previous_hash",
    "current_hash",
    "observed_title",
    "suggested_action",
    "confidence",
    "review_status",
    "owner_placeholder",
    "notes",
]

LOG_FIELDS = [
    "run_id",
    "checked_at",
    "watch_id",
    "source_name",
    "source_url",
    "claim_area",
    "http_status",
    "content_hash",
    "content_length",
    "observed_title",
    "change_type",
    "error",
]


def read_csv(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_csv(path: Path, rows: list[dict[str, object]], fields: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def append_csv(path: Path, rows: list[dict[str, object]], fields: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    exists = path.exists()
    with path.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        if not exists:
            writer.writeheader()
        writer.writerows(rows)


def load_state() -> dict[str, dict[str, object]]:
    if not STATE.exists():
        return {}
    with STATE.open(encoding="utf-8") as f:
        raw = json.load(f)
    return raw.get("sources", {})


def save_state(state: dict[str, dict[str, object]]) -> None:
    DATA.mkdir(parents=True, exist_ok=True)
    with STATE.open("w", encoding="utf-8") as f:
        json.dump(
            {
                "updated_at": datetime.now(timezone.utc).isoformat(),
                "policy": "Public refresh detects changes only. Claims require human review before final outputs.",
                "sources": state,
            },
            f,
            indent=2,
            sort_keys=True,
        )


def bootstrap_watchlist(limit: int = 80) -> None:
    if WATCHLIST.exists():
        return
    source_rows = read_csv(HANDOFF / "source_audit_v3.csv")
    out: list[dict[str, object]] = []
    for row in source_rows:
        url = row.get("url", "").strip()
        if not url.startswith("http"):
            continue
        confidence = row.get("source_confidence", "")
        if confidence == "Low":
            continue
        out.append(
            {
                "watch_id": row.get("source_id", "") or hashlib.sha1(url.encode()).hexdigest()[:12],
                "source_name": row.get("title", ""),
                "source_url": url,
                "claim_area": row.get("used_in", "market monitoring"),
                "refresh_cadence": "weekly",
                "review_priority": "High" if confidence == "High" else "Medium",
                "owner_placeholder": "Yousician research owner TBD",
                "notes": "Bootstrapped from source_audit_v3.csv",
            }
        )
        if len(out) >= limit:
            break
    write_csv(
        WATCHLIST,
        out,
        [
            "watch_id",
            "source_name",
            "source_url",
            "claim_area",
            "refresh_cadence",
            "review_priority",
            "owner_placeholder",
            "notes",
        ],
    )


def normalize_content(blob: bytes, content_type: str) -> tuple[str, str]:
    text = blob.decode("utf-8", errors="ignore")
    title = ""
    if "html" in content_type.lower() or "<html" in text.lower():
        match = re.search(r"<title[^>]*>(.*?)</title>", text, flags=re.I | re.S)
        if match:
            title = re.sub(r"\s+", " ", match.group(1)).strip()
        text = re.sub(r"<script.*?</script>", " ", text, flags=re.I | re.S)
        text = re.sub(r"<style.*?</style>", " ", text, flags=re.I | re.S)
        text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    digest = hashlib.sha256(text[:250_000].encode("utf-8", errors="ignore")).hexdigest()
    return digest, title


def fetch(url: str, timeout: int) -> dict[str, object]:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": "YousicianStrategicEnvironmentRefresh/3.1 (+human-reviewed-market-intelligence)",
            "Accept": "text/html,application/xhtml+xml,application/xml,application/pdf;q=0.9,*/*;q=0.8",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            status = getattr(response, "status", 200)
            content_type = response.headers.get("content-type", "")
            blob = response.read(700_000)
            digest, title = normalize_content(blob, content_type)
            return {
                "http_status": str(status),
                "content_hash": digest,
                "content_length": str(len(blob)),
                "observed_title": title,
                "error": "",
            }
    except urllib.error.HTTPError as exc:
        return {
            "http_status": str(exc.code),
            "content_hash": "",
            "content_length": "0",
            "observed_title": "",
            "error": str(exc),
        }
    except Exception as exc:
        return {
            "http_status": "ERROR",
            "content_hash": "",
            "content_length": "0",
            "observed_title": "",
            "error": str(exc),
        }


def detect_change(previous: dict[str, object] | None, current: dict[str, object]) -> str:
    if previous is None:
        return "new_source"
    if str(previous.get("http_status", "")) != str(current.get("http_status", "")):
        return "status_change"
    if current.get("error"):
        return "fetch_error"
    if current.get("content_hash") and previous.get("content_hash") != current.get("content_hash"):
        return "content_change"
    return "no_change"


def build_suggested_action(change_type: str) -> str:
    if change_type == "new_source":
        return "Review baseline source and confirm whether it supports an existing claim."
    if change_type == "status_change":
        return "Check source availability; replace source if the claim is no longer supported."
    if change_type == "content_change":
        return "Review page change and decide whether any market move, metric, deadline or source note must be updated."
    if change_type == "fetch_error":
        return "Retry manually or replace with a stable official source."
    return "No action."


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--timeout", type=int, default=12)
    parser.add_argument("--max-sources", type=int, default=80)
    parser.add_argument("--sleep", type=float, default=0.15)
    parser.add_argument("--baseline", action="store_true", help="Initialize source state without opening review items for first-seen sources")
    args = parser.parse_args()

    bootstrap_watchlist(limit=args.max_sources)
    watch_rows = read_csv(WATCHLIST)[: args.max_sources]
    state = load_state()
    run_id = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    checked_at = datetime.now(timezone.utc).isoformat()
    log_rows: list[dict[str, object]] = []
    queue_rows: list[dict[str, object]] = []

    for watch in watch_rows:
        watch_id = watch.get("watch_id", "").strip()
        url = watch.get("source_url", "").strip()
        if not watch_id or not url:
            continue
        current = fetch(url, args.timeout)
        previous = state.get(watch_id)
        change_type = detect_change(previous, current)
        if args.baseline and change_type == "new_source":
            change_type = "baseline_source"
        log_rows.append(
            {
                "run_id": run_id,
                "checked_at": checked_at,
                "watch_id": watch_id,
                "source_name": watch.get("source_name", ""),
                "source_url": url,
                "claim_area": watch.get("claim_area", ""),
                "http_status": current.get("http_status", ""),
                "content_hash": current.get("content_hash", ""),
                "content_length": current.get("content_length", ""),
                "observed_title": current.get("observed_title", ""),
                "change_type": change_type,
                "error": current.get("error", ""),
            }
        )
        if change_type not in ("no_change", "baseline_source"):
            queue_rows.append(
                {
                    "run_id": run_id,
                    "detected_at": checked_at,
                    "watch_id": watch_id,
                    "source_name": watch.get("source_name", ""),
                    "source_url": url,
                    "claim_area": watch.get("claim_area", ""),
                    "change_type": change_type,
                    "previous_status": (previous or {}).get("http_status", ""),
                    "current_status": current.get("http_status", ""),
                    "previous_hash": (previous or {}).get("content_hash", ""),
                    "current_hash": current.get("content_hash", ""),
                    "observed_title": current.get("observed_title", ""),
                    "suggested_action": build_suggested_action(change_type),
                    "confidence": "Pending human review",
                    "review_status": "Open",
                    "owner_placeholder": watch.get("owner_placeholder", "Yousician owner TBD"),
                    "notes": current.get("error", ""),
                }
            )
        if not current.get("error"):
            state[watch_id] = {
                "source_url": url,
                "http_status": current.get("http_status", ""),
                "content_hash": current.get("content_hash", ""),
                "observed_title": current.get("observed_title", ""),
                "last_checked_at": checked_at,
            }
        time.sleep(args.sleep)

    existing_queue = read_csv(REVIEW_QUEUE)
    queue_key = {(r.get("watch_id"), r.get("current_hash"), r.get("change_type")) for r in existing_queue}
    merged_queue = existing_queue[:]
    for row in queue_rows:
        key = (str(row.get("watch_id")), str(row.get("current_hash")), str(row.get("change_type")))
        if key not in queue_key:
            merged_queue.append(row)
    write_csv(REVIEW_QUEUE, merged_queue, QUEUE_FIELDS)
    append_csv(RUN_LOG, log_rows, LOG_FIELDS)
    RUNS.mkdir(parents=True, exist_ok=True)
    write_csv(RUNS / f"refresh_run_{run_id}.csv", log_rows, LOG_FIELDS)
    save_state(state)

    print(json.dumps({"run_id": run_id, "checked": len(log_rows), "new_review_items": len(queue_rows), "review_queue_total": len(merged_queue)}, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())
