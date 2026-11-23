import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const context = await browser.newContext({ viewport: { width: 320, height: 480 }, isMobile: true, hasTouch: true })
  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, right: 8, bottom: 12, left: 8 } })
  const button = name => page.getByRole('button', { name, exact: true })
  const slot = page.getByLabel('Second build slot')
  const board = page.locator('.battlefield')
  const readout = page.locator('.battle-readout')
  const orderedSites = [21, 40, 67, 84, 10, 12, 19, 39, 22, 42, 49, 51, 58, 60, 69, 85]
  const names = { archer: 'Archer', drum: 'Drum', volley: 'Volley Platform', crossbow: 'Heavy Crossbow', beacon: 'Watch Beacon' }
  const cards = { ...names, volley: 'Volley', crossbow: 'Crossbow', beacon: 'Beacon' }
  const placed = []
  async function buy(kind) {
    const site = orderedSites[placed.length]
    await button(`Empty tile, row ${Math.floor(site / 9) + 1}, column ${site % 9 + 1}`).tap()
    assert.equal(await page.locator('.build-card').count(), 2)
    assert.match(await page.locator('.build-card').first().innerText(), /Build Archer/)
    for (const control of await page.locator('.command-row button').all()) {
      const rect = await control.boundingBox()
      assert(rect.width >= 44 && rect.height >= 44 && rect.x >= 8 && rect.x + rect.width <= 312 && rect.y + rect.height <= 468)
      assert(await control.evaluate(el => {
        const bounds = el.getBoundingClientRect()
        const text = new Range()
        text.selectNodeContents(el)
        return [...text.getClientRects()].every(rect => !rect.width || rect.left >= bounds.left - 1
          && rect.right <= bounds.right + 1 && rect.top >= bounds.top - 1 && rect.bottom <= bounds.bottom + 1)
      }))
    }
    const card = page.getByRole('button', { name: new RegExp(`^Build ${cards[kind]}`) })
    await card.tap()
    placed.push(kind)
    assert.equal(await button(`${names[kind]}, row ${Math.floor(site / 9) + 1}, column ${site % 9 + 1}`).count(), 1)
  }
  async function options(expected, choose, current) {
    await button('Battle orders').tap()
    assert.deepEqual(await slot.locator('option').evaluateAll(list => list.map(option => option.value)), expected)
    if (current) assert.equal(await slot.inputValue(), current)
    if (choose) {
      await slot.selectOption(choose)
      await page.clock.runFor(50)
      const checkpoint = await page.evaluate(() => JSON.parse(localStorage.getItem('3guotd.checkpoint.v1')))
      assert.equal(checkpoint.round.longSupport, choose === 'drum' ? undefined : choose)
    }
    await button('Back to battle').tap()
  }
  const saveKey = '3guotd.saved-game.v1'
  async function save() {
    await button('Main menu').tap()
    await button('Save game').tap()
    return page.evaluate(key => JSON.parse(localStorage.getItem(key)), saveKey)
  }
  await page.goto(process.argv[2] ?? 'http://localhost:4173/')
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await context.setOffline(true)
  await page.reload()
  assert.equal(await page.evaluate(() => localStorage.getItem('3guotd.cleared-missions.v1')), null)
  await button('Long battle').tap()
  await button('Enter battle').tap()
  const bounds = await board.boundingBox()
  await options(['drum'])
  for (const kind of ['archer', 'drum', 'archer']) await buy(kind)
  await button('Play speed 1×').tap()
  await button('Play speed 2×').tap()
  await page.clock.install({ time: new Date('2030-01-01T00:00:00Z') })
  await page.clock.pauseAt(new Date('2030-01-01T00:00:01Z'))
  await button('Start wave').tap()
  const unlocks = { 2: 'volley', 4: 'crossbow', 6: 'beacon' }
  const available = ['drum']
  let wave = 1
  let selection = 'drum'
  let pending
  for (let tick = 0; tick < 250 && !placed.includes('beacon'); tick++) {
    await page.clock.runFor(200)
    const hud = await page.locator('.resources').innerText()
    const nextWave = Number(hud.match(/Wave (\d+)\//)[1])
    if (nextWave !== wave) {
      wave = nextWave
      pending = unlocks[wave]
      if (pending) {
        available.push(pending)
        assert.match(await readout.innerText(), new RegExp(`${names[pending]} unlocked`))
        await options(available, pending, selection)
        selection = pending
      } else assert.doesNotMatch(await readout.innerText(), /unlocked/)
    }
    assert.equal(await button('Retry wave').count(), 0, 'The live run must reach Wave 6 without a seeded win')
    if (Number(hud.match(/(\d+) silver/)[1]) >= 30) {
      if (pending) {
        await buy(pending)
        pending = undefined
      } else if (![3, 5].includes(wave)) await buy('archer')
    }
  }
  assert.equal(wave, 6)
  assert(placed.includes('beacon'))
  assert.deepEqual(await board.boundingBox(), bounds)
  assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, 480])
  await options(available, 'drum', 'beacon')
  assert.equal(await page.getByRole('button', { name: /^Watch Beacon, row/ }).count(), 1)
  const recorded = await save()
  assert.equal(recorded.round.longSupport, undefined)
  for (const kind of ['volley', 'crossbow', 'beacon']) assert(recorded.round.towers.some(tower => tower.kind === kind))
  await page.reload()
  await button('Restore saved game').tap()
  assert.match(await page.locator('.resources').innerText(), new RegExp(`${recorded.round.silver} silver`))
  for (const kind of ['volley', 'crossbow', 'beacon']) {
    assert.equal(await page.getByRole('button', { name: new RegExp(`^${names[kind]}, row`) }).count(), 1)
  }
  assert.doesNotMatch(await readout.innerText(), /unlocked/)
  await options(available, 'crossbow', 'drum')
  const selected = await save()
  assert.equal(selected.round.longSupport, 'crossbow')
  await page.reload()
  await button('Restore saved game').tap()
  await options(available, undefined, 'crossbow')
  await button('Battle orders').tap()
  await button('Retry wave').tap()
  const retried = await save()
  assert.equal(retried.round.longSupport, 'crossbow')
  assert.equal(retried.round.waveNumber, 6)
  assert.deepEqual(retried.round.towers, recorded.round.opening.towers)
  assert.equal(retried.round.silver, recorded.round.opening.silver)
  assert.equal(retried.round.announceUnlock, undefined)
  // A pre-feature save uses its existing wave number and defaults to Drum.
  await page.evaluate(({ retried, saveKey }) => {
    retried.round.towers = retried.round.towers.filter(tower => ['archer', 'drum'].includes(tower.kind))
    delete retried.round.longSupport
    delete retried.round.rulesVersion
    localStorage.setItem(saveKey, JSON.stringify(retried))
  }, { retried, saveKey })
  await page.reload()
  await button('Restore saved game').tap()
  await options(available, 'volley', 'drum')
  assert.equal(await page.evaluate(() => localStorage.getItem('3guotd.cleared-missions.v1')), null)
  // A final leak can resolve the preceding wave and trigger the unlock in the same tick.
  await button('Main menu').tap()
  await page.evaluate(({ retried, saveKey }) => {
    const opening = { towers: [], silver: 90, lives: 3 }
    const round = { ...retried.round, ...opening, opening, phase: 'running', waveNumber: 1, waveAge: 20,
      longSupport: undefined, rulesVersion: 2, spawned: 9, spawnTimer: 1, previousWave: null,
      enemies: [{ id: 8, kind: 'veteranRunner', progress: 20.99, health: 4, slowed: false, routeIndex: 0 }] }
    localStorage.setItem(saveKey, JSON.stringify({ ...retried, round }))
  }, { retried, saveKey })
  await page.reload()
  await button('Restore saved game').tap()
  await button('Resume').tap()
  await page.clock.runFor(100)
  assert.match(await readout.innerText(), /Volley Platform unlocked.*\nVeteran runner reached the gate/)
  assert.match(await page.getByRole('status').innerText(), /Volley Platform unlocked.*Veteran runner reached the gate/)
  assert(await readout.evaluate(el => {
    const text = el.getBoundingClientRect()
    const row = el.closest('.command-status').getBoundingClientRect()
    return text.top >= row.top && text.bottom <= row.bottom
  }))
  console.log('Offline clean-profile Long Battle reached Wave 6, built all three trial towers, and passed unlock, slot, save, Retry, and legacy checks at 320 × 480.')
} finally {
  await browser.close()
}
