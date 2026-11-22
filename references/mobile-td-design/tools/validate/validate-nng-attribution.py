#!/usr/bin/env python3
"""
Guard the NN/g attribution.

The researcher (card t_f5e5f73e) flagged that the NN/g "Touch Target Size"
article is routinely cited for a "44 CSS px" minimum. It does not say that.
NN/g states a PHYSICAL floor (1cm x 1cm) and explicitly argues that pixel
values do not communicate that physical aspect.

The 44 px nominal bar in the project deliverable comes from Apple HIG
(44 x 44 pt), not from NN/g. This script enforces three rules:

  1. The NN/g capture must NOT contain the string "44" anywhere.
  2. The capture must retain the "pixel value doesn't communicate this
     physical aspect" passage.
  3. In the deliverable, a 44 figure must not be ATTRIBUTED to NN/g.
     The test is proximity: take every occurrence of a 44 figure and look
     at the text around it. If that window names NN/g (and does not name a
     different source, and does not disclaim the pairing) then the
     deliverable is attributing 44 to NN/g, which is false.

Rule 3 is self-tested: the script injects a known-bad sentence into a temp
copy of the deliverable and asserts the guard catches it, so a passing run
proves the guard can actually fail.

Exit 0 = all rules hold and self-test passes. Exit 1 = attribution drifted.
"""
import re
import sys
from pathlib import Path
REPO = Path(__file__).resolve().parents[4]
PACK = REPO / 'references' / 'mobile-td-design'


NNG = PACK / "sources" / "ui-01-nng-touch-target-size.md"
README = PACK / "README.md"

# A window naming NN/g near a 44 figure is only an attribution if it does NOT
# also point at a different source and does NOT disclaim the pairing.
OTHER_SOURCES = (
    "apple",
    "material",
    "hig",
    "wcag",
    "android",
    "web.dev",
    "mdn",
)
DISCLAIMERS = (
    "states no",
    "state no",
    "does not state",
    "not state",
    "never interchangeable",
    "not interchangeable",
    "rather than",
    "not a 44",
    "no 44",
    "no 44-pixel",
    "supplies a *physical* floor",
    "supplies a physical floor",
)

# How much text around a 44 figure counts as "near" it.
WINDOW = 90


def norm(s: str) -> str:
    """Normalise quotes/dashes/markup so comparisons are not defeated by typography.

    Line wraps are also collapsed: a phrase such as "never interchangeable" can be
    split across two lines by any edit, and a guard that breaks on re-wrapping is a
    guard that cries wolf. Paragraph breaks are preserved so that the proximity
    window does not run on into the next paragraph.
    """
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("—", "-").replace("–", "-").replace("×", "x")
    s = s.replace("**", "").replace("*", "")
    s = re.sub(r"\n{2,}", "\x00", s)       # protect paragraph breaks
    s = re.sub(r"[ \t]*\n[ \t]*", " ", s)   # a line wrap is just a space
    s = re.sub(r"[ \t]{2,}", " ", s)
    s = s.replace("\x00", "\n\n")
    return s


PHYSICAL_ASPECT = norm(
    "Citing dimensions in pixel value doesn’t effectively communicate "
    "this physical aspect of touch targets"
)


def bad_attributions(text: str):
    """Yield (offset, window_text) for each 44 figure attributed to NN/g."""
    out = []
    for m in re.finditer(r"\b44\b", text):
        start = max(0, m.start() - WINDOW)
        end = min(len(text), m.end() + WINDOW)
        window = text[start:end]
        low = window.lower()
        names_nng = ("nn/g" in low or "nielsen" in low or "nng" in low)
        if not names_nng:
            continue
        if any(d in low for d in DISCLAIMERS):
            continue
        if any(o in low for o in OTHER_SOURCES):
            continue
        out.append((m.start(), window))
    return out


print("=" * 96)
print("NN/G ATTRIBUTION GUARD")
print("=" * 96)

failures = []

