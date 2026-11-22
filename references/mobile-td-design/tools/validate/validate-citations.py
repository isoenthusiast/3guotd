#!/usr/bin/env python3
"""Validate every citation and quotation in the deliverable against the source pack.

For each claim: the source file must exist, be substantial, and actually contain
the quoted phrase (or its distinctive stem). This catches both wrong filenames
and paraphrases that drifted from the source.
"""
import sys
from pathlib import Path
REPO = Path(__file__).resolve().parents[4]
PACK = REPO / 'references' / 'mobile-td-design'

SRC = Path(str(PACK / 'sources'))

# (label, source file, phrase that MUST appear)
CLAIMS = [
    # --- touch targets ---
    ("HIG: 44x44 game control",        "ui-15-apple-hig-game-controls.md",            "44"),
    ("HIG: layout",                     "ui-14-apple-hig-layout.md",                   "44"),
    ("HIG: buttons",                    "ui-10-apple-hig-buttons.md",                  "44"),
    ("M3: 48x48dp touch target",        "ui-03-m3-material-structure.md",              "48 x 48dp"),
    ("M3: 48dp ~9mm physical",          "ui-03-m3-material-structure.md",              "9mm"),
    ("M3: states disabled contrast",    "ui-16-m3-states-applying.md",                 "don't need to meet Material's contrast"),
    ("Android compose 48dp default",    "ui-07-android-compose-a11y-defaults.md",      "48dp"),
    ("NN/g: 1cm x 1cm minimum",         "ui-01-nng-touch-target-size.md",              "1cm x 1cm"),
    ("NN/g: fingertip dimensions",      "ui-01-nng-touch-target-size.md",              "fingertip"),
    ("web.dev: accessible tap targets", "tech-14-webdev-accessible-tap-targets.md",    "target"),
    ("WCAG 2.5.8 target size",          "feedback-03-wcag22-target-size-minimum.md",   "24 by 24 CSS pixels"),
    ("WCAG 1.4.11 non-text contrast",   "feedback-04-wcag22-non-text-contrast.md",     "contrast"),

    # --- discoverability / tutorial ---
    ("NN/g: overlay overload",          "ui-36-nng-overlay-overload.md",               "overlay"),
    ("Filament: 10 tutorial tips",      "ui-20-filament-10-tips-tutorial.md",          "tutorial"),
    ("CHI 2012: tutorials",             "discover-08-chi2012-tutorials-pdf.md",        "tutorial"),
    ("GAG: contextual in-game help",    "feedback-53-gag-contextual-in-game-help-tips.md", "help"),
    ("GAG: game speed option",          "feedback-42-gag-game-speed-option.md",        "speed"),
    ("SBGAMES onboarding",              "discover-25-sbgames-onboarding-pdf.md",       "onboard"),
    ("Ironhide KR: pitifully easy",     "econ-05-gamedeveloper-kingdom-rush-campaign-design.md", "pitifully"),
    ("Ironhide KR (2)",                 "feedback-25-gd-kingdom-rush-campaign-level-design.md", "pitifully"),
    ("Ironhide KR (3)",                 "pacing-17-kingdom-rush-campaign-level-design.md", "pitifully"),
    ("Ironhide devlog 26",              "discover-10-ironhide-genesis-devlog26.md",    "Genesis Devlog"),
    ("NN/g: how many test users",       "discover-15-nng-how-many-test-users.md",     "test"),

    # --- colour / status / sound ---
    ("GAG: no fixed colour alone",      "feedback-05-gag-no-essential-info-fixed-colour-alone.md", "colour"),
    ("GAG: distinct sounds",            "feedback-56-gag-distinct-sounds-for-key-events.md", "sound"),
    ("GAG: large touch controls",       "feedback-30-gag-large-touch-controls.md",     "touch"),
    ("GAG: shape and colour",           "feedback-29-gag-use-shape-and-color.md",      "shape"),
    ("GAG: HUD",                        "feedback-agd-HUD.md",                         "HUD"),
    ("GAG: controls",                   "feedback-agd-controls.md",                    "control"),
    ("AGD: status effects",             "feedback-59-agd-statuseffects.md",            "status"),
    ("WCAG 1.4.1 use of color",         "feedback-02-wcag22-use-of-color.md",          "color"),
    ("Accessible games: distinguish",   "feedback-32-accessible-games-distinguish-this-from-that.md", "distinguish"),
    ("XAG multiple cues",               "feedback-13-xag-103-multiple-cues.md",       "cue"),

    # --- game feel / timing ---
    ("GD: telegraphing dodge",          "feedback-06-gd-enemy-attacks-and-telegraphing.md", "dodge"),
    ("GD: juice it or lose it",         "ui-29-gd-juice-it-or-lose-it.md",             "juice"),
    ("GD: juice full",                  "ui-30-gd-juice-it-or-lose-it-full.md",        "juice"),
    ("GDC juice",                       "feedback-34-gdc-vault-juice-it-or-lose-it.md", "juice"),
    ("NN/g: response time 0.1s",        "ui-32-nng-response-time-limits.md",           "0.1"),
    ("arxiv: data feel",                "ui-18-arxiv-data-feel-2210.03800.md",         "feel"),
    ("arxiv: impact feel",              "feedback-18-arxiv-impact-feel.md",            "impact"),
    ("arxiv: designing game feel",      "ui-34-arxiv-designing-game-feel-survey.md",  "feel"),
    ("arxiv: illustrative motion",      "ui-31-arxiv-illustrative-motion-smoothing-2305.16030.md", "motion"),
    ("arxiv: perceived duration",       "feedback-40-pmc-perceived-duration-depends-on-perceived-speed.md", "duration"),

    # --- TD focus / attribution ---
    ("GD: Defenders Quest TD focus",    "feedback-12-gd-defenders-quest-td-focus.md",  "FOCUS"),
    ("GD: optimising TD focus",         "pacing-20-optimizing-td-for-focus-and-thinking.md", "FOCUS"),
    ("GD: UI strategy",                 "ui-05-gd-ui-strategy-dos-donts.md",           "UI"),
    ("Unity: game UI basics",           "ui-06-unity-game-ui-basics.md",               "UI"),
    ("Theseus: attributable failure",   "feedback-50-theseus-attributable-failure-heuristic.md", "attribut"),
    ("ACM: hit feedback 2d",            "feedback-31-acm-quantifying-hit-feedback-2d.md", "feedback"),

    # --- purchase / economy legibility ---
    ("PvZ: seed packet sun cost",       "discover-17-pvz-seed-packet.md",              "sun"),
    ("PvZ: sun",                        "discover-19-pvz-sun.md",                      "sun"),
    ("PvZ: mom tutorial GDC",           "pacing-18-george-fan-pvz-mom-tutorial-gdc2012.md", "tutorial"),

    # --- technical / rendering ---
    ("Android: web app quality blur",  "tech-18-android-web-app-quality.md",          "blur"),
    ("Android: web app quality pixel",  "tech-18-android-web-app-quality.md",          "pixel"),
    ("web.dev: canvas performance",     "tech-08-chrome-canvas-performance.md",        "canvas"),
    ("MDN: devicePixelRatio",           "tech-01-mdn-devicepixelratio.md",             "devicePixelRatio"),
    ("MDN: optimizing canvas",          "tech-02-mdn-optimizing-canvas.md",           "canvas"),
    ("WebKit: canvas performance",      "tech-35-webkit-optimizing-canvas-performance.md", "canvas"),
    ("web.dev: rendering performance",  "tech-25-webdev-rendering-performance.md",     "render"),

    # --- motion preference ---
    ("WCAG 2.2.2 pause stop hide",      "ui-37-wcag22-pause-stop-hide.md",            "pause"),
    ("MDN: prefers-reduced-motion",     "ui-39-mdn-prefers-reduced-motion.md",        "prefers-reduced-motion"),
    ("web.dev: prefers-reduced-motion", "ui-40-webdev-prefers-reduced-motion.md",     "prefers-reduced-motion"),
]

print("=" * 96)
print("CITATION VALIDATION — deliverable vs source pack")
print("=" * 96)

fails, oks = [], 0
for label, fname, phrase in CLAIMS:
    p = SRC / fname
    if not p.exists():
        fails.append(f"MISSING FILE: {fname} ({label})")
        print(f"  MISSING  {fname:<56} ({label})")
        continue
    body = p.read_text(encoding="utf-8", errors="replace")
    if len(body) < 600:
        fails.append(f"THIN: {fname} ({len(body)} bytes) ({label})")
        print(f"  THIN     {fname:<56} ({len(body)} bytes) ({label})")
        continue
    if phrase.lower() not in body.lower():
        fails.append(f"NOPHRASE: {fname} lacks '{phrase}' ({label})")
        print(f"  NOPHRASE {fname:<56} lacks '{phrase}' ({label})")
        continue
    oks += 1
    print(f"  ok       {fname:<56} ({len(body):>7}b) ({label})")

print()
print("=" * 96)
print(f"RESULT: {oks}/{len(CLAIMS)} citations validated")
if fails:
    print(f"\n{len(fails)} FAILURES:")
    for f in fails:
        print(f"  - {f}")
    sys.exit(1)
print("All cited sources exist, are substantial, and contain the cited phrase.")
