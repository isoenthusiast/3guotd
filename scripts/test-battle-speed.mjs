import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const page = await browser.newPage({ viewport: { width: 320, height: 480 }, isMobile: true, hasTouch: true })
  const cdp = await page.context().newCDPSession(page)
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, left: 8, right: 8, bottom: 12 } })
  const button = name => page.getByRole('button', { name, exact: true })
  const speed = value => button(`Play speed ${value}×`)
  const save = async () => {
    await button('Main menu').tap()
    await button('Save game').tap()
    const state = await page.evaluate(() => JSON.parse(localStorage.getItem('3guotd.saved-game.v1')))
    await button('Continue').tap()
    return state
  }

  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await page.context().setOffline(true)
  await page.reload()
  await page.clock.install({ time: new Date('2030-01-01T00:00:00Z') })
  await page.clock.pauseAt(new Date('2030-01-01T00:00:02Z'))
  await button('Campaign').tap()
  await button('Enter battle').tap()
  const board = page.locator('.battlefield')
  const bounds = await board.boundingBox()

  await button('Select marked site').tap()
  const cards = page.locator('.build-card')
  assert.equal(await cards.count(), 2)
  async function checkDock() {
    for (const control of await page.locator('.command-row button').all()) {
      const { x, y, width, height } = await control.boundingBox()
      assert(width >= 44 && height >= 44 && x >= 8 && y + height <= 468 && x + width <= 312)
      assert(await control.evaluate(el => el.scrollWidth <= el.clientWidth && el.scrollHeight <= el.clientHeight))
    }
    assert.deepEqual(await page.evaluate(() => {
      const root = document.scrollingElement
      return [root.scrollWidth, root.scrollHeight, scrollX, scrollY]
    }), [320, 480, 0, 0])
    assert.deepEqual(await board.boundingBox(), bounds)
  }

  await checkDock()
  await speed(1).tap()
  await speed(2).tap()
  await speed(3).tap()
  await speed(1).waitFor()
  await button('Start wave').tap()
  await button('Pause').waitFor()
  await checkDock()
  await speed(1).tap()
  await speed(2).tap()
  await speed(3).tap()
  await speed(1).waitFor()
  await page.clock.runFor(200)
  await button('Pause').tap()
  let prior = await save()
  assert(prior.round.enemies.length > 0)
  const changes = []
  for (const value of [1, 2, 3]) {
    if (value > 1) await speed(value - 1).tap()
    await speed(value).waitFor()
    await page.clock.runFor(500)
    const held = await save()
    assert.equal(held.speed, value)
    assert.deepEqual(held.round, prior.round, 'Speed changes must leave a paused wave frozen')
    await button('Resume').tap()
    await page.clock.runFor(200)
    await button('Pause').tap()
    prior = await save()
    const elapsed = prior.round.waveAge - held.round.waveAge
    assert(elapsed >= 0.14, 'The resumed wave must advance at least three ticks')
    changes.push((prior.round.enemies[0].progress - held.round.enemies[0].progress) / elapsed)
  }
  for (let i = 0; i < changes.length; i++) {
    assert(Math.abs(changes[i] - 1.6 * (i + 1)) < 1e-8, `Speed ${i + 1}× advanced ${changes[i]} tiles per second`)
  }
  await page.reload()
  await button('Restore saved game').tap()
  await button('Resume').waitFor()
  await speed(3).tap()
  await speed(1).waitFor()
  assert.deepEqual(await board.boundingBox(), bounds)
  console.log('Offline touch at 320 × 480: stable board, 44 px controls, no scroll, exact 1×/2×/3× movement, paused speed changes and saved speed.')
} finally {
  await browser.close()
}
