#!/usr/bin/env python3
"""Capture a YouTube video's subtitles/transcript as a source capture file.

Usage: ytcap.py <url> <slug> <method> <title>
"""
import glob
import os
import re
import subprocess
import sys

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), os.pardir, "sources")
RETRIEVED = "2026-11-22"
TMP = "/srv/orrery/agents/orchestrator/state/cache/scratch/ytsubs"


def next_index() -> int:
    used = set()
    for name in os.listdir(OUT_DIR):
        m = re.match(r"^pacing-(\d+)-", name)
        if m:
            used.add(int(m.group(1)))
    i = 1
    while i in used:
        i += 1
    return i


def main() -> None:
    url, slug, method, title = sys.argv[1:5]
    os.makedirs(TMP, exist_ok=True)
    before = set(glob.glob(f"{TMP}/*"))
    subprocess.run(
        ["yt-dlp", "--skip-download", "--write-auto-subs", "--write-subs",
         "--sub-langs", "en.*", "--sub-format", "vtt", "--no-warnings",
         "-o", f"{TMP}/%(id)s.%(ext)s", url],
        capture_output=True, check=True,
    )
    new = [f for f in glob.glob(f"{TMP}/*") if f not in before and f.endswith(".vtt")]
    if not new:
        print("NO SUBS FOUND")
        sys.exit(1)
    raw = open(new[0], encoding="utf-8", errors="replace").read()
    # strip VTT header, cues, and timestamps -> plain transcript with paragraph breaks
    lines = []
    for line in raw.splitlines():
        line = line.strip()
        if not line or line.startswith("WEBVTT") or line.startswith("Kind:") or \
           line.startswith("Language:") or "-->" in line:
            continue
        line = re.sub(r"<[^>]+>", "", line)
        line = re.sub(r"^\s*\d+:\d\d:\d\d\.\d+\s*$", "", line)
        if line:
            lines.append(line)
    # de-duplicate rolling auto-caption overlap
    out = []
    for ln in lines:
        if out and (ln == out[-1] or ln in out[-1]):
            continue
        out.append(ln)
    text = "\n".join(out)
    idx = next_index()
    path = os.path.join(OUT_DIR, f"pacing-{idx:02d}-{slug}.md")
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(f"URL: {url}\nTITLE: {title}\nRETRIEVED: {RETRIEVED}\nMETHOD: {method}\n\n")
        fh.write(text.strip() + "\n")
    print(f"WROTE {path} chars={len(text)}")


if __name__ == "__main__":
    main()
