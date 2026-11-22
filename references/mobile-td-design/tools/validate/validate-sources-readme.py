#!/usr/bin/env python3
"""Validate the sources/README.md stream table against the actual files on disk.

The README states a count per stream prefix. This recomputes them and fails if
the table drifted.
"""
import os
import re
import sys

REPO = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
PACK = os.path.join(REPO, 'references', 'mobile-td-design')
BASE = os.path.join(PACK, 'sources')


README = os.path.join(BASE, "README.md")

files = [f for f in os.listdir(BASE) if f.endswith(".md") and f != "README.md"]
counts = {}
for f in files:
    prefix = f.split("-", 1)[0]
    counts[prefix] = counts.get(prefix, 0) + 1

text = open(README, encoding="utf-8").read()
rows = re.findall(r"^\|\s*`([a-z]+)-\*`\s*\|[^|]*\|\s*(\d+)\s*\|", text, re.M)
total_row = re.search(r"\*\*Total\*\*\s*\|\s*\|\s*\*\*(\d+)\*\*", text)

failures = []
for prefix, stated in rows:
    actual = counts.get(prefix, 0)
    ok = int(stated) == actual
    print(f"  {'ok  ' if ok else 'FAIL'} {prefix:10} stated={stated:>4}  actual={actual:>4}")
    if not ok:
        failures.append(f"{prefix}: README says {stated}, disk has {actual}")

stated_total = int(total_row.group(1)) if total_row else None
actual_total = len(files)
ok = stated_total == actual_total
print(f"  {'ok  ' if ok else 'FAIL'} {'TOTAL':10} stated={stated_total:>4}  actual={actual_total:>4}")
if not ok:
    failures.append(f"total: README says {stated_total}, disk has {actual_total}")

unknown = set(counts) - {p for p, _ in rows}
if unknown:
    failures.append(f"streams on disk with no README row: {sorted(unknown)}")
    print(f"  FAIL streams on disk with no README row: {sorted(unknown)}")

# every capture must carry the four-line header
bad_header = []
for f in files:
    head = open(os.path.join(BASE, f), encoding="utf-8", errors="replace").read(400)
    for key in ("URL:", "TITLE:", "RETRIEVED:", "METHOD:"):
        if key not in head:
            bad_header.append(f"{f} missing {key}")
            break
if bad_header:
    failures.append(f"{len(bad_header)} capture(s) with a malformed header")
    for b in bad_header[:10]:
        print(f"  FAIL {b}")
else:
    print(f"  ok   all {actual_total} captures carry URL/TITLE/RETRIEVED/METHOD headers")

print()
if failures:
    print(f"RESULT: FAIL — {len(failures)} problem(s)")
    for f in failures:
        print(f"  - {f}")
    sys.exit(1)
print(f"RESULT: {len(rows)} stream counts + total + headers all consistent ({actual_total} captures)")
