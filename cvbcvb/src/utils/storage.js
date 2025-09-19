export const store={
	get:(k,d=[])=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}},
	set:(k,v)=>localStorage.setItem(k,JSON.stringify(v))
}

export const debounce=(fn,ms=400)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms)}}

export function loadItems(){
	const items = store.get('items', null)
	if(items && items.length) return items
	return [
		{ id:1, title:'Producto A', price:'$10.00', image:'https://via.placeholder.com/600x360', description:'Descripción de Producto A.'},
		{ id:2, title:'Producto B', price:'$20.00', image:'https://via.placeholder.com/600x360', description:'Descripción de Producto B.'},
		{ id:3, title:'Producto C', price:'$30.00', image:'https://via.placeholder.com/600x360', description:'Descripción de Producto C.'}
	]
}
