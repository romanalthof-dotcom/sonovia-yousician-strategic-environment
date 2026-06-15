# Airtable Setup

Use this folder as the Airtable handoff layer for the dashboard.

## Import Order

1. Import `airtable-categories.csv` into a `Categories` table.
2. Import `airtable-players.csv` into a `Players` table.
3. Import `airtable-sources.csv` into a `Sources` table.
4. Import `airtable-player-source-links.csv` into a junction table and link it to Players and Sources.
5. Import `airtable-strategic-moves.csv` for recent market moves.
6. Import `relationship-validation-template.csv` for Yousician internal owner validation.
7. Import `research-backlog.csv` and `source-quality-backlog.csv` as operating queues.

## Recommended Views

- Board-ready key players: key_player checked, no High-priority backlog tasks, claim caveats resolved.
- Live data queue: requires_credentialed_data checked.
- Internal validation: relationship rows where current_status is Needs Yousician confirmation.
- Signals only: is_signal_only checked.
- AI/disruption: ai_score >= 4 or category_id = ai.

## Updating the Website

For the prototype, edit `data/live-overrides.json` or replace it with `handoff/live-overrides-template.json` after filling values.
For production, Airtable should serve or export the same fields into the live override schema.

