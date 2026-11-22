# tools/ — the scripts that produced and check this pack

Three groups, each with one job:

| Directory | Job |
|---|---|
| `capture.py`, `ui-capture.py`, `ytcap.py`, `find-cache.py` | Build the 202-file capture pack in `../sources/` |
| `measure/` | Re-measure the game's interface on a real phone viewport |
| `validate/` | Check that every claim in `../README.md` and `../evidence.md` still holds |

Every script resolves the repository from its own location, so the pack works from a fresh
clone and survives the shared checkout moving under it.

## Capturing a source

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

### Capture format

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

### Why `web_extract` rather than `curl`

Direct `curl` against `www.w3.org` returns HTTP 403 through Cloudflare, and some PDFs need
text extraction that `curl` cannot do. `web_extract` (through the Hermes CLI) bypassed both,
which is why `find-cache.py` exists — it finds the cached `web_extract` output for a URL so a
blocked capture can be rebuilt from it without re-fetching.

## Measuring the interface

`measure/` holds the harnesses that produced every number in `../evidence.md`. They are
read-only against the game source and write only into `../out/`, which is git-ignored.

| Script | What it measures |
|---|---|
| `measure-physical-size.py` | Build tile width in centimetres, from the real panel width and diagonal-derived PPI |
| `measure-mound-physical.py` | Build mound width and height in millimetres |
| `measure-mound.mjs` | The same mound in CSS px, plus the mound's DOM geometry |
| `measure-under44.mjs` | How many buildable cells fall under 44 px, per device |
| `measure-cells.mjs` | The full cell population and the size of each kind |
| `measure-canvas-upscale.mjs` | Canvas backing store against the device pixels actually needed |
| `measure-header-contrast.mjs` | Header font size and contrast as rendered |
| `measure-ui-live.mjs` | The real rendered geometry of the battle screen at phone viewports |
| `measure-enemy-table.mjs` | Whether the Enemy Types table matches what actually spawns, and whether waves escalate or cycle |
| `measure-cue-duration.mjs` | How long the impact and reward cues stay on screen, in wall-clock terms per speed |
| `measure-drum-pulse.mjs` | How long the Drum's cyan pulse is on screen per wave |
| `verify-prep-clock.mjs` | When the prep countdown actually appears |
| `verify-frame-one.mjs` | What frame one actually shows, versus after a selection |
| `capture-current-ui.mjs` | Screenshots of the current build at phone viewports |
| `waveage.mjs` | That `waveAge` advances at wall-clock rate, not simulation rate, at every speed |

The browser harnesses need Chromium and start their own preview server. Point them at a
browser with `CHROME_PATH`, and override the output directory with `OUT_DIR`:

```
python3 measure/measure-physical-size.py
python3 measure/measure-mound-physical.py
node    measure/measure-enemy-table.mjs

CHROME_PATH=/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome \
  node measure/measure-under44.mjs
```

Every script resolves the repository from its own location, so these commands work from a
fresh clone and from any directory.

## Validating the pack

Run all six. They must all pass before the pack is committed.

```
cd validate
python3 validate-citations.py        # every cited source exists and contains the cited phrase
python3 validate-quotes.py           # every quotation is verbatim in the source it names
python3 validate-code-refs.py        # every code anchor exists in the file it names
python3 validate-links.py            # every relative link resolves
python3 validate-sources-readme.py   # every capture has a header; stream counts agree
python3 validate-nng-attribution.py  # the NN/g attribution is still correct
```

Two of these are stricter than they look, on purpose:

- **`validate-quotes.py`** treats an *italic* quotation as a quotation FROM A SOURCE and fails
  if it is not verbatim in a capture the paragraph cites. Plain quoted text is the document's
  own phrasing — a UI string, a proposed label, or a phrase the playtester must not say. A
  fabricated quotation is rejected, not skipped.
- **`validate-code-refs.py`** cites anchors, not line numbers. The shared checkout moves: a
  peer's navigation refactor shifted `src/main.tsx` by three lines while this pack was being
  written, which would have silently invalidated every line-number citation. The validator
  reports the current line; the document never asserts one.

Both validators carry a self-test: they inject a known-bad sentence and assert they reject
it, so a passing run proves the check can actually fail.

## Scope note

These scripts write only into `../sources/` and `../out/`. They are read-only against the
`3guotd` game source; nothing here touches `src/`, the build, or the audit ledger.
