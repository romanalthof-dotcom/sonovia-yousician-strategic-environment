#!/usr/bin/env python3
"""Regenerate the current brief-aligned final report HTML from handoff CSVs."""

from __future__ import annotations

import csv
import html
from collections import Counter
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
REPORT = BASE / "report"
TODAY = str(date.today())
VERSION = "v3.4"
REPORT_NAME = f"Yousician Strategic Environment Mapping - Final Report {VERSION}"
REL_PENDING = "Internal relationship status not yet captured in this dataset. To be completed by Yousician."
APPFIGURES_PENDING = "Credentialed Appfigures export not available in this package; public app-store proxies are labelled and must not be treated as Appfigures."


def read_csv(name: str) -> list[dict[str, str]]:
    path = HANDOFF / name
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def read_first_csv(*names: str) -> list[dict[str, str]]:
    for name in names:
        rows = read_csv(name)
        if rows:
            return rows
    return []


def esc(value: object) -> str:
    return html.escape(str(value or ""))


def table(rows: list[dict[str, str]], columns: list[str], limit: int | None = None) -> str:
    shown = rows if limit is None else rows[:limit]
    head = "".join(f"<th>{esc(c.replace('_', ' ').title())}</th>" for c in columns)
    body = []
    for row in shown:
        body.append("<tr>" + "".join(f"<td>{esc(row.get(c, ''))}</td>" for c in columns) + "</tr>")
    return f"<table><thead><tr>{head}</tr></thead><tbody>{''.join(body)}</tbody></table>"


def section(title: str, body: str, cls: str = "") -> str:
    return f"<section class='{cls}'><h2>{esc(title)}</h2>{body}</section>"


def is_credentialed_appfigures(row: dict[str, str]) -> bool:
    return row.get("appfigures_status", "").strip().lower().startswith("credentialed appfigures export imported")


def is_open_review(row: dict[str, str]) -> bool:
    return row.get("review_status", "").strip().lower() in ("", "open", "pending human review")


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
    return [row for row in rows if is_open_review(row) and not is_refresh_retry_row(row)]


def refresh_retry_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    return [row for row in rows if is_open_review(row) and is_refresh_retry_row(row)]


def patched_board_readiness(rows: list[dict[str, str]], request_count: int, credentialed_count: int, open_review_count: int, refresh_retry_count: int) -> list[dict[str, str]]:
    patched: list[dict[str, str]] = []
    for row in rows:
        item = dict(row)
        gate = item.get("gate", "").lower()
        if "appfigures" in gate:
            item["safe_language"] = (
                f"{request_count} app rows are ready for Appfigures export; "
                f"{credentialed_count} credentialed rows are currently populated."
            )
            item["readiness_status"] = "Blocked until credentialed export"
        if "refresh" in gate:
            item["safe_language"] = (
                f"{open_review_count} source-change review items and {refresh_retry_count} refresh retry/access rows remain surfaced and are not automatically promoted into final claims."
            )
        if "safe_language" not in item:
            item["safe_language"] = ""
        patched.append(item)
    return patched


def current_status_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    out: list[dict[str, str]] = []
    for row in rows:
        item = dict(row)
        if "mitigation_in_v3_2" in item:
            item["mitigation_in_current_package"] = item.pop("mitigation_in_v3_2")
        out.append(item)
    return out


def neutral_send_readiness_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    out: list[dict[str, str]] = []
    for row in rows:
        item = dict(row)
        if "meaning_for_recipient" not in item:
            item["meaning_for_recipient"] = ""
        out.append(item)
    return out


def neutral_decision_gate_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    out: list[dict[str, str]] = []
    for row in rows:
        item = dict(row)
        if "why_it_matters_for_the_brief" not in item:
            item["why_it_matters_for_the_brief"] = ""
        out.append(item)
    return out


