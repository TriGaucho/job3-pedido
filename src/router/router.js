import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../pages/Login'
import Pessoa from '../pages/Pessoa'
import Produto from '../pages/Produto'
import Intro from '../pages/Intro'
// import Pedido from '../pages/Pedido'
// import SituacaoProduto from '../pages/SituacaoProduto'

const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/pessoa',
        component: Pessoa
    },
    {
        path: '/produto',
        component: Produto
    },
    {
        path: '/intro',
        component: Intro
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