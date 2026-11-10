/* Service worker – face aplicația instalabilă și utilizabilă fără internet.
   IMPORTANT: la fiecare actualizare a aplicației, schimbă numărul versiunii de mai jos
   (v2 → v3 ...). Altfel, telefoanele pot arăta încă o vreme varianta veche. */
const VERSION = 'aialfabet-v3';
const FILES = ['./', 'index.html', 'css/style.css', 'js/config.js', 'js/content.js', 'js/blog-posts.js', 'js/avatars.js', 'js/app.js',
  'assets/logo.png', 'assets/app-192.png', 'assets/app-512.png', 'assets/semnatura.png', 'manifest.webmanifest'];

self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Întâi rețeaua (ca să vezi mereu varianta nouă), iar fără internet – copia salvată.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  e.respondWith(
    fetch(r).then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(r, copy)); } return res; })
      .catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match('index.html')))
  );
});
