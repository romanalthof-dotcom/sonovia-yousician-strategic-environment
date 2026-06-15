#!/usr/bin/env python3
"""Write auditable data-quality CSVs from the backend source-of-truth logic."""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path

import backend_server


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
TODAY = str(date.today())


FIELDS = [
    "check_id",
    "label",
    "status",
    "count",
    "detail",
    "next_action",
    "last_checked_date",
]


def write_csv(path: Path, rows: list[dict[str, object]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDS, extrasaction="ignore")
        writer.writeheader()
        for row in rows:
            writer.writerow(
                {
                    "check_id": row.get("id", ""),
                    "label": row.get("label", ""),
                    "status": row.get("status", ""),
                    "count": row.get("count", ""),
                    "detail": row.get("detail", ""),
                    "next_action": row.get("next_action", ""),
                    "last_checked_date": TODAY,
                }
            )


def main() -> None:
    rows = backend_server.data_quality_report()["checks"]
    write_csv(HANDOFF / "data_quality_check_v3_4.csv", rows)
    write_csv(HANDOFF / "data_quality_check_v3_2_5.csv", rows)
    print(f"Wrote {len(rows)} data-quality checks.")


if __name__ == "__main__":
    main()
