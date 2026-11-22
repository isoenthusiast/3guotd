// Verify the "buildable cells under 44 px" count per device.
//
// All 97 buildable cells share one uniform grid size, so the count is either
// 0 or 97. Verify by actually counting, not by arithmetic.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const PORT = 8499;

const DEVICES = [
  { name: 'iPhone SE 2', w: 375, h: 667, dpr: 2 },
  { name: 'iPhone 13 mini', w: 375, h: 812, dpr: 3 },
  { name: 'iPhone 15', w: 393, h: 852, dpr: 3 },
  { name: 'Pixel 7', w: 412, h: 915, dpr: 2.625 },
  { name: 'Galaxy S8', w: 360, h: 740, dpr: 3 },
  { name: 'Galaxy S20', w: 360, h: 800, dpr: 3 },
];

(async () => {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: REPO, stdio: 'ignore', detached: true,
  });
  process.on('exit', () => { try { process.kill(-server.pid); } catch {} });
  await new Promise(r => setTimeout(r, 6000));

  const browser = await chromium.launch({ executablePath: CHROME });
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  console.log('BUILDABLE CELLS UNDER 44 x 44 CSS px\n');
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

    const m = await page.evaluate(() => {
      const cells = [...document.querySelectorAll('.cell')];
      const sizes = cells.map(c => {
        const r = c.getBoundingClientRect();
        return { w: r.width, h: r.height };
      });
      const under = sizes.filter(s => s.w < 44 || s.h < 44).length;
      const grid = document.querySelector('.cells');
      return {
        buildable: cells.length,
        under44: under,
        size: sizes.length ? `${sizes[0].w.toFixed(1)}x${sizes[0].h.toFixed(1)}` : 'n/a',
        gridItems: grid ? grid.children.length : 0,
      };
    });

    console.log(`${d.name.padEnd(16)} tile ${m.size.padEnd(10)} buildable ${String(m.buildable).padStart(3)}  under 44px: ${String(m.under44).padStart(3)}  (${m.gridItems} grid items)`);
    await ctx.close();
  }
  await browser.close();
  try { process.kill(-server.pid); } catch {}
})();
