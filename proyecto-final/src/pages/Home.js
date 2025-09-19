export function Home(){
  return `
  <section class="bg-white p-6 rounded-xl shadow">
    <h1 class="text-2xl font-bold text-indigo-600">Bienvenido al Proyecto Final</h1>
    <p class="mt-2 text-gray-600">SPA con Vite, Tailwind y una demo de IA client-side.</p>
    <div class="mt-4 flex gap-3">
      <a href="#/catalogo" class="px-4 py-2 bg-indigo-600 text-white rounded">Ir al Catálogo</a>
      <a href="#/detalle" class="px-4 py-2 border rounded">Demo IA</a>
    </div>
  </section>
  `
}

export function homeAfterMount(){ }
