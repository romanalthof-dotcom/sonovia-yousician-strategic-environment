#!/usr/bin/env python3
"""Import licensed or internal metric exports into data/live-overrides.json.

This is the persistent counterpart to the browser importer. It accepts only
credentialed/authorized exports or approved direct sources and ignores public
proxy/estimate rows instead of promoting them to executive metrics.
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
from collections import defaultdict
from datetime import date
from pathlib import Path
from typing import Any


BASE = Path(__file__).resolve().parents[1]
APP_JS = BASE / "app.js"
DATA = BASE / "data"
LIVE_OVERRIDES = DATA / "live-overrides.json"
TEMPLATE = DATA / "licensed-metrics-template.csv"

TEMPLATE_FIELDS = [
    "player_id",
    "player",
    "app_name",
    "developer",
    "source_type",
    "data_source",
    "credentialed",
    "source_date",
    "downloads_30d",
    "downloads_90d",
    "downloads_365d",
    "revenue_30d",
    "revenue_90d",
    "revenue_365d",
    "website_visits_30d",
    "rank_current",
    "rank_30d_avg",
    "rating",
    "review_count",
    "review_velocity_90d",
    "top_countries",
    "notes",
]

ALIASES = {
    "player_id": ["player_id", "playerid", "id", "record_id"],
    "player": ["player", "company", "company_name", "publisher", "organization", "organisation"],
    "app_name": ["app_name", "app", "name", "product", "title"],
    "developer": ["developer", "seller", "publisher_name", "vendor"],
    "source_type": ["source_type", "source type", "evidence_type", "feed_type", "feed"],
    "data_source": ["data_source", "data source", "source", "provider", "origin"],
    "credentialed": ["credentialed", "authorized", "licensed", "verified", "is_credentialed"],
    "source_date": ["source_date", "date", "export_date", "as_of", "as_of_date"],
    "downloads_30d": ["downloads_30d", "downloads_last_30_days", "downloads 30d", "downloads30d"],
    "downloads_90d": ["downloads_90d", "downloads_last_90_days", "downloads 90d", "downloads90d"],
    "downloads_365d": ["downloads_365d", "downloads_last_365_days", "downloads 365d", "downloads_1y", "downloads"],
    "revenue_30d": ["revenue_30d", "revenue_last_30_days", "revenue 30d", "revenue30d"],
    "revenue_90d": ["revenue_90d", "revenue_last_90_days", "revenue 90d", "revenue90d"],
    "revenue_365d": ["revenue_365d", "revenue_last_365_days", "revenue 365d", "revenue_1y", "revenue"],
    "website_visits_30d": ["website_visits_30d", "websiteVisits_30d", "website_visits", "websiteVisits", "visits", "traffic"],
    "rank_current": ["rank_current", "current_rank", "rank", "categoryRank", "category_rank"],
    "rank_30d_avg": ["rank_30d_avg", "avg_rank_30d", "average_rank_30d"],
    "rating": ["rating", "average_rating", "avg_rating"],
    "review_count": ["review_count", "ratings", "reviews", "rating_count"],
    "review_velocity_90d": ["review_velocity_90d", "reviews_90d", "rating_velocity_90d"],
    "top_countries": ["top_countries", "country_mix", "top_markets"],
    "notes": ["notes", "note", "comment", "comments"],
}

SUM_FIELDS = ["downloads_30d", "downloads_90d", "downloads_365d", "revenue_30d", "revenue_90d", "revenue_365d"]
MAX_FIELDS = ["website_visits_30d", "review_count", "review_velocity_90d"]
MIN_FIELDS = ["rank_current", "rank_30d_avg"]
NUMERIC_FIELDS = SUM_FIELDS + MAX_FIELDS + MIN_FIELDS + ["rating"]

PROXY_RE = re.compile(
    r"public\s+proxy|proxy\s+only|not\s+appfigures|pending\s+appfigures|"
    r"credentialed\s+export\s+not\s+available|public\s+app\s+store|google\s+play\s+public|"
    r"estimate|estimated|estimation",
    re.I,
)


def key(value: str) -> str:
    return re.sub(r"(^_+|_+$)", "", re.sub(r"[^a-z0-9]+", "_", str(value or "").strip().lower()))


def source_key(value: str) -> str:
    return re.sub(r"(^_+|_+$)", "", re.sub(r"[^a-z0-9]+", "_", str(value or "").strip().lower()))


def parse_players() -> list[dict[str, str]]:
    text = APP_JS.read_text(encoding="utf-8")
    block_match = re.search(r"const players = \[(.*?)]\s*;", text, re.S)
    if not block_match:
        raise RuntimeError("Could not find players array in app.js")
    block = block_match.group(1)
    players: list[dict[str, str]] = []
    for obj in re.finditer(r"\{\s*id:\s*\"([^\"]+)\".*?name:\s*\"([^\"]+)\"", block, re.S):
        players.append({"id": obj.group(1), "name": obj.group(2)})
    return players


def read_rows(path: Path) -> list[dict[str, str]]:
    if path.suffix.lower() == ".json":
        data = json.loads(path.read_text(encoding="utf-8"))
        if isinstance(data, list):
            return data
        if isinstance(data, dict) and isinstance(data.get("rows"), list):
            return data["rows"]
        if isinstance(data, dict) and isinstance(data.get("metricsByPlayer"), dict):
            return list(data["metricsByPlayer"].values())
        raise RuntimeError("JSON must be an array, {rows: [...]}, or {metricsByPlayer: {...}}")
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def normalize_row(raw: dict[str, Any]) -> dict[str, str]:
    lowered = {key(k): "" if v is None else str(v).strip() for k, v in raw.items()}
    row = dict(lowered)
    for target, aliases in ALIASES.items():
        if row.get(target):
            continue
        for alias in aliases:
            value = lowered.get(key(alias), "")
            if value:
                row[target] = value
                break
        row.setdefault(target, "")
    return row


def metric_text(row: dict[str, Any]) -> str:
    return " ".join(str(value or "") for value in row.values())


def source_type_for(row: dict[str, str], file_name: str, forced_source: str = "") -> str:
    text = " ".join([forced_source, row.get("source_type", ""), row.get("data_source", ""), row.get("credentialed", ""), file_name])
    if re.search(r"similarweb", text, re.I):
        return "similarweb export"
    if re.search(r"crunchbase", text, re.I):
        return "crunchbase export"
    if re.search(r"pitchbook", text, re.I):
        return "pitchbook export"
    if re.search(r"official\s+filing|annual\s+report|10-k|form\s+20-f|company\s+filing", text, re.I):
        return "official filing"
    if re.search(r"internal\s+export|internal\s+metric|finance|kpi|looker|data\s+warehouse", text, re.I):
        return "internal metric"
    if re.search(r"appfigures|authorized\s+export|credentialed|licensed", text, re.I):
        return "credentialed appfigures export"
    return ""


def parse_number(value: Any) -> float | None:
    if value is None or value == "":
        return None
    raw = str(value).strip()
    if not raw or PROXY_RE.search(raw):
        return None
    match = re.search(r"-?\d+(?:\.\d+)?", raw.replace(",", ""))
    if not match:
        return None
    number = float(match.group(0))
    if re.search(r"bn|billion|\bb\b", raw, re.I):
        number *= 1_000_000_000
    elif re.search(r"mio|million|\bm\b", raw, re.I):
        number *= 1_000_000
    elif re.search(r"k\b|thousand", raw, re.I):
        number *= 1_000
    return number


def match_player(row: dict[str, str], players: list[dict[str, str]]) -> dict[str, str] | None:
    explicit = source_key(row.get("player_id", ""))
    scored: list[tuple[int, dict[str, str]]] = []
    for player in players:
        player_id = source_key(player["id"])
        player_name = source_key(player["name"])
        score = 0
        if explicit and explicit == player_id:
            score = 1000
        for candidate in [row.get("player", ""), row.get("app_name", ""), row.get("developer", "")]:
            candidate_key = source_key(candidate)
            if not candidate_key:
                continue
            if candidate_key == player_id:
                score = max(score, 900)
            if candidate_key == player_name:
                score = max(score, 850)
            if len(player_name) > 3 and player_name in candidate_key:
                score = max(score, 500 + len(player_name))
            if len(candidate_key) > 3 and candidate_key in player_name:
                score = max(score, 420 + len(candidate_key))
        if score:
            scored.append((score, player))
    scored.sort(key=lambda item: (item[0], len(item[1]["name"])), reverse=True)
    return scored[0][1] if scored else None


def merge_metric(target: dict[str, Any], field: str, value: float) -> bool:
    if field in SUM_FIELDS:
        target[field] = float(target.get(field) or 0) + value
    elif field in MAX_FIELDS:
        target[field] = max(float(target.get(field) or 0), value)
    elif field in MIN_FIELDS:
        existing = float(target.get(field) or 0)
        target[field] = min(existing, value) if existing > 0 else value
    elif field == "rating":
        target["_rating_sum"] = float(target.get("_rating_sum") or 0) + value
        target["_rating_count"] = int(target.get("_rating_count") or 0) + 1
        target["rating"] = round(target["_rating_sum"] / target["_rating_count"], 2)
    else:
        return False
    return True


def build_metrics(rows: list[dict[str, Any]], file_name: str, forced_source: str, players: list[dict[str, str]]) -> tuple[dict[str, Any], list[str]]:
    metrics: dict[str, dict[str, Any]] = {}
    ignored: list[str] = []
    for index, raw in enumerate(rows, start=2):
        row = normalize_row(raw)
        if not metric_text(row).strip():
            continue
        if PROXY_RE.search(metric_text(row)):
            ignored.append(f"row {index}: proxy or estimate text")
            continue
        source_type = source_type_for(row, file_name, forced_source)
        if not source_type:
            ignored.append(f"row {index}: no licensed source type")
            continue
        player = match_player(row, players)
        if not player:
            ignored.append(f"row {index}: player not matched")
            continue
        target = metrics.setdefault(
            player["id"],
            {
                "name": player["name"],
                "source": f"{source_type} / {file_name}",
                "data_source": row.get("data_source") or source_type,
                "source_type": source_type,
                "confidence": row.get("confidence") or "High",
                "status": f"{source_type} imported persistently",
                "appfigures_status": "Credentialed Appfigures export imported" if "appfigures" in source_type else "",
                "source_date": row.get("source_date") or str(date.today()),
                "lastUpdated": str(date.today()),
                "importedRows": 0,
                "notes": row.get("notes", ""),
            },
        )
        metric_count = 0
        for field in NUMERIC_FIELDS:
            value = parse_number(row.get(field))
            if value is not None and merge_metric(target, field, value):
                metric_count += 1
        if not metric_count:
            ignored.append(f"row {index}: no numeric metric")
            if not target["importedRows"]:
                metrics.pop(player["id"], None)
            continue
        target["importedRows"] += 1
        if row.get("top_countries"):
            target["top_countries"] = row["top_countries"]
    for metric in metrics.values():
        metric.pop("_rating_sum", None)
        metric.pop("_rating_count", None)
        if "website_visits_30d" in metric:
            metric["websiteVisits"] = metric["website_visits_30d"]
        if "review_count" in metric:
            metric["reviewCount"] = metric["review_count"]
        if "review_velocity_90d" in metric:
            metric["reviewVelocity"] = metric["review_velocity_90d"]
        if "rank_current" in metric:
            metric["categoryRank"] = metric["rank_current"]
        metric["source"] = f"{metric['source']}; {metric['importedRows']} row{'s' if metric['importedRows'] != 1 else ''}"
    return metrics, ignored


def write_template(players: list[dict[str, str]]) -> None:
    TEMPLATE.parent.mkdir(parents=True, exist_ok=True)
    with TEMPLATE.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(TEMPLATE_FIELDS)
        for player in players:
            writer.writerow(
                [
                    player["id"],
                    player["name"],
                    "",
                    "",
                    "credentialed appfigures export",
                    "Appfigures / Similarweb / Crunchbase / PitchBook / internal export",
                    "true",
                    str(date.today()),
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                ]
            )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("export_file", nargs="?", help="CSV or JSON licensed metric export")
    parser.add_argument("--source", default="", help="Force source family, e.g. appfigures, similarweb, internal")
    parser.add_argument("--credentialed", action="store_true", help="Assert the export is authorized/credentialed")
    parser.add_argument("--template", action="store_true", help="Write data/licensed-metrics-template.csv and exit")
    parser.add_argument("--dry-run", action="store_true", help="Validate and summarize without writing")
    parser.add_argument("--output", default=str(LIVE_OVERRIDES), help="Output live-overrides JSON path")
    args = parser.parse_args()

    players = parse_players()
    if args.template or not args.export_file:
        write_template(players)
        print(f"Template ready: {TEMPLATE}")
        if not args.export_file:
            print("Import example: python3 scripts/import_licensed_metrics.py appfigures.csv --source appfigures --credentialed")
            return 0

    if not args.credentialed and not args.source:
        print("Refusing import without --credentialed or --source. Public proxy metrics must not enter live overrides.", file=sys.stderr)
        return 2

    source_path = Path(args.export_file).expanduser().resolve()
    rows = read_rows(source_path)
    metrics, ignored = build_metrics(rows, source_path.name, args.source, players)
    if not metrics:
        print("No licensed metrics imported.", file=sys.stderr)
        for item in ignored[:12]:
            print(f"- {item}", file=sys.stderr)
        return 3

    print(f"Validated {len(metrics)} player metric override(s). Ignored {len(ignored)} row(s).")
    if args.dry_run:
        for player_id, metric in sorted(metrics.items()):
            print(f"- {player_id}: {metric.get('source_type')} / {metric.get('importedRows')} row(s)")
        return 0

    output = Path(args.output).expanduser().resolve()
    existing = json.loads(output.read_text(encoding="utf-8")) if output.exists() else {}
    existing.setdefault("schema", {})
    existing.setdefault("relationshipOverrides", {})
    existing["status"] = {
        **existing.get("status", {}),
        "label": "Live override layer ready",
        "lastUpdated": str(date.today()),
        "source": f"Licensed metric import: {source_path.name}",
        "caveat": "Revenue, downloads, traffic and rank fields come from credentialed/internal imports only; public proxy rows are ignored.",
    }
    existing["schema"]["licensedMetricImport"] = "metricsByPlayer generated by scripts/import_licensed_metrics.py"
    existing["metricsByPlayer"] = {**existing.get("metricsByPlayer", {}), **metrics}
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(existing, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Wrote {output}")
    if ignored:
        print("Ignored rows:")
        for item in ignored[:12]:
            print(f"- {item}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
