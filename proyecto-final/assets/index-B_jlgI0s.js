(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();function p(){return`
  <section class="bg-white p-6 rounded-xl shadow">
    <h1 class="text-2xl font-bold text-indigo-600">Bienvenido al Proyecto Final</h1>
    <p class="mt-2 text-gray-600">SPA con Vite, Tailwind y una demo de IA client-side.</p>
    <div class="mt-4 flex gap-3">
      <a href="#/catalogo" class="px-4 py-2 bg-indigo-600 text-white rounded">Ir al Catálogo</a>
      <a href="#/detalle" class="px-4 py-2 border rounded">Demo IA</a>
    </div>
  </section>
  `}function f(){return`
  <section>
    <div class="mb-4 flex justify-between items-center">
      <h2 class="text-xl font-semibold">Catálogo de personajes (Rick & Morty)</h2>
      <input id="q" placeholder="Buscar" class="border px-3 py-1 rounded" />
    </div>
    <div id="cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
  </section>
  `}async function g(){const r=document.getElementById("cards"),o=document.getElementById("q");function s(e){if(!e||e.length===0){r.innerHTML='<div class="col-span-3 text-gray-600">No hay resultados.</div>';return}r.innerHTML=e.map(n=>`
      <article class="bg-white p-3 rounded shadow">
        <img src="${n.image}" class="w-full h-40 object-cover rounded" />
        <h3 class="mt-2 font-semibold">${n.name}</h3>
        <p class="text-sm text-gray-500">${n.species} — ${n.status}</p>
        <div class="mt-2"><a href="#/detalle?id=${n.id}" class="text-indigo-600 text-sm">Ver</a></div>
      </article>
    `).join("")}async function a(e){r.innerHTML='<div class="col-span-3">Cargando...</div>';const n=e?`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(e)}`:"https://rickandmortyapi.com/api/character";try{const t=await fetch(n);if(!t.ok){r.innerHTML=`<div class="col-span-3 text-red-500">Error ${t.status} al cargar datos</div>`;return}const c=(await t.json()).results||[];s(c)}catch(t){console.error("catalog load error",t),r.innerHTML='<div class="col-span-3 text-red-500">Error de red al cargar. <button id="retry" class="underline">Reintentar</button></div>';const i=document.getElementById("retry");i&&i.addEventListener("click",()=>a(e))}}o.addEventListener("input",()=>a(o.value)),a("")}function h(){return`
  <section class="bg-white p-6 rounded-xl shadow">
    <div id="detail-root">Cargando detalle...</div>
    <hr class="my-4" />
    <h3 class="font-semibold">Demo IA: Análisis de sentimiento</h3>
    <p class="text-sm text-gray-600">Escribe un texto y el modelo intentará clasificar su sentimiento (cliente).</p>
    <textarea id="sent-input" class="w-full border rounded p-2 mt-2" rows="3"></textarea>
    <div class="mt-2"><button id="sent-btn" class="px-3 py-1 bg-indigo-600 text-white rounded">Analizar</button></div>
    <div id="sent-result" class="mt-3 text-sm text-gray-700"></div>
  </section>
  `}function y(r){const o=location.hash.split("?")[1]||"";return new URLSearchParams(o).get(r)}let l=null;function d(){return window.ml5?Promise.resolve(window.ml5):l||(l=new Promise((r,o)=>{const s=document.createElement("script");s.src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js",s.onload=()=>r(window.ml5),s.onerror=()=>o(new Error("No se pudo cargar ml5")),document.body.appendChild(s)}),l)}async function x(){var n;const r=y("id"),o=document.getElementById("detail-root");if(r)try{const t=await fetch(`https://rickandmortyapi.com/api/character/${r}`);if(!t.ok){o.textContent=`Error ${t.status} al cargar personaje.`;return}const i=await t.json();o.innerHTML=`
        <img src="${i.image}" class="w-48 h-48 object-cover rounded" />
        <h2 class="text-xl font-bold mt-2">${i.name}</h2>
        <p class="text-sm text-gray-600">${i.species} — ${i.status}</p>
        <p class="mt-2">${((n=i.origin)==null?void 0:n.name)||""}</p>
      `}catch(t){console.error("detail load error",t),o.textContent="No se pudo cargar."}else o.innerHTML="<div>Sin id. Usa el catálogo.</div>";const s=document.getElementById("sent-btn"),a=document.getElementById("sent-input"),e=document.getElementById("sent-result");d().then(()=>{}).catch(t=>{console.warn("ml5 preload failed",t)}),s.addEventListener("click",async()=>{e.textContent="Analizando...";try{const t=await d();if(!t||!t.sentiment)throw new Error("ml5 no disponible");const c=(await t.sentiment("movieReviews")).predict(a.value),m=c&&(c.score??c);e.textContent=`Score: ${m}`}catch(t){console.error("sentiment error",t),e.textContent=typeof t.message=="string"?t.message:"Error en el modelo o al cargar ml5."}})}function u(){const r=document.getElementById("app"),o=location.hash.split("?")[0]||"#/";o==="#/"?r.innerHTML=p():o==="#/catalogo"?(r.innerHTML=f(),g()):o==="#/detalle"?(r.innerHTML=h(),x()):r.innerHTML='<section class="p-6"><h1 class="text-2xl font-bold">404</h1></section>'}location.hash||(location.hash="#/");addEventListener("hashchange",()=>u());u();
