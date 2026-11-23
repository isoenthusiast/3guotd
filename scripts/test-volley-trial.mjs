import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const trials = [
  { kind: 'volley', card: 'Volley', name: 'Volley Platform', chapter: 'changban', level: 3, previousWaves: 4 },
  { kind: 'crossbow', card: 'Crossbow', name: 'Heavy Crossbow', chapter: 'jing', level: 5, previousWaves: 6 },
  { kind: 'beacon', card: 'Beacon', name: 'Watch Beacon', chapter: 'wuzhang', level: 3, previousWaves: 4 },
]
const trial = trials.find(trial => process.argv.includes(`--${trial.kind}`)) ?? trials[0]
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const context = await browser.newContext({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, left: 8, right: 8, bottom: 12 } })
  const button = name => page.getByRole('button', { name, exact: true })
  const card = kind => page.getByRole('button', { name: new RegExp(`^Build ${kind}`) })
  const selectTrial = page.getByLabel('Tower loadout')
  const board = page.locator('.battlefield')
  const save = async () => {
    await button('Main menu').tap()
    await button('Save game').tap()
    return page.evaluate(() => JSON.parse(localStorage.getItem('3guotd.saved-game.v1')))
  }
  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await context.setOffline(true)
  await page.reload()
  const chapters = ['village-watch', 'changban', 'red-cliffs', 'jing', 'yiling', 'wuzhang']
  const completedChapters = chapters.slice(0, chapters.indexOf(trial.chapter))
  const clears = [...completedChapters.flatMap(chapter => Array.from({ length: 5 }, (_, i) => `${chapter}:${i + 1}`)),
    ...Array.from({ length: trial.level - 1 }, (_, i) => `${trial.chapter}:${i + 1}`)]
  await page.evaluate(clears => localStorage.setItem('3guotd.cleared-missions.v1', JSON.stringify(clears)), clears)
  await page.reload()
  await button('Campaign').tap()
  assert.equal(await selectTrial.inputValue(), 'drum')
  await selectTrial.selectOption(trial.kind)
  if (trial.kind === 'crossbow') {
    await page.getByText('Choose level', { exact: true }).tap()
    await page.locator('#battle').selectOption('changban')
    await page.locator('#level').selectOption('changban:3')
    assert.equal(await selectTrial.inputValue(), 'drum')
    await selectTrial.selectOption('volley')
    await page.locator('#battle').selectOption('jing')
    await page.locator('#level').selectOption('jing:5')
    assert.equal(await selectTrial.inputValue(), 'drum')
    await selectTrial.selectOption('crossbow')
  }
  await button('Enter battle').tap()
  const bounds = await board.boundingBox()
  await button('Select marked site').tap()
  assert.deepEqual(await board.boundingBox(), bounds)
  assert.equal(await page.locator('.build-card').count(), 2)
  assert.equal(await card('Drum').count(), 0)
  for (const control of await page.locator('.command-row button').all()) {
    const box = await control.boundingBox()
    assert(box.width >= 44 && box.height >= 44 && box.x >= 8 && box.x + box.width <= 312 && box.y + box.height <= 468)
    assert(await control.evaluate(el => {
      const box = el.getBoundingClientRect()
      const range = document.createRange()
      range.selectNodeContents(el)
      return [...range.getClientRects()].every(rect => !rect.width ||
        (rect.top >= box.top - 1 && rect.bottom <= box.bottom + 1 && rect.left >= box.left - 1 && rect.right <= box.right + 1))
    }), `Label fits for ${await control.innerText()}`)
  }
  assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, 480])
  await card(trial.card).tap()
  assert.equal(await page.getByRole('button', { name: new RegExp(`^${trial.name}, row`) }).count(), 1)
  assert.equal(await page.locator('.purchase-card').count(), 0)
  assert.doesNotMatch(await page.locator('.command-status').innerText(), /upgrade/i)
  await button('Remove & refund').tap()
  assert.match(await page.locator('.resources').innerText(), /90 silver/)
  let remainingSilver = 60
  if (trial.kind === 'beacon') {
    assert.match(await card('Beacon').innerText(), /No link/)
    await button('Empty tile, row 2, column 6').tap()
    await card('Archer').tap()
    await button('Empty tile, row 2, column 4').tap()
    assert.match(await card('Beacon').innerText(), /Archer F2/)
    await card('Beacon').tap()
    assert.match(await page.locator('.command-location').innerText(), /Archer F2/)
    await button('Archer, row 2, column 6').tap()
    assert.match(await page.getByRole('button', { name: /^Faster fire/ }).innerText(), /unlinked/)
    remainingSilver = 30
  } else await card(trial.card).tap()
  await button('Start wave').tap()
  await button('Pause').tap()
  const saved = await save()
  assert.equal(saved.round.supportTower, trial.kind)
  assert.equal(saved.round.silver, remainingSilver)
  await page.reload()
  await button('Restore saved game').tap()
  await button('Resume').waitFor()
  await button('Battle orders').tap()
  await button('Retry wave').tap()
  await button('Start wave').waitFor()
  assert.match(await page.locator('.resources').innerText(), new RegExp(`${remainingSilver} silver`))
  assert.equal(await page.getByRole('button', { name: new RegExp(`^${trial.name}, row`) }).count(), 1)
  assert.deepEqual(await board.boundingBox(), bounds)

  // Reach the same briefing through the natural story-completion entry point.
  await button('Main menu').tap()
  await page.evaluate(({ record, trial }) => {
    const drum = { kind: 'drum', site: 16, power: false, reach: true, cooldown: 1 }
    record.missionId = `${trial.chapter}:${trial.level - 1}`
    delete record.round.supportTower
    Object.assign(record.round, {
      phase: 'won', totalWaves: trial.previousWaves, waveNumber: trial.previousWaves, towers: [drum], opening: null,
      enemies: [], shots: [], impacts: [], spawned: 0,
    })
    localStorage.setItem('3guotd.saved-game.v1', JSON.stringify(record))
  }, { record: saved, trial })
  await page.reload()
  await button('Restore saved game').tap()
  await selectTrial.selectOption(trial.kind)
  await button('Enter battle').tap()
  await page.locator('.prep-clock').waitFor()
  await page.getByRole('button', { name: /^Drum, row/ }).tap()
  await page.getByRole('button', { name: /^Stronger slow 27 silver/ }).tap()
  assert.equal(await page.getByRole('button', { name: /^Drum, row/ }).count(), 1)
  const carried = await save()
  assert.equal(carried.round.supportTower, trial.kind)
  assert.equal(carried.round.towers[0].power, true)
  console.log(`Offline 320 × 480: two-card briefing loadout, stable dock, purchase/refund, saved ${trial.name}, Retry, and retained Drum upgrade passed.`)
} finally {
  await browser.close()
}