def profile_page(row: dict[str, str]) -> str:
    return f"""
    <section class="profile-page">
      <div class="profile-head">
        <div>
          <span class="kicker">{esc(row.get('profile_id'))} / Key Player Profile</span>
          <h2>{esc(row.get('player'))}</h2>
          <p>{esc(row.get('brief_category'))}</p>
        </div>
        <div class="profile-badge">{esc(row.get('source_confidence'))}</div>
      </div>
      <div class="profile-grid">
        <div class="profile-card"><h3>Who They Are</h3><p>{esc(row.get('what_they_are'))}</p></div>
        <div class="profile-card"><h3>Why They Likely Matter</h3><p>{esc(row.get('why_they_likely_matter'))}</p></div>
        <div class="profile-card"><h3>Scale / Reach Status</h3><p>{esc(row.get('estimated_size_reach'))}</p></div>
        <div class="profile-card"><h3>Ownership / Investors</h3><p>{esc(row.get('ownership_investors'))}</p></div>
        <div class="profile-card"><h3>AI Or Recent Initiatives</h3><p>{esc(row.get('ai_or_recent_initiatives'))}</p></div>
        <div class="profile-card"><h3>Last 24 Months</h3><p>{esc(row.get('last_24m_news'))}</p></div>
        <div class="profile-card wide"><h3>Performance Data Status</h3><p>{esc(row.get('performance_data_status'))}</p></div>
        <div class="profile-card wide"><h3>Relationship Completion</h3><p>{esc(row.get('relationship_completion_status'))}</p></div>
        <div class="profile-card wide"><h3>Next Validation Step</h3><p>{esc(row.get('next_validation_step'))}</p></div>
      </div>
      <p class="source-line">Primary source: {esc(row.get('primary_source_url'))}</p>
    </section>
    """


