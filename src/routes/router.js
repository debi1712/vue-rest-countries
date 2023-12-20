import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/detail/:alpha3Code',
        name: 'Detail',
        component: () => import('../pages/Detail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router