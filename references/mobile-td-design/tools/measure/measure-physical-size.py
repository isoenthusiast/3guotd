#!/usr/bin/env python3
"""Physical size of the 3guotd build tile vs NN/g's 1cm x 1cm minimum.

Method (physical, not nominal):
  physical inches across the viewport = device_px_width / PPI
  css px per inch                    = css_viewport_width / physical inches
  tile_cm                            = tile_css_px / css_px_per_inch * 2.54

Tile CSS sizes are MEASURED values from measure-ui-live.mjs, per device.
"""
# name, css viewport width, device physical px width, PPI, measured tile css px
# PPI is diagonal-derived: sqrt(w^2+h^2) / diagonal_inches, for the real panel.
DEVS = [
    ("iPhone SE 2",     375,  750, 326, 39.5),
    ("iPhone 13 mini",  375, 1080, 477, 40.8),
    ("iPhone 15",       393, 1179, 461, 42.8),
    ("Pixel 7",         412, 1080, 425, 44.9),
    ("Galaxy S8",       360, 1440, 568, 39.1),
    ("Galaxy S20",      360, 1440, 566, 39.1),
]

MIN_CM = 1.0      # NN/g physical minimum
FINGER_CM = 1.6   # narrow end of NN/g's 1.6-2.0 cm fingertip range
THUMB_CM = 2.5    # thumb impact area

print("=" * 92)
print("BUILD TILE — PHYSICAL SIZE vs NN/g 1cm x 1cm MINIMUM")
print("=" * 92)
rows = []
for name, css_w, dev_w, ppi, tile in DEVS:
    phys_in = dev_w / ppi
    cpp = css_w / phys_in
    cm = (tile / cpp) * 2.54
    need_css = MIN_CM / 2.54 * cpp
    verdict = "PASS" if cm >= MIN_CM else "FAIL"
    rows.append((name, tile, cm, verdict, need_css))
    print(f"\n{name}  ({css_w} css px, {dev_w} device px @ {ppi} PPI)")
    print(f"  screen physical width : {phys_in:.2f} in")
    print(f"  density                : {cpp:.1f} css px per inch")
    print(f"  measured build tile    : {tile} css px = {cm:.2f} cm")
    print(f"  vs {MIN_CM} cm minimum   : {verdict}" + (f"   (short by {MIN_CM - cm:.2f} cm)" if verdict == "FAIL" else ""))
    print(f"  vs {FINGER_CM} cm fingertip : tile is {cm / FINGER_CM:.2f}x the fingertip width")
    print(f"  vs {THUMB_CM} cm thumb    : tile is {cm / THUMB_CM:.2f}x the thumb impact area")
    print(f"  css px needed for 1 cm  : {need_css:.1f} css px  (have {tile}, need +{need_css - tile:.1f})")

print()
print("=" * 92)
print("SUMMARY")
print("=" * 92)
for name, tile, cm, verdict, need_css in rows:
    print(f"{name:16} tile {tile:5} css px   {cm:.2f} cm   {verdict}   (need {need_css:.0f} css px)")
fails = [r for r in rows if r[3] == "FAIL"]
mean_cm = sum(r[2] for r in rows) / len(rows)
print(f"\n{len(fails)}/{len(rows)} devices FAIL the 1 cm physical minimum.")
print(f"Mean: {mean_cm:.2f} cm = {mean_cm / MIN_CM * 100:.0f}% of the NN/g minimum.")
print(f"Mean as a fraction of a 1.6 cm fingertip: {mean_cm / FINGER_CM:.2f}x")
print(f"Worst: {min(r[2] for r in rows):.2f} cm   Best: {max(r[2] for r in rows):.2f} cm")
