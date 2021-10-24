import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },{
    path: '/moduloadmin',
    name: 'Moduloadmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Moduloadmin.vue')
  },{
    path: '/modulosuperadmin',
    name: 'Modulosuperadmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Modulosuperadmin.vue')
  },{
    path: '/cargarproducto',
    name: 'Cargarproducto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cargarproducto.vue')
  },{
    path: '/verusuarios',
    name: 'Verusuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Verusuarios.vue')
  },{
    path: '/verproductos',
    name: 'Verproductos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Verproductos.vue')
  },{
    path: '/editarproductos',
    name: 'Editarproductos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editarproductos.vue')
  },{
    path: '/veradministradores',
    name: 'Veradministradores',
    component: () => import(/* webpackChunkName: "about" */ '../views/Veradministradores.vue')
    
  },{
    path: '/editarusuarios',
    name: 'Editarusuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editarusuarios.vue')
  },{
    path: '/editaradministradores',
    name: 'Editaradministradores',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editaradministradores.vue')
  },{
    path: '/gestionarcomentarios',
    name: 'Gestionarcomentarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gestionarcomentarios.vue')
  },{
    path: '/cargaradministradores',
    name: 'Cargaradministradores',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cargaradministradores.vue')
  },
  {
    path: '/infocuenta',
    name: 'Infocuenta',
    component: () => import(/* webpackChunkName: "about" */ '../views/Infocuenta.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
