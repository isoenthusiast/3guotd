// Measure the battle-screen header lines and the status row as rendered:
// font-size, colour vs background, and whether the second line is legible.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const PORT = 8496;

const DEVICES = [
  { name: 'iPhone SE 2', w: 375, h: 667, dpr: 2 },
  { name: 'Pixel 7', w: 412, h: 915, dpr: 2.625 },
];

const srgb = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
const contrast = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const parse = s => (s.match(/[\d.]+/g) || []).slice(0, 3).map(Number);

(async () => {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: REPO, stdio: 'ignore', detached: true,
  });
  process.on('exit', () => { try { process.kill(-server.pid); } catch {} });
  await new Promise(r => setTimeout(r, 6000));

  const browser = await chromium.launch({ executablePath: CHROME });
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  for (const d of DEVICES) {
    const ctx = await browser.newContext({
      viewport: { width: d.w, height: d.h },
      deviceScaleFactor: d.dpr, isMobile: true, hasTouch: true,
    });
    const page = await ctx.newPage();
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });
    const clickByText = async (re) => {
      const idx = await page.evaluate((src) => {
        const rx = new RegExp(src, 'i');
        const btns = [...document.querySelectorAll('button')];
        return btns.findIndex(b => rx.test((b.textContent || '').trim()));
      }, re.source);
      if (idx < 0) return false;
      await page.locator('button').nth(idx).click();
      await sleep(700);
      return true;
    };
    await clickByText(/^Campaign$/);
    await clickByText(/Enter battle|Replace and enter battle/);

    const info = await page.evaluate(() => {
      // Walk up from the status text to find each painted background.
      const bgOf = el => {
        let n = el;
        while (n && n !== document.documentElement) {
          const bg = getComputedStyle(n).backgroundColor;
          if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
          n = n.parentElement;
        }
        return 'rgb(255, 255, 255)';
      };
      const describe = el => {
        if (!el) return null;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 48),
          fontSize: cs.fontSize, fontFamily: cs.fontFamily.split(',')[0],
          color: cs.color, bg: bgOf(el),
          w: +r.width.toFixed(1), h: +r.height.toFixed(1),
        };
      };
      const status = document.querySelector('.command-status [role=status]');
      return {
        statusRow: describe(status),
        statusSpans: [...document.querySelectorAll('.command-status [role=status] span')].map(describe),
        headerEls: [...document.querySelectorAll('.battle-screen header *, .battle-screen > header > *')]
          .filter(e => e.children.length === 0 && (e.textContent || '').trim())
          .map(describe),
      };
    });

    console.log(`\n### ${d.name} (${d.w}x${d.h})`);
    const rows = [...(info.headerEls || []), ...(info.statusSpans || [])].filter(Boolean);
    for (const r of rows) {
      const fg = parse(r.color), bg = parse(r.bg);
      const c = contrast(fg, bg);
      const flag = c < 4.5 ? '  <-- below 4.5:1 AA text' : c < 7 ? '  (AA only)' : '';
      console.log(`  "${r.text}" ${r.fontSize} ${r.fontFamily} ${r.color} on ${r.bg} => ${c.toFixed(2)}:1${flag}`);
    }
    await ctx.close();
  }
  await browser.close();
  try { process.kill(-server.pid); } catch {}
})();
