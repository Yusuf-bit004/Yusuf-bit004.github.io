const C='pdfscan-v2';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=C).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;e.respondWith(fetch(e.request).then(n=>{const k=n.clone();if(n.ok||n.type=='opaque')caches.open(C).then(c=>c.put(e.request,k));return n}).catch(()=>caches.match(e.request)))});
