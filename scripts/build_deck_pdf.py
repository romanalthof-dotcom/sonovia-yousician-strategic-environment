#!/usr/bin/env python3
"""Create a PDF reading copy of the executive deck from rendered slide previews."""

from __future__ import annotations

from pathlib import Path
import shutil

from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


BASE = Path(__file__).resolve().parents[1]
ROOT = BASE.parents[1]
VERSION = "v3.9"
PREVIEW = ROOT / "outputs" / "manual-yousician-exec" / "presentations" / "executive-deck" / "preview"
OUT = ROOT / "v3.9-submission-deliverables" / f"Yousician Strategic Environment Executive Summary {VERSION}.pdf"
DELIVERABLE_COPY = BASE / "deliverables" / OUT.name


def main() -> None:
    slides = sorted(PREVIEW.glob("slide-*.png"))
    if not slides:
        raise FileNotFoundError(f"No rendered slide PNGs found in {PREVIEW}")

    OUT.parent.mkdir(parents=True, exist_ok=True)
    pdf = canvas.Canvas(str(OUT), pagesize=(1280, 720))
    for path in slides:
        pdf.drawImage(ImageReader(str(path)), 0, 0, width=1280, height=720, preserveAspectRatio=True, mask="auto")
        pdf.showPage()
    pdf.save()
    DELIVERABLE_COPY.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(OUT, DELIVERABLE_COPY)
    print(OUT)


if __name__ == "__main__":
    main()
