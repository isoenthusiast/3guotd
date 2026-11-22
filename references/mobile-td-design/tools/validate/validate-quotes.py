#!/usr/bin/env python3
"""Verify every source quotation in the pack appears verbatim in its cited capture.

The quotes are DERIVED from the documents, not hardcoded, so the check follows the
document as it is edited.

For each emphasised quoted span (italic or bold), the nearest capture id in the same
paragraph is taken as the attribution. If the span occurs in that capture it is a
source quotation and is verified verbatim. If it occurs in a *different* capture,
that is a misattribution and fails. Spans that occur in no capture are the
document's own UI strings and demonstration phrases, and are reported as skipped.
"""
import os
import re
import sys

REPO = os.path.abspath(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..")
)
PACK = os.path.join(REPO, "references", "mobile-td-design")
SRC = os.path.join(PACK, "sources")
DOCS = [os.path.join(PACK, "README.md"), os.path.join(PACK, "evidence.md")]

# Quotations taken from project documents rather than from the capture pack.
PROJECT_SOURCES = {
    "distinct corner stakes at buildable sites so the road edge and placement cues read separately":
        "references/late-han-visual-proposal/README.md",
    "keep the 44 px build tiles": "references/tower-defense-ux/README.md",
    "marked empty eligible tile buttons and amended the initial instruction":
        "Audit/gameflow.db",
}


def project_bodies():
    """Text of the project documents a quotation may be taken from."""
    bodies = {}
    for rel in set(PROJECT_SOURCES.values()):
        path = os.path.join(REPO, rel)
        if rel.endswith(".db"):
            import sqlite3

            con = sqlite3.connect(path)
            try:
                chunks = []
                for (table,) in con.execute(
                    "SELECT name FROM sqlite_master WHERE type='table'"
                ):
                    cols = [r[1] for r in con.execute(f"PRAGMA table_info({table})")]
                    for row in con.execute(f"SELECT * FROM {table}"):
                        chunks.extend(str(v) for v in row if isinstance(v, str))
                bodies[rel] = "\n".join(chunks)
            finally:
                con.close()
        else:
            with open(path, encoding="utf-8", errors="replace") as fh:
                bodies[rel] = fh.read()
    return bodies


def norm(s: str) -> str:
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("×", "x").replace("—", "-").replace("–", "-")
    s = s.replace("**", "").replace("*", "").replace("__", "").replace("_", "")
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)
    return re.sub(r"\s+", " ", s).lower()


# ------------------------------------------------------------------ load the pack
captures = {}
for name in sorted(os.listdir(SRC)):
    if not name.endswith(".md"):
        continue
    with open(os.path.join(SRC, name), encoding="utf-8", errors="replace") as fh:
        captures[name] = fh.read()

by_id = {}
for name in captures:
    # capture ids are the first two dash-separated segments: ui-01, pacing-20, ...
    by_id["-".join(name.split("-")[:2])] = name

CAPTURE_ID_RE = re.compile(r"`([a-z]+-\d+)`")
QUOTE_RE = re.compile(r"(?:\*\*|\*)\"((?:[^\"\\]|\\.)*)\"(?:\*\*|\*)")

print("=" * 96)
print("VERBATIM QUOTE VALIDATION (quotes derived from the documents)")
print("=" * 96)

fails = []
oks = 0
skipped = []
misattributed = []
projects = project_bodies()

for doc in DOCS:
    name = os.path.basename(doc)
    with open(doc, encoding="utf-8") as fh:
        text = fh.read()

    for para in re.split(r"\n\s*\n", text):
        ids = [(m.start(), m.group(1)) for m in CAPTURE_ID_RE.finditer(para)]
        for m in QUOTE_RE.finditer(para):
            quote = m.group(1).replace('\\"', '"')
            if len(quote.strip()) < 8:
                continue

            # nearest capture id in this paragraph
            nearest = None
            best = None
            for pos, cid in ids:
                d = min(abs(pos - m.start()), abs(pos - m.end()))
                if best is None or d < best:
                    best, nearest = d, cid

            # Which captures contain this quote? (a trailing full stop is formatting,
            # not content -- the source may not carry it)
            nq = norm(quote).rstrip(". ")
            hits = [fn for fn, body in captures.items() if nq in norm(body)]
            # The attribution is paragraph-scoped: the quote must be verbatim in a
            # capture that the same paragraph actually cites.
            cited = {by_id[cid] for cid in (i[1] for i in ids) if cid in by_id}

            if hits:
                overlap = [h for h in hits if h in cited]
                if overlap:
                    oks += 1
                    print(
                        f"  ok       {name:<12} {overlap[0].split('-')[0]:<12} "
                        f"\"{quote[:52]}...\""
                    )
                else:
                    misattributed.append((name, quote, hits))
                    fails.append(
                        f"UNCITED SOURCE {name}: quote found in {', '.join(hits)} but "
                        f"that capture is not cited in this paragraph -- {quote[:60]}"
                    )
                    print(
                        f"  UNCITED  {name:<12} {'':<12} \"{quote[:52]}...\" "
                        f"(found in {', '.join(hits)})"
                    )
            else:
                # Not in the capture pack. It must be a quotation from a project
                # document; anything else is a fabricated quotation and fails.
                proj = None
                for key, rel in PROJECT_SOURCES.items():
                    if norm(key) == nq:
                        proj = rel
                        break
                if proj and nq in norm(projects.get(proj, "")):
                    oks += 1
                    print(
                        f"  ok       {name:<12} {proj.split('/')[-1][:16]:<16} "
                        f"\"{quote[:48]}...\""
                    )
                else:
                    fails.append(
                        f"NOT A SOURCE {name}: quoted text is in no cited capture and no "
                        f"project document -- {quote[:70]}"
                    )
                    print(f"  FABRICATED {name:<10} {'':<16} \"{quote[:48]}...\"")

print()
print("=" * 96)
print(f"RESULT: {oks} source quotation(s) verified verbatim")
print(f"        {len(skipped)} non-source span(s) skipped, {len(misattributed)} misattribution(s)")
if fails:
    print(f"\n{len(fails)} FAILURES:")
    for f in fails:
        print(f"  - {f}")
    sys.exit(1)
print("Every quotation the documents attribute to a source appears verbatim in it.")
