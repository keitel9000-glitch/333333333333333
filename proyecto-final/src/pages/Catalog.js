export function Catalog(){
  return `
  <section>
    <div class="mb-4 flex justify-between items-center">
      <h2 class="text-xl font-semibold">Catálogo de personajes (Rick & Morty)</h2>
      <input id="q" placeholder="Buscar" class="border px-3 py-1 rounded" />
    </div>
    <div id="cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
  </section>
  `
}

export async function catalogAfterMount(){
  const container = document.getElementById('cards')
  const q = document.getElementById('q')
  async function load(name){
    container.innerHTML = '<div class="col-span-3">Cargando...</div>'
    const url = name ? `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}` : 'https://rickandmortyapi.com/api/character'
    try{
      const r = await fetch(url)
      const j = await r.json()
      const items = j.results || []
      container.innerHTML = items.map(it=>`
        <article class="bg-white p-3 rounded shadow">
          <img src="${it.image}" class="w-full h-40 object-cover rounded" />
          <h3 class="mt-2 font-semibold">${it.name}</h3>
          <p class="text-sm text-gray-500">${it.species} — ${it.status}</p>
          <div class="mt-2"><a href="#/detalle?id=${it.id}" class="text-indigo-600 text-sm">Ver</a></div>
        </article>
      `).join('')
    }catch(e){ container.innerHTML = '<div class="col-span-3 text-red-500">Error al cargar</div>' }
  }
  q.addEventListener('input', ()=>load(q.value))
  load('')
}
