export function Detail(){
  return `
  <section class="bg-white p-6 rounded-xl shadow">
    <div id="detail-root">Cargando detalle...</div>
    <hr class="my-4" />
    <h3 class="font-semibold">Demo IA: Análisis de sentimiento</h3>
    <p class="text-sm text-gray-600">Escribe un texto y el modelo intentará clasificar su sentimiento (cliente).</p>
    <textarea id="sent-input" class="w-full border rounded p-2 mt-2" rows="3"></textarea>
    <div class="mt-2"><button id="sent-btn" class="px-3 py-1 bg-indigo-600 text-white rounded">Analizar</button></div>
    <div id="sent-result" class="mt-3 text-sm text-gray-700"></div>
  </section>
  `
}

function getQueryParam(key){ const s = location.hash.split('?')[1]||''; return new URLSearchParams(s).get(key) }

export async function detailAfterMount(){
  const id = getQueryParam('id')
  const root = document.getElementById('detail-root')
  if(id){
    try{ const r = await fetch(`https://rickandmortyapi.com/api/character/${id}`); const j = await r.json();
      root.innerHTML = `
        <img src="${j.image}" class="w-48 h-48 object-cover rounded" />
        <h2 class="text-xl font-bold mt-2">${j.name}</h2>
        <p class="text-sm text-gray-600">${j.species} — ${j.status}</p>
        <p class="mt-2">${j.origin?.name || ''}</p>
      `
    }catch(e){ root.textContent = 'No se pudo cargar.' }
  } else { root.innerHTML = '<div>Sin id. Usa el catálogo.</div>' }

  // Cargar ml5 sentiment si está disponible (CDN)
  const sentBtn = document.getElementById('sent-btn')
  const sentInput = document.getElementById('sent-input')
  const sentResult = document.getElementById('sent-result')
  sentBtn.addEventListener('click', async ()=>{
    sentResult.textContent = 'Analizando...'
    if(window.ml5 && ml5.sentiment){
      try{
        const model = await ml5.sentiment('movieReviews')
        const score = model.predict(sentInput.value)
        sentResult.textContent = `Score: ${score.score || score}`
      }catch(e){ sentResult.textContent = 'Error en el modelo' }
    } else {
      sentResult.textContent = 'ml5 no cargado. Intentando cargar desde CDN...'
      const s = document.createElement('script')
      s.src = 'https://unpkg.com/ml5@0.12.2/dist/ml5.min.js'
      s.onload = ()=>sentResult.textContent = 'ml5 cargado. Vuelve a pulsar Analizar.'
      s.onerror = ()=>sentResult.textContent = 'No se pudo cargar ml5.'
      document.body.appendChild(s)
    }
  })
}
