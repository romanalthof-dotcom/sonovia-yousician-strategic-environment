# Yousician Dashboard Release Status - 2026-06-25

## Current Publish Candidate

- Version: `market-signals-v204`
- Commit: `acaa7e2`
- Public working URL: `https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/index.html?force=market-signals-v204&view=key-players&cb=acaa7e2`
- Local QA URL: `http://127.0.0.1:9189/index.html?force=market-signals-v204&view=key-players`

## What Changed

- Added a source-backed Market Signal Radar for funding, investors, partnerships, rights/catalog control, owner portfolios, awards/events and macro trends.
- Kept all new market signals as `review pending` discussion inputs, not final report claims.
- Preserved Appfigures as pending unless a credentialed export is imported.
- Synced `app.js`, `styles.css` and `index.html` between source dashboard and publish repo.

## Verification

- `node --check strategic-environment-v3-work/strategic-environment-dashboard-v3_2/app.js`
- `node --check sonovia-yousician-strategic-environment/app.js`
- Local browser QA at 1680px: 10 signal cards, 7 lanes, 10 source links, review gate visible, no console errors, no body overflow.
- Responsive QA at 820px and 390px: document width equals viewport width; horizontal scroll remains limited to intentional internal scrollers.
- No Yousician PDF, PPTX or XLSX recipient-facing artifacts were changed during the v204 dashboard update.

## Domain Status

- `https://romanalthof-dotcom.github.io/sonovia-yousician-strategic-environment/` serves the updated GitHub Pages deployment.
- `https://sonovia.de/yousician` currently resolves to the Sonovia Lyris website fallback, not this dashboard.
- `https://sonovia.de/yousician/index.html` currently returns `404`.
- To publish under `sonovia.de/yousician`, the Sonovia domain host/router needs a rewrite or redirect to the GitHub Pages dashboard URL above.

