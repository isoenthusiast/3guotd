"""Extract the archer's painted torso and bow from the approved art sheet.
Keeps the same local identity without the infantry's baked shield and spear.
Run with Python + Pillow; no downloads or generated imagery.
"""
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
im = Image.open(root / 'references/late-han-visual-proposal/art-sheet.png').convert('RGBA').crop((620, 105, 707, 167))
mask = Image.new('L', im.size)
ImageDraw.Draw(mask).polygon([(16,8),(33,2),(45,8),(44,21),(51,23),(49,13),(51,0),
                             (61,0),(76,21),(78,40),(69,60),(17,61),(16,46),(4,40),(3,28)], fill=255)
im.putalpha(mask)
pixels = im.load()
for y in range(im.height):
    for x in range(im.width):
        r,g,b,a = pixels[x,y]
        if r > 205 and g > 180 and b > 140 and r-g < 45 and g-b < 65:
            pixels[x,y] = (r,g,b,0)
im.save(root / 'src/assets/battlefield/bowman-torso.webp', lossless=True)
