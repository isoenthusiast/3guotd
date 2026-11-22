import assert from 'node:assert/strict'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://127.0.0.1:5192/'
const out = process.argv[3] ?? '/tmp/aud021-art-evidence/guide'
mkdirSync(out,{recursive:true})
const browser = await chromium.launch({executablePath:process.env.CHROMIUM_PATH})
try {
  const context=await browser.newContext({viewport:{width:320,height:480},hasTouch:true,isMobile:true})
  const page=await context.newPage(), errors=[]
  page.on('pageerror',error=>errors.push(error.message))
  const button=name=>page.getByRole('button',{name,exact:true})
  await page.goto(url)
  await page.getByText('Ready offline').waitFor()
  await context.setOffline(true); await page.reload()
  await button('Campaign').tap(); await button('Enter battle').tap()
  await button('Battle orders').tap(); await button('Enemy Types').tap()
  await page.locator('.enemy-example').first().waitFor()
  await page.waitForTimeout(150)
  assert.equal(await page.locator('.enemy-example').count(),7)
  assert(await page.getByText(/No wave HP bonus/).count())
  assert(await page.locator('.illustrated-enemies').evaluate(el=>el.scrollWidth<=el.clientWidth+1))
  const fits=await button('Back to orders').evaluate(el=>{const r=el.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight})
  assert(fits,'Guide Back remains fixed within viewport')
  await page.screenshot({path:`${out}/enemies-320.png`})
  await button('Towers').tap()
  await page.locator('.pairing-example').scrollIntoViewIfNeeded()
  await page.screenshot({path:`${out}/pairing-320.png`})
  await button('Reduced effects').tap();await button('Reduced motion').tap()
  assert.equal(await button('Reduced effects').getAttribute('aria-pressed'),'true')
  assert.equal(await button('Reduced motion').getAttribute('aria-pressed'),'true')
  const stored=await page.evaluate(()=>JSON.parse(localStorage.getItem('3guotd.visual-comfort.v1')))
  assert.deepEqual(stored,{reducedEffects:true,reducedMotion:true})
  await page.reload()
  assert.equal(await page.evaluate(()=>document.documentElement.dataset.reducedMotion),'true')
  await context.setOffline(false)
  await page.emulateMedia({reducedMotion:'reduce'})
  await page.evaluate(()=>localStorage.removeItem('3guotd.visual-comfort.v1'));await page.reload()
  assert.equal(await page.evaluate(()=>document.documentElement.dataset.reducedMotion),'true')
  await button('Campaign').tap();await button('Enter battle').tap()
  await button('Battle orders').tap();await button('Towers').tap()
  await button('Reduced effects').tap()
  const osSaved=await page.evaluate(()=>JSON.parse(localStorage.getItem('3guotd.visual-comfort.v1')))
  assert.equal(osSaved.reducedMotion,false,'Device preference is not accidentally persisted as an explicit override')
  // The preparation number survives; its continuously shrinking ring is hidden.
  const prep=await page.evaluate(()=>{
    const el=document.createElement('div');el.className='prep-clock';el.innerHTML='<svg></svg><strong>7</strong>';document.body.append(el)
    const result={ring:getComputedStyle(el.querySelector('svg')).display,number:getComputedStyle(el.querySelector('strong')).display}
    el.remove();return result
  })
  assert.equal(prep.ring,'none');assert.notEqual(prep.number,'none')
  assert.deepEqual(errors,[])
  writeFileSync(`${out}/results.json`,JSON.stringify({offline:true,sprites:7,guideBackFits:fits,stored,osSaved,prep,errors},null,2)+'\n')
  console.log('Offline 320×480: seven guide sprites, live stats, pairing, comfort persistence, OS motion and countdown alternative passed.')
} finally {await browser.close()}
