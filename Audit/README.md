# Audit

Read [SimaYi’s first review](2026-11-21-simayi.md) for the original findings and test evidence. The [remediation record](2026-11-21-remediation.md) explains the fixes and their verification. Use `gameflow.db` as the current record of status, learnings, root causes, preventive methods, and actions taken. [schema.sql](schema.sql) defines the database structure.

See [SimaYi’s quick UX review](2026-11-21-ux-simayi.md) for the current playability findings.

From the checkout root, list open work:

```sh
sqlite3 -header -column Audit/gameflow.db \
  "SELECT id, severity, finding FROM findings WHERE status <> 'verified' ORDER BY id;"
```

For each review, save a dated Markdown report and add its ID to `reviews`. Add one row per finding or acceptance gap. Label a root cause as suspected if the evidence is incomplete. Record actions actually performed in `actions`, including who acted and how the result was checked. Keep proposed prevention in `findings.preventive_method`.

When taking action, use a transaction and enable foreign keys with `PRAGMA foreign_keys = ON;`. Append an action row and update the finding status together. Mark a finding `verified` once the acceptance check passes and evidence is recorded. Use the learnings and preventive methods when planning the next change.
