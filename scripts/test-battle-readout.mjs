import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
const tower = (kind, site) => ({ kind, site, reach: false, power: false, cooldown: 0 })

async function load(page, missionId, phase, towers, enemies = []) {
  const waveStats = { stopped: 0, escaped: 0, runnersEscaped: 0, earned: 0 }
  const round = {
    rulesVersion: 2, phase, waveNumber: missionId ? 3 : 1, totalWaves: missionId ? 3 : 20,
    towers, silver: 0, lives: 3, spawned: enemies.length, spawnTimer: 10, enemies,
    opening: { towers, silver: 0, lives: 3 }, shots: [], impacts: [], waveAge: 3,
    rebuildTime: 0, waveStats, previousWave: null, gateHit: null,
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
  console.log('Paused prep stays inside the dock at 320 × 420/480; mixed, zero and full Archer overlap counts passed offline.')
} finally {
  await browser.close()
}
