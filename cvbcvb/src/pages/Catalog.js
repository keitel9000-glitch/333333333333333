import { store } from '../utils/storage.js'

function loadItems(){
	try{ const it = store.get('items'); if(it && it.length) return it }catch{}
	return [
		{ id:1, title:'Producto A', price:'$10.00', image:'https://via.placeholder.com/600x360', description:'Descripción de Producto A.'},
		{ id:2, title:'Producto B', price:'$20.00', image:'https://via.placeholder.com/600x360', description:'Descripción de Producto B.'},
		{ id:3, title:'Producto C', price:'$30.00', image:'https://via.placeholder.com/600x360', description:'Descripción de Producto C.'}
	]
}

export function Catalog(){
	const items = loadItems()
	const cards = items.map(it=>`
		<article class="bg-white rounded-lg border p-4">
			<img src="${it.image||'https://via.placeholder.com/300x180'}" class="w-full h-40 object-cover rounded-md"/>
			<h3 class="mt-3 font-semibold">${it.title}</h3>
			<p class="text-sm text-gray-500">${it.price||'--'}</p>
			<div class="mt-3">
				<a href="#/detalle?id=${it.id}" class="text-indigo-600 text-sm">Ver</a>
			</div>
		</article>
	`).join('')

	return `
	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		${cards}
	</section>
	`
}

export function catalogAfterMount(){ }
