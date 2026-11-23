import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
const url = process.argv[2] ?? 'http://localhost:4173/'
try {
  const context = await browser.newContext({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, left: 8, right: 8, bottom: 12 } })
  const button = name => page.getByRole('button', { name, exact: true })
  const breach = page.locator('.defeat-breach')
  const rewind = page.locator('.defeat-rewind')
  const startTower = { kind: 'archer', site: 0, reach: true, power: false, cooldown: 0 }
  const addedTower = { kind: 'drum', site: 1, reach: false, power: false, cooldown: 0 }
  // Last fraction of Jing Level 3's second route. The game resolves the loss from an in-progress save.
  const round = {
    rulesVersion: 2, phase: 'running', waveNumber: 2, totalWaves: 5, towers: [startTower, addedTower],
    silver: 13, lives: 1, waveAge: 5, rebuildTime: 0, spawned: 3, spawnTimer: 2, shots: [], impacts: [],
    enemies: [{ id: 2, kind: 'cavalry', routeIndex: 1, progress: 17.99, health: 4, slowed: false }],
    opening: { towers: [startTower], silver: 43, lives: 3 },
    previousWave: null, gateHit: null, waveStats: { stopped: 0, escaped: 2, runnersEscaped: 0, earned: 0 },
  }
  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await context.setOffline(true)
  const restore = async round => {
    await page.evaluate(round => localStorage.setItem('3guotd.saved-game.v1',
      JSON.stringify({ version: 2, missionId: 'jing:3', speed: 1, round })), round)
    await page.reload()
    await button('Restore saved game').tap()
  }
  await restore(round)
  const board = await page.locator('.battlefield').boundingBox()
  await page.clock.install()
  await button('Resume').tap()
  await page.clock.runFor(200)
  const retry = button('Retry wave')
  await retry.waitFor()
  assert.match(await breach.innerText(), /Last breach · Entry 2 · Cavalry\s+Pair a Drum with an Archer/)
  assert.match(await rewind.innerText(), /Retry restores wave start\s+1 tower · 43 silver · 3 lives\s+Tower upgrades kept/)
  for (const locator of [breach, rewind, retry]) {
    const rect = await locator.boundingBox()
    assert(rect.x >= 8 && rect.x + rect.width <= 312 && rect.y >= board.y + board.height && rect.y + rect.height <= 468)
  }
  assert((await retry.boundingBox()).height >= 44)
  assert.deepEqual(await page.locator('.battlefield').boundingBox(), board)
  assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, 480])
  await button('Battle orders').tap()
  await button('Towers').tap()
  await page.goBack()
  await button('Back to battle').tap()
  assert.match(await breach.innerText(), /Entry 2 · Cavalry/)
  assert.match(await page.locator('.resources').innerText(), /13 silver\s+0 lives/)
  await button('Archer, row 1, column 1').tap()
  assert.doesNotMatch(await page.locator('.battle-readout').innerText(), /Second upgrade/)
  await retry.tap()
  await button('Start wave').waitFor()
  assert.match(await page.locator('.resources').innerText(), /43 silver\s+3 lives\s+Wave 2\/5/)
  assert.equal(await button('Archer, row 1, column 1').count(), 1)
  assert.equal(await button('Drum, row 1, column 2').count(), 0)
  await button('Archer, row 1, column 1').tap()
  assert.match(await page.locator('.tower-summary').innerText(), /Longer range/)
  await button('Main menu').tap()
  await restore({ ...round, phase: 'lost', lives: 0, enemies: [], gateHit: { kind: 'infantry', elapsed: 0 } })
  assert.match(await breach.innerText(), /Entrance unknown · Infantry\s+Cover more road with Archers/)
  assert(await retry.isEnabled())
  await button('Main menu').tap()
  await restore({ ...round, phase: 'lost', lives: 0, enemies: [], opening: null })
  assert.match(await breach.innerText(), /Breach details unavailable/)
  assert.match(await rewind.innerText(), /snapshot unavailable/)
  assert(await retry.isDisabled())
  assert.match(await page.getByRole('status').innerText(), /Retry unavailable/)
  assert.doesNotMatch(await page.getByRole('status').innerText(), /Retry wave available/)
  console.log('Offline 320 × 480: split-route defeat details, Help and browser Back, exact Retry restoration, and legacy fallbacks passed.')
} finally {
  await browser.close()
}
