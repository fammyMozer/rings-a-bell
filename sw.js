// Service worker for Rings a Bell.
// It lets Android install the game as an app, and it always asks GitHub
// whether a file has changed (instead of trusting the browser's saved copy),
// so a new version shows up on the next open. Music and Firebase are left alone.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' }).catch(() => fetch(e.request)));
});
