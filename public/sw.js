const CACHE_NAME = 'akile-monitor-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/assets/',
  '/src/components/',
  '/public/bocchilogo.png',
  '/public/bocchi-face.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});