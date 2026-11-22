// Measure the canvas backing store vs the device pixels actually needed.
// Upscale factor = (CSS width * devicePixelRatio) / backingStoreWidth.
// > 1 means the browser is stretching a smaller image => soft art.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const PORT = 8491;

const DEVICES = [
  { name: 'iPhone SE 2',   w: 375, h: 667, dpr: 2 },
  { name: 'iPhone 13 mini',w: 375, h: 812, dpr: 3 },
  { name: 'iPhone 15',    w: 393, h: 852, dpr: 3 },
  { name: 'Pixel 7',       w: 412, h: 915, dpr: 2.625 },
  { name: 'Galaxy S8',     w: 360, h: 740, dpr: 3 },
  { name: 'Galaxy S20',    w: 360, h: 800, dpr: 3 },
];

const browser = await chromium.launch({ executablePath: CHROME });
console.log('CANVAS RESOLUTION — backing store vs device pixels required');
console.log('='.repeat(92));

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: REPO, stdio: 'ignore', detached: true,
});
process.on('exit', () => { try { process.kill(-server.pid); } catch {} });
await new Promise(r => setTimeout(r, 6000));

try {
  for (const d of DEVICES) {
    const ctx = await browser.newContext({
      viewport: { width: d.w, height: d.h },
      deviceScaleFactor: d.dpr,
      isMobile: true, hasTouch: true,
    });
    const page = await ctx.newPage();
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
    await page.getByText('Campaign', { exact: false }).first().click().catch(() => {});
    await page.waitForTimeout(400);
    await page.getByText('Enter battle', { exact: false }).first().click().catch(() => {});
    await page.waitForTimeout(700);

    const m = await page.evaluate(() => {
      const c = document.querySelector('canvas');
      if (!c) return null;
      const r = c.getBoundingClientRect();
      return {
        backingW: c.width, backingH: c.height,
        cssW: r.width, cssH: r.height,
        attrW: c.getAttribute('width'), attrH: c.getAttribute('height'),
        dpr: window.devicePixelRatio,
      };
    });
    if (!m) { console.log(`${d.name}: NO CANVAS`); await ctx.close(); continue; }
    const needW = m.cssW * m.dpr;
    const needH = m.cssH * m.dpr;
    const upW = needW / m.backingW;
    const upH = needH / m.backingH;
    console.log(`\n${d.name} (${d.w}x${d.h} @${d.dpr}x)`);
    console.log(`  canvas attr (backing) : ${m.attrW} x ${m.attrH}`);
    console.log(`  canvas CSS size        : ${m.cssW.toFixed(1)} x ${m.cssH.toFixed(1)}`);
    console.log(`  device px needed       : ${needW.toFixed(0)} x ${needH.toFixed(0)}`);
    console.log(`  UPSCALE factor         : ${upW.toFixed(2)}x wide, ${upH.toFixed(2)}x tall`);
    console.log(`  verdict                : ${upW > 1.05 ? 'UPSCALED — art is soft' : 'native'}`);
    await ctx.close();
  }
} finally {
  await browser.close();
  try { process.kill(-server.pid); } catch {}
}
