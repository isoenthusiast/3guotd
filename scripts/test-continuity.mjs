import assert from 'node:assert/strict'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://127.0.0.1:4187/'
const artifacts = fileURLToPath(new URL('../evidence.local/', import.meta.url))
mkdirSync(artifacts, { recursive: true })
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
const context = await browser.newContext({ viewport: { width: 320, height: 480 }, isMobile: true, hasTouch: true })
await context.addInitScript(() => {
  window.checkpointWrites = 0
  const setItem = Storage.prototype.setItem
  Storage.prototype.setItem = function(key, value) {
    if (key === '3guotd.checkpoint.v1') window.checkpointWrites++
    return setItem.call(this, key, value)
  }
})
const page = await context.newPage()
const errors = []
page.on('pageerror', error => errors.push(error.message))
const button = name => page.getByRole('button', { name, exact: true })
const manualKey = '3guotd.saved-game.v1'
const autoKey = '3guotd.checkpoint.v1'
async function reload() {
  await page.reload()
  await page.getByText('Ready offline', { exact: true }).waitFor()
}
async function fits(locator) {
  await locator.scrollIntoViewIfNeeded()
  const box = await locator.boundingBox()
  assert(box && box.x >= 0 && box.y >= 0 && box.x + box.width <= 320.1 && box.y + box.height <= 480.1)
  assert(box.height >= 44, 'Action target stays at least 44 px high')
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false)
  return { width: +box.width.toFixed(1), height: +box.height.toFixed(1) }
}
try {
  await page.goto(url)
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await context.setOffline(true)
  await reload()
  await page.getByText('Offline & version', { exact: true }).click()
  await page.getByText(/Airplane mode is safe/).waitFor()
  assert.match(await page.locator('.offline-details').first().innerText(), /Cached build [a-f0-9]{8}/)
  console.log('Passed: production cache verified, build identified, airplane-mode reload.')
  await page.evaluate(async () => {
    const name = (await caches.keys()).find(key => key.startsWith('3guotd:'))
    const cache = await caches.open(name)
    const request = (await cache.keys()).find(key => key.url.endsWith('.css'))
    await cache.delete(request)
    await cache.delete((await cache.keys()).find(key => key.url.endsWith('icon-512.png')))
    navigator.serviceWorker.dispatchEvent(new Event('controllerchange'))
  })
  await page.getByText('Offline files incomplete · reconnect and reload', { exact: true }).waitFor()
  await context.setOffline(false)
  await reload()
  await page.getByText('Ready offline', { exact: true }).waitFor()
  await context.setOffline(true)
  await reload()
  await page.getByText('Ready offline', { exact: true }).waitFor()
  assert.equal(await page.locator('.menu-actions').evaluate(el => getComputedStyle(el).display), 'grid')
  console.log('Passed: cache loss reported offline; reconnect/reload repaired missing CSS and icon; second offline reload styled.')

  for (const fontSize of [24, 32]) {
    await page.evaluate(size => { document.documentElement.style.fontSize = `${size}px` }, fontSize)
    await button('Campaign').click()
    await page.getByText('Story', { exact: true }).click()
    await page.getByText('Campaign recap', { exact: true }).click()
    await page.getByText('Choose level', { exact: true }).click()
    await page.getByText(/Locked · clear Hold the Changban Road/).scrollIntoViewIfNeeded()
    const briefing = page.getByRole('region', { name: 'Mission briefing' })
    await briefing.focus()
    const before = await briefing.evaluate(node => node.scrollTop)
    await page.keyboard.press('Home')
    await page.keyboard.press('ArrowDown')
    await fits(page.locator('#battle'))
    await fits(page.locator('#level'))
    const box = await fits(button('Enter battle'))
    await page.screenshot({ path: `${artifacts}/briefing-${fontSize}.png` })
    console.log(`Measured 320×480, ${fontSize / 16 * 100}% text: Enter battle ${box.width}×${box.height}; scrollable briefing ${await briefing.evaluate(node => node.scrollHeight)} px (initial scroll ${before}).`)
    await button('Main menu').click()
    await fits(button('Campaign'))
    await fits(button('Long battle'))
    await button('Long battle').click()
    await fits(page.locator('#waves'))
    await page.selectOption('#waves', '100')
    assert.match(await page.getByRole('region', { name: 'Long battle setup' }).innerText(), /five times as many waves/)
    await fits(button('Enter battle'))
    await button('Main menu').click()
  }
  await page.evaluate(() => { document.documentElement.style.fontSize = '' })

  await page.evaluate(() => localStorage.setItem('3guotd.cleared-missions.v1', JSON.stringify(
    Array.from({ length: 5 }, (_, i) => `village-watch:${i + 1}`))))
  await reload()
  await button('Campaign').click()
  await page.getByRole('heading', { name: 'Hold the Changban Road · Level 1' }).waitFor()
  await page.getByText('Choose level', { exact: true }).click()
  assert.match(await page.getByRole('region', { name: 'Campaign progress' }).innerText(), /5\/30 levels cleared/)
  await page.getByText('Campaign recap', { exact: true }).click()
  assert.match(await page.locator('.mission-briefing').innerText(), /Cao Cao|Liu Bei/)
  await button('Enter battle').click()
  await button('Select marked site').click()
  await page.getByRole('button', { name: /Build Archer/ }).click()
  await button('Main menu').click()
  await button('Save game').click()
  const manual = await page.evaluate(key => localStorage.getItem(key), manualKey)
  await button('Long battle').click()
  await button('Enter battle').click()
  await button('Replace and enter battle').click()
  await button('Select marked site').click()
  await page.getByRole('button', { name: /Build Archer/ }).click()
  await button('Start wave').click()
  await page.waitForFunction(key => JSON.parse(localStorage.getItem(key))?.missionId === null
    && JSON.parse(localStorage.getItem(key))?.round.phase === 'running', autoKey)
  await page.evaluate(() => window.dispatchEvent(new Event('pagehide')))
  await reload()
  assert.equal(await button('Continue').count(), 0, 'Reload does not pretend a checkpoint is an active run')
  await button('Recover checkpoint').waitFor()
  assert.match(await page.locator('.recovery-card').innerText(), /Automatic · Long battle/)
  await button('Recover checkpoint').click()
  await button('Resume').waitFor()
  assert.equal(await page.getByRole('button', { name: /^Archer, row/ }).count(), 1)
  assert.equal(await page.evaluate(key => localStorage.getItem(key), manualKey), manual)
  await button('Main menu').click()
  assert.match(await page.locator('.run-summary').innerText(), /Active run · Long battle/)
  assert.match(await button('Restore saved game').innerText(), /Manual · Hold the Changban Road/)
  const writes = await page.evaluate(() => window.checkpointWrites)
  await page.waitForTimeout(2200)
  await page.evaluate(() => window.dispatchEvent(new Event('pagehide')))
  assert.equal(await page.evaluate(() => window.checkpointWrites), writes, 'Unchanged paused/menu state is not rewritten')
  const otherTab = await context.newPage()
  await otherTab.goto(url)
  await otherTab.evaluate(([key, value]) => localStorage.setItem(key, value), [autoKey, manual])
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, get: () => true })
    document.dispatchEvent(new Event('visibilitychange'))
    window.dispatchEvent(new Event('pagehide'))
  })
  await page.waitForTimeout(1200)
  assert.equal(await page.evaluate(() => window.checkpointWrites), writes, 'Stale hidden tab does not rewrite a checkpoint')
  assert.equal(await page.evaluate(key => localStorage.getItem(key), autoKey), manual)
  assert.equal(await page.evaluate(key => localStorage.getItem(key), manualKey), manual)
  await page.evaluate(() => { delete document.hidden })
  await otherTab.close()
  console.log('Passed: one-second changed-state checkpoint; no repeated paused/menu or stale hidden-tab writes; manual bytes unchanged.')
  await button('Restore saved game').click()
  await page.goBack()
  await button('Continue').waitFor()
  await button('Restore saved game').click()
  await button('Replace with saved game').click()
  await page.getByRole('img', { name: /Hold the Changban Road/ }).waitFor()
  await button('Battle orders').click()
  await button('Enemy Types').click()
  for (const fontSize of [24, 32]) {
    await page.evaluate(size => { document.documentElement.style.fontSize = `${size}px` }, fontSize)
    await fits(button('Back to orders'))
    await fits(button('Towers'))
  }
  await page.evaluate(() => { document.documentElement.style.fontSize = '' })
  await button('Back to orders').click()
  await button('Back to battle').click()
  console.log('Passed: next chapter, cleared/locked explanations, recap; active, manual and automatic slots remain distinct; recovery paused; confirmation Back preserved.')

  await button('Main menu').click()
  await reload() // No active run can repair the slot via pagehide during this corrupt-storage fixture.
  await page.evaluate(key => localStorage.setItem(key, '{broken'), autoKey)
  await reload()
  assert.equal(await button('Recover checkpoint').count(), 0)
  await button('Restore saved game').click()
  await button('Main menu').click()
  await page.evaluate(([key, auto]) => {
    const saved = JSON.parse(localStorage.getItem(key))
    saved.version = 1
    delete saved.round.rulesVersion
    for (const towers of [saved.round.towers, saved.round.opening?.towers ?? []]) {
      for (const tower of towers) tower.site = Math.floor(tower.site / 9) * 8 + tower.site % 9
    }
    localStorage.setItem(key, JSON.stringify(saved))
    localStorage.removeItem(auto)
  }, [manualKey, autoKey])
  await reload()
  await button('Restore saved game').click()
  assert.equal(await page.getByRole('button', { name: /^Archer, row/ }).count(), 1)
  await button('Main menu').click()
  await button('Restart level').click()
  await button('Restart from wave one').click()
  assert.equal(await page.getByRole('button', { name: /^Archer, row/ }).count(), 0)
  await page.waitForFunction(key => JSON.parse(localStorage.getItem(key))?.round.rulesVersion === 2, autoKey)
  assert.deepEqual(errors, [])
  console.log('Passed: corrupt automatic checkpoint refused; v1 manual save migrated; explicit restart uses current rules; no browser errors.')
} finally {
  await context.close()
  await browser.close()
}
