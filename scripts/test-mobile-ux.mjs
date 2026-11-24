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

    const checkCardLabel = async (control, expected) => {
      assert.match(await control.innerText(), expected)
      assert(await control.evaluate(element => {
        const box = element.getBoundingClientRect()
        const range = document.createRange()
        range.selectNodeContents(element)
        return [...range.getClientRects()].every(rect => !rect.width ||
          (rect.top >= box.top - 1 && rect.bottom <= box.bottom + 1 &&
            rect.left >= box.left - 1 && rect.right <= box.right + 1))
      }), `Label fits for ${await control.innerText()}`)
    }

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
    if (height <= 650) {
      await page.getByText('Story', { exact: true }).tap()
      await page.getByText('Choose level', { exact: true }).tap()
      assert.equal(await page.evaluate(() => document.scrollingElement.scrollHeight - innerHeight), 0)
    }
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
    const marked = page.locator('[data-suggested="true"]')
    assert.equal(await marked.count(), 1)
    await marked.tap()
    assert(await fits(card('Archer')))
    await checkCardLabel(card('Archer'), /Build Archer\s+30 silver\s+Hit · (entry|middle|gate)/)
    await checkFrame()
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
    assert.match(await card('Archer').innerText(), /Out of range/)
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
    await page.getByRole('button', { name: /^Archer, row/ }).first().tap()
    await checkCardLabel(page.getByRole('button', { name: /^Longer range/ }), /Longer range\s+18 silver\s+2\.5-tile reach/)
    await checkCardLabel(page.getByRole('button', { name: /^Faster fire/ }), /Faster fire\s+18 silver\s+0\.75 s \/ shot/)
    await checkFrame()
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
    await button('Enemy Types').tap()
    await page.getByRole('rowheader', { name: 'Pursuit commander' }).waitFor()
    await button('Towers').tap()
    await page.getByText(/72% to 82%/).waitFor()
    await button('Back to orders').tap()
    await button('Back to battle').tap()
    await button('Resume').waitFor()
    await button('Play speed 1×').tap()
    await button('Play speed 2×').tap()
    await button('Battle orders').tap()
    await button('Report').tap()
    await page.getByText('Wave 1 summary').tap()
    assert(await fits(button('Close report')))
    await button('Close report').tap()
    await button('Back to battle').tap()
    await button('Resume').waitFor()
    await page.locator('button.useful-site').first().tap()
    await checkFrame()
    await button('Play speed 3×').waitFor()
    await button('Battle orders').tap()
    assert.equal(await page.getByRole('combobox', { name: 'Speed', exact: true }).count(), 0)
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
    await checkCardLabel(page.getByRole('button', { name: /Longer range/ }), /27 silver\s+2\.5-tile reach/)
    await checkFrame()
    assert.deepEqual(errors, [])
    console.log(`Passed offline placement, purchase, refund, and stable board at ${width} × ${height}.`)
  } finally {
    await context.close()
  }
}

async function checkGuideBack() {
  const context = await browser.newContext({ viewport: { width: 320, height: 420 }, isMobile: true, hasTouch: true })
  try {
    const page = await context.newPage()
    const session = await context.newCDPSession(page)
    const insets = { top: 16, right: 8, bottom: 12, left: 8 }
    await session.send('Emulation.setSafeAreaInsetsOverride', { insets })
    const button = name => page.getByRole('button', { name, exact: true })
    const back = async name => {
      const control = button(name)
      const box = await control.boundingBox()
      assert(box && box.width >= 44 && box.height >= 44)
      assert(box.x >= insets.left && box.x + box.width <= 320 - insets.right)
      assert(box.y >= insets.top && box.y + box.height <= 420 - insets.bottom)
      assert.equal(await page.evaluate(() => scrollY), 0)
      await control.tap()
    }
    await page.goto(url)
    await page.getByText('Ready offline').waitFor()
    await context.setOffline(true)
    await page.reload()
    await page.clock.install({ time: new Date('2030-01-01T00:00:00Z') })
    await page.clock.pauseAt(new Date('2030-01-01T00:00:10Z'))
    await button('Campaign').tap()
    await button('Enter battle').tap()
    await button('Select marked site').tap()
    await page.getByRole('button', { name: /Build Archer/ }).tap()
    const selected = page.locator('.cell[aria-pressed="true"]')
    const originalSite = await selected.getAttribute('aria-label')
    assert.match(originalSite, /^Archer, row/)
    await button('Start wave').tap()

    for (const paused of [false, true]) {
      if (paused) await button('Pause').tap()
      for (const guide of ['Enemy Types', 'Towers']) {
        await button('Battle orders').tap()
        await button(guide).tap()
        await page.clock.runFor(60000)
        await back('Back to orders')
        await page.getByRole('heading', { name: 'Battle orders' }).waitFor()
        await back('Back to battle')
        await button(paused ? 'Resume' : 'Pause').waitFor()
        assert.equal(await selected.getAttribute('aria-label'), originalSite)
        assert.equal(await page.locator('.resources strong').innerText(), '60 silver')
        assert.equal(await page.locator('.resources span').last().innerText(), 'Wave 1/3')
      }
    }
    console.log('Passed offline guide Back at 320 × 420 with safe insets, selected Archer, silver, wave and both pause states.')
  } finally {
    await context.close()
  }
}

