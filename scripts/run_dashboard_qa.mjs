import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const deliverables = path.join(base, "deliverables");
const handoff = path.join(base, "handoff");
const url = process.env.DASHBOARD_URL || "http://127.0.0.1:8877/";
const today = "2026-06-11";
const version = "v3_4";

const viewports = [
  { label: "desktop", width: 1440, height: 960 },
  { label: "tablet", width: 900, height: 960 },
  { label: "mobile", width: 390, height: 844 },
];

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

const rows = [];
const browser = await chromium.launch({ headless: true });

for (const viewport of viewports) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const messages = [];
  const failedRequests = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      messages.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.url()} ${request.failure()?.errorText || ""}`.trim());
  });

  await page.goto(url, { waitUntil: "networkidle" });
  await page.locator("button.mode-button", { hasText: "Research" }).click();
  await page.locator("button.research-tab", { hasText: "Sources" }).click();
  await page.waitForSelector(".data-quality-card", { state: "visible", timeout: 10000 });

  const result = await page.evaluate(() => {
    const card = document.querySelector(".data-quality-card");
    const cardRect = card?.getBoundingClientRect();
    const cardVisible = Boolean(
      card &&
        cardRect.width > 0 &&
        cardRect.height > 0 &&
        getComputedStyle(card).display !== "none" &&
        getComputedStyle(card).visibility !== "hidden"
    );
    const docOverflowPx = Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const overflowCandidates = [...document.querySelectorAll("body *")].filter((el) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      const style = getComputedStyle(el);
      return el.scrollWidth - el.clientWidth > 2 && style.overflowX === "visible";
    });
    const cardOverflowCandidates = [...document.querySelectorAll(".data-quality-card, .data-quality-card *")].filter((el) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      const style = getComputedStyle(el);
      return el.scrollWidth - el.clientWidth > 2 && style.overflowX === "visible";
    });
    const cardText = card?.textContent?.replace(/\s+/g, " ").trim() || "";
    return {
      cardVisible,
      docOverflowPx,
      overflowCount: overflowCandidates.length,
      cardOverflowCount: cardOverflowCandidates.length,
      cardTextIncludesAppfiguresGate: cardText.includes("Credentialed Appfigures gate"),
      cardTextIncludesRelationshipGate: cardText.includes("Relationship completion layer"),
    };
  });

  const status =
    result.cardVisible &&
    result.docOverflowPx === 0 &&
    result.cardOverflowCount === 0 &&
    result.cardTextIncludesAppfiguresGate &&
    result.cardTextIncludesRelationshipGate &&
    messages.length === 0 &&
    failedRequests.length === 0
      ? "passed"
      : "warning";

  const screenshotName = `dashboard_data_quality_${viewport.label}_${version}.png`;
  await page.screenshot({ path: path.join(deliverables, screenshotName), fullPage: false });
  rows.push({
    check_id: `data_quality_${viewport.label}`,
    viewport: viewport.label,
    width: viewport.width,
    height: viewport.height,
    status,
    data_quality_card_visible: result.cardVisible ? "Yes" : "No",
    document_overflow_px: result.docOverflowPx,
    overflow_candidate_count: result.overflowCount,
    data_quality_card_overflow_count: result.cardOverflowCount,
    console_issue_count: messages.length,
    failed_request_count: failedRequests.length,
    appfigures_gate_visible: result.cardTextIncludesAppfiguresGate ? "Yes" : "No",
    relationship_gate_visible: result.cardTextIncludesRelationshipGate ? "Yes" : "No",
    screenshot: `deliverables/${screenshotName}`,
    notes: [...messages, ...failedRequests].join(" | "),
    last_checked_date: today,
  });

  await page.close();
}

await browser.close();

const fields = [
  "check_id",
  "viewport",
  "width",
  "height",
  "status",
  "data_quality_card_visible",
  "document_overflow_px",
  "overflow_candidate_count",
  "data_quality_card_overflow_count",
  "console_issue_count",
  "failed_request_count",
  "appfigures_gate_visible",
  "relationship_gate_visible",
  "screenshot",
  "notes",
  "last_checked_date",
];
const csv = [fields.join(","), ...rows.map((row) => fields.map((field) => csvEscape(row[field])).join(","))].join("\n");
await fs.writeFile(path.join(handoff, `dashboard_data_quality_layout_qa_${version}.csv`), `${csv}\n`, "utf-8");
console.log(JSON.stringify({ rows, output: `handoff/dashboard_data_quality_layout_qa_${version}.csv` }, null, 2));
