"""Extract shipped art from the approved proposal. Run with Python + Pillow.

No generation or remote assets: all coordinates refer to the two approved PNGs.
Paper removal floods only pale pixels reachable from the edge, preserving ink
and enclosed light clothing. Small enclosed paper holes are cleared separately.
"""
from collections import deque
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'src/assets/battlefield'
OUT.mkdir(exist_ok=True)
sheet = Image.open(ROOT / 'references/late-han-visual-proposal/art-sheet.png').convert('RGBA')


def cutout(name, box, size):
    im = sheet.crop(box)
    w, h = im.size
    pixels = im.load()
    seen = set()
    queue = deque([(x, y) for x in range(w) for y in (0, h - 1)] +
                  [(x, y) for y in range(h) for x in (0, w - 1)])
    while queue:
        x, y = queue.popleft()
        if (x, y) in seen or not (0 <= x < w and 0 <= y < h):
            continue
        seen.add((x, y))
        r, g, b, _ = pixels[x, y]
        if r > 192 and g > 165 and b > 125 and r - g < 45 and g - b < 65:
            pixels[x, y] = (r, g, b, 0)
            queue.extend(((x-1, y), (x+1, y), (x, y-1), (x, y+1)))
    # Interior gaps between the archer platform's timbers are paper too.
    if name == 'archer':
        for y in range(h):
            for x in range(w):
                r, g, b, a = pixels[x, y]
                if y > h * .5 and r > 225 and g > 200 and b > 160:
                    pixels[x, y] = (r, g, b, 0)
    im.thumbnail(size, Image.Resampling.LANCZOS)
    im.save(OUT / f'{name}.webp', lossless=True)


for name, box, size in [
    ('gate', (5, 103, 484, 432), (232, 160)),
    ('archer', (483, 7, 800, 432), (108, 144)),
    ('drum', (826, 134, 1112, 430), (106, 110)),
    ('infantry', (74, 514, 342, 855), (72, 96)),
    ('runner', (407, 506, 679, 856), (72, 96)),
    ('cavalry', (699, 505, 1095, 856), (108, 96)),
    ('commander', (1145, 470, 1512, 856), (92, 96)),
]:
    cutout(name, box, size)

board = Image.open(ROOT / 'references/late-han-visual-proposal/screens.png').convert('RGBA').crop((1028, 55, 1531, 893))
# Isolate the storehouse silhouette for the delivery landmark.
mask = Image.new('L', board.size)
ImageDraw.Draw(mask).polygon([(0,318),(31,332),(47,356),(67,367),(82,415),(56,439),(0,445)], fill=255)
mask = mask.filter(ImageFilter.GaussianBlur(1.3))
board.putalpha(mask)
board.crop(mask.getbbox()).save(OUT / 'cottage.webp', lossless=True)
