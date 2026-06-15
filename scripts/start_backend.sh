#!/usr/bin/env bash
set -euo pipefail

BASE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PYTHON_BIN="${PYTHON_BIN:-/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3}"

cd "$BASE_DIR"
ARGS=(--host 127.0.0.1 --port "${PORT:-8877}")
if [[ -n "${AUTO_REFRESH_MINUTES:-}" ]]; then
  ARGS+=(--auto-refresh-minutes "$AUTO_REFRESH_MINUTES")
  ARGS+=(--auto-refresh-mode "${AUTO_REFRESH_MODE:-refresh_only}")
fi
exec "$PYTHON_BIN" scripts/backend_server.py "${ARGS[@]}" "$@"
