#!/usr/bin/env python3
"""Import a credentialed Appfigures CSV export into the v3 performance table.

The importer is intentionally conservative. It never fabricates missing metrics.
Use --credentialed only when the file came from an authorized Appfigures export.
"""

from __future__ import annotations

import argparse
import csv
import sys
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
TARGET = HANDOFF / "appfigures-performance-export-integrated-v3.csv"
TEMPLATE = HANDOFF / "appfigures_export_template_v3.csv"

FIELDS = [
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

ALIASES = {
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


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_csv(path: Path, rows: list[dict[str, object]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def normalize_headers(row: dict[str, str]) -> dict[str, str]:
    lower = {k.strip().lower(): v for k, v in row.items()}
    out: dict[str, str] = {}
    for target, aliases in ALIASES.items():
        out[target] = ""
        for alias in aliases:
            if alias.lower() in lower:
                out[target] = lower[alias.lower()]
                break
    return out


def row_contains_proxy_signal(row: dict[str, object]) -> bool:
    text = " ".join(str(value or "") for value in row.values()).lower()
    return any(
        token in text
        for token in [
            "public proxy",
            "proxy only",
            "not appfigures",
            "pending appfigures",
            "credentialed export not available",
        ]
    )


def make_template() -> None:
    if TEMPLATE.exists():
        return
    write_csv(
        TEMPLATE,
        [
            {
                "player": "Simply",
                "app_name": "Simply Guitar - Learn Guitar",
                "developer": "Simply Ltd",
                "platform": "iOS / Android",
                "app_store_id_or_package": "example only",
                "country": "US",
                "category": "Education",
                "downloads_30d": "",
                "downloads_90d": "",
                "downloads_365d": "",
                "revenue_30d": "",
                "revenue_90d": "",
                "revenue_365d": "",
                "rank_current": "",
                "rank_30d_avg": "",
                "rank_365d_trend": "",
                "rating": "",
                "review_count": "",
                "review_velocity_90d": "",
                "top_countries": "",
                "source_date": str(date.today()),
                "confidence": "Pending",
                "appfigures_status": "Template row only",
                "public_proxy_notes": "",
                "public_proxy_source_url": "",
            }
        ],
    )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("export_csv", nargs="?", help="Path to Appfigures CSV export")
    parser.add_argument("--credentialed", action="store_true", help="Mark rows as credentialed Appfigures export")
    parser.add_argument("--append", action="store_true", help="Append to existing table instead of replacing matching rows")
    args = parser.parse_args()

    make_template()
    if not args.export_csv:
        print(f"Template ready: {TEMPLATE}")
        print("Run again with a credentialed export path, e.g. scripts/import_appfigures_export.py export.csv --credentialed")
        return 0

    source = Path(args.export_csv).expanduser().resolve()
    raw_rows = read_csv(source)
    if args.credentialed:
        proxy_rows = [index + 2 for index, row in enumerate(raw_rows) if row_contains_proxy_signal(row)]
        if proxy_rows:
            print(
                "Credentialed Appfigures import rejected: remove public store estimates or pending Appfigures rows first. "
                f"Problem rows: {', '.join(map(str, proxy_rows[:12]))}",
                file=sys.stderr,
            )
            return 2
    incoming = [normalize_headers(row) for row in raw_rows]
    status = "Credentialed Appfigures export imported" if args.credentialed else "Imported export; credential status not confirmed"
    confidence = "High" if args.credentialed else "Medium"
    for row in incoming:
        row["source_date"] = row.get("source_date") or str(date.today())
        row["confidence"] = confidence
        row["appfigures_status"] = status
        row["public_proxy_notes"] = ""
        row["public_proxy_source_url"] = ""

    existing = read_csv(TARGET) if TARGET.exists() else []
    if args.append:
        merged = existing + incoming
    else:
        keys = {(r.get("player", ""), r.get("app_name", ""), r.get("platform", ""), r.get("country", "")) for r in incoming}
        merged = [r for r in existing if (r.get("player", ""), r.get("app_name", ""), r.get("platform", ""), r.get("country", "")) not in keys]
        merged.extend(incoming)
    write_csv(TARGET, merged)
    print(f"Imported {len(incoming)} rows into {TARGET}")
    print(f"Status: {status}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
