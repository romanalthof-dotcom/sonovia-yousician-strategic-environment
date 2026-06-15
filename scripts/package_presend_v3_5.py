#!/usr/bin/env python3
"""Create a clean submission package with a simplified recipient hierarchy."""

from __future__ import annotations

import shutil
import zipfile
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
ROOT = BASE.parents[1]
HANDOFF = BASE / "handoff"
REPORT = BASE / "report"
DELIVERABLES = BASE / "deliverables"
OUT = ROOT / "v3.9-submission-deliverables"
SEND = OUT / "00_SEND_TO_RECIPIENT"
CLEAN_SEND = OUT / "01_SUBMISSION_PACKAGE"
VERSION = "v3.9"
TODAY = str(date.today())


def copy(src: Path, dst: Path) -> None:
    if not src.exists():
        raise FileNotFoundError(src)
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)


TEXT_REPLACEMENTS = [
    ("Appfigures request pack", "Appfigures data request"),
    ("appfigures request pack", "Appfigures data request"),
    ("request pack", "data request"),
    ("Request pack", "Data request"),
    ("hard claims", "source-linked statements"),
    ("Hard claims", "Source-linked statements"),
    ("hard claim", "source-linked statement"),
    ("Hard claim", "Source-linked statement"),
    ("Source-mapped", "Source-linked"),
    ("Source mapped", "Source linked"),
    ("Claim-source", "Source-context"),
    ("claim-source", "source-context"),
    ("Decision gates", "Open input notes"),
    ("blocked_reason", "open_reason"),
    ("blocked_claims", "pending_statements"),
    ("Blocked until", "Pending until"),
    ("Blocked by", "Pending because"),
    ("Blocked /", "Pending /"),
    ("blocked until", "pending until"),
    ("blocked by", "pending because"),
    ("Blocked", "Pending"),
    ("blocked", "pending"),
]


def sanitize_text(text: str) -> str:
    for old, new in TEXT_REPLACEMENTS:
        text = text.replace(old, new)
    return text


def copy_sanitized_text(src: Path, dst: Path) -> None:
    if not src.exists():
        raise FileNotFoundError(src)
    write(dst, sanitize_text(src.read_text(encoding="utf-8")))


