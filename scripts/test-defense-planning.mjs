import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const baseline = process.argv.includes('--baseline')
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const page = await browser.newPage({ viewport: { width: 320, height: 480 }, isMobile: true, hasTouch: true })
  const button = name => page.getByRole('button', { name, exact: true })
  const status = page.locator('.command-status')
  const key = value => page.keyboard.press(value)
  async function tabTo(locator) {
    await locator.waitFor()
    for (let i = 0; i < 32; i++) {
      if (await locator.evaluate(el => el === document.activeElement)) return
      await key('Tab')
    }
    throw new Error('Unreachable by Tab: ' + await locator.innerText())
  }
  async function activate(locator) {
    await tabTo(locator)
    await key('Enter')
  }
  await page.clock.install()
  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await page.context().setOffline(true)
  await page.reload()
  await activate(button('Campaign'))
  await activate(button('Enter battle'))
  const board = await page.locator('.battlefield').boundingBox()
  await activate(page.locator('[data-suggested="true"]'))
  const cards = page.getByRole('button', { name: /Build Archer/ })
  await cards.waitFor()
  if (!baseline) {
    assert.match(await cards.innerText(), /Hit · (entry|middle|gate)/)
    assert.match(await status.innerText(), /[A-I]\d+ · Tap Build Archer/)
    assert.match(await page.locator('.wave-preview').getAttribute('aria-label'), /Infantry/)
  }
  if (!baseline) {
    const clipped = await page.locator('.command-row button').evaluateAll(controls => controls.flatMap(control => {
      const box = control.getBoundingClientRect()
      const nodes = document.createTreeWalker(control, NodeFilter.SHOW_TEXT)
      const errors = []
      while (nodes.nextNode()) {
        if (!nodes.currentNode.textContent.trim()) continue
        const range = document.createRange()
        range.selectNodeContents(nodes.currentNode)
        for (const rect of range.getClientRects()) {
          if (rect.width && (rect.top < box.top - 1 || rect.bottom > box.bottom + 1 ||
            rect.left < box.left - 1 || rect.right > box.right + 1)) errors.push(nodes.currentNode.textContent)
        }
      }
      return errors
    }))
    assert.deepEqual(clipped, [], 'Visible button labels fit inside their touch targets')
  }
  await activate(cards)
  await activate(page.getByRole('button', { name: /Faster fire/ }))
  if (!baseline) assert.match(await button('Remove & refund').innerText(), /48/)
  await activate(button('Remove & refund'))
  assert.equal(await page.locator('.resources strong').innerText(), '90 silver')
  await activate(cards)
  await activate(page.getByRole('button', { name: /Longer range/ }))
  await activate(page.getByRole('button', { name: /Faster fire/ }))
  if (!baseline) assert.match(await page.locator('.tower-summary').innerText(), /Longer range \+ Faster fire/)
  await activate(button('Start wave'))
  await activate(button('Battle orders'))
  if (!baseline) {
    assert.match(await page.locator('.orders-intel').innerText(), /Infantry/)
    assert.match(await page.locator('.orders-list').innerText(), /Wave start · 1 tower · 15 silver · 3 lives · upgrades kept/)
  }
  await activate(button('Back to battle'))
  await button('Pause').waitFor()
  for (let i = 0; i < 100; i++) {
    if (!/Wave 1\//.test(await page.locator('.resources').innerText()) || await button('Retry wave').count()) break
    await page.clock.runFor(1000)
  }
  assert(!/Wave 1\//.test(await page.locator('.resources').innerText()) || await button('Retry wave').count(), 'Keyboard-only wave reached an outcome')
  assert.deepEqual(await page.locator('.battlefield').boundingBox(), board)
  assert.equal(await page.evaluate(() => document.scrollingElement.scrollHeight - innerHeight), 0)
  console.log(JSON.stringify({ baseline, firstPlacementActions: 2, board, result: await page.locator('.resources').innerText() }))
} finally {
  await browser.close()
}
