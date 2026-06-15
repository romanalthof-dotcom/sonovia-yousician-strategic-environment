import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { Presentation, PresentationFile } from "@oai/artifact-tool";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE = path.resolve(SCRIPT_DIR, "..");
const ROOT = path.resolve(PACKAGE, "..", "..");
const HANDOFF = path.join(PACKAGE, "handoff");
const DELIVERABLES = path.join(PACKAGE, "deliverables");
const WORKSPACE = path.join(ROOT, "outputs", "manual-yousician-exec", "presentations", "visual-executive-deck");
const HTML_PATH = path.join(WORKSPACE, "visual-executive-deck.html");
const SLIDE_DIR = path.join(WORKSPACE, "slides");
const PREVIEW_DIR = path.join(WORKSPACE, "preview");
const OUTPUT_DIR = path.join(WORKSPACE, "output");
const FINAL_DELIVERABLES = path.join(ROOT, "v3.9-submission-deliverables");

const W = 1280;
const H = 720;
const VERSION = "v3.9";
const TODAY = "2026-06-12";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    const next = text[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(cell);
      cell = "";
    } else if (ch === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (ch !== "\r") {
      cell += ch;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const headers = rows.shift()?.map((header) => header.trim()) || [];
  return rows
    .filter((candidate) => candidate.some((value) => String(value || "").trim()))
    .map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

async function csv(name) {
  return parseCsv(await fs.readFile(path.join(HANDOFF, name), "utf8"));
}

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function truncate(value, max) {
  const text = clean(value);
  if (text.length <= max) return text;
  return `${text.slice(0, Math.max(0, max - 1)).trim()}...`;
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function countBy(rows, field) {
  const counts = new Map();
  rows.forEach((row) => counts.set(row[field] || "Other", (counts.get(row[field] || "Other") || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function base(page, section, body, opts = {}) {
  return `
    <section class="slide ${opts.dark ? "dark" : ""}">
      <div class="topline"><span class="ymark">Y</span><span>${esc(section)}</span><em>${String(page).padStart(2, "0")}</em></div>
      ${body}
      <div class="staff"><i></i><i></i><i></i><i></i></div>
      <div class="foot"><span>${esc(opts.source || "Yousician Strategic Environment Mapping")}</span><span>Yousician Strategic Environment Mapping</span></div>
    </section>
  `;
}

function claim(title, sub = "") {
  return `<div class="claim"><h1>${esc(title)}</h1>${sub ? `<p>${esc(sub)}</p>` : ""}</div>`;
}

function chip(label, cls = "") {
  return `<span class="chip ${cls}">${esc(label)}</span>`;
}

function card(title, body, cls = "") {
  return `<article class="card ${cls}"><strong>${esc(title)}</strong><p>${esc(body)}</p></article>`;
}

function roleLane(index, title, body, actors, cls = "") {
  return `<article class="role-lane ${cls}">
    <span class="num">${String(index).padStart(2, "0")}</span>
    <h3>${esc(title)}</h3>
    <p>${esc(body)}</p>
    <div class="chips">${actors.map((actor) => chip(actor)).join("")}</div>
  </article>`;
}

function eventCard(row, index) {
  const colorCls = ["mint", "amber", "coral", "blue", "violet", "teal"][index % 6];
  return `<article class="event ${colorCls}">
    <div><span>${esc(clean(row.date).slice(0, 10))}</span><em>${esc(truncate(row.move_type, 22))}</em></div>
    <h3>${esc(truncate(row.player_or_signal, 36))}</h3>
    <p>${esc(truncate(row.what_happened, 118))}</p>
  </article>`;
}

function html(slides) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    :root {
      --ink:#101614;
      --deep:#071813;
      --paper:#FEFFF8;
      --white:#FFFFFF;
      --mint:#00E68A;
      --mint2:#DDF8EC;
      --sage:#EAF4ED;
      --line:#DCE8DF;
      --muted:#5F7068;
      --amber:#FFBF3F;
      --amber2:#FFF1C7;
      --coral:#F06455;
      --coral2:#FFE1DC;
      --blue:#4C8DF6;
      --blue2:#E4EEFF;
      --violet:#7467FF;
      --violet2:#EEEAFE;
      --teal:#11A392;
      --teal2:#DDF5F0;
    }
    * { box-sizing: border-box; }
    body { margin: 0; background: #dce9e1; font-family: Inter, Aptos, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: var(--ink); }
    .slide { position: relative; width: 1280px; height: 720px; overflow: hidden; background: var(--paper); padding: 42px 58px 52px; }
    .slide.dark { background: var(--deep); color: var(--paper); }
    .slide::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 7px; background: linear-gradient(90deg, var(--mint), #B9FFE2 42%, rgba(185,255,226,0)); }
    .topline { position: absolute; left: 56px; top: 34px; right: 56px; display: flex; align-items: center; gap: 10px; color: var(--teal); font-size: 10px; font-weight: 850; letter-spacing: 0; text-transform: uppercase; }
    .topline .ymark { width: 20px; height: 20px; border-radius: 50%; display: inline-grid; place-items: center; background: var(--mint); color: var(--ink); font-size: 8px; font-weight: 950; }
    .topline em { margin-left: auto; color: var(--muted); font-style: normal; }
    .dark .topline em { color: #91A9A1; }
    .claim { position: relative; z-index: 2; margin-top: 32px; max-width: 940px; }
    .claim h1 { margin: 0; font-size: 52px; line-height: .94; letter-spacing: 0; font-weight: 950; max-width: 980px; }
    .claim p { margin: 16px 0 0; max-width: 920px; color: var(--muted); font-size: 17px; line-height: 1.42; }
    .dark .claim p { color: #B8CDC5; }
    .foot { position: absolute; left: 56px; right: 56px; bottom: 18px; display: flex; justify-content: space-between; gap: 20px; color: #73827B; font-size: 7px; }
    .dark .foot { color: #80958E; }
    .staff { position: absolute; left: 72px; right: 72px; bottom: 55px; opacity: .75; }
    .staff i { display: block; height: 1px; background: #E4EFE7; margin: 8px 0; }
    .dark .staff i { background: #14362F; }
    .card { background: var(--white); border: 1px solid var(--line); padding: 22px 24px; min-height: 98px; }
    .dark .card { background: #0D2A24; border-color: #214B42; }
    .card strong { display: block; font-size: 19px; line-height: 1.1; font-weight: 880; }
    .card p { margin: 10px 0 0; color: var(--muted); font-size: 11px; line-height: 1.35; }
    .dark .card p { color: #B8CDC5; }
    .chip { display: inline-flex; align-items: center; justify-content: center; min-height: 24px; padding: 6px 12px; background: var(--sage); color: var(--ink); font-size: 8px; line-height: 1; font-weight: 850; white-space: nowrap; }
    .chip.mint { background: var(--mint); }
    .chip.coral { background: var(--coral2); color: #953A32; }
    .kicker { color: var(--teal); font-weight: 900; font-size: 11px; text-transform: uppercase; }
    .hero { display: grid; grid-template-columns: 1.04fr .96fr; gap: 54px; height: 100%; align-items: center; padding-top: 36px; }
    .hero h1 { font-size: 82px; line-height: .88; max-width: 620px; }
    .hero .subtitle { margin-top: 22px; font-size: 20px; line-height: 1.42; color: var(--muted); max-width: 610px; }
    .hero-callout { margin-top: 42px; padding: 0 0 0 22px; border-left: 8px solid var(--mint); }
    .hero-callout strong { display: block; color: var(--ink); font-size: 30px; line-height: 1; font-weight: 950; }
    .hero-callout span { display:block; margin-top: 10px; font-size: 18px; font-weight: 850; color: var(--muted); }
    .orbit { position: relative; height: 500px; background: var(--deep); padding: 42px; color: white; border-radius: 26px; box-shadow: 0 30px 70px rgba(7,24,19,.15); }
    .orbit .ring { position: absolute; border-radius: 50%; border: 1px solid rgba(120,180,160,.35); left: 50%; top: 50%; transform: translate(-50%,-50%); }
    .orbit .r1 { width: 350px; height: 350px; background: rgba(0,210,146,.06); }
    .orbit .r2 { width: 250px; height: 250px; background: rgba(0,210,146,.08); }
    .orbit .r3 { width: 130px; height: 130px; background: rgba(0,210,146,.14); }
    .orbit .center { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:86px; height:86px; border-radius:50%; display:grid; place-items:center; background:var(--mint); color:var(--ink); font-size:28px; font-weight:950; }
    .orbit .dot { position:absolute; display:flex; flex-direction:column; align-items:center; gap:8px; font-size:8px; font-weight:900; }
    .orbit .dot i { width:20px; height:20px; border-radius:50%; display:block; background:var(--c); }
    .metrics { display:grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 46px; max-width: 720px; }
    .metric { background: #fff; border: 1px solid var(--line); padding: 20px 18px; border-radius: 14px; }
    .metric strong { display:block; font-size:32px; color:var(--ink); line-height:1; }
    .metric span { display:block; margin-top:9px; color:var(--muted); font-size:10px; font-weight:850; }
    .answers { display:grid; grid-template-columns: 1fr 1fr; gap:18px 26px; margin-top: 56px; }
    .answer { position:relative; min-height: 168px; padding: 24px 28px 24px 92px; background:#fff; border:1px solid var(--line); border-radius:18px; box-shadow: 0 18px 50px rgba(16,22,20,.05); }
    .answer::before { content:""; position:absolute; left:0; top:0; bottom:0; width:10px; background:var(--c); border-radius:18px 0 0 18px; }
    .answer .n { position:absolute; left:26px; top:28px; display:grid; place-items:center; width:44px; height:44px; border-radius:50%; background:var(--c); color:var(--ink); font-weight:950; }
    .answer h3 { margin:0; font-size:25px; line-height:1.06; max-width:360px; }
    .answer p { margin:14px 0 0; color:var(--muted); font-size:14px; line-height:1.42; max-width:410px; }
    .ecosystem { position:absolute; inset:160px 70px 82px; display:grid; grid-template-columns: .92fr 1.08fr; gap:60px; align-items:center; }
    .eco-map { position:relative; width:510px; height:420px; margin:auto; }
    .eco-map .circle { position:absolute; border-radius:50%; border:1px solid rgba(120,180,160,.28); left:50%; top:50%; transform:translate(-50%,-50%); }
    .eco-map .c1 { width:410px; height:410px; background:#0B241F; }
    .eco-map .c2 { width:300px; height:300px; background:#102F29; }
    .eco-map .c3 { width:182px; height:182px; background:#DDF8EC; display:grid; place-items:center; color:var(--ink); text-align:center; font-weight:950; font-size:18px; }
    .eco-dot { position:absolute; transform:translate(-50%,-50%); text-align:center; color:#DDF8EC; font-size:10px; font-weight:850; }
    .eco-dot i { display:block; margin:0 auto 8px; width:28px; height:28px; border-radius:50%; background:var(--c); }
    .layer-list { display:grid; gap:18px; }
    .layer { padding:24px 26px; border:1px solid #244B43; background:#0C2822; color:white; }
    .layer b { display:block; color:var(--c); font-size:19px; margin-bottom:8px; }
    .layer span { color:#B8CDC5; font-size:12px; line-height:1.4; }
    .role-grid { margin-top:30px; display:grid; grid-template-columns: 1fr; gap:9px; }
    .role-lane { min-height:59px; background:#fff; border:1px solid var(--line); padding:12px 18px 12px 26px; position:relative; display:grid; grid-template-columns:52px 260px 1fr 316px; gap:16px; align-items:center; border-radius:14px; box-shadow:0 12px 34px rgba(16,22,20,.04); }
    .role-lane::before { content:""; position:absolute; left:0; top:0; bottom:0; width:9px; background:var(--c); border-radius:14px 0 0 14px; }
    .role-lane.dark { background:var(--deep); color:white; border-color:transparent; }
    .role-lane .num { color:var(--c); font-size:21px; font-weight:950; }
    .role-lane h3 { margin:0; font-size:20px; line-height:1.02; }
    .role-lane p { margin:0; min-height:0; color:var(--muted); font-size:11.5px; line-height:1.24; }
    .role-lane.dark p { color:#B8CDC5; }
    .role-lane .chips { display:flex; flex-wrap:wrap; gap:8px; margin-top:0; justify-content:flex-end; }
    .success { display:grid; grid-template-columns: 380px 1fr; gap:58px; margin-top:50px; align-items:center; }
    .locked { background:var(--deep); color:white; padding:44px 38px; min-height:360px; display:flex; flex-direction:column; justify-content:center; border-radius:26px; box-shadow:0 30px 70px rgba(7,24,19,.14); }
    .locked h2 { margin:0; font-size:34px; line-height:1.03; }
    .locked .zero { color:var(--coral); margin-top:34px; font-size:16px; font-weight:950; }
    .bubbles { display:grid; grid-template-columns:repeat(4,1fr); gap:26px 20px; }
    .bubble { text-align:center; }
    .bubble i { display:grid; place-items:center; width:96px; height:96px; margin:0 auto 12px; border-radius:50%; background:var(--c); color:var(--ink); font-size:14px; font-weight:950; font-style:normal; box-shadow:0 12px 28px rgba(16,22,20,.08); }
    .bubble span { display:block; color:var(--muted); font-size:10px; }
    .app-field { margin-top:44px; display:grid; grid-template-columns: 300px 1fr; gap:38px; }
    .request { background:var(--deep); color:white; padding:36px; min-height:354px; border-radius:26px; }
    .request b { color:var(--mint); font-size:52px; display:block; }
    .request strong { display:block; font-size:18px; margin-top:8px; line-height:1.15; }
    .request p { color:#B8CDC5; font-size:12px; line-height:1.4; margin-top:34px; }
    .apps { display:grid; grid-template-columns:repeat(3,1fr); gap:13px; align-content:start; }
    .app { background:#fff; border:1px solid var(--line); padding:16px 17px; min-height:66px; border-left:7px solid var(--coral); border-radius:12px; }
    .app strong { font-size:13px; display:block; }
    .app span { display:block; color:var(--muted); font-size:9px; margin-top:6px; line-height:1.25; }
    .news { margin-top:42px; display:grid; grid-template-columns: 248px 1fr; gap:42px; }
    .news-side { background:var(--deep); color:white; padding:36px; border-radius:26px; }
    .news-side b { color:var(--mint); font-size:64px; display:block; }
    .news-side strong { font-size:22px; line-height:1.05; display:block; margin-top:8px; }
    .bars { margin-top:38px; display:grid; gap:9px; }
    .bars i { display:block; height:9px; width:var(--w); background:var(--c); }
    .event-grid { display:grid; grid-template-columns: repeat(3,1fr); gap:18px; }
    .event { background:#fff; border:1px solid var(--line); padding:22px; min-height:142px; border-top:7px solid var(--c); border-radius:14px; }
    .event.mint { --c:var(--mint); } .event.amber { --c:var(--amber); } .event.coral { --c:var(--coral); } .event.blue { --c:var(--blue); } .event.violet { --c:var(--violet); } .event.teal { --c:var(--teal); }
    .event div { display:flex; justify-content:space-between; gap:12px; color:var(--c); font-size:8px; font-weight:850; }
    .event div em { background:var(--sage); color:var(--ink); padding:5px 8px; font-style:normal; }
    .event h3 { margin:22px 0 0; font-size:18px; }
    .event p { color:var(--muted); font-size:10px; line-height:1.35; }
    .pressure { margin-top:78px; display:grid; grid-template-columns:repeat(3,1fr); gap:42px; }
    .pressure .disc { min-height:270px; border-radius:50%; display:grid; place-items:center; text-align:center; border:1px solid rgba(255,255,255,.08); }
    .disc h3 { margin:0; color:var(--c); font-size:26px; }
    .disc p { color:#D6E4DE; font-size:12px; line-height:1.35; max-width:150px; }
    .journey { margin-top:56px; padding:10px 0 0; display:grid; grid-template-columns:repeat(5,1fr); gap:0; position:relative; }
    .journey::before { content:""; position:absolute; left:96px; right:96px; top:71px; height:8px; background:linear-gradient(90deg,var(--mint),var(--amber),var(--blue),var(--violet),var(--coral)); border-radius:20px; }
    .stage { min-height:326px; padding:0 14px 18px; position:relative; background:transparent; }
    .stage::before { display:none; }
    .stage .badge { position:relative; z-index:2; width:66px; height:66px; border-radius:50%; display:grid; place-items:center; margin:20px auto 36px; background:var(--c); color:var(--ink); font-size:22px; font-weight:950; box-shadow:0 15px 28px rgba(16,22,20,.12); }
    .stage h3 { text-align:center; font-size:26px; margin:0; }
    .stage p { text-align:center; color:var(--muted); font-size:11px; min-height:30px; }
    .stage .chips { display:grid; gap:8px; margin:16px auto 0; max-width:150px; }
    .trust { margin-top:64px; display:grid; grid-template-columns: 1fr 360px 1fr; gap:44px; align-items:center; }
    .trust-stat { text-align:center; }
    .trust-stat b { display:grid; place-items:center; margin:auto; width:122px; height:122px; border-radius:50%; background:var(--c); font-size:38px; }
    .trust-stat h3 { font-size:18px; margin:20px 0 6px; }
    .trust-stat p { color:var(--muted); font-size:10px; }
    .trust-core { height:300px; border-radius:50%; background:var(--deep); display:grid; place-items:center; color:white; text-align:center; box-shadow:0 24px 60px rgba(7,24,19,.14); }
    .trust-core div { width:178px; height:178px; border-radius:50%; background:#143A32; display:grid; place-items:center; padding:20px; font-size:28px; font-weight:950; line-height:1.05; }
    .streams { margin-top:58px; display:grid; gap:18px; }
    .stream { background:#fff; border:1px solid var(--line); display:grid; grid-template-columns:120px 180px 1fr; align-items:center; min-height:98px; border-left:8px solid var(--c); border-radius:16px; box-shadow:0 14px 40px rgba(16,22,20,.045); }
    .stream b { font-size:36px; color:var(--c); text-align:center; }
    .stream h3 { margin:0; font-size:20px; }
    .stream p { color:var(--muted); font-size:10px; line-height:1.35; max-width:640px; }
    .caveats { margin-top:62px; display:grid; grid-template-columns:repeat(2,1fr); gap:28px 42px; }
    .caveat { background:#fff; border:1px solid var(--line); min-height:118px; padding:26px 30px; border-left:9px solid var(--c); display:grid; grid-template-columns:230px 1fr; gap:24px; align-items:center; border-radius:16px; box-shadow:0 14px 40px rgba(16,22,20,.045); }
    .caveat h3 { margin:0; font-size:21px; }
    .caveat p { margin:0; color:var(--muted); font-size:11px; line-height:1.35; }
    .relationship-wording { margin:56px auto 0; max-width:930px; background:var(--deep); color:white; padding:24px 34px; display:grid; grid-template-columns:230px 1fr; gap:30px; align-items:center; border-radius:18px; }
    .relationship-wording b { color:var(--mint); font-size:11px; text-transform:uppercase; }
    .relationship-wording span { font-size:16px; font-weight:850; }
    .closing-grid { margin-top:70px; display:grid; grid-template-columns:repeat(2,1fr); gap:24px 34px; max-width:920px; }
    .closing-card { border:1px solid #234B42; background:#0C2822; padding:28px 30px; border-left:8px solid var(--c); display:grid; grid-template-columns:200px 1fr; gap:24px; border-radius:18px; }
    .closing-card h3 { margin:0; color:var(--c); font-size:19px; }
    .closing-card p { margin:0; color:#C9D8D2; font-size:10.5px; line-height:1.35; }
    .sendable { position:absolute; left:190px; right:190px; bottom:96px; background:var(--paper); color:var(--ink); padding:22px 32px; display:grid; grid-template-columns:160px 1fr; gap:22px; align-items:center; }
    .sendable b { color:var(--teal); font-size:11px; text-transform:uppercase; }
    .sendable span { font-size:15px; font-weight:850; }
  </style>
</head>
<body>
${slides.join("\n")}
</body>
</html>`;
}

async function makeContactSheet(previewPaths, outPath) {
  const script = "/Users/roman.althof/.codex/plugins/cache/openai-primary-runtime/presentations/26.601.10930/skills/presentations/scripts/make_contact_sheet.py";
  const python = process.env.PYTHON_BIN || "/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
  const result = spawnSync(python, [script, "--output", outPath, ...previewPaths], { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error([result.stdout, result.stderr].filter(Boolean).join("\n"));
  }
}

async function renderSlides() {
  await fs.rm(SLIDE_DIR, { recursive: true, force: true });
  await fs.mkdir(SLIDE_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 2 });
  await page.goto(`file://${HTML_PATH}`);
  const count = await page.locator(".slide").count();
  const paths = [];
  for (let i = 0; i < count; i += 1) {
    const out = path.join(SLIDE_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);
    await page.locator(".slide").nth(i).screenshot({ path: out });
    paths.push(out);
  }
  await browser.close();
  await fs.rm(PREVIEW_DIR, { recursive: true, force: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  const contact = path.join(PREVIEW_DIR, "contact-sheet.png");
  await makeContactSheet(paths, contact);
  return { paths, contact };
}

async function buildPptx(imagePaths) {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(FINAL_DELIVERABLES, { recursive: true });
  await fs.mkdir(DELIVERABLES, { recursive: true });
  const p = Presentation.create({ slideSize: { width: W, height: H } });
  for (let i = 0; i < imagePaths.length; i += 1) {
    const slide = p.slides.add();
    const data = await fs.readFile(imagePaths[i]);
    const dataUrl = `data:image/png;base64,${data.toString("base64")}`;
    const image = slide.images.add({ dataUrl, fit: "cover", alt: `Executive slide ${i + 1}` });
    image.position = { left: 0, top: 0, width: W, height: H };
  }
  const pptx = await PresentationFile.exportPptx(p);
  const name = "Yousician Strategic Environment Executive Summary v3.9.pptx";
  await pptx.save(path.join(OUTPUT_DIR, name));
  await fs.copyFile(path.join(OUTPUT_DIR, name), path.join(FINAL_DELIVERABLES, name));
  await fs.copyFile(path.join(OUTPUT_DIR, name), path.join(DELIVERABLES, name));
}

async function main() {
  await fs.mkdir(WORKSPACE, { recursive: true });
  const moves = await csv("market_moves_24m_curated_v3_2.csv");
  const appReq = await csv("appfigures_request_pack_v3_2.csv");
  const appRows = await csv("appfigures-performance-export-integrated-v3.csv");
  const directLearning = await csv("direct_music_learning_apps_snapshot_v3_9.csv");
  const teachers = await csv("teachers_schools_education_v3.csv");
  const creators = await csv("influencers_creators_v3.csv");
  const investors = await csv("investors_v3.csv");
  const awards = await csv("awards_v3.csv");
  const funding = await csv("funding_v3.csv");
  const mediaDrivers = await csv("media_cultural_drivers_v3.csv");
  const boardMoves = moves.filter((row) => row.include_in_board_timeline === "Yes");
  const credentialedAppRows = appRows.filter((row) =>
    clean(row.appfigures_status).toLowerCase().startsWith("credentialed appfigures export imported"),
  );
  const moveCounts = countBy(boardMoves, "category_mapping").slice(0, 5);
  const maxMoveCount = moveCounts[0]?.[1] || 1;
  const recentMoves = boardMoves.slice(-6).reverse();

  const slides = [
    base(1, "Executive summary", `
      <div class="hero">
        <div>
          <div class="kicker">Executive readout</div>
          <h1>Strategic Environment Mapping</h1>
          <p class="subtitle">A market-level map of who shapes music learning, music as a hobby and the strategic environment around Yousician.</p>
          <div class="hero-callout"><strong>Not a competitor list.</strong><span>An ecosystem map with evidence boundaries.</span></div>
          <div class="metrics">
            <div class="metric"><strong>96</strong><span>tracked records</span></div>
            <div class="metric"><strong>28</strong><span>key-player profiles</span></div>
            <div class="metric"><strong>${boardMoves.length}</strong><span>news-grade moves</span></div>
            <div class="metric"><strong>${credentialedAppRows.length}</strong><span>credentialed Appfigures rows</span></div>
          </div>
        </div>
        <div class="orbit">
          <div class="ring r1"></div><div class="ring r2"></div><div class="ring r3"></div><div class="center">Y</div>
          <div class="dot" style="left:50%;top:14%;--c:var(--amber)"><i></i>AI</div>
          <div class="dot" style="left:84%;top:44%;--c:var(--blue)"><i></i>Songs</div>
          <div class="dot" style="left:63%;top:84%;--c:var(--violet)"><i></i>Creators</div>
          <div class="dot" style="left:18%;top:52%;--c:var(--coral)"><i></i>Rights</div>
          <div class="dot" style="left:82%;top:78%;--c:var(--mint2);color:#DDF8EC"><i></i>Hardware</div>
        </div>
      </div>
    `, { source: `Prepared ${TODAY}. Appfigures and internal relationship claims are intentionally not inferred.` }),

    base(2, "Guiding questions", `
      ${claim("The deck answers the brief before it shows the database.", "Each answer is stated first; sources, validation and completion files sit behind the main read.")}
      <div class="answers">
        <article class="answer" style="--c:var(--mint)"><span class="n">1</span><h3>Who influences music learning?</h3><p>Learning apps, hardware-backed ecosystems, repertoire systems, AI utilities, creator educators and education benchmarks.</p></article>
        <article class="answer" style="--c:var(--coral)"><span class="n">2</span><h3>Who is successful?</h3><p>Actors that own habit, repertoire, trust, reach, utility and momentum. App performance requires Appfigures.</p></article>
        <article class="answer" style="--c:var(--amber)"><span class="n">3</span><h3>Who shapes music as a hobby?</h3><p>Attention platforms, songs, creators, instruments, retailers, artists, cultural moments and AI generation.</p></article>
        <article class="answer" style="--c:var(--blue)"><span class="n">4</span><h3>Who shapes Yousician's environment?</h3><p>AI companies, rights owners, competitors, hardware brands, publishers, investors, awards, media and education bodies.</p></article>
      </div>
    `, { source: "Source: original brief and executive synthesis." }),

    base(3, "Ecosystem map", `
      ${claim("Yousician sits inside a wider hobby ecosystem, not a narrow app category.", "The map separates close product surfaces from broader influence, infrastructure and cultural demand.")}
      <div class="ecosystem">
        <div class="eco-map">
          <div class="circle c1"></div><div class="circle c2"></div><div class="circle c3">Yousician<br>practice<br>core</div>
          <div class="eco-dot" style="left:50%;top:5%;--c:var(--mint)"><i></i>Learning apps</div>
          <div class="eco-dot" style="left:90%;top:33%;--c:var(--amber)"><i></i>Song systems</div>
          <div class="eco-dot" style="left:83%;top:77%;--c:var(--blue)"><i></i>Hardware</div>
          <div class="eco-dot" style="left:50%;top:98%;--c:var(--violet)"><i></i>Creators</div>
          <div class="eco-dot" style="left:10%;top:77%;--c:var(--teal)"><i></i>Education</div>
          <div class="eco-dot" style="left:8%;top:31%;--c:var(--coral)"><i></i>AI utilities</div>
        </div>
        <div class="layer-list">
          <div class="layer" style="--c:var(--mint)"><b>Near field</b><span>Direct learning apps, repertoire and hardware-backed beginner funnels.</span></div>
          <div class="layer" style="--c:var(--amber)"><b>Influence field</b><span>Creators, teachers, education bodies, media and cultural demand.</span></div>
          <div class="layer" style="--c:var(--violet)"><b>Infrastructure field</b><span>Rights owners, AI policy, investors, awards and public funding.</span></div>
        </div>
      </div>
    `, { dark: true, source: "Source: ecosystem map table and executive synthesis." }),

    base(4, "Priority actors", `
      ${claim("The ten priority actors are not all competitors.", "The map separates competitor pressure from utility shifts, repertoire ownership, discovery power and infrastructure.")}
      <div class="role-grid">
        ${roleLane(1, "AI changes participation", "Creation and practice utilities change feedback, accompaniment and making music.", ["Suno", "Moises", "ElevenLabs"], "dark").replace('class="role-lane dark"', 'class="role-lane dark" style="--c:var(--coral)"')}
        ${roleLane(2, "Apps shape beginner habit", "Direct learning apps remain comparable, but final ranking needs Appfigures.", ["Simply", "Flowkey", "Skoove"]).replace('class="role-lane "', 'class="role-lane " style="--c:var(--mint)"')}
        ${roleLane(3, "Songs own intent", "Tabs, notation and song demand shape why beginners practice.", ["Ultimate Guitar", "MuseScore", "Songsterr"]).replace('class="role-lane "', 'class="role-lane " style="--c:var(--amber)"')}
        ${roleLane(4, "Platforms set demand", "Discovery and creator trust often precede formal lesson demand.", ["YouTube", "TikTok", "Spotify"]).replace('class="role-lane "', 'class="role-lane " style="--c:var(--blue)"')}
        ${roleLane(5, "Hardware and capital widen reach", "Distribution, bundles, funding and recognition shape options beyond UX.", ["Fender", "Gibson", "Investors"]).replace('class="role-lane "', 'class="role-lane " style="--c:var(--violet)"')}
      </div>
      <div class="relationship-wording" style="margin-top:30px;max-width:930px;background:#fff;color:var(--ink);border:1px solid var(--line)"><b style="color:var(--coral)">Readout rule</b><span style="font-size:13px">This is an ecosystem influence ranking, not an app revenue, download or rank leaderboard while Appfigures is still pending.</span></div>
    `, { source: "Source: executive top-actor ranking and source-mapped claims." }),

    base(5, "Who is successful?", `
      ${claim("Success is multi-surface until app performance is credentialed.", "This directly answers who is successful without pretending that public proxies equal Appfigures.")}
      <div class="success">
        <div class="locked"><h2>Do not call app winners yet.</h2><div class="zero">${credentialedAppRows.length} credentialed Appfigures rows</div><p>Revenue, downloads, rank trends, country mix and review velocity remain blocked.</p></div>
        <div class="bubbles">
          ${[["Habit","practice recurrence","--mint"],["Repertoire","song and tab ownership","--amber"],["Trust","creator / teacher authority","--blue"],["Reach","hardware and retail distribution","--violet"],["Utility","AI-assisted practice","--teal"],["Momentum","funding, launches, partnerships","--amber2"],["Performance","Appfigures required","--coral"]].map(([a,b,c]) => `<div class="bubble"><i style="--c:var(${c})">${a}</i><span>${b}</span></div>`).join("")}
        </div>
      </div>
    `, { source: "Source: Appfigures request pack, direct learning snapshot and executive synthesis." }),

    base(6, "Direct learning apps", `
      ${claim("The direct-app field is mapped; the performance layer is still locked.", "This is the cleanest way to satisfy use Appfigures where possible without inventing performance data.")}
      <div class="app-field">
        <aside class="request"><b>${appReq.length}</b><strong>apps in the request pack</strong><p>Required fields: downloads, revenue, ranks, rating, review velocity, country mix and 12-month trend.</p></aside>
        <div class="apps">
          ${directLearning.slice(0, 12).map((row) => `<div class="app"><strong>${esc(row.player)}</strong><span>${esc(truncate(row.audience_focus, 42))}</span></div>`).join("")}
        </div>
      </div>
      <div class="relationship-wording" style="margin-top:20px;max-width:760px;background:#fff;color:var(--ink);border:1px solid var(--line)"><b style="color:var(--coral)">Explicit status</b><span style="font-size:12px">Performance ranking is not finalized because credentialed Appfigures data is pending. Public proxies can be marked as proxy only.</span></div>
    `, { source: "Source: direct learning apps snapshot and Appfigures request pack." }),

    base(7, "Last 24 months", `
      ${claim("The news layer is strongest where AI, culture, capital and rights collide.", "This page is curated for who made the news for what rather than static company facts.")}
      <div class="news">
        <aside class="news-side"><b>${boardMoves.length}</b><strong>news-grade market moves</strong><div class="bars">${moveCounts.map(([cat, count], i) => `<i style="--w:${Math.max(20, Math.round((count / maxMoveCount) * 132))}px;--c:${["var(--mint)","var(--amber)","var(--blue)","var(--violet)","var(--coral)"][i]}"></i>`).join("")}</div></aside>
        <div class="event-grid">${recentMoves.map(eventCard).join("")}</div>
      </div>
    `, { source: "Source: curated 24-month market moves." }),

    base(8, "AI and rights", `
      ${claim("AI changes the shape of participation and the rules around it.", "The relevant map is creation, practice utility and rights governance moving together.")}
      <div class="pressure">
        <div class="disc" style="background:#123B32"><div><h3 style="--c:var(--mint)">Creation</h3><p>Suno, Udio, BandLab</p></div></div>
        <div class="disc" style="background:#302F19"><div><h3 style="--c:var(--amber)">Practice</h3><p>Moises, Chord ai, transcription tools</p></div></div>
        <div class="disc" style="background:#3B201D"><div><h3 style="--c:var(--coral)">Rights</h3><p>labels, publishers, policy, litigation</p></div></div>
      </div>
      <div class="sendable"><b>Strategic read</b><span>AI matters because it changes learner alternatives, practice utilities and licensed-building constraints at the same time.</span></div>
    `, { dark: true, source: "Source: AI rows in market moves and source audit." }),

    base(9, "Music as a hobby", `
      ${claim("Music-as-a-hobby influence starts before a learner opens a lesson app.", "Discovery, instrument choice, repertoire and creation tools all shape demand around Yousician.")}
      <div class="journey">
        ${[
          ["Discover", "Attention creates desire", ["TikTok","YouTube","Spotify","Artists"], "var(--mint)"],
          ["Choose", "Access makes it real", ["Fender","Gibson","Retailers","Creators"], "var(--amber)"],
          ["Learn", "Structure builds habit", ["Yousician","Simply","Teachers","Schools"], "var(--blue)"],
          ["Play songs", "Repertoire sustains practice", ["Ultimate Guitar","Songsterr","MuseScore"], "var(--violet)"],
          ["Create/share", "Identity extends the hobby", ["BandLab","Splice","GarageBand","AI tools"], "var(--coral)"],
        ].map(([title, body, actors, color], i) => `<article class="stage" style="--c:${color}"><span class="badge">${i+1}</span><h3>${title}</h3><p>${body}</p><div class="chips">${actors.map((a)=>chip(a, a==="Yousician" ? "mint" : "")).join("")}</div></article>`).join("")}
      </div>
    `, { source: "Source: media/cultural drivers, hobby software ecosystem and executive synthesis." }),

    base(10, "Trust infrastructure", `
      ${claim("Teachers, creators and media are trust infrastructure.", "They are visible because the brief explicitly asks for schools, education organizations, creators and cultural drivers.")}
      <div class="trust">
        <div class="trust-stat" style="--c:var(--teal)"><b>${teachers.length}</b><h3>Education bodies</h3><p>ABRSM, Trinity, RSL/Rockschool</p></div>
        <div class="trust-core"><div>Beginner<br>trust</div></div>
        <div class="trust-stat" style="--c:var(--amber)"><b>${creators.length}</b><h3>Creator educators</h3><p>JustinGuitar, Marty Music, Rick Beato</p></div>
      </div>
      <div class="relationship-wording" style="margin-top:40px;max-width:930px;background:#fff;color:var(--ink);border:1px solid var(--line)"><b style="color:var(--amber)">Reach caveat</b><span style="font-size:12px">Creator social reach is partially populated. YouTube is stronger than TikTok, Instagram and average-view validation.</span></div>
    `, { source: `Source: teachers/schools, influencers/creators and media/cultural-driver tables (${mediaDrivers.length} media/culture rows).` }),

    base(11, "Capital and recognition", `
      ${claim("Investors, awards and funding are strategic-environment signals.", "They should not be hidden in the appendix because the brief names them as ecosystem categories.")}
      <div class="streams">
        <div class="stream" style="--c:var(--mint)"><b>${investors.length}</b><h3>Investors</h3><p>Capital follows AI, creator tools and education/consumer software momentum.</p></div>
        <div class="stream" style="--c:var(--amber)"><b>${awards.length}</b><h3>Awards</h3><p>Recognition can support credibility, app-store craft and executive proof if deadlines and assets are owned.</p></div>
        <div class="stream" style="--c:var(--blue)"><b>${funding.length}</b><h3>Funding</h3><p>Public and EU/Finland instruments matter for AI practice, R&D and learning innovation projects.</p></div>
      </div>
    `, { source: "Source: investors, awards and funding tables." }),

    base(12, "Caveats", `
      ${claim("The answer is usable because the limits are explicit.", "The deck should not look defensive, but it must not overclaim Appfigures, relationships or low-confidence hard claims.")}
      <div class="caveats">
        <article class="caveat" style="--c:var(--mint)"><h3>Ready to use</h3><p>Ecosystem map, key players, market moves, executive synthesis, database structure and relationship template.</p></article>
        <article class="caveat" style="--c:var(--coral)"><h3>Needs credentialed data</h3><p>Appfigures revenue, downloads, rank trends, review velocity, country mix and 12-month trends.</p></article>
        <article class="caveat" style="--c:var(--blue)"><h3>Needs internal completion</h3><p>Relationship owner, confirmed status, sensitivity, last contact date and next step.</p></article>
        <article class="caveat" style="--c:var(--amber)"><h3>Needs source skim</h3><p>Low/pending hard claims around ownership, funding, user numbers, AI features and M&A before broader use.</p></article>
      </div>
      <div class="relationship-wording"><b>Required relationship wording</b><span>Internal relationship status not yet captured in this dataset. To be completed by Yousician.</span></div>
    `, { source: "Source: Appfigures export status, source confidence fields and relationship template." }),

    base(13, "Executive synthesis", `
      ${claim("The market story is clear; the remaining gaps are explicit.", "The package can be read as an ecosystem report now, while Appfigures and internal relationship fields remain completion items.")}
      <div class="closing-grid">
        <article class="closing-card" style="--c:var(--mint)"><h3>Music learning</h3><p>Learning apps, song/practice systems, AI utilities, hardware funnels, teachers and creator educators shape the future.</p></article>
        <article class="closing-card" style="--c:var(--coral)"><h3>Successful actors</h3><p>Success is visible through habit, repertoire, trust, reach, utility and momentum. App-performance winners require Appfigures.</p></article>
        <article class="closing-card" style="--c:var(--amber)"><h3>Music as a hobby</h3><p>Attention platforms, song libraries, creator tools, artists and cultural moments shape demand around learning.</p></article>
        <article class="closing-card" style="--c:var(--blue)"><h3>Strategic environment</h3><p>AI companies, rights owners, hardware brands, media, investors, awards, funding bodies and education standards define the wider field.</p></article>
      </div>
      <div class="sendable"><b>Sendable framing</b><span>Executive deck first, market report as proof, database as source layer, Appfigures and relationships as completion files.</span></div>
    `, { dark: true, source: "Source: executive synthesis and brief-aligned category coverage." }),
  ];

  await fs.writeFile(HTML_PATH, html(slides), "utf8");
  const { paths, contact } = await renderSlides();
  await buildPptx(paths);
  const contactName = "executive_summary_deck_contact_sheet_v3.9.png";
  await fs.copyFile(contact, path.join(FINAL_DELIVERABLES, contactName));
  await fs.copyFile(contact, path.join(DELIVERABLES, contactName));

  console.log(JSON.stringify({
    version: VERSION,
    type: "visual-master",
    pptx: path.join(OUTPUT_DIR, "Yousician Strategic Environment Executive Summary v3.9.pptx"),
    finalCopy: path.join(FINAL_DELIVERABLES, "Yousician Strategic Environment Executive Summary v3.9.pptx"),
    slides: paths.length,
    contact,
  }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exit(1);
});
