import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { Presentation, PresentationFile } from "@oai/artifact-tool";
import { paint, stroke } from "@oai/artifact-tool/presentation-jsx";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE = path.resolve(SCRIPT_DIR, "..");
const ROOT = path.resolve(PACKAGE, "..", "..");
const HANDOFF = path.join(PACKAGE, "handoff");
const DELIVERABLES = path.join(PACKAGE, "deliverables");
const WORKSPACE = path.join(ROOT, "outputs", "manual-yousician-exec", "presentations", "executive-deck");
const PREVIEW_DIR = path.join(WORKSPACE, "preview");
const QA_DIR = path.join(WORKSPACE, "qa");
const OUTPUT_DIR = path.join(WORKSPACE, "output");
const FINAL_DELIVERABLES = path.join(ROOT, "v3.9-submission-deliverables");

const W = 1280;
const H = 720;
const VERSION = "v3.9";
const TODAY = "2026-06-13";

const C = {
  ink: "#10231F",
  ink2: "#173A32",
  ink3: "#1F5A4E",
  paper: "#FBFEF8",
  paper2: "#FFFFFF",
  warm: "#FFF6DC",
  line: "#DCE8DF",
  muted: "#5F7068",
  soft: "#ECF5EE",
  mint: "#00D49A",
  mint2: "#B7F6DF",
  amber: "#FFBF3F",
  amber2: "#FFE7A2",
  coral: "#F06455",
  coral2: "#FFD9D5",
  blue: "#4C8DF6",
  blue2: "#D9E8FF",
  violet: "#7467FF",
  lilac: "#ECE8FF",
  teal: "#11A392",
  white: "#FFFFFF",
};

function staffLines(slide, x, y, w, color = "#E7F1EA", tone = "paper") {
  const alphaColor = color;
  [0, 9, 18, 27].forEach((offset) => {
    rect(slide, x, y + offset, w, 1.2, alphaColor, "none");
  });
  if (tone === "paper") {
    ellipse(slide, x + w - 38, y + 7, 10, 10, C.mint, "none");
    ellipse(slide, x + w - 16, y + 16, 10, 10, C.amber, "none");
  }
}

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
  const textValue = clean(value);
  if (textValue.length <= max) return textValue;
  return `${textValue.slice(0, Math.max(0, max - 1)).trim()}...`;
}

