import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const handoff = path.join(base, "handoff");
const VERSION = "v3.9";
const outputPath = path.join(base, `Yousician Strategic Environment Database ${VERSION}.xlsx`);
const deliverableOutputPath = path.join(base, "deliverables", `Yousician Strategic Environment Database ${VERSION}.xlsx`);
const previewDir = path.join(base, "workbook-previews");
const TODAY = new Date().toISOString().slice(0, 10);

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
  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }
  return rows.filter((r) => r.some((v) => v !== ""));
}

function colName(index) {
  let n = index + 1;
  let name = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    name = String.fromCharCode(65 + rem) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
}

function clipped(matrix, maxRows = 5000, maxCols = 35) {
  return matrix.slice(0, maxRows).map((row) => row.slice(0, maxCols).map((v) => String(v ?? "")));
}

const recipientTextReplacements = [
  [/Appfigures request pack/gi, "Appfigures data request"],
  [/request pack/gi, "data request"],
  [/hard claims/gi, "source-linked statements"],
  [/hard claim/gi, "source-linked statement"],
  [/Source-mapped/gi, "Source-linked"],
  [/Source mapped/gi, "Source linked"],
  [/claim-source/gi, "source-context"],
  [/Decision gates/gi, "Open input notes"],
  [/blocked_reason/gi, "open_reason"],
  [/blocked_claims/gi, "pending_statements"],
  [/Blocked until/gi, "Pending until"],
  [/Blocked by/gi, "Pending because"],
  [/Blocked \//gi, "Pending /"],
  [/blocked until/gi, "pending until"],
  [/blocked by/gi, "pending because"],
  [/\bBlocked\b/g, "Pending"],
  [/\bblocked\b/g, "pending"],
];

function sanitizeRecipientCell(value) {
  return recipientTextReplacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), String(value ?? ""));
}

function sanitizeRecipientMatrix(matrix) {
  return matrix.map((row) => row.map(sanitizeRecipientCell));
}

async function readCsvMatrix(file) {
  const text = await fs.readFile(path.join(handoff, file), "utf8");
  return sanitizeRecipientMatrix(clipped(parseCsv(text)));
}

function matrixToObjects(matrix) {
  if (!matrix || matrix.length === 0) return [];
  const headers = matrix[0].map((header) => String(header || "").trim());
  return matrix.slice(1).map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""])));
}

function firstNonEmpty(...values) {
  return values.map((value) => String(value ?? "").trim()).find(Boolean) || "";
}

function appProxyNotes(appMatrix) {
  const rows = matrixToObjects(appMatrix);
  const notes = new Map();
  for (const row of rows) {
    const player = String(row.player || "").trim();
    if (!player) continue;
    const parts = [];
    const rating = String(row.rating || "").trim();
    const reviews = String(row.review_count || "").trim();
    if (rating || reviews) {
      parts.push(`${row.app_name || player}: ${rating || "rating pending"}, ${reviews || "review count pending"}`);
    }
    const note = String(row.public_proxy_notes || "").trim();
    if (note) parts.push(note);
    if (!parts.length) continue;
    const existing = notes.get(player) || [];
    for (const part of parts) {
      if (!existing.includes(part)) existing.push(part);
    }
    notes.set(player, existing);
  }
  return notes;
}

function onePagerMatrix(profileMatrix, proxyByPlayer = new Map()) {
  const rows = matrixToObjects(profileMatrix);
  const header = [
    "Player",
    "Category",
    "Influence Role",
    "Description",
    "Size / Reach",
    "Public Size / Reach Proxy",
    "Ownership / Investors",
    "AI / Recent Initiatives",
    "Last 24 Months",
    "Ecosystem Position",
    "Relationship With Yousician",
    "Strategic Assessment",
    "Performance Data Status",
    "Next Validation Step",
    "Source Confidence",
  ];
  return [
    header,
    ...rows.map((row) => {
      const proxy = (proxyByPlayer.get(row.player) || []).join(" | ");
      return [
        row.player,
        row.brief_category,
        row.influence_role,
        row.what_they_are,
        row.estimated_size_reach,
        proxy || "No public app-store proxy attached; use Appfigures or source validation before performance comparison.",
        row.ownership_investors,
        row.ai_or_recent_initiatives,
        row.last_24m_news,
        firstNonEmpty(row.influence_role, row.brief_category),
        firstNonEmpty(row.relationship_completion_status, "Internal relationship status not yet captured in this dataset. To be completed by Yousician."),
        row.why_they_likely_matter,
        firstNonEmpty(row.performance_data_status, "Use public context only unless credentialed performance data is imported."),
        firstNonEmpty(row.next_validation_step, "Validate source, performance and relationship fields before broader use."),
        row.source_confidence,
      ];
    }),
  ];
}