def main() -> None:
    players = read_csv("players_v3.csv")
    key_players = read_csv("key_players_v3.csv")
    profiles = read_csv("key_player_profiles_v3_2.csv")
    top10 = read_csv("executive_top_10_actor_synthesis_v3_2.csv")
    executive_top_actors = read_csv("executive_top_10_actor_ranked_v3_4.csv")
    ecosystem_2 = read_csv("ecosystem_map_2_0_v3_2_2.csv")
    decision_gates = read_csv("executive_decision_gates_v3_4.csv")
    story_spine = read_csv("executive_story_spine_v3_4.csv")
    board_readiness = read_csv("board_readiness_gate_v3_4.csv")
    send_readiness = read_csv("executive_send_readiness_summary_v3_4.csv")
    appfigures_runbook = read_csv("appfigures_credentialed_import_runbook_v3_2_3.csv")
    layout_qa = read_csv("layout_qa_v3_2_3.csv")
    moves = read_csv("market_moves_24m_curated_v3_2.csv")
    appfigures = read_csv("appfigures-performance-export-integrated-v3.csv")
    appfigures_request = read_csv("appfigures_request_pack_v3_2.csv")
    teachers = read_csv("teachers_schools_education_v3.csv")
    influencers = read_csv("influencers_creators_v3.csv")
    investors = read_csv("investors_v3.csv")
    media = read_csv("media_cultural_drivers_v3.csv")
    awards = read_csv("awards_v3.csv")
    funding = read_csv("funding_v3.csv")
    claims = read_csv("claim_source_matrix_v3_2.csv")
    source_audit = read_csv("source_audit_v3.csv")
    status = read_csv("brief_aligned_status_v3_4.csv")
    gaps = read_csv("remaining_data_gaps_v3.csv")
    review_queue = read_csv("review_queue_v3.csv")
    refresh_log = read_csv("refresh_run_log_v3.csv")
    validation_pass = read_csv("validation_pass_v3_2_1.csv")
    data_quality = read_first_csv("data_quality_check_v3_4.csv", "data_quality_check_v3_2_5.csv")
    deck_qa = read_csv("executive_deck_visual_qa_v3_4.csv")
    dashboard_qa = read_csv("dashboard_data_quality_layout_qa_v3_4.csv")

    board_moves = [r for r in moves if r.get("include_in_board_timeline") == "Yes"]
    appendix_moves = [r for r in moves if r.get("include_in_board_timeline") != "Yes"]
    hard_claims = [r for r in claims if r.get("hard_claim") == "Yes"]
    open_review_queue = source_review_rows(review_queue)
    refresh_retry_queue = refresh_retry_rows(review_queue)
    credentialed_appfigures = [r for r in appfigures if is_credentialed_appfigures(r)]
    board_readiness = patched_board_readiness(board_readiness, len(appfigures_request), len(credentialed_appfigures), len(open_review_queue), len(refresh_retry_queue))
    send_readiness = neutral_send_readiness_rows(send_readiness)
    decision_gates = neutral_decision_gate_rows(decision_gates)
    status = current_status_rows(status)
    claim_conf = Counter(r.get("source_confidence", "") for r in claims)
    source_conf = Counter(r.get("source_confidence", "") for r in source_audit)
    category_counts = Counter(r.get("brief_category", "Unmapped") for r in players)

    category_cards = "".join(
        f"<div class='card'><strong>{esc(cat)}</strong><span>{count}</span></div>"
        for cat, count in category_counts.most_common()
    )
    ecosystem_clusters = [
        ("Direct learning apps", "Simply, Flowkey, Skoove, Fender Play, Gibson App, Rocksmith+, Guitar Tricks, Pickup Music"),
        ("Song / practice ownership", "Ultimate Guitar, MuseScore, Songsterr, Chordify, Chord ai, YouTube"),
        ("Hardware-backed funnels", "Fender, Gibson, Yamaha, Positive Grid, retailers"),
        ("Creator education", "JustinGuitar, Marty Music, Drumeo, Pianote, Rick Beato, Paul Davids"),
        ("Formal education trust", "ABRSM, Trinity, RSL, MTNA, Berklee Online, School of Rock"),
        ("Creation / hobby software", "BandLab, Splice, GarageBand, Ableton, FL Studio, Soundtrap"),
        ("AI music and audio", "Suno, Udio, Moises, ElevenLabs Music, Chord ai"),
        ("Rights / capital / media", "UMG, WMG, Spotify, TikTok, YouTube, Music Business Worldwide, investors, awards/funding"),
    ]
    ecosystem_html = "".join(f"<div class='cluster'><strong>{esc(a)}</strong><p>{esc(b)}</p></div>" for a, b in ecosystem_clusters)

    qa_rows = [
        {"check": "Key-player one-pagers", "status": f"{len(profiles)} profiles generated for 28 marked key players."},
        {"check": "Appfigures", "status": f"{len(appfigures_request)} rows in request pack; {len(credentialed_appfigures)} credentialed Appfigures rows are populated."},
        {"check": "Public app-store proxy", "status": "iTunes Lookup refreshed where iOS IDs were available; public proxy only."},
        {"check": "Market moves", "status": f"{len(board_moves)} board-timeline items; {len(appendix_moves)} appendix/context items."},
        {"check": "Claim-source matrix", "status": f"{len(claims)} claim rows; {len(hard_claims)} marked hard claims requiring review."},
        {"check": "Dashboard refresh", "status": f"{len(refresh_log)} source checks logged; {len(open_review_queue)} source-change review rows and {len(refresh_retry_queue)} refresh retry/access rows remain open."},
    ]
    export_length_rows = [
        {
            "length": "Short",
            "intended_use": "Fast executive read",
            "visible_sections": "Direct answers, files to open first, validation gates",
            "url": "?export=brief&length=short",
        },
        {
            "length": "Standard",
            "intended_use": "Default handoff",
            "visible_sections": "Files, requirement coverage, slide coverage, ecosystem map, validation gates",
            "url": "?export=brief&length=standard",
        },
        {
            "length": "Full",
            "intended_use": "Evidence review",
            "visible_sections": "Standard sections plus key-player proof, database sample, relationships and evidence appendix",
            "url": "?export=brief&length=full",
        },
    ]

    body: list[str] = []
    body.append(
        section(
            "Executive Synthesis: Direct Answers And Top Actors",
            f"""
            <div class="callout"><p><strong>Brief-aligned framing:</strong> the answer is not a competitor list. It is a map of the actors that influence learning, practice, creation, discovery, trust, rights, capital and culture around Yousician.</p></div>
            <h3>The 10 Actors / Clusters That Matter Most</h3>
            {table(executive_top_actors or top10, ["rank", "actor_or_cluster", "primary_influence_layer", "guiding_question_answered", "priority_reason", "board_use_status", "next_validation_step"] if executive_top_actors else ["rank", "actor_or_cluster", "why_top_10", "evidence_basis", "data_gap"])}
            <div class="answer-grid">
              <div class="answer"><h3>Who influences music learning?</h3><p>Direct learning apps, hardware-backed ecosystems, song/practice utilities, creator educators, teacher organizations and wider learning platforms. The closest app-based players still require Appfigures before performance ranking.</p></div>
              <div class="answer"><h3>Who is successful?</h3><p>Success is measured through app-store performance, habits, repertoire/community ownership, creator trust, hardware distribution, AI utility adoption, funding and market momentum. Revenue/download conclusions remain blocked without credentialed Appfigures.</p></div>
              <div class="answer"><h3>Who influences music as a hobby?</h3><p>TikTok, YouTube, Spotify, creator tools, tab/notation platforms, artists, viral songs, media and AI-generation tools shape what people want to play, make and share.</p></div>
              <div class="answer"><h3>Who shapes Yousician's strategic environment?</h3><p>AI companies and rights owners, learning apps, hardware brands, creator platforms, publishers, investors, awards/funding bodies and education benchmarks jointly shape the environment.</p></div>
            </div>
            """,
        )
    )
    if board_readiness or send_readiness:
        body.append(
            section(
                "Board-Use Readiness Gate",
                f"""
                <div class="callout"><p><strong>Board-use rule:</strong> this package is discussion-ready, but Appfigures performance ranking and internal relationship claims remain blocked until the required Yousician inputs are added.</p></div>
                <h3>Send / Review / Blocked Summary</h3>
                {table(send_readiness, ["readiness_bucket", "meaning_for_recipient", "safe_words", "avoid_words", "owner_placeholder"])}
                <h3>Operational Gates</h3>
                {table(board_readiness, ["gate", "readiness_status", "safe_language", "blocked_claims", "required_input", "next_action", "board_use_rule"], limit=12)}
                """,
                "wide",
            )
        )
    if decision_gates:
        body.append(
            section(
                "Decision Gates",
                f"""
                <div class="callout"><p><strong>Use rule:</strong> these are not weaknesses to hide. They are the approval gates that prevent Appfigures, relationship, creator-reach and private-company claims from being overstated.</p></div>
                {table(decision_gates, ["gate", "status", "why_it_matters_for_the_brief", "blocking_input", "decision_needed", "board_use_rule"])}
                """,
                "wide",
            )
        )
    body.append(section("Brief-Aligned Delivery Status", table(status, ["area", "status", "impact", "mitigation_in_current_package", "next_action"]) + table(qa_rows, ["check", "status"])))
    body.append(
        section(
            "Executive Export Lengths",
            f"""
            <div class="callout"><p>The dashboard export now supports three recipient-safe lengths. These are brief-aligned report cuts, not dashboard tours.</p></div>
            {table(export_length_rows, ["length", "intended_use", "visible_sections", "url"])}
            """,
            "wide",
        )
    )
    if data_quality:
        body.append(
            section(
                "Data Quality Check",
                f"<div class='callout'><p>The data-quality gate is intentionally visible: blocked or warning rows are approval gates, not hidden defects.</p></div>{table(data_quality, ['check_id', 'label', 'status', 'count', 'detail', 'next_action', 'last_checked_date'])}",
                "wide",
            )
        )
    body.append(section("Validation And Source Review Pass", table(validation_pass, ["validated_area", "status", "detail", "last_checked_date", "source_url"])))
    body.append(
        section(
            "Visual Ecosystem Map",
            f"""
            <div class="ecosystem">
              <div class="map">
                <div class="ring outer"></div><div class="ring middle"></div><div class="ring inner"></div>
                <div class="center">Yousician<br/><span>Learning / Practice / Hobby</span></div>
              </div>
              <div class="clusters">{ecosystem_html}</div>
            </div>
            <h3>Brief Category Coverage</h3>
            <div class="cards">{category_cards}</div>
            """,
        )
    )
    if ecosystem_2:
        body.append(
            section(
                "Ecosystem Map 2.0: Proximity, Influence And Validation",
                f"""
                <div class="callout"><p>The revised map should be read as influence layers around the learner and around Yousician, not as a simple competitor quadrant. Proximity and momentum are strategic judgments; relationship status is never inferred.</p></div>
                {table(ecosystem_2, ["layer", "ecosystem_zone", "proximity_to_yousician", "influence_level", "momentum_level", "representative_players", "validation_gap", "board_visual_note"])}
                """,
                "wide",
            )
        )
    if story_spine:
        body.append(section("Executive Story Spine For Slide Use", table(story_spine, ["slide", "claim", "proof_object", "caveat"])))
    body.append(section("Appfigures And Performance Data", f"<div class='callout'><p>{APPFIGURES_PENDING}</p></div><h3>Credentialed Export Request Pack</h3>{table(appfigures_request, ['player','app_name','app_store_id_or_package','required_appfigures_fields','credentialed_status','next_action'])}<h3>Public Proxy Snapshot</h3>{table(appfigures, ['player','app_name','rating','review_count','appfigures_status','public_proxy_notes'])}", "wide"))
    if appfigures_runbook:
        body.append(
            section(
                "Appfigures Credentialed Import Runbook",
                f"""
                <div class="callout"><p>Official Appfigures documentation confirms API/report surfaces for sales, revenue, ratings, reviews and App Intelligence estimates. The package therefore treats Appfigures as an importable gate, not as an invented proxy.</p></div>
                {table(appfigures_runbook, ["step", "runbook_stage", "action", "input_file_or_route", "output_file", "acceptance_check", "owner_placeholder", "source_url"])}
                """,
                "wide",
            )
        )
    body.append(section("Board Timeline: Last 24 Months Curated News Moves", table(board_moves, ["date", "move_type", "player_or_signal", "what_happened", "why_it_matters_for_yousician", "confidence", "news_grade"]), "wide"))
    body.append(section("Appendix Timeline Items: Useful Context", table(appendix_moves, ["date", "move_type", "player_or_signal", "what_happened", "curation_note", "confidence", "news_grade"]), "wide"))
    body.append(section("Key Player Overview Table", table(key_players, ["brief_category", "player", "what_they_are", "estimated_size_reach", "ownership_investors", "ai_or_recent_initiatives", "why_they_matter", "confidence", "priority"]), "wide"))
    body.extend(profile_page(row) for row in profiles)
    body.append(section("Claim-To-Source Matrix", f"<div class='callout'><p>Hard claims are claims about funding, ownership, user/reach metrics, AI features, M&A, app-store proxies or quantified scale. These rows should be reviewed before Board use.</p><p>Confidence mix: {esc(dict(claim_conf))}</p></div>{table(hard_claims, ['claim_id','entity','claim_type','claim','source_url','source_confidence','review_action'], limit=80)}", "wide"))
    body.append(section("Teachers, Schools And Education Organizations", table(teachers, ["organization", "type", "size_reach", "region", "yousician_relevance_tier", "beginner_influence", "partnership_potential", "next_validation_step"]), "wide"))
    body.append(section("Influencers, Creators And Educators", table(influencers, ["name_channel", "instrument", "platform", "youtube_subscribers", "youtube_status", "tiktok_instagram_status", "average_views_status", "reach_completeness", "target_learner_type", "source_confidence"]), "wide"))
    body.append(section("Investors Active In The Space", table(investors, ["investor_fund", "type", "thesis", "relevant_portfolio_companies", "recent_relevant_deals", "why_relevant_for_yousician", "source_confidence"]), "wide"))
    body.append(section("Media And Cultural Drivers", table(media, ["driver", "type", "current_signal", "audience_reach", "why_it_matters_for_yousician", "source_confidence"]), "wide"))
    body.append(section("Awards And Funding: Operational Tracker", "<h3>Awards</h3>" + table(awards, ["award_name", "organizer", "category_fit", "deadline_status", "effort_level", "priority", "immediate_next_step", "decision_needed"]) + "<h3>Funding</h3>" + table(funding, ["funding_source", "geography", "funding_type", "deadline_status", "funding_amount_or_range", "effort_level", "immediate_next_step", "decision_needed"]), "wide"))
    body.append(section("Relationship Completion Layer", f"<div class='callout'><p>{esc(REL_PENDING)}</p><p>This is not an external market claim. It is an internal completion layer for owner, history, sensitivity and next step.</p></div>"))
    body.append(section("Data Gaps And Validation Needs", table(gaps, ["gap", "status", "detail", "priority", "next_action", "owner_placeholder"])))
    if deck_qa:
        body.append(
            section(
                "Executive Deck Visual QA",
                table(deck_qa, ["check_id", "status", "result", "detail", "artifact", "last_checked_date"]),
                "wide",
            )
        )
    if dashboard_qa:
        body.append(
            section(
                "Dashboard Browser QA",
                table(dashboard_qa, ["check_id", "viewport", "width", "height", "status", "document_overflow_px", "overflow_candidate_count", "console_issue_count", "failed_request_count", "screenshot"]),
                "wide",
            )
        )
    if layout_qa:
        body.append(
            section(
                "Dashboard Layout QA And Presentation Fixes",
                table(layout_qa, ["surface", "view_or_slide", "viewport", "issue_found", "fix_applied", "qa_status", "qa_artifact"]),
                "wide",
            )
        )
    body.append(section("Source Audit Snapshot", f"<p>Source confidence mix: {esc(dict(source_conf))}</p>{table(source_audit, ['source_id','title','source_type','source_confidence','url'], limit=70)}", "wide"))

    html_doc = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>{esc(REPORT_NAME)}</title>
  <style>
    @page {{ size: A4 landscape; margin: 14mm; }}
    * {{ box-sizing: border-box; }}
    body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color:#172026; margin:0; background:#f6f7f2; }}
    section {{ page-break-after: always; padding:8mm 6mm; }}
    h1 {{ font-size:38px; line-height:1.04; margin:0 0 10px; letter-spacing:0; }}
    h2 {{ font-size:23px; margin:0 0 10px; }}
    h3 {{ font-size:13px; margin:12px 0 6px; color:#0f5f50; }}
    p, li {{ font-size:10.8px; line-height:1.42; }}
    .cover {{ display:grid; grid-template-columns:1.05fr .95fr; gap:28px; min-height:170mm; align-items:center; }}
    .kicker {{ text-transform:uppercase; letter-spacing:.09em; font-size:9px; font-weight:700; color:#15745d; }}
    .subtitle {{ font-size:15px; max-width:760px; color:#3a464b; }}
    .meta, .cards, .answer-grid {{ display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin-top:16px; }}
    .answer-grid {{ grid-template-columns:repeat(2, 1fr); }}
    .meta div, .card, .callout, .answer, .cluster, .profile-card {{ background:#fff; border:1px solid #d9dfd8; border-radius:8px; padding:11px; }}
    .meta strong, .card span {{ display:block; font-size:22px; color:#0f5f50; }}
    .callout {{ border-left:5px solid #00d292; margin:10px 0; }}
    table {{ width:100%; border-collapse:collapse; background:#fff; border:1px solid #d9dfd8; }}
    th {{ background:#10231f; color:#fff; text-align:left; font-size:7.7px; padding:5px; vertical-align:top; }}
    td {{ font-size:7.45px; line-height:1.23; padding:4px 5px; border-top:1px solid #e4e8e2; vertical-align:top; }}
    .wide td {{ font-size:6.9px; }}
    .ecosystem {{ display:grid; grid-template-columns:.9fr 1.1fr; gap:16px; }}
    .map {{ position:relative; min-height:380px; background:#fff; border:1px solid #d9dfd8; border-radius:8px; overflow:hidden; }}
    .ring {{ position:absolute; border-radius:999px; border:2px solid #c6d8cb; left:50%; top:50%; transform:translate(-50%,-50%); }}
    .outer {{ width:360px; height:360px; background:#f2f4fb; }}
    .middle {{ width:270px; height:270px; background:#eef8f2; }}
    .inner {{ width:180px; height:180px; background:#fff9e8; }}
    .center {{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:160px; height:86px; border-radius:12px; background:#10231f; color:white; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; font-weight:700; }}
    .center span {{ font-size:9px; font-weight:500; }}
    .clusters {{ display:grid; grid-template-columns:repeat(2, 1fr); gap:8px; }}
    .cluster strong {{ font-size:10px; }}
    .cluster p {{ margin:4px 0 0; font-size:9px; }}
    .profile-page {{ background:#f6f7f2; }}
    .profile-head {{ display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:12px; }}
    .profile-head h2 {{ font-size:30px; margin:3px 0; }}
    .profile-badge {{ background:#10231f; color:#fff; border-radius:999px; padding:7px 12px; font-size:10px; }}
    .profile-grid {{ display:grid; grid-template-columns:repeat(3, 1fr); gap:9px; }}
    .profile-card {{ min-height:72px; }}
    .profile-card.wide {{ grid-column:span 3; min-height:50px; }}
    .source-line {{ font-size:8px; color:#59656b; margin-top:10px; }}
    .footer {{ position:fixed; bottom:5mm; right:14mm; font-size:8px; color:#6a7479; }}
  </style>
</head>
<body>
  <div class="footer">{esc(REPORT_NAME)}</div>
  <section class="cover">
    <div>
      <div class="kicker">Final Report {esc(VERSION)} / brief-aligned delivery</div>
      <h1>Yousician Strategic Environment Mapping</h1>
      <p class="subtitle">A broad, current ecosystem map around Yousician with explicit top actors, curated market news, 28 key-player profiles, Appfigures export gap handling, claim-level source QA, relationship completion fields, export-length variants and review-gated refresh mechanics.</p>
      <div class="meta">
        <div><strong>{len(players)}</strong><span>tracked players</span></div>
        <div><strong>{len(profiles)}</strong><span>key-player profiles</span></div>
        <div><strong>{len(board_moves)}</strong><span>board timeline moves</span></div>
        <div><strong>{len(claims)}</strong><span>claim-source rows</span></div>
        <div><strong>{len(appfigures_request)}</strong><span>Appfigures request rows</span></div>
        <div><strong>{len(credentialed_appfigures)}</strong><span>credentialed Appfigures rows</span></div>
        <div><strong>{len(open_review_queue)}</strong><span>source-review rows</span></div>
        <div><strong>{len(refresh_retry_queue)}</strong><span>refresh retry rows</span></div>
        <div><strong>{len(refresh_log)}</strong><span>source checks logged</span></div>
      </div>
      <p>{esc(APPFIGURES_PENDING)}</p>
    </div>
    <div class="callout">
      <h2>Executive Summary</h2>
      <p>The ecosystem is broader than direct competitors. It spans learning apps, song/practice ecosystems, hardware-backed beginner funnels, teachers, schools, creator educators, hobby software, AI music and audio companies, rights owners, media/cultural drivers, investors, awards and public funding.</p>
      <p>{esc(VERSION)} makes the remaining uncertainty explicit: Appfigures is still missing, but the export pack is ready; public app-store proxies are labelled; hard claims are mapped to sources; market moves are curated into board timeline vs appendix context; and all 28 key players now have compact profile pages.</p>
    </div>
  </section>
  {''.join(body)}
</body>
</html>"""
    REPORT.mkdir(parents=True, exist_ok=True)
    out = REPORT / f"{REPORT_NAME}.html"
    out.write_text(html_doc, encoding="utf-8")
    print(out)


if __name__ == "__main__":
    main()
