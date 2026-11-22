// Measure the BUILD-SITE MOUND (the ::before pseudo-element on .useful-site)
// in CSS px and then in physical millimetres.
//
// The 2026-11-22 fixes made the marker and the card obvious, but the mound
// that tells the player "this tile is buildable" is 18% x 8% of the tile.
// At a 40px tile that is ~7.2 x 3.2 CSS px -- far below every touch standard.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const PORT = 8495;

const DEVICES = [
  // devW = the device's real physical pixel width; ppi = diagonal-derived density.
  // Physical size is computed from the real panel, NOT from the emulator's dpr:
  //   physical inches across viewport = devW / ppi
  //   css px per inch                 = css viewport width / physical inches
  // (Using the emulator dpr here silently understates size on the Galaxies,
  // whose real DPR is 4, not the 3 the viewport emulation uses.)
  { name: 'iPhone SE 2', w: 375, h: 667, dpr: 2, devW: 750, ppi: 326 },
  { name: 'iPhone 13 mini', w: 375, h: 812, dpr: 3, devW: 1080, ppi: 476 },
  { name: 'iPhone 15', w: 393, h: 852, dpr: 3, devW: 1179, ppi: 460 },
  { name: 'Pixel 7', w: 412, h: 915, dpr: 2.625, devW: 1080, ppi: 428 },
  { name: 'Galaxy S8', w: 360, h: 740, dpr: 3, devW: 1440, ppi: 570 },
  { name: 'Galaxy S20', w: 360, h: 800, dpr: 3, devW: 1440, ppi: 566 },
];

const CM_PER_INCH = 2.54;

(async () => {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: REPO, stdio: 'ignore', detached: true,
  });
  process.on('exit', () => { try { process.kill(-server.pid); } catch {} });
  await new Promise(r => setTimeout(r, 6000));

  const browser = await chromium.launch({ executablePath: CHROME });
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  console.log('BUILD-SITE MOUND — visual size of the buildable-tile cue');
  console.log('mound = .useful-site::before, width 18% x height 8% of the tile\n');

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
      const cell = document.querySelector('.cell.useful-site');
      if (!cell) return null;
      const r = cell.getBoundingClientRect();
      const cs = getComputedStyle(cell, '::before');
      const wPct = parseFloat(cs.width);
      const hPct = parseFloat(cs.height);
      // getComputedStyle on ::before resolves percentage widths against the
      // containing block; read the used px values instead.
      const probe = {
        tileW: +r.width.toFixed(2),
        tileH: +r.height.toFixed(2),
        beforeW: cs.width,
        beforeH: cs.height,
        content: cs.content,
        bg: cs.backgroundColor,
      };
      // Measure the rendered pseudo-element box directly.
      const mound = (() => {
        const c = cell.cloneNode(true);
        c.style.position = 'absolute';
        c.style.visibility = 'hidden';
        document.body.appendChild(c);
        const b = getComputedStyle(c, '::before');
        const res = { w: b.width, h: b.height };
        c.remove();
        return res;
      })();
      return { ...probe, mound };
    });

    if (!m) { console.log(`${d.name}: no useful-site found`); await ctx.close(); continue; }

    // Physical mm: css px -> physical inches (real panel) -> mm
    const physicalInches = d.devW / d.ppi;
    const mmPerCssPx = (physicalInches * 25.4) / d.w;
    const tileWmm = m.tileW * mmPerCssPx;
    const tileHmm = m.tileH * mmPerCssPx;
    // mound is 18% wide, 8% tall of the tile
    const moundWmm = tileWmm * 0.18;
    const moundHmm = tileHmm * 0.08;

    console.log(`${d.name} (${d.w}x${d.h} @${d.dpr}x, ${d.devW} dev px @ ${d.ppi}ppi)`);
    console.log(`  panel width      : ${physicalInches.toFixed(2)} in  (${(d.w / physicalInches).toFixed(1)} css px per inch)`);
    console.log(`  tile            : ${m.tileW} x ${m.tileH} CSS px  = ${tileWmm.toFixed(2)} x ${tileHmm.toFixed(2)} mm`);
    console.log(`  mound (18%x8%)  : ${(m.tileW * 0.18).toFixed(1)} x ${(m.tileH * 0.08).toFixed(1)} CSS px  = ${moundWmm.toFixed(2)} x ${moundHmm.toFixed(2)} mm`);
    console.log(`  mound colour    : ${m.bg}`);
    console.log(`  1cm x 1cm needs : ${(10 / mmPerCssPx).toFixed(1)} CSS px  -> mound is ${(moundWmm / 10 * 100).toFixed(1)}% of 1cm wide`);
    console.log('');

    await ctx.close();
  }
  await browser.close();
  try { process.kill(-server.pid); } catch {}
})();
