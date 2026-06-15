# Yousician Strategic Environment Mapping - Final v3.4

Open first:

1. `deliverables/Yousician Strategic Environment Executive Summary v3.4.pptx`
2. `deliverables/Yousician Strategic Environment Mapping - Final Report v3.4.pdf`
3. `deliverables/Yousician Strategic Environment Executive Export - Standard v3.4.pdf`
4. `deliverables/Yousician Strategic Environment Database v3.4.xlsx`
5. `index.html` for the executive dashboard / secondary research surface
6. `handoff/board_readiness_gate_v3_4.csv`
7. `handoff/claim_source_matrix_v3_2.csv`
8. `handoff/data_quality_check_v3_4.csv`
9. `BACKEND_README.md` for the local backend workflow

Important status:

- This is a brief-first executive package with a review-gated living-system layer.
- It is not a fully autonomous market-intelligence system.
- Appfigures metrics are pending unless imported from a credentialed export/API output.
- The current package has 16 Appfigures request rows and 0 credentialed Appfigures rows populated.
- Public source changes go to a review queue before being promoted into executive-/Board-facing claims.
- Internal Yousician relationship fields remain to be completed by Yousician.
- Short, Standard and Full executive export PDFs are available in `deliverables/` after export rendering.
- The clean recipient package is generated in `00_SEND_TO_RECIPIENT/` and zipped as `Yousician Strategic Environment Final Package v3.4.zip`.

To open the actual local website with backend operations:

```bash
scripts/start_backend.sh
```

Then open `http://127.0.0.1:8877/` and go to Research > Sources.

To run the refresh/rebuild pipeline from the command line:

```bash
scripts/rebuild_all.sh --baseline
scripts/rebuild_all.sh
```
