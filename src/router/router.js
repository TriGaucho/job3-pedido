import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Pedido from '../pages/Pedido'

const routes = [
    {
        path: '/',
        component: Pedido
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router