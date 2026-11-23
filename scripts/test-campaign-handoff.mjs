import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
const url = process.argv[2] ?? 'http://localhost:4173/'
try {
  const context = await browser.newContext({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, left: 8, right: 8, bottom: 12 } })
  const progressKey = '3guotd.cleared-missions.v1'
  const saveKey = '3guotd.saved-game.v1'
  const button = name => page.getByRole('button', { name, exact: true })
  await page.addInitScript(key => {
    const original = Storage.prototype.setItem
    Storage.prototype.setItem = function (item, value) {
      if (this === localStorage && item === key) {
        original.call(sessionStorage, 'clearWrites', String(Number(sessionStorage.getItem('clearWrites')) + 1))
      }
      original.call(this, item, value)
    }
  }, progressKey)
  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await context.setOffline(true)
  const seedProgress = async through => page.evaluate(({ through, progressKey }) => {
    localStorage.setItem(progressKey, JSON.stringify([
      ...Array.from({ length: 5 }, (_, i) => `village-watch:${i + 1}`),
      ...Array.from({ length: through }, (_, i) => `changban:${i + 1}`),
    ]))
    sessionStorage.setItem('clearWrites', '0')
  }, { through, progressKey })
  await seedProgress(1)
  await page.reload()
  await button('Campaign').tap()
  await page.getByText('Choose level', { exact: true }).tap()
  const lockedTrial = page.locator('.locked-trial')
  assert.match(await lockedTrial.innerText(), /Volley Platform trial · Level 3\s+Locked · clear Hold the Changban Road, level 2/)
  assert(await page.locator('#level option[value="changban:3"]').isDisabled())
  await seedProgress(2)
  await page.reload()
  await button('Campaign').tap()
  await page.getByLabel('Tower loadout').selectOption('volley')
  await button('Enter battle').tap()
  await button('Select marked site').tap()
  await page.getByRole('button', { name: /^Build Archer/ }).tap()
  await page.getByRole('button', { name: /^Longer range/ }).tap()
  await page.locator('.empty-cell').first().tap()
  await page.getByRole('button', { name: /^Build Volley/ }).tap()
  await button('Main menu').tap()
  await button('Save game').tap()
  const trial = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), saveKey)
  assert.equal(trial.missionId, 'changban:3')
  const standard = trial.round.towers.filter(tower => tower.kind === 'archer')
  // Seed the pending final Volley projectile, then let the shipped game resolve the actual clear.
  await page.evaluate(({ trial, saveKey }) => {
    trial.round = { ...trial.round, phase: 'running', waveNumber: 5, spawned: 14, spawnTimer: 1,
      opening: { towers: trial.round.towers, silver: trial.round.silver, lives: trial.round.lives },
      enemies: [{ id: 13, kind: 'infantry', progress: 0.4, health: 1, slowed: false }],
      shots: [{ from: trial.round.towers.filter(tower => tower.kind === 'volley')
        .map(tower => [tower.site % 9, Math.floor(tower.site / 9)])[0], targetId: 13, elapsed: 0.24, volley: true }],
    }
    localStorage.setItem(saveKey, JSON.stringify(trial))
  }, { trial, saveKey })
  await page.reload()
  await button('Restore saved game').tap()
  await page.clock.install()
  await button('Resume').tap()
  await page.clock.runFor(150)
  const handoff = page.locator('.campaign-handoff')
  const readout = page.locator('.battle-readout')
  await handoff.waitFor()
  assert.match(await handoff.innerText(), /Hold the Changban Road · L4/)
  assert.match(await handoff.innerText(), /Silver kept · \+90 grant/)
  assert.match(await handoff.innerText(), /Towers & upgrades kept/)
  assert(await handoff.evaluate(el => {
    const row = el.closest('.command-row').getBoundingClientRect()
    const text = new Range()
    text.selectNodeContents(el)
    return [...text.getClientRects()].every(rect => rect.top >= row.top && rect.bottom <= row.bottom)
  }))
  assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, 480])
  const copyFits = await readout.evaluate(el => {
    const status = el.closest('.command-status').getBoundingClientRect()
    return el.getBoundingClientRect().bottom <= status.bottom
  })
  assert(copyFits)
  const silver = trial.round.silver + 7 + 90 + 30
  assert.match(await page.locator('.resources').innerText(), new RegExp(`${silver} silver`))
  await button('Main menu').tap()
  await button('Save game').tap()
  const carried = await page.evaluate(key => JSON.parse(localStorage.getItem(key)), saveKey)
  assert.equal(carried.missionId, 'changban:4')
  assert.equal(carried.round.silver, silver)
  assert.equal(carried.round.trialRefund, 30)
  assert.deepEqual(carried.round.towers, standard)
  assert.equal(carried.round.supportTower, undefined)
  await page.reload()
  await button('Restore saved game').tap()
  await button('Resume').waitFor()
  assert.match(await readout.innerText(), /\+30 trial refund/)
  assert.match(await page.locator('.resources').innerText(), new RegExp(`${silver} silver`))
  await page.locator('.empty-cell').first().tap()
  assert.deepEqual(await page.locator('.build-card strong').allTextContents(), ['Build Archer', 'Build Drum'])
  assert.deepEqual(await page.evaluate(key => ({
    clears: JSON.parse(localStorage.getItem(key)).filter(id => id === 'changban:3'),
    writes: Number(sessionStorage.getItem('clearWrites')),
  }), progressKey), { clears: ['changban:3'], writes: 1 })
  await button('Main menu').tap()
  await page.evaluate(({ carried, saveKey }) => {
    const won = { ...carried, missionId: 'changban:5', round: { ...carried.round, phase: 'won',
      totalWaves: 7, waveNumber: 7, levelPrepRemainingMs: undefined, trialRefund: undefined } }
    localStorage.setItem(saveKey, JSON.stringify(won))
  }, { carried, saveKey })
  await page.reload()
  await button('Restore saved game').tap()
  assert.match(await handoff.innerText(), /Next · Lanterns at Red Cliffs · Level 1\s+Fresh board · 90 silver/)
  await button('Next battle').tap()
  assert.match(await page.locator('.campaign-carryover').innerText(), /90 silver and an empty board/)
  await button('Enter battle').tap()
  assert.match(await page.locator('.resources').innerText(), /90 silver\s+3 lives/)
  assert.equal(await page.getByRole('button', { name: /^Archer, row/ }).count(), 0)
  console.log('Offline Changban Volley clear, one progress write, exact refund and carryover, restored Level 4 standard loadout, and fresh chapter start passed at 320 × 480.')
} finally {
  await browser.close()
}
