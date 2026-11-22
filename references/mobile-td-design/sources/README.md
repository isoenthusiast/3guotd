# sources/ — the evidence behind the mobile TD interface findings

One file per retrieved page, post, paper or video, named `<stream>-<nn>-<slug>.md`, carrying the
URL, the title, the fetch date, the fetch method and then the verbatim extracted text.

Kept so a claim can be re-checked without re-fetching, and so "the page said this on this date"
is answerable months later. Never carries credentials, cookies or tokens — the fetch method is
named (`web_extract`, `curl -A <UA>`, `youtube-dl --write-auto-sub`), the material for it is not.

## Format

```
URL: <the page that was fetched>
TITLE: <page title>
RETRIEVED: <YYYY-MM-DD>
METHOD: <how it was fetched>

<verbatim extracted text>
```

## Streams

| Prefix | Stream | Count |
|---|---|---|
| `discover-*` | First-time discovery, onboarding, teaching | 25 |
| `feedback-*` | Feedback clarity, HUD clutter, colour-alone signalling, game feel | 53 |
| `pacing-*` | Wave pacing, difficulty curve, focus | 30 |
| `econ-*` | Economy, progression, value | 18 |
| `tech-*` | Mobile web technical constraints (canvas, PWA, offline) | 34 |
| `ui-*` | UI/UX standards (Apple HIG, Material 3, NN/g, WCAG, Unity, Filament) | 42 |
| **Total** | | **202** |

## Rebuilding a capture

Use the tooling in `../tools/` — see `../tools/README.md`. For a page that blocks direct fetch
(W3C returns HTTP 403 through Cloudflare), `find-cache.py` locates the cached `web_extract`
output and `capture.py --from-cache` rebuilds the file from it.

## Checking this pack

`../README.md` records which capture supports which claim. Every source reference and every
verbatim quotation in it is checked mechanically by the validators listed in that document.
