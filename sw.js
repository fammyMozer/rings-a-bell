// Minimal service worker so Android can install Rings a Bell as an app.
// It only touches the game's own files and always goes to the network,
// so updates to the game show up right away. Music and Firebase are left alone.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request));
});
