import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'pedido',
        component: () => import(/* webpackChunkName: "pedido" */ '@/pages/Pedido')
    },
    {
        path: '/situacaoProduto',
        name: 'situacaoProduto',
        component: () => import(/* webpackChunkName: "situacaoProduto" */ '@/pages/SituacaoProduto')
    }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})


export default router