async function checkPreparation() {
  const context = await browser.newContext({ viewport: { width: 320, height: 480 }, isMobile: true, hasTouch: true })
  try {
    const page = await context.newPage()
    const button = name => page.getByRole('button', { name, exact: true })
    await page.goto(url)
    await page.getByText('Ready offline').waitFor()
    await context.setOffline(true)
    await page.reload()
    await page.clock.install()
    await button('Campaign').tap()
    await button('Enter battle').tap()
    await button('Main menu').tap()
    await button('Save game').tap()
    await page.evaluate(() => {
      const key = '3guotd.saved-game.v1'
      const save = JSON.parse(localStorage.getItem(key))
      save.round.phase = 'won'
      save.round.waveNumber = save.round.totalWaves
      save.speed = 3
      localStorage.setItem(key, JSON.stringify(save))
    })
    await page.reload()
    await button('Restore saved game').tap()
    const clock = page.locator('.prep-clock')
    await clock.getByText('10', { exact: true }).waitFor()
    const target = await page.locator('.cells button').evaluateAll(cells => {
      const ring = document.querySelector('.prep-clock').getBoundingClientRect()
      const board = document.querySelector('.battlefield').getBoundingClientRect()
      if (Math.abs(board.x + board.width / 2 - ring.x - ring.width / 2) > 1 ||
          Math.abs(board.y + board.height / 2 - ring.y - ring.height / 2) > 1) return null
      for (const cell of cells) {
        const rect = cell.getBoundingClientRect()
        const x = rect.x + rect.width / 2, y = rect.y + rect.height / 2
        if (Math.hypot(x - ring.x - ring.width / 2, y - ring.y - ring.height / 2) < ring.width / 2 &&
            document.elementFromPoint(x, y) === cell) return { x, y, label: cell.getAttribute('aria-label') }
      }
      return null
    })
    assert(target, 'Centered timer leaves covered build sites tappable')
    const beforeSelection = await page.locator('.resources').innerText()
    await page.touchscreen.tap(target.x, target.y)
    assert.equal(await button(target.label).getAttribute('aria-pressed'), 'true')
    assert.equal(await page.locator('.resources').innerText(), beforeSelection)
    await page.getByRole('button', { name: /Build Archer/ }).tap()
    assert.equal(await page.locator('.cells [aria-pressed="true"]').getAttribute('aria-label'),
      target.label.replace('Empty tile', 'Archer'))
    await button('Pause').tap()
    const held = await clock.innerText()
    await page.clock.runFor(12000)
    assert.equal(await clock.innerText(), held)
    await button('Battle orders').tap()
    await button('Towers').tap()
    await page.clock.runFor(12000)
    await button('Back to orders').tap()
    await button('Back to battle').tap()
    assert.equal(await clock.innerText(), held)
    await button('Resume').tap()
    await page.clock.runFor(8000)
    assert(Number(await clock.innerText()) <= 2)
    await page.clock.runFor(2150)
    assert.equal(await clock.count(), 0)
    await button('Pause').waitFor()
    assert.equal(await page.getByRole('button', { name: /^Archer, row/ }).count(), 1)
    console.log('Passed offline centered countdown, purchase through ring, pause/help and automatic combat at 3×.')
  } finally {
    await context.close()
  }
}

try {
  await checkGuideBack()
  await checkPreparation()
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
