#!/usr/bin/env python3
"""Build a compact market landscape report focused on the original brief.

This report intentionally separates the recipient narrative from the operating
system behind the dashboard. QA, refresh, and runbook material is kept in the
appendix so the main read feels like a market report.
"""

from __future__ import annotations

import csv
import html
from collections import Counter
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
REPORT = BASE / "report"
DELIVERABLES = BASE / "deliverables"
VERSION = "v3.9"
TODAY = str(date.today())
REPORT_NAME = f"Yousician Strategic Environment Mapping - Market Landscape Report {VERSION}"
REL_PENDING = "Internal relationship status not yet captured in this dataset. To be completed by Yousician."
APPFIGURES_BLOCK = (
    "Appfigures remains the required source for app revenue, downloads, rank trends, review velocity and country mix. "
    "Those fields are prepared for import and are not estimated in this package."
)

BRIEF_CATEGORIES = [
    "Music learning apps and platforms",
    "Instrument brands, manufacturers and distributors",
    "Teachers, schools and music education organizations",
    "Music hobby software ecosystem",
    "Wider education and self-improvement ecosystem",
    "Investors active in the space",
    "Influencers, creators and educators",
    "Media, publishers and cultural drivers",
    "AI companies and AI initiatives",
    "Awards",
    "Funding",
    "Last 24 months on the market",
]

SUCCESS_TYPES = [
    {
        "success_type": "Direct app benchmark",
        "actors": "Simply / JoyTunes",
        "evidence": "Closest app-learning benchmark for onboarding, motivation, subscription learning and beginner conversion.",
        "caveat": "Appfigures still required for revenue/download ranking.",
    },
    {
        "success_type": "Repertoire / practice surface",
        "actors": "Ultimate Guitar / Muse Group",
        "evidence": "Strong repertoire ownership and song-intent surface around tabs, chords and practice habits.",
        "caveat": "Use as ecosystem influence, not revenue ranking.",
    },
    {
        "success_type": "AI practice utility",
        "actors": "Music.AI / Moises",
        "evidence": "Stems, isolation, transcription and practice utility connect AI directly to playing and creation workflows.",
        "caveat": "Mobile performance still requires credentialed validation.",
    },
    {
        "success_type": "AI creation signal",
        "actors": "Suno",
        "evidence": "Funding, rights debate and product visibility make AI music creation a market-structure force.",
        "caveat": "Not a learning-app performance comparable.",
    },
    {
        "success_type": "Hobby creation / community",
        "actors": "BandLab / Splice",
        "evidence": "Creator workflows and communities shape participation beyond formal learning.",
        "caveat": "Compare by creator ecosystem strength, not lesson UX.",
    },
    {
        "success_type": "Trust and curriculum layer",
        "actors": "ABRSM / Trinity / School of Rock",
        "evidence": "Certification, teacher trust and education infrastructure shape parent/learner confidence.",
        "caveat": "Success is credibility and reach, not app-store metrics.",
    },
    {
        "success_type": "Hardware funnel",
        "actors": "Fender / Gibson / Yamaha",
        "evidence": "Brands and retailers influence instrument access, bundles and beginner pathways.",
        "caveat": "Hardware distribution and learning-app performance should be read separately.",
    },
]

INTERNAL_CONTEXT_ROWS = [
    {
        "context_area": "Yousician users",
        "internal_signal": "Yousician users are usually early in their guitar journey and want a guided, personalised path, timely feedback and eventually their favourite songs.",
        "strategic_implication": "Direct learning benchmarks should be read through beginner guidance, feedback, motivation and song relevance, not only feature breadth.",
    },
    {
        "context_area": "GuitarTuna users",
        "internal_signal": "GuitarTuna users are more self-guided. They want independence, songs, chords, tools and optional feedback rather than a fixed path.",
        "strategic_implication": "The ecosystem map needs song, chord, tab, utility and self-guided practice surfaces alongside formal learning apps.",
    },
    {
        "context_area": "Song-led jobs",
        "internal_signal": "Across skill levels, important guitar jobs cluster around learning chords, transitions, song sections, strumming patterns and playing songs from memory.",
        "strategic_implication": "Ultimate Guitar, Songsterr, MuseScore, Chordify, YouTube and AI song-practice tools are core habit surfaces, not appendix-only comparables.",
    },
    {
        "context_area": "Starting and restarting",
        "internal_signal": "People start or restart because of love of music, feel-good free time, the guitar dream, access to a guitar, or emotional life moments.",
        "strategic_implication": "Hardware brands, retailers, creators and emotional beginner UX are strategically relevant because they shape re-entry before app choice.",
    },
    {
        "context_area": "Market awareness",
        "internal_signal": "Internal market context says the category has low overall awareness, lacks strong brands and lacks a clear leader beyond YouTube as a default free source.",
        "strategic_implication": "The opportunity is not only to beat app competitors; it is also to make the category easier, less intimidating and more clearly branded.",
    },
    {
        "context_area": "Known competitor read",
        "internal_signal": "Simply Guitar is strong on emotional UX and song-focused courses; Ultimate Guitar owns a large chord/tab library but can feel cluttered; YouTube is free but uncurated.",
        "strategic_implication": "Success should be read as a mix of emotional onboarding, repertoire access, guidance quality and reduced user research burden.",
    },
]

INTERNAL_CONTEXT_SOURCE = (
    "Static Yousician user/market context by User Insights, last reviewed 2026-06-04; "
    "based on internal meta-analyses for Yousician users, GuitarTuna users and market research. "
    "Live Confluence research database was not queried in this packaging pass."
)

