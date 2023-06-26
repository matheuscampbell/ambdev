import {createRouter, createWebHistory} from 'vue-router'

import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/sobre', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router;
