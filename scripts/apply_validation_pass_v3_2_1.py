#!/usr/bin/env python3
"""Apply the v3.2.1 validation pass for reviewed gaps.

This pass intentionally does not invent restricted metrics. It closes reviewed
source-change queue items, clarifies remaining blockers, and records what still
requires credentialed or internal Yousician input.
"""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
TODAY = date.today().isoformat()


def read_csv(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_csv(path: Path, rows: list[dict[str, object]], fields: list[str] | None = None) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if fields is None:
        fields = []
        for row in rows:
            for key in row:
                if key not in fields:
                    fields.append(key)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def update_review_queue() -> int:
    path = HANDOFF / "review_queue_v3.csv"
    rows = read_csv(path)
    reviewed = 0
    for row in rows:
        watch_id = row.get("watch_id", "")
        if watch_id == "tiktok_music_shutdown_2024":
            row["confidence"] = "Reviewed 2026-06-11"
            row["review_status"] = "Reviewed / resolved"
            row["suggested_action"] = "No market-move change required; keep TikTok Music shutdown item in board timeline."
            row["notes"] = (
                "Reviewed against Business Insider source and public search result. "
                "The event remains supported: TikTok Music shut down on 2024-11-28 and TikTok shifted focus to music discovery in the main app."
            )
            reviewed += 1
        elif watch_id == "business_finland_funding_2026":
            row["confidence"] = "Reviewed 2026-06-11"
            row["review_status"] = "Reviewed / resolved"
            row["suggested_action"] = "Funding tracker updated with 2026 Sprint/Tempo context and open Business Finland services."
            row["notes"] = (
                "Reviewed against Business Finland funding pages. "
                "Funding tracker now notes 2026 Sprint funding introduction and that Tempo funding is not reopening."
            )
            reviewed += 1
    if rows:
        write_csv(path, rows)
    return reviewed


def update_remaining_gaps() -> None:
    rows = [
        {
            "gap": "Appfigures metrics",
            "status": "Blocked / credentialed export required",
            "detail": "Revenue, downloads, ranks, ratings velocity, country mix and 12-month trends remain pending unless populated from a credentialed Appfigures export.",
            "priority": "Critical",
            "next_action": "Export the Appfigures request pack and run scripts/import_appfigures_export.py with --credentialed.",
            "owner_placeholder": "Yousician / Appfigures credential owner",
        },
        {
            "gap": "Internal relationship status",
            "status": "Blocked / internal owner input required",
            "detail": "Internal relationship ownership, history and sensitivity fields are prepared for Yousician completion and must be filled only from confirmed internal knowledge.",
            "priority": "Critical",
            "next_action": "Assigned Yousician owners complete relationship owner, status, sensitivity and last-contact fields.",
            "owner_placeholder": "Yousician owners",
        },
        {
            "gap": "Private company ownership and revenue",
            "status": "Partially validated / paid database or direct validation required",
            "detail": "Public source status is captured, but ownership, investor history and revenue for private players require Crunchbase, PitchBook, Dealroom or direct validation.",
            "priority": "High",
            "next_action": "Run a paid-database validation pass for private companies before investor/board usage.",
            "owner_placeholder": "Research owner TBD",
        },
        {
            "gap": "Influencer multi-platform reach",
            "status": "Partially complete / platform export required",
            "detail": "YouTube reach is included where visible. TikTok, Instagram and average views remain marked as pending platform export for campaign planning.",
            "priority": "High",
            "next_action": "Use YouTube/TikTok/Instagram channel exports or creator tools to fill current reach and average-view fields.",
            "owner_placeholder": "Creator/partnership owner TBD",
        },
        {
            "gap": "Traffic and SEO",
            "status": "Blocked / Similarweb or analytics-grade export required",
            "detail": "Web traffic for song/practice ecosystems, teacher platforms and media drivers requires Similarweb or a comparable analytics export.",
            "priority": "Medium",
            "next_action": "Run Similarweb export for priority domains and label it as public/third-party traffic estimate.",
            "owner_placeholder": "Research owner TBD",
        },
        {
            "gap": "Awards and funding deadlines",
            "status": "Operationalized / quarterly refresh needed",
            "detail": "Awards and funding rows now contain deadlines, effort, fit and immediate next steps; date cycles should still be refreshed quarterly.",
            "priority": "Low",
            "next_action": "Review deadlines at the start of each quarter and assign an ops/comms owner before submission decisions.",
            "owner_placeholder": "Ops / comms owner TBD",
        },
        {
            "gap": "User research linkage",
            "status": "Blocked / Confluence research-database access required",
            "detail": "Market signals should be linked back to Yousician user research before turning observations into recommendations. This pass does not have Confluence research database access.",
            "priority": "Medium",
            "next_action": "Search the Yousician User Research Database for guitar beginner motivation, FTUX, churn, pricing and competitor studies and add study links to the report appendix.",
            "owner_placeholder": "Research / strategy owner TBD",
        },
    ]
    write_csv(HANDOFF / "remaining_data_gaps_v3.csv", rows)


def write_validation_log(reviewed: int) -> None:
    rows = [
        {
            "validated_area": "Source review queue",
            "status": "Completed",
            "detail": f"{reviewed} source-change items reviewed and resolved.",
            "last_checked_date": TODAY,
            "source_url": "handoff/review_queue_v3.csv",
        },
        {
            "validated_area": "Business Finland funding",
            "status": "Updated",
            "detail": "Funding tracker now includes the 2026 Sprint/Tempo context and open service framing.",
            "last_checked_date": TODAY,
            "source_url": "https://www.businessfinland.fi/en/whats-new/news/2026/what-do-business-finlands-funding-services-look-like-at-the-beginning-of-2026/",
        },
        {
            "validated_area": "TikTok Music market move",
            "status": "Confirmed",
            "detail": "The board-timeline event remains supported; no report change required beyond queue closure.",
            "last_checked_date": TODAY,
            "source_url": "https://www.businessinsider.com/tiktok-abandoning-plan-to-challenge-spotify-apple-in-music-streaming-2024-9",
        },
        {
            "validated_area": "Remaining blockers",
            "status": "Classified",
            "detail": "Credentialed Appfigures, internal relationships, paid private-company validation, platform reach exports, traffic exports and user-research linkage remain explicitly assigned.",
            "last_checked_date": TODAY,
            "source_url": "handoff/remaining_data_gaps_v3.csv",
        },
    ]
    write_csv(HANDOFF / "validation_pass_v3_2_1.csv", rows)


def main() -> None:
    reviewed = update_review_queue()
    update_remaining_gaps()
    write_validation_log(reviewed)
    print({"reviewed_queue_items": reviewed, "validation_log": "handoff/validation_pass_v3_2_1.csv"})


if __name__ == "__main__":
    main()