HIGHLIGHT_PLAYERS = ["Simply", "Ultimate Guitar", "Suno", "Moises", "Fender", "BandLab"]


def read_csv(name: str) -> list[dict[str, str]]:
    path = HANDOFF / name
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def esc(value: object) -> str:
    return html.escape(str(value or ""))


def short(value: object, limit: int = 210) -> str:
    del limit
    text = " ".join(str(value or "").split())
    return text


TEXT_REPLACEMENTS = {
    "external Board/investor use": "external leadership/investor use",
    "external board/investor use": "external leadership/investor use",
    "before investor/board usage": "before investor or leadership usage",
    "before campaign or board use": "before campaign or leadership use",
    "before board use": "before leadership use",
    "final board snapshot": "final leadership snapshot",
    "board-level risk": "leadership-level risk",
    "Board timeline depth": "Main timeline depth",
    "board timeline": "main timeline",
    "board-grade": "news-grade",
    "Board-grade": "News-grade",
    "board-ready": "leadership-ready",
    "Board-ready": "Leadership-ready",
    "Appfigures request pack": "Appfigures data request",
    "appfigures request pack": "Appfigures data request",
    "Appfigures completion file": "Appfigures data request",
    "appfigures completion file": "Appfigures data request",
    "Relationship completion layer": "Relationship input field",
    "relationship completion layer": "relationship input field",
    "prepared for Yousician completion": "prepared for Yousician input",
    "complete relationship owner": "fill relationship owner",
    "request pack": "data request",
    "Request pack": "Data request",
    "completion file": "data request",
    "Completion file": "Data request",
    "hard_claims": "source_context",
    "Hard-claim source confidence": "Source-linked statement confidence",
    "hard claims": "source-linked statements",
    "Hard claims": "Source-linked statements",
    "hard claim": "source-linked statement",
    "Hard claim": "Source-linked statement",
    "claim-source matrix": "source appendix",
    "Claim-source matrix": "Source appendix",
    "M&A claims": "M&A statements",
    "claims before investor-facing use": "statements before broader external use",
    "run scripts/import_appfigures_export.py with --credentialed.": "import the credentialed Appfigures export.",
    "scripts/import_appfigures_export.py": "the Appfigures import workflow",
    "Blocked /": "Pending /",
    "blocked /": "pending /",
    "Blocked Reason": "Open Reason",
    "blocked reason": "open reason",
    "Claim Type": "Statement Type",
    "Claim": "Statement",
    "blocked": "pending",
    "Blocked": "Pending",
}


def display_text(value: object) -> str:
    text = str(value or "")
    for old, new in TEXT_REPLACEMENTS.items():
        text = text.replace(old, new)
    return text


