#!/usr/bin/env python3
"""Add brief-aligned v3.2 layers on top of the v3.1 living package."""

from __future__ import annotations

import csv
import json
import re
import urllib.parse
import urllib.request
from collections import Counter, defaultdict
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
DATA = BASE / "data"
TODAY = "2026-06-11"
REL_PENDING = "Internal relationship status not yet captured in this dataset. To be completed by Yousician."
APPFIGURES_STATUS = "Credentialed Appfigures export not available in this package; use Appfigures import path before treating performance metrics as complete."


def read_csv(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def write_csv(path: Path, rows: list[dict[str, object]], fields: list[str] | None = None) -> None:
    if fields is None:
        fields = []
        for row in rows:
            for key in row:
                if key not in fields:
                    fields.append(key)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows([{k: row.get(k, "") for k in fields} for row in rows])


def first_url(value: str) -> str:
    return (value or "").split(" | ")[0].strip()


def player_id_from_name(players: list[dict[str, str]], name: str) -> str:
    norm = re.sub(r"[^a-z0-9]+", "", name.lower())
    for row in players:
        if re.sub(r"[^a-z0-9]+", "", row.get("player", "").lower()) == norm:
            return row.get("player_id", "")
    for row in players:
        if norm and norm in re.sub(r"[^a-z0-9]+", "", row.get("player", "").lower()):
            return row.get("player_id", "")
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def extract_ios_id(store_id: str) -> str:
    match = re.search(r"\b(\d{8,12})\b", store_id or "")
    return match.group(1) if match else ""


def dedupe_sentences(value: str) -> str:
    chunks = re.split(r"(?<=[.!?])\s+", (value or "").strip())
    seen: set[str] = set()
    cleaned: list[str] = []
    for chunk in chunks:
        sentence = re.sub(r"\s+", " ", chunk.strip())
        key = sentence.lower()
        if sentence and key not in seen:
            seen.add(key)
            cleaned.append(sentence)
    return " ".join(cleaned)


def fetch_itunes(ids: list[str]) -> dict[str, dict[str, object]]:
    out: dict[str, dict[str, object]] = {}
    if not ids:
        return out
    for chunk_start in range(0, len(ids), 20):
        chunk = ids[chunk_start : chunk_start + 20]
        url = "https://itunes.apple.com/lookup?" + urllib.parse.urlencode({"id": ",".join(chunk), "country": "us"})
        try:
            with urllib.request.urlopen(url, timeout=12) as response:
                data = json.loads(response.read().decode("utf-8"))
        except Exception:
            continue
        for item in data.get("results", []):
            track_id = str(item.get("trackId", ""))
            out[track_id] = item
    return out


def enrich_appfigures_public_proxy() -> tuple[list[dict[str, object]], list[dict[str, object]]]:
    rows = read_csv(HANDOFF / "appfigures-performance-export-integrated-v3.csv")
    ids = [extract_ios_id(row.get("app_store_id_or_package", "")) for row in rows]
    lookup = fetch_itunes([i for i in ids if i])
    request_pack: list[dict[str, object]] = []
    enriched: list[dict[str, object]] = []
    for row in rows:
        row = dict(row)
        ios_id = extract_ios_id(row.get("app_store_id_or_package", ""))
        item = lookup.get(ios_id, {})
        public_notes = row.get("public_proxy_notes", "")
        if item:
            rating = item.get("averageUserRating")
            count = item.get("userRatingCount")
            if rating and not row.get("rating"):
                row["rating"] = f"{float(rating):.2f} iOS public proxy"
            if count and not row.get("review_count"):
                row["review_count"] = f"{int(count):,} iOS public proxy"
            row["category"] = row.get("category") or ", ".join(item.get("genres", [])[:2])
            proxy_note = f"iTunes Lookup refreshed {TODAY}; public proxy only, not Appfigures."
            if proxy_note.lower() not in public_notes.lower():
                public_notes = f"{public_notes} {proxy_note}".strip()
            row["public_proxy_source_url"] = row.get("public_proxy_source_url") or item.get("trackViewUrl", "")
        row["appfigures_status"] = row.get("appfigures_status") or APPFIGURES_STATUS
        if "Pending credentialed" in row["appfigures_status"]:
            row["appfigures_status"] = APPFIGURES_STATUS
        row["confidence"] = "Pending Appfigures / Public proxy only"
        row["public_proxy_notes"] = dedupe_sentences(public_notes)
        row["source_date"] = TODAY
        enriched.append(row)
        request_pack.append(
            {
                "player": row.get("player", ""),
                "app_name": row.get("app_name", ""),
                "developer": row.get("developer", ""),
                "platform": row.get("platform", ""),
                "app_store_id_or_package": row.get("app_store_id_or_package", ""),
                "required_appfigures_fields": "downloads_30d; downloads_90d; downloads_365d; revenue_30d; revenue_90d; revenue_365d; rank_current; rank_30d_avg; rank_365d_trend; rating; review_count; review_velocity_90d; top_countries",
                "credentialed_status": "Missing from package",
                "public_proxy_available": "Yes" if item or row.get("public_proxy_notes") else "Partial",
                "why_needed_for_brief": "Required to compare app-based company scale, growth, geography and monetization without using unverifiable proxies.",
                "owner_placeholder": "Yousician Appfigures credential owner TBD",
                "next_action": "Export Appfigures app performance rows and run scripts/import_appfigures_export.py with --credentialed.",
                "source_url": row.get("public_proxy_source_url", ""),
                "last_checked_date": TODAY,
            }
        )
    write_csv(HANDOFF / "appfigures-performance-export-integrated-v3.csv", enriched)
    write_csv(HANDOFF / "appfigures_request_pack_v3_2.csv", request_pack)
    return enriched, request_pack


def curated_market_moves() -> list[dict[str, object]]:
    rows = read_csv(HANDOFF / "market_moves_24m_v3.csv")
    static_patterns = [
        "continued",
        "public listings positioned",
        "public app listings",
        "official app listings",
        "continued positioning",
        "continued to present",
    ]
    enriched: list[dict[str, object]] = []
    for row in rows:
        text = f"{row.get('what_happened','')} {row.get('player_or_signal','')}".lower()
        is_static = any(pattern in text for pattern in static_patterns)
        is_news = not is_static
        grade = "A" if row.get("confidence") == "High" and is_news else "B" if is_news else "C"
        include = "Yes" if grade in ("A", "B") else "Appendix only"
        curation_note = "News-grade event" if include == "Yes" else "Useful context, but weaker as a 'who made the news' item."
        enriched.append(
            {
                **row,
                "news_grade": grade,
                "include_in_board_timeline": include,
                "curation_note": curation_note,
            }
        )
    write_csv(HANDOFF / "market_moves_24m_curated_v3_2.csv", enriched)
    return enriched


def build_profiles(players: list[dict[str, str]], key_players: list[dict[str, str]], moves: list[dict[str, object]], app_rows: list[dict[str, object]]) -> list[dict[str, object]]:
    player_by_name = {row.get("player", ""): row for row in players}
    moves_by_player: dict[str, list[dict[str, object]]] = defaultdict(list)
    for move in moves:
        signal = str(move.get("player_or_signal", "")).lower()
        for kp in key_players:
            name = kp.get("player", "")
            if name and name.lower().split(" / ")[0] in signal:
                moves_by_player[name].append(move)
    app_by_player: dict[str, list[dict[str, object]]] = defaultdict(list)
    for row in app_rows:
        app_by_player[str(row.get("player", ""))].append(row)

    rows: list[dict[str, object]] = []
    for idx, kp in enumerate(key_players, 1):
        name = kp.get("player", "")
        p = player_by_name.get(name, {})
        relevant_moves = sorted(moves_by_player.get(name, []), key=lambda r: str(r.get("date", "")), reverse=True)[:3]
        apps = app_by_player.get(name, [])
        app_status = "; ".join(
            f"{a.get('app_name')}: {a.get('appfigures_status') or APPFIGURES_STATUS}" for a in apps[:2]
        ) or "No app-performance row mapped; add if app-based."
        rows.append(
            {
                "profile_id": f"KP-{idx:02d}",
                "player": name,
                "brief_category": kp.get("brief_category", ""),
                "influence_role": p.get("type", "") or kp.get("what_they_are", ""),
                "why_they_likely_matter": kp.get("why_they_matter", ""),
                "what_they_are": kp.get("what_they_are", ""),
                "estimated_size_reach": kp.get("estimated_size_reach", ""),
                "ownership_investors": kp.get("ownership_investors", ""),
                "ai_or_recent_initiatives": kp.get("ai_or_recent_initiatives", ""),
                "last_24m_news": " | ".join(f"{m.get('date')}: {m.get('what_happened')}" for m in relevant_moves) or "No strong last-24-month news item mapped yet; monitor via source watchlist.",
                "performance_data_status": app_status,
                "source_confidence": kp.get("confidence", ""),
                "primary_source_url": kp.get("source_url", "") or first_url(p.get("source_urls", "")),
                "relationship_completion_status": REL_PENDING,
                "next_validation_step": "Validate Appfigures/traffic or investor data where applicable; confirm internal relationship owner.",
                "one_pager_status": "Complete for report; performance metrics pending where credentialed data is missing.",
            }
        )
    write_csv(HANDOFF / "key_player_profiles_v3_2.csv", rows)
    return rows


def build_top10(profiles: list[dict[str, object]], moves: list[dict[str, object]]) -> list[dict[str, object]]:
    priority_names = [
        "Suno",
        "Music.AI / Moises",
        "Simply / JoyTunes",
        "Ultimate Guitar / Muse Group",
        "BandLab",
        "TikTok / YouTube music discovery",
        "Fender / Gibson / Yamaha hardware ecosystems",
        "Splice",
        "ABRSM / Trinity / School of Rock education layer",
        "Spotify / labels / rights infrastructure",
    ]
    rationale = [
        "Defines the investor-backed AI music creation frontier and rights-risk debate.",
        "Shows AI practice utilities scaling toward creator tooling with reported large user reach.",
        "Closest app-based learning benchmark; requires Appfigures before performance ranking.",
        "Controls song-practice habits, tabs, community and Muse Group repertoire infrastructure.",
        "Represents the creation/community path after or instead of formal learning.",
        "Shapes discovery, song demand and creator trust before learners choose what to play.",
        "Controls instrument access, beginner bundles and branded learning surfaces.",
        "Shows paid creator-tool workflows and rights-aware AI sample/tooling direction.",
        "Defines credibility, progression and teacher/parent trust around learning.",
        "Sets the rights, artist-data and licensing context for AI and repertoire products.",
    ]
    evidence = [
        "Series C / AI rights sources; high strategic disruption.",
        "Music.AI Series A and Moises product/news sources.",
        "App-store/product sources; Appfigures still required.",
        "Muse Group, Ultimate Guitar and publishing/practice sources.",
        "BandLab official creator-community and AI/tooling sources.",
        "TikTok for Artists, YouTube music AI and Spotify artist-tool sources.",
        "Fender/Gibson/Yamaha product and hardware-learning sources.",
        "Splice acquisition/AI/tooling sources.",
        "Official exam/school/teacher organization sources.",
        "Spotify/UMG/WMG/RIAA rights and platform sources.",
    ]
    rows = []
    for rank, name in enumerate(priority_names, 1):
        rows.append(
            {
                "rank": rank,
                "actor_or_cluster": name,
                "why_top_10": rationale[rank - 1],
                "evidence_basis": evidence[rank - 1],
                "what_changed_recently": "See curated market-move timeline for recent funding, AI, rights, platform and partnership events.",
                "data_gap": "Appfigures/traffic/internal relationship validation where relevant.",
                "implication_style": "Observation only; not a recommendation.",
            }
        )
    write_csv(HANDOFF / "executive_top_10_actor_synthesis_v3_2.csv", rows)
    return rows


def build_claim_matrix(
    key_players: list[dict[str, str]],
    moves: list[dict[str, object]],
    app_rows: list[dict[str, object]],
    teachers: list[dict[str, str]],
    influencers: list[dict[str, str]],
    investors: list[dict[str, str]],
) -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    claim_no = 1

    def add(entity: str, claim_type: str, claim: str, url: str, confidence: str, hard: str, action: str) -> None:
        nonlocal claim_no
        rows.append(
            {
                "claim_id": f"CL-{claim_no:04d}",
                "entity": entity,
                "claim_type": claim_type,
                "claim": claim,
                "source_url": url,
                "source_confidence": confidence,
                "hard_claim": hard,
                "review_action": action,
                "last_checked_date": TODAY,
            }
        )
        claim_no += 1

    for row in key_players:
        add(row.get("player", ""), "Key-player relevance", row.get("why_they_matter", ""), row.get("source_url", ""), row.get("confidence", ""), "No", "Keep as synthesis unless source changes.")
        add(row.get("player", ""), "Ownership / investors", row.get("ownership_investors", ""), row.get("source_url", ""), row.get("confidence", ""), "Yes", "Validate with official/company/investor database before investor-facing use.")
    for row in moves:
        if row.get("include_in_board_timeline") == "Yes":
            add(row.get("player_or_signal", ""), "Market move", f"{row.get('date')}: {row.get('what_happened')}", row.get("source_url", ""), row.get("confidence", ""), "Yes", "Verify source before final board snapshot.")
    for row in app_rows:
        add(row.get("player", ""), "App performance", row.get("public_proxy_notes", "") or row.get("appfigures_status", ""), row.get("public_proxy_source_url", ""), row.get("confidence", ""), "Yes", "Do not treat as Appfigures; replace with credentialed export when available.")
    for row in teachers:
        add(row.get("organization", ""), "Education reach / role", f"{row.get('size_reach')} {row.get('why_they_matter')}", row.get("source_url", ""), row.get("source_confidence", ""), "Yes", "Validate current reach if used as quantified proof.")
    for row in influencers:
        add(row.get("name_channel", ""), "Creator reach", f"{row.get('youtube_subscribers')} / {row.get('average_views')}", row.get("source_url", ""), row.get("source_confidence", ""), "Yes", "Refresh platform metrics before campaign or board use.")
    for row in investors:
        add(row.get("investor_fund", ""), "Investor / deal relevance", f"{row.get('recent_relevant_deals')} {row.get('why_relevant_for_yousician')}", row.get("source_url", ""), row.get("source_confidence", ""), "Yes", "Validate deal data with primary source or investor database.")
    write_csv(HANDOFF / "claim_source_matrix_v3_2.csv", rows)
    return rows


def strengthen_teachers() -> list[dict[str, object]]:
    rows = read_csv(HANDOFF / "teachers_schools_education_v3.csv")
    out: list[dict[str, object]] = []
    for row in rows:
        org = row.get("organization", "")
        tier = "High" if org in {"ABRSM", "Trinity College London", "RSL Awards / Rockschool", "Berklee Online", "School of Rock", "Music Teachers National Association"} else "Medium"
        beginner = "High" if org in {"School of Rock", "Lessonface", "Musora", "Pianote", "ABRSM", "Trinity College London"} else "Medium"
        region = row.get("region", "")
        out.append(
            {
                **row,
                "yousician_relevance_tier": tier,
                "beginner_influence": beginner,
                "priority_region": region,
                "partnership_potential": row.get("relationship_potential", ""),
                "next_validation_step": "Confirm regional relevance, current learner/teacher reach, and whether Yousician has an internal owner.",
            }
        )
    write_csv(HANDOFF / "teachers_schools_education_v3.csv", out)
    return out


def normalize_influencers() -> list[dict[str, object]]:
    rows = read_csv(HANDOFF / "influencers_creators_v3.csv")
    out: list[dict[str, object]] = []
    for row in rows:
        yt = row.get("youtube_subscribers", "")
        social = row.get("tiktok_instagram_reach", "")
        views = row.get("average_views", "")
        completeness = sum(1 for value in [yt, social, views] if value and "not validated" not in value.lower() and "needs validation" not in value.lower())
        out.append(
            {
                **row,
                "youtube_status": "Public proxy available" if yt and "needs validation" not in yt.lower() else "Pending platform export",
                "tiktok_instagram_status": "Pending platform export" if not social or "not validated" in social.lower() else "Public proxy available",
                "average_views_status": "Pending platform export" if not views or "needs validation" in views.lower() else "Public proxy available",
                "reach_completeness": f"{completeness}/3 fields populated with usable public proxy",
                "next_validation_step": "Refresh YouTube, TikTok, Instagram and average views from platform/social analytics before campaign planning.",
            }
        )
    write_csv(HANDOFF / "influencers_creators_v3.csv", out)
    return out


def strengthen_awards_funding() -> tuple[list[dict[str, object]], list[dict[str, object]]]:
    awards = read_csv(HANDOFF / "awards_v3.csv")
    funding = read_csv(HANDOFF / "funding_v3.csv")
    award_out = []
    for row in awards:
        timing = row.get("deadline_or_timing", "")
        status = "Closed / monitor next cycle" if re.search(r"was|closed|announced", timing.lower()) else "Monitor / validate current window"
        award_out.append(
            {
                **row,
                "deadline_status": status,
                "immediate_next_step": "Assign owner, confirm current deadline, collect product screenshots/video and evidence of learning impact.",
                "decision_needed": "Submit this cycle, monitor next cycle, or deprioritize.",
            }
        )
    funding_out = []
    for row in funding:
        source = row.get("funding_source", "")
        deadline_status = "Current validation required"
        immediate_next_step = "Assign owner, validate eligibility with funder page, estimate effort, and decide whether to prepare concept note."
        if source == "Business Finland R&D and piloting":
            deadline_status = "Reviewed 2026-06-11 / open funding services"
            immediate_next_step = "Screen current Business Finland RDI routes, including the 2026 Sprint pilot context, and decide whether to prepare a Yousician concept note."
            row = {
                **row,
                "deadline_or_cadence": "Continuous/open services; Sprint funding is being introduced in 2026 while Tempo is not reopening.",
                "fit_for_yousician": "Strong fit for AI practice, learning R&D or internationalization initiatives; Sprint should be monitored if Yousician has an eligible new innovation path.",
                "source_url": "https://www.businessfinland.fi/en/whats-new/news/2026/what-do-business-finlands-funding-services-look-like-at-the-beginning-of-2026/",
                "source_confidence": "High",
                "last_checked_date": TODAY,
            }
        elif source == "Business Finland Co-Innovation":
            deadline_status = "Reviewed 2026-06-11 / call listed open"
            immediate_next_step = "Validate consortium fit with Business Finland funding pages and identify any university/research partner before preparing effort estimates."
        funding_out.append(
            {
                **row,
                "deadline_status": deadline_status,
                "immediate_next_step": immediate_next_step,
                "decision_needed": "Pursue, monitor, partner-led only, or deprioritize.",
            }
        )
    write_csv(HANDOFF / "awards_v3.csv", award_out)
    write_csv(HANDOFF / "funding_v3.csv", funding_out)
    return award_out, funding_out


def generate_live_overrides(app_rows: list[dict[str, object]]) -> dict[str, object]:
    players = read_csv(HANDOFF / "players_v3.csv")
    id_by_name = {row.get("player", ""): row.get("player_id", "") for row in players}
    metrics: dict[str, dict[str, object]] = {}
    for row in app_rows:
        pid = id_by_name.get(str(row.get("player", ""))) or player_id_from_name(players, str(row.get("player", "")))
        if not pid:
            continue
        metrics[pid] = {
            "name": row.get("player", ""),
            "appfiguresAppId": row.get("app_store_id_or_package", ""),
            "downloads": row.get("downloads_30d") or None,
            "revenue": row.get("revenue_30d") or None,
            "categoryRank": row.get("rank_current") or None,
            "reviewVelocity": row.get("review_velocity_90d") or None,
            "websiteVisits": None,
            "source": "handoff/appfigures-performance-export-integrated-v3.csv",
            "lastUpdated": TODAY,
            "notes": row.get("public_proxy_notes") or row.get("appfigures_status", ""),
        }
    data = {
        "status": {
            "label": "Live override layer generated from v3.2 handoff tables",
            "lastUpdated": TODAY,
            "source": "scripts/apply_brief_aligned_v3_2.py",
            "caveat": "Public proxy notes are shown in the dashboard. Appfigures metrics remain pending unless imported from credentialed export.",
        },
        "schema": {
            "metricsByPlayer": "Generated from appfigures-performance-export-integrated-v3.csv",
            "relationshipOverrides": "Internal relationship overrides still require Yousician input",
        },
        "metricsByPlayer": metrics,
        "relationshipOverrides": {},
    }
    DATA.mkdir(parents=True, exist_ok=True)
    (DATA / "live-overrides.json").write_text(json.dumps(data, indent=2), encoding="utf-8")
    return data


def write_status_files() -> None:
    rows = [
        {
            "area": "Appfigures",
            "status": "Not available in this package",
            "impact": "Cannot rank app-based companies by revenue, downloads, rank trend, review velocity or country mix.",
            "mitigation_in_v3_2": "Appfigures request pack, import template, public iOS proxy refresh, and explicit non-Appfigures caveats.",
            "next_action": "Run credentialed export through scripts/import_appfigures_export.py --credentialed.",
        },
        {
            "area": "Key Player Profiles",
            "status": "Added",
            "impact": "All 28 key players now have compact profile rows suitable for one-pager rendering.",
            "mitigation_in_v3_2": "key_player_profiles_v3_2.csv and report profile pages.",
            "next_action": "Validate performance and relationship fields with Yousician owners.",
        },
        {
            "area": "Market Moves",
            "status": "Curated",
            "impact": "Static watchlist items are separated from board timeline items.",
            "mitigation_in_v3_2": "news_grade and include_in_board_timeline fields added.",
            "next_action": "Use board timeline for main report; keep context items in appendix.",
        },
        {
            "area": "Source QA",
            "status": "Claim-level matrix plus reviewed source-change queue",
            "impact": "Hard claims can be checked row-by-row; source-change items are separated from final claims until reviewed.",
            "mitigation_in_v3_2": "claim_source_matrix_v3_2.csv plus review_queue_v3.csv with review_status and notes.",
            "next_action": "Keep hard-claim review as a gate before Board use.",
        },
        {
            "area": "Dashboard refresh",
            "status": "Improved but not fully autonomous",
            "impact": "Dashboard now consumes generated live-overrides.json; player taxonomy still comes from seed JS unless separately rebuilt.",
            "mitigation_in_v3_2": "Generated public proxy overrides and rebuild pipeline.",
            "next_action": "For full CMS-style dashboard, move all arrays out of app.js into JSON modules.",
        },
    ]
    write_csv(HANDOFF / "brief_aligned_status_v3_4.csv", rows)


def main() -> None:
    players = read_csv(HANDOFF / "players_v3.csv")
    key_players = read_csv(HANDOFF / "key_players_v3.csv")
    app_rows, request_pack = enrich_appfigures_public_proxy()
    moves = curated_market_moves()
    teachers = strengthen_teachers()
    influencers = normalize_influencers()
    awards, funding = strengthen_awards_funding()
    investors = read_csv(HANDOFF / "investors_v3.csv")
    profiles = build_profiles(players, key_players, moves, app_rows)
    top10 = build_top10(profiles, moves)
    claim_matrix = build_claim_matrix(key_players, moves, app_rows, teachers, influencers, investors)
    live_overrides = generate_live_overrides(app_rows)
    write_status_files()
    print(
        json.dumps(
            {
                "appfigures_rows": len(app_rows),
                "appfigures_request_pack": len(request_pack),
                "curated_market_moves": len(moves),
                "board_timeline_items": sum(1 for r in moves if r.get("include_in_board_timeline") == "Yes"),
                "key_player_profiles": len(profiles),
                "top10_synthesis_rows": len(top10),
                "claim_matrix_rows": len(claim_matrix),
                "dashboard_metric_overrides": len(live_overrides.get("metricsByPlayer", {})),
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
