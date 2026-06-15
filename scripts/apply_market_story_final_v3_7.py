#!/usr/bin/env python3
"""Apply v3.9 market-story corrections before rebuilding final outputs.

This pass keeps the package honest: it adds the June 2026 Suno funding update,
fixes date-sensitive rows, adds a direct music-learning app snapshot, and
renames claim gates with source-mapped discussion wording.
"""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
TODAY = str(date.today())
REL_PENDING = "Internal relationship status not yet captured in this dataset. To be completed by Yousician."
APPFIGURES_PENDING = "Credentialed Appfigures data pending; no revenue/download/rank conclusions."


def read_csv(name: str) -> list[dict[str, str]]:
    path = HANDOFF / name
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_csv(name: str, rows: list[dict[str, object]], fields: list[str] | None = None) -> None:
    path = HANDOFF / name
    path.parent.mkdir(parents=True, exist_ok=True)
    if fields is None:
        fields = list(rows[0].keys()) if rows else []
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def clean(value: object) -> str:
    return " ".join(str(value or "").split())


def upsert_market_moves() -> None:
    rows = read_csv("market_moves_24m_curated_v3_2.csv")
    fields = list(rows[0].keys()) if rows else [
        "date",
        "move_type",
        "player_or_signal",
        "what_happened",
        "why_it_matters_for_yousician",
        "source_id",
        "source_url",
        "confidence",
        "category_mapping",
        "last_checked_date",
        "news_grade",
        "include_in_board_timeline",
        "curation_note",
    ]

    found_suno_d = False
    for row in rows:
        if row.get("source_id") == "suno_series_d_2026":
            found_suno_d = True
            row.update(
                {
                    "date": "2026-06-03",
                    "move_type": "Funding / AI music",
                    "player_or_signal": "Suno",
                    "what_happened": "Suno announced more than $400M in Series D funding at a $5.4B post-money valuation.",
                    "why_it_matters_for_yousician": "Strengthens Suno as the leading AI music-creation market signal and reinforces AI creation as a market-structure force, not only a feature trend.",
                    "source_url": "https://suno.com/blog/series-d-announcement",
                    "confidence": "High",
                    "category_mapping": "AI companies and AI initiatives",
                    "last_checked_date": TODAY,
                    "news_grade": "A",
                    "include_in_board_timeline": "Yes",
                    "curation_note": "News-grade event; refreshed in v3.9 source skim.",
                }
            )
        if row.get("source_id") == "google_play_apps_accelerator_2026":
            row["date"] = "2026-03-25"
            row["what_happened"] = "Google Play announced the first Apps Accelerator class of 2026."
            row["last_checked_date"] = TODAY
            row["curation_note"] = "Date checked in v3.9 against official Android Developers post."
        if row.get("source_id") == "apple_design_awards_2026":
            row["date"] = "2026-06-02"
            row["what_happened"] = "Apple announced the winners of the 2026 Apple Design Awards."
            row["last_checked_date"] = TODAY
            row["curation_note"] = "Date checked in v3.9 against official Apple Newsroom post."

    if not found_suno_d:
        rows.append(
            {
                "date": "2026-06-03",
                "move_type": "Funding / AI music",
                "player_or_signal": "Suno",
                "what_happened": "Suno announced more than $400M in Series D funding at a $5.4B post-money valuation.",
                "why_it_matters_for_yousician": "Strengthens Suno as the leading AI music-creation market signal and reinforces AI creation as a market-structure force, not only a feature trend.",
                "source_id": "suno_series_d_2026",
                "source_url": "https://suno.com/blog/series-d-announcement",
                "confidence": "High",
                "category_mapping": "AI companies and AI initiatives",
                "last_checked_date": TODAY,
                "news_grade": "A",
                "include_in_board_timeline": "Yes",
                "curation_note": "News-grade event; refreshed in v3.9 source skim.",
            }
        )

    rows.sort(key=lambda row: (row.get("date", ""), row.get("player_or_signal", "")))
    write_csv("market_moves_24m_curated_v3_2.csv", rows, fields)