def display_rows(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    return [{key: display_text(value) for key, value in row.items()} for row in rows]


def table(rows: list[dict[str, str]], columns: list[str], limit: int | None = None, cls: str = "") -> str:
    shown = rows if limit is None else rows[:limit]
    head = "".join(f"<th>{esc(display_text(c.replace('_', ' ').title()))}</th>" for c in columns)
    body = []
    for row in shown:
        body.append("<tr>" + "".join(f"<td>{esc(display_text(row.get(c, '')))}</td>" for c in columns) + "</tr>")
    return f"<table class='{esc(cls)}'><thead><tr>{head}</tr></thead><tbody>{''.join(body)}</tbody></table>"


def status_class(value: str) -> str:
    low = value.lower()
    if "block" in low or "pending" in low or "not available" in low:
        return "risk"
    if "warning" in low or "review" in low or "partial" in low:
        return "watch"
    return "ready"


def credentialed_appfigures(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    return [
        row
        for row in rows
        if row.get("appfigures_status", "").strip().lower().startswith("credentialed appfigures export imported")
    ]


def is_open_review(row: dict[str, str]) -> bool:
    return row.get("review_status", "").strip().lower() in ("", "open", "pending human review")


def is_refresh_retry(row: dict[str, str]) -> bool:
    text = " ".join(
        [row.get("notes", ""), row.get("current_status", ""), row.get("suggested_action", "")]
    ).lower()
    return "urlopen error" in text or "http error" in text or row.get("current_status", "").strip().upper() == "ERROR"


def key_profile_card(row: dict[str, str], public_proxy: str = "") -> str:
    row = {key: display_text(value) for key, value in row.items()}
    last_news = row.get("last_24m_news", "")
    if "no strong last-24-month" in last_news.lower() or "no main-timeline recent-news item" in last_news.lower() or "no news-grade recent-news item" in last_news.lower():
        news_html = "No main-timeline recent-news item used for this profile; source monitoring remains active."
    else:
        news_html = short(last_news, 210)

    relationship = row.get("relationship_completion_status") or REL_PENDING
    performance_status = row.get("performance_data_status") or "Use public context only unless credentialed performance data is imported."
    next_step = row.get("next_validation_step") or "Validate source, performance and relationship fields before broader use."
    proxy_line = f"<br /><em>{esc(short(public_proxy, 130))}</em>" if public_proxy else ""

    return f"""
      <article class="onepager-card">
        <div class="onepager-top">
          <div>
            <p class="eyebrow">{esc(row.get('profile_id'))} / {esc(row.get('brief_category'))}</p>
            <h3>{esc(row.get('player'))}</h3>
          </div>
          <span class="confidence {esc(status_class(row.get('source_confidence', '')))}">{esc(row.get('source_confidence'))}</span>
        </div>
        <div class="onepager-grid">
          <div><b>Description</b><p>{esc(short(row.get('what_they_are'), 190))}</p></div>
          <div><b>Business snapshot</b><p>{esc(short(row.get('estimated_size_reach'), 100))}<br />{esc(short(row.get('ownership_investors'), 105))}{proxy_line}</p></div>
          <div><b>AI initiatives / recent product angle</b><p>{esc(short(row.get('ai_or_recent_initiatives'), 190))}</p></div>
          <div><b>Last 24 months</b><p>{esc(news_html)}</p></div>
          <div><b>Ecosystem position</b><p>{esc(short(row.get('influence_role') or row.get('brief_category'), 180))}</p></div>
          <div><b>Relationship with Yousician</b><p>{esc(short(relationship, 180))}</p></div>
          <div><b>Strategic assessment</b><p>{esc(short(row.get('why_they_likely_matter'), 220))}</p></div>
          <div><b>Validation status</b><p>{esc(short(performance_status, 150))}<br />{esc(short(next_step, 150))}</p></div>
        </div>
      </article>
    """


def normalized_news(row: dict[str, str]) -> str:
    last_news = row.get("last_24m_news", "")
    if "no strong last-24-month" in last_news.lower() or "no main-timeline recent-news item" in last_news.lower() or "no news-grade recent-news item" in last_news.lower():
        return "No main-timeline recent-news item used for this profile; source monitoring remains active."
    return short(last_news)


def highlighted_profile_card(row: dict[str, str], public_proxy: str = "") -> str:
    row = {key: display_text(value) for key, value in row.items()}
    relationship = row.get("relationship_completion_status") or REL_PENDING
    source = row.get("primary_source_url") or "Primary source captured in workbook."
    portfolio = row.get("influence_role") or row.get("brief_category") or "Ecosystem role captured in database."
    proxy_html = f"<p class='proxy-line'>{esc(public_proxy)}</p>" if public_proxy else ""
    fields = [
        ("What they are", row.get("what_they_are")),
        ("Why they matter", row.get("why_they_likely_matter")),
        ("Business snapshot", f"{esc(row.get('estimated_size_reach'))} {proxy_html}"),
        ("Product portfolio / surface", portfolio),
        ("AI initiatives", row.get("ai_or_recent_initiatives")),
        ("Last 24 months", normalized_news(row)),
        ("Ecosystem position", row.get("brief_category")),
        ("Relationship with Yousician", relationship),
        ("Strategic assessment", row.get("performance_data_status") or row.get("why_they_likely_matter")),
        ("Sources", source),
    ]
    field_html = []
    for label, value in fields:
        if label == "Business snapshot":
            body = value
        else:
            body = esc(value)
        field_html.append(f"<div><b>{esc(label)}</b><p>{body}</p></div>")

    return f"""
      <article class="highlight-profile-card">
        <div class="highlight-profile-top">
          <div>
            <p class="eyebrow">{esc(row.get('profile_id'))} / {esc(row.get('brief_category'))}</p>
            <h3>{esc(row.get('player'))}</h3>
          </div>
          <span class="confidence {esc(status_class(row.get('source_confidence', '')))}">{esc(row.get('source_confidence'))}</span>
        </div>
        <div class="highlight-profile-grid">
          {"".join(field_html)}
        </div>
      </article>
    """


def category_card(label: str, value: int, detail: str, tone: str = "ready") -> str:
    return f"""
      <div class="metric {esc(tone)}">
        <strong>{esc(value)}</strong>
        <span>{esc(label)}</span>
        <p>{esc(detail)}</p>
      </div>
    """


def count_matching(rows: list[dict[str, str]], *needles: str) -> int:
    needles_low = [needle.lower() for needle in needles]
    return sum(
        1
        for row in rows
        if any(needle in row.get("brief_category", "").lower() for needle in needles_low)
    )


def example_names(rows: list[dict[str, str]], key: str, limit: int = 4) -> str:
    values = []
    for row in rows:
        value = row.get(key, "").strip()
        if value and value not in values:
            values.append(value)
        if len(values) >= limit:
            break
    return " / ".join(values)


def brief_category_rows(
    players: list[dict[str, str]],
    profiles: list[dict[str, str]],
    teachers: list[dict[str, str]],
    creators: list[dict[str, str]],
    investors: list[dict[str, str]],
    media: list[dict[str, str]],
    awards: list[dict[str, str]],
    funding: list[dict[str, str]],
    moves: list[dict[str, str]],
) -> list[dict[str, str]]:
    profile_counts = Counter(row.get("brief_category", "Unmapped") for row in profiles)
    rows = [
        {
            "brief_category": "Music learning apps and platforms",
            "coverage": f"{count_matching(players, 'Music learning apps')} database records / {profile_counts.get('Music learning apps and platforms', 0)} key players",
            "key_examples": "Simply / Flowkey / Fender Play / Rocksmith+",
            "output_location": "Deck, report, database, Appfigures data request",
        },
        {
            "brief_category": "Instrument brands, manufacturers and distributors",
            "coverage": f"{count_matching(players, 'Instrument brands')} database records / {profile_counts.get('Instrument brands, manufacturers and distributors', 0)} key players",
            "key_examples": "Fender / Gibson / Yamaha / Positive Grid",
            "output_location": "Ecosystem map, key players, database",
        },
        {
            "brief_category": "Teachers, schools and music education organizations",
            "coverage": f"{len(teachers)} education rows plus key-player coverage",
            "key_examples": "ABRSM / Trinity / School of Rock / Berklee Online",
            "output_location": "Trust infrastructure section, database",
        },
        {
            "brief_category": "Music hobby software ecosystem",
            "coverage": f"{count_matching(players, 'Music hobby software')} database records / {profile_counts.get('Music hobby software ecosystem', 0)} key players",
            "key_examples": "Ultimate Guitar / MuseScore / Songsterr / BandLab",
            "output_location": "Ecosystem map, hobby journey, key players",
        },
        {
            "brief_category": "Wider education and self-improvement ecosystem",
            "coverage": "Covered through wider education rows and benchmark platforms",
            "key_examples": "Duolingo / Berklee Online / classroom music platforms",
            "output_location": "Education category coverage, database",
        },
        {
            "brief_category": "Investors active in the space",
            "coverage": f"{len(investors)} investor rows",
            "key_examples": example_names(investors, "investor_fund"),
            "output_location": "Capital and recognition section, database",
        },
        {
            "brief_category": "Influencers, creators and educators",
            "coverage": f"{len(creators)} creator/educator rows",
            "key_examples": example_names(creators, "name_channel") or "JustinGuitar / Marty Music / Rick Beato / Drumeo",
            "output_location": "Trust infrastructure section, database",
        },
        {
            "brief_category": "Media, publishers and cultural drivers",
            "coverage": f"{len(media)} media/culture rows",
            "key_examples": example_names(media, "driver") or "TikTok / YouTube / Guitar World / MusicRadar",
            "output_location": "Music-as-hobby and media/culture sections",
        },
        {
            "brief_category": "AI companies and AI initiatives",
            "coverage": f"{count_matching(players, 'AI companies')} database records / {profile_counts.get('AI companies and AI initiatives', 0)} key players",
            "key_examples": "Suno / Music.AI-Moises / Udio / ElevenLabs",
            "output_location": "AI and rights layer, key players, timeline",
        },
        {
            "brief_category": "Awards",
            "coverage": f"{len(awards)} award rows",
            "key_examples": example_names(awards, "award_name"),
            "output_location": "Capital and recognition section, database",
        },
        {
            "brief_category": "Funding",
            "coverage": f"{len(funding)} funding rows",
            "key_examples": example_names(funding, "funding_source"),
            "output_location": "Capital and recognition section, database",
        },
        {
            "brief_category": "Last 24 months on the market",
            "coverage": f"{len(moves)} curated news-grade moves",
            "key_examples": "Funding / M&A / AI launches / rights and policy / partnerships",
            "output_location": "Last-24-months market moves section",
        },
    ]
    return rows


def key_player_table_rows(profiles: list[dict[str, str]], proxy_by_player: dict[str, str]) -> list[dict[str, str]]:
    rows = []
    for row in profiles:
        item = {key: display_text(value) for key, value in row.items()}
        proxy = proxy_by_player.get(item.get("player", ""), "")
        size_reach = item.get("estimated_size_reach", "")
        if proxy:
            size_reach = f"{size_reach} Public proxy: {proxy}"
        rows.append(
            {
                "player": item.get("player", ""),
                "category": item.get("brief_category", ""),
                "success_basis": success_basis(item),
                "what_they_are": short(item.get("what_they_are"), 130),
                "size_reach": short(size_reach, 145),
                "ownership_investors": short(item.get("ownership_investors"), 88),
                "ai_recent_initiative": short(item.get("ai_or_recent_initiatives"), 120),
                "why_they_matter": short(item.get("why_they_likely_matter"), 135),
            }
        )
    return rows


def success_basis(row: dict[str, str]) -> str:
    player = row.get("player", "").lower()
    category = row.get("brief_category", "").lower()
    if any(name in player for name in ["simply", "flowkey", "skoove", "fender play", "gibson app", "rocksmith", "musora", "fretello"]):
        return "Direct app / beginner learning"
    if any(name in player for name in ["ultimate guitar", "musescore", "songsterr", "chordify"]):
        return "Repertoire and song-practice surface"
    if any(name in player for name in ["moises", "chord ai", "music.ai"]):
        return "AI practice utility"
    if any(name in player for name in ["suno", "udio", "elevenlabs"]):
        return "AI creation and market-structure signal"
    if any(name in player for name in ["bandlab", "splice", "fl studio", "garageband"]):
        return "Hobby creation / community"
    if any(name in player for name in ["abrsm", "trinity", "school of rock", "berklee"]):
        return "Trust / curriculum layer"
    if any(name in player for name in ["fender", "gibson", "yamaha", "positive grid"]):
        return "Hardware funnel / brand reach"
    if "investor" in category or "funding" in category or "awards" in category:
        return "Capital / recognition signal"
    if "media" in category or "influencer" in category:
        return "Demand formation / trust signal"
    return "Ecosystem influence"


def app_proxy_notes(app_rows: list[dict[str, str]]) -> dict[str, str]:
    notes: dict[str, list[str]] = {}
    for row in app_rows:
        player = row.get("player", "").strip()
        if not player:
            continue
        parts = []
        rating = row.get("rating", "").strip()
        reviews = row.get("review_count", "").strip()
        if rating or reviews:
            parts.append(f"{row.get('app_name', player)}: {rating or 'rating pending'}, {reviews or 'review count pending'}")
        note = row.get("public_proxy_notes", "").strip()
        if note:
            parts.append(note)
        if parts:
            notes.setdefault(player, [])
            for part in parts:
                if part not in notes[player]:
                    notes[player].append(part)
    return {player: " | ".join(values) for player, values in notes.items()}


def main() -> None:
    players = read_csv("players_v3.csv")
    profiles = read_csv("key_player_profiles_final_v3_9.csv") or read_csv("key_player_profiles_final_v3_7.csv") or read_csv("key_player_profiles_final_v3_6.csv") or read_csv("key_player_profiles_v3_2.csv")
    top_actors = read_csv("executive_top_10_actor_ranked_v3_4.csv")
    ecosystem = read_csv("ecosystem_map_2_0_v3_2_2.csv")
    moves = read_csv("market_moves_24m_curated_v3_2.csv")
    direct_learning = read_csv("direct_music_learning_apps_snapshot_v3_9.csv") or read_csv("direct_music_learning_apps_snapshot_v3_7.csv")
    app_rows = read_csv("appfigures-performance-export-integrated-v3.csv")
    app_request = read_csv("appfigures_request_pack_v3_2.csv")
    teachers = read_csv("teachers_schools_education_v3.csv")
    creators = read_csv("influencers_creators_v3.csv")
    investors = read_csv("investors_v3.csv")
    media = read_csv("media_cultural_drivers_v3.csv")
    awards = read_csv("awards_v3.csv")
    funding = read_csv("funding_v3.csv")
    claims = read_csv("claim_source_matrix_v3_2.csv")
    source_mapped_claims = read_csv("source_mapped_claims_eligible_v3_9.csv")
    blocked_hard_claims = read_csv("claims_requiring_final_validation_v3_9.csv")
    final_gates = read_csv("final_claim_and_gate_summary_v3_9.csv")
    sources = read_csv("source_audit_v3.csv")
    gaps = read_csv("remaining_data_gaps_v3.csv")
    relationships = read_csv("relationships_template_v3.csv")
    quality = read_csv("data_quality_check_v3_4.csv")
    review_queue = read_csv("review_queue_v3.csv")

    main_moves = display_rows([row for row in moves if row.get("include_in_board_timeline") == "Yes"])
    appendix_moves = display_rows([row for row in moves if row.get("include_in_board_timeline") != "Yes"])
    top_actors_report = []
    for row in display_rows(top_actors):
        item = dict(row)
        item["use_status"] = item.get("board_use_status", "")
        top_actors_report.append(item)
    quality_report = display_rows(quality)
    gaps_report = display_rows(gaps)
    source_mapped_claims_report = display_rows(source_mapped_claims)
    hard_claims = [row for row in claims if row.get("hard_claim") == "Yes"]
    cred_apps = credentialed_appfigures(app_rows)
    open_review = [row for row in review_queue if is_open_review(row) and not is_refresh_retry(row)]
    refresh_retry = [row for row in review_queue if is_open_review(row) and is_refresh_retry(row)]
    category_counts = Counter(row.get("brief_category", "Unmapped") for row in players)
    profile_counts = Counter(row.get("brief_category", "Unmapped") for row in profiles)
    move_counts = Counter(row.get("category_mapping", "Unmapped") for row in main_moves)
    source_mix = Counter(row.get("source_confidence", "Unmapped") for row in sources)
    proxy_by_player = app_proxy_notes(app_rows)
    brief_rows = brief_category_rows(players, profiles, teachers, creators, investors, media, awards, funding, main_moves)
    key_table = key_player_table_rows(profiles, proxy_by_player)
    direct_learning_report = []
    for row in display_rows(direct_learning):
        item = dict(row)
        proxy = proxy_by_player.get(item.get("player", ""), "")
        item["public_proxy_evidence"] = short(proxy or "No public app-store proxy attached in this package; use Appfigures or store validation before performance comparison.", 210)
        direct_learning_report.append(item)

    cards = "".join(
        [
            category_card("ecosystem records", len(players), "The map covers companies, creators, institutions, capital, media and market signals."),
            category_card("key players", len(profiles), "All priority actors/clusters are summarized with role, reach, ownership and relevance."),
            category_card("market moves", len(main_moves), "Last-24-month news-grade moves answer who made the news for what."),
            category_card("brief categories", len(BRIEF_CATEGORIES), "Every requested category is visible as part of the ecosystem, not hidden in appendix."),
            category_card("success surfaces", len(SUCCESS_TYPES), "Success is read across app, repertoire, AI utility, trust, community and hardware funnels."),
            category_card("internal context rows", len(INTERNAL_CONTEXT_ROWS), "Static Yousician user and market context is included as grounding, not live metric data."),
            category_card("top actors", len(top_actors_report), "The executive read starts from the actors most likely to shape the market around Yousician."),
        ]
    )

    category_html = table(
        brief_rows,
        ["brief_category", "coverage", "key_examples", "output_location"],
        cls="category-table",
    )

    ecosystem_html = "".join(
        f"""
        <article class="cluster">
          <p class="eyebrow">{esc(row.get('layer'))} / {esc(row.get('proximity_to_yousician'))}</p>
          <h3>{esc(row.get('ecosystem_zone'))}</h3>
          <p>{esc(short(row.get('representative_players'), 180))}</p>
          <p class="muted">{esc(short(row.get('why_it_belongs_on_map'), 210))}</p>
        </article>
        """
        for row in ecosystem
    )

    profile_by_name = {row.get("player", ""): row for row in profiles}
    highlighted_profiles = [profile_by_name[name] for name in HIGHLIGHT_PLAYERS if name in profile_by_name]
    highlighted_profile_html = "".join(
        highlighted_profile_card(row, proxy_by_player.get(row.get("player", ""), ""))
        for row in highlighted_profiles
    )

    main_sections = f"""
      <section class="hero">
        <div>
          <p class="kicker">Market landscape report / {esc(TODAY)}</p>
          <h1>Yousician Strategic Environment Mapping</h1>
          <p class="lead">A brief-led ecosystem report: who influences music learning, who appears successful, who shapes music as a hobby, and which actors define Yousician's strategic environment.</p>
          <div class="metrics">{cards}</div>
        </div>
        <aside class="summary-box">
          <h2>Executive Summary</h2>
          <p>The environment around Yousician is not only a direct-competitor market. It is shaped by learning apps, hardware brands, song and practice platforms, teachers and education bodies, creator educators, hobby software, AI tools, rights owners, investors, media and cultural demand drivers.</p>
          <p>The readout is structured around the requested ecosystem map, key players, brief-style one-pagers, database, relationship fields and guiding-question answers. It is intended to make the stakeholder landscape legible before moving into source detail.</p>
          <p><b>Latest source-skim update:</b> Suno announced more than $400M in Series D funding at a $5.4B post-money valuation on June 3, 2026. This strengthens the conclusion that AI music creation is a market-structure force, not only a product feature.</p>
          <p class="small-note">Input note: Appfigures performance metrics and internal relationship fields are prepared as separate support files because they require credentialed or Yousician-internal inputs.</p>
        </aside>
      </section>

      <section class="chapter">
        <p class="kicker">Direct answers to the guiding questions</p>
        <h2>What the brief asks, answered first</h2>
        <div class="answer-grid">
          <article><h3>1. Who influences the future of music learning? Who is successful?</h3><p>Direct learning apps, song/practice systems, AI practice utilities, teacher/creator educators, education benchmarks and hardware-backed funnels shape learning. Success is clearest by type: Simply for direct-app benchmarking, Ultimate Guitar for repertoire, Moises for AI practice utility, Suno for AI creation, BandLab/Splice for hobby creation, ABRSM/Trinity/School of Rock for trust, and Fender/Gibson/Yamaha for hardware funnels.</p></article>
          <article><h3>2. Who influences the future of music as a hobby?</h3><p>TikTok, YouTube, Spotify, artists, song libraries, creator tools, AI generation tools, instrument brands, retailers and cultural moments influence what people want to play, make and share before they enter formal learning.</p></article>
          <article><h3>3. Who influences the future strategic environment around Yousician?</h3><p>AI companies, rights owners, app-based competitors, hardware brands, creators, publishers, investors, awards/funding bodies, media and education benchmarks jointly shape the field around Yousician.</p></article>
        </div>
      </section>

      <section class="chapter">
        <p class="kicker">Internal Yousician context</p>
        <h2>Static internal research grounding for how to read the ecosystem</h2>
        <p class="note">{esc(INTERNAL_CONTEXT_SOURCE)}</p>
        {table(INTERNAL_CONTEXT_ROWS, ["context_area", "internal_signal", "strategic_implication"], cls="executive-table")}
      </section>

      <section class="chapter">
        <p class="kicker">Who is successful?</p>
        <h2>Successful actors by success type</h2>
        <p class="note">This answers the success question without pretending that missing Appfigures data can identify app revenue/download winners. Ecosystem influence can already be read by surface; app-performance ranking is the remaining credentialed input.</p>
        {table(SUCCESS_TYPES, ["success_type", "actors", "evidence", "caveat"], cls="executive-table")}
      </section>

      <section class="chapter">
        <p class="kicker">Top actors</p>
        <h2>The 10 actors or clusters that should lead the executive read</h2>
        <p class="note">These actors are prioritized by ecosystem influence. They are not app-performance-ranked because that requires the Appfigures input.</p>
        {table(top_actors_report, ["rank", "actor_or_cluster", "primary_influence_layer", "guiding_question_answered", "priority_reason"], cls="executive-table")}
      </section>

      <section class="chapter">
        <p class="kicker">Market map, not competitor list</p>
        <h2>What the ecosystem currently looks like</h2>
        <div class="ecosystem-grid">{ecosystem_html}</div>
        <div class="category-panel">
          <h3>Brief-category coverage</h3>
          {category_html}
        </div>
      </section>

      <section class="chapter">
        <p class="kicker">Who made the news for what</p>
        <h2>Last 24 months: curated market moves</h2>
        <p class="note">The main table uses Grade A/B items only. Appendix-only rows are retained as context but should not carry the main narrative.</p>
        {table(main_moves, ["date", "move_type", "player_or_signal", "what_happened", "why_it_matters_for_yousician", "confidence", "news_grade"], cls="moves-table")}
        <div class="move-counts">
          {''.join(f"<span>{esc(k)}: <b>{v}</b></span>" for k, v in move_counts.most_common())}
        </div>
      </section>

      <section class="chapter">
        <p class="kicker">Performance discipline</p>
        <h2>Appfigures is an input note, not the market story</h2>
        <div class="warning">
          <strong>{esc(APPFIGURES_BLOCK)}</strong>
          <p>{len(app_request)} app rows are ready for credentialed export/import; {len(cred_apps)} credentialed rows are currently populated. Public app-store ratings or reviews are shown only as public proxies and must not be described as Appfigures.</p>
        </div>
        <p class="note">The Appfigures data request is included separately. The main report therefore ranks by ecosystem influence, not app revenue/downloads.</p>
      </section>

      <section class="chapter">
        <p class="kicker">Direct music-learning apps</p>
        <h2>The direct learning-app market remains visible even while performance is not finalized</h2>
        <p class="note">This snapshot keeps the core music-learning app field visible without inventing Appfigures metrics. It is qualitative until credentialed revenue, download, rank and country-mix data is imported.</p>
        {table(direct_learning_report, ["player", "what_they_are", "audience_focus", "public_proxy_evidence", "why_it_matters", "appfigures_status"], cls="executive-table")}
      </section>

      <section class="chapter">
        <p class="kicker">The categories that cannot be hidden in appendix</p>
        <h2>Teachers, creators, investors, media, awards and funding</h2>
        <div class="four-pack">
          <article><h3>Teachers / schools</h3><strong>{len(teachers)}</strong><p>Education bodies and teacher networks shape trust, progression, certification language and parent confidence.</p></article>
          <article><h3>Creators</h3><strong>{len(creators)}</strong><p>Creator educators influence discovery, trust and beginner motivation. Platform reach remains partly pending.</p></article>
          <article><h3>Investors</h3><strong>{len(investors)}</strong><p>Capital flows around music, education, creator tools and AI indicate adjacent market momentum.</p></article>
          <article><h3>Media / culture</h3><strong>{len(media)}</strong><p>Media, platforms and cultural drivers explain demand formation before app consideration.</p></article>
          <article><h3>Awards</h3><strong>{len(awards)}</strong><p>Award entries are now usable as an operational tracker with fit, timing and effort fields.</p></article>
          <article><h3>Funding</h3><strong>{len(funding)}</strong><p>Funding opportunities are separated from investors and marked by geography, eligibility and effort.</p></article>
        </div>
      </section>

      <section class="chapter">
        <p class="kicker">Key-player highlights</p>
        <h2>Six priority actors in a closer brief-style one-pager format</h2>
        <p class="note">These profile pages mirror the field logic from the brief example: what they are, why they matter, business snapshot, product surface, AI initiatives, last 24 months, ecosystem position, relationship field, strategic assessment and sources. The full 28-player set remains in the workbook.</p>
        <div class="highlight-profile-list">{highlighted_profile_html}</div>
      </section>

      <section class="chapter">
        <p class="kicker">Key-player database</p>
        <h2>All 28 key players in the fields requested by the brief</h2>
        <p class="note">The full table keeps every priority actor visible without forcing all 28 into dense mini-cards. It follows the requested fields and adds a success-basis column so “successful” does not collapse into one unpopulated app-performance metric.</p>
        {table(key_table, ["player", "category", "success_basis", "what_they_are", "size_reach", "ownership_investors", "ai_recent_initiative", "why_they_matter"], cls="key-player-table")}
      </section>

      <section class="chapter appendix">
        <p class="kicker">Appendix: open inputs</p>
        <h2>Open data fields before broader external use</h2>
        <div class="gate-grid">
          <article class="risk"><h3>Appfigures</h3><p>Open until credentialed export/API data is imported. No app-performance ranking should be finalized.</p></article>
          <article class="watch"><h3>Source-linked statements</h3><p>{len(hard_claims)} statement rows retain source confidence for broader use.</p></article>
          <article class="risk"><h3>Relationships</h3><p>{esc(REL_PENDING)}</p></article>
          <article class="watch"><h3>Source review</h3><p>{len(open_review)} source-change items and {len(refresh_retry)} access rows remain open in the appendix.</p></article>
        </div>
        {table(quality_report, ["check_id", "label", "status", "count", "detail", "next_action"], cls="quality-table")}
      </section>

      <section class="chapter appendix">
        <p class="kicker">Appendix: source and gap summary</p>
        <h2>Source context and remaining open data fields</h2>
        <p class="note">Source context mix: {esc(dict(source_mix))}. The full source appendix remains in the database and CSV appendix.</p>
        {table(gaps_report, ["gap", "status", "detail", "priority", "next_action", "owner_placeholder"], cls="gap-table")}
        <h3>Source-linked observation sample</h3>
        {table(source_mapped_claims_report, ["entity", "claim_type", "claim", "source_confidence", "main_narrative_rule"], limit=28, cls="claim-table")}
        <h3>Open statements requiring final validation sample</h3>
        {table(blocked_hard_claims, ["entity", "claim_type", "claim", "source_confidence", "blocked_reason"], limit=22, cls="claim-table")}
      </section>

      <section class="chapter appendix">
        <p class="kicker">Appendix: useful context kept out of the main timeline</p>
        <h2>Appendix-only market moves</h2>
        {table(appendix_moves, ["date", "move_type", "player_or_signal", "what_happened", "curation_note", "confidence", "news_grade"], cls="moves-table")}
      </section>
    """

    html_doc = f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Yousician Strategic Environment Mapping - Market Landscape Report</title>
  <style>
    @page {{ size: A4 landscape; margin: 12mm; }}
    * {{ box-sizing: border-box; }}
    html, body {{ margin: 0; padding: 0; }}
    body {{
      background: #f6f4ed;
      color: #12201d;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
      font-size: 10.2px;
      line-height: 1.36;
      letter-spacing: 0;
    }}
    section {{ padding: 8mm 6mm; break-inside: auto; }}
    .hero {{ min-height: 170mm; display: grid; grid-template-columns: 1.2fr .8fr; gap: 22px; align-items: center; break-after: page; }}
    .chapter {{ break-before: page; }}
    .chapter + .chapter {{ margin-top: 0; }}
    .kicker, .eyebrow {{ margin: 0 0 6px; text-transform: uppercase; font-weight: 800; color: #13705f; font-size: 8px; letter-spacing: .08em; }}
    h1 {{ margin: 0 0 10px; font-size: 40px; line-height: 1.02; letter-spacing: 0; max-width: 760px; }}
    h2 {{ margin: 0 0 10px; font-size: 25px; line-height: 1.08; letter-spacing: 0; }}
    h3 {{ margin: 0 0 6px; font-size: 13px; line-height: 1.16; letter-spacing: 0; }}
    p {{ margin: 0 0 7px; }}
    .lead {{ max-width: 760px; font-size: 15px; color: #53615d; }}
    .summary-box, .warning, .note, article, .metric, .category-panel, .category-row {{
      background: #fffef9;
      border: 1px solid #d8ded5;
      border-radius: 8px;
    }}
    .summary-box {{ padding: 18px; border-left: 8px solid #00cf95; }}
    .metrics {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 18px; }}
    .metric {{ padding: 11px; min-height: 78px; border-top: 5px solid #00cf95; }}
    .metric.watch {{ border-top-color: #f1ad36; }}
    .metric.risk {{ border-top-color: #e3554d; }}
    .metric strong {{ display: block; font-size: 27px; line-height: 1; }}
    .metric span {{ display: block; font-weight: 800; font-size: 9px; margin: 5px 0 4px; }}
    .metric p {{ font-size: 8.2px; color: #65706d; margin: 0; }}
    .answer-grid, .ecosystem-grid, .four-pack, .gate-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }}
    .answer-grid article, .ecosystem-grid article, .four-pack article, .gate-grid article {{ padding: 12px; break-inside: avoid; }}
    .four-pack {{ grid-template-columns: repeat(3, 1fr); }}
    .four-pack strong {{ display: block; font-size: 28px; color: #13705f; }}
    .category-panel {{ margin-top: 12px; padding: 12px; }}
    .category-row {{ display: flex; justify-content: space-between; gap: 12px; padding: 8px 10px; margin-top: 6px; }}
    .muted, .note {{ color: #63716d; }}
    .note {{ padding: 9px 12px; border-left: 5px solid #13705f; margin: 8px 0 10px; }}
    .warning {{ padding: 14px; border-left: 7px solid #e3554d; margin: 10px 0; }}
    .highlight-profile-list {{ display: block; }}
    .highlight-profile-card {{ width: 100%; margin: 0 0 14px; padding: 16px; break-inside: avoid; min-height: 300px; background: #fffef9; border: 1px solid #d8ded5; border-left: 9px solid #00cf95; border-radius: 8px; }}
    .highlight-profile-top {{ display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; margin-bottom: 12px; }}
    .highlight-profile-top h3 {{ font-size: 22px; line-height: 1; margin-top: 3px; }}
    .highlight-profile-grid {{ display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; }}
    .highlight-profile-grid div {{ background: #f8faf3; border: 1px solid #e3e8df; border-radius: 6px; padding: 8px; min-height: 50px; }}
    .highlight-profile-grid b {{ display: block; color: #13705f; font-size: 7.8px; text-transform: uppercase; margin-bottom: 4px; }}
    .highlight-profile-grid p {{ font-size: 8.15px; line-height: 1.26; margin: 0; }}
    .proxy-line {{ color: #63716d; font-style: italic; margin-top: 3px !important; }}
    .onepager-list {{ display: block; }}
    .onepager-card {{ width: 100%; margin: 0 0 10px; padding: 12px; break-inside: avoid; min-height: 145px; background: #fffef9; border: 1px solid #d8ded5; border-left: 7px solid #00cf95; border-radius: 8px; }}
    .onepager-top {{ display: flex; justify-content: space-between; gap: 8px; align-items: flex-start; margin-bottom: 8px; }}
    .onepager-grid {{ display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }}
    .onepager-grid div {{ background: #f8faf3; border: 1px solid #e3e8df; border-radius: 6px; padding: 7px; min-height: 52px; }}
    .onepager-grid b {{ display: block; color: #13705f; font-size: 7.4px; text-transform: uppercase; margin-bottom: 4px; }}
    .confidence {{ flex: 0 0 auto; padding: 4px 8px; border-radius: 999px; font-size: 7.4px; font-weight: 800; background: #dff8ed; color: #0a654e; }}
    .confidence.watch {{ background: #fff1c7; color: #7b5300; }}
    .confidence.risk {{ background: #ffd9d4; color: #8b211d; }}
    .onepager-card p {{ font-size: 7.85px; margin: 0; }}
    table {{ width: 100%; border-collapse: collapse; background: #fffef9; border: 1px solid #d8ded5; margin-top: 8px; break-inside: auto; }}
    thead {{ display: table-header-group; }}
    tr {{ break-inside: avoid; }}
    th {{ background: #10231f; color: #fff; text-align: left; font-size: 7.4px; line-height: 1.15; padding: 5px; vertical-align: top; }}
    td {{ border-top: 1px solid #e5e9e3; font-size: 7.25px; line-height: 1.24; padding: 4px 5px; vertical-align: top; }}
    .executive-table td, .moves-table td {{ font-size: 7.5px; }}
    .request-table td, .quality-table td, .gap-table td, .claim-table td {{ font-size: 7.35px; }}
    .move-counts {{ display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }}
    .move-counts span {{ background: #10231f; color: white; border-radius: 999px; padding: 5px 9px; font-size: 8px; }}
    .appendix h2::after {{ content: "Appendix"; margin-left: 10px; font-size: 8px; color: #fff; background: #6a756f; padding: 4px 7px; border-radius: 999px; vertical-align: middle; }}
    .risk {{ border-left: 6px solid #e3554d; }}
    .watch {{ border-left: 6px solid #f1ad36; }}
    @media print {{
      a {{ color: inherit; text-decoration: none; }}
    }}
  </style>
</head>
<body>
  {main_sections}
</body>
</html>
"""
    REPORT.mkdir(parents=True, exist_ok=True)
    DELIVERABLES.mkdir(parents=True, exist_ok=True)
    out = REPORT / f"{REPORT_NAME}.html"
    out.write_text(html_doc, encoding="utf-8")
    (DELIVERABLES / out.name).write_text(html_doc, encoding="utf-8")
    print(out)


if __name__ == "__main__":
    main()
