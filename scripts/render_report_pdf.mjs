import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(base, "report", "Yousician Strategic Environment Mapping - Final Report v3.4.html");
const pdfPath = path.join(base, "report", "Yousician Strategic Environment Mapping - Final Report v3.4.pdf");

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1100 }, deviceScaleFactor: 1 });
await page.goto(`file://${path.resolve(htmlPath)}`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: pdfPath,
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false,
});
await browser.close();
console.log(pdfPath);
