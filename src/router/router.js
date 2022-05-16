import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Produtos from '../pages/Produtos'
// import Pedido from '../pages/Pedido'
// import SituacaoProduto from '../pages/SituacaoProduto'

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/cadastro',
        component: Cadastro
    },
    {
        path: '/produtos',
        component: Produtos
    },
    // {
    //     path: '/',
    //     component: Pedido
    // },
    // {
    //     path: '/situacaoProduto',
    //     component: SituacaoProduto
    // }
]

const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router