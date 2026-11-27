import assert from 'node:assert/strict'
import { mkdirSync } from 'node:fs'
import { chromium } from 'playwright'

const [url = 'http://localhost:4173/', baseline] = process.argv.slice(2)
const screenshots = process.env.DENSITY_EVIDENCE
if (screenshots) mkdirSync(screenshots, { recursive: true })
const kinds = ['infantry', 'veteran', 'runner', 'veteranRunner', 'bowman', 'cavalry', 'commander']
const towers = [30, 39, 42, 48, 53, 57, 63, 67, 71, 78, 84, 92]
  .map((site, index) => ({ site, kind: index % 4 === 0 ? 'drum' : 'archer', reach: false, power: false, cooldown: 0 }))
const save = { version: 2, missionId: 'jing:5', speed: 1, round: {
  rulesVersion: 2, phase: 'running', totalWaves: 7, waveNumber: 7, silver: 90, lives: 3, towers,
  opening: { towers, silver: 90, lives: 3 }, waveAge: 4, spawned: 19, spawnTimer: 10, rebuildTime: 0,
  previousWave: null, gateHit: null, waveStats: { stopped: 0, escaped: 0, runnersEscaped: 0, earned: 0 },
  enemies: Array.from({ length: 24 }, (_, id) => ({ id, kind: kinds[id % kinds.length], progress: 2 + id * .56, health: 3, slowed: id % 2 === 0, routeIndex: id % 2 })),
  shots: Array.from({ length: 22 }, (_, id) => ({ targetId: id, from: [3, 4], elapsed: .11 })),
  impacts: Array.from({ length: 12 }, (_, id) => ({ at: [2 + id % 3, 5], elapsed: .08, silver: id % 2 ? 7 : 0 })),
} }

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
async function inspect(address, viewport, dpr, old = false) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: dpr, hasTouch: true, isMobile: true })
  try {
    const page = await context.newPage()
    await page.addInitScript(() => {
      window.densityLabels = new Set()
      const fillText = CanvasRenderingContext2D.prototype.fillText
      CanvasRenderingContext2D.prototype.fillText = function (text, ...args) {
        if (this.canvas.closest('.battlefield')) window.densityLabels.add(String(text))
        return fillText.call(this, text, ...args)
      }
    })
    const cdp = await context.newCDPSession(page)
    await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 16, right: 8, bottom: 12, left: 8 } })
    await page.goto(address)
    await page.getByText('Ready offline', { exact: true }).waitFor()
    await page.evaluate(save => localStorage.setItem('3guotd.saved-game.v1', JSON.stringify(save)), save)
    await context.setOffline(true)
    await page.reload()
    const button = name => page.getByRole('button', { name, exact: true })
    await button('Restore saved game').tap()
    const board = page.locator('.battlefield')
    const canvas = board.locator('canvas')
    const bounds = await board.boundingBox()
    await page.waitForFunction(old => {
      const element = document.querySelector('.battlefield canvas')
      if (!element || !window.densityLabels.has('Ferry landing')) return false
      const { width, height } = element.getBoundingClientRect()
      return old ? element.width === 576 && element.height === 832
        : element.width === Math.max(576, Math.round(width * Math.min(devicePixelRatio, 3))) &&
          element.height === Math.max(832, Math.round(height * Math.min(devicePixelRatio, 3)))
    }, old)
    const raster = await canvas.evaluate(element => {
      const ctx = element.getContext('2d')
      const { data } = ctx.getImageData(0, 0, element.width, element.height)
      let healthPixels = 0
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] === 232 && data[i + 1] === 246 && data[i + 2] === 155) healthPixels++
      }
      return { width: element.width, height: element.height, healthPixels }
    })
    assert(raster.healthPixels > 0)
    for (const label of ['Entry 1', 'Entry 2', 'Ferry landing']) {
      assert(await page.evaluate(text => window.densityLabels.has(text), label))
    }
    if (screenshots) await board.screenshot({ path: `${screenshots}/${old ? 'baseline' : 'candidate'}-${viewport.width}x${viewport.height}-dpr${dpr}.png` })

    for (const column of [8, 9]) {
      const cell = button(`Empty tile, row 1, column ${column}`)
      const target = await cell.boundingBox()
      await page.touchscreen.tap(target.x + target.width / 2, target.y + target.height / 2)
      assert.equal(await cell.getAttribute('aria-pressed'), 'true')
      assert.deepEqual(await board.boundingBox(), bounds)
      assert.equal(await page.locator('.build-card').count(), 2)
    }
    assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [viewport.width, viewport.height])
    const cells = await page.locator('.cells button').evaluateAll(elements => elements.map(el => {
      const { x, y, width, height } = el.getBoundingClientRect()
      return [x, y, width, height]
    }))
    await button('Resume').tap()
    const pacing = await page.evaluate(async () => {
      const frames = []
      let previous = await new Promise(requestAnimationFrame)
      for (let index = 0; index < 72; index++) {
        const now = await new Promise(requestAnimationFrame)
        frames.push(now - previous)
        previous = now
      }
      return { p95: Number([...frames].sort((a, b) => a - b)[Math.floor(frames.length * .95)].toFixed(2)),
        over25: frames.filter(duration => duration > 25).length, samples: frames.length }
    })
    assert(pacing.p95 < 50, 'Busy board frame pacing exceeded 50 ms at p95')
    if (!old) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height + 40 })
      await page.waitForFunction(() => {
        const element = document.querySelector('.battlefield canvas')
        const { width, height } = element.getBoundingClientRect()
        return element.width === Math.max(576, Math.round(width * Math.min(devicePixelRatio, 3)))
          && element.height === Math.max(832, Math.round(height * Math.min(devicePixelRatio, 3)))
      })
    }
    if (!old && dpr === 1) {
      const resized = { width: viewport.width, height: viewport.height + 40 }
      await cdp.send('Emulation.setDeviceMetricsOverride', { ...resized, mobile: true, deviceScaleFactor: 4 })
      await page.waitForFunction(() => {
        const element = document.querySelector('.battlefield canvas')
        const { width, height } = element.getBoundingClientRect()
        return devicePixelRatio === 4 && element.width === Math.max(576, Math.round(width * 3))
          && element.height === Math.max(832, Math.round(height * 3))
      })
    }
    console.log(JSON.stringify({ build: old ? 'baseline' : 'candidate', viewport, dpr, bounds, raster, pacing }))
    return { bounds, cells }
  } finally {
    await context.close()
  }
}
try {
  for (const viewport of [{ width: 320, height: 480 }, { width: 390, height: 740 }]) {
    let reference
    for (const dpr of [1, 2, 3]) {
      const candidate = await inspect(url, viewport, dpr)
      if (baseline) assert.deepEqual(candidate, await inspect(baseline, viewport, dpr, true))
      if (reference) assert.deepEqual(candidate, reference)
      reference = candidate
    }
  }
} finally {
  await browser.close()
}
