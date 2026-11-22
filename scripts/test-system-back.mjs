import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://localhost:4173/'
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const context = await browser.newContext({ viewport: { width: 320, height: 420 }, isMobile: true, hasTouch: true })
  const page = await context.newPage()
  const button = name => page.getByRole('button', { name, exact: true })
  const back = () => page.goBack()
  const previous = new URL('/before-the-game', url).href
  await page.route(previous, route => route.fulfill({ contentType: 'text/html', body: '<h1>Previous page</h1>' }))
  await page.goto(previous)
  await page.goto(url)
  await page.getByText('Ready offline').waitFor()
  await context.setOffline(true)
  await page.reload()

  for (const mode of ['Long battle', 'Campaign']) {
    await button(mode).tap()
    await back()
    await button('Campaign').waitFor()
  }
  await button('Campaign').tap()
  await button('Enter battle').tap()
  await button('Select marked site').tap()
  await page.getByRole('button', { name: /Build Archer/ }).tap()
  const selected = page.locator('.cells button[aria-pressed=true]')
  const archer = await selected.getAttribute('aria-label')
  await button('Start wave').tap()
  await button('Pause').tap()
  let length
  for (let visit = 0; visit < 3; visit++) {
    await button('Battle orders').tap()
    await button('Towers').tap()
    await button('Enemy Types').tap()
    const entries = await page.evaluate(() => history.length)
    if (visit === 0) length = entries
    assert.equal(entries, length, 'Reopening or switching guides must reuse history slots')
    if (visit === 1) await button('Back to orders').tap()
    else await back()
    await button('Enemy Types').waitFor()
    await back()
    await button('Resume').waitFor()
    assert.equal(await selected.getAttribute('aria-label'), archer)
    assert.equal(await page.locator('.resources strong').innerText(), '60 silver')
  }
  await button('Resume').tap()
  await button('Battle orders').tap()
  await button('Enemy Types').tap()
  await back()
  await back()
  await button('Pause').tap()
  assert.equal(await selected.getAttribute('aria-label'), archer)
  await back()
  await button('Continue').waitFor()
  await button('Save game').tap()
  await button('Restart level').tap()
  await back()
  await button('Continue').waitFor()
  assert.equal(await button('Restart from wave one').count(), 0)
  await button('Restore saved game').tap()
  await back()
  assert.equal(await button('Replace with saved game').count(), 0)
  await button('Long battle').tap()
  await button('Enter battle').tap()
  await back()
  await button('Enter battle').waitFor()
  await back()
  await button('Continue').tap()
  await button('Resume').waitFor()
  assert.equal(await selected.getAttribute('aria-label'), archer)

  // Seed an available wave report while keeping the real tower, purse and opening snapshot.
  await button('Main menu').tap()
  await page.evaluate(() => {
    const key = '3guotd.saved-game.v1'
    const save = JSON.parse(localStorage.getItem(key))
    save.round.waveNumber = 2
    save.round.previousWave = { ...save.round.waveStats, waveNumber: 1 }
    localStorage.setItem(key, JSON.stringify(save))
  })
  await page.reload()
  await button('Restore saved game').tap()
  await button('Resume').tap()
  await button('Battle orders').tap()
  for (const dismiss of ['system', 'escape', 'button']) {
    await button('Report').tap()
    await button('Close report').waitFor()
    if (dismiss === 'system') await back()
    if (dismiss === 'escape') await page.keyboard.press('Escape')
    if (dismiss === 'button') await button('Close report').tap()
    await page.getByRole('dialog').waitFor({ state: 'hidden' })
    await button('Report').waitFor()
  }
  await back()
  await button('Resume').waitFor()
  await back()
  await button('Continue').waitFor()
  await back()
  await page.getByRole('heading', { name: 'Previous page' }).waitFor()
  console.log('Passed offline browser Back through setup, confirmations, sibling guides, reports, battle and root exit.')
} finally {
  await browser.close()
}
