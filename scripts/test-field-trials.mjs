import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const height = process.argv.includes('--short') ? 420 : 480
  const context = await browser.newContext({ viewport: { width: 320, height }, isMobile: true, hasTouch: true })
  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, bottom: 12, left: 8, right: 8 } })
  const button = name => page.getByRole('button', { name, exact: true })
  const url = process.argv[2] ?? 'http://localhost:4173/'
  await page.addInitScript(() => {
    window.combatStrokes = new Set()
    const stroke = CanvasRenderingContext2D.prototype.stroke
    CanvasRenderingContext2D.prototype.stroke = function (...args) {
      window.combatStrokes.add(this.strokeStyle)
      return stroke.apply(this, args)
    }
  })
  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await context.setOffline(true)
  await page.reload()
  assert.deepEqual(await page.evaluate(() => Object.keys(localStorage)), [])
  for (const control of await page.locator('.title-screen button:enabled').all()) {
    const box = await control.boundingBox()
    assert(box.y >= 16 && box.y + box.height <= height - 12)
  }
  await button('Field Trials').tap()
  const board = await page.locator('.battlefield').boundingBox()
  const choose = page.getByLabel('Trial tower')
  for (const [kind, label, color] of [
    ['volley', 'Volley', '#fff1a2'], ['crossbow', 'Crossbow', '#ffc7a8'], ['beacon', 'Beacon', '#b5efff'],
  ]) {
    await choose.selectOption(kind)
    if (kind === 'beacon') {
      await button('Empty tile, row 2, column 6').tap()
      await page.getByRole('button', { name: /^Build Archer/ }).tap()
      await button('Empty tile, row 2, column 5').tap()
      assert.match(await page.getByRole('button', { name: /^Build Beacon/ }).innerText(), /Archer F2/)
    } else await button('Empty tile, row 2, column 6').tap()
    assert.equal(await page.locator('.purchase-card').count(), 2)
    assert.deepEqual(await page.locator('.battlefield').boundingBox(), board)
    assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, height])
    await page.getByRole('button', { name: new RegExp(`^Build ${label}`) }).tap()
    await page.locator(".cells button[aria-pressed=true]").tap()
    await page.evaluate(() => window.combatStrokes.clear())
    await button('Start wave').tap()
    await page.waitForFunction(color => window.combatStrokes.has(color), color, { timeout: 6000 })
    await button('Reset').tap()
    assert.equal(await choose.inputValue(), kind)
    assert.match(await page.locator('.resources').innerText(), /90 silver/)
    assert.equal(await page.getByRole('button', { name: /^(Archer|Volley Platform|Heavy Crossbow|Watch Beacon), row/ }).count(), 0)
  }
  await page.goBack()
  await button('Long battle').tap()
  await button('Enter battle').tap()
  await button('Select marked site').tap()
  await page.getByRole('button', { name: /^Build Archer/ }).tap()
  await button('Main menu').tap()
  await button('Save game').tap()
  const snapshot = () => page.evaluate(() => Object.fromEntries(Object.entries(localStorage).sort()))
  const long = await snapshot()
  await button('Field Trials').tap()
  await button('Reset').tap()
  await button('Menu').tap()
  assert.deepEqual(await snapshot(), long)
  await button('Campaign').tap()
  await button('Enter battle').tap()
  await button('Replace and enter battle').tap()
  await button('Select marked site').tap()
  await page.getByRole('button', { name: /^Build Archer/ }).tap()
  await button('Main menu').tap()
  await button('Save game').tap()
  const campaign = await snapshot()
  await button('Field Trials').tap()
  await button('Reset').tap()
  await page.goBack()
  await button('Continue').waitFor()
  assert.deepEqual(await snapshot(), campaign)
  await button('Continue').tap()
  assert.match(await page.locator('.resources').innerText(), /60 silver/)
  console.log('All three Field Trials effects rendered offline on a fresh profile. Reset, two-card fit, Back, and campaign/Long Battle save isolation passed.')
} finally {
  await browser.close()
}