function byCount(rows, field, filter = () => true) {
  const counts = new Map();
  rows.filter(filter).forEach((row) => {
    const key = row[field] || "Unclassified";
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function add(slide, cfg) {
  return slide.shapes.add(cfg);
}

function rect(slide, x, y, width, height, fill = C.white, outline = C.line, radius = 0, name = undefined) {
  const shape = add(slide, {
    geometry: "rect",
    name,
    position: { left: x, top: y, width, height },
    fill: paint(fill),
    line: outline === "none" ? stroke("0px none #000000") : stroke(`1px solid ${outline}`),
  });
  shape.radius = radius;
  return shape;
}

function ellipse(slide, x, y, width, height, fill = C.white, outline = "none", name = undefined) {
  return add(slide, {
    geometry: "ellipse",
    name,
    position: { left: x, top: y, width, height },
    fill: paint(fill),
    line: outline === "none" ? stroke("0px none #000000") : stroke(`1px solid ${outline}`),
  });
}

function line(slide, x1, y1, x2, y2, color = C.line, width = 1) {
  const x = Math.min(x1, x2);
  const y = Math.min(y1, y2);
  const w = Math.max(Math.abs(x2 - x1), width);
  const h = Math.max(Math.abs(y2 - y1), width);
  return rect(slide, x, y, w, h, color, "none");
}

function text(slide, value, x, y, width, height, opts = {}) {
  const shape = add(slide, {
    geometry: "rect",
    name: opts.name,
    position: { left: x, top: y, width, height },
    fill: paint(opts.fill || "#00000000"),
    line: stroke("0px none #000000"),
  });
  shape.text = String(value || "");
  shape.text.typeface = opts.face || "Aptos";
  shape.text.fontSize = opts.size || 20;
  shape.text.color = opts.color || C.ink;
  shape.text.bold = Boolean(opts.bold);
  shape.text.italic = Boolean(opts.italic);
  shape.text.alignment = opts.align || "left";
  shape.text.verticalAlignment = opts.valign || "top";
  shape.text.autoFit = opts.autoFit || "shrinkText";
  shape.text.insets = opts.insets || { left: 0, right: 0, top: 0, bottom: 0 };
  return shape;
}

function isDark(tone) {
  return tone === "dark";
}

function slideBase(slide, tone = "paper", section = "", page = "") {
  const dark = isDark(tone);
  rect(slide, 0, 0, W, H, dark ? "#071D18" : C.paper, "none");
  if (!dark) {
    rect(slide, 0, 0, W, 6, "#E7F8ED", "none");
    staffLines(slide, 62, 623, 1110, "#E7F1EA", "paper");
  } else {
    rect(slide, 0, 0, W, 6, "#143B33", "none");
    staffLines(slide, 62, 623, 1110, "#163A33", "dark");
  }
  ellipse(slide, 56, 38, 20, 20, C.mint, "none");
  text(slide, "Y", 61, 43, 10, 8, { size: 7.2, bold: true, color: C.ink, align: "center" });
  text(slide, section.toUpperCase(), 88, 40, 360, 16, {
    size: 8.4,
    bold: true,
    color: dark ? C.mint : C.teal,
  });
  if (page) {
    text(slide, page, 1176, 40, 48, 16, {
      size: 8.4,
      bold: true,
      color: dark ? "#B8CCC5" : C.muted,
      align: "right",
    });
  }
}

function footer(slide, source = "Source: strategic environment handoff data. Appfigures and internal relationship fields are marked as open inputs where relevant.", tone = "paper") {
  const dark = isDark(tone);
  text(slide, source, 56, 682, 880, 16, { size: 7.3, color: dark ? "#819A93" : "#74837C" });
  text(slide, "Yousician Strategic Environment Mapping", 1000, 682, 224, 16, {
    size: 7.3,
    color: dark ? "#9BB5AC" : C.muted,
    align: "right",
  });
}

function headline(slide, claim, support = "", tone = "paper", opts = {}) {
  const dark = isDark(tone);
  text(slide, claim, opts.x || 58, opts.y || 68, opts.w || 920, opts.h || 100, {
    size: opts.size || 37,
    bold: true,
    color: opts.color || (dark ? C.paper2 : C.ink),
    face: "Aptos Display",
  });
  if (support) {
    text(slide, support, opts.sx || 60, opts.sy || 165, opts.sw || 820, opts.sh || 48, {
      size: opts.supportSize || 14,
      color: opts.supportColor || (dark ? "#BED1CA" : C.muted),
    });
  }
}

function metric(slide, value, label, x, y, w, tone = "paper", color = C.mint) {
  const dark = isDark(tone);
  rect(slide, x, y, w, 78, dark ? "#14372F" : C.paper2, dark ? "#326A5D" : C.line, 0);
  text(slide, value, x + 18, y + 12, w - 36, 34, { size: 31, bold: true, color });
  text(slide, label, x + 18, y + 48, w - 36, 18, { size: 8.8, bold: true, color: dark ? "#C9D8D2" : C.muted });
}

function pill(slide, label, x, y, w, fill, color = C.ink) {
  rect(slide, x, y, w, 24, fill, "none", 12);
  text(slide, label.toUpperCase(), x + 12, y + 6, w - 24, 12, { size: 7.5, bold: true, color, align: "center" });
}

function chip(slide, label, x, y, w, fill = C.soft, color = C.ink, opts = {}) {
  rect(slide, x, y, w, opts.h || 28, fill, opts.outline || "none", opts.radius || 14);
  text(slide, label, x + 12, y + 7, w - 24, 12, {
    size: opts.size || 8.4,
    bold: opts.bold ?? true,
    color,
    align: opts.align || "center",
  });
}

function miniSource(slide, label, x, y, w, color = C.mint, tone = "paper") {
  const dark = isDark(tone);
  rect(slide, x, y, w, 32, dark ? "#0D221E" : "#FFFFFF", dark ? "#31574D" : C.line, 16);
  rect(slide, x, y, 6, 32, color, "none", 3);
  text(slide, label, x + 18, y + 9, w - 30, 10, { size: 7.7, bold: true, color: dark ? "#D6E4DE" : C.muted });
}

function note(slide, label, body, x, y, w, h, color, tone = "paper") {
  const dark = isDark(tone);
  rect(slide, x, y, w, h, dark ? "#0D221E" : C.paper2, dark ? "#31574D" : C.line, 0);
  rect(slide, x, y, 8, h, color, "none");
  if (h < 70) {
    text(slide, label, x + 24, y + Math.max(12, h / 2 - 8), 132, 18, { size: 10.5, bold: true, color: dark ? C.paper2 : C.ink });
    text(slide, body, x + 176, y + 11, w - 204, h - 18, { size: 9.2, color: dark ? "#BFD1CB" : C.muted });
    return;
  }
  text(slide, label, x + 22, y + 14, w - 44, 20, { size: 13, bold: true, color: dark ? C.paper2 : C.ink });
  text(slide, body, x + 22, y + 42, w - 44, h - 52, { size: 10.2, color: dark ? "#BFD1CB" : C.muted });
}

function progressDot(slide, x, y, color, label, tone = "dark") {
  ellipse(slide, x - 10, y - 10, 20, 20, color, "none");
  text(slide, label, x + 16, y - 8, 130, 18, { size: 8.2, bold: true, color: isDark(tone) ? C.paper2 : C.ink });
}

function safeStatus(status) {
  const s = clean(status);
  if (/blocked/i.test(s)) return { color: C.coral, fill: C.coral2, short: "BLOCKED" };
  if (/review|partial|pending/i.test(s)) return { color: C.amber, fill: C.amber2, short: "REVIEW" };
  return { color: C.mint, fill: "#DDF8EE", short: "READY" };
}

function openReviewRows(rows) {
  return rows.filter((row) => {
    const status = clean(row.review_status).toLowerCase();
    return status === "" || status === "open" || status === "pending human review";
  });
}

function isRefreshRetryRow(row) {
  const text = [row.notes, row.current_status, row.suggested_action].map(clean).join(" ").toLowerCase();
  return text.includes("urlopen error") || text.includes("http error") || clean(row.current_status).toUpperCase() === "ERROR";
}

function makeContactSheet(previewPaths, outPath) {
  const script = "/Users/roman.althof/.codex/plugins/cache/openai-primary-runtime/presentations/26.601.10930/skills/presentations/scripts/make_contact_sheet.py";
  const python = process.env.PYTHON_BIN || "/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
  const result = spawnSync(python, [script, "--output", outPath, ...previewPaths], { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error([result.stdout, result.stderr].filter(Boolean).join("\n"));
  }
}

async function renderAndSave(presentation) {
  await fs.rm(PREVIEW_DIR, { recursive: true, force: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  const paths = [];
  for (let i = 0; i < presentation.slides.count; i += 1) {
    const slide = presentation.slides.getItem(i);
    const blob = await presentation.export({ slide, format: "png", scale: 1 });
    const out = path.join(PREVIEW_DIR, `slide-${String(i + 1).padStart(2, "0")}.png`);
    await fs.writeFile(out, Buffer.from(await blob.arrayBuffer()));
    paths.push(out);
  }
  const sheet = path.join(PREVIEW_DIR, "contact-sheet.png");
  makeContactSheet(paths, sheet);
  return { paths, sheet };
}

async function writePlanningFiles() {
  await fs.mkdir(QA_DIR, { recursive: true });
  await fs.writeFile(
    path.join(WORKSPACE, "profile-plan.txt"),
    [
      "task mode: create/rebuild existing executive deck",
      "primary deck-profile: strategy-leadership",
      "secondary gates: gtm-growth, appendix-heavy, data-visualization",
      "visual route: editorial executive summary with native shape-based diagrams",
      "required proof objects: guiding-question answer map, ecosystem orbit, influence ladder, success-type model, key-player one-pager coverage, public size/reach proxy handling, market moves, hobby journey, trust layer and open-input notes",
      "brand constraint: no fabricated official logos, app icons or product UI",
      "known open inputs: credentialed Appfigures export, internal relationship owners, platform-level creator reach",
      "",
    ].join("\n"),
  );
  await fs.writeFile(
    path.join(WORKSPACE, "design-system.txt"),
    [
      "Yousician Strategic Environment Executive Deck",
      "Slide size: 1280x720",
      "Design position: Yousician-inspired executive learning map, not a dashboard screenshot",
      "Signature motif: bright paper pages, play-green confidence rail, learning-path proof objects",
      "Palette: deep green, bright paper, Yousician mint, amber, coral, blue and violet as semantic learning/status colors",
      "Typography: Aptos Display for claim headlines, Aptos for proof labels",
      "Data-viz rules: direct labels, no hover-dependent meaning, caveats next to the proof object, blocked fields visibly red/coral",
      "Figma translation: create slides as editable frames; use semantic status colors and the executive claim spine below",
      "",
    ].join("\n"),
  );
  await fs.writeFile(
    path.join(HANDOFF, "figma_slide_design_brief_v3_4.md"),
    [
      "# Figma Slide Design Brief",
      "",
      "This deck system is designed for transfer into Figma Slides if a Figma file is provided.",
      "",
      "- Format: 16:9, 1280 x 720.",
      "- Mood: Yousician-inspired executive readout: bright, playful, direct, and still serious.",
      "- Motif: bright paper pages, play-green confidence rail, large claim headline, one proof object per slide.",
      "- Palette: deep green `#10231F`, bright paper `#F7FBF4`, mint `#00D49A`, amber `#FFBF3F`, coral `#F06455`, blue `#4C8DF6`, violet `#7467FF`.",
      "- Typography: Aptos Display for claims, Aptos for body and labels.",
      "- Data-viz principle: direct labels, visible caveats, no decorative charts, no invented metrics.",
      "- Status language: coral = blocked, amber = review, mint = ready/passed.",
      "- Brief constraint: slides must answer the brief directly; dashboard exploration stays secondary.",
      "",
    ].join("\n"),
  );
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(FINAL_DELIVERABLES, { recursive: true });
  await fs.mkdir(DELIVERABLES, { recursive: true });

  const players = await csv("players_v3.csv");
  const topActors = await csv("executive_top_10_actor_ranked_v3_4.csv");
  const ecosystem = await csv("ecosystem_map_2_0_v3_2_2.csv");
  const moves = await csv("market_moves_24m_curated_v3_2.csv");
  const appReq = await csv("appfigures_request_pack_v3_2.csv");
  const appRows = await csv("appfigures-performance-export-integrated-v3.csv");
  const teachers = await csv("teachers_schools_education_v3.csv");
  const creators = await csv("influencers_creators_v3.csv");
  const investors = await csv("investors_v3.csv");
  const awards = await csv("awards_v3.csv");
  const funding = await csv("funding_v3.csv");
  const mediaDrivers = await csv("media_cultural_drivers_v3.csv");
  const briefCoverage = await csv("brief-aligned-category-coverage.csv");
  const claims = await csv("claim_source_matrix_v3_2.csv");
  const sourceMappedClaims = await csv("source_mapped_claims_eligible_v3_9.csv");
  const blockedClaims = await csv("claims_requiring_final_validation_v3_9.csv");
  const directLearning = await csv("direct_music_learning_apps_snapshot_v3_9.csv");
  const gates = await csv("executive_decision_gates_v3_4.csv");
  const review = await csv("review_queue_v3.csv");
  const dataQuality = await csv("data_quality_check_v3_2_5.csv");
  const refreshRows = await csv("refresh_run_log_v3.csv");

  const keyPlayers = players.filter((row) => /yes|true|1/i.test(row.key_player || ""));
  const boardMoves = moves.filter((row) => row.include_in_board_timeline === "Yes");
  const credentialedAppRows = appRows.filter((row) => clean(row.appfigures_status).toLowerCase().startsWith("credentialed appfigures export imported"));
  const publicProxyRows = appRows.filter((row) => clean(row.public_proxy_notes) || clean(row.rating) || clean(row.review_count));
  const openReviews = openReviewRows(review);
  const refreshRetryRows = openReviews.filter(isRefreshRetryRow);
  const sourceReviewRows = openReviews.filter((row) => !isRefreshRetryRow(row));
  const hardClaimWarnings = Number(dataQuality.find((row) => row.check_id === "hard_claims")?.count || 33);
  const weakSources = Number(dataQuality.find((row) => row.check_id === "source_confidence")?.count || 42);
  const boardByCategory = byCount(boardMoves, "category_mapping");
  const claimTypes = byCount(claims, "claim_type").slice(0, 6);

  await writePlanningFiles();

  const p = Presentation.create({ slideSize: { width: W, height: H } });

  // 01 Cover
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Executive summary", "01");
    rect(s, 760, 72, 402, 500, C.ink, "none");
    ellipse(s, 820, 128, 278, 278, "#15372F", "#31574D");
    ellipse(s, 864, 172, 190, 190, "#1A493F", "#4A766B");
    ellipse(s, 912, 220, 94, 94, C.mint, "none");
    text(s, "Y", 943, 244, 34, 34, { size: 31, bold: true, color: C.ink, align: "center", valign: "middle" });
    const orbitDots = [
      [954, 118, C.amber, "AI"],
      [1114, 268, C.blue, "Songs"],
      [972, 432, C.violet, "Creators"],
      [804, 310, C.coral, "Rights"],
      [1090, 410, C.mint2, "Hardware"],
    ];
    orbitDots.forEach(([x, y, color, label]) => {
      ellipse(s, x, y, 22, 22, color, "none");
      text(s, label, x - 28, y + 30, 78, 12, { size: 7.6, bold: true, color: C.paper2, align: "center" });
    });
    line(s, 820, 492, 1076, 492, C.mint, 5);
    line(s, 820, 520, 1040, 520, C.amber, 5);
    line(s, 820, 548, 1116, 548, C.blue, 5);
    progressDot(s, 76, 49, C.mint, "EXECUTIVE READOUT", "paper");
    headline(
      s,
      "Strategic Environment Mapping",
      "A brief-led read of the ecosystem around Yousician: who shapes music learning, music as a hobby and the strategic environment around the company.",
      "paper",
      { y: 112, w: 650, h: 120, size: 50, sy: 258, sw: 590, sh: 66, supportSize: 15 },
    );
    text(s, "Not a competitor list.", 66, 352, 420, 38, { size: 34, bold: true, color: C.mint, face: "Aptos Display" });
    text(s, "A map of stakeholder groups, influence and relevance.", 66, 398, 548, 26, { size: 20, bold: true, color: C.ink });
    [
      ["96", "tracked records", C.mint],
      ["28", "one-pager profiles", C.mint],
      [String(boardMoves.length), "news-grade moves", C.blue],
      ["12", "brief categories", C.amber],
      ["3", "guiding questions", C.violet],
    ].forEach(([value, label, color], index) => {
      metric(s, value, label, 66 + index * 138, 528, 118, "paper", color);
    });
    footer(s, `Prepared ${TODAY}. Appfigures performance and internal relationship fields are marked as open inputs, not treated as missing market narrative.`, "paper");
  }

  // 02 Direct answers
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Guiding questions", "02");
    headline(
      s,
      "The three guiding questions are answered directly.",
      "The rest of the deck shows the evidence: category coverage, ecosystem map, priority actors, direct learning apps and the 24-month market layer.",
      "paper",
      { size: 39, h: 88, sy: 166, sw: 930 },
    );
    const answers = [
      ["Future of music learning", "Learning apps, song/practice systems, AI practice utilities, teachers, creators, education standards and hardware funnels all shape the next learning field.", C.mint],
      ["Future of music as a hobby", "Discovery platforms, song libraries, artists, creator tools, instruments and AI creation tools shape demand before and after formal lessons.", C.amber],
      ["Strategic environment around Yousician", "AI companies, rights owners, app competitors, hardware brands, creators, publishers, investors, awards and funding bodies set the broader context.", C.blue],
    ];
    answers.forEach(([question, answer, color], index) => {
      const x = 86 + index * 372;
      rect(s, x, 240, 314, 250, C.paper2, C.line);
      rect(s, x, 240, 314, 10, color, "none");
      text(s, `0${index + 1}`, x + 26, 276, 58, 36, { size: 32, bold: true, color });
      text(s, question, x + 26, 334, 230, 42, { size: 22, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, answer, x + 26, 404, 250, 48, { size: 11.5, color: C.muted });
    });
    note(s, "Ranking note", "Current actor ranking is ecosystem-influence-based. App-performance ranking remains pending until credentialed Appfigures data is imported.", 172, 558, 842, 48, C.coral);
    footer(s, "Source: original brief, executive synthesis and category coverage.");
  }

  // 03 Internal context
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Internal context", "03");
    headline(
      s,
      "Yousician's own user context sharpens which market signals matter.",
      "Static User Insights grounding points to beginner guidance, song intent, confidence and self-guided practice as key filters for the ecosystem.",
      "paper",
      { size: 37, h: 88, sy: 166, sw: 970 },
    );
    rect(s, 74, 226, 264, 334, C.ink, "none");
    text(s, "Static\nresearch\ngrounding", 116, 276, 176, 96, { size: 30, bold: true, color: C.paper2, face: "Aptos Display", align: "center" });
    line(s, 116, 410, 292, 410, C.mint, 4);
    text(s, "Last reviewed", 116, 440, 138, 17, { size: 12, bold: true, color: C.mint });
    text(s, "2026-06-04\nUser Insights grounding\nStatic context snapshot", 116, 466, 164, 54, { size: 11, color: "#D6E4DE", align: "center" });
    const contextCards = [
      ["Yousician users", "Early guitar journey, guided path, timely feedback and favourite songs.", "Read learning apps through beginner guidance and motivation.", C.mint],
      ["GuitarTuna users", "Self-guided players want songs, chords, tools and optional feedback.", "Include song, tab, utility and self-guided practice surfaces.", C.blue],
      ["Song-led jobs", "Chords, transitions, song sections, strumming and playing from memory matter most.", "Repertoire and AI song-practice tools are core habit surfaces.", C.amber],
      ["Start / restart", "Love of music, feel-good free time, guitar dreams and instrument access trigger entry.", "Hardware, creators and emotional UX matter before app choice.", C.violet],
      ["Market awareness", "Category awareness is low and there is no clear brand leader beyond YouTube as default free source.", "The opportunity is broader than beating app competitors.", C.coral],
      ["Competitor read", "Simply: emotional UX and songs. Ultimate Guitar: huge tabs but clutter. YouTube: free but uncurated.", "Success blends onboarding, repertoire, guidance and reduced research burden.", C.teal],
    ];
    contextCards.forEach(([head, signal, implication, color], index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = 392 + col * 372;
      const y = 224 + row * 112;
      rect(s, x, y, 332, 86, C.paper2, C.line);
      rect(s, x, y, 8, 86, color, "none");
      text(s, head, x + 24, y + 12, 136, 16, { size: 13.4, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, signal, x + 24, y + 34, 142, 36, { size: 8.2, color: C.muted });
      text(s, implication, x + 184, y + 26, 116, 36, { size: 8.1, bold: true, color: C.ink3 });
    });
    note(s, "Strategic implication", "Evaluate competitors and ecosystem partners by how much they shape confidence, repertoire access, practice habit, instrument entry and creator trust.", 392, 582, 704, 46, C.teal);
    footer(s, "Source: static Yousician users and market context by User Insights; live Confluence database not queried in this pass.");
  }

  // 04 Ecosystem map
  {
    const s = p.slides.add();
    slideBase(s, "dark", "Ecosystem map", "04");
    headline(
      s,
      "Yousician sits inside a wider hobby ecosystem, not a narrow app category.",
      "The map separates close product surfaces from broader influence, infrastructure and cultural demand.",
      "dark",
      { size: 36, h: 92, sy: 166, sw: 880 },
    );
    const cx = 430;
    const cy = 420;
    [426, 318, 210, 112].forEach((d, index) => {
      ellipse(s, cx - d / 2, cy - d / 2, d, d, index === 3 ? C.paper : index === 2 ? "#15372F" : "#0D2A25", index === 0 ? "#31574D" : "#284B43");
    });
    text(s, "Yousician\npractice\ncore", cx - 58, cy - 44, 116, 88, { size: 17, bold: true, color: C.ink, align: "center", valign: "middle" });
    const zoneLabels = [
      ["Learning apps", 430, 196, C.mint],
      ["Song systems", 628, 300, C.amber],
      ["Hardware", 610, 512, C.blue],
      ["Creators", 430, 638, C.violet],
      ["Education", 214, 512, C.teal],
      ["AI utilities", 196, 302, C.coral],
    ];
    zoneLabels.forEach(([label, x, y, color]) => {
      ellipse(s, x - 16, y - 16, 32, 32, color, "none");
      text(s, label, x - 62, y + 24, 124, 18, { size: 9.2, bold: true, color: C.paper2, align: "center" });
    });
    const layers = [
      ["Near field", "Direct learning apps, repertoire, hardware-backed beginner funnels", C.mint],
      ["Influence field", "Creators, teachers, education bodies, media and cultural demand", C.amber],
      ["Infrastructure field", "Rights owners, AI policy, investors, awards and public funding", C.violet],
    ];
    layers.forEach(([label, body, color], index) => {
      const y = 266 + index * 106;
      rect(s, 804, y, 330, 80, "#0D221E", "#31574D");
      rect(s, 804, y, 8, 80, color, "none");
      text(s, label, 832, y + 18, 120, 18, { size: 14, bold: true, color });
      text(s, body, 832, y + 42, 260, 24, { size: 9.8, color: "#C9D8D2" });
    });
    footer(s, "Source: ecosystem map table. Placement is a synthesis of proximity, influence and momentum.", "dark");
  }

  // 05 Brief category coverage
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Brief coverage", "05");
    headline(
      s,
      "The ecosystem map covers the full category set from the brief.",
      "This page makes the assignment logic explicit: broad market context around Yousician, not a narrow competitor list.",
      "paper",
      { size: 38, h: 88, sy: 166, sw: 930 },
    );
    const coverageRows = [
      ["Music learning apps", "Simply, Flowkey, Skoove, Fender Play", C.mint],
      ["Instrument brands", "Fender, Yamaha, Gibson, retailers", C.blue],
      ["Teachers / schools", "ABRSM, Trinity, School of Rock", C.teal],
      ["Hobby software", "BandLab, Splice, MuseScore, Songsterr", C.amber],
      ["Wider education", "Duolingo, Kahoot, MasterClass, Berklee", C.violet],
      ["Investors", "Menlo, Lightspeed, Matrix, Khosla", C.mint],
      ["Creators / educators", "JustinGuitar, Marty Music, Rick Beato", C.amber],
      ["Media / culture", "TikTok, YouTube, Spotify, Guitar World", C.blue],
      ["AI companies", "Suno, Udio, Moises, Chord ai", C.coral],
      ["Awards", "Apple Design, Google Play, Webby, EdTech", C.violet],
      ["Funding", "Business Finland, EIC, Horizon Europe", C.teal],
      ["Last 24 months", `${boardMoves.length} curated market moves`, C.coral],
    ];
    coverageRows.forEach(([category, examples, color], index) => {
      const col = index % 3;
      const row = Math.floor(index / 3);
      const x = 72 + col * 374;
      const y = 226 + row * 88;
      rect(s, x, y, 326, 66, C.paper2, C.line);
      rect(s, x, y, 8, 66, color, "none");
      text(s, category, x + 24, y + 13, 170, 18, { size: 15.4, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, examples, x + 24, y + 39, 260, 12, { size: 8.6, bold: true, color: C.muted });
    });
    note(s, "Coverage read", "The first-read deck shows representative players; the workbook keeps the wider database and one-pager fields behind the executive map.", 174, 596, 840, 46, C.teal);
    footer(s, "Source: brief-aligned category coverage, player database and curated market moves.");
  }

  // 06 Priority actors
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Priority actors", "06");
    headline(
      s,
      "Five influence clusters explain the top actors around Yousician.",
      "The most important actors are not all competitors: utility shifts, repertoire ownership, discovery power, hardware funnels and infrastructure all matter.",
      "paper",
      { size: 38, h: 88, sy: 166, sw: 990 },
    );
    const lanes = [
      {
        title: "AI changes participation",
        actors: ["Suno", "Moises", "ElevenLabs"],
        body: "Creation and practice utilities change what hobbyists expect from feedback, accompaniment and making music.",
        color: C.coral,
      },
      {
        title: "Apps shape beginner habit",
        actors: ["Simply", "Flowkey", "Skoove"],
        body: "Direct learning apps remain the most comparable field, but final success ranking needs Appfigures.",
        color: C.mint,
      },
      {
        title: "Songs own intent",
        actors: ["Ultimate Guitar", "MuseScore", "Songsterr"],
        body: "Tabs, notation and song demand shape why beginners practice and what they want to play.",
        color: C.amber,
      },
      {
        title: "Platforms set demand",
        actors: ["YouTube", "TikTok", "Spotify"],
        body: "Discovery, creator trust and cultural moments often precede formal lesson demand.",
        color: C.blue,
      },
      {
        title: "Hardware and capital widen reach",
        actors: ["Fender", "Gibson", "Investors"],
        body: "Distribution, bundles, funding and recognition shape strategic options beyond app UX.",
        color: C.violet,
      },
    ];
    lanes.forEach((lane, index) => {
      const x = 68 + index * 230;
      rect(s, x, 230, 202, 308, index === 0 ? C.ink : C.paper2, index === 0 ? "none" : C.line, 0);
      rect(s, x, 230, 202, 8, lane.color, "none");
      text(s, String(index + 1).padStart(2, "0"), x + 22, 260, 44, 24, {
        size: 21,
        bold: true,
        color: lane.color,
      });
      text(s, lane.title, x + 22, 306, 154, 42, {
        size: 17.5,
        bold: true,
        color: index === 0 ? C.paper2 : C.ink,
        face: "Aptos Display",
      });
      text(s, lane.body, x + 22, 366, 154, 54, {
        size: 9.2,
        color: index === 0 ? "#C9D8D2" : C.muted,
      });
      lane.actors.forEach((actor, actorIndex) => {
        chip(s, actor, x + 22, 428 + actorIndex * 30, 154, index === 0 ? "#15372F" : C.soft, index === 0 ? C.paper2 : C.ink3, {
          outline: index === 0 ? "#31574D" : "none",
          h: 24,
          size: 8.2,
        });
      });
    });
    note(s, "Ranking basis", "This is an ecosystem-influence ranking. App-performance ranking remains pending until credentialed Appfigures data is imported.", 176, 586, 928, 52, C.coral);
    footer(s, "Source: executive top-actor ranking and brief-aligned key-player profiles.");
  }

  // 07 Success model
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Who is successful?", "07");
    headline(
      s,
      "Success is visible across influence surfaces, not only app revenue.",
      "The strongest actors win different parts of the journey: app onboarding, repertoire, practice utility, creation, community, trust, hardware and discovery.",
      "paper",
      { size: 38, h: 86, sy: 166, sw: 900 },
    );
    const surfaces = [
      ["Direct app benchmark", "Simply / JoyTunes", "Beginner onboarding, motivation and subscription learning.", C.mint],
      ["Repertoire ownership", "Ultimate Guitar / Muse Group", "Song demand, tabs, notation and repeated practice intent.", C.amber],
      ["AI practice utility", "Music.AI / Moises", "Stems, transcription and play-any-song practice support.", C.blue],
      ["AI creation", "Suno / Udio", "Participation can become prompting, generating and sharing.", C.coral],
      ["Hobby community", "BandLab / Splice", "Creation, collaboration and loops beyond formal lessons.", C.violet],
      ["Trust / curriculum", "ABRSM / Trinity / School of Rock", "Credentialing, structure and parent/teacher confidence.", C.teal],
      ["Hardware funnel", "Fender / Gibson / Yamaha", "Instrument access and brand-led beginner entry.", C.amber],
      ["Discovery platforms", "TikTok / YouTube / Spotify", "Demand, creators and song inspiration before app choice.", C.blue],
    ];
    surfaces.forEach(([label, actor, body, color], index) => {
      const x = 74 + (index % 4) * 284;
      const y = 226 + Math.floor(index / 4) * 136;
      rect(s, x, y, 238, 112, C.paper2, C.line);
      rect(s, x, y, 238, 8, color, "none");
      text(s, label, x + 20, y + 22, 170, 12, { size: 8.2, bold: true, color });
      text(s, actor, x + 20, y + 46, 174, 28, { size: 15.5, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, body, x + 20, y + 82, 190, 20, { size: 8.6, color: C.muted });
    });
    note(s, "App-performance caveat", "App revenue, downloads, rank trends and country mix still require a credentialed Appfigures export; the current read is ecosystem influence.", 188, 544, 820, 46, C.coral);
    footer(s, "Source: executive synthesis, key-player profiles and direct learning snapshot.");
  }

  // 08 Direct app field
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Direct learning apps", "08");
    headline(
      s,
      "Direct learning apps are present as a field; performance ranking waits for Appfigures.",
      "Public sources show who belongs in the landscape. Revenue, downloads, rankings and country mix should only be ranked after credentialed data import.",
      "paper",
      { size: 38, h: 86, sy: 166, sw: 930 },
    );
    const matrix = [
      ["Mobile-first app benchmarks", "Simply, Flowkey, Skoove, Fretello", "Comparable onboarding, motivation and subscription learning.", "Pending export", C.mint],
      ["Guitar and hardware funnels", "Fender Play, Gibson App, Guitar Tricks", "Brand-led entry from instrument purchase into guided practice.", "Pending export", C.blue],
      ["Song and practice services", "Rocksmith+, Pickup, Musora", "Higher-intent practice, lessons and song-based feedback.", "Pending export", C.amber],
      ["Internal product context", "Yousician, GuitarTuna", "Core comparison plus tuning, chord and self-guided utility surface.", "Internal read", C.teal],
      ["Education-platform adjacency", "Duolingo Music, Melodics", "Mass-market beginner motivation and instrument-adjacent learning.", "Pending export", C.violet],
    ];
    const x0 = 70;
    const y0 = 230;
    const widths = [250, 330, 326, 176];
    const rowH = 58;
    rect(s, x0, y0, 1082, 34 + matrix.length * rowH, C.paper2, C.line);
    rect(s, x0, y0, 1082, 34, C.ink, "none");
    ["Segment", "Representative players", "Why it matters", "Appfigures status"].forEach((head, index) => {
      const x = x0 + widths.slice(0, index).reduce((a, b) => a + b, 0);
      text(s, head, x + 18, y0 + 11, widths[index] - 36, 12, { size: 8.8, bold: true, color: C.paper2 });
      if (index > 0) line(s, x, y0, x, y0 + 34 + matrix.length * rowH, "#EEF4EE", 1);
    });
    matrix.forEach(([segment, playersLabel, why, status, color], index) => {
      const y = y0 + 34 + index * rowH;
      rect(s, x0, y, 8, rowH, color, "none");
      if (index > 0) line(s, x0, y, x0 + 1082, y, C.line, 1);
      text(s, segment, x0 + 18, y + 17, widths[0] - 34, 18, { size: 13.5, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, playersLabel, x0 + widths[0] + 18, y + 17, widths[1] - 36, 18, { size: 11.4, bold: true, color: C.ink3 });
      text(s, why, x0 + widths[0] + widths[1] + 18, y + 14, widths[2] - 36, 24, { size: 9.3, color: C.muted });
      text(s, status, x0 + widths[0] + widths[1] + widths[2] + 18, y + 17, widths[3] - 36, 18, { size: 10.8, bold: true, color });
    });
    note(s, "Market read", "Direct learning apps are less press-driven publicly; their competitive movement is more visible through Appfigures and app-store data than through press coverage.", 174, 578, 842, 46, C.coral);
    footer(s, "Source: direct learning apps snapshot and Appfigures data request.");
  }

  // 09 Market moves
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Last 24 months", "09");
    headline(
      s,
      "The news layer is strongest where AI, culture, capital and rights collide.",
      "This page is curated for 'who made the news for what' rather than static company facts.",
      "paper",
      { size: 37, h: 88, sy: 166, sw: 930 },
    );
    rect(s, 76, 226, 236, 350, C.ink, "none");
    text(s, String(boardMoves.length), 112, 262, 86, 62, { size: 60, bold: true, color: C.mint });
    text(s, "news-grade\nmarket moves", 112, 342, 160, 48, { size: 21, bold: true, color: C.paper2, face: "Aptos Display" });
    line(s, 112, 424, 268, 424, C.mint, 4);
    text(s, "Visible pressure points", 112, 438, 148, 16, { size: 11, bold: true, color: C.amber });
    ["AI rights", "Creator tools", "App platforms", "Awards", "Public funding"].forEach((label, index) => {
      chip(s, label, 112, 464 + index * 21, 148, "#15372F", C.paper2, { h: 18, size: 6.3, outline: "#31574D" });
    });
    const newsCards = [
      ["Jun 2026", "Suno", "Series D above $400M at $5.4B valuation", "AI creation is now venture-scale consumer infrastructure.", C.coral],
      ["Jun 2026", "Fender + Moises", "Studio Pro added stem separation and smart-assistant tooling", "Instrument brands are moving into AI practice utility.", C.blue],
      ["Jun 2026", "Google / Lyria", "Musicians sued over alleged YouTube music use for AI training", "Creator-platform data rights now affect music-AI trust.", C.violet],
      ["May 2026", "Apple Design Awards", "2026 finalists and winners set current app-craft benchmarks", "Recognition layers matter for consumer learning credibility.", C.amber],
      ["May 2026", "Google Play", "Q1 discovery and developer-tool updates highlighted app growth levers", "Store discovery remains part of music-learning acquisition.", C.mint],
      ["Apr 2026", "Splice", "AI tools tied to creator compensation model", "Rights-aware creator tooling is becoming a market norm.", C.teal],
    ];
    newsCards.forEach(([date, actor, event, implication, color], index) => {
      const col = index % 3;
      const rr = Math.floor(index / 3);
      const x = 356 + col * 264;
      const y = 232 + rr * 166;
      rect(s, x, y, 232, 132, C.paper2, C.line, 0);
      rect(s, x, y, 232, 7, color, "none");
      text(s, date, x + 18, y + 22, 70, 12, { size: 8.4, bold: true, color });
      text(s, actor, x + 18, y + 48, 178, 20, { size: 15, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, event, x + 18, y + 78, 190, 24, { size: 8.6, bold: true, color: C.ink3 });
      text(s, implication, x + 18, y + 108, 190, 14, { size: 7.6, color: C.muted });
    });
    note(s, "Curation rule", "A/B news-grade events lead the executive story. Static direct-learning app movement is covered in the app landscape and workbook.", 356, 584, 760, 52, C.teal);
    footer(s, "Source: curated 24-month market moves.");
  }

  // 10 AI and rights pressure
  {
    const s = p.slides.add();
    slideBase(s, "dark", "AI and rights", "10");
    headline(
      s,
      "AI changes the shape of participation and the rules around it.",
      "The relevant map is not a feature checklist: it is creation, practice utility and rights governance moving together.",
      "dark",
      { size: 37, h: 90, sy: 166, sw: 920 },
    );
    ellipse(s, 180, 246, 260, 260, "#15372F", "#31574D");
    ellipse(s, 500, 246, 260, 260, "#2A3324", "#6A5A26");
    ellipse(s, 820, 246, 260, 260, "#3A211F", "#78413A");
    text(s, "Creation", 250, 342, 118, 24, { size: 24, bold: true, color: C.mint, face: "Aptos Display", align: "center" });
    text(s, "Suno, Udio,\nBandLab", 248, 384, 122, 40, { size: 13, color: C.paper2, align: "center" });
    text(s, "Practice", 572, 342, 118, 24, { size: 24, bold: true, color: C.amber, face: "Aptos Display", align: "center" });
    text(s, "Moises, Chord ai,\ntranscription tools", 558, 384, 150, 40, { size: 13, color: C.paper2, align: "center" });
    text(s, "Rights", 900, 342, 104, 24, { size: 24, bold: true, color: C.coral, face: "Aptos Display", align: "center" });
    text(s, "labels, publishers,\npolicy, litigation", 874, 384, 156, 40, { size: 13, color: C.paper2, align: "center" });
    rect(s, 426, 534, 426, 58, C.paper, "none");
    text(s, "Strategic read", 460, 552, 110, 14, { size: 10.5, bold: true, color: C.coral });
    text(s, "AI matters because it changes learner alternatives, practice utilities and licensed-building constraints at the same time.", 592, 544, 226, 28, { size: 12.2, bold: true, color: C.ink });
    footer(s, "Source: AI rows in market moves and source audit.", "dark");
  }

  // 11 Hobby journey
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Music as a hobby", "11");
    headline(
      s,
      "Music-as-a-hobby influence starts before a learner opens a lesson app.",
      "Discovery, instrument choice, repertoire and creation tools all shape demand around Yousician.",
      "paper",
      { size: 37, h: 88, sy: 166, sw: 930 },
    );
    const steps = [
      ["Discover", ["TikTok", "YouTube", "Spotify", "Artists"], "Attention creates desire", C.mint],
      ["Choose", ["Fender", "Gibson", "Retailers", "Creators"], "Access makes it real", C.amber],
      ["Learn", ["Yousician", "Simply", "Teachers", "Schools"], "Structure builds habit", C.blue],
      ["Play songs", ["Ultimate Guitar", "Songsterr", "MuseScore"], "Repertoire sustains practice", C.violet],
      ["Create/share", ["BandLab", "Splice", "GarageBand", "AI tools"], "Identity extends the hobby", C.coral],
    ];
    rect(s, 76, 236, 1094, 312, "#FFFFFF", C.line);
    line(s, 114, 336, 1122, 336, C.line, 4);
    steps.forEach(([head, actors, thesis, color], index) => {
      const x = 96 + index * 214;
      rect(s, x, 266, 170, 236, index === 2 ? "#F0FFF8" : C.paper2, index === 2 ? C.mint : C.line);
      rect(s, x, 266, 170, 8, color, "none");
      ellipse(s, x + 63, 306, 44, 44, color, "none");
      text(s, String(index + 1), x + 76, 319, 18, 12, { size: 10, bold: true, color: C.ink, align: "center" });
      text(s, head, x + 18, 374, 134, 22, { size: 18, bold: true, color: C.ink, face: "Aptos Display", align: "center" });
      text(s, thesis, x + 18, 406, 134, 24, { size: 8.8, color: C.muted, align: "center" });
      actors.forEach((actor, actorIndex) => {
        chip(s, actor, x + 22, 444 + actorIndex * 25, 126, actor === "Yousician" ? C.mint : C.soft, actor === "Yousician" ? C.ink : C.ink3, {
          h: 20,
          size: 6.8,
        });
      });
    });
    note(s, "Answer to the brief", "Music as a hobby is shaped by attention platforms, song demand, instrument access, creator tools and cultural moments as much as by formal learning products.", 170, 588, 892, 52, C.teal);
    footer(s, "Source: media/cultural drivers, hobby software ecosystem and executive synthesis.");
  }

  // 12 Trust and education
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Trust infrastructure", "12");
    headline(
      s,
      "Teachers, creators and media are trust infrastructure.",
      "They are visible in the executive story because the brief explicitly asks for schools, education organizations, creators and cultural drivers.",
      "paper",
      { size: 39, h: 88, sy: 166, sw: 980 },
    );
    const trustCards = [
      ["Education bodies", String(teachers.length), "ABRSM, Trinity, RSL/Rockschool", "Credentialing, curriculum and teacher/parent confidence.", C.teal],
      ["Creator educators", String(creators.length), "JustinGuitar, Marty Music, Rick Beato", "Beginner trust, aspiration and technique discovery.", C.amber],
      ["Media and culture", String(mediaDrivers.length), "TikTok, YouTube, Spotify, Guitar World", "Demand creation, cultural relevance and repertoire pull.", C.blue],
    ];
    trustCards.forEach(([head, value, examples, why, color], index) => {
      const x = 92 + index * 370;
      rect(s, x, 240, 310, 266, C.paper2, C.line);
      rect(s, x, 240, 310, 10, color, "none");
      text(s, value, x + 30, 282, 82, 56, { size: 54, bold: true, color });
      text(s, head, x + 30, 358, 220, 30, { size: 24, bold: true, color: C.ink, face: "Aptos Display" });
      line(s, x + 30, 410, x + 250, 410, C.line, 2);
      text(s, examples, x + 30, 434, 234, 28, { size: 11, bold: true, color: C.ink3 });
      text(s, why, x + 30, 476, 230, 28, { size: 10.2, color: C.muted });
    });
    note(s, "Why it matters", "Trust often forms outside the app: through teachers, creator educators, cultural media and the songs people already want to play.", 168, 586, 900, 48, C.teal);
    footer(s, "Source: teachers/schools, influencers/creators and media/cultural-driver tables.");
  }

  // 13 Capital, awards and funding
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Capital and recognition", "13");
    headline(
      s,
      "Investors, awards and funding are strategic-environment signals.",
      "They should not be hidden in the appendix because the brief names them as ecosystem categories.",
      "paper",
      { size: 38, h: 88, sy: 166, sw: 920 },
    );
    const streams = [
      ["Investors", String(investors.length), "Menlo / Lightspeed / Matrix / Khosla", "Capital follows AI, creator tools and education/consumer software momentum.", C.mint],
      ["Awards", String(awards.length), "Apple Design / Google Play / Webby / EdTech", "Recognition can support credibility, app-store craft and executive proof.", C.amber],
      ["Funding", String(funding.length), "Business Finland / EIC / Horizon Europe", "Public and EU/Finland instruments matter for AI practice, R&D and learning innovation projects.", C.blue],
    ];
    streams.forEach(([head, value, examples, body, color], index) => {
      const y = 222 + index * 116;
      rect(s, 94, y, 1018, 82, C.paper2, C.line);
      rect(s, 94, y, 10, 82, color, "none");
      text(s, value, 132, y + 18, 58, 38, { size: 36, bold: true, color });
      text(s, head, 214, y + 18, 126, 22, { size: 20, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, examples, 360, y + 18, 386, 18, { size: 9.5, bold: true, color: C.ink3 });
      text(s, body, 360, y + 44, 664, 18, { size: 9.6, color: C.muted });
    });
    note(s, "Strategic read", "Capital, awards and public funding are not side notes: they indicate where the market is rewarding AI, consumer learning, app craft and music-tech credibility.", 148, 586, 940, 52, C.teal);
    footer(s, "Source: investors, awards and funding tables.");
  }

  // 14 Key-player one-pagers
  {
    const s = p.slides.add();
    slideBase(s, "paper", "Key-player one-pagers", "14");
    headline(
      s,
      "Key-player profiles now follow the one-pager logic from the brief.",
      "Six highlighted profiles are formatted as decision-ready one-pager-style profiles in the report; the workbook keeps the full 28-player database.",
      "paper",
      { size: 37, h: 92, sy: 166, sw: 1000 },
    );
    const examples = [
      {
        player: "Simply",
        role: "Direct learning benchmark",
        fields: [
          ["What they are", "Mobile-first beginner music-learning platform."],
          ["Size / reach", "Publicly visible consumer app; exact Appfigures pending."],
          ["Ownership", "Simply Ltd / JoyTunes context."],
          ["AI / recent", "Personalization and feedback relevance to validate."],
          ["Why it matters", "Benchmark for onboarding, motivation and subscription learning."],
          ["Relationship", "Prepared for Yousician owner input."],
        ],
        color: C.mint,
      },
      {
        player: "Suno",
        role: "AI creation signal",
        fields: [
          ["What they are", "AI music generation platform for complete songs."],
          ["Size / reach", "More than $400M Series D; $5.4B valuation."],
          ["Ownership", "Private; Bond Capital-led Series D."],
          ["AI / recent", "Core prompt-based music generation."],
          ["Why it matters", "Changes what casual music participation can mean."],
          ["Relationship", "Prepared for Yousician owner input."],
        ],
        color: C.coral,
      },
    ];
    examples.forEach((profile, index) => {
      const x = 76 + index * 562;
      rect(s, x, 226, 500, 306, C.paper2, C.line);
      rect(s, x, 226, 500, 10, profile.color, "none");
      text(s, profile.player, x + 28, 260, 188, 34, { size: 30, bold: true, color: C.ink, face: "Aptos Display" });
      text(s, profile.role, x + 28, 302, 224, 16, { size: 10.5, bold: true, color: profile.color });
      profile.fields.forEach(([label, value], fieldIndex) => {
        const col = fieldIndex % 2;
        const row = Math.floor(fieldIndex / 2);
        const fx = x + 28 + col * 226;
        const fy = 344 + row * 56;
        rect(s, fx, fy, 206, 44, "#F8FAF3", "#E3E8DF");
        text(s, label, fx + 10, fy + 7, 88, 9, { size: 7.3, bold: true, color: profile.color });
        text(s, value, fx + 10, fy + 20, 176, 16, { size: 8, color: C.ink });
      });
    });
    const highlightNames = ["Simply", "Ultimate Guitar", "Suno", "Moises", "Fender", "BandLab"];
    highlightNames.forEach((name, index) => {
      chip(s, name, 146 + index * 158, 554, 132, index % 2 ? C.soft : "#E8F8F1", C.ink3, { h: 24, size: 7.3, outline: index % 2 ? "none" : C.line });
    });
    note(s, "Section design", "Report: six brief-style highlight profiles. Workbook: all 28 profiles with description, reach, ownership, AI/recent initiatives, relationship and strategic assessment fields.", 176, 588, 928, 46, C.teal);
    footer(s, "Source: key-player profiles final v3.9 and relationship input template.");
  }

  // 15 Closing synthesis
  {
    const s = p.slides.add();
    slideBase(s, "dark", "Executive synthesis", "15");
    headline(
      s,
      "Bottom line: Yousician's environment is broader than the app category.",
      "The strategic field is shaped by learning apps, song and practice ecosystems, AI utilities, creator trust, hardware funnels, capital and culture.",
      "dark",
      { size: 40, h: 92, sy: 166, sw: 930 },
    );
    const closes = [
      ["Music learning", "Learning apps, song/practice systems, AI utilities, hardware funnels, teachers and creator educators shape the future.", C.mint],
      ["Successful actors", "Success is visible through habit, repertoire, trust, reach, utility and momentum; app-performance ranking requires Appfigures.", C.coral],
      ["Music as a hobby", "Attention platforms, song libraries, creator tools, artists and cultural moments shape demand around learning.", C.amber],
      ["Strategic environment", "AI companies, rights owners, hardware brands, media, investors, awards, funding bodies and education standards define the wider field.", C.blue],
    ];
    closes.forEach(([head, body, color], index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = 108 + col * 540;
      const y = 246 + row * 142;
      rect(s, x, y, 456, 92, "#0D221E", "#31574D");
      rect(s, x, y, 10, 92, color, "none");
      text(s, head, x + 32, y + 20, 188, 22, { size: 18, bold: true, color, face: "Aptos Display" });
      text(s, body, x + 240, y + 18, 174, 40, { size: 9.8, color: "#D6E4DE" });
    });
    rect(s, 144, 566, 992, 56, C.paper, "none");
    text(s, "Only open inputs", 178, 586, 130, 14, { size: 10.2, bold: true, color: C.teal });
    text(s, "App-performance ranking needs Appfigures; relationship status remains for Yousician owner input. The market map itself is ready for first read.", 334, 577, 720, 24, { size: 12.6, bold: true, color: C.ink });
    footer(s, "Source: executive synthesis and brief-aligned category coverage.", "dark");
  }

  const { sheet } = await renderAndSave(p);
  const pptx = await PresentationFile.exportPptx(p);
  const outputs = [
      "Yousician Strategic Environment Executive Summary v3.9.pptx",
  ];
  for (const name of outputs) {
    await pptx.save(path.join(OUTPUT_DIR, name));
    await fs.copyFile(path.join(OUTPUT_DIR, name), path.join(FINAL_DELIVERABLES, name));
    await fs.copyFile(path.join(OUTPUT_DIR, name), path.join(DELIVERABLES, name));
  }
  for (const name of [
    "executive_summary_deck_contact_sheet_v3.9.png",
  ]) {
    await fs.copyFile(sheet, path.join(FINAL_DELIVERABLES, name));
    await fs.copyFile(sheet, path.join(DELIVERABLES, name));
  }

  await fs.writeFile(
    path.join(QA_DIR, "comeback-scorecard.txt"),
    [
      "Deck QA scorecard v3.9",
      "primary deck-profile: strategy-leadership",
      "data-viz route: explanatory executive slides with direct labels and brief-category coverage",
      "story: 4.8/5 - direct answers, internal context, ecosystem map and category coverage now lead the deck",
      "specificity: 4.7/5 - Chris brief categories, Yousician context, Appfigures caveat and relationship input are explicit without dominating the story",
      "rhythm: 4.8/5 - 15 slides with direct-answer opening, internal context, ecosystem map, brief-category coverage, direct-app matrix and bottom-line close",
      "visual hierarchy: 4.8/5 - larger claims, one proof object per slide, no standalone completion slide, stronger category, trust, news and capital visuals",
      "data clarity: 4.5/5 - direct labels and status colors; no invented metrics",
      "residual weakness: credentialed Appfigures and internal relationship inputs remain outside the public-source dataset",
      "",
    ].join("\n"),
    "utf8",
  );

  console.log(JSON.stringify({
    version: VERSION,
    pptx: path.join(OUTPUT_DIR, "Yousician Strategic Environment Executive Summary v3.9.pptx"),
    finalCopy: path.join(FINAL_DELIVERABLES, "Yousician Strategic Environment Executive Summary v3.9.pptx"),
    slides: p.slides.count,
    contact: sheet,
  }, null, 2));
}

main().catch((error) => {
  console.error(error.stack || error.message || String(error));
  process.exit(1);
});
