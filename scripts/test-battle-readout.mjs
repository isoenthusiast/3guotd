import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
const tower = (kind, site) => ({ kind, site, reach: false, power: false, cooldown: 0 })

async function load(page, missionId, phase, towers, enemies = [], gateHit = null) {
  const waveStats = { stopped: 0, escaped: 0, runnersEscaped: 0, earned: 0 }
  const round = {
    rulesVersion: 2, phase, waveNumber: missionId && phase !== 'setup' ? 3 : 1, totalWaves: missionId ? 3 : 20,
    towers, silver: 0, lives: 3, spawned: enemies.length, spawnTimer: 10, enemies,
    opening: { towers, silver: 0, lives: 3 }, shots: [], impacts: [], waveAge: 3,
    rebuildTime: 0, waveStats, previousWave: null, gateHit,
  }
  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await page.evaluate(save => localStorage.setItem('3guotd.saved-game.v1', JSON.stringify(save)),
    { version: 2, missionId, speed: 1, round })
  await page.context().setOffline(true)
  await page.reload()
  await page.getByRole('button', { name: 'Restore saved game', exact: true }).tap()
}

try {
  for (const height of [420, 480]) {
    const p = await browser.newPage({ viewport: { width: 320, height }, hasTouch: true, isMobile: true })
    const button = name => p.getByRole('button', { name, exact: true })
    await load(p, 'yiling:1', 'won', [tower('archer', 24)])
    await button('Pause').tap()
    for (const col of [9, 8, 7]) {
      await button(`Empty tile, row 13, column ${col}`).tap()
      await p.getByRole('button', { name: /Build Drum/ }).tap()
    }
    await button('Archer, row 3, column 7').tap()
    const readout = p.locator('.battle-readout')
    assert.match(await readout.innerText(), /Paused.*Wave in.*closes next wave.*Need 18/s)
    const box = await readout.boundingBox()
    const board = await p.locator('.battlefield').boundingBox()
    const actions = await p.locator('.command-row').boundingBox()
    assert(box.y >= board.y + board.height && box.y + box.height <= actions.y)
    await p.close()
  }
  {
    const p = await browser.newPage({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
    const button = name => p.getByRole('button', { name, exact: true })
    await load(p, 'yiling:1', 'setup', [{ ...tower('archer', 24), reach: true, power: true }])
    const board = await p.locator('.battlefield').boundingBox()
    const resources = p.locator('.resources')
    const before = await resources.innerText()
    const occupied = button('Archer, row 3, column 7')
    const available = button('Empty tile, row 3, column 6')
    await available.tap()
    assert.match(await available.getAttribute('aria-description'), /Available to build.*reach the road/)
    assert.equal(await p.locator('.build-card').count(), 2)
    assert.match(await p.locator('.build-card').first().innerText(), /Hit/)
    await occupied.tap()
    assert.match(await occupied.getAttribute('aria-description'), /Occupied/)
    assert.match(await p.locator('.tower-summary').innerText(), /Archer · Road damage\s+Longer range \+ Faster fire/)
    const refund = button('Remove & refund')
    assert.match(await refund.innerText(), /Refund 75/)
    const closing = button('Empty tile, row 3, column 4')
    await closing.tap()
    assert.match(await closing.getAttribute('aria-description'), /Closes next wave.*refunded in full/)
    assert.match(await p.locator('.battle-readout').innerText(), /This tile closes next wave/)
    assert.equal(await resources.innerText(), before)
    assert.deepEqual(await p.locator('.battlefield').boundingBox(), board)
    assert.deepEqual(await p.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, 480])
    await occupied.tap()
    await refund.tap()
    assert.match(await resources.innerText(), /75 silver/)
    assert.equal(await occupied.count(), 0)
    assert.equal(await button('Empty tile, row 3, column 7').getAttribute('aria-pressed'), 'true')
    await p.close()
  }
  for (const expected of [0, 1, 2]) {
    const p = await browser.newPage({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
    const towers = [tower('drum', 1), tower('drum', 42)]
    if (expected >= 1) towers.push(tower('archer', 3))
    if (expected === 2) towers.push(tower('archer', 40))
    const enemies = [0.3, 7.3].map((progress, id) => ({ kind: 'infantry', id, progress, health: 4, slowed: false }))
    await load(p, null, 'running', towers, enemies)
    await p.getByRole('button', { name: 'Resume', exact: true }).tap()
    await p.getByText(`Drum slowing 2 · ${expected} in Archer range`, { exact: true }).waitFor()
    await p.close()
  }
  for (const routeIndex of [0, 1, undefined]) {
    const p = await browser.newPage({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
    await load(p, 'jing:1', 'running', [], [], { kind: 'cavalry', elapsed: 0, routeIndex })
    await p.getByRole('button', { name: 'Resume', exact: true }).tap()
    const label = p.getByRole('status')
    const entry = routeIndex === undefined ? '' : `Entry ${routeIndex + 1}. `
    await label.getByText(`Cavalry reached the gate. ${entry}3 lives remaining.`, { exact: true }).waitFor()
    await p.close()
  }
  for (const maxed of [false, true]) {
    const p = await browser.newPage({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
    const button = name => p.getByRole('button', { name, exact: true })
    await p.goto(url)
    await p.getByText('Ready offline', { exact: true }).waitFor()
    await p.context().setOffline(true)
    await p.reload()
    await p.clock.install({ time: new Date('2030-01-01T00:00:00Z') })
    await p.clock.pauseAt(new Date('2030-01-01T00:00:02Z'))
    await button('Campaign').tap()
    await button('Enter battle').tap()
    if (maxed) {
      await button('Select marked site').tap()
      await p.getByRole('button', { name: /Build Archer/ }).tap()
      await p.getByRole('button', { name: /Longer range/ }).tap()
      await p.getByRole('button', { name: /Faster fire/ }).tap()
    }
    await button('Play speed 1×').tap()
    await button('Play speed 2×').tap()
    await button('Start wave').tap()
    await p.clock.runFor(1500)
    const readout = p.locator('.battle-readout')
    assert.match(await readout.innerText(), /Wave 1 starts.*Infantry/)
    await p.clock.runFor(750)
    assert.match(await readout.innerText(), maxed ? /Longer range \+ Faster fire/ : /Tap the gold/)
    await p.close()
  }
  console.log('Paused prep stays inside the dock at 320 × 420/480; mixed, zero and full Archer overlap counts passed offline.')
} finally {
  await browser.close()
}
