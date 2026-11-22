// Verify WHEN the prep countdown actually appears.
//
// Source reading says:
//   prepareNextLevel() sets levelPrepRemainingMs, and it is only called when
//   round.phase === 'won' && upcoming.battleId === mission.battleId.
//   -> the countdown only appears on CONTINUED STORY levels (level 2+),
//      never on the first level a player ever sees.
//
// This script proves it by driving the actual UI and watching for .prep-clock.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const PORT = 8498;

(async () => {
  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: REPO, stdio: 'ignore', detached: true,
  });
  process.on('exit', () => { try { process.kill(-server.pid); } catch {} });
  await new Promise(r => setTimeout(r, 6000));

  const browser = await chromium.launch({ executablePath: CHROME });
  const ctx = await browser.newContext({
    viewport: { width: 393, height: 852 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true,
  });
  const page = await ctx.newPage();
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const clickByText = async (re) => {
    const idx = await page.evaluate((src) => {
      const rx = new RegExp(src, 'i');
      const btns = [...document.querySelectorAll('button')];
      return btns.findIndex(b => rx.test((b.textContent || '').trim()));
    }, re.source);
    if (idx < 0) return false;
    await page.locator('button').nth(idx).click();
    await sleep(800);
    return true;
  };

  const probe = async (label) => {
    const s = await page.evaluate(() => {
      const clock = document.querySelector('.prep-clock');
      const status = document.querySelector('.command-status [role=status]');
      return {
        prepClock: clock ? {
          text: (clock.textContent || '').trim(),
          w: +clock.getBoundingClientRect().width.toFixed(0),
        } : null,
        status: status ? (status.textContent || '').trim().replace(/\s+/g, ' ') : null,
        hasStartWave: [...document.querySelectorAll('button')]
          .some(b => /Start wave/i.test(b.textContent || '')),
      };
    });
    console.log(`${label}:`);
    console.log(`   prep-clock : ${s.prepClock ? `"${s.prepClock.text}" (${s.prepClock.w}px)` : 'ABSENT'}`);
    console.log(`   status     : "${s.status}"`);
    console.log(`   Start wave : ${s.hasStartWave}`);
    return s;
  };

  console.log('=== FIRST mission a new player ever sees ===');
  await clickByText(/^Campaign$/);
  await clickByText(/Enter battle|Replace and enter battle/);
  const first = await probe('  level 1, before starting the wave');
  await sleep(500);
  await probe('  level 1, still in setup');

  // Now start the wave and watch for a countdown to appear.
  const startIdx = await page.evaluate(() => {
    const btns = [...document.querySelectorAll('button')];
    return btns.findIndex(b => /Start wave/i.test(b.textContent || ''));
  });
  if (startIdx >= 0) {
    await page.locator('button').nth(startIdx).click();
    await sleep(1200);
    await probe('  level 1, wave running');
  }

  console.log('\n=== CONCLUSION ===');
  console.log(first.prepClock
    ? 'A prep clock IS present on the first level.'
    : 'NO prep clock on the first level a player sees.');
  console.log('Source: prepareNextLevel() is the only writer of levelPrepRemainingMs,');
  console.log('and it runs only when round.phase === "won" for a continued story level.');

  await browser.close();
  try { process.kill(-server.pid); } catch {}
})();
