#!/usr/bin/env python3
"""Physical size of the 3guotd build mound (.useful-site::before) and the 64 css px board tile.

Same physical method as measure-physical-size.py:
  physical inches across the viewport = device_px_width / PPI
  css px per inch                    = css_viewport_width / physical inches
  cm                                = css_px / css_px_per_inch * 2.54

Mound is width:18% height:8% of the tile (src/style.css .useful-site::before).
"""
# name, css viewport width, device physical px width, PPI, measured tile css px
DEVS = [
    ("iPhone SE 2",     375,  750, 326, 39.5),
    ("iPhone 13 mini",  375, 1080, 476, 40.8),
    ("iPhone 15",       393, 1179, 460, 42.8),
    ("Pixel 7",         412, 1080, 428, 44.9),
    ("Galaxy S8",       360, 1440, 570, 39.1),
    ("Galaxy S20",      360, 1440, 563, 39.1),
]

MOUND_W_FRAC = 0.18
MOUND_H_FRAC = 0.08
MIN_CM = 1.0
FINGER_CM = 1.6
THUMB_CM = 2.5
BOARD_TILE_PX = 64  # internal canvas tile (columns=9 x tile=64 = 576)

print("=" * 96)
print("BUILD MOUND (18% x 8% of tile) AND BOARD TILE (64 css px) — PHYSICAL SIZE")
print("=" * 96)
mound_w_cm, mound_h_cm, tile_cm, cpp_list, board_cm = [], [], [], [], []
for name, css_w, dev_w, ppi, tile in DEVS:
    phys_in = dev_w / ppi
    cpp = css_w / phys_in
    m_w = (tile * MOUND_W_FRAC) / cpp * 2.54
    m_h = (tile * MOUND_H_FRAC) / cpp * 2.54
    t_cm = tile / cpp * 2.54
    b_cm = BOARD_TILE_PX / cpp * 2.54
    mound_w_cm.append(m_w); mound_h_cm.append(m_h); tile_cm.append(t_cm)
    cpp_list.append(cpp); board_cm.append(b_cm)
    print(f"\n{name}  ({css_w} css px, {dev_w} dev px @ {ppi} PPI)")
    print(f"  density                 : {cpp:.1f} css px per inch")
    print(f"  mound  {tile * MOUND_W_FRAC:.2f} x {tile * MOUND_H_FRAC:.2f} css px : "
          f"{m_w * 10:.2f} x {m_h * 10:.2f} mm")
    print(f"    as % of the 1 cm minimum : {m_w / MIN_CM * 100:.1f}% (width)")
    print(f"  build tile {tile} css px   : {t_cm:.2f} cm   "
          f"{t_cm / FINGER_CM:.2f}x fingertip   {t_cm / THUMB_CM:.2f}x thumb")
    print(f"  64 css px board tile     : {b_cm:.2f} cm   (native authored scale)")

print()
print("=" * 96)
print("SUMMARY")
print("=" * 96)
print(f"mound width   : {min(mound_w_cm) * 10:.2f}-{max(mound_w_cm) * 10:.2f} mm")
print(f"mound height  : {min(mound_h_cm) * 10:.2f}-{max(mound_h_cm) * 10:.2f} mm")
print(f"build tile    : {min(tile_cm):.2f}-{max(tile_cm):.2f} cm")
print(f"  vs fingertip : {min(tile_cm) / FINGER_CM:.2f}x - {max(tile_cm) / FINGER_CM:.2f}x")
print(f"  vs thumb     : {min(tile_cm) / THUMB_CM:.2f}x - {max(tile_cm) / THUMB_CM:.2f}x")
print(f"density range : {min(cpp_list):.1f} - {max(cpp_list):.1f} css px per inch (mean {sum(cpp_list)/len(cpp_list):.1f})")
print(f"64 css px board tile: {min(board_cm):.2f}-{max(board_cm):.2f} cm (mean {sum(board_cm)/len(board_cm):.2f})")
