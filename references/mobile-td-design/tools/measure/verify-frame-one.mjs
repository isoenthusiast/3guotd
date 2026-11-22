// Verify the frame-one (no input) vs post-selection HUD states against current HEAD.
// Read-only against the repo; writes screenshots to OUT.
import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { setTimeout as sleep } from 'node:timers/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome'
const PORT = 8493
const BASE = `http://127.0.0.1:${PORT}/`

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--host', '127.0.0.1', '--strictPort'], {
  cwd: REPO,
  stdio: 'ignore',
  detached: true,
})
process.on('exit', () => { try { process.kill(-server.pid) } catch {} })

async function clickByText(page, text) {
  const el = page.locator(`text=${text}`).first()
  await el.waitFor({ state: 'visible', timeout: 15000 })
  await el.click()
}

const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] })
const ctx = await browser.newContext({
  viewport: { width: 375, height: 667 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
const page = await ctx.newPage()

for (let i = 0; i < 40; i++) {
  try { const r = await fetch(BASE); if (r.ok) break } catch {}
  await sleep(500)
}

await page.goto(BASE, { waitUntil: 'networkidle' })
await clickByText(page, 'Campaign')
await sleep(600)
await page.locator('text=Enter battle').first().click()
await sleep(900)

async function hudState(label) {
  const status = await page.locator('.status-line, .command-status, .status').first()
    .innerText().catch(() => '(no status element)')
  const cards = await page.locator('.purchase-card').allInnerTexts().catch(() => [])
  const chooseSite = await page.locator('.choose-site').count()
  const header = await page.locator('header').first().innerText().catch(() => '(no header)')
  const commandRow = await page.locator('.command-row').first().innerText().catch(() => '(none)')
  console.log(`\n===== ${label} =====`)
  console.log('STATUS:', JSON.stringify(status.replace(/\n/g, ' | ')))
  console.log('PURCHASE CARDS:', JSON.stringify(cards.map(c => c.replace(/\n/g, ' | '))))
  console.log('choose-site button count:', chooseSite)
  console.log('HEADER:', JSON.stringify(header.replace(/\n/g, ' | ')))
  console.log('COMMAND ROW:', JSON.stringify(commandRow.replace(/\n/g, ' | ')))
}

await hudState('FRAME ONE — no input (setup, firstPlacement)')
await page.screenshot({ path: `${OUT}/verify-frame-one.png` })

// Now select the suggested build site -> the contextual tray should reveal purchase cards
await page.locator('.cell.useful-site').first().click()
await sleep(500)
await hudState('AFTER selecting a build site')
await page.screenshot({ path: `${OUT}/verify-after-select.png` })

await browser.close()
try { process.kill(-server.pid) } catch {}
