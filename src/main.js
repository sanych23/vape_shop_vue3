import './assets/css/all.min.css'
import './assets/css/animate.css'
import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/nice-select.css'
import './assets/css/style.css'
import './assets/css/swiper-bundle.min.css'

import { createApp } from 'vue';
import App from './App.vue'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

createApp(App).use(router).mount('#app')
