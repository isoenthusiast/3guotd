const scope = self.registration.scope
const cachePrefix = `3guotd:${scope}:`
const cacheName = cachePrefix + version
const index = new URL('./index.html', scope).href
const appRoot = new URL('./', scope).href
const assetUrls = new Set(assets.map(asset => new URL(asset, scope).href))

self.addEventListener('install', event => {
  const requests = [...assetUrls].map(url => new Request(url, { cache: 'reload' }))
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(requests)))
})

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys()
    await Promise.all(names
      .filter(name => name.startsWith(cachePrefix) && name !== cacheName)
      .map(name => caches.delete(name)))
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', event => {
  const { request } = event
  if (request.method !== 'GET') return

  const url = new URL(request.url)
  const isAppEntry = request.mode === 'navigate'
    && (url.origin + url.pathname === appRoot || url.origin + url.pathname === index)
  const key = isAppEntry ? index : request.url
  if (!assetUrls.has(key)) return

  event.respondWith((async () => {
    const cache = await caches.open(cacheName)
    return (await cache.match(key)) ?? fetch(request)
  })())
})
