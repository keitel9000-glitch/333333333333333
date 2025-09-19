import { Home, homeAfterMount } from './pages/Home.js'
import { Catalog, catalogAfterMount } from './pages/Catalog.js'
import { Detail, detailAfterMount } from './pages/Detail.js'

function q(){ return new URLSearchParams(location.hash.split('?')[1]||'') }

export function router(){
  const view = document.getElementById('app')
  const h = (location.hash.split('?')[0]||'#/')
  if(h==='#/' ) { view.innerHTML = Home(); homeAfterMount() }
  else if(h==='#/catalogo'){ view.innerHTML = Catalog(); catalogAfterMount() }
  else if(h==='#/detalle'){ view.innerHTML = Detail(); detailAfterMount() }
  else { view.innerHTML = '<section class="p-6"><h1 class="text-2xl font-bold">404</h1></section>' }
}
