import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'

const dist = new URL('../dist/', import.meta.url)
const template = await readFile(new URL('./service-worker.js', import.meta.url), 'utf8')
const files = (await readdir(dist, { recursive: true, withFileTypes: true }))
  .filter(entry => entry.isFile() && entry.name !== 'sw.js')
  .map(entry => new URL(encodeURIComponent(entry.name), pathToFileURL(`${entry.parentPath}/`)))
  .sort((left, right) => left.href.localeCompare(right.href))

const hash = createHash('sha256').update(template)
const assets = []
for (const file of files) {
  const path = file.href.slice(dist.href.length)
  hash.update(JSON.stringify(path)).update(await readFile(file))
  assets.push(`./${path}`)
}

const version = hash.digest('hex').slice(0, 16)
await writeFile(new URL('sw.js', dist),
  `const version = ${JSON.stringify(version)}\nconst assets = ${JSON.stringify(assets)}\n\n${template}`)
