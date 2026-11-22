#!/usr/bin/env python3
"""Locate a web_extract cache file for a URL by scanning the cache dir.

Usage: find-cache.py <url-substring> [must-contain-substring]
Prints the path of the best matching cache file.
"""
import os
import re
import sys

CACHE = "/srv/orrery/agents/orchestrator/state/cache/web"


def main() -> None:
    needle = sys.argv[1]
    must = sys.argv[2] if len(sys.argv) > 2 else None
    best = []
    for name in os.listdir(CACHE):
        if not name.endswith(".md"):
            continue
        path = os.path.join(CACHE, name)
        try:
            with open(path, encoding="utf-8", errors="replace") as fh:
                head = fh.read(3000)
        except OSError:
            continue
        if needle not in head:
            continue
        score = 1
        if must and must in head:
            score = 2
        best.append((score, os.path.getsize(path), path))
    best.sort(key=lambda t: (-t[0], -t[1]))
    for s, sz, p in best[:5]:
        print(f"score={s} size={sz} {p}")
    if not best:
        print("NO MATCH")
        sys.exit(1)


if __name__ == "__main__":
    main()
