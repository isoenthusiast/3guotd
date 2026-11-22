import { useEffect, useState } from 'preact/hooks'

export function useOfflineReadiness() {
  const [status, setStatus] = useState('Preparing offline')
  const [build, setBuild] = useState('')
  const [update, setUpdate] = useState(false)
  useEffect(() => {
    const platform = (window as Window & { Capacitor?: { isNativePlatform(): boolean } }).Capacitor
    if (document.documentElement.hasAttribute('data-standalone') || platform?.isNativePlatform()) {
      setStatus('Local offline edition')
      return
    }
    if (!import.meta.env.PROD || !('serviceWorker' in navigator)) {
      setStatus('Offline cache unavailable')
      return
    }
    let disposed = false
    let registration: ServiceWorkerRegistration | undefined
    const channels = new Set<MessagePort>()
    function check() {
      const worker = navigator.serviceWorker.controller
      if (!worker) return
      const channel = new MessageChannel()
      channels.add(channel.port1)
      channel.port1.onmessage = event => {
        const data = event.data
        if (!disposed && data?.type === 'OFFLINE_STATUS' && typeof data.version === 'string') {
          setStatus(data.ready === true ? 'Ready offline' : 'Offline files incomplete · reconnect and reload')
          setBuild(data.version.slice(0, 8))
        }
        channel.port1.close()
        channels.delete(channel.port1)
      }
      worker.postMessage({ type: 'OFFLINE_STATUS' }, [channel.port2])
    }
    const watchUpdate = () => {
      const installing = registration?.installing
      installing?.addEventListener('statechange', () => {
        if (!disposed && installing.state === 'installed' && registration?.waiting) setUpdate(true)
      })
    }
    navigator.serviceWorker.register('./sw.js').then(value => {
      if (disposed) return
      registration = value
      setUpdate(Boolean(value.waiting))
      value.addEventListener('updatefound', watchUpdate)
      watchUpdate()
      check()
    }).catch(() => { if (!disposed) setStatus('Offline setup failed · reconnect and reload') })
    navigator.serviceWorker.addEventListener('controllerchange', check)
    check()
    return () => {
      disposed = true
      registration?.removeEventListener('updatefound', watchUpdate)
      navigator.serviceWorker.removeEventListener('controllerchange', check)
      channels.forEach(port => port.close())
    }
  }, [])
  return { status, build, update }
}

export function OfflineDetails({ status, build, update }: ReturnType<typeof useOfflineReadiness>) {
  return <details class="offline-details"><summary>Offline &amp; version</summary>
    <p>{status === 'Ready offline' ? 'Airplane mode is safe for this cached build.'
      : status === 'Local offline edition' ? 'This edition includes its assets locally; browser cache setup is not required.'
      : 'Stay online until Ready offline appears before using airplane mode.'}</p>
    {build && <p>Cached build {build}</p>}
    {update && <p>Update ready. Save your run, close all game tabs, then reopen online to use the new build.</p>}
  </details>
}
