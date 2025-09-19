import { loadItems } from '../utils/storage.js'

export function Catalog(){
	const items = loadItems() || []
	const cards = items.length ? items.map(it=>`
		<article class="bg-white rounded-lg border p-4">
			<img src="${it.image||'https://via.placeholder.com/300x180'}" class="w-full h-40 object-cover rounded-md"/>
			<h3 class="mt-3 font-semibold">${it.title}</h3>
			<p class="text-sm text-gray-500">${it.price||'--'}</p>
			<div class="mt-3">
				<a href="#/detalle?id=${it.id}" class="text-indigo-600 text-sm">Ver</a>
			</div>
		</article>
	`).join('') : ''

	return `
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		${ cards || `<div class="p-6 bg-white rounded-lg border">No hay productos. Agrega algunos en storage.</div>` }
	</section>
	`
}

export function catalogAfterMount(){
	// placeholder for future dynamic loads
}
