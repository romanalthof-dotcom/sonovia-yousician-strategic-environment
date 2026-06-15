import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const deliverables = path.join(base, "deliverables");
const url = process.env.DASHBOARD_URL || "http://127.0.0.1:8877/";

const variants = [
  ["short", "Yousician Strategic Environment Executive Export - Short v3.9.pdf"],
  ["standard", "Yousician Strategic Environment Executive Export - Standard v3.9.pdf"],
  ["full", "Yousician Strategic Environment Executive Export - Full v3.9.pdf"],
];

await fs.mkdir(deliverables, { recursive: true });

const browser = await chromium.launch({ headless: true });
const outputs = [];

for (const [length, filename] of variants) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await page.goto(`${url}?export=brief&length=${length}`, { waitUntil: "networkidle" });
  await page.waitForSelector(".export-snapshot .export-cover", { state: "visible", timeout: 10000 });
  await page.emulateMedia({ media: "print" });
  const out = path.join(deliverables, filename);
  await page.pdf({
    path: out,
    printBackground: true,
    preferCSSPageSize: false,
    format: "A4",
    landscape: false,
    margin: { top: "12mm", right: "10mm", bottom: "12mm", left: "10mm" },
  });
  outputs.push(out);
  await page.close();
}

await browser.close();
console.log(JSON.stringify({ outputs }, null, 2));
