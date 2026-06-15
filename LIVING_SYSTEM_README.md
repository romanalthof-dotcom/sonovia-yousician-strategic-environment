# Yousician Strategic Environment Mapping v3.9 - Living System Notes

The system is a **review-gated living database**, not an uncontrolled auto-published report.

It can refresh public source pages, detect changes, import a credentialed Appfigures export, update internally confirmed relationship fields, regenerate the v3.9 report/deck/workbook/export PDFs, and repack the submission ZIP. It does not invent missing metrics or promote new source changes into final statements without human review.

## Automated

- Public source watchlist refresh.
- HTTP status, content hash and title capture.
- Change detection against `data/refresh-state.json`.
- Review queue creation in `handoff/review_queue_v3.csv`.
- Refresh run logging in `handoff/refresh_run_log_v3.csv`.
- Credentialed Appfigures CSV import when a real export is supplied.
- Internal relationship field updates when confirmed internal information is supplied.
- Regeneration of:
  - `report/Yousician Strategic Environment Mapping - Market Landscape Report v3.9.pdf`
  - `Yousician Strategic Environment Database v3.9.xlsx`
  - `deliverables/Yousician Strategic Environment Executive Summary v3.9.pptx`
  - `deliverables/Yousician Strategic Environment Executive Export - Short/Standard/Full v3.9.pdf`
  - `v3.9-submission-deliverables/Yousician Strategic Environment Mapping - Submission Package.zip`

## Not Automated Without Inputs

- Appfigures metrics without authorized Appfigures export/API output.
- Interpreting source changes as final market facts.
- Internal Yousician relationship status.
- Paid database checks for private-company ownership, funding, revenue or traffic.
- Final approval for broader external circulation.

## First-Time Baseline

```bash
PYTHON_BIN=python3 NODE_BIN=node scripts/rebuild_all.sh --baseline
```

## Manual Refresh Cycle

```bash
PYTHON_BIN=python3 NODE_BIN=node scripts/rebuild_all.sh
```

## Backend With Scheduler

```bash
AUTO_REFRESH_MINUTES=60 scripts/start_backend.sh
```

or:

```bash
AUTO_REFRESH_MINUTES=60 AUTO_REFRESH_MODE=full_cycle scripts/start_backend.sh
```

`refresh_only` checks public sources and stages changes for review. `full_cycle` additionally rebuilds outputs and repacks deliverables, while still keeping new claims review-gated.

## Appfigures Import

Create or inspect the required template:

```bash
python3 scripts/import_appfigures_export.py
```

Import a credentialed export:

```bash
APPFIGURES_EXPORT_PATH=/path/to/appfigures_export.csv scripts/rebuild_all.sh
```

or directly:

```bash
python3 scripts/import_appfigures_export.py /path/to/appfigures_export.csv --credentialed
```

Only use `--credentialed` for an authorized Appfigures export/API output.
