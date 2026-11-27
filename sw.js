/* Midnight Finance · Service Worker 2.1.0 (troque a versão a cada publicação para renovar o cache) */
const VER='midnight-finance-2.1.0',PRE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VER).then(c=>Promise.all(PRE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VER&&/midnight|financ|fp-/i.test(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==location.origin)return; /* backend de IA e CDNs passam direto, nunca em cache */
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(x=>{const c=x.clone();caches.open(VER).then(k=>k.put('./index.html',c));return x;}).catch(()=>caches.match('./index.html').then(x=>x||caches.match('./'))));return;}
 e.respondWith(caches.match(r).then(h=>{const n=fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(VER).then(k=>k.put(r,c));}return x;}).catch(()=>h);return h||n;}));});
