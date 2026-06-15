#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PYTHON_BIN="${PYTHON_BIN:-/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3}"
NODE_BIN="${NODE_BIN:-/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node}"

cd "$BASE_DIR"

if [[ "${1:-}" == "--baseline" ]]; then
  "$PYTHON_BIN" scripts/refresh_public_sources.py --baseline
else
  "$PYTHON_BIN" scripts/refresh_public_sources.py
fi

if [[ -n "${APPFIGURES_EXPORT_PATH:-}" ]]; then
  "$PYTHON_BIN" scripts/import_appfigures_export.py "$APPFIGURES_EXPORT_PATH" --credentialed
fi

"$PYTHON_BIN" scripts/apply_validation_pass_v3_2_1.py
"$PYTHON_BIN" scripts/apply_final_board_gates_v3_6.py
"$PYTHON_BIN" scripts/apply_market_story_final_v3_7.py
"$PYTHON_BIN" scripts/write_data_quality_check.py
"$PYTHON_BIN" scripts/build_presend_report_v3_5.py
"$NODE_BIN" scripts/render_presend_report_pdf.mjs
"$NODE_BIN" scripts/build_workbook.mjs
"$NODE_BIN" scripts/build_executive_deck.mjs
"$PYTHON_BIN" scripts/build_deck_pdf.py
"$NODE_BIN" scripts/render_export_pdfs.mjs
"$PYTHON_BIN" scripts/package_presend_v3_5.py

echo "Rebuilt v3.9 outputs:"
echo " - report/Yousician Strategic Environment Mapping - Market Landscape Report v3.9.pdf"
echo " - Yousician Strategic Environment Database v3.9.xlsx"
echo " - deliverables/Yousician Strategic Environment Executive Summary v3.9.pptx"
echo " - /Users/roman.althof/Desktop/yousician-dashboard/v3.9-submission-deliverables/Yousician Strategic Environment Executive Summary v3.9.pdf"
echo " - deliverables/Yousician Strategic Environment Executive Export - Short/Standard/Full v3.9.pdf"
echo " - /Users/roman.althof/Desktop/yousician-dashboard/v3.9-submission-deliverables/Yousician Strategic Environment Mapping - Submission Package.zip"
echo " - handoff/review_queue_v3.csv"
echo " - handoff/refresh_run_log_v3.csv"
