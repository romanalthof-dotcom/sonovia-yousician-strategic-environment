#!/usr/bin/env python3
"""Add the final Chris-facing prioritization layer on top of v3.2 handoff data."""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path


BASE = Path(__file__).resolve().parents[1]
HANDOFF = BASE / "handoff"
TODAY = str(date.today())


def write_csv(name: str, rows: list[dict[str, str]], fieldnames: list[str] | None = None) -> None:
    if fieldnames is None:
        fieldnames = []
        for row in rows:
            for key in row:
                if key not in fieldnames:
                    fieldnames.append(key)
    with (HANDOFF / name).open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def read_csv(name: str) -> list[dict[str, str]]:
    path = HANDOFF / name
    if not path.exists():
        return []
    with path.open(newline="", encoding="utf-8-sig") as f:
        return list(csv.DictReader(f))


def main() -> None:
    app_request_count = len(read_csv("appfigures_request_pack_v3_2.csv"))
    top_actors = [
        {
            "rank": "1",
            "actor_or_cluster": "Suno",
            "primary_influence_layer": "AI creation and rights risk",
            "guiding_question_answered": "Music as a hobby; strategic environment",
            "priority_reason": "Suno is the clearest signal that music participation can move from learning an instrument to prompting, generating and sharing music, while also triggering rights and licensing risk.",
            "proof_available": "Board timeline includes AI rights litigation and AI funding / product signals; source confidence should be checked claim-by-claim before board excerpts.",
            "what_changed_recently": "AI music moved from novelty to legal, capital and rights-infrastructure debate.",
            "evidence_confidence": "Medium-High",
            "appfigures_required": "No for core AI/rights signal; yes only if app/mobile performance is later used.",
            "relationship_required": "Internal relationship status must be completed by Yousician if any partnership / monitoring owner is assumed.",
            "board_use_status": "Usable as a strategic signal; do not use as an adoption or revenue ranking without validated metrics.",
            "next_validation_step": "Confirm latest funding, litigation status and rights-owner positioning before board use.",
        },
        {
            "rank": "2",
            "actor_or_cluster": "Music.AI / Moises",
            "primary_influence_layer": "AI practice utility and creator tooling",
            "guiding_question_answered": "Music learning; music as a hobby",
            "priority_reason": "Moises connects AI directly to practice utility: stems, isolation, transcription and creator workflow reduce friction between song discovery and playing.",
            "proof_available": "Product and funding/news sources exist; reach and mobile performance require credentialed validation.",
            "what_changed_recently": "AI practice tools are moving toward broader creator platforms rather than only single-purpose utilities.",
            "evidence_confidence": "Medium",
            "appfigures_required": "Yes for downloads, revenue, rank trend, review velocity and country mix.",
            "relationship_required": "Internal relationship owner/status must be added by Yousician.",
            "board_use_status": "Usable as a capability and ecosystem signal; not performance-ranked yet.",
            "next_validation_step": "Import Appfigures and verify user/reach claims from official or investor-grade sources.",
        },
        {
            "rank": "3",
            "actor_or_cluster": "Simply / JoyTunes",
            "primary_influence_layer": "Direct app-based learning benchmark",
            "guiding_question_answered": "Music learning; who is successful",
            "priority_reason": "Simply is the closest mobile learning benchmark for onboarding, motivation, subscription learning and beginner conversion.",
            "proof_available": "Public store and product sources exist; core performance remains blocked without Appfigures.",
            "what_changed_recently": "No performance conclusion should be made until the Appfigures request pack is populated.",
            "evidence_confidence": "Pending",
            "appfigures_required": "Critical: revenue, downloads, rank trend, review velocity and country mix.",
            "relationship_required": "Internal relationship owner/status must be added by Yousician.",
            "board_use_status": "Do not rank as successful by performance until credentialed Appfigures data is imported.",
            "next_validation_step": "Run credentialed Appfigures export for Simply Piano and Simply Guitar.",
        },
        {
            "rank": "4",
            "actor_or_cluster": "Ultimate Guitar / Muse Group",
            "primary_influence_layer": "Song-practice habit and repertoire ownership",
            "guiding_question_answered": "Music learning; music as a hobby",
            "priority_reason": "Ultimate Guitar controls a major song-to-practice surface: tabs, chords, community and repeated practice intent.",
            "proof_available": "Public product/community sources are available; traffic and app performance need validation.",
            "what_changed_recently": "Song-practice ecosystems remain central because learner demand often starts with a song, not a curriculum.",
            "evidence_confidence": "Medium",
            "appfigures_required": "Yes for app performance; traffic validation also needed.",
            "relationship_required": "Internal relationship owner/status must be added by Yousician.",
            "board_use_status": "Usable as a category-influence signal; not yet a quantified scale comparison.",
            "next_validation_step": "Validate traffic, app performance and Muse Group ownership/source claims.",
        },
        {
            "rank": "5",
            "actor_or_cluster": "BandLab",
            "primary_influence_layer": "Creation community and hobby expansion",
            "guiding_question_answered": "Music as a hobby; strategic environment",
            "priority_reason": "BandLab represents the path where hobbyists create, collaborate and publish rather than only learn or practice.",
            "proof_available": "Public product and company sources support the role; monetization/reach claims require validation.",
            "what_changed_recently": "Creation/community platforms increasingly define what a music hobby feels like after beginner learning.",
            "evidence_confidence": "Medium",
            "appfigures_required": "Optional for mobile app performance; platform traffic and creator reach validation also needed.",
            "relationship_required": "Internal relationship owner/status must be added by Yousician.",
            "board_use_status": "Usable as ecosystem position; avoid quantified reach claims unless sourced.",
            "next_validation_step": "Validate platform reach, product changes and AI/creator tooling claims.",
        },
        {
            "rank": "6",
            "actor_or_cluster": "TikTok / YouTube music discovery",
            "primary_influence_layer": "Discovery, demand creation and creator trust",
            "guiding_question_answered": "Music as a hobby; music learning",
            "priority_reason": "These platforms shape what beginners want to play and which creators they trust before a learning product is considered.",
            "proof_available": "Board timeline contains platform/music discovery moves; creator reach data remains incomplete.",
            "what_changed_recently": "Discovery power remains in short-form and creator platforms even when adjacent music products shift or close.",
            "evidence_confidence": "Medium-High",
            "appfigures_required": "No for platform influence; platform/creator exports are needed for reach precision.",
            "relationship_required": "Internal owner/status needed for any relationship or campaign assumption.",
            "board_use_status": "Usable as demand-generation layer; creator reach table still needs social exports.",
            "next_validation_step": "Complete TikTok/Instagram/YouTube creator reach exports and average-view validation.",
        },
        {
            "rank": "7",
            "actor_or_cluster": "Fender / Gibson / Yamaha hardware ecosystems",
            "primary_influence_layer": "Instrument access, bundles and branded learning funnels",
            "guiding_question_answered": "Music learning; strategic environment",
            "priority_reason": "Hardware brands can turn instrument purchase, setup, app onboarding and lesson subscription into one beginner journey.",
            "proof_available": "Official product and app sources exist; bundle performance and internal relationship status remain open.",
            "what_changed_recently": "Hardware-plus-software bundles and brand-backed apps remain important because the first instrument purchase is a strategic entry point.",
            "evidence_confidence": "Medium",
            "appfigures_required": "Yes where app-based learning products are compared.",
            "relationship_required": "Critical for partnership relevance; must be completed internally.",
            "board_use_status": "Usable as ecosystem/partner layer; not as partner pipeline without Yousician input.",
            "next_validation_step": "Confirm internal relationship owners and Appfigures for Fender Play/Gibson App where relevant.",
        },
        {
            "rank": "8",
            "actor_or_cluster": "Splice",
            "primary_influence_layer": "Paid creator tools and rights-aware workflow",
            "guiding_question_answered": "Music as a hobby; strategic environment",
            "priority_reason": "Splice shows that hobby participation can become paid creator workflow, sample access and production learning.",
            "proof_available": "Public product/company sources support the role; detailed performance and AI claims need validation.",
            "what_changed_recently": "Creator tools increasingly matter as learners move from playing songs to making music.",
            "evidence_confidence": "Medium",
            "appfigures_required": "Not central unless app performance is used; traffic/subscription validation may matter.",
            "relationship_required": "Internal relationship status must be completed if partnership relevance is asserted.",
            "board_use_status": "Usable as creator-tool context; avoid scale claims without source validation.",
            "next_validation_step": "Validate current AI/sample/product positioning and creator reach metrics.",
        },
        {
            "rank": "9",
            "actor_or_cluster": "ABRSM / Trinity / School of Rock education layer",
            "primary_influence_layer": "Trust, curriculum, certification and teacher/parent influence",
            "guiding_question_answered": "Music learning; strategic environment",
            "priority_reason": "Education bodies and school networks shape credibility, progression, parent trust and teacher recommendations.",
            "proof_available": "Public organization sources available; relationship potential and regional priority need internal owner input.",
            "what_changed_recently": "This layer is less news-driven but important because it supplies trust and accountability that apps alone may not provide.",
            "evidence_confidence": "Medium",
            "appfigures_required": "No.",
            "relationship_required": "Important if Yousician wants partnership or education-channel prioritization.",
            "board_use_status": "Usable as trust/benchmark layer; not as relationship map until internal fields are filled.",
            "next_validation_step": "Prioritize by beginner influence, geography and feasible relationship path.",
        },
        {
            "rank": "10",
            "actor_or_cluster": "Spotify / labels / rights infrastructure",
            "primary_influence_layer": "Rights, artist data, repertoire and AI governance",
            "guiding_question_answered": "Music as a hobby; strategic environment",
            "priority_reason": "Rights owners and music platforms set the permission, repertoire and artist-authenticity context for AI, songs and learning content.",
            "proof_available": "Policy/litigation/platform sources exist; licensing relationship assumptions are internal and not made here.",
            "what_changed_recently": "AI rights debates and platform authenticity policies are becoming part of the strategic operating environment.",
            "evidence_confidence": "High for policy/litigation signals; Pending for any private relationship assumption.",
            "appfigures_required": "No for rights-infrastructure framing.",
            "relationship_required": "Critical if licensing or partnership status is discussed.",
            "board_use_status": "Usable as external environment signal; do not infer Yousician relationship or licensing status.",
            "next_validation_step": "Confirm current rights-policy position and internal licensing relationship fields.",
        },
    ]

    ecosystem_layers = [
        {
            "layer": "1",
            "ecosystem_zone": "Direct learning and practice apps",
            "proximity_to_yousician": "Very close",
            "influence_level": "High",
            "momentum_level": "Medium",
            "representative_players": "Simply, Flowkey, Skoove, Fender Play, Gibson App, Rocksmith+, Guitar Tricks, Pickup Music",
            "why_it_belongs_on_map": "These players compete or benchmark directly on beginner learning, practice feedback, lessons, song-led curricula and subscription habits.",
            "evidence_status": "Public product/app-store sources plus pending Appfigures.",
            "validation_gap": "Credentialed Appfigures required before performance ranking.",
            "board_visual_note": "Inner ring; mark Appfigures-gated.",
        },
        {
            "layer": "2",
            "ecosystem_zone": "Song and repertoire ownership",
            "proximity_to_yousician": "Close",
            "influence_level": "High",
            "momentum_level": "Medium",
            "representative_players": "Ultimate Guitar, MuseScore, Songsterr, Chordify, Chord ai, YouTube",
            "why_it_belongs_on_map": "Song demand and repertoire access shape what learners actually practice and why they return.",
            "evidence_status": "Public product/community sources; traffic and app performance require validation.",
            "validation_gap": "Traffic, Appfigures and catalog/community claims need stronger source QA.",
            "board_visual_note": "Inner ring adjacent to learning; label as habit/repertoire layer.",
        },
        {
            "layer": "3",
            "ecosystem_zone": "Hardware-backed beginner funnels",
            "proximity_to_yousician": "Close / partnership surface",
            "influence_level": "High",
            "momentum_level": "Medium",
            "representative_players": "Fender, Gibson, Yamaha, Positive Grid, Donner, retailers",
            "why_it_belongs_on_map": "Instrument purchase is a major entry point; brands can bundle apps, lessons, setup and accessories into the beginner journey.",
            "evidence_status": "Official product and app sources; internal relationship status pending.",
            "validation_gap": "Bundle performance and relationship history must be completed by Yousician.",
            "board_visual_note": "Partnerable ring; avoid claiming relationship status.",
        },
        {
            "layer": "4",
            "ecosystem_zone": "AI practice utility",
            "proximity_to_yousician": "Close / adjacent utility",
            "influence_level": "High",
            "momentum_level": "High",
            "representative_players": "Moises, Chord ai, Chordify AI features, transcription/stem tools",
            "why_it_belongs_on_map": "These tools reduce the distance from song discovery to usable practice assets such as stems, chords and transcriptions.",
            "evidence_status": "Product/funding/news sources; app performance pending where applicable.",
            "validation_gap": "Appfigures and claims about user reach / accuracy require validation.",
            "board_visual_note": "Inner-to-middle ring; label as utility pressure.",
        },
        {
            "layer": "5",
            "ecosystem_zone": "Creation and production tools",
            "proximity_to_yousician": "Adjacent hobby expansion",
            "influence_level": "Medium-High",
            "momentum_level": "High",
            "representative_players": "BandLab, Splice, GarageBand, Ableton, FL Studio, Soundtrap",
            "why_it_belongs_on_map": "Learners increasingly move from playing to creating, remixing, producing and sharing.",
            "evidence_status": "Public product/company sources; detailed reach and monetization require validation.",
            "validation_gap": "Traffic, subscriber/user claims and AI-feature claims need source QA.",
            "board_visual_note": "Middle ring; connect to music-as-hobby question.",
        },
        {
            "layer": "6",
            "ecosystem_zone": "Creator educators and media demand",
            "proximity_to_yousician": "Adjacent trust and acquisition layer",
            "influence_level": "High",
            "momentum_level": "Medium-High",
            "representative_players": "JustinGuitar, Marty Music, Drumeo, Pianote, Rick Beato, Paul Davids, Guitar World, MusicRadar, MusicTech",
            "why_it_belongs_on_map": "Creators and media shape trust, song demand, lesson expectations and the beginner's mental model of progress.",
            "evidence_status": "YouTube public proxies partially available; TikTok/Instagram/average views pending.",
            "validation_gap": "Platform exports needed for reach consistency.",
            "board_visual_note": "Middle ring; mark reach-data incomplete.",
        },
        {
            "layer": "7",
            "ecosystem_zone": "Formal education and teacher networks",
            "proximity_to_yousician": "Trust / benchmark layer",
            "influence_level": "Medium-High",
            "momentum_level": "Medium",
            "representative_players": "ABRSM, Trinity, RSL Awards, MTNA, Berklee Online, School of Rock, teacher platforms",
            "why_it_belongs_on_map": "These bodies influence standards, credibility, parent trust, teacher recommendations and progression pathways.",
            "evidence_status": "Public organization sources; prioritization and relationship paths pending.",
            "validation_gap": "Internal prioritization by region, beginner influence and owner required.",
            "board_visual_note": "Outer trust ring; do not underplay because it is less news-driven.",
        },
        {
            "layer": "8",
            "ecosystem_zone": "AI creation, rights and platform governance",
            "proximity_to_yousician": "Strategic environment",
            "influence_level": "High",
            "momentum_level": "High",
            "representative_players": "Suno, Udio, ElevenLabs Music, labels, RIAA, Spotify, YouTube, TikTok",
            "why_it_belongs_on_map": "AI generation and rights governance reshape what music participation, repertoire use and content authenticity mean.",
            "evidence_status": "News/policy/litigation sources; legal status and licensing implications require current review.",
            "validation_gap": "Latest litigation/policy status must be checked before board use.",
            "board_visual_note": "Outer strategic-pressure ring; connect to risk and opportunity.",
        },
        {
            "layer": "9",
            "ecosystem_zone": "Capital, awards and public funding",
            "proximity_to_yousician": "Opportunity and signal layer",
            "influence_level": "Medium",
            "momentum_level": "Medium",
            "representative_players": "VC/growth funds, strategic investors, Business Finland, Horizon Europe, awards ecosystems",
            "why_it_belongs_on_map": "Funding and awards indicate where the market sees momentum and where non-dilutive or credibility opportunities may exist.",
            "evidence_status": "Operational trackers exist; deadlines and eligibility require current owner review.",
            "validation_gap": "Owner, fit/no-fit decision and deadline confirmation required.",
            "board_visual_note": "Outer opportunity ring; show as watchlist not recommendation.",
        },
    ]

    decision_gates = [
        {
            "gate": "Appfigures performance gate",
            "status": "Blocked / credentialed export required",
            "why_it_matters_for_chris": "The brief explicitly asks for Appfigures where possible; without it, app-based success cannot be ranked by revenue, downloads, ranks, review velocity or country mix.",
            "blocking_input": f"Credentialed Appfigures export for {app_request_count} request-pack rows.",
            "current_artifact": "appfigures_request_pack_v3_2.csv and appfigures-performance-export-integrated-v3.csv",
            "owner_placeholder": "Yousician Appfigures credential owner",
            "decision_needed": "Export now, accept caveat, or remove performance ranking from Chris-facing claims.",
            "board_use_rule": "No app revenue/download/rank conclusion without credentialed export.",
        },
        {
            "gate": "Internal relationship gate",
            "status": "Blocked / Yousician owner input required",
            "why_it_matters_for_chris": "Relationship fields are part of the brief, but external research cannot infer relationship status safely.",
            "blocking_input": "Owner, confirmed relationship, sensitivity, last contact and suggested next step.",
            "current_artifact": "relationships_template_v3.csv",
            "owner_placeholder": "Chris / Yousician relationship owners",
            "decision_needed": "Assign owners and fill internal relationship fields.",
            "board_use_rule": "Never write 'no relationship' unless internally confirmed.",
        },
        {
            "gate": "Creator reach gate",
            "status": "Partially complete / platform export required",
            "why_it_matters_for_chris": "Influencers and creator educators are named in the brief; names alone are not enough for a strategic layer.",
            "blocking_input": "YouTube, TikTok, Instagram and average-view exports or validated public source snapshots.",
            "current_artifact": "influencers_creators_v3.csv",
            "owner_placeholder": "Creator / social research owner",
            "decision_needed": "Validate reach fields or present creator layer as directional.",
            "board_use_rule": "Use only public proxy reach unless platform export is added.",
        },
        {
            "gate": "Private-company ownership and funding gate",
            "status": "Partially complete / paid database or direct validation required",
            "why_it_matters_for_chris": "Ownership, investors and funding are high-risk claims if based only on incomplete public pages.",
            "blocking_input": "Crunchbase, PitchBook, Dealroom, filings, official press releases or direct company validation.",
            "current_artifact": "claim_source_matrix_v3_2.csv and source_audit_v3.csv",
            "owner_placeholder": "Research owner TBD",
            "decision_needed": "Validate hard claims before board/investor excerpts.",
            "board_use_rule": "Claims marked Pending/Low remain caveated in main narrative.",
        },
        {
            "gate": "Awards/funding execution gate",
            "status": "Prepared / owner decision required",
            "why_it_matters_for_chris": "The tracker is only useful if someone can decide submit, monitor or deprioritize.",
            "blocking_input": "Owner, eligibility check, next deadline, effort estimate and submit/no-submit decision.",
            "current_artifact": "awards_v3.csv and funding_v3.csv",
            "owner_placeholder": "Partnerships / strategy owner TBD",
            "decision_needed": "Select 3-5 highest-priority opportunities or keep as monitoring appendix.",
            "board_use_rule": "Treat as opportunity tracker, not a recommendation list.",
        },
        {
            "gate": "Final PDF / slide publication gate",
            "status": "Review-gated / human approval required",
            "why_it_matters_for_chris": "A living database can refresh, but Chris/Board-facing claims should not update automatically without review.",
            "blocking_input": "Review queue closed, Appfigures/import caveats acknowledged, relationship fields reviewed.",
            "current_artifact": "review_queue_v3.csv, validation_pass_v3_2_1.csv, refresh_run_log_v3.csv",
            "owner_placeholder": "Chris / LST owner",
            "decision_needed": "Approve deck/report for discussion or hold for Appfigures/internal fields.",
            "board_use_rule": "Use the deck as current-state discussion material; use workbook for proof.",
        },
    ]

    story_spine = [
        {
            "slide": "1",
            "claim": "This is a broad strategic environment map, not a competitor analysis.",
            "proof_object": "Counts and package scope: players, key profiles, board moves, claim-source rows.",
            "caveat": "Appfigures and relationship fields remain gated.",
        },
        {
            "slide": "2",
            "claim": "The 10 most important actors split across AI, learning, repertoire, creation, discovery, hardware, trust and rights.",
            "proof_object": "Ranked actor table with evidence and validation gap.",
            "caveat": "Ranking is strategic influence, not financial performance.",
        },
        {
            "slide": "3",
            "claim": "Success cannot be reduced to revenue while Appfigures is missing.",
            "proof_object": "Success signal matrix: habit, distribution, repertoire/community, creator trust, hardware reach, AI utility, funding, app performance.",
            "caveat": "Revenue/download/rank success requires Appfigures.",
        },
        {
            "slide": "4",
            "claim": "The ecosystem map should show proximity and influence layers around the learner.",
            "proof_object": "Ecosystem Map 2.0 layer table.",
            "caveat": "Relationship proximity is not inferred externally.",
        },
        {
            "slide": "5",
            "claim": "The board timeline should foreground curated news-grade movement.",
            "proof_object": "Curated market-move table with include_in_board_timeline and news_grade.",
            "caveat": "Appendix/context items stay out of the main board timeline.",
        },
        {
            "slide": "6",
            "claim": "The package is strongest where evidence and blockers are explicit.",
            "proof_object": "Decision-gates table.",
            "caveat": "Blocked fields are not failure if presented as action gates.",
        },
    ]

    fields_actor = [
        "rank",
        "actor_or_cluster",
        "primary_influence_layer",
        "guiding_question_answered",
        "priority_reason",
        "proof_available",
        "what_changed_recently",
        "evidence_confidence",
        "appfigures_required",
        "relationship_required",
        "board_use_status",
        "next_validation_step",
    ]
    fields_ecosystem = [
        "layer",
        "ecosystem_zone",
        "proximity_to_yousician",
        "influence_level",
        "momentum_level",
        "representative_players",
        "why_it_belongs_on_map",
        "evidence_status",
        "validation_gap",
        "board_visual_note",
    ]
    fields_gate = [
        "gate",
        "status",
        "why_it_matters_for_chris",
        "blocking_input",
        "current_artifact",
        "owner_placeholder",
        "decision_needed",
        "board_use_rule",
    ]
    fields_spine = ["slide", "claim", "proof_object", "caveat"]

    write_csv("chris_top_10_actor_ranked_v3_2_2.csv", top_actors, fields_actor)
    write_csv("ecosystem_map_2_0_v3_2_2.csv", ecosystem_layers, fields_ecosystem)
    write_csv("chris_decision_gates_v3_2_2.csv", decision_gates, fields_gate)
    write_csv("chris_executive_story_spine_v3_2_2.csv", story_spine, fields_spine)

    print(f"Wrote Chris final polish v3.2.2 files on {TODAY}")


if __name__ == "__main__":
    main()
