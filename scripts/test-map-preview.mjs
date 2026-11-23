import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const root = new URL(process.argv[2] ?? 'http://localhost:4173/')
const url = new URL(root)
url.searchParams.set('map-preview', 'hanzhong')
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const context = await browser.newContext({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, left: 8, right: 8, bottom: 12 } })
  await page.addInitScript(() => {
    const labels = new Set()
    Object.defineProperty(window, 'mapLabels', { value: labels })
    const fillText = CanvasRenderingContext2D.prototype.fillText
    CanvasRenderingContext2D.prototype.fillText = function (text, ...args) {
      if (this.canvas.closest('.battlefield')) labels.add(text)
      return fillText.call(this, text, ...args)
    }
  })
  const button = name => page.getByRole('button', { name, exact: true })
  await page.goto(url.href)
  await page.getByText(/Ready offline/).waitFor()
  const slots = {
    '3guotd.cleared-missions.v1': '["village-watch:1"]',
    '3guotd.saved-game.v1': '"manual-test-slot"',
    '3guotd.checkpoint.v1': '"checkpoint-test-slot"',
  }
  await page.evaluate(slots => Object.entries(slots).forEach(([key, value]) => localStorage.setItem(key, value)), slots)
  await context.setOffline(true)
  await page.reload()
  await page.getByRole('heading', { name: 'Hanzhong Supply Pass' }).waitFor()
  assert.deepEqual(await page.evaluate(() => [...window.mapLabels].filter(label => ['Entry', 'Supply gate'].includes(label))),
    ['Entry', 'Supply gate'])
  const board = page.locator('.battlefield')
  const bounds = await board.boundingBox()
  assert(bounds.x >= 8 && bounds.y >= 16 && bounds.x + bounds.width <= 312 && bounds.height / bounds.width > 1.4)
  const first = button('Empty tile, row 3, column 4')
  const adjacent = button('Empty tile, row 3, column 5')
  const edge = button('Empty tile, row 1, column 1')
  for (const cell of [first, adjacent, edge]) {
    await cell.tap()
    assert.equal(await cell.getAttribute('aria-pressed'), 'true')
    assert.deepEqual(await board.boundingBox(), bounds)
    assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, 480])
    assert.match(await page.locator('.resources').innerText(), /90 silver/)
    for (const control of await page.locator('.command-row button').all()) {
      const box = await control.boundingBox()
      assert(box.width >= 44 && box.height >= 44 && box.x >= 8 && box.x + box.width <= 312
        && box.y >= bounds.y + bounds.height && box.y + box.height <= 468)
      assert(await control.evaluate(el => {
        const outer = el.getBoundingClientRect()
        const text = new Range()
        text.selectNodeContents(el)
        return [...text.getClientRects()].every(rect => !rect.width || rect.left >= outer.left - 1
          && rect.right <= outer.right + 1 && rect.top >= outer.top - 1 && rect.bottom <= outer.bottom + 1)
      }))
    }
  }
  assert.equal(await first.getAttribute('aria-pressed'), 'false')
  assert.match(await page.getByRole('button', { name: /^Build Drum/ }).innerText(), /0.9 road tiles/)
  assert.equal(await button('Empty tile, row 1, column 3').count(), 0, 'The entry is never buildable')
  assert.equal(await button('Empty tile, row 13, column 7').count(), 0, 'The gate is never buildable')
  for (const site of ['Empty tile, row 3, column 4', 'Empty tile, row 5, column 6', 'Empty tile, row 2, column 2']) {
    await button(site).tap()
    await page.getByRole('button', { name: /^Build Archer/ }).tap()
  }
  assert.equal(await page.getByRole('button', { name: /^Archer, row/ }).count(), 3)
  await page.clock.install()
  await button('Start wave').tap()
  await page.clock.runFor(60_000)
  await page.getByText('The supply gate held.', { exact: true }).waitFor()
  const persisted = await page.evaluate(keys => Object.fromEntries(keys.map(key => [key, localStorage.getItem(key)])), Object.keys(slots))
  assert.deepEqual(persisted, slots)
  await page.getByRole('link', { name: 'Return to main game' }).tap()
  await button('Campaign').waitFor()
  console.log('Offline Hanzhong at 320 × 480: both landmarks, adjacent taps, stable full board, 44 px dock, three-wave clear and isolated saves passed.')
} finally {
  await browser.close()
}