def write(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def zip_dir(source_dir: Path, zip_path: Path) -> None:
    if zip_path.exists():
        zip_path.unlink()
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for path in sorted(source_dir.rglob("*")):
            if path.is_dir() or path.name == ".DS_Store" or "__MACOSX" in path.parts:
                continue
            zf.write(path, path.relative_to(source_dir))


def zip_dashboard(zip_path: Path) -> None:
    if zip_path.exists():
        zip_path.unlink()
    skip_parts = {"__pycache__", "backups", "logs", "backend"}
    with zipfile.ZipFile(zip_path, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        for path in sorted(BASE.rglob("*")):
            if path.is_dir() or path.name == ".DS_Store" or "__MACOSX" in path.parts:
                continue
            rel = path.relative_to(BASE)
            lower_name = path.name.lower()
            if any(part in skip_parts for part in rel.parts):
                continue
            if "chris" in lower_name or "board_safe" in lower_name or "blocked_hard_claims_v3_6" in lower_name or "final_claim_and_gate_summary_v3_6" in lower_name:
                continue
            if "v3_6" in lower_name or "v3.6" in lower_name or "v3_7" in lower_name or "v3.7" in lower_name or "v3_8" in lower_name or "v3.8" in lower_name:
                continue
            if lower_name.startswith("v3_") or lower_name.startswith("start_here"):
                continue
            if path.suffix.lower() in {".pdf", ".pptx", ".xlsx", ".html", ".png"} and (
                "v3.2" in lower_name or "v3.3" in lower_name or "v3.4" in lower_name or "v3.5" in lower_name or "v3.6" in lower_name or "v3.7" in lower_name or "v3.8" in lower_name
            ):
                continue
            zf.write(path, rel)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    if SEND.exists():
        shutil.rmtree(SEND)
    SEND.mkdir(parents=True)
    if CLEAN_SEND.exists():
        shutil.rmtree(CLEAN_SEND)
    CLEAN_SEND.mkdir(parents=True)

    report_pdf = REPORT / f"Yousician Strategic Environment Mapping - Market Landscape Report {VERSION}.pdf"
    deck = OUT / f"Yousician Strategic Environment Executive Summary {VERSION}.pptx"
    deck_pdf = OUT / f"Yousician Strategic Environment Executive Summary {VERSION}.pdf"
    workbook = BASE / "Yousician Strategic Environment Database v3.9.xlsx"
    dashboard_zip = OUT / "yousician-strategic-environment-dashboard-v3.9.zip"
    zip_dashboard(dashboard_zip)

    copy(deck, SEND / "00_OPEN_FIRST" / "01 Executive Summary Deck.pptx")
    copy(deck_pdf, SEND / "00_OPEN_FIRST" / "02 Executive Summary Deck - PDF Reading Copy.pdf")
    copy(report_pdf, SEND / "00_OPEN_FIRST" / "03 Market Landscape Report.pdf")
    copy(workbook, SEND / "00_OPEN_FIRST" / "04 Strategic Environment Database.xlsx")

    copy(HANDOFF / "appfigures_request_pack_v3_2.csv", SEND / "01_COMPLETION_FILES" / "01 Appfigures Data Request.csv")
    copy(HANDOFF / "relationships_template_v3.csv", SEND / "01_COMPLETION_FILES" / "02 Relationship Input Template.csv")
    copy_sanitized_text(HANDOFF / "remaining_data_gaps_v3.csv", SEND / "01_COMPLETION_FILES" / "03 Remaining Data Gaps.csv")
    copy_sanitized_text(HANDOFF / "board_readiness_gate_v3_9.csv", SEND / "01_COMPLETION_FILES" / "04 Open Input Status.csv")
    copy_sanitized_text(HANDOFF / "final_claim_and_gate_summary_v3_9.csv", SEND / "01_COMPLETION_FILES" / "05 Final Claim And Gate Summary.csv")

    optional = SEND / "02_OPTIONAL_APPENDIX"
    for src, name in [
        (DELIVERABLES / "Yousician Strategic Environment Executive Export - Short v3.9.pdf", "01 Optional Executive Export - Short.pdf"),
        (DELIVERABLES / "Yousician Strategic Environment Executive Export - Standard v3.9.pdf", "02 Optional Executive Export - Standard.pdf"),
        (DELIVERABLES / "Yousician Strategic Environment Executive Export - Full v3.9.pdf", "03 Optional Executive Export - Full.pdf"),
        (dashboard_zip, "04 Optional Dashboard Website.zip"),
        (HANDOFF / "source_audit_v3.csv", "05 Source Audit.csv"),
        (HANDOFF / "claim_source_matrix_v3_2.csv", "06 Source Context Matrix.csv"),
        (HANDOFF / "source_mapped_claims_eligible_v3_9.csv", "07 Source-Linked Observations Eligible For Main Narrative.csv"),
        (HANDOFF / "claims_requiring_final_validation_v3_9.csv", "08 Statements Requiring Final Validation.csv"),
        (HANDOFF / "direct_music_learning_apps_snapshot_v3_9.csv", "09 Direct Music Learning Apps Snapshot.csv"),
        (HANDOFF / "data_quality_check_v3_4.csv", "10 Data Quality Check.csv"),
        (OUT / "executive_summary_deck_contact_sheet_v3.9.png", "11 Deck Contact Sheet.png"),
    ]:
        if src.exists():
            if src.suffix.lower() in {".csv", ".md", ".txt"}:
                copy_sanitized_text(src, optional / name)
            else:
                copy(src, optional / name)

    write(
        SEND / "README_FIRST.md",
        "\n".join(
            [
                "# Yousician Strategic Environment Mapping - Submission Package",
                "",
                "Suggested reading order:",
                "",
                "1. `00_OPEN_FIRST/01 Executive Summary Deck.pptx`",
                "2. `00_OPEN_FIRST/02 Executive Summary Deck - PDF Reading Copy.pdf` if a non-editing reading copy is preferred",
                "3. `00_OPEN_FIRST/03 Market Landscape Report.pdf`",
                "4. `00_OPEN_FIRST/04 Strategic Environment Database.xlsx`",
                "",
                "Support/input files:",
                "",
                "- `01_COMPLETION_FILES/01 Appfigures Data Request.csv`",
                "- `01_COMPLETION_FILES/02 Relationship Input Template.csv`",
                "- `01_COMPLETION_FILES/03 Remaining Data Gaps.csv`",
                "- `01_COMPLETION_FILES/04 Open Input Status.csv`",
                "- `01_COMPLETION_FILES/05 Final Claim And Gate Summary.csv`",
                "",
                "Optional appendix files:",
                "",
                "- Export-length PDFs, dashboard ZIP, source audit, source-context matrix, data-quality check and deck contact sheet are in `02_OPTIONAL_APPENDIX` for internal backup only.",
                "",
                "Important caveats:",
                "",
                "- The PowerPoint deck is built from editable PowerPoint text and shape objects. The PDF is included only as a fixed reading copy.",
                "- The report includes six brief-style key-player highlight profiles; the workbook includes a dedicated `One Pagers` sheet for all 28 key players in the brief-style field structure, including public size/reach proxies where available.",
                "- The deck, report and workbook include static Yousician User Insights grounding for market interpretation; it is not a live Confluence extract or current KPI export.",
                "- App-based revenue, downloads, rank trends and country mix require credentialed Appfigures data.",
                "- No credentialed Appfigures export is included.",
                "- Public app-store proxies are not Appfigures and should not be presented as Appfigures.",
                "- Source-linked observations are eligible for internal discussion with visible source confidence; final source skim is still recommended before broader external use.",
                "- Low/Pending statements and Appfigures-dependent performance statements are appendix-only until validation is completed.",
                "- Internal relationship status is not inferred externally. Standard wording: Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
                "- Refresh/change detection remains review-gated; executive outputs should not auto-publish changed claims without human approval.",
                "- Latest source-skim update included: Suno announced more than $400M in Series D funding at a $5.4B post-money valuation on June 3, 2026.",
                "",
            ]
        ),
    )

    write(
        SEND / "CHANGELOG.md",
        "\n".join(
            [
                "# Changelog",
                "",
                f"Date: {TODAY}",
                "",
                "- Added the June 3, 2026 Suno Series D update to the timeline, top-actor logic, key-player profile and report narrative.",
                "- Corrected official dates for Google Play Apps Accelerator class of 2026 and Apple 2026 Design Award winners.",
                "- Added static Yousician User Insights grounding to the deck, report and workbook as internal context for interpreting the ecosystem map and key-player relevance.",
                "- Added six brief-style key-player highlight profiles to the report and kept all 28 priority actors in the workbook One Pagers sheet with description, business snapshot, AI/recent initiatives, last-24-months signal, ecosystem position, relationship field, strategic assessment and validation status.",
                "- Added a direct music-learning app snapshot covering Simply, Flowkey, Skoove, Fender Play, Gibson App, Guitar Tricks, Pickup Music, Rocksmith+, Musora, Fretello and Duolingo Music.",
                "- Rebuilt the executive deck as a 15-slide visual briefing with a direct-answer opening, static internal-context grounding slide, brief-category coverage slide, one-pager coverage slide and closing synthesis.",
                "- Removed the standalone open-input/completion slide from the main deck; Appfigures and relationship caveats are now limited to concise notes.",
                "- Polished priority actors, direct learning apps, market moves, trust infrastructure, capital/funding and bottom-line slides to remove process language, clipped text and ellipses.",
                "- Rebuilt the key-player slide and report section so the first read shows Chris-style highlight profiles before the complete key-player table.",
                "- Replaced the earlier research-board slide look with a rendered visual-master deck using larger claims, stronger Yousician-adjacent green/ink contrast, cleaner role lanes and less dashboard-like tabular density.",
                "- Redesigned the weakest executive slides: priority actors now use role lanes, market moves use a curated news wall, the hobby section uses a journey map, and caveats are shown as open input notes instead of technical gates.",
                "- Reduced the default dashboard and standard export to a brief-only executive view: no visible research mode, runbook, claim-matrix, review-queue or backend language in the recipient-facing opening.",
                "- Reframed source-confidence filtering as source-linked observations eligible for internal discussion, with Low/Pending and Appfigures-dependent statements staying appendix-only.",
                "- Cleaned key-player profiles so missing recent news, Appfigures and relationship inputs appear as validation/input statuses rather than placeholder boxes.",
                "- Reframed the deck around the guiding questions, top actors, ecosystem map, Appfigures/direct-learning snapshot, curated news wall, AI/rights pressure, hobby journey, trust flywheel, capital/awards/funding, open inputs and executive synthesis.",
                "- Removed remaining internal slide-consumption language and softened Board-specific wording in the visible deck, report and dashboard export.",
                "- Removed internal research/claim-integrity panels from the recipient-facing executive dashboard and key-player one-pagers.",
                "- Decluttered executive visuals so all records remain represented as quiet density points while key players and the selected profile stay visually prominent.",
                "- Replaced visible source-queue wording in export views with neutral source-validation language.",
                "- Removed remaining handoff/workflow language from the recipient-facing dashboard and export view: no data-request, pending-input, review, open-first, or report-options language appears in the visible executive readout.",
                "- Corrected the visible Appfigures status to show credentialed Appfigures as pending unless credentialed rows are actually populated.",
                "- Removed remaining internal profile labels from the executive player view: claim-integrity, draft-status, source-queue and duplicate data-note language are hidden outside Research mode.",
                "- Reworded the ecosystem map notes and one-pager caveats so the recipient view reads as a market report rather than a dashboard/workflow explanation.",
                "- Added final responsive guardrails for tabs, map containers and recipient-facing cards so split-screen and mobile views do not create text or layout collisions.",
                "- Reframed the main PDF and package naming as a submission-ready market landscape rather than an over-absolute final/board package.",
                "- Cleaned the backend package endpoint to remove legacy unreachable package code from the dashboard ZIP.",
                "- Moved dashboard, refresh, source QA and export-length material into optional appendix or support files.",
                "- Kept Appfigures as an explicit open input: 0 credentialed Appfigures rows are populated.",
                "- Kept relationship fields neutral with the required Yousician-input wording.",
                "- Reorganized the send package into open-first files, support/input files and optional appendices.",
                "- Added a simplified submission package with only the executive deck, market report, database and required support/input files.",
                "",
            ]
        ),
    )

    final_zip = OUT / "Yousician Strategic Environment Mapping Package.zip"
    zip_dir(SEND, final_zip)
    versioned_full_zip = OUT / "Yousician Strategic Environment Mapping Package v3.9.zip"
    copy(final_zip, versioned_full_zip)

    copy(SEND / "00_OPEN_FIRST" / "01 Executive Summary Deck.pptx", CLEAN_SEND / "01 Executive Summary Deck.pptx")
    copy(SEND / "00_OPEN_FIRST" / "02 Executive Summary Deck - PDF Reading Copy.pdf", CLEAN_SEND / "02 Executive Summary Deck - PDF Reading Copy.pdf")
    copy(SEND / "00_OPEN_FIRST" / "03 Market Landscape Report.pdf", CLEAN_SEND / "03 Market Landscape Report.pdf")
    copy(SEND / "00_OPEN_FIRST" / "04 Strategic Environment Database.xlsx", CLEAN_SEND / "04 Strategic Environment Database.xlsx")
    copy(SEND / "01_COMPLETION_FILES" / "01 Appfigures Data Request.csv", CLEAN_SEND / "05 Appfigures Data Request.csv")
    copy(SEND / "01_COMPLETION_FILES" / "02 Relationship Input Template.csv", CLEAN_SEND / "06 Internal Relationship Input Template.csv")
    copy(SEND / "01_COMPLETION_FILES" / "03 Remaining Data Gaps.csv", CLEAN_SEND / "07 Remaining Data Gaps.csv")
    write(
        CLEAN_SEND / "README - Submission Notes.md",
        "\n".join(
            [
                "# Yousician Strategic Environment Mapping",
                "",
                "Suggested reading order:",
                "",
                "1. `01 Executive Summary Deck.pptx`",
                "2. `02 Executive Summary Deck - PDF Reading Copy.pdf` if a non-editing reading copy is preferred",
                "3. `03 Market Landscape Report.pdf`",
                "4. `04 Strategic Environment Database.xlsx`",
                "",
                "Support/input files included:",
                "",
                "- `05 Appfigures Data Request.csv`",
                "- `06 Internal Relationship Input Template.csv`",
                "- `07 Remaining Data Gaps.csv`",
                "",
                "Important notes:",
                "",
                "- `01 Executive Summary Deck.pptx` is editable PowerPoint text and shapes. `02 Executive Summary Deck - PDF Reading Copy.pdf` is only the fixed reading copy.",
                "- `03 Market Landscape Report.pdf` includes six key-player highlight profiles in the brief-style format; `04 Strategic Environment Database.xlsx` includes a dedicated `One Pagers` sheet for all 28 key players, including public size/reach proxies where available.",
                "- `04 Strategic Environment Database.xlsx` also includes an `Internal Context` sheet with static Yousician User Insights grounding; it is not a live Confluence extract or current KPI export.",
                "- App-based revenue, downloads, ranking history and country mix require credentialed Appfigures data.",
                "- No credentialed Appfigures export is included.",
                "- Public app-store or traffic proxies should not be treated as Appfigures.",
                "- Internal relationship status is not inferred externally. Standard wording: Internal relationship status not yet captured in this dataset. To be completed by Yousician.",
                "- Dashboard and source-audit appendix files are available on request for deeper validation, but are not required for the first read.",
                "",
            ]
        ),
    )

    clean_zip = OUT / "Yousician Strategic Environment Mapping - Submission Package.zip"
    zip_dir(CLEAN_SEND, clean_zip)
    recipient_zip = OUT / "Yousician Strategic Environment Mapping - Recipient Package.zip"
    copy(clean_zip, recipient_zip)
    copy(clean_zip, DELIVERABLES / clean_zip.name)

    optional_zip = OUT / "Yousician Strategic Environment Mapping - Optional Appendix.zip"
    zip_dir(SEND / "02_OPTIONAL_APPENDIX", optional_zip)

    print(final_zip)
    print(versioned_full_zip)
    print(clean_zip)
    print(recipient_zip)
    print(optional_zip)


if __name__ == "__main__":
    main()
