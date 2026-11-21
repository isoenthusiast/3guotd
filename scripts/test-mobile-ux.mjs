import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })

async function checkPhone(width, height, previousBoardWidth) {
  const context = await browser.newContext({ viewport: { width, height }, hasTouch: true, isMobile: true })
  try {
    const page = await context.newPage()
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    const button = name => page.getByRole('button', { name, exact: true })
    const card = kind => page.getByRole('button', { name: new RegExp(`Build ${kind}`) })
    const fits = locator => locator.evaluate(element => {
      const box = element.getBoundingClientRect()
      return box.top >= 0 && box.bottom <= innerHeight + 1 && box.left >= 0 && box.right <= innerWidth + 1
    })

    await page.goto(url)
    await page.getByText('Ready offline').waitFor()
    await context.setOffline(true)
    await page.reload()
    await button('Campaign').tap()
    assert(await fits(button('Enter battle')))
    await button('Enter battle').tap()

    const board = page.locator('.battlefield')
    const original = await board.boundingBox()
    // Worst case is the old 19-step Wuzhang road. Every shorter road also gains four steps.
    const longestRoadPixels = 23 * original.width / 9
    assert(longestRoadPixels > 19 * previousBoardWidth / 8, 'Route must grow in rendered CSS pixels')
    const checkFrame = async () => {
      const current = await board.boundingBox()
      assert(await fits(board))
      const overflow = await page.evaluate(() => {
        const root = document.scrollingElement
        return [root.scrollWidth - innerWidth, root.scrollHeight - innerHeight, scrollX, scrollY]
      })
      assert.deepEqual(overflow, [0, 0, 0, 0], 'Battle and controls fit without scrolling')
      for (const prop of ['x', 'y', 'width', 'height']) {
        assert(Math.abs(current[prop] - original[prop]) < 1, `Board ${prop} moved during purchase at ${width} × ${height}`)
      }
    }
    for (const label of ['Empty tile, row 1, column 3', 'Empty tile, row 13, column 6']) {
      const nearLandmark = button(label)
      await nearLandmark.tap()
      assert.equal(await nearLandmark.getAttribute('aria-pressed'), 'true')
      await checkFrame()
    }
    const tile = button('Empty tile, row 13, column 9')
    const box = await tile.boundingBox()
    assert(box.width >= 24 && box.height >= 24, 'Touch tiles must measure at least 24 CSS pixels')
    for (const column of [8, 9]) {
      const cell = button(`Empty tile, row 13, column ${column}`)
      const target = await cell.boundingBox()
      await page.touchscreen.tap(target.x + target.width / 2, target.y + target.height / 2)
      assert.equal(await cell.getAttribute('aria-pressed'), 'true')
    }
    console.log(`Board at ${width} × ${height}: ${original.width.toFixed(1)} × ${original.height.toFixed(1)}, tile ${box.width.toFixed(1)} px.`)
    await button('Empty tile, row 1, column 9').tap()
    await checkFrame()
    assert.match(await card('Archer').innerText(), /Road out of range/)
    for (const kind of ['Archer', 'Drum', 'Archer']) {
      await page.locator('button.useful-site').first().tap()
      await checkFrame()
      assert(await fits(card(kind)))
      await card(kind).tap()
      await checkFrame()
      assert(await fits(page.locator('.actions')))
    }
    assert(await fits(page.locator('.action-note')))
    await button('Remove & refund').tap()
    await checkFrame()
    await button('Start wave').tap()
    await button('Pause').tap()
    await checkFrame()
    assert(await fits(button('Resume')))
    await button('Main menu').tap()
    await button('Save game').tap()
    await page.evaluate(() => {
      const key = '3guotd.saved-game.v1'
      const saved = JSON.parse(localStorage.getItem(key))
      saved.round.waveNumber = 2
      saved.round.previousWave = { ...saved.round.waveStats, waveNumber: 1 }
      localStorage.setItem(key, JSON.stringify(saved))
    })
    await page.reload()
    await button('Restore saved game').tap()
    await button('Report').tap()
    await page.getByText('Wave 1 summary').tap()
    assert(await fits(button('Close report')))
    await button('Close report').tap()
    await page.locator('button.useful-site').first().tap()
    await checkFrame()
    assert.deepEqual(errors, [])
    console.log(`Passed offline placement, purchase, refund, and stable board at ${width} × ${height}.`)
  } finally {
    await context.close()
  }
}

try {
  // Board widths measured on the preceding 8 × 12 release.
  await checkPhone(320, 480, 210.66)
  await checkPhone(320, 568, 229.33)
  await checkPhone(320, 640, 277.33)
  await checkPhone(320, 740, 308)
  await checkPhone(390, 740, 344)
} finally {
  await browser.close()
}
