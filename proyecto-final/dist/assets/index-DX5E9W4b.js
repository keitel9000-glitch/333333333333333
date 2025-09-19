(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();function d(){return`
  <section class="bg-white p-6 rounded-xl shadow">
    <h1 class="text-2xl font-bold text-indigo-600">Bienvenido al Proyecto Final</h1>
    <p class="mt-2 text-gray-600">SPA con Vite, Tailwind y una demo de IA client-side.</p>
    <div class="mt-4 flex gap-3">
      <a href="#/catalogo" class="px-4 py-2 bg-indigo-600 text-white rounded">Ir al Catálogo</a>
      <a href="#/detalle" class="px-4 py-2 border rounded">Demo IA</a>
    </div>
  </section>
  `}function m(){return`
  <section>
    <div class="mb-4 flex justify-between items-center">
      <h2 class="text-xl font-semibold">Catálogo de personajes (Rick & Morty)</h2>
      <input id="q" placeholder="Buscar" class="border px-3 py-1 rounded" />
    </div>
    <div id="cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
  </section>
  `}async function u(){const o=document.getElementById("cards"),t=document.getElementById("q");async function r(i){o.innerHTML='<div class="col-span-3">Cargando...</div>';const e=i?`https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(i)}`:"https://rickandmortyapi.com/api/character";try{const a=(await(await fetch(e)).json()).results||[];o.innerHTML=a.map(c=>`
        <article class="bg-white p-3 rounded shadow">
          <img src="${c.image}" class="w-full h-40 object-cover rounded" />
          <h3 class="mt-2 font-semibold">${c.name}</h3>
          <p class="text-sm text-gray-500">${c.species} — ${c.status}</p>
          <div class="mt-2"><a href="#/detalle?id=${c.id}" class="text-indigo-600 text-sm">Ver</a></div>
        </article>
      `).join("")}catch{o.innerHTML='<div class="col-span-3 text-red-500">Error al cargar</div>'}}t.addEventListener("input",()=>r(t.value)),r("")}function p(){return`
  <section class="bg-white p-6 rounded-xl shadow">
    <div id="detail-root">Cargando detalle...</div>
    <hr class="my-4" />
    <h3 class="font-semibold">Demo IA: Análisis de sentimiento</h3>
    <p class="text-sm text-gray-600">Escribe un texto y el modelo intentará clasificar su sentimiento (cliente).</p>
    <textarea id="sent-input" class="w-full border rounded p-2 mt-2" rows="3"></textarea>
    <div class="mt-2"><button id="sent-btn" class="px-3 py-1 bg-indigo-600 text-white rounded">Analizar</button></div>
    <div id="sent-result" class="mt-3 text-sm text-gray-700"></div>
  </section>
  `}function g(o){const t=location.hash.split("?")[1]||"";return new URLSearchParams(t).get(o)}async function h(){var n;const o=g("id"),t=document.getElementById("detail-root");if(o)try{const a=await(await fetch(`https://rickandmortyapi.com/api/character/${o}`)).json();t.innerHTML=`
        <img src="${a.image}" class="w-48 h-48 object-cover rounded" />
        <h2 class="text-xl font-bold mt-2">${a.name}</h2>
        <p class="text-sm text-gray-600">${a.species} — ${a.status}</p>
        <p class="mt-2">${((n=a.origin)==null?void 0:n.name)||""}</p>
      `}catch{t.textContent="No se pudo cargar."}else t.innerHTML="<div>Sin id. Usa el catálogo.</div>";const r=document.getElementById("sent-btn"),i=document.getElementById("sent-input"),e=document.getElementById("sent-result");r.addEventListener("click",async()=>{if(e.textContent="Analizando...",window.ml5&&ml5.sentiment)try{const a=(await ml5.sentiment("movieReviews")).predict(i.value);e.textContent=`Score: ${a.score||a}`}catch{e.textContent="Error en el modelo"}else{e.textContent="ml5 no cargado. Intentando cargar desde CDN...";const s=document.createElement("script");s.src="https://unpkg.com/ml5@0.12.2/dist/ml5.min.js",s.onload=()=>e.textContent="ml5 cargado. Vuelve a pulsar Analizar.",s.onerror=()=>e.textContent="No se pudo cargar ml5.",document.body.appendChild(s)}})}function l(){const o=document.getElementById("app"),t=location.hash.split("?")[0]||"#/";t==="#/"?o.innerHTML=d():t==="#/catalogo"?(o.innerHTML=m(),u()):t==="#/detalle"?(o.innerHTML=p(),h()):o.innerHTML='<section class="p-6"><h1 class="text-2xl font-bold">404</h1></section>'}location.hash||(location.hash="#/");addEventListener("hashchange",()=>l());l();
