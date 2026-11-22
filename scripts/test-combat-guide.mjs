import assert from 'node:assert/strict'
import { mkdirSync, writeFileSync } from 'node:fs'
import { chromium } from 'playwright'

const url = process.argv[2] ?? 'http://127.0.0.1:5191/'
const output = process.argv[3] ?? '/tmp/aud021-art-evidence/candidate'
const candidate = process.argv.includes('--candidate')
mkdirSync(output, { recursive: true })
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH })
try {
  const page = await browser.newPage({ viewport: { width: 320, height: 480 }, hasTouch: true })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(url, { waitUntil: 'networkidle' })
  const metrics = await page.evaluate(async candidate => {
    // Dev-server modules let the same deterministic fixture measure both revisions.
    const art = await import('/src/game-art.ts')
    const { drawAttacker } = await import('/src/attacker-art.ts')
    const model = await import('/src/game/round.ts')
    const { campaign } = await import('/src/game/campaign.ts')
    await art.loadBattlefieldArt()
    document.body.innerHTML = '<canvas width="576" height="832" style="width:320px;height:auto"></canvas>'
    document.body.style.cssText = 'margin:0;background:#263026'
    const canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d')
    const round = model.createRound(20, campaign.find(m => m.id === 'jing:5'))
    round.phase = 'running'; round.waveAge = 3
    round.towers = [{site:30,kind:'drum',reach:true,power:false,cooldown:0},
      {site:39,kind:'archer',reach:false,power:false,cooldown:0}]
    round.enemies = ['infantry','veteran','runner','veteranRunner','bowman','cavalry','commander'].map((kind,id) =>
      ({id,kind,progress:1.7+id*.9,health:3,slowed:true,routeIndex:id%2}))
    round.shots = Array.from({length:12},(_,i)=>({targetId:i%6,from:[3,4],elapsed:.11}))
    round.impacts = Array.from({length:12},(_,i)=>({at:[2+i%3,5],elapsed:.08,silver:i%2?7:0}))
    round.gateHit = {kind:'cavalry',elapsed:.3,routeIndex:1}
    const labels=[], counts={arc:0,lineTo:0}
    for(const method of ['arc','lineTo']) {
      const original=ctx[method].bind(ctx)
      ctx[method]=(...args)=>{counts[method]++; return original(...args)}
    }
    const fillText=ctx.fillText.bind(ctx)
    ctx.fillText=(text,...args)=>{labels.push(text);return fillText(text,...args)}
    art.drawBattlefield(ctx,round,null,{timeSeconds:3})
    const normal={...counts}; counts.arc=0;counts.lineTo=0
    art.drawBattlefield(ctx,round,null,{timeSeconds:3,reducedEffects:true,reducedMotion:true})
    const reduced={...counts}
    function pixels(kind,progress,reducedMotion=false) {
      const c=document.createElement('canvas');c.width=80;c.height=80
      const cx=c.getContext('2d');cx.translate(40,40)
      drawAttacker(cx,kind,progress,{reducedMotion})
      return cx.getImageData(0,0,80,80).data
    }
    function difference(a,b,alphaOnly=false) {
      let count=0
      for(let i=0;i<a.length;i+=4) if(alphaOnly ? (a[i+3]>128)!==(b[i+3]>128)
        : [0,1,2,3].some(k=>a[i+k]!==b[i+k]))count++
      return count
    }
    const silhouette=difference(pixels('infantry',0),pixels('veteran',0),true)
    const motion={normal:difference(pixels('runner',0),pixels('runner',.25)),
      reduced:difference(pixels('runner',0,true),pixels('runner',.25,true))}
    const frozen=JSON.stringify(round)
    art.drawBattlefield(ctx,round,null,{timeSeconds:3,reducedEffects:true,reducedMotion:true})
    const unchanged=JSON.stringify(round)===frozen
    art.drawBattlefield(ctx,round,null,{timeSeconds:3})
    window.fixture={art,model,campaign,drawAttacker,round,ctx}
    return {normal,reduced,silhouette,motion,unchanged,labels:[...new Set(labels)]}
  },candidate)
  await page.screenshot({path:`${output}/combat-320.png`})
  await page.emulateMedia({reducedMotion:'reduce'})
  await page.evaluate(()=>window.fixture.art.drawBattlefield(window.fixture.ctx,window.fixture.round,null,{timeSeconds:3,reducedEffects:true}))
  await page.screenshot({path:`${output}/reduced-320.png`})
  await page.evaluate(()=>{
    const {ctx,drawAttacker}=window.fixture
    ctx.clearRect(0,0,576,832);ctx.fillStyle='#a8a17b';ctx.fillRect(0,0,576,832)
    const kinds=['infantry','veteran','runner','veteranRunner','bowman','cavalry','commander']
    kinds.forEach((kind,i)=>{
      ctx.save();ctx.translate(44+i*76,90);drawAttacker(ctx,kind,0);ctx.restore()
      ctx.fillStyle='#222';ctx.font='14px sans-serif';ctx.textAlign='center';ctx.fillText(kind,44+i*76,135)
    })
  })
  await page.screenshot({path:`${output}/silhouettes-320.png`})
  if(candidate) {
    await page.emulateMedia({reducedMotion:'no-preference'})
    const states=await page.evaluate(async()=>{
      const {art,model,campaign,ctx}=window.fixture
      const labels=[];const original=ctx.fillText.bind(ctx)
      ctx.fillText=(label,...args)=>{labels.push(label);original(label,...args)}
      const r=model.createRound(20,campaign.find(m=>m.id==='jing:5'))
      r.waveNumber=4
      r.enemies=[{id:5,kind:'commander',progress:3,health:10,slowed:false}]
      art.drawBattlefield(ctx,r,null,{timeSeconds:0,reducedMotion:true})
      const before=JSON.stringify(r)
      const pending=art.drawBattlefield(ctx,{...r,phase:'won'},null,{timeSeconds:1,reducedMotion:true})
      art.drawBattlefield(ctx,{...r,gateHit:{kind:'runner',elapsed:.2}},null,{timeSeconds:2,reducedMotion:true})
      const {renderEnemyGuide}=await import('/scripts/combat-guide-fixture.ts')
      const host=document.createElement('div');document.body.append(host)
      const live={...model.createRound(100),waveNumber:100}
      const unmount=renderEnemyGuide(live,host)
      const guide=host.innerText, expected=model.enemyMaxHealth(live,'infantry')
      unmount();host.remove()
      return {labels,pending,unchanged:JSON.stringify(r)===before,guide,expected}
    })
    assert(states.labels.some(s=>s==='GO · escort clear'))
    assert(states.labels.includes('Runner breach · lane unrecorded'),'Only cues without a recorded route use the legacy fallback')
    assert(states.labels.some(s=>/boats departed/.test(s)))
    assert.equal(states.pending,false,'Reduced motion presents final milestone without a departure loop')
    assert(states.unchanged)
    assert(states.guide.includes(`4 → ${states.expected}`),'Guide shows live health bonus')
    assert(states.guide.includes('Wave adds 24 HP'),'Guide explains wave modifier')
    metrics.states=states
    metrics.ordinaryWave=await page.evaluate(()=>{
      const {art,model,campaign,ctx}=window.fixture
      let r=model.createRound(20,campaign.find(m=>m.id==='jing:5'))
      r.waveNumber=7;r=model.startRound(r)
      // Ordinary campaign formation and unmodified enemy rules, at both speeds.
      for(let i=0;i<120;i++) r=model.tickRound(r,1)
      const before=JSON.stringify(r)
      art.drawBattlefield(ctx,r,null,{timeSeconds:6,reducedMotion:false,reducedEffects:false})
      window.fixture.ordinary=r
      const next=model.tickRound(r,3)
      return {phase:r.phase,formation:model.roundFormation(r).name,types:[...new Set(r.enemies.map(e=>e.kind))],
        unchanged:before===JSON.stringify(r),threeXProgressed:next.enemies.some(e=>
          e.progress>(r.enemies.find(old=>old.id===e.id)?.progress??Infinity))}
    })
    assert(metrics.ordinaryWave.types.length>=2,'Real campaign wave includes multiple movement styles')
    assert(metrics.ordinaryWave.unchanged);assert(metrics.ordinaryWave.threeXProgressed)
    await page.screenshot({path:`${output}/ordinary-wave-320.png`})
    await page.evaluate(()=>window.fixture.art.drawBattlefield(window.fixture.ctx,window.fixture.round,null,{timeSeconds:3}))
    for(const type of ['achromatopsia','deuteranopia','protanopia']) {
      const session=await page.context().newCDPSession(page)
      await session.send('Emulation.setEmulatedVisionDeficiency',{type})
      await page.screenshot({path:`${output}/${type}-320.png`})
      await page.evaluate(()=>{
        const {art,model,campaign,ctx}=window.fixture
        const r=model.createRound(20,campaign.find(m=>m.id==='yiling:5'));r.waveNumber=2
        r.enemies=[{id:0,kind:'runner',progress:4,health:3,slowed:true}]
        art.drawBattlefield(ctx,r,0,{timeSeconds:3})
      })
      await page.screenshot({path:`${output}/${type}-states-320.png`})
      await session.detach()
      await page.evaluate(()=>window.fixture.art.drawBattlefield(window.fixture.ctx,window.fixture.round,null,{timeSeconds:3}))
    }
  }
  if(candidate) {
    assert(metrics.silhouette>150,'Veteran outline change exceeds baseline 42 pixels')
    assert(metrics.motion.normal>100,'Normal stride remains animated')
    assert.equal(metrics.motion.reduced,0,'Reduced motion holds stride pose')
    assert(metrics.reduced.arc<metrics.normal.arc,'Reduced effects removes overlapping rings')
    assert(metrics.reduced.lineTo<metrics.normal.lineTo,'Reduced effects removes links/trails')
    assert(metrics.unchanged,'Presentation options cannot mutate game state')
    assert(metrics.labels.some(label=>/Cavalry.*breach/i.test(label)))
    assert(metrics.labels.includes('Cavalry breach · Entry 2'))
    assert(metrics.labels.some(label=>/escort/i.test(label)))
  }
  assert.deepEqual(errors,[])
  writeFileSync(`${output}/metrics.json`,JSON.stringify(metrics,null,2)+'\n')
  console.log(JSON.stringify(metrics))
} finally { await browser.close() }
