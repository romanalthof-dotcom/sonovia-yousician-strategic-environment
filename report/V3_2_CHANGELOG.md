# Yousician Strategic Environment Mapping - v3.2 Changelog

Date: 2026-06-11

## v3.4 Export Length Options

- Added selectable export report lengths in the browser export: `Executive brief`, `Standard brief`, and `Full evidence`.
- The selected length is persisted in the URL via `?export=brief&length=short|standard|full`.
- The short export contains direct guiding-question answers, primary files, and validation gates only.
- The standard export keeps the brief-aligned handoff structure with requirement coverage, slide coverage, ecosystem map, and gates.
- The full export adds key-player proof cards, database proof cards, relationship completion cards, and an evidence appendix.
- Print/PDF behavior now uses the selected report length and hides interactive controls in the printed output.
- Added `scripts/run_export_length_qa.mjs` to verify the three export lengths, section counts, console errors, failed requests, and overflow.

## v3.4 Executive Slide Visual Rebuild

- Rebuilt the executive summary deck into a 14-slide, brief-first presentation with a stronger editorial design system.
- Made `Yousician Strategic Environment Executive Summary v3.4.pptx` the primary dashboard and executive export deck while preserving v3.2 and v3.3 compatibility copies.
- Replaced the box-heavy dashboard/memo feel with larger claims, stronger dark/paper pacing, a music-staff line motif, a left confidence rail and one proof object per slide.
- Added or separated slides for success definition, music-as-a-hobby journey, relationship completion layer and evidence/data-quality QA.
- Improved data visualization clarity: direct labels, semantic status colors, visible Appfigures and relationship gates, and fewer small table fragments in the main read.
- Added `executive_summary_deck_contact_sheet_v3.4.png` for visual QA.
- Added `handoff/figma_slide_design_brief_v3_4.md` so the deck can be transferred into Figma Slides once a target Figma file is available.
- Added `handoff/executive_deck_visual_qa_v3_4.csv` to document slide count, visual system, data-viz clarity, PPTX integrity and Figma handoff readiness.
- Updated dashboard and executive export links from v3.3 to v3.4.

## v3.2.5 Data Quality Gate and Package Hardening

- Added a visible `Data Quality Check` card in the dashboard Sources view.
- Added backend endpoints for `/api/backend/data-quality` and `/api/backend/data-quality/fix`.
- Added `handoff/data_quality_check_v3_2_5.csv` with the current pass/warning/blocked status for key players, market moves, Appfigures, relationships, refresh queue, hard claims and source confidence.
- Added `handoff/dashboard_data_quality_layout_qa_v3_2_5.csv` and `scripts/run_dashboard_qa.mjs` for repeatable visible QA of the Data Quality Check across desktop, tablet and mobile widths.
- Ran the safe data hygiene fix: 11 repeated public-proxy note rows were cleaned and 6 duplicate open refresh rows were marked as superseded.
- Verified the Data Quality Check at 1440px, 900px and 390px widths: all three passed with no document overflow, no data-quality-card overflow, no console issues and no failed requests.
- The safe-fix backlog is now clear: 0 duplicate open refresh groups and 0 repeated public-proxy note rows remain.
- Hardened the App Store public-proxy refresh so repeated rebuilds do not re-append the same "public proxy only, not Appfigures" note.
- Fixed backend restart behavior by enabling reusable local port binding.
- Hardened the backend package step so the final package receives the complete handoff folder, deliverables, report, workbook and relevant readmes instead of only a short selected file list.
- Kept real blockers explicit: Appfigures remains blocked at 0 credentialed rows, and 28 of 28 relationship rows still need Yousician owner input.
- Kept review risks explicit: 16 open refresh/source-change rows, 33 hard-claim confidence gaps and 42 Low/Pending source-audit rows remain for human validation.

## v3.2.4 Local Backend and UX Integration

