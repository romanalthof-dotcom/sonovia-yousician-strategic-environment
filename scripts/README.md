# v3.9 Scripts

## `start_backend.sh`

Starts the local living backend on `http://127.0.0.1:8877/`.

Optional scheduler:

```bash
AUTO_REFRESH_MINUTES=60 scripts/start_backend.sh
AUTO_REFRESH_MINUTES=60 AUTO_REFRESH_MODE=full_cycle scripts/start_backend.sh
```

## `backend_server.py`

Serves the dashboard and exposes local API endpoints for:

- status
- public source refresh
- refresh cycle
- output rebuild
- deliverable packaging
- credentialed Appfigures import
- internal relationship completion
- review queue status updates
- scheduler control

## `refresh_public_sources.py`

Checks `config/source-watchlist-v3.csv`, writes source-check history to `handoff/refresh_run_log_v3.csv`, and stages changed sources in `handoff/review_queue_v3.csv`.

Use `--baseline` once to initialize `data/refresh-state.json` without opening review items for every existing source.

## `refresh_public_enrichment.py`

Creates `data/public-enrichment.json` from the current player list, linked public sources, official website checks, Apple public App Store lookup and Wikidata entity records.

Use this to fill public profile facts such as official website status, rating count, rating, HQ, founded date and ownership references. It deliberately does not fill revenue, downloads, app rank trends, conversion, retention, active users or internal relationship fields without credentialed exports.

## `import_appfigures_export.py`

Imports an Appfigures CSV export into `handoff/appfigures-performance-export-integrated-v3.csv`.

Use `--credentialed` only when the file came from authorized Appfigures access.

## `build_presend_report_v3_5.py`

Regenerates the current v3.9 market landscape report HTML from the handoff CSVs.

## `render_presend_report_pdf.mjs`

Renders the current v3.9 market landscape report PDF.

## `build_executive_deck.mjs`

Regenerates the v3.9 executive summary deck and copies it into the deliverables folders.

## `build_workbook.mjs`

Regenerates `Yousician Strategic Environment Database v3.9.xlsx`.

## `render_export_pdfs.mjs`

Renders the Short, Standard and Full executive export PDFs from the dashboard export view.

## `package_presend_v3_5.py`

Creates the clean submission ZIP, optional appendix ZIP and dashboard ZIP.

## `rebuild_all.sh`

Runs the full v3.9 refresh, rebuild and package pipeline.
