if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const d=e=>r(e,o),a={module:{uri:o},exports:t,require:d};i[o]=Promise.all(s.map((e=>a[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-3832c073"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2779397e.js",revision:"1295539267b5462ae971729da0605b1e"},{url:"2bf2e7e3.js",revision:"45268b4aba0d6c88263aa5a62470061d"},{url:"58f5ae31.js",revision:"031f9b54b3462926ee74d8d11a3c53aa"},{url:"753ef3d9.js",revision:"afcf4523dd743f6826b06bb2a8262d6a"},{url:"78af3006.js",revision:"8763e21a9ab9934da899efb8d8644dfa"},{url:"index.html",revision:"85978ebc528457e51ccdfaa440e79604"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