def update_top_actors() -> None:
    rows = read_csv("executive_top_10_actor_ranked_v3_4.csv")
    if not rows:
        return
    fields = list(rows[0].keys())
    for row in rows:
        if row.get("actor_or_cluster") == "Suno":
            row["proof_available"] = (
                "Official Suno funding update on June 3, 2026; AI rights/litigation signals; "
                "source confidence should remain visible for claim-by-claim use."
            )
            row["what_changed_recently"] = (
                "Suno announced more than $400M in Series D funding at a $5.4B post-money valuation on June 3, 2026."
            )
            row["evidence_confidence"] = "High for funding update; Medium-High overall"
            row["next_validation_step"] = (
                "Keep litigation and rights status current; do not use adoption, revenue or mobile-performance ranking without validated metrics."
            )
    write_csv("executive_top_10_actor_ranked_v3_4.csv", rows, fields)


def update_key_profiles() -> None:
    rows = read_csv("key_player_profiles_final_v3_6.csv") or read_csv("key_player_profiles_v3_2.csv")
    if not rows:
        return
    fields = list(rows[0].keys())
    for row in rows:
        if row.get("player") == "Suno":
            row["last_24m_news"] = (
                "June 3, 2026: Suno announced more than $400M in Series D funding at a $5.4B post-money valuation. "
                + clean(row.get("last_24m_news"))
            ).strip()
            row["source_confidence"] = "High for funding update; Medium-High overall"
            row["primary_source_url"] = "https://suno.com/blog/series-d-announcement"
            row["next_validation_step"] = (
                "Keep funding, litigation and rights-owner status current; do not use adoption or revenue ranking without validated metrics."
            )
            row["last_checked_date"] = TODAY
        row["relationship_completion_status"] = row.get("relationship_completion_status") or REL_PENDING
    write_csv("key_player_profiles_final_v3_9.csv", rows, fields)


def update_source_audit() -> None:
    rows = read_csv("source_audit_v3.csv")
    if not rows:
        return
    fields = list(rows[0].keys())
    updates = {
        "suno_series_d_2026": {
            "source_id": "suno_series_d_2026",
            "title": "Suno Series D funding announcement",
            "source_type": "Official company announcement",
            "url": "https://suno.com/blog/series-d-announcement",
            "source_confidence": "High",
            "source_status": "Official source checked; use for Suno June 2026 funding claim.",
            "used_in": "AI companies and AI initiatives; Last 24 months market moves; Top actors",
            "last_checked_date": TODAY,
        },
        "google_play_apps_accelerator_2026_date": {
            "source_id": "google_play_apps_accelerator_2026_date",
            "title": "Google Play Apps Accelerator class of 2026",
            "source_type": "Official Google / Android Developers post",
            "url": "https://android-developers.googleblog.com/2026/03/meet-class-of-2026-for-google-play-apps.html",
            "source_confidence": "High",
            "source_status": "Official source checked; use March 25, 2026 post date.",
            "used_in": "Last 24 months market moves; Awards/funding/platform signals",
            "last_checked_date": TODAY,
        },
        "apple_design_awards_2026_winners_date": {
            "source_id": "apple_design_awards_2026_winners_date",
            "title": "Apple 2026 Design Award winners",
            "source_type": "Official Apple Newsroom post",
            "url": "https://www.apple.com/newsroom/2026/06/apple-reveals-winners-of-the-2026-apple-design-awards/",
            "source_confidence": "High",
            "source_status": "Official source checked; use June 2, 2026 update date.",
            "used_in": "Awards; Last 24 months market moves",
            "last_checked_date": TODAY,
        },
    }
    by_id = {row.get("source_id"): row for row in rows}
    for source_id, update in updates.items():
        if source_id in by_id:
            by_id[source_id].update(update)
        else:
            rows.append(update)
    write_csv("source_audit_v3.csv", rows, fields)


