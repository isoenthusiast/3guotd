# Audit

Read [SimaYi’s first review](2026-11-21-simayi.md) for the original findings and test evidence. The [remediation record](2026-11-21-remediation.md) explains the fixes and their verification. Use `gameflow.db` as the current record of status, learnings, root causes, preventive methods, and actions taken. [schema.sql](schema.sql) defines the database structure.

See [SimaYi’s quick UX review](2026-11-21-ux-simayi.md) for the playability findings and the [UX remediation report](2026-11-21-ux-remediation.md) for verification.

See the [single-page silver round audit](2026-11-21-single-page-audit.md) for the build-view and command-bar findings and evidence.

See the [portrait and multi-wave audit](2026-11-21-portrait-wave-audit.md) for the intermission finding and closure evidence.

See the [retry and purchase feedback audit](2026-11-21-retry-purchase-audit.md) for the retry fix and purchase-preview evidence.

See [SimaYi’s ranked Three Kingdoms UX review](2026-11-21-three-kingdoms-ux-top-10.md) for the latest discovery findings.

See the [AUD-008 remediation evidence](2026-11-21-three-kingdoms-ux-remediation.md) for fixes and outstanding human playtests.

See the [campaign levels audit](2026-11-21-campaign-levels-audit.md) for Yiling and boss-preview verification.

See the [main menu audit](2026-11-21-main-menu-audit.md) for unfinished-run protection and save validation.

See the [Late Han artwork audit](2026-11-21-late-han-artwork.md) for build cues, landmarks and short-screen action trays.

See the [campaign and battlefield remediation](2026-11-22-remediation.md) for the visual and tactical findings.

From the checkout root, list open work:

```sh
sqlite3 -header -column Audit/gameflow.db \
  "SELECT id, severity, finding FROM findings WHERE status <> 'verified' ORDER BY id;"
```

For each review, save a dated Markdown report and add its ID to `reviews`. Add one row per finding or acceptance gap. Label a root cause as suspected if the evidence is incomplete. Record actions actually performed in `actions`, including who acted and how the result was checked. Keep proposed prevention in `findings.preventive_method`.

When taking action, use a transaction and enable foreign keys with `PRAGMA foreign_keys = ON;`. Append an action row and update the finding status together. Mark a finding `verified` once the acceptance check passes and evidence is recorded. Use the learnings and preventive methods when planning the next change.
