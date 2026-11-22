// Precisely enumerate the battlefield cell population and their sizes.
//
// The deliverable claimed "40 of 97 cells are under 44px". That number came from
// a `.slice(0, 40)` on the button list, so it was an artifact of the harness,
// not a count. The grid is uniform, so every buildable cell has the same size.
//
// Also separates the three cell classes:
//   .useful-site  -> buildable AND archer would cover the road  (carries the mound)
//   .cell.empty-cell -> buildable but archer would NOT cover the road (no mound)
//   <span>        -> not buildable at all
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const PORT = 8497;

const DEVICES = [
  { name: 'iPhone SE 2', w: 375, h: 667, dpr: 2, ppi: 326 },
  { name: 'iPhone 13 mini', w: 375, h: 812, dpr: 3, ppi: 476 },
  { name: 'iPhone 15', w: 393, h: 852, dpr: 3, ppi: 460 },
  { name: 'Pixel 7', w: 412, h: 915, dpr: 2.625, ppi: 428 },
  { name: 'Galaxy S8', w: 360, h: 740, dpr: 3, ppi: 441 },
  { name: 'Galaxy S20', w: 360, h: 800, dpr: 3, ppi: 440 },
];

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

    const m = await page.evaluate(() => {
      const grid = document.querySelector('.cells');
      const gridItems = grid ? grid.children.length : 0;
      const useful = [...document.querySelectorAll('.cell.useful-site')];
      const empty = [...document.querySelectorAll('.cell.empty-cell:not(.useful-site)')];
      const plain = [...document.querySelectorAll('.cell:not(.useful-site):not(.empty-cell)')];
      const spans = [...grid.children].filter(c => c.tagName === 'SPAN');
      const size = list => {
        if (!list.length) return null;
        const r = list[0].getBoundingClientRect();
        const sizes = new Set(list.map(e => {
          const q = e.getBoundingClientRect();
          return `${q.width.toFixed(1)}x${q.height.toFixed(1)}`;
        }));
        return { first: `${r.width.toFixed(1)}x${r.height.toFixed(1)}`, distinct: [...sizes] };
      };
      // does the mound render on a useful-site, and on an empty-cell?
      const moundOf = el => {
        if (!el) return null;
        const b = getComputedStyle(el, '::before');
        return { content: b.content, w: b.width, h: b.height, bg: b.backgroundColor };
      };
      return {
        gridItems,
        usefulCount: useful.length,
        emptyCount: empty.length,
        plainCount: plain.length,
        spanCount: spans.length,
        usefulSize: size(useful),
        emptySize: size(empty),
        moundOnUseful: moundOf(useful[0]),
        moundOnEmpty: moundOf(empty[0]),
        suggestedCount: document.querySelectorAll('.cell[data-suggested="true"]').length,
      };
    });

    const cssPxPerMm = (d.dpr * 25.4) / d.ppi;
    const tileMm = parseFloat(m.usefulSize.first) * cssPxPerMm;

    console.log(`\n${d.name} (${d.w}x${d.h} @${d.dpr}x, ${d.ppi}ppi)`);
    console.log(`  grid items      : ${m.gridItems}  (9 cols x 13 rows = 117)`);
    console.log(`  .useful-site   : ${m.usefulCount}  size ${m.usefulSize.first}  distinct ${JSON.stringify(m.usefulSize.distinct)}`);
    console.log(`  .empty-cell    : ${m.emptyCount}  size ${m.emptySize ? m.emptySize.first : 'n/a'}`);
    console.log(`  .cell (tower)  : ${m.plainCount}`);
    console.log(`  <span> non-bld : ${m.spanCount}`);
    console.log(`  ALL buildable  : ${m.usefulCount + m.emptyCount + m.plainCount}`);
    console.log(`  suggested site : ${m.suggestedCount}`);
    console.log(`  tile physical  : ${tileMm.toFixed(1)} mm = ${(tileMm / 10).toFixed(2)} cm`);
    console.log(`  mound on useful: ${JSON.stringify(m.moundOnUseful)}`);
    console.log(`  mound on empty : ${JSON.stringify(m.moundOnEmpty)}`);

    await ctx.close();
  }
  await browser.close();
  try { process.kill(-server.pid); } catch {}
})();