const internalContextMatrix = [
  ["Context Area", "Internal Signal", "Strategic Implication", "Source Note"],
  [
    "Yousician users",
    "Yousician users are usually early in their guitar journey and want a guided, personalised path, timely feedback and eventually their favourite songs.",
    "Direct learning benchmarks should be read through beginner guidance, feedback, motivation and song relevance, not only feature breadth.",
    "Static Yousician user/market context by User Insights; last reviewed 2026-06-04; live Confluence was not queried in this packaging pass.",
  ],
  [
    "GuitarTuna users",
    "GuitarTuna users are more self-guided. They want independence, songs, chords, tools and optional feedback rather than a fixed path.",
    "The ecosystem map needs song, chord, tab, utility and self-guided practice surfaces alongside formal learning apps.",
    "Grounded in static Yousician users and market context.",
  ],
  [
    "Song-led jobs",
    "Across skill levels, important guitar jobs cluster around learning chords, transitions, song sections, strumming patterns and playing songs from memory.",
    "Ultimate Guitar, Songsterr, MuseScore, Chordify, YouTube and AI song-practice tools are core habit surfaces.",
    "Grounded in static Yousician users and market context.",
  ],
  [
    "Starting and restarting",
    "People start or restart because of love of music, feel-good free time, the guitar dream, access to a guitar, or emotional life moments.",
    "Hardware brands, retailers, creators and emotional beginner UX are strategically relevant because they shape re-entry before app choice.",
    "Grounded in static Yousician users and market context.",
  ],
  [
    "Market awareness",
    "Internal market context says the category has low overall awareness, lacks strong brands and lacks a clear leader beyond YouTube as a default free source.",
    "The opportunity is not only to beat app competitors; it is also to make the category easier, less intimidating and more clearly branded.",
    "Grounded in static Yousician users and market context.",
  ],
  [
    "Known competitor read",
    "Simply Guitar is strong on emotional UX and song-focused courses; Ultimate Guitar owns a large chord/tab library but can feel cluttered; YouTube is free but uncurated.",
    "Success should be read as a mix of emotional onboarding, repertoire access, guidance quality and reduced user research burden.",
    "Grounded in static Yousician users and market context.",
  ],
];

function writeSheet(workbook, sheetName, matrix, options = {}) {
  const sheet = workbook.worksheets.add(sheetName);
  sheet.showGridLines = false;
  const rows = matrix.length;
  const cols = Math.max(...matrix.map((r) => r.length));
  const end = `${colName(cols - 1)}${rows}`;
  sheet.getRange(`A1:${end}`).values = matrix.map((r) => {
    const padded = [...r];
    while (padded.length < cols) padded.push("");
    return padded;
  });
  sheet.getRange(`A1:${colName(cols - 1)}1`).format = {
    fill: { color: "#10231F" },
    font: { color: "#FFFFFF", bold: true },
    wrapText: true,
  };
  sheet.getRange(`A1:${end}`).format.borders = { preset: "all", style: "thin", color: "#D9DFD8" };
  sheet.getRange(`A1:${end}`).format.wrapText = true;
  sheet.freezePanes.freezeRows(1);
  for (let c = 0; c < cols; c += 1) {
    const maxLen = Math.max(...matrix.slice(0, 80).map((r) => String(r[c] || "").length));
    const px = Math.max(90, Math.min(options.wide ? 260 : 190, maxLen * 7 + 20));
    sheet.getRange(`${colName(c)}:${colName(c)}`).format.columnWidthPx = px;
  }
  return sheet;
}

