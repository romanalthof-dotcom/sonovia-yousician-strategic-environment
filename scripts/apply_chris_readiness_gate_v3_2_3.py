#!/usr/bin/env python3
"""Create the v3.2.3 Chris board-readiness gate files.

The gate files are deliberately operational. They do not add new market claims;
they clarify what is safe to discuss, what is review-only, and what is blocked
until Appfigures or internal Yousician relationship inputs are provided.
"""

from __future__ import annotations

import csv
from collections import Counter
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
TODAY = str(date.today())

APPFIGURES_DOCS = "https://docs.appfigures.com/"
APPFIGURES_SALES = "https://docs.appfigures.com/api/reference/v2/sales"
APPFIGURES_REVENUE = "https://docs.appfigures.com/api/reference/v2/revenue"
APPFIGURES_RATINGS = "https://docs.appfigures.com/api/reference/v2/reports-ratings"
APPFIGURES_REVIEWS = "https://docs.appfigures.com/api/reference/v2/reviews"
APPFIGURES_ESTIMATES = "https://docs.appfigures.com/api/reference/v2/estimates"


def read_csv(name: str) -> list[dict[str, str]]:
    path = HANDOFF / name
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_csv(name: str, rows: list[dict[str, object]], fields: list[str]) -> None:
    path = HANDOFF / name
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def open_review_count(rows: list[dict[str, str]]) -> int:
    return sum(
        1
        for row in rows
        if row.get("review_status", "").strip().lower() in ("", "open", "pending human review")
    )


