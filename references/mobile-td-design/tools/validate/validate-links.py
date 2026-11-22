#!/usr/bin/env python3
"""Validate relative markdown links in the 3guotd mobile-td-design deliverable.

Read-only against the repository. Writes nothing.
"""
import os
import re
import sys

REPO = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', '..', '..'))
PACK = os.path.join(REPO, 'references', 'mobile-td-design')

ROOT = REPO
TARGETS = [
    "references/mobile-td-design/README.md",
    "designideas.md",
]

LINK = re.compile(r"\[[^\]]*\]\(([^)]+)\)")

def main() -> int:
    failures = []
    checked = 0
    for target in TARGETS:
        path = os.path.join(ROOT, target)
        base = os.path.dirname(path)
        with open(path, encoding="utf-8") as fh:
            lines = fh.readlines()
        for lineno, line in enumerate(lines, 1):
            for raw in LINK.findall(line):
                link = raw.split("#", 1)[0].strip()
                if not link or link.startswith(("http://", "https://", "mailto:")):
                    continue
                checked += 1
                resolved = os.path.normpath(os.path.join(base, link))
                if not os.path.exists(resolved):
                    failures.append((target, lineno, link, resolved))
    print(f"relative links checked: {checked}")
    if failures:
        print(f"BROKEN: {len(failures)}")
        for target, lineno, link, resolved in failures:
            print(f"  {target}:{lineno} -> {link}  (resolved: {resolved})")
        return 1
    print("BROKEN: 0 — every relative link resolves")
    return 0

if __name__ == "__main__":
    sys.exit(main())
