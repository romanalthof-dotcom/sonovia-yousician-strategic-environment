# Yousician Strategic Environment Mapping - Final v3.4

Open first:

1. `deliverables/Yousician Strategic Environment Executive Summary v3.4.pptx`
2. `deliverables/Yousician Strategic Environment Mapping - Final Report v3.4.pdf`
3. `deliverables/Yousician Strategic Environment Database v3.4.xlsx`
4. `index.html` for the executive dashboard / secondary research surface
5. `handoff/executive_top_10_actor_ranked_v3_4.csv`
6. `handoff/executive_decision_gates_v3_4.csv`
7. `handoff/review_queue_v3.csv`
8. `handoff/source_audit_v3.csv`
9. `BACKEND_README.md` for the local backend workflow

Important status:

- This is a semi-automated living system, not a fully autonomous source of truth.
- The dashboard now includes a local backend when started with `scripts/start_backend.sh`.
- Appfigures metrics are pending unless imported from a credentialed export.
- Public source changes go to a review queue before being promoted into executive-/Board-facing claims.
- The latest refresh surfaced open review checks; treat them as approval gates, not as automatically accepted report content.
- Internal Yousician relationship fields remain to be completed by Yousician.

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