- Added a local review-gated backend (`scripts/backend_server.py`) that serves the dashboard and exposes status, review queue, relationship, Appfigures import, refresh, rebuild and packaging endpoints.
- Added `scripts/start_backend.sh` so the package can be opened as an actual local website at `http://127.0.0.1:8877/` rather than as a directory listing or static file bundle.
- Added `BACKEND_README.md` with board-safe language and clear boundaries for what is live, what remains credential-gated and what should not be called fully autonomous.
- Added a SQLite operational cache at `backend/yousician_backend.sqlite` while keeping the handoff CSVs as the auditable source of truth.
- Integrated backend operations directly into the dashboard Sources view: live counts, refresh, rebuild, repack, credentialed Appfigures import, review accept/reject and relationship completion fields.
- Kept Appfigures performance metrics explicitly gated. Credentialed Appfigures row count is `0` until a real authorized export or API output is imported.
- Verified the local backend status endpoint, review queue endpoint, rebuild endpoint and packaging endpoint.

## v3.3 Executive Slide Rebuild

- Rebuilt the executive summary deck from report-excerpt slides into a 12-slide brief-first executive narrative.
- Added a stronger front-door thesis: the strategic environment is an ecosystem fight, not a competitor list.
- Replaced repeated card-grid/table layouts with distinct slide rhythms: dark thesis pages, four-system answer map, ecosystem ring map, top-10 actor ladder, Appfigures blocker gate, market-move bar proof, AI pressure-zone map, trust layer, evidence QA, decision gates, living-system workflow and send-package close.
- Kept Appfigures and internal relationship gaps visibly gated instead of burying them in appendix language.
- Exported both `Yousician Strategic Environment Executive Summary v3.2.pptx` for existing dashboard links and `Yousician Strategic Environment Executive Summary v3.3.pptx` as the upgraded deck copy.
- Added the new deck builder to `scripts/build_executive_deck.mjs` and updated the backend rebuild path to prefer the package-local builder.

## Executive Export Alignment

- Replaced the previous broad `Export snapshot` dashboard output with an executive handoff.
- Made the v3.3 executive summary deck the first export link and the primary executive-facing artifact.
- Added an on-screen executive export mode so the handoff can be reviewed in the browser before printing or saving to PDF.
- Changed the export button behavior from immediate print dialog to a visible handoff page with download-deck, print/PDF and back-to-dashboard actions.
- Added a brief-requirement coverage section for ecosystem map, key players, database, relationship space, guiding questions, Appfigures, last-24-months moves, weak categories, sources and confidence.
- Added a slide-by-slide coverage map showing how the 12-slide executive deck answers the brief.
- Added Board-use validation gates directly in the export: Appfigures, relationships, hard claims and creator reach.
- Removed generic dashboard walkthrough behavior from the export so it does not read as an unfocused database dump.
- Kept the wording explicit that Appfigures metrics are not populated unless imported from a credentialed export or API output.

## Product Lens Filters

- Added a visible dashboard Product lens filter with `All products`, `Yousician`, `GuitarTuna`, and `Shared`.
- Applied the product lens globally across the map, key-player view, database, relationship view and current filtered CSV export.
- Added product-lens badges to key-player cards and database cards, and added a `Product lens` field to the database table and CSV export.
- Opened the filter drawer by default and renamed it to `Product and research filters`.
- Fixed category-filter count wrapping so two-digit counts no longer split across lines.
- Corrected the product-lens heuristic so neutral relationship-completion text does not cause every record to be treated as Yousician-relevant.

## Internal User Research Context

- Added `handoff/internal_research_context_v3.csv` containing the locally available Yousician, GuitarTuna and cross-product research anchors.
- Added product-specific internal research notes directly under the Product lens filter.
- Added the internal research context CSV to the executive export file list.
- Verified that the live Confluence User Research Database redirects to Atlassian login in this session, so this is a local research-context integration rather than a full live database import.
- Kept Appfigures performance metrics and internal relationship / CRM fields blocked until credentialed data is provided.

## Executive Mode Cleanup

- Restricted Executive Mode to executive-facing outputs only.
- Hid search, product filters, internal research notes, optional map layers, optional strategic analysis, source/backend tooling, key-player visual workbench and database proofing visuals from Executive Mode.
- Kept those deeper controls available in Research Mode so the dashboard can still be used as a living workbench without polluting the executive read.
- Updated the mode toast copy to make the distinction explicit.

