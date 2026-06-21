#!/usr/bin/env python3
"""Audit profile metadata that the dashboard can display.

The audit does not invent missing facts. It classifies the currently available
HQ, founded and ownership values by source quality so the UI can avoid treating
seed or Wikidata candidates as fully verified executive facts.
"""

from __future__ import annotations

import json
import re
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


BASE = Path(__file__).resolve().parents[1]
APP_JS = BASE / "app.js"
PUBLIC_ENRICHMENT = BASE / "data" / "public-enrichment.json"
TARGET = BASE / "data" / "public-metadata-audit.json"


def today() -> str:
    return datetime.now(timezone.utc).date().isoformat()


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def read_json(path: Path, default: Any) -> Any:
    if not path.exists():
        return default
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as f:
        json.dump(payload, f, indent=2, ensure_ascii=False, sort_keys=True)
        f.write("\n")


def extract_js_value(name: str) -> Any:
    node_code = r"""
const fs = require("fs");
const path = process.argv[1];
const name = process.argv[2];
const text = fs.readFileSync(path, "utf8");
const marker = `const ${name} = `;
const start = text.indexOf(marker);
if (start < 0) throw new Error(`Missing ${name}`);
let i = start + marker.length;
while (/\s/.test(text[i])) i++;
const opener = text[i];
const closer = opener === "[" ? "]" : opener === "{" ? "}" : null;
if (!closer) throw new Error(`Unsupported value for ${name}`);
let level = 0;
let end = -1;
let inString = null;
let escaped = false;
let lineComment = false;
let blockComment = false;
for (let pos = i; pos < text.length; pos++) {
  const ch = text[pos];
  const next = text[pos + 1];
  if (lineComment) {
    if (ch === "\n") lineComment = false;
    continue;
  }
  if (blockComment) {
    if (ch === "*" && next === "/") {
      blockComment = false;
      pos++;
    }
    continue;
  }
  if (inString) {
    if (escaped) escaped = false;
    else if (ch === "\\") escaped = true;
    else if (ch === inString) inString = null;
    continue;
  }
  if (ch === "/" && next === "/") {
    lineComment = true;
    pos++;
    continue;
  }
  if (ch === "/" && next === "*") {
    blockComment = true;
    pos++;
    continue;
  }
  if (ch === "\"" || ch === "'" || ch === "`") {
    inString = ch;
    continue;
  }
  if (ch === opener) level++;
  if (ch === closer) {
    level--;
    if (level === 0) {
      end = pos + 1;
      break;
    }
  }
}
if (end < 0) throw new Error(`Could not parse ${name}`);
const value = eval(`(${text.slice(i, end)})`);
console.log(JSON.stringify(value));
"""
    result = subprocess.run(
        ["node", "-e", node_code, str(APP_JS), name],
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def source_status(record: dict[str, Any] | None, source_type: str) -> str:
    if not record:
        return "missing"
    if source_type == "correction":
        status = str(record.get("status") or "reviewed").lower()
        return "conflict" if "conflict" in status else "reviewed"
    source_blob = " ".join(str(record.get(key, "")) for key in ["source", "sourceUrl", "basis", "detail"])
    if re.search("wikidata", source_blob, flags=re.I):
        return "public_reference_only"
    if source_type == "seed":
        return "seed_needs_source"
    if source_type == "profile":
        return "profile_field_needs_source"
    return "public_source"


def pick_field(
    player: dict[str, Any],
    field: str,
    corrections: dict[str, Any],
    enrichment: dict[str, Any],
    seeds: dict[str, Any],
) -> dict[str, Any]:
    player_id = player["id"]
    corrected = corrections.get(player_id, {}).get(field)
    if corrected and corrected.get("value"):
        return {
            "value": corrected["value"],
            "sourceType": "correction",
            "status": source_status(corrected, "correction"),
            "note": corrected.get("detail") or corrected.get("caveat") or corrected.get("basis", ""),
        }
    enriched = enrichment.get(player_id, {}).get(field)
    if enriched and enriched.get("value"):
        return {
            "value": enriched["value"],
            "sourceType": "public_enrichment",
            "status": source_status(enriched, "public_enrichment"),
            "note": enriched.get("source") or "",
        }
    seeded = seeds.get(player_id)
    if seeded and seeded.get("value"):
        return {
            "value": seeded["value"],
            "sourceType": "seed",
            "status": source_status(seeded, "seed"),
            "note": seeded.get("basis") or seeded.get("detail") or "",
        }
    if field == "ownership" and player.get("ownership"):
        return {
            "value": player["ownership"],
            "sourceType": "profile",
            "status": source_status({"value": player["ownership"]}, "profile"),
            "note": "Hard-coded profile field. Needs a linked public or licensed source before external use.",
        }
    return {
        "value": "",
        "sourceType": "missing",
        "status": "missing",
        "note": "No field loaded.",
    }


def main() -> int:
    players = extract_js_value("players")
    corrections = extract_js_value("publicMetadataCorrectionsByPlayerId")
    hq_seed = extract_js_value("headquartersByPlayerId")
    ownership_seed = extract_js_value("publicOwnershipByPlayerId")
    founded_seed = extract_js_value("publicFoundedByPlayerId")
    enrichment = read_json(PUBLIC_ENRICHMENT, {"playerEnrichment": {}}).get("playerEnrichment", {})

    rows = []
    counts: dict[str, int] = {}
    for player in players:
        hq = pick_field(player, "hq", corrections, enrichment, hq_seed)
        founded = pick_field(player, "founded", corrections, enrichment, founded_seed)
        ownership = pick_field(player, "ownership", corrections, enrichment, ownership_seed)
        row = {
            "id": player["id"],
            "name": player["name"],
            "hq": hq,
            "founded": founded,
            "ownership": ownership,
            "needsReview": any(
                value["status"] in {"conflict", "public_reference_only", "seed_needs_source", "profile_field_needs_source"}
                for value in [hq, founded, ownership]
            ),
        }
        for field in [hq, founded, ownership]:
            counts[field["status"]] = counts.get(field["status"], 0) + 1
        rows.append(row)

    payload = {
        "status": {
            "label": "Public metadata audit",
            "version": "public-metadata-audit-v1",
            "lastUpdated": now_iso(),
            "checkedAt": today(),
            "checkedPlayers": len(rows),
            "method": "Compares dashboard profile fields against public enrichment, reviewed corrections and seed fallback layers.",
            "caveat": "This audit classifies source quality. It does not replace legal filings, licensed company databases or internal relationship truth.",
            "counts": counts,
        },
        "players": rows,
    }
    write_json(TARGET, payload)
    print(json.dumps(payload["status"], indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