# --- Rule 1 & 2: the capture itself -----------------------------------------
if not NNG.exists():
    failures.append(f"missing capture: {NNG}")
else:
    body = NNG.read_text(encoding="utf-8", errors="replace")
    hits = re.findall(r".{0,60}44.{0,60}", body)
    if hits:
        failures.append(
            f"NN/g capture now contains '44' in {len(hits)} place(s) - "
            "verify whether it was added to the source or the capture is wrong"
        )
        print(f"  FAIL  NN/g capture mentions '44' {len(hits)}x:")
        for h in hits[:3]:
            print(f"          {h.strip()[:110]}")
    else:
        print("  PASS  NN/g capture contains no '44' (physical floor only)")

    if PHYSICAL_ASPECT not in norm(body):
        failures.append("NN/g capture lost the 'physical aspect' passage")
        print("  FAIL  NN/g 'physical aspect' passage missing")
    else:
        print("  PASS  NN/g 'physical aspect' passage present")

# --- Rule 3: the deliverable ------------------------------------------------
DOCS = [PACK / "README.md", PACK / "evidence.md"]
for DOC in DOCS:
    if not DOC.exists():
        failures.append(f"missing deliverable: {DOC}")
        continue
    readme = norm(DOC.read_text(encoding="utf-8", errors="replace"))
    label = DOC.name

    bad = bad_attributions(readme)
    if bad:
        failures.append(
            f"{len(bad)} place(s) in {label} attribute a 44 figure to NN/g - "
            "NN/g states no such minimum"
        )
        print(f"  FAIL  {label}: {len(bad)} place(s) attribute 44 to NN/g:")
        for _, w in bad[:3]:
            print(f"          ...{w.strip()[:120]}...")
    else:
        print(f"  PASS  {label}: no place attributes 44 to NN/g")

    if "never interchangeable" not in readme:
        failures.append(f"{label} lost the explicit Apple/NN-g split statement")
        print(f"  FAIL  {label}: 'never interchangeable' split statement missing")
    else:
        print(f"  PASS  {label}: explicit Apple/NN-g split statement present")

    # The 1cm floor comes from the Parhi target-size study; the fingertip and
    # thumb dimensions are a SEPARATE figure NN/g cites. Do not let the
    # deliverable claim the floor was derived from fingertip dimensions.
    conflating = re.findall(
        r"1\s*cm[^.]{0,80}(?:derive|derived|comes? from)[^.]{0,40}fingertip",
        readme,
        flags=re.I,
    )
    conflating += re.findall(
        r"fingertip[^.]{0,60}(?:derive|derived)[^.]{0,40}1\s*cm",
        readme,
        flags=re.I,
    )
    if conflating:
        failures.append(
            "deliverable conflates the 1cm target-size floor with the fingertip dimensions"
        )
        print("  FAIL  1cm floor conflated with fingertip dimensions:")
        for c in conflating[:2]:
            print(f"          {c.strip()[:120]}")
    else:
        print("  PASS  1cm floor not conflated with fingertip dimensions")

    if "Apple" not in readme or "44" not in readme:
        failures.append("deliverable lost the Apple 44 x 44 pt attribution")
        print("  FAIL  Apple 44 x 44 pt attribution missing")
    else:
        print("  PASS  Apple 44 x 44 pt attribution present")

    # --- Self-test: the guard must be able to FAIL --------------------------
    injected = readme + (
        "\n\nNN/g recommends a minimum touch target of 44 x 44 px for all controls.\n"
    )
    if not bad_attributions(injected):
        failures.append("SELF-TEST FAILED: guard did not catch an injected bad attribution")
        print("  FAIL  self-test: guard did not catch an injected bad attribution")
    else:
        print("  PASS  self-test: guard catches an injected bad attribution")

print("-" * 96)
if failures:
    print(f"RESULT: {len(failures)} attribution failure(s)")
    for f in failures:
        print(f"  - {f}")
    sys.exit(1)
print("RESULT: 0 failures - NN/g attribution is clean")
sys.exit(0)
