#!/usr/bin/env python3
"""Build public enrichment data for the dashboard.

The script only promotes public, source-visible fields. It does not estimate
downloads, revenue, rank trend, conversion, retention, or internal Yousician
relationships.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


BASE = Path(__file__).resolve().parents[1]
APP_JS = BASE / "app.js"
DATA = BASE / "data"
EVIDENCE = DATA / "evidence-library.json"
LIVE_OVERRIDES = DATA / "live-overrides.json"
TARGET = DATA / "public-enrichment.json"
WIKIDATA_API = "https://www.wikidata.org/w/api.php"
ITUNES_LOOKUP = "https://itunes.apple.com/lookup"
USER_AGENT = "YousicianStrategicEnvironmentPublicEnrichment/1.0 (+human-reviewed-market-intelligence)"
APP_METRIC_EXCLUDED_PLAYERS = {"fender"}


def now_iso() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat()


def today() -> str:
    return datetime.now(timezone.utc).date().isoformat()


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


def http_json(url: str, params: dict[str, str], timeout: int = 14) -> Any | None:
    query = urllib.parse.urlencode(params)
    request = urllib.request.Request(
        f"{url}?{query}",
        headers={"User-Agent": USER_AGENT, "Accept": "application/json"},
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            return json.loads(response.read().decode("utf-8", errors="replace"))
    except Exception:
        return None


def fetch_page_metadata(url: str, timeout: int = 12) -> dict[str, Any]:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            status = getattr(response, "status", 200)
            final_url = response.geturl()
            blob = response.read(250_000)
            text = blob.decode("utf-8", errors="replace")
            title = ""
            match = re.search(r"<title[^>]*>(.*?)</title>", text, flags=re.I | re.S)
            if match:
                title = re.sub(r"\s+", " ", match.group(1)).strip()
            return {
                "url": final_url,
                "httpStatus": str(status),
                "title": title,
                "accessStatus": "verified" if 200 <= int(status) < 400 else "manual-check",
                "checkedAt": today(),
                "error": "",
            }
    except urllib.error.HTTPError as exc:
        return {
            "url": url,
            "httpStatus": str(exc.code),
            "title": "",
            "accessStatus": "access-restricted" if exc.code in (401, 403, 429) else "needs-review",
            "checkedAt": today(),
            "error": str(exc),
        }
    except Exception as exc:
        return {
            "url": url,
            "httpStatus": "ERROR",
            "title": "",
            "accessStatus": "needs-review",
            "checkedAt": today(),
            "error": str(exc),
        }


def norm(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", " ", value.lower()).strip()


def source_by_id(evidence: dict[str, Any]) -> dict[str, dict[str, Any]]:
    return {
        str(row.get("source_id") or row.get("id")): row
        for row in evidence.get("sourceLibrary", [])
        if row.get("source_id") or row.get("id")
    }


def source_score(source: dict[str, Any], player: dict[str, Any]) -> int:
    text = " ".join(
        str(source.get(key, ""))
        for key in ["title", "type", "scope", "url", "access_status", "quality_note"]
    ).lower()
    if "yousician.atlassian.net" in text or "internal research" in text:
        return -100
    if "appfigures" in text or "crunchbase" in text or "similarweb" in text:
        return -80
    if "apps.apple.com" in text or "play.google.com" in text:
        return -20
    score = 0
    if "official" in text:
        score += 30
    if "company" in text:
        score += 10
    if "product" in text:
        score += 8
    if str(source.get("tier", "")).lower() == "high":
        score += 8
    if str(source.get("access_status", "")).lower() == "verified":
        score += 6
    source_tokens = set(norm(str(source.get("title", ""))).split())
    player_tokens = set(norm(str(player.get("name", ""))).split())
    score += len(source_tokens & player_tokens) * 4
    return score


def primary_public_source(player: dict[str, Any], evidence: dict[str, Any], sources: dict[str, dict[str, Any]]) -> dict[str, Any] | None:
    record = evidence.get("evidenceByPlayer", {}).get(player["id"], {})
    candidates = [sources.get(source_id) for source_id in record.get("sourceIds", [])]
    candidates = [source for source in candidates if source and str(source.get("url", "")).startswith("http")]
    if not candidates:
        return None
    ranked = sorted(candidates, key=lambda source: source_score(source, player), reverse=True)
    return ranked[0] if source_score(ranked[0], player) > -50 else None


def parse_itunes_id(value: str) -> str:
    app_url_match = re.search(r"/id(\d{7,12})(?:[/?#]|$)", value or "", flags=re.I)
    if app_url_match:
        return app_url_match.group(1)
    match = re.search(r"\b(\d{7,12})\b", value or "")
    return match.group(1) if match else ""


def parse_app_store_reference(value: str) -> tuple[str, str]:
    app_id = parse_itunes_id(value)
    if not app_id:
        return "", ""
    country = "us"
    match = re.search(r"apps\.apple\.com/([a-z]{2})/", value or "", flags=re.I)
    if match:
        country = match.group(1).lower()
    return app_id, country


def app_store_references_for_player(player: dict[str, Any], record: dict[str, Any], sources: dict[str, dict[str, Any]], live: dict[str, Any]) -> list[tuple[str, str, str]]:
    references: list[tuple[str, str, str]] = []
    metric_seed = live.get("metricsByPlayer", {}).get(player["id"], {})
    seed_id, seed_country = parse_app_store_reference(str(metric_seed.get("appfiguresAppId", "")))
    if seed_id:
        references.append((seed_id, seed_country or "us", "live override app id"))
    for source_id in record.get("sourceIds", []):
        source = sources.get(source_id) or {}
        url = str(source.get("url", ""))
        if "apps.apple.com" not in url:
            continue
        app_id, country = parse_app_store_reference(url)
        if app_id:
            references.append((app_id, country or "us", url))
    seen: set[tuple[str, str]] = set()
    unique: list[tuple[str, str, str]] = []
    for app_id, country, basis in references:
        key = (app_id, country)
        if key in seen:
            continue
        seen.add(key)
        unique.append((app_id, country, basis))
    return unique


def itunes_public_metrics(app_id: str, country: str = "us") -> dict[str, Any] | None:
    if not app_id:
        return None
    data = http_json(ITUNES_LOOKUP, {"id": app_id, "country": country or "us"}, timeout=14)
    if not data or not data.get("resultCount"):
        return None
    result = data["results"][0]
    review_count = result.get("userRatingCount")
    rating = result.get("averageUserRating")
    if review_count in ("", None) and rating in ("", None):
        return None
    return {
        "appStoreId": app_id,
        "country": country or "us",
        "appName": result.get("trackName", ""),
        "sellerName": result.get("sellerName", ""),
        "genre": result.get("primaryGenreName", ""),
        "rating": rating,
        "reviewCount": review_count,
        "currentVersionReleaseDate": result.get("currentVersionReleaseDate", ""),
        "source": "Official App Store public lookup, verified direct",
        "sourceUrl": result.get("trackViewUrl") or f"{ITUNES_LOOKUP}?id={app_id}&country=us",
        "lastUpdated": today(),
        "notes": "Public App Store rating count and rating only. Not downloads, revenue, active users, rank trend, conversion, or retention.",
    }


label_cache: dict[str, str] = {}


def wikidata_label(qid: str) -> str:
    if not qid:
        return ""
    if qid in label_cache:
        return label_cache[qid]
    data = http_json(
        WIKIDATA_API,
        {
            "action": "wbgetentities",
            "format": "json",
            "ids": qid,
            "props": "labels",
            "languages": "en",
        },
    )
    label = data.get("entities", {}).get(qid, {}).get("labels", {}).get("en", {}).get("value", "") if data else ""
    label_cache[qid] = label
    return label


def wikidata_time(value: str) -> str:
    if not value:
        return ""
    match = re.match(r"^[+]?(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?", value)
    if not match:
        return value
    year, month, day = match.groups()
    if month and day and day != "00":
        return f"{year}-{month}-{day}"
    if month and month != "00":
        return f"{year}-{month}"
    return year


def claim_entity(entity: dict[str, Any], prop: str) -> str:
    claims = entity.get("claims", {}).get(prop, [])
    for claim in claims:
        value = claim.get("mainsnak", {}).get("datavalue", {}).get("value")
        if isinstance(value, dict) and value.get("entity-type") == "item":
            return wikidata_label(f"Q{value.get('numeric-id')}")
    return ""


def claim_time(entity: dict[str, Any], prop: str) -> str:
    claims = entity.get("claims", {}).get(prop, [])
    for claim in claims:
        value = claim.get("mainsnak", {}).get("datavalue", {}).get("value")
        if isinstance(value, dict) and value.get("time"):
            return wikidata_time(value.get("time", ""))
    return ""


def claim_string(entity: dict[str, Any], prop: str) -> str:
    claims = entity.get("claims", {}).get(prop, [])
    for claim in claims:
        value = claim.get("mainsnak", {}).get("datavalue", {}).get("value")
        if isinstance(value, str):
            return value
    return ""


def wikidata_enrichment(player: dict[str, Any]) -> dict[str, Any] | None:
    name = player.get("name", "")
    if not name:
        return None
    search = http_json(
        WIKIDATA_API,
        {
            "action": "wbsearchentities",
            "format": "json",
            "language": "en",
            "limit": "4",
            "search": name,
        },
    )
    if not search or not search.get("search"):
        return None
    player_tokens = set(norm(name).split())
    best = None
    best_score = -1
    for candidate in search["search"]:
        label = candidate.get("label", "")
        description = candidate.get("description", "")
        candidate_tokens = set(norm(f"{label} {description}").split())
        score = len(player_tokens & candidate_tokens) * 5
        if norm(label) == norm(name):
            score += 18
        if any(token in norm(description) for token in ["company", "software", "website", "platform", "application", "music", "education"]):
            score += 4
        if score > best_score:
            best = candidate
            best_score = score
    if not best or best_score < 5:
        return None
    qid = best.get("id")
    data = http_json(
        WIKIDATA_API,
        {
            "action": "wbgetentities",
            "format": "json",
            "ids": qid,
            "props": "claims|labels|descriptions",
            "languages": "en",
        },
    )
    entity = data.get("entities", {}).get(qid, {}) if data else {}
    if not entity:
        return None
    website = claim_string(entity, "P856")
    hq = claim_entity(entity, "P159")
    founded = claim_time(entity, "P571")
    parent = claim_entity(entity, "P749")
    owned_by = claim_entity(entity, "P127")
    country = claim_entity(entity, "P17")
    return {
        "qid": qid,
        "label": entity.get("labels", {}).get("en", {}).get("value", best.get("label", "")),
        "description": entity.get("descriptions", {}).get("en", {}).get("value", best.get("description", "")),
        "source": "Wikidata public entity record",
        "sourceUrl": f"https://www.wikidata.org/wiki/{qid}",
        "matchScore": best_score,
        "checkedAt": today(),
        "website": website,
        "hq": hq,
        "founded": founded,
        "parentOrganization": parent,
        "ownedBy": owned_by,
        "country": country,
        "confidence": "candidate" if best_score < 18 else "matched public entity",
    }


def text_conflict(seed: str, enriched: str) -> bool:
    if not seed or not enriched:
        return False
    seed_norm = norm(seed)
    enriched_norm = norm(enriched)
    if not seed_norm or not enriched_norm:
        return False
    return seed_norm not in enriched_norm and enriched_norm not in seed_norm


def build(args: argparse.Namespace) -> dict[str, Any]:
    players = extract_js_value("players")
    hq_seed = extract_js_value("headquartersByPlayerId")
    evidence = read_json(EVIDENCE, {"sourceLibrary": [], "evidenceByPlayer": {}})
    live = read_json(LIVE_OVERRIDES, {"metricsByPlayer": {}})
    sources = source_by_id(evidence)
    rows: dict[str, Any] = {}
    checked = 0
    wikidata_count = 0
    app_store_count = 0
    website_count = 0
    conflict_count = 0

    for player in players[: args.max_players or None]:
        player_id = player["id"]
        record = evidence.get("evidenceByPlayer", {}).get(player_id, {})
        entry: dict[str, Any] = {
            "name": player["name"],
            "lastUpdated": today(),
            "sources": [],
            "conflicts": [],
            "publicMetric": None,
        }

        source = primary_public_source(player, evidence, sources)
        if source:
            website = {
                "value": source.get("url", ""),
                "title": source.get("title", ""),
                "sourceId": source.get("source_id") or source.get("id"),
                "source": "Existing evidence library primary public source",
                "sourceUrl": source.get("url", ""),
                "accessStatus": source.get("access_status", "not-checked"),
                "lastChecked": source.get("last_url_check", ""),
              }
            if args.check_websites:
                website.update(fetch_page_metadata(website["value"], timeout=args.timeout))
                time.sleep(args.sleep)
            entry["website"] = website
            website_count += 1
            entry["sources"].append(
                {
                    "title": website.get("title") or f"{player['name']} primary website",
                    "type": "Official website",
                    "tier": "High",
                    "url": website["value"],
                    "access_status": website.get("accessStatus", "not-checked"),
                    "last_url_check": today(),
                    "quality_note": "Selected from existing evidence library as primary public source."
                }
            )

        app_store_references = app_store_references_for_player(player, record, sources, live)
        metric = None
        metric_basis = ""
        for app_id, country, basis in app_store_references:
            metric = itunes_public_metrics(app_id, country)
            metric_basis = basis
            if metric:
                break
            time.sleep(args.sleep)
        if metric:
            entry["appStore"] = metric
            if player_id not in APP_METRIC_EXCLUDED_PLAYERS:
                entry["publicMetric"] = {
                    "reviewCount": metric.get("reviewCount"),
                    "rating": metric.get("rating"),
                    "source": metric.get("source"),
                    "sourceUrl": metric.get("sourceUrl"),
                    "lastUpdated": metric.get("lastUpdated"),
                    "basis": metric_basis,
                    "notes": metric.get("notes"),
                }
            else:
                entry["publicMetric"] = None
                entry["appStore"]["notes"] = (
                    "Related app listing found, but not promoted as this player metric because the record represents a parent, channel, or broader company."
                )
            entry["sources"].append(
                {
                    "title": f"{metric.get('appName') or player['name']} App Store public lookup",
                    "type": "App Store",
                    "tier": "High",
                    "url": metric.get("sourceUrl", ""),
                    "access_status": "verified",
                    "last_url_check": today(),
                    "quality_note": "Official Apple public lookup. Use only for rating and rating count, not revenue, downloads, rank, retention, or conversion."
                }
            )
            if entry["publicMetric"]:
                app_store_count += 1
            if text_conflict(player["name"], metric.get("appName", "")):
                entry["conflicts"].append(
                    {
                        "field": "appStoreName",
                        "seed": player["name"],
                        "publicValue": metric.get("appName", ""),
                        "severity": "review",
                        "note": "App Store app name does not closely match the dashboard player name. Confirm product mapping before using metrics."
                    }
                )
        if app_store_references:
            time.sleep(args.sleep)

        wikidata = wikidata_enrichment(player) if args.wikidata else None
        if wikidata:
            entry["wikidata"] = wikidata
            wikidata_count += 1
            entry["sources"].append(
                {
                    "title": f"{wikidata.get('label') or player['name']} Wikidata",
                    "type": "Public reference",
                    "tier": "Medium",
                    "url": wikidata.get("sourceUrl", ""),
                    "access_status": "verified",
                    "last_url_check": today(),
                    "quality_note": "Public entity reference used for HQ, founding date, parent or official website candidates. Verify high-stakes claims before external use."
                }
            )
            if wikidata.get("hq"):
                entry["hq"] = {
                    "value": wikidata["hq"],
                    "source": wikidata["source"],
                    "sourceUrl": wikidata["sourceUrl"],
                    "confidence": wikidata["confidence"],
                    "lastUpdated": today(),
                }
                seed = hq_seed.get(player_id, {}).get("value", "")
                if text_conflict(seed, wikidata["hq"]):
                    entry["conflicts"].append(
                        {
                            "field": "hq",
                            "seed": seed,
                            "publicValue": wikidata["hq"],
                            "severity": "review",
                            "note": "Seed HQ and Wikidata HQ differ. Treat as entity versus parent HQ until manually reviewed."
                        }
                    )
            if wikidata.get("founded"):
                entry["founded"] = {
                    "value": wikidata["founded"],
                    "source": wikidata["source"],
                    "sourceUrl": wikidata["sourceUrl"],
                    "confidence": wikidata["confidence"],
                    "lastUpdated": today(),
                }
            if wikidata.get("website") and not entry.get("website"):
                entry["website"] = {
                    "value": wikidata["website"],
                    "title": f"{player['name']} official website candidate",
                    "source": wikidata["source"],
                    "sourceUrl": wikidata["sourceUrl"],
                    "accessStatus": "not-checked",
                    "lastChecked": today(),
                }
            ownership_value = wikidata.get("ownedBy") or wikidata.get("parentOrganization")
            if ownership_value:
                entry["ownership"] = {
                    "value": ownership_value,
                    "source": wikidata["source"],
                    "sourceUrl": wikidata["sourceUrl"],
                    "confidence": wikidata["confidence"],
                    "lastUpdated": today(),
                }
        if wikidata:
            time.sleep(args.sleep)

        if entry["conflicts"]:
            conflict_count += len(entry["conflicts"])
        rows[player_id] = entry
        checked += 1

    return {
        "status": {
            "label": "Public enrichment layer",
            "lastUpdated": now_iso(),
            "version": "public-enrichment-v2",
            "method": "Generated from app.js players, evidence-library primary public sources, Apple App Store public lookups found in source links, live override app ids, and Wikidata entity records.",
            "caveat": "Public enrichment can fill profile facts, official links, rating counts and reference metadata. It must not be used as Appfigures, Similarweb, revenue, downloads, conversion, retention, active user, internal relationship or rank-trend proof.",
            "checkedPlayers": checked,
            "primaryWebsites": website_count,
            "appStoreMetrics": app_store_count,
            "wikidataRecords": wikidata_count,
            "conflictsFlagged": conflict_count,
        },
        "playerEnrichment": rows,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--max-players", type=int, default=0, help="Optional cap for debugging")
    parser.add_argument("--timeout", type=int, default=12)
    parser.add_argument("--sleep", type=float, default=0.08)
    parser.add_argument("--check-websites", action="store_true")
    parser.add_argument("--no-wikidata", dest="wikidata", action="store_false")
    parser.set_defaults(wikidata=True)
    args = parser.parse_args()

    payload = build(args)
    write_json(TARGET, payload)
    print(
        json.dumps(
            {
                "target": str(TARGET),
                "checkedPlayers": payload["status"]["checkedPlayers"],
                "primaryWebsites": payload["status"]["primaryWebsites"],
                "appStoreMetrics": payload["status"]["appStoreMetrics"],
                "wikidataRecords": payload["status"]["wikidataRecords"],
                "conflictsFlagged": payload["status"]["conflictsFlagged"],
            },
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
