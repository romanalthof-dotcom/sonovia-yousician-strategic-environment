import { chromium } from "playwright";

const url = process.env.DASHBOARD_URL || "http://127.0.0.1:8877/";
const variants = ["short", "standard", "full"];
const browser = await chromium.launch({ headless: true });
const rows = [];

for (const variant of variants) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 920 }, deviceScaleFactor: 1 });
  const consoleIssues = [];
  const failedRequests = [];
  page.on("console", (message) => {
    if (["error", "warning"].includes(message.type())) {
      consoleIssues.push(`${message.type()}: ${message.text()}`);
    }
  });
  page.on("requestfailed", (request) => {
    failedRequests.push(`${request.url()} ${request.failure()?.errorText || ""}`.trim());
  });
  await page.goto(`${url}?export=brief&length=${variant}`, { waitUntil: "networkidle" });
  await page.waitForSelector(".export-snapshot .export-cover", { state: "visible", timeout: 10000 });
  const result = await page.evaluate(() => {
    const sectionTitles = [...document.querySelectorAll(".export-section h2")].map((node) =>
      node.textContent.trim()
    );
    const docOverflowPx = Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth);
    const overflowCandidates = [...document.querySelectorAll(".export-snapshot *")].filter((el) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return false;
      const style = getComputedStyle(el);
      return el.scrollWidth - el.clientWidth > 2 && style.overflowX === "visible";
    });
    return {
      bodyLength: document.body.dataset.exportLength,
      activeLabel: document.querySelector(".export-length-options button.active strong")?.textContent?.trim() || "",
      sectionCount: sectionTitles.length,
      sectionTitles,
      keyCards: document.querySelectorAll(".export-key-card").length,
      databaseCards: document.querySelectorAll(".export-database-card").length,
      relationshipCards: document.querySelectorAll(".export-relationship-card").length,
      textHasLength: document.body.innerText.includes("Report length"),
      textHasNoPersonSpecificExport: !/Chris export|Chris-facing|Chris-exact|Chris-first/i.test(document.body.innerText),
      docOverflowPx,
      overflowCandidateCount: overflowCandidates.length,
    };
  });
  rows.push({
    variant,
    consoleIssues: consoleIssues.length,
    failedRequests: failedRequests.length,
    ...result,
  });
  await page.close();
}

await browser.close();
console.log(JSON.stringify({ rows }, null, 2));
