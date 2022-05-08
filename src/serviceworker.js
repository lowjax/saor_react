const CACHE_NAME = 'version-1'
const urlsToCache = [
'index.html', 
'ContactUser.jsx', 
'CreateAccountAdmin.jsx', 
'ContentcontainerAdmin.jsx', 
'ContentListUser.jsx', 
'FavoritesAdmin.jsx', 
'FavoritesUser.jsx',
'NavbarAdmin.jsx',
'NavbarUser.jsx',
'LogoutUser.jsx',
'LogoutAdmin.jsx',
'IndexUser.jsx',
'IndexAdmin.jsx',
'ThemeAdmin.jsx',
'ThemeUser.jsx',
'SelectionUser.jsx',
'SelectionAdmin.jsx',
'Login.jsx',
'bootstrap.mini.js',
'App.js', 
'index.js']

const self = this;
// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache')
            return cache.addAll(urlsToCache)
        })
    )
});
// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                // .catch(() => caches.match('index.html'))
        })
    )
});
// Activate the service worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
});