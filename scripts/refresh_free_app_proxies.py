#!/usr/bin/env python3
from __future__ import annotations

import csv
import datetime as dt
import json
import re
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HANDOFF = ROOT / "handoff"
DATA = ROOT / "data"
APPFIGURES_CSV = HANDOFF / "appfigures-performance-export-integrated-v3.csv"
REQUEST_PACK_CSV = HANDOFF / "appfigures_request_pack_v3_2.csv"
PUBLIC_ENRICHMENT_JSON = DATA / "public-enrichment.json"
PUBLIC_APP_MARKET_SNAPSHOT_CSV = HANDOFF / "public_app_market_snapshot_v3_10.csv"
REVIEW_QUEUE_CSV = HANDOFF / "review_queue_v3.csv"
TODAY = dt.date.today().isoformat()
ITUNES_LOOKUP = "https://itunes.apple.com/lookup"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"


def read_csv(path: Path) -> list[dict[str, str]]:
    with path.open(newline="", encoding="utf-8") as fh:
        return list(csv.DictReader(fh))


def write_csv(path: Path, rows: list[dict[str, str]], fieldnames: list[str]) -> None:
    with path.open("w", newline="", encoding="utf-8") as fh:
        writer = csv.DictWriter(fh, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def read_json(path: Path, default: dict) -> dict:
    if not path.exists():
        return default
    with path.open(encoding="utf-8") as fh:
        return json.load(fh)


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8") as fh:
        json.dump(payload, fh, indent=2, ensure_ascii=False, sort_keys=True)
        fh.write("\n")


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


def extract_ios_id(store_id: str) -> str:
    match = re.search(r"\b(\d{7,12})\b", store_id or "")
    return match.group(1) if match else ""


def extract_android_package(store_id: str, source_url: str) -> str:
    package_match = re.search(r"\b([a-zA-Z]\w*(?:\.[A-Za-z0-9_]+){1,})\b", store_id or "")
    if package_match and not package_match.group(1).isdigit():
        return package_match.group(1)
    parsed = urllib.parse.urlparse(source_url or "")
    pkg = urllib.parse.parse_qs(parsed.query).get("id", [""])[0]
    return pkg.strip()


def player_slug(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", (value or "").lower()).strip("-")


def compact_number(value: object) -> int | None:
    text = str(value or "").strip().replace(",", "")
    if not text:
        return None
    multiplier = 1
    if text[-1:].lower() == "k":
        multiplier = 1_000
        text = text[:-1]
    elif text[-1:].lower() == "m":
        multiplier = 1_000_000
        text = text[:-1]
    elif text[-1:].lower() == "b":
        multiplier = 1_000_000_000
        text = text[:-1]
    try:
        return int(float(text) * multiplier)
    except ValueError:
        return None


def install_band_floor(value: str) -> int | None:
    text = (value or "").strip().replace("+", "")
    return compact_number(text)


def fetch_itunes(ids: list[str]) -> dict[str, dict[str, object]]:
    out: dict[str, dict[str, object]] = {}
    if not ids:
        return out
    for start in range(0, len(ids), 20):
        chunk = ids[start : start + 20]
        url = ITUNES_LOOKUP + "?" + urllib.parse.urlencode({"id": ",".join(chunk), "country": "us"})
        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(request, timeout=20) as response:
                data = json.loads(response.read().decode("utf-8"))
        except Exception:
            continue
        for item in data.get("results", []):
            out[str(item.get("trackId", ""))] = item
    return out


def fetch_text(url: str) -> str:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=20) as response:
        return response.read().decode("utf-8", "ignore")


def parse_google_play(package_name: str) -> dict[str, str] | None:
    if not package_name:
        return None
    url = f"https://play.google.com/store/apps/details?id={urllib.parse.quote(package_name)}&hl=en_US&gl=US"
    try:
        html = fetch_text(url)
    except Exception:
        return None

    schema_match = re.search(
        r'<script type="application/ld\+json">\s*(\{.*?"@type":"SoftwareApplication".*?\})\s*</script>',
        html,
        flags=re.S,
    )
    schema_data: dict[str, object] = {}
    if schema_match:
        try:
            schema_data = json.loads(schema_match.group(1))
        except json.JSONDecodeError:
            schema_data = {}

    rating_value = ""
    rating_count = ""
    aggregate = schema_data.get("aggregateRating")
    if isinstance(aggregate, dict):
        rating_value = str(aggregate.get("ratingValue", "")).strip()
        rating_count = str(aggregate.get("ratingCount", "")).strip()
    if not rating_value:
        rating_match = re.search(r'"ratingValue"\s*:\s*"([^"]+)"', html)
        if rating_match:
            rating_value = rating_match.group(1).strip()
    if not rating_count:
        count_match = re.search(r'"ratingCount"\s*:\s*"([^"]+)"', html)
        if count_match:
            rating_count = count_match.group(1).strip()

    downloads_band = ""
    downloads_match = re.search(
        r'<div class="ClM7O">\s*([^<]+)\s*</div><div class="g1rdde">Downloads</div>',
        html,
    )
    if downloads_match:
        downloads_band = re.sub(r"\s+", " ", downloads_match.group(1)).strip()

    title = ""
    name_match = re.search(r'<span class="AfwdI" itemprop="name">([^<]+)</span>', html)
    if name_match:
        title = name_match.group(1).strip()

    if not any([rating_value, rating_count, downloads_band]):
        return None

    return {
        "package": package_name,
        "url": url,
        "title": title,
        "rating": rating_value,
        "review_count": rating_count,
        "downloads_band": downloads_band,
    }


def build_signal_row(row: dict[str, str], ios_item: dict[str, object], android_item: dict[str, str] | None) -> dict[str, object]:
    ios_rating = ios_item.get("averageUserRating") if ios_item else None
    ios_count = compact_number(ios_item.get("userRatingCount")) if ios_item else None
    google_rating = None
    google_review_count = None
    google_install_band = ""
    google_install_floor = None
    google_url = ""
    google_package = ""
    if android_item:
        google_rating = float(android_item["rating"]) if android_item.get("rating") else None
        google_review_count = compact_number(android_item.get("review_count"))
        google_install_band = android_item.get("downloads_band", "")
        google_install_floor = install_band_floor(google_install_band)
        google_url = android_item.get("url", "")
        google_package = android_item.get("package", "")
    ios_url = str(ios_item.get("trackViewUrl", "")).strip() if ios_item else ""
    sources = [url for url in [google_url, ios_url, row.get("public_proxy_source_url", "")] if url]
    reach_floor = max([value or 0 for value in [google_install_floor, ios_count, google_review_count]])
    label = google_install_band or (f"{ios_count:,} iOS ratings" if ios_count else "")
    return {
        "playerId": player_slug(row.get("player", "")),
        "player": row.get("player", ""),
        "appName": row.get("app_name", ""),
        "platform": row.get("platform", ""),
        "iosAppStoreId": extract_ios_id(row.get("app_store_id_or_package", "")),
        "iosRating": round(float(ios_rating), 3) if ios_rating not in ("", None) else None,
        "iosRatingCount": ios_count,
        "iosSourceUrl": ios_url,
        "googlePlayPackage": google_package,
        "googlePlayInstallBand": google_install_band,
        "googlePlayInstallFloor": google_install_floor,
        "googlePlayRating": google_rating,
        "googlePlayReviewCount": google_review_count,
        "googlePlaySourceUrl": google_url,
        "bestReachFloor": reach_floor or None,
        "displayLabel": label or "Mapping pending",
        "sourceUrls": sources,
        "retrievedAt": TODAY,
        "confidence": "Medium public proxy" if label else "Mapping pending",
        "reviewStatus": "Open - public proxy, needs human review before final report claim",
        "caveat": "Google Play install bands and public store ratings are reach/sentiment proxies only. They are not Appfigures downloads, revenue, rank trend, retention, active usage or country mix.",
    }


def write_public_app_market_snapshot(signal_rows: list[dict[str, object]]) -> None:
    fields = [
        "playerId",
        "player",
        "appName",
        "platform",
        "iosAppStoreId",
        "iosRating",
        "iosRatingCount",
        "iosSourceUrl",
        "googlePlayPackage",
        "googlePlayInstallBand",
        "googlePlayInstallFloor",
        "googlePlayRating",
        "googlePlayReviewCount",
        "googlePlaySourceUrl",
        "bestReachFloor",
        "displayLabel",
        "retrievedAt",
        "confidence",
        "reviewStatus",
        "caveat",
    ]
    csv_rows = [{field: row.get(field, "") for field in fields} for row in signal_rows]
    write_csv(PUBLIC_APP_MARKET_SNAPSHOT_CSV, csv_rows, fields)

    usable_rows = [row for row in signal_rows if row.get("bestReachFloor") or row.get("iosRatingCount") or row.get("googlePlayInstallBand")]
    by_player: dict[str, list[dict[str, object]]] = {}
    for row in signal_rows:
        by_player.setdefault(str(row["playerId"]), []).append(row)
    payload = read_json(PUBLIC_ENRICHMENT_JSON, {"status": {}, "playerEnrichment": {}})
    payload["publicAppMarketSignals"] = {
        "status": {
            "label": "Free public app-market snapshot",
            "lastUpdated": TODAY,
            "rows": len(signal_rows),
            "usableRows": len(usable_rows),
            "googlePlayInstallBands": sum(1 for row in signal_rows if row.get("googlePlayInstallBand")),
            "iosRatingRows": sum(1 for row in signal_rows if row.get("iosRatingCount")),
            "source": "Apple iTunes Lookup API and Google Play public listing pages",
            "caveat": "Public proxies only. Do not treat as Appfigures downloads, revenue, rank trend, retention, active users or country mix."
        },
        "rows": signal_rows,
        "byPlayer": by_player,
    }
    write_json(PUBLIC_ENRICHMENT_JSON, payload)


def append_review_gate(signal_rows: list[dict[str, object]]) -> None:
    if not REVIEW_QUEUE_CSV.exists():
        return
    with REVIEW_QUEUE_CSV.open(newline="", encoding="utf-8") as fh:
        rows = list(csv.DictReader(fh))
        fields = rows[0].keys() if rows else [
            "run_id",
            "detected_at",
            "watch_id",
            "source_name",
            "source_url",
            "claim_area",
            "change_type",
            "previous_status",
            "current_status",
            "previous_hash",
            "current_hash",
            "observed_title",
            "suggested_action",
            "confidence",
            "review_status",
            "owner_placeholder",
            "notes",
        ]
    watch_id = f"public_app_market_snapshot_{TODAY}"
    if any(row.get("watch_id") == watch_id for row in rows):
        write_csv(REVIEW_QUEUE_CSV, rows, list(fields))
        return
    usable_rows = [row for row in signal_rows if row.get("bestReachFloor")]
    rows.append({
        "run_id": watch_id.replace("-", ""),
        "detected_at": f"{TODAY}T00:00:00+00:00",
        "watch_id": watch_id,
        "source_name": "Public app-market free proxy snapshot",
        "source_url": str(PUBLIC_APP_MARKET_SNAPSHOT_CSV.relative_to(ROOT)),
        "claim_area": "App market public proxies",
        "change_type": "public_proxy_refresh",
        "previous_status": "",
        "current_status": f"{len(usable_rows)} usable public app proxy rows",
        "previous_hash": "",
        "current_hash": "",
        "observed_title": "Free public app-market snapshot refreshed",
        "suggested_action": "Review install-band and rating-count proxies before citing externally. Keep Appfigures metrics pending unless a credentialed export is imported.",
        "confidence": "Pending human review / public proxy only",
        "review_status": "Open",
        "owner_placeholder": "Yousician research owner TBD",
        "notes": "Public store values were added to the interactive market monitor as caveated proxies, not as final report claims.",
    })
    write_csv(REVIEW_QUEUE_CSV, rows, list(fields))


def main() -> None:
    rows = read_csv(APPFIGURES_CSV)
    ios_ids = [extract_ios_id(row.get("app_store_id_or_package", "")) for row in rows]
    itunes = fetch_itunes([app_id for app_id in ios_ids if app_id])

    updated_rows: list[dict[str, str]] = []
    signal_rows: list[dict[str, object]] = []
    for row in rows:
        updated = dict(row)
        ios_id = extract_ios_id(updated.get("app_store_id_or_package", ""))
        android_package = extract_android_package(
            updated.get("app_store_id_or_package", ""),
            updated.get("public_proxy_source_url", "") or updated.get("app_name", ""),
        )

        note_parts: list[str] = []
        public_url = updated.get("public_proxy_source_url", "").strip()

        ios_item = itunes.get(ios_id, {})
        if ios_item:
            ios_rating = ios_item.get("averageUserRating")
            ios_count = ios_item.get("userRatingCount")
            if ios_rating not in ("", None):
                updated["rating"] = f"{float(ios_rating):.2f} iOS public proxy"
            if ios_count not in ("", None):
                updated["review_count"] = f"{int(ios_count):,} iOS public proxy"
            public_url = public_url or str(ios_item.get("trackViewUrl", "")).strip()
            note_parts.append(
                f"Apple public proxy: {float(ios_rating):.2f} rating, {int(ios_count):,} ratings as of {TODAY}."
            )

        android_item = parse_google_play(android_package)
        if android_item:
            public_url = android_item["url"]
            gp_bits = []
            if android_item.get("downloads_band"):
                gp_bits.append(f"{android_item['downloads_band']} installs band")
            if android_item.get("rating"):
                gp_bits.append(f"{float(android_item['rating']):.2f} rating")
            if android_item.get("review_count"):
                gp_bits.append(f"{int(android_item['review_count']):,} reviews")
            if gp_bits:
                note_parts.append(f"Google Play public proxy: {', '.join(gp_bits)} as of {TODAY}.")

        note_parts.append("Public proxy only, not Appfigures.")
        updated["public_proxy_notes"] = dedupe_sentences(" ".join(filter(None, [updated.get("public_proxy_notes", ""), *note_parts])))
        updated["public_proxy_source_url"] = public_url
        updated["source_date"] = TODAY
        updated["confidence"] = "Pending Appfigures / Public proxy only"
        if "Credentialed Appfigures" not in (updated.get("appfigures_status", "") or ""):
            updated["appfigures_status"] = "Credentialed Appfigures export not available in this package; use Appfigures import path before treating performance metrics as complete."
        updated_rows.append(updated)
        signal_rows.append(build_signal_row(updated, ios_item, android_item))

    fieldnames = list(updated_rows[0].keys()) if updated_rows else []
    write_csv(APPFIGURES_CSV, updated_rows, fieldnames)

    request_rows = read_csv(REQUEST_PACK_CSV)
    request_fields = list(request_rows[0].keys()) if request_rows else []
    for row in request_rows:
        app_row = next((candidate for candidate in updated_rows if candidate.get("app_name") == row.get("app_name")), None)
        if app_row and app_row.get("public_proxy_source_url"):
            row["source_url"] = app_row["public_proxy_source_url"]
        row["last_checked_date"] = TODAY
    if request_rows and request_fields:
        write_csv(REQUEST_PACK_CSV, request_rows, request_fields)

    write_public_app_market_snapshot(signal_rows)
    append_review_gate(signal_rows)

    usable_signal_rows = sum(1 for row in signal_rows if row.get("bestReachFloor"))
    print(f"Updated {len(updated_rows)} app proxy rows from free public sources on {TODAY}.")
    print(f"Wrote {usable_signal_rows} usable public app-market signal rows to {PUBLIC_APP_MARKET_SNAPSHOT_CSV}.")


if __name__ == "__main__":
    main()
