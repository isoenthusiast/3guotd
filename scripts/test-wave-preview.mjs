import assert from 'node:assert/strict'
import { chromium } from 'playwright'

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  for (const level of [1, 3]) {
    for (const speed of [1, 3]) {
      const chapter = level === 3 ? 'red-cliffs' : 'village-watch'
      const context = await browser.newContext({ viewport: { width: 320, height: 480 }, hasTouch: true, isMobile: true })
      const page = await context.newPage()
      const button = name => page.getByRole('button', { name, exact: true })
      const forecast = page.locator('.wave-preview')
      const board = page.locator('.battlefield')
      await page.goto(process.argv[2] ?? 'http://localhost:4173/')
      await page.getByText('Ready offline', { exact: true }).waitFor()
      await context.setOffline(true)
      await page.evaluate(() => localStorage.setItem('3guotd.cleared-missions.v1', JSON.stringify(
        ['village-watch', 'changban', 'red-cliffs'].flatMap(chapter => Array.from({ length: 5 }, (_, i) => `${chapter}:${i + 1}`)))))
      await page.reload()
      await button('Campaign').tap()
      await page.getByText('Choose level', { exact: true }).tap()
      await page.locator('#battle').selectOption(chapter)
      await page.locator('#level').selectOption(`${chapter}:${level}`)
      await button('Enter battle').tap()
      const bounds = await board.boundingBox()
      const label = await forecast.getAttribute('aria-label')
      await button('Select marked site').tap()
      assert.deepEqual(await board.boundingBox(), bounds)
      assert.deepEqual(await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.scrollHeight]), [320, 480])
      assert(await forecast.evaluate(el => {
        const text = document.createRange()
        text.selectNodeContents(el)
        const dock = el.closest('.command-status').getBoundingClientRect()
        return [...text.getClientRects()].every(rect => rect.top >= dock.top && rect.bottom <= dock.bottom
          && rect.left >= dock.left && rect.right <= dock.right)
      }))
      await button('Battle orders').tap()
      const breakdown = label.split(': ')[1]
      assert((await page.locator('.orders-intel').innerText()).includes(breakdown))
      await button('Back to battle').tap()
      if (speed === 3) {
        await button('Play speed 1×').tap()
        await button('Play speed 2×').tap()
      }
      await page.clock.install()
      await button('Start wave').tap()
      await page.clock.runFor(Math.ceil(8800 / speed))
      await button('Pause').tap()
      assert.equal(await forecast.count(), 0)
      await button('Main menu').tap()
      await button('Save game').tap()
      const round = await page.evaluate(() => JSON.parse(localStorage.getItem('3guotd.saved-game.v1')).round)
      const kinds = { infantry: 'Infantry', runner: 'Runner', veteran: 'Veteran', veteranRunner: 'Veteran runner',
        bowman: 'Bowman', cavalry: 'Cavalry', commander: 'Pursuit commander' }
      assert.equal(round.enemies.length, round.spawned)
      const counts = new Map()
      for (const enemy of round.enemies) counts.set(enemy.kind, (counts.get(enemy.kind) ?? 0) + 1)
      const actual = [...counts].map(([kind, count]) => `${count} × ${kinds[kind]}`).join(' · ')
      const firstEntry = level === 3 ? ` · Entry ${round.enemies[0].routeIndex + 1} first` : ''
      assert.equal(breakdown, actual + firstEntry)
      await context.close()
      console.log(`${chapter} ${level} at ${speed}×: ${breakdown} matched actual spawns, offline at 320 × 480.`)
    }
  }
} finally {
  await browser.close()
}
