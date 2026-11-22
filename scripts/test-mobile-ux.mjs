import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })

async function checkPhone(width, height, previousBoardWidth, insets = { top: 0, left: 0, bottom: 0, right: 0 }) {
  const context = await browser.newContext({ viewport: { width, height }, hasTouch: true, isMobile: true })
  try {
    const page = await context.newPage()
    const session = await context.newCDPSession(page)
    await session.send('Emulation.setSafeAreaInsetsOverride', { insets })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    const button = name => page.getByRole('button', { name, exact: true })
    const card = kind => page.getByRole('button', { name: new RegExp(`Build ${kind}`) })
    const fits = locator => locator.evaluate((element, safe) => {
      const box = element.getBoundingClientRect()
      return box.top >= safe.top && box.bottom <= innerHeight - safe.bottom + 0.01
        && box.left >= safe.left && box.right <= innerWidth - safe.right + 0.01
    }, insets)

    const checkMenu = async () => {
      assert(await fits(page.locator('.title-screen h1')), 'Title clears the top safe area')
      for (const control of await page.locator('.title-screen button:enabled').all()) {
        assert(await fits(control), `Menu control clears the safe area: ${await control.innerText()}`)
      }
    }

    await page.goto(url)
    await page.getByText('Ready offline').waitFor()
    await checkMenu()
    await context.setOffline(true)
    await page.reload()
    await button('Campaign').tap()
    assert(await fits(button('Enter battle')))
    await button('Enter battle').tap()

    const board = page.locator('.battlefield')
    const original = await board.boundingBox()
    // Both releases use the same 9 × 13 grid and the same routes.
    const longestRoadPixels = 23 * original.width / 9
    assert(original.width + 0.01 >= previousBoardWidth, 'Map must retain its live touchable width')
    assert(longestRoadPixels + 0.03 >= 23 * previousBoardWidth / 9, 'Wuzhang route must retain its rendered length')
    const checkFrame = async () => {
      const current = await board.boundingBox()
      assert(await fits(board))
      const controls = page.locator('.battle-header button, .command-bar button')
      for (const control of await controls.all()) {
        const box = await control.boundingBox()
        assert(box.width >= 44 && box.height >= 44 && await fits(control), 'Core controls fit at 44 × 44 or larger')
        assert(box.y + box.height <= current.y || box.y >= current.y + current.height, 'Controls must clear the map')
      }
      const overflow = await page.evaluate(() => {
        const root = document.scrollingElement
        return [root.scrollWidth - innerWidth, root.scrollHeight - innerHeight, scrollX, scrollY]
      })
      assert.deepEqual(overflow, [0, 0, 0, 0], 'Battle and controls fit without scrolling')
      for (const prop of ['x', 'y', 'width', 'height']) {
        assert(Math.abs(current[prop] - original[prop]) < 1, `Board ${prop} moved during purchase at ${width} × ${height}`)
      }
    }
    // Probe inside opposing corners of every buildable cell to catch clipped or covered targets.
    const missed = await page.locator('.cells button').evaluateAll(cells => cells.filter(cell => {
      const box = cell.getBoundingClientRect()
      return [[box.left + 2, box.top + 2], [box.right - 2, box.bottom - 2]]
        .some(([x, y]) => document.elementFromPoint(x, y) !== cell)
    }).length)
    assert.equal(missed, 0)
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
    await checkMenu()
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
    await button('Battle orders').tap()
    await page.getByLabel('Speed', { exact: true }).selectOption('3')
    await button('Report').tap()
    await page.getByText('Wave 1 summary').tap()
    assert(await fits(button('Close report')))
    await button('Close report').tap()
    await button('Back to battle').tap()
    await button('Resume').waitFor()
    await page.locator('button.useful-site').first().tap()
    await checkFrame()
    await button('Battle orders').tap()
    assert.equal(await page.getByLabel('Speed', { exact: true }).inputValue(), '3')
    await button('Retry wave').tap()
    await button('Start wave').waitFor()
    await page.getByRole('button', { name: /^Archer, row/ }).first().tap()
    await page.getByRole('button', { name: /Faster fire/ }).tap()
    await checkFrame()
    await button('Start wave').tap()
    await button('Battle orders').tap()
    await button('Retry wave').tap()
    await page.getByRole('button', { name: /^Archer, row/ }).first().tap()
    assert.equal(await page.getByRole('button', { name: /Faster fire/ }).count(), 0)
    assert.match(await page.getByRole('button', { name: /Longer range/ }).innerText(), /27 silver/)
    await checkFrame()
    assert.deepEqual(errors, [])
    console.log(`Passed offline placement, purchase, refund, and stable board at ${width} × ${height}.`)
  } finally {
    await context.close()
  }
}

try {
  // CSS pixels measured on live ab1ab68.
  await checkPhone(320, 480, 218.765625)
  await checkPhone(320, 568, 232.8125)
  await checkPhone(320, 640, 268.609375)
  await checkPhone(320, 740, 308)
  await checkPhone(390, 740, 346.140625)
  await checkPhone(390, 740, 346.140625, { top: 44, bottom: 34, left: 8, right: 8 })
} finally {
  await browser.close()
}
