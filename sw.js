// Bili App PWA – Service Worker v19
// Strategy: app-shell cached on install; cache-first for instant, fully offline
// loads at the bedside, with a background refresh so updates arrive next launch.
const CACHE_NAME = 'bili-app-v19';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache =>
      // Cache each file separately so one missing file (e.g. an icon)
      // can't stop the whole app from being saved for offline use.
      Promise.all(ASSETS.map(url =>
        cache.add(new Request(url, { cache: 'reload' }))
          .catch(err => console.warn('[SW] not cached:', url, err))
      ))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Page navigations (opening the app / home-screen icon): always answer
  // from the cached app shell, ignoring any ?query in the start URL.
  if (req.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then(cached => {
        const network = fetch(req).then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then(c => c.put('./index.html', copy));
          }
          return res;
        }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  // Everything else: cache first, refresh in background.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(cached => {
      const network = fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