const sheetFiles = [
  ["Players", "players_v3.csv"],
  ["Key Players", "key_players_v3.csv"],
  ["Market Moves", "market_moves_24m_v3.csv"],
  ["Direct Learning Apps", "direct_music_learning_apps_snapshot_v3_9.csv"],
  ["Relationships", "relationships_template_v3.csv"],
  ["Data Gaps", "remaining_data_gaps_v3.csv"],
];

const matrices = {};
for (const [name, file] of sheetFiles) {
  matrices[name] = await readCsvMatrix(file);
}
const appfiguresRowsMatrix = await readCsvMatrix("appfigures-performance-export-integrated-v3.csv");
matrices["One Pagers"] = onePagerMatrix(await readCsvMatrix("key_player_profiles_final_v3_9.csv"), appProxyNotes(appfiguresRowsMatrix));
matrices["Internal Context"] = internalContextMatrix;

const supportMatrices = {
  "Curated Moves": await readCsvMatrix("market_moves_24m_curated_v3_2.csv"),
  "Teachers Schools": await readCsvMatrix("teachers_schools_education_v3.csv"),
  Influencers: await readCsvMatrix("influencers_creators_v3.csv"),
  Investors: await readCsvMatrix("investors_v3.csv"),
  "Media Culture": await readCsvMatrix("media_cultural_drivers_v3.csv"),
  Awards: await readCsvMatrix("awards_v3.csv"),
  Funding: await readCsvMatrix("funding_v3.csv"),
  "Appfigures Rows": appfiguresRowsMatrix,
  "Appfigures Request": await readCsvMatrix("appfigures_request_pack_v3_2.csv"),
};

function openReviewQueueCount(matrix) {
  return reviewQueueCounts(matrix).sourceReview;
}

function reviewQueueCounts(matrix) {
  if (!matrix || matrix.length < 2) return { sourceReview: 0, refreshRetry: 0, openTotal: 0 };
  const headers = matrix[0].map((h) => String(h || ""));
  const statusIdx = headers.indexOf("review_status");
  const notesIdx = headers.indexOf("notes");
  const currentStatusIdx = headers.indexOf("current_status");
  const suggestedActionIdx = headers.indexOf("suggested_action");
  if (statusIdx < 0) return { sourceReview: Math.max(0, matrix.length - 1), refreshRetry: 0, openTotal: Math.max(0, matrix.length - 1) };
  const openRows = matrix.slice(1).filter((row) => {
    const status = String(row[statusIdx] || "").trim().toLowerCase();
    return status === "" || status === "open" || status === "pending human review";
  });
  const refreshRetry = openRows.filter((row) => {
    const text = [
      notesIdx >= 0 ? row[notesIdx] : "",
      currentStatusIdx >= 0 ? row[currentStatusIdx] : "",
      suggestedActionIdx >= 0 ? row[suggestedActionIdx] : "",
    ].join(" ").toLowerCase();
    return text.includes("urlopen error") || text.includes("http error") || String(currentStatusIdx >= 0 ? row[currentStatusIdx] : "").trim().toUpperCase() === "ERROR";
  }).length;
  return { sourceReview: openRows.length - refreshRetry, refreshRetry, openTotal: openRows.length };
}

