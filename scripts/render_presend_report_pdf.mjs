import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const name = "Yousician Strategic Environment Mapping - Market Landscape Report v3.9";
const htmlPath = path.join(base, "report", `${name}.html`);
const pdfPath = path.join(base, "report", `${name}.pdf`);
const deliverablesPath = path.join(base, "deliverables", `${name}.pdf`);

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1680, height: 1188 }, deviceScaleFactor: 1 });
await page.goto(`file://${path.resolve(htmlPath)}`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: pdfPath,
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false,
});
await browser.close();

const python = process.env.PYTHON_BIN || "/Users/roman.althof/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3";
const cleanup = spawnSync(
  python,
  [
    "-c",
    `
from pathlib import Path
from pypdf import PdfReader, PdfWriter
pdf = Path(${JSON.stringify(pdfPath)})
reader = PdfReader(str(pdf))
writer = PdfWriter()
removed = []
for i, page in enumerate(reader.pages, 1):
    text = (page.extract_text() or '').strip()
    if len(text.split()) == 0:
        removed.append(i)
        continue
    writer.add_page(page)
if removed:
    tmp = pdf.with_suffix('.clean.pdf')
    with tmp.open('wb') as f:
        writer.write(f)
    tmp.replace(pdf)
print({"removed_blank_pages": removed, "pages": len(writer.pages)})
`,
  ],
  { encoding: "utf8" },
);
if (cleanup.status !== 0) {
  throw new Error(cleanup.stderr || cleanup.stdout || "Failed to remove blank PDF pages");
}
if (cleanup.stdout.trim()) {
  console.log(cleanup.stdout.trim());
}

await fs.mkdir(path.dirname(deliverablesPath), { recursive: true });
await fs.copyFile(pdfPath, deliverablesPath);
console.log(pdfPath);