def main() -> None:
    app_req = read_csv("appfigures_request_pack_v3_2.csv")
    app_perf = read_csv("appfigures-performance-export-integrated-v3.csv")
    relationships = read_csv("relationships_template_v3.csv")
    review_queue = read_csv("review_queue_v3.csv")
    claims = read_csv("claim_source_matrix_v3_2.csv")
    moves = read_csv("market_moves_24m_curated_v3_2.csv")
    influencers = read_csv("influencers_creators_v3.csv")
    awards = read_csv("awards_v3.csv")
    funding = read_csv("funding_v3.csv")

    credentialed_rows = [
        row
        for row in app_perf
        if "credentialed appfigures" in row.get("appfigures_status", "").lower()
    ]
    missing_appfigures_rows = [
        row
        for row in app_req
        if "missing" in row.get("credentialed_status", "").lower()
    ]
    open_reviews = open_review_count(review_queue)
    hard_claims = [row for row in claims if row.get("hard_claim") == "Yes"]
    relationship_pending = [
        row
        for row in relationships
        if not row.get("confirmed_owner", "").strip()
        or "not yet captured" in row.get("relationship_status", "").lower()
    ]
    board_moves = [row for row in moves if row.get("include_in_board_timeline") == "Yes"]
    creator_pending = [
        row
        for row in influencers
        if "pending" in f"{row.get('tiktok_instagram_status', '')} {row.get('average_views_status', '')}".lower()
    ]
    award_priority = Counter(row.get("priority", "") for row in awards)
    funding_priority = Counter(row.get("priority", "") for row in funding)

    readiness_rows = [
        {
            "gate_id": "G1",
            "gate": "Executive discussion package",
            "readiness_status": "Ready to discuss",
            "chris_safe_language": "Use as an executive ecosystem map with explicit validation gates.",
            "blocked_claims": "Do not describe the package as fully live or fully Appfigures-populated.",
            "required_input": "None for discussion use.",
            "owner_placeholder": "Strategy / Research Ops",
            "artifact_to_use": "Executive deck, final report, dashboard start page",
            "next_action": "Open the deck first; use the report/workbook for backup evidence.",
            "board_use_rule": "Safe for discussion if Appfigures and relationship caveats remain visible.",
            "evidence_anchor": "v3.2 handoff package",
            "source_url": "",
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "gate_id": "G2",
            "gate": "Appfigures performance ranking",
            "readiness_status": "Blocked until credentialed export",
            "chris_safe_language": f"{len(app_req)} app rows are ready for Appfigures export; {len(credentialed_rows)} credentialed rows are currently populated.",
            "blocked_claims": "Revenue, downloads, rank trends, review velocity, country mix and 12-month performance comparisons.",
            "required_input": "Credentialed Appfigures export/API output for the request-pack rows.",
            "owner_placeholder": "Yousician Appfigures credential owner",
            "artifact_to_use": "appfigures_request_pack_v3_2.csv; appfigures_credentialed_import_runbook_v3_2_3.csv",
            "next_action": "Export required fields, run import_appfigures_export.py with --credentialed, then rebuild outputs.",
            "board_use_rule": "No app-based success ranking by revenue/download/rank until populated from credentialed Appfigures.",
            "evidence_anchor": "Official Appfigures API documentation lists sales, revenue, ratings, reviews and App Intelligence data routes.",
            "source_url": APPFIGURES_DOCS,
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "gate_id": "G3",
            "gate": "Internal relationships",
            "readiness_status": "Blocked until Yousician owner input",
            "chris_safe_language": f"{len(relationships)} relationship rows are prepared for internal completion.",
            "blocked_claims": "Any claim that Yousician has, lacks, had, or should use a relationship with a player.",
            "required_input": "Confirmed owner, confirmed relationship, sensitivity, last contact date and suggested next step.",
            "owner_placeholder": "Chris / Yousician relationship owners",
            "artifact_to_use": "relationships_template_v3.csv",
            "next_action": "Assign owners and fill only internally confirmed relationship fields.",
            "board_use_rule": "Never write 'no relationship' unless internally confirmed.",
            "evidence_anchor": "Relationship completion layer in the handoff database",
            "source_url": "",
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "gate_id": "G4",
            "gate": "Hard claims",
            "readiness_status": "Review-only before board use",
            "chris_safe_language": f"{len(hard_claims)} hard claims are mapped to source/review action rows.",
            "blocked_claims": "Ownership, funding, M&A, quantified reach, AI feature and Appfigures-like performance claims without source/date/confidence review.",
            "required_input": "Source owner checks the claim-source matrix before extracting board-facing snippets.",
            "owner_placeholder": "Research / Strategy",
            "artifact_to_use": "claim_source_matrix_v3_2.csv",
            "next_action": "Review hard-claim rows and mark any weak/private-company claims for revalidation.",
            "board_use_rule": "Every hard claim needs source URL, source confidence, date and review action.",
            "evidence_anchor": "Claim-source matrix",
            "source_url": "",
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "gate_id": "G5",
            "gate": "Refresh queue",
            "readiness_status": "Review-gated",
            "chris_safe_language": f"{open_reviews} open refresh checks remain surfaced and are not automatically promoted into final claims.",
            "blocked_claims": "New or changed source content until manually reviewed.",
            "required_input": "Human source review and claim-update decision.",
            "owner_placeholder": "Research Ops",
            "artifact_to_use": "review_queue_v3.csv; refresh_run_log_v3.csv",
            "next_action": "Review open queue rows; accept, reject or convert to source backlog.",
            "board_use_rule": "Self-updating database can detect changes; final PDF/deck remains human-approved.",
            "evidence_anchor": "Refresh workflow output",
            "source_url": "",
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "gate_id": "G6",
            "gate": "Creator reach validation",
            "readiness_status": "Partially ready",
            "chris_safe_language": f"{len(influencers)} creator rows exist; {len(creator_pending)} rows still need TikTok/Instagram or average-view validation.",
            "blocked_claims": "Creator reach comparisons across platforms where TikTok, Instagram or average views are pending.",
            "required_input": "Platform exports or manual profile checks for creator reach fields.",
            "owner_placeholder": "Creator / Brand team",
            "artifact_to_use": "influencers_creators_v3.csv",
            "next_action": "Prioritize beginner-relevant creators and validate cross-platform reach.",
            "board_use_rule": "Use YouTube/public proxies directionally; avoid precise cross-platform ranking until validated.",
            "evidence_anchor": "Influencer/creator layer",
            "source_url": "",
            "source_confidence": "Medium",
            "last_checked_date": TODAY,
        },
        {
            "gate_id": "G7",
            "gate": "Market moves timeline",
            "readiness_status": "Ready with source review",
            "chris_safe_language": f"{len(board_moves)} news-grade moves are in the board timeline; weaker context remains in appendix data.",
            "blocked_claims": "Static product/context signals should not be presented as 'who made the news' items.",
            "required_input": "Final skim of source URLs before live presentation.",
            "owner_placeholder": "Strategy / Research",
            "artifact_to_use": "market_moves_24m_curated_v3_2.csv",
            "next_action": "Keep Grade A/B news in slides; leave Grade C context in appendix.",
            "board_use_rule": "Main timeline should show events, launches, funding, M&A, partnerships, rights conflict or awards only.",
            "evidence_anchor": "Curated market-moves file",
            "source_url": "",
            "source_confidence": "Medium",
            "last_checked_date": TODAY,
        },
        {
            "gate_id": "G8",
            "gate": "Awards and funding operations",
            "readiness_status": "Ready for owner assignment",
            "chris_safe_language": f"{len(awards)} award rows and {len(funding)} funding rows are operationalized with fit, effort and next action fields.",
            "blocked_claims": "Do not imply applications are in progress unless owners confirm.",
            "required_input": "Owner assignment and deadline verification before action.",
            "owner_placeholder": "Marketing / Partnerships / Public funding owner",
            "artifact_to_use": "awards_v3.csv; funding_v3.csv",
            "next_action": f"Prioritize high-priority awards ({award_priority.get('High', 0)}) and funding rows ({funding_priority.get('High', 0)}).",
            "board_use_rule": "Use as opportunity tracker, not as confirmed application pipeline.",
            "evidence_anchor": "Awards/funding operational trackers",
            "source_url": "",
            "source_confidence": "Medium",
            "last_checked_date": TODAY,
        },
    ]

    readiness_fields = [
        "gate_id",
        "gate",
        "readiness_status",
        "chris_safe_language",
        "blocked_claims",
        "required_input",
        "owner_placeholder",
        "artifact_to_use",
        "next_action",
        "board_use_rule",
        "evidence_anchor",
        "source_url",
        "source_confidence",
        "last_checked_date",
    ]
    write_csv("chris_board_readiness_gate_v3_2_3.csv", readiness_rows, readiness_fields)

    summary_rows = [
        {
            "readiness_bucket": "Ready to discuss",
            "meaning_for_chris": "The package can be opened as an executive ecosystem discussion artifact.",
            "included_artifacts": "Executive deck; final report; workbook; dashboard; top-10 actor synthesis; ecosystem map 2.0",
            "safe_words": "Discussion-ready; review-gated; Appfigures pending; internal relationships to be completed by Yousician",
            "avoid_words": "Fully live; fully self-updating; Appfigures-complete; relationship-complete",
            "owner_placeholder": "Strategy / Research Ops",
            "last_checked_date": TODAY,
        },
        {
            "readiness_bucket": "Review-only before Board use",
            "meaning_for_chris": "Hard claims are traceable but still require a final claim/source skim before being quoted externally.",
            "included_artifacts": "Claim-source matrix; source audit; review queue; validation pass; curated market moves",
            "safe_words": "Source-mapped; confidence-labelled; requires final review for hard claims",
            "avoid_words": "Verified by default; automatically accepted; exhaustive",
            "owner_placeholder": "Research / Strategy",
            "last_checked_date": TODAY,
        },
        {
            "readiness_bucket": "Blocked until input",
            "meaning_for_chris": "Appfigures performance and internal relationship claims cannot be finalized from public research alone.",
            "included_artifacts": "Appfigures request pack; Appfigures import runbook; relationships template",
            "safe_words": "Credentialed export required; owner input required; no metric invented",
            "avoid_words": "No relationship; revenue leader; download leader; market-share conclusion",
            "owner_placeholder": "Yousician credential owner / relationship owners",
            "last_checked_date": TODAY,
        },
    ]
    write_csv(
        "chris_send_readiness_summary_v3_2_3.csv",
        summary_rows,
        [
            "readiness_bucket",
            "meaning_for_chris",
            "included_artifacts",
            "safe_words",
            "avoid_words",
            "owner_placeholder",
            "last_checked_date",
        ],
    )

    runbook_rows = [
        {
            "step": "1",
            "runbook_stage": "Confirm Appfigures access",
            "action": "Confirm that the account can access required Appfigures data for tracked competitor apps, including any needed Public/Partner Data access.",
            "input_file_or_route": APPFIGURES_DOCS,
            "output_file": "Credential/access confirmation",
            "acceptance_check": "The owner confirms export/API scope covers downloads, revenue, ranks, ratings/reviews and country/date breakdowns.",
            "owner_placeholder": "Yousician Appfigures credential owner",
            "source_url": APPFIGURES_DOCS,
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "step": "2",
            "runbook_stage": "Export performance fields",
            "action": "Export the request-pack apps with 30/90/365-day downloads, revenue, current/average rank, 365-day rank trend, review velocity and top countries.",
            "input_file_or_route": "appfigures_request_pack_v3_2.csv",
            "output_file": "Credentialed Appfigures CSV",
            "acceptance_check": "All 16 request-pack rows are present or explicitly marked unavailable.",
            "owner_placeholder": "Growth / Analytics",
            "source_url": APPFIGURES_SALES,
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "step": "3",
            "runbook_stage": "Revenue route check",
            "action": "Use the Appfigures revenue report route where revenue data is available and permitted.",
            "input_file_or_route": APPFIGURES_REVENUE,
            "output_file": "Revenue columns in credentialed export",
            "acceptance_check": "Revenue columns are populated or explicitly unavailable by app/country/date.",
            "owner_placeholder": "Growth / Analytics",
            "source_url": APPFIGURES_REVENUE,
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "step": "4",
            "runbook_stage": "Ratings/reviews route check",
            "action": "Pull ratings, review counts and review velocity from credentialed Appfigures reports rather than public proxies where possible.",
            "input_file_or_route": f"{APPFIGURES_RATINGS}; {APPFIGURES_REVIEWS}",
            "output_file": "Ratings/reviews columns in credentialed export",
            "acceptance_check": "Rating and review velocity fields use credentialed export or remain clearly marked as public proxy.",
            "owner_placeholder": "Growth / Analytics",
            "source_url": APPFIGURES_REVIEWS,
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "step": "5",
            "runbook_stage": "Import",
            "action": "Run scripts/import_appfigures_export.py <export.csv> --credentialed, then rebuild outputs.",
            "input_file_or_route": "scripts/import_appfigures_export.py",
            "output_file": "appfigures-performance-export-integrated-v3.csv",
            "acceptance_check": "Imported rows show appfigures_status = Credentialed Appfigures export imported.",
            "owner_placeholder": "Strategy / Research Ops",
            "source_url": "",
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
        {
            "step": "6",
            "runbook_stage": "Board QA",
            "action": "Rebuild deck, report, workbook and dashboard ZIP; verify no public proxy is labelled as Appfigures.",
            "input_file_or_route": "scripts/rebuild_all.sh",
            "output_file": "Final deliverables",
            "acceptance_check": "Performance-ranking language is upgraded only for credentialed rows; all missing fields remain pending.",
            "owner_placeholder": "Strategy / Research Ops",
            "source_url": APPFIGURES_ESTIMATES,
            "source_confidence": "High",
            "last_checked_date": TODAY,
        },
    ]
    write_csv(
        "appfigures_credentialed_import_runbook_v3_2_3.csv",
        runbook_rows,
        [
            "step",
            "runbook_stage",
            "action",
            "input_file_or_route",
            "output_file",
            "acceptance_check",
            "owner_placeholder",
            "source_url",
            "source_confidence",
            "last_checked_date",
        ],
    )

    layout_rows = [
        {
            "surface": "Dashboard / narrow browser",
            "view_or_slide": "Database",
            "viewport": "690 x 915",
            "issue_found": "Nine-column database table collapsed and squeezed words vertically on narrow viewports.",
            "fix_applied": "Table remains available on wider screens; narrow screens now use readable database record cards.",
            "qa_status": "Passed post-fix overflow scan",
            "qa_artifact": "database_record_cards_layout_fix_v3_2_2.png",
            "owner_placeholder": "Design / Research Ops",
            "last_checked_date": TODAY,
        },
        {
            "surface": "Dashboard / narrow browser",
            "view_or_slide": "Overview, Key players, One-pager, Relationships",
            "viewport": "690 x 915",
            "issue_found": "No material text/container overflow found after latest scan.",
            "fix_applied": "No additional fix required.",
            "qa_status": "Passed post-fix overflow scan",
            "qa_artifact": "Browser QA scan",
            "owner_placeholder": "Design / Research Ops",
            "last_checked_date": TODAY,
        },
        {
            "surface": "Executive deck",
            "view_or_slide": "Appfigures, Market Moves, Evidence QA",
            "viewport": "Slide contact sheet",
            "issue_found": "Slides were too table-like for executive reading at thumbnail size.",
            "fix_applied": "Converted to executive cards and callouts; retained detailed tables in workbook/report.",
            "qa_status": "Improved in rebuilt deck",
            "qa_artifact": "executive_summary_deck_contact_sheet_v3.2.png",
            "owner_placeholder": "Strategy / Design",
            "last_checked_date": TODAY,
        },
    ]
    write_csv(
        "layout_qa_v3_2_3.csv",
        layout_rows,
        [
            "surface",
            "view_or_slide",
            "viewport",
            "issue_found",
            "fix_applied",
            "qa_status",
            "qa_artifact",
            "owner_placeholder",
            "last_checked_date",
        ],
    )

    print("Wrote Chris readiness gate v3.2.3 files.")


if __name__ == "__main__":
    main()
