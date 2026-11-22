const scope = self.registration.scope
const cachePrefix = `3guotd:${scope}:`
const cacheName = cachePrefix + version
const index = new URL('./index.html', scope).href
const appRoot = new URL('./', scope).href
const files = new Map(Object.entries(integrity).map(([path, digest]) => [new URL(path, scope).href, digest]))
function verifiedRequest(url) {
  return new Request(url, { cache: 'reload', integrity: files.get(url) })
}

self.addEventListener('message', event => {
  if (event.data?.type !== 'OFFLINE_STATUS' || !event.ports[0]) return
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName)
    const matches = await Promise.all([...files.keys()].map(async url => {
      if (await cache.match(url)) return true
      if (!event.data.online) return false
      try {
        // Repair only bytes belonging to this worker, even during a release.
        await cache.add(verifiedRequest(url))
        return true
      } catch { return false }
    }))
    event.ports[0].postMessage({ type: 'OFFLINE_STATUS', version, ready: matches.every(Boolean) })
  })())
})

self.addEventListener('install', event => {
  const requests = [...files.keys()].map(verifiedRequest)
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
  if (!files.has(key)) return

  event.respondWith((async () => {
    const cache = await caches.open(cacheName)
    return (await cache.match(key)) ?? fetch(request)
  })())
})