const workbook = Workbook.create();
const summary = workbook.worksheets.add("Summary");
summary.showGridLines = false;
summary.getRange("A1:H1").values = [["Yousician Strategic Environment Database", "", "", "", "", "", "", ""]];
summary.mergeCells("A1:H1");
summary.getRange("A1:H1").format = {
  fill: { color: "#10231F" },
  font: { color: "#FFFFFF", bold: true, size: 18 },
};
summary.getRange("A3:B20").values = [
  ["Package rebuilt", TODAY],
  ["Tracked players", String(matrices.Players.length - 1)],
  ["Key players", String(matrices["Key Players"].length - 1)],
  ["One-pager profiles", String(matrices["One Pagers"].length - 1)],
  ["Internal context rows", String(matrices["Internal Context"].length - 1)],
  ["Market moves", String(matrices["Market Moves"].length - 1)],
  ["Direct learning apps", String(matrices["Direct Learning Apps"].length - 1)],
  ["Relationship rows", String(matrices.Relationships.length - 1)],
  ["Remaining data gaps", String(matrices["Data Gaps"].length - 1)],
  ["Teachers / schools tracked", String(supportMatrices["Teachers Schools"].length - 1)],
  ["Influencers / creators tracked", String(supportMatrices.Influencers.length - 1)],
  ["Investors tracked", String(supportMatrices.Investors.length - 1)],
  ["Media / culture drivers tracked", String(supportMatrices["Media Culture"].length - 1)],
  ["Awards tracked", String(supportMatrices.Awards.length - 1)],
  ["Funding sources tracked", String(supportMatrices.Funding.length - 1)],
  ["Appfigures status", "Pending credentialed export unless explicitly populated"],
  ["Appfigures data-request rows", String(supportMatrices["Appfigures Request"].length - 1)],
  ["Workbook scope", "Recipient-facing sheets only; one-pager profiles and public size/reach proxies included; source-audit and refresh appendices available on request"],
];
summary.getRange("A22:H25").values = [
  ["Use Notes", "", "", "", "", "", "", ""],
  ["This workbook is the database companion to the final PDF report. It keeps the first-read tabs focused on the market database, Chris-style key-player one-pagers and the few fields that require credentialed or internal input.", "", "", "", "", "", "", ""],
  ["Appfigures revenue, downloads, ranks, country mix and trends are not invented. Public app-store or YouTube signals are marked as public proxies.", "", "", "", "", "", "", ""],
  ["Internal Context is a static User Insights grounding snapshot, not live Confluence extraction. Relationship fields are deliberately left as internal Yousician fields until Yousician confirms them.", "", "", "", "", "", "", ""],
];
summary.mergeCells("A22:H22");
summary.mergeCells("A23:H23");
summary.mergeCells("A24:H24");
summary.mergeCells("A25:H25");
summary.getRange("A22:H22").format = { fill: { color: "#00D292" }, font: { bold: true, color: "#10231F" } };
summary.getRange("A3:B20").format.borders = { preset: "all", style: "thin", color: "#D9DFD8" };
summary.getRange("A3:A20").format = { fill: { color: "#EEF6EF" }, font: { bold: true } };
summary.getRange("A23:H25").format = { fill: { color: "#FFFFFF" }, wrapText: true };
summary.getRange("A:A").format.columnWidthPx = 230;
summary.getRange("B:B").format.columnWidthPx = 360;
summary.getRange("C:H").format.columnWidthPx = 90;

for (const name of ["Players", "Key Players", "One Pagers", "Internal Context", "Market Moves", "Direct Learning Apps", "Relationships", "Data Gaps"]) {
  writeSheet(workbook, name, matrices[name], {
    wide: ["Players", "One Pagers", "Internal Context", "Market Moves", "Direct Learning Apps", "Relationships"].includes(name),
  });
}

await fs.mkdir(previewDir, { recursive: true });
for (const name of ["Summary", "Players", "Key Players", "One Pagers", "Internal Context", "Market Moves", "Direct Learning Apps", "Relationships", "Data Gaps"]) {
  const png = await workbook.render({ sheetName: name, range: "A1:H22", scale: 1, format: "png" });
  const bytes = new Uint8Array(await png.arrayBuffer());
  await fs.writeFile(path.join(previewDir, `${name.replaceAll(" ", "_")}.png`), bytes);
}

const inspect = await workbook.inspect({ kind: "table", range: "Summary!A1:H25", include: "values", tableMaxRows: 26, tableMaxCols: 8 });
console.log(inspect.ndjson);
const errors = await workbook.inspect({ kind: "match", searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A", options: { useRegex: true, maxResults: 300 }, summary: "final formula error scan" });
console.log(errors.ndjson);

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
await fs.mkdir(path.dirname(deliverableOutputPath), { recursive: true });
await fs.copyFile(outputPath, deliverableOutputPath);
console.log(outputPath);
