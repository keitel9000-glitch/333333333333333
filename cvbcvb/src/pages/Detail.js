import { store } from '../utils/storage.js'

function getQueryParam(key){
	const s = location.hash.split('?')[1] || ''
	return new URLSearchParams(s).get(key)
}

function loadItems(){
	try{ const it = store.get('items'); if(it && it.length) return it }catch{}
	return []
}

export function Detail(){
	const id = getQueryParam('id')
	const items = loadItems()
	const item = items.find(i=>String(i.id)===String(id)) || { title: 'Demo', image: 'https://via.placeholder.com/600x360', price: '—', description: 'Detalle de ejemplo.' }

	return `
	<article class="bg-white rounded-lg border p-6">
		<img src="${item.image}" class="w-full h-64 object-cover rounded-md"/>
		<h2 class="mt-4 text-2xl font-bold">${item.title}</h2>
		<p class="mt-2 text-gray-600">${item.description || ''}</p>
		<div class="mt-4 flex items-center justify-between">
			<span class="text-lg font-semibold text-indigo-600">${item.price}</span>
			<a href="#/catalogo" class="px-3 py-2 border rounded-lg">Volver al catálogo</a>
		</div>
	</article>
	`
}

export function detailAfterMount(){ }