def update_readiness_gate() -> None:
    rows = read_csv("board_readiness_gate_v3_4.csv")
    if not rows:
        return
    fields = list(rows[0].keys())
    for row in rows:
        row["evidence_anchor"] = (
            clean(row.get("evidence_anchor"))
            .replace("v3.6 final package", "v3.9 package")
            .replace("v3.7 final package", "v3.9 package")
            .replace("v3.8 final package", "v3.9 package")
        )
        row["last_checked_date"] = TODAY
        if row.get("gate_id") == "G1":
            row["gate"] = "Executive discussion package"
            row["safe_language"] = "Use as a brief-led ecosystem market report with explicit completion layers."
            row["artifact_to_use"] = "Executive Summary Deck v3.9; Market Landscape Report v3.9; Strategic Environment Database v3.9"
            row["next_action"] = "Use the deck for the executive read; use the report and workbook for backup evidence."
            row["board_use_rule"] = "Eligible for internal discussion if Appfigures and relationship caveats remain visible; final source skim recommended before external leadership/investor use."
        if row.get("gate_id") == "G2":
            row["board_use_rule"] = "No app-based success ranking by revenue/download/rank until populated from credentialed Appfigures."
    write_csv("board_readiness_gate_v3_9.csv", rows, fields)


def direct_learning_snapshot() -> None:
    players = read_csv("players_v3.csv")
    by_name = {row.get("player", "").lower(): row for row in players}
    desired = [
        ("Simply", "Mobile-first beginner music learning app", "Beginner / casual learners"),
        ("Flowkey", "Piano learning app and Yamaha-linked learning ecosystem", "Beginner piano learners"),
        ("Skoove", "Piano learning app with lesson-path focus", "Beginner piano learners"),
        ("Fender Play", "Guitar learning subscription tied to Fender's hardware brand", "Beginner guitar and bass learners"),
        ("Gibson App", "Gibson-backed guitar learning and brand ecosystem app", "Beginner guitar learners and Gibson customers"),
        ("Guitar Tricks", "Long-running online guitar lesson platform", "Guitar learners seeking structured lessons"),
        ("Pickup Music", "Creator-led guitar education platform", "Intermediate and style-specific guitar learners"),
        ("Rocksmith+", "Game-like learning platform linked to Ubisoft and instrument practice", "Practice-oriented guitar/piano learners"),
        ("Musora", "Online music lesson ecosystem across instruments", "Multi-instrument learners"),
        ("Fretello", "Guitar learning app with structured practice paths", "Beginner and returning guitar learners"),
        ("Duolingo Music", "Consumer education app extension into music literacy", "Mass-market beginner learners"),
    ]
    rows = []
    for name, what, audience in desired:
        source = by_name.get(name.lower(), {})
        rows.append(
            {
                "player": name,
                "what_they_are": source.get("what_they_are") or what,
                "audience_focus": audience,
                "recent_public_signal": source.get("ai_or_recent_initiatives") or "Public product and category signal; no app-performance conclusion without Appfigures.",
                "why_it_matters": source.get("why_they_matter") or "Direct reference point for app-based music learning and beginner motivation.",
                "appfigures_status": APPFIGURES_PENDING,
                "source_confidence": source.get("source_confidence") or "Pending",
                "source_url": (source.get("source_urls", "").split(" | ")[0] if source.get("source_urls") else ""),
                "relationship_status": REL_PENDING,
                "last_checked_date": TODAY,
            }
        )
    write_csv(
        "direct_music_learning_apps_snapshot_v3_9.csv",
        rows,
        [
            "player",
            "what_they_are",
            "audience_focus",
            "recent_public_signal",
            "why_it_matters",
            "appfigures_status",
            "source_confidence",
            "source_url",
            "relationship_status",
            "last_checked_date",
        ],
    )


def main() -> None:
    upsert_market_moves()
    update_top_actors()
    update_key_profiles()
    update_source_audit()
    update_readiness_gate()
    direct_learning_snapshot()
    print(
        {
            "market_moves": len(read_csv("market_moves_24m_curated_v3_2.csv")),
            "direct_learning_apps": len(read_csv("direct_music_learning_apps_snapshot_v3_9.csv")),
            "profiles": len(read_csv("key_player_profiles_final_v3_9.csv")),
        }
    )


if __name__ == "__main__":
    main()
