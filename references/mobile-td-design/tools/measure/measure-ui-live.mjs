// Measures the REAL rendered geometry of the 3guotd battle screen at phone viewports,
// using the project's own Playwright + Chromium.
//
// Replaces arithmetic estimates with measured values: build-tile size, purchase-card
// size, tray position, and whether the tray sits in the thumb zone.
//
// Read-only: navigates a locally-served production build, measures, and closes.
// Writes nothing into the repo.
import { execFileSync, spawn } from 'node:child_process'
import { setTimeout as sleep } from 'node:timers/promises'


const PORT = 8478

// Serve the existing dist build (or build it first if missing).
try {
  execFileSync('test', ['-f', `${repo}/dist/index.html`])
} catch {
  execFileSync('npm', ['run', 'build'], { cwd: repo, stdio: 'inherit' })
}

const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: repo, stdio: 'ignore', detached: true,
})
const cleanup = () => { try { process.kill(-server.pid) } catch {} }
process.on('exit', cleanup)

await sleep(4000)

const { chromium } = await import(`${repo}/node_modules/playwright/index.mjs`)
import { mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../..')
const repo = REPO
const OUT = process.env.OUT_DIR || path.join(REPO, 'references/mobile-td-design/out')
mkdirSync(OUT, { recursive: true })

const devices = [
  { name: 'iPhone SE 2', w: 375, h: 667, dpr: 2 },
  { name: 'iPhone 13 mini', w: 375, h: 812, dpr: 3 },
  { name: 'iPhone 15', w: 393, h: 852, dpr: 3 },
  { name: 'Pixel 7', w: 412, h: 915, dpr: 2.625 },
  { name: 'Galaxy S8', w: 360, h: 740, dpr: 3 },
  { name: 'Galaxy S20', w: 360, h: 800, dpr: 3 },
]

// The box has chromium-1248 installed; the bundled Playwright expects a different
// revision, so point at the binary that is actually present.
const CHROME = process.env.CHROME_PATH || '/home/edward/.cache/ms-playwright/chromium-1248/chrome-linux64/chrome';
const browser = await chromium.launch({ executablePath: CHROME })
console.log('=== MEASURED battle-screen geometry (3guotd production build) ===\n')

for (const d of devices) {
  const ctx = await browser.newContext({
    viewport: { width: d.w, height: d.h },
    deviceScaleFactor: d.dpr,
    isMobile: true,
    hasTouch: true,
  })
  const page = await ctx.newPage()
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' })

  // Navigate: menu -> Campaign -> (mission selected) -> "Enter battle" -> battle screen.
  const clickByText = async (re) => {
    const idx = await page.evaluate((src) => {
      const rx = new RegExp(src, 'i')
      const btns = [...document.querySelectorAll('button')]
      return btns.findIndex(b => rx.test((b.textContent || '').trim()))
    }, re.source)
    if (idx >= 0) {
      await page.locator('button').nth(idx).click()
      await sleep(700)
      return true
    }
    return false
  }

  await clickByText(/^Campaign$/)
  await clickByText(/Enter battle|Replace and enter battle/)

  // The battle screen opens in 'setup'; select a buildable tile to reveal the tray.
  const cell = page.locator('.cell.useful-site').first()
  if (await cell.count()) {
    await cell.click()
    await sleep(500)
  }

  const m = await page.evaluate(() => {
    const q = sel => document.querySelector(sel)
    const rect = el => {
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { w: +r.width.toFixed(1), h: +r.height.toFixed(1), top: +r.top.toFixed(1), bottom: +r.bottom.toFixed(1), left: +r.left.toFixed(1) }
    }
    const cells = [...document.querySelectorAll('.cell')]
    const useful = [...document.querySelectorAll('.useful-site')]
    const cards = [...document.querySelectorAll('.purchase-card')]
    const bar = q('.command-bar')
    const board = q('.board-view')
    return {
      screen: q('.battle-screen') ? rect(q('.battle-screen')) : null,
      board: rect(board),
      bar: rect(bar),
      cellCount: cells.length,
      cell: rect(cells[0]),
      usefulCount: useful.length,
      card: rect(cards[0]),
      cardCount: cards.length,
      cardText: cards[0] ? (cards[0].textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60) : null,
      statusText: q('.command-status') ? (q('.command-status').textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80) : null,
      buttons: [...document.querySelectorAll('button')].slice(0, 40).map(b => {
        const r = b.getBoundingClientRect()
        return { t: (b.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 24), w: +r.width.toFixed(0), h: +r.height.toFixed(0), bottom: +r.bottom.toFixed(0) }
      }),
    }
  })

  const vh = d.h
  console.log(`--- ${d.name} (${d.w}x${d.h} @${d.dpr}x) ---`)
  if (!m.bar) {
    console.log('  battle screen not reached; buttons seen:', JSON.stringify(entered.slice(0, 8)))
    console.log()
    await ctx.close()
    continue
  }
  console.log(`  board area      : ${m.board ? `${m.board.w}x${m.board.h}` : 'n/a'}`)
  console.log(`  command bar     : y=${m.bar.top}..${m.bar.bottom} (height ${m.bar.h}) -> bottom ${(m.bar.h / vh * 100).toFixed(1)}% of viewport`)
  console.log(`  build tile      : ${m.cell.w} x ${m.cell.h} CSS px  (${m.cellCount} tiles rendered)`)
  console.log(`  useful-site tiles: ${m.usefulCount}`)
  console.log(`  purchase card   : ${m.card.w} x ${m.card.h} CSS px (${m.cardCount} cards) ${m.cardText ? `| "${m.cardText}"` : ''}`)
  console.log(`  status line     : ${m.statusText ? `"${m.statusText}"` : 'n/a'}`)
  const small = m.buttons.filter(b => b.w < 44 || b.h < 44)
  console.log(`  buttons < 44px  : ${small.length ? small.map(b => `${b.t}(${b.w}x${b.h})`).join(', ') : 'none'}`)
  console.log()
  await ctx.close()
}

await browser.close()
cleanup()
