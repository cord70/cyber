// cyber

var cacheName = 'pwa_v1'; // нужно менять имя при смене контента сайта

var filesToCache = [
// home page
    'index.html',

// home page head
    'images/ansimeta.js',
    'nav.js',
    'images/main.css',
    'images/photohome.gif',
    'images/sky.jpg',
    'images/home.gif',
    'manifest.json',
    'sw.js',
    'favicon.ico',
    'favicon.svg',
    'apple-touch-icon.png',
    'favicon512.png',

// home page links
    'mind/index.html',
    'ai/ai.html',
    'ai/sense.html',
    'mind/emergent.html',
    'reading/seeing.html',
    'mind/how-we-see.html',
    'ai-post/future.html',
    'ai-post/brain.html',
    'ai-post/index.html',
    'mind/consciousness.html',
    'mind/danger.html',
    'mind/articles.html',
    'world/index.html',
    'world/space.html',
    'world/existence.html',
    'science/index.html',
    'science/hard-problems.html',
    'science/FTL-causality.html',
    'science/ftl.html',
    'science/constants-change.html',
    'science/photon_mass.html',
    'science/crackpot.html',
    'science/measure_c.html',
    'pagelist.html',
];

// Start the service worker and cache all of the app's content 
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Serve cached content when offline 
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
