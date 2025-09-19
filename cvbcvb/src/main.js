import { router } from './router.js'
if(!location.hash) location.hash='#/'; addEventListener('hashchange',()=>router()); router();
