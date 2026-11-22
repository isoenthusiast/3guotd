#!/usr/bin/env python3
"""Fetch a URL and save its extracted text as a capture file.

Usage:
  capture.py <url> <slug> <method> <title>
  capture.py --pdf <url> <slug> <method> <title>

Writes to /srv/orrery/workspaces/3guotd/references/mobile-td-design/sources/pacing-<n>-<slug>.md
The numeric prefix is assigned automatically by scanning existing files for the
next free index.
"""
import html
import os
import re
import subprocess
import sys

OUT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), os.pardir, "sources")
RETRIEVED = "2026-11-22"


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


UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0.0.0 Safari/537.36")


def fetch(url: str) -> bytes:
    r = subprocess.run(
        ["curl", "-sSL", "--max-time", "90",
         "-A", UA,
         "-H", "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
         "-H", "Accept-Language: en-US,en;q=0.9",
         "-H", "Accept-Encoding: gzip, deflate, br",
         "--compressed",
         url],
        capture_output=True, check=True,
    )
    return r.stdout


def html_to_text(raw: bytes) -> str:
    s = raw.decode("utf-8", "replace")
    s = re.sub(r"(?is)<script.*?</script>", " ", s)
    s = re.sub(r"(?is)<style.*?</style>", " ", s)
    s = re.sub(r"(?is)<noscript.*?</noscript>", " ", s)
    # keep some structure
    s = re.sub(r"(?i)<br\s*/?>", "\n", s)
    s = re.sub(r"(?i)</(p|div|li|h[1-6]|tr|section)>", "\n", s)
    s = re.sub(r"(?i)<li[^>]*>", "\n- ", s)
    s = re.sub(r"(?s)<[^>]+>", " ", s)
    s = html.unescape(s)
    s = re.sub(r"[ \t\xa0]+", " ", s)
    s = re.sub(r"\n\s*\n\s*\n+", "\n\n", s)
    lines = [ln.strip() for ln in s.splitlines()]
    return "\n".join(ln for ln in lines if ln)


def pdf_to_text(raw: bytes) -> str:
    import io
    import pypdf
    reader = pypdf.PdfReader(io.BytesIO(raw))
    pages = []
    for i, page in enumerate(reader.pages):
        pages.append(f"\n--- [pdf page {i + 1}] ---\n" + (page.extract_text() or ""))
    return "\n".join(pages)


def main() -> None:
    args = sys.argv[1:]
    is_pdf = False
    cached = None
    if args and args[0] == "--pdf":
        is_pdf = True
        args = args[1:]
    elif args and args[0] == "--from-cache":
        cached = args[1]
        args = args[2:]
    url, slug, method, title = args[0], args[1], args[2], args[3]
    if cached:
        text = open(cached, encoding="utf-8", errors="replace").read()
        # cache files may have a trailing truncation notice; strip it
        text = re.sub(r"\n─+ \[\s*TRUNCATED\s*\] ─+\n.*$", "", text, flags=re.S)
        text = re.sub(r"\n─+ Showing [\d,]+ chars.*?$", "", text, flags=re.S)
    else:
        raw = fetch(url)
        text = pdf_to_text(raw) if is_pdf else html_to_text(raw)
    idx = next_index()
    path = os.path.join(OUT_DIR, f"pacing-{idx:02d}-{slug}.md")
    header = f"URL: {url}\nTITLE: {title}\nRETRIEVED: {RETRIEVED}\nMETHOD: {method}\n"
    with open(path, "w", encoding="utf-8") as fh:
        fh.write(header)
        fh.write("\n")
        fh.write(text.strip())
        fh.write("\n")
    print(f"WROTE {path} chars={len(text)}")


if __name__ == "__main__":
    main()
