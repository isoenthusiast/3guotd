// Measure how long the Drum's cyan pulse is on screen per wave.
// The pulse renders while any slowed enemy is inside the Drum's reach
// (src/game-art.ts:211-234). We drive the real round and sample it.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const DEVICES = [
  { name: 'iPhone SE 2', w: 375, h: 667, dpr: 2 },
  { name: 'Pixel 7', w: 412, h: 915, dpr: 2.625 },
];

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';

const browser = await chromium.launch({
  executablePath: CHROME,
  args: ['--no-sandbox'],
});

const server = spawn('npx', ['vite', 'preview', '--port', '8493', '--host', '127.0.0.1'], {
  cwd: REPO,
  stdio: 'ignore',
});
await new Promise(r => setTimeout(r, 7000));

for (const d of DEVICES) {
  const ctx = await browser.newContext({
    viewport: { width: d.w, height: d.h },
    deviceScaleFactor: d.dpr,
    isMobile: true,
    hasTouch: true,
  });
  const page = await ctx.newPage();
  await page.goto('http://127.0.0.1:8493/', { waitUntil: 'networkidle' });

  // Navigate: Campaign -> first mission -> Enter battle
  const clickText = async (text) => {
    const el = page.locator(`text=${text}`).first();
    if (await el.count()) { await el.click({ timeout: 5000 }); await page.waitForTimeout(500); }
  };
  await clickText('Campaign');
  await page.waitForTimeout(600);
  const mission = page.locator('button, a').filter({ hasText: /mission|level|第一关|关卡/i }).first();
  if (await mission.count()) { await mission.click(); await page.waitForTimeout(600); }
  await clickText('Enter battle');
  await page.waitForTimeout(800);

  // Select a build site so the tray opens, then place a Drum if affordable.
  const site = page.locator('.cell.useful-site').first();
  if (await site.count()) { await site.click(); await page.waitForTimeout(400); }
  const drum = page.locator('.purchase-card, button').filter({ hasText: /Drum|鼓/i }).first();
  let placed = false;
  if (await drum.count()) {
    const disabled = await drum.getAttribute('disabled');
    if (disabled === null) { await drum.click(); await page.waitForTimeout(400); placed = true; }
  }

  // Start the wave and sample whether the Drum pulse ring is present.
  const started = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const start = btns.find(b => /start wave|开始|wave/i.test(b.textContent || ''));
    if (start) { start.click(); return true; }
    return false;
  });

  const samples = [];
  for (let i = 0; i < 40; i++) {
    await page.waitForTimeout(500);
    const r = await page.evaluate(() => {
      const c = document.querySelector('canvas');
      if (!c) return null;
      const ctx = c.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const w = c.width, h = c.height;
      // Sample the whole backing store for the cyan pulse stroke #b7f1e9
      const img = ctx.getImageData(0, 0, w, h);
      const d = img.data;
      let cyan = 0;
      for (let p = 0; p < d.length; p += 4) {
        const r0 = d[p], g0 = d[p + 1], b0 = d[p + 2], a = d[p + 3];
        if (a > 40 && b0 > 190 && g0 > 200 && r0 < 210 && (b0 - r0) > 25) cyan++;
      }
      return { cyan, dpr };
    });
    samples.push(r ? r.cyan : 0);
  }

  const anyPulse = samples.some(s => s > 40);
  const firstIdx = samples.findIndex(s => s > 40);
  const lastIdx = samples.lastIndexOf(s => s > 40);
  console.log(`${d.name}: drum placed=${placed} wave started=${started}`);
  console.log(`  cyan-pulse pixels sampled: ${samples.join(',')}`);
  console.log(`  pulse visible: ${anyPulse}` + (anyPulse ? ` (first at sample ${firstIdx}, last at sample ${lastIdx})` : ''));
  await ctx.close();
}

server.kill('SIGTERM');
await browser.close();
