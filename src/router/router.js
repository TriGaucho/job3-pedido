import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Pedido from '../pages/Pedido'
import SituacaoProduto from '../pages/SituacaoProduto'

const routes = [
    {
        path: '/',
        component: Pedido
    },
    {
        path: '/situacaoProduto',
        component: SituacaoProduto
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router