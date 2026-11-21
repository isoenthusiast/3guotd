PRAGMA foreign_keys = ON;
BEGIN;

CREATE TABLE reviews (
    id TEXT PRIMARY KEY,
    reviewed_on TEXT NOT NULL,
    auditor TEXT NOT NULL,
    scope TEXT NOT NULL,
    evidence_file TEXT NOT NULL
);

CREATE TABLE findings (
    id TEXT PRIMARY KEY,
    review_id TEXT NOT NULL REFERENCES reviews(id),
    severity TEXT NOT NULL CHECK (severity IN ('high', 'medium', 'low', 'acceptance-gap')),
    finding TEXT NOT NULL,
    learning TEXT NOT NULL,
    root_cause TEXT NOT NULL,
    preventive_method TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in-progress', 'verified'))
);

CREATE TABLE actions (
    id INTEGER PRIMARY KEY,
    finding_id TEXT NOT NULL REFERENCES findings(id),
    recorded_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    recorded_by TEXT NOT NULL,
    action_taken TEXT NOT NULL,
    verification TEXT
);

CREATE INDEX actions_by_finding ON actions(finding_id, recorded_at);

COMMIT;
