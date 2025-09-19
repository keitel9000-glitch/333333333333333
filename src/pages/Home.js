export function Home(){
	return `
	<section class="bg-white p-6 rounded-2xl shadow">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
			<div>
				<h1 class="text-3xl font-extrabold text-indigo-600">Explora el Catálogo con IA</h1>
				<p class="mt-3 text-gray-600">Interfaz sencilla para explorar productos, ver detalles y probar integraciones de inteligencia artificial.</p>
				<div class="mt-5 flex gap-3">
					<a href="#/catalogo" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Ver Catálogo</a>
					<a href="#/detalle" class="px-4 py-2 border rounded-lg">Ver Demo</a>
				</div>
			</div>
			<div class="space-y-3">
				<div class="p-4 bg-indigo-50 rounded-lg">
					<h3 class="font-bold">IA integrada</h3>
					<p class="text-sm text-gray-600">Ejemplos de integración con modelos por CDN o APIs externas.</p>
				</div>
				<div class="p-4 bg-white rounded-lg border">
					<h3 class="font-bold">Responsive</h3>
					<p class="text-sm text-gray-600">Funciona en móvil y escritorio.</p>
				</div>
				<div class="p-4 bg-white rounded-lg border">
					<h3 class="font-bold">Fácil de extender</h3>
					<p class="text-sm text-gray-600">Código modular para añadir nuevas vistas y datos.</p>
				</div>
			</div>
		</div>
	</section>
	`
}

export function homeAfterMount(){ }
