import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/home", // 重定向
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/construction',
    name: 'construction',
    component: () => import('../views/Construction.vue')
  },
  {
    path: '/decoration',
    name: 'decoration',
    component: () => import('../views/Decoration.vue')
  },
  {
    path: '/decorationDesign',
    name: 'decorationDesign',
    component: () => import('../views/DecorationDesign.vue')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../views/Design.vue')
  },
  {
    path: '/invitation',
    name: 'invitation',
    component: () => import('../views/Invitation.vue')
  },
  {
    path: '/invitation/invdetail',
    name: 'invitation/invdetail',
    component: () => import('../views/Invdetail.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views//Register.vue')
  },
  {
    path: '/membership',
    name: 'membership',
    component: () => import('../views//Membership.vue')
  },
  {
    path: '/personalCenter',
    name: 'personalCenter',
    component: () => import( '../views/PersonalCenter.vue'),
    children: [{
      path: 'personaldata',
      name: 'PersonalData',
      component: () => import('../views/PersonalData.vue'),
      meta: {
        
      }
    },{
      path: 'mytender',
      name: 'MyTender',
      component: () => import('../views/MyTender.vue'),
      children: [{
        path: 'tenderInfor',
        name: 'TenderInfor',
        component: () => import('../views/TenderInfor.vue'),
        meta: {
          
        }
      }]
    },{
      path: 'launchbid',
      name: 'LaunchBid',
      component: () => import('../views/LaunchBid.vue'),
      meta: {
        
      }
    },{
      path: 'information',
      name: 'Information',
      component: () => import('../views/Information.vue'),
      meta: {
        
      }
    },{
      path: 'resetpassword',
      name: 'ResetPassword',
      component: () => import('../views/ResetPassword.vue'),
      meta: {
        
      }
    }]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