## Layout QA Polish

- Hardened dashboard typography and containers so long labels, badges, buttons and table fields wrap inside their parent elements instead of colliding.
- Relaxed fixed-height one-pager cards and score blocks that could clip headings or numeric labels in narrow browser windows.
- Tightened responsive rules for the top navigation, view tabs, executive answer cards, profile panels and one-pager hero.
- Updated the browser cache version to `20260611-layout-polish` so the corrected layout loads reliably.

## v3.2.3 Executive Readiness Gate

- Added `board_readiness_gate_v3_4.csv` with explicit Ready / Review-only / Blocked gate logic for executive, LST and Board use.
- Added `executive_send_readiness_summary_v3_4.csv` with safe language and avoid-language for how to describe the package.
- Added `appfigures_credentialed_import_runbook_v3_2_3.csv` based on official Appfigures API/report surfaces for sales, revenue, ratings, reviews and App Intelligence estimates.
- Added `layout_qa_v3_2_3.csv` documenting the narrow-viewport database table collapse and the responsive record-card fix.
- Updated the dashboard start screen with a visible Board-use readiness block and direct links to the readiness gate, Appfigures runbook, relationship template, claim matrix and review queue.
- Updated the report and workbook rebuild pipeline so the new readiness-gate files are regenerated and included.
- Updated the executive deck with a new readiness slide directly after the cover.

## v3.2.2 Executive Final Polish

- Added `executive_top_10_actor_ranked_v3_4.csv` with ranked actors, influence layer, guiding-question mapping, board-use status and next validation step.
- Added `ecosystem_map_2_0_v3_2_2.csv` to make the ecosystem map a proximity/influence/momentum layer rather than a simple category diagram.
- Added `executive_decision_gates_v3_4.csv` so Appfigures, relationships, creator reach, hard claims, awards/funding and publication approval are explicit gates.
- Added `executive_story_spine_v3_4.csv` to make the slide narrative reproducible.
- Updated the executive deck to 13 slides with a new Decision Gates slide and corrected open-refresh-check status.
- Updated the dashboard start screen with top actors and decision gates.
- Updated the final report and workbook to include the new executive polish sheets.
- Latest refresh surfaced open review checks; these remain review-gated and should not be treated as automatically accepted board claims.

## What changed from v3.1

- Added a brief-aligned delivery status table that directly tracks unresolved critique areas.
- Added `appfigures_request_pack_v3_2.csv` with exact required Appfigures fields and next action per app.
- Refreshed public iOS App Store proxy ratings/review counts through iTunes Lookup where app IDs were available.
- Kept all public app-store signals explicitly labelled as public proxies, not Appfigures.
- Added `key_player_profiles_v3_2.csv` with one compact profile for each of the 28 key players.
- Added 28 key-player profile pages inside the final v3.2 report.
- Added `executive_top_10_actor_synthesis_v3_2.csv` to make the guiding-question answer sharper and more prioritized.
- Added `market_moves_24m_curated_v3_2.csv` with `news_grade`, `include_in_board_timeline`, and `curation_note`.
- Separated news-grade board timeline items from weaker appendix/context items.
- Added `claim_source_matrix_v3_2.csv` with 185 claim-to-source rows and hard-claim review flags.
- Added strategic prioritization fields to teachers/schools: relevance tier, beginner influence, priority region, partnership potential and next validation step.
- Normalized influencer reach status fields so missing TikTok/Instagram/average-view data is consistently marked as pending platform export.
- Strengthened awards/funding operational fields: deadline status, immediate next step and decision needed.
- Generated dashboard `data/live-overrides.json` from v3.2 handoff data so public proxy notes flow into the dashboard.
- Updated PDF/XLSX rebuild pipeline to include the v3.2 enrichment step.

## Remaining limitations

- No credentialed Appfigures export is present, so revenue/download/rank/country-mix performance remains incomplete.
- Public proxy metrics are useful orientation signals only.
- Full dashboard data modularity would require moving the hardcoded seed arrays out of `app.js` into generated JSON modules.
- Internal Yousician relationship fields still require Yousician owner input.
