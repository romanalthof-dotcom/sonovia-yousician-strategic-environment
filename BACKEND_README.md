# Local Living Backend - v3.9

This package includes a local, review-gated backend for the dashboard.

## Start

```bash
scripts/start_backend.sh
```

Then open:

```text
http://127.0.0.1:8877/
```

## Optional Scheduled Refresh

Refresh public sources every hour:

```bash
AUTO_REFRESH_MINUTES=60 scripts/start_backend.sh
```

Run a full local cycle every hour:

```bash
AUTO_REFRESH_MINUTES=60 AUTO_REFRESH_MODE=full_cycle scripts/start_backend.sh
```

The full cycle runs public source refresh, rebuilds outputs, regenerates exports, and repacks deliverables. New public-source changes are still staged for review; they are not silently promoted into final market statements.

## What Is Live

- Serves the dashboard and deliverable files.
- Exposes `/api/backend/status` for live package status.
- Maintains a local SQLite operational cache at `backend/yousician_backend.sqlite`.
- Reads and writes the CSV source-of-truth files in `handoff/`.
- Imports credentialed Appfigures CSV exports.
- Saves internally confirmed relationship fields.
- Runs public-source refresh and stages changed sources in the review queue.
- Rebuilds the v3.9 report, workbook, executive deck, export PDFs and submission ZIP.
- Supports an optional scheduler through `/api/backend/scheduler`.

## What Still Requires Inputs

- Appfigures revenue, downloads, rankings, review velocity, country mix and 12-month trends require an authorized export/API output.
- YouTube, TikTok, Instagram, Similarweb, Crunchbase/PitchBook/Dealroom and internal CRM data require the relevant exports or connectors.
- Internal Yousician relationship status must be filled from confirmed internal knowledge.
- New source changes require human review before they become final report statements.

## Recommended Wording

Use:

> Local review-gated living backend with refresh, import, review, rebuild and repack workflow.

Avoid:

> Fully autonomous market intelligence system.
