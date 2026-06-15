#!/usr/bin/env python3
"""Create source-mapped claim data layers for v3.9.

The goal is not to invent missing data. It is to prevent weak hard claims,
uncredentialed Appfigures metrics, and placeholder-looking profile language from
appearing as final market facts.
"""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
TODAY = str(date.today())
APPFIGURES_BLOCK = (
    "Credentialed Appfigures data is pending. Do not use this row for revenue, "
    "downloads, rank trend, review velocity, country mix or app-performance ranking."
)
REL_PENDING = "Internal relationship status not yet captured in this dataset. To be completed by Yousician."
MAIN_NARRATIVE_CONFIDENCE = {"high", "medium", "medium-high"}
BLOCKED_CONFIDENCE = {"", "low", "pending", "pending appfigures / public proxy only"}


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


def clean(text: object) -> str:
    return " ".join(str(text or "").split())


def is_source_mapped_claim(row: dict[str, str]) -> bool:
    if row.get("hard_claim") != "Yes":
        return False
    claim_type = row.get("claim_type", "").strip().lower()
    confidence = row.get("source_confidence", "").strip().lower()
    if claim_type == "app performance":
        return False
    return confidence in MAIN_NARRATIVE_CONFIDENCE


def blocked_reason(row: dict[str, str]) -> str:
    claim_type = row.get("claim_type", "").strip()
    confidence = row.get("source_confidence", "").strip() or "Pending"
    if claim_type.lower() == "app performance":
        return "Blocked by missing credentialed Appfigures export/API output."
    if confidence.lower() in BLOCKED_CONFIDENCE:
        return "Blocked until source confidence is upgraded from Low/Pending."
    return "Review before high-stakes use."


def tidy_profile(row: dict[str, str]) -> dict[str, str]:
    item = dict(row)
    item["relationship_completion_status"] = REL_PENDING

    reach = clean(item.get("estimated_size_reach"))
    if reach == "Large consumer app":
        item["estimated_size_reach"] = "Publicly visible consumer app; precise reach requires Appfigures or traffic validation."

    initiative = clean(item.get("ai_or_recent_initiatives"))
    replacements = {
        "Potential personalization and practice feedback research target": "AI/personalization relevance should be validated before being treated as a product claim.",
        "AI-assisted creation and creator workflow research target": "AI-assisted creation and creator-workflow relevance should be validated before high-stakes use.",
        "AI search, generation, and workflow research target": "AI search/generation/workflow relevance should be validated before high-stakes use.",
        "AI personalization, tutoring, and content systems research target": "AI personalization and tutoring relevance should be validated before high-stakes use.",
    }
    if initiative in replacements:
        item["ai_or_recent_initiatives"] = replacements[initiative]

    recent = clean(item.get("last_24m_news"))
    if recent.lower().startswith("no strong last-24-month"):
        item["last_24m_news"] = "No main-timeline recent-news item is used for this profile; source monitoring remains active."

    performance = clean(item.get("performance_data_status"))
    if "credentialed appfigures export not available" in performance.lower():
        item["performance_data_status"] = APPFIGURES_BLOCK

    next_step = clean(item.get("next_validation_step"))
    if "Appfigures" in item["performance_data_status"] and "Appfigures" not in next_step:
        item["next_validation_step"] = (next_step + " Import credentialed Appfigures before using app-performance rankings.").strip()

    item["final_profile_status"] = "Ready for executive discussion with visible completion caveats"
    item.pop("board_use_rule", None)
    item["use_rule"] = "Use qualitative influence role only unless the relevant validation fields are completed."
    item["last_checked_date"] = TODAY
    return item


def main() -> None:
    claims = read_csv("claim_source_matrix_v3_2.csv")
    source_mapped_claims = []
    blocked_claims = []
    for row in claims:
        if row.get("hard_claim") != "Yes":
            continue
        if is_source_mapped_claim(row):
            item = dict(row)
            item["main_narrative_status"] = "Eligible for internal discussion"
            item["main_narrative_rule"] = "May be used in the main narrative with source URL and confidence visible; final source skim recommended before external leadership/investor use."
            source_mapped_claims.append(item)
        else:
            item = dict(row)
            item["main_narrative_status"] = "Needs final validation / appendix only"
            item["blocked_reason"] = blocked_reason(row)
            item["main_narrative_rule"] = "Do not use as a final claim in deck/report narrative until validation is completed."
            blocked_claims.append(item)

    write_csv(
        "source_mapped_claims_eligible_v3_9.csv",
        source_mapped_claims,
        [
            "claim_id",
            "entity",
            "claim_type",
            "claim",
            "source_url",
            "source_confidence",
            "review_action",
            "main_narrative_status",
            "main_narrative_rule",
            "last_checked_date",
        ],
    )
    write_csv(
        "claims_requiring_final_validation_v3_9.csv",
        blocked_claims,
        [
            "claim_id",
            "entity",
            "claim_type",
            "claim",
            "source_url",
            "source_confidence",
            "review_action",
            "blocked_reason",
            "main_narrative_status",
            "main_narrative_rule",
            "last_checked_date",
        ],
    )

    profiles = [tidy_profile(row) for row in read_csv("key_player_profiles_v3_2.csv")]
    profile_fields = list(profiles[0].keys()) if profiles else []
    write_csv("key_player_profiles_final_v3_6.csv", profiles, profile_fields)

    summary = [
        {
            "gate": "Credentialed Appfigures",
            "status": "Blocked",
            "count": "0",
            "rule": "No app-performance ranking by revenue, downloads, ranks, country mix or trends until credentialed Appfigures data is imported.",
            "artifact": "Appfigures Request Pack.csv",
            "last_checked_date": TODAY,
        },
        {
            "gate": "Source-mapped claims eligible for main narrative",
            "status": "Filtered",
            "count": str(len(source_mapped_claims)),
            "rule": "High/Medium confidence hard claims outside app-performance metrics are eligible for internal discussion and main narrative use, subject to final source skim before external leadership/investor use.",
            "artifact": "source_mapped_claims_eligible_v3_9.csv",
            "last_checked_date": TODAY,
        },
        {
            "gate": "Claims requiring final validation",
            "status": "Appendix / completion only",
            "count": str(len(blocked_claims)),
            "rule": "Low/Pending and Appfigures-dependent hard claims remain out of the main narrative.",
            "artifact": "claims_requiring_final_validation_v3_9.csv",
            "last_checked_date": TODAY,
        },
        {
            "gate": "Internal relationships",
            "status": "Blocked until Yousician input",
            "count": str(len(profiles)),
            "rule": REL_PENDING,
            "artifact": "relationships_template_v3.csv",
            "last_checked_date": TODAY,
        },
    ]
    write_csv("final_claim_and_gate_summary_v3_9.csv", summary)
    print({"source_mapped_claims": len(source_mapped_claims), "claims_requiring_validation": len(blocked_claims), "profiles": len(profiles)})


if __name__ == "__main__":
    main()
