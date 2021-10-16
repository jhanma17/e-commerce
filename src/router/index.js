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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
