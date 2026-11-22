# tools/ — the capture tooling that produced `sources/`

These are the scripts used to build the 202-file evidence pack in `../sources/`. They live with
the pack so a claim can be re-fetched and re-checked later, not just re-read.

| Script | What it does |
|---|---|
| `capture.py` | Fetch a URL and save its extracted text as a `pacing-<n>-<slug>.md` capture. Handles PDFs with `--pdf`, and cached `web_extract` output with `--from-cache <file>`. |
| `ui-capture.py` | The same, but writes `ui-<n>-<slug>.md` captures. |
| `ytcap.py` | Capture a YouTube video's subtitles/transcript as a `pacing-<n>-<slug>.md` capture. |
| `find-cache.py` | Locate a `web_extract` cache file for a URL by scanning the cache dir — used to rebuild captures that were blocked on direct fetch. |

## Usage

```
capture.py <url> <slug> <method> <title>
capture.py --pdf <url> <slug> <method> <title>
capture.py --from-cache <cachefile> <url> <slug> <method> <title>
ui-capture.py <url> <slug> <method> <title>
ytcap.py <url> <slug> <method> <title>
find-cache.py <url-substring> [must-contain-substring]
```

`method` is recorded verbatim in the capture header, e.g. `web_extract` or `curl -A <UA>`.
The numeric prefix is assigned automatically from the next free index for that prefix.

## Capture format

Every file in `../sources/` opens with a four-line header, then the extracted body:

```
URL: <the page that was fetched>
TITLE: <page title>
RETRIEVED: <YYYY-MM-DD>
METHOD: <how it was fetched>

<verbatim extracted text>
```

No credentials, cookies or tokens are carried — the fetch method is named, the material for it
is not. See `/srv/orrery/workspaces/research/sources/README.md` for the estate-wide convention.

## Why `web_extract` rather than `curl`

Direct `curl` against `www.w3.org` returns HTTP 403 through Cloudflare, and some PDFs need
text extraction that `curl` cannot do. `web_extract` (through the Hermes CLI) bypassed both,
which is why `find-cache.py` exists — it finds the cached `web_extract` output for a URL so a
blocked capture can be rebuilt from it without re-fetching.

## Scope note

These scripts write only into `../sources/`. They are read-only against the `3guotd` game
source; nothing here touches `src/`, the build, or the audit ledger.
