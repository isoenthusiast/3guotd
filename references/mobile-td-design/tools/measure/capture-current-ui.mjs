// Capture the CURRENT HEAD UI at phone viewports.
// The 2026-11-22 fixes (31d391b) added .prep-clock, .first-buy, .drum-effect,
// a contextual purchase tray and an explicit "Build <Name>" action verb.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const PORT = 8494;
mkdirSync(OUT, { recursive: true });

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: REPO, stdio: 'ignore', detached: true,
});
process.on('exit', () => { try { process.kill(-server.pid); } catch {} });
await new Promise(r => setTimeout(r, 6000));

const DEVICES = [
  { name: 'iphone-se', w: 375, h: 667, dpr: 2 },
  { name: 'pixel-7', w: 412, h: 915, dpr: 2.625 },
];

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

  // Shot A: the frame a new player sees, before selecting anything.
  await page.screenshot({ path: `${OUT}/current-${d.name}-01-opening.png` });

  // Select a suggested build site if one is marked.
  const suggested = page.locator('.cell[data-suggested]').first();
  if (await suggested.count()) await suggested.click();
  else {
    const cell = page.locator('.cell.useful-site').first();
    if (await cell.count()) await cell.click();
  }
  await sleep(700);

  // Shot B: site selected -> contextual purchase tray should be visible.
  await page.screenshot({ path: `${OUT}/current-${d.name}-02-tray.png` });

  const state = await page.evaluate(() => {
    const q = s => document.querySelector(s);
    const vis = el => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { w: +r.width.toFixed(1), h: +r.height.toFixed(1), top: +r.top.toFixed(1),
               display: cs.display, visibility: cs.visibility, opacity: cs.opacity };
    };
    const cards = [...document.querySelectorAll('.purchase-card')].map(c => ({
      text: (c.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60),
      disabled: c.disabled, cls: c.className, ...vis(c),
    }));
    return {
      status: (q('.command-status')?.textContent || q('.status-line')?.textContent || '').trim(),
      header: [...document.querySelectorAll('.command-bar, header, .hud')].map(vis),
      cards,
      firstBuy: !!q('.purchase-card.first-buy'),
      prepClock: vis(q('.prep-clock')),
      drumEffect: [...document.querySelectorAll('.drum-effect')].map(e => e.textContent),
      suggested: !!q('.cell[data-suggested]'),
    };
  });
  console.log(`\n### ${d.name} (${d.w}x${d.h})`);
  console.log(JSON.stringify(state, null, 2));

  await ctx.close();
}
await browser.close();
try { process.kill(-server.pid); } catch {}
