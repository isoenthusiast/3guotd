import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })

async function checkPhone(width, height) {
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
    const checkFrame = async () => {
      const current = await board.boundingBox()
      for (const prop of ['x', 'y', 'width', 'height']) {
        assert(Math.abs(current[prop] - original[prop]) < 1, `Board ${prop} moved during purchase at ${width} × ${height}`)
      }
    }
    await button('Empty tile, row 12, column 8').tap()
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
    assert(await fits(button('Resume')))
    assert.deepEqual(errors, [])
    console.log(`Passed offline placement, purchase, refund, and stable board at ${width} × ${height}.`)
  } finally {
    await context.close()
  }
}

try {
  await checkPhone(320, 480)
  await checkPhone(390, 740)
} finally {
  await browser.close()
}
