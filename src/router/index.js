import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/construction',
    name: 'construction',
    component: () => import( '../views/Construction.vue')
  },
  {
    path: '/decoration',
    name: 'decoration',
    component: () => import( '../views/Decoration.vue')
  },
  {
    path: '/decorationDesign',
    name: 'decorationDesign',
    component: () => import( '../views/DecorationDesign.vue')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import( '../views/Design.vue')
  },
  {
    path: '/invitation',
    name: 'invitation',
    component: () => import( '../views/Invitation.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: () => import( '../views/PersonalCenter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
