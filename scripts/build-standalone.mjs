import { readFile, writeFile } from 'node:fs/promises'

const dist = new URL('../dist/', import.meta.url)
let page = await readFile(new URL('index.html', dist), 'utf8')
const script = page.match(/<script type="module" crossorigin src="(\.\/assets\/[^"]+)"><\/script>/)
const stylesheet = page.match(/<link rel="stylesheet" crossorigin href="(\.\/assets\/[^"]+)">/)
if (!script || !stylesheet) throw new Error('Expected one generated script and stylesheet')

const [js, css] = await Promise.all([script, stylesheet].map(([, path]) =>
  readFile(new URL(path, dist), 'utf8')))
if (/<\/script/i.test(js) || /<\/style/i.test(css)) throw new Error('Unsafe closing tag in bundled source')

page = page.replace('<html lang="en">', '<html lang="en" data-standalone>')
  .replace(/^[ \t]*<link rel="(?:icon|manifest)"[^>]*>\n/gm, '')
  .replace(script[0], () => `<script type="module">${js}</script>`)
  .replace(stylesheet[0], () => `<style>${css}</style>`)
await writeFile(new URL('standalone.html', dist), page)
