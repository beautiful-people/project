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
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    // children:[
      
    //     {
    //       path: '',
    //       name: 'home',
    //       component: () => import('../views/Home.vue'),
    //       meta: {
    //         auth: true
    //       }
    //     },
    //     {
    //       path: '/login',
    //       name: 'login',
    //       component: () => import('../views/Login.vue'),
    //       meta: {
    //         auth: true
    //       }
    //     },
    //     {
    //       path: '/register',
    //       name: 'register',
    //       component: () => import('../views/Register.vue'),
    //       meta: {
    //         auth: true
    //       }
    //     },
      
    // ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/effectpicture',
    name: 'effectpicture',
    component: () => import(/* webpackChunkName: "about" */ '../views/EffectPicture.vue')
  },
  {
    path: '/homeDetails',
    name: 'homeDetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeDetails.vue')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  },
  {
    path: '/userdetails',
    name: 'userdetails',
    component: () => import(/* webpackChunkName: "about" */ '../views/Userdetails.vue')
  },
  {
    path: '/original',
    name: 'original',
    component: () => import(/* webpackChunkName: "about" */ '../views/Original.vue')
  },
  {
    path: '/fpw',
    name: 'fpw',
    component: () => import(/* webpackChunkName: "about" */ '../views/FPW.vue')
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
    path: '/detailed',
    name: 'detailed',
    component: () => import('../views//Detailed.vue')
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
    },{
      path: 'tenderInfor',
      name: 'TenderInfor',
      component: () => import('../views/TenderInfor.vue'),
      meta: {
        
      }
    },
    {
      path: 'Merpersonaldata',
      name: 'MerPersonalData',
      component: () => import('../views/MerPersonalData.vue'),
      meta: {
        
      }
    },{
      path: 'Mermytender',
      name: 'MerMyTender',
      component: () => import('../views/MerMyTender.vue'),
    },{
      path: 'MerLaunchBid',
      name: 'MerLaunchBid',
      component: () => import('../views/MerLaunchBid.vue'),
      meta: {
      }
    },{
      path: 'MerInformation',
      name: 'MerInformation',
      component: () => import('../views/MerInformation.vue'),
      meta: {
        
      }
    },{
      path: 'MertenderInfor',
      name: 'MerTenderInfor',
      component: () => import('../views/MerTenderInfor.vue'),
      meta: {
        
      }
    }
    ,{
      path: 'MerTranscript',
      name: 'MerTranscript',
      component: () => import('../views/MerTranscript.vue'),
      meta: {
        
      }
    },{
      path: 'MerProgram',
      name: 'MerProgram',
      component: () => import('../views/MerProgram.vue'),
      meta: {
        
      }
    }
  ]
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// // 注册全局守卫
// // 在访问路由之前进行拦截
// router.beforeEach((to, from, next) => {
//   // 获取 token，登录的标识
//   var token = sessionStorage.getItem("token")

//   if(to.meta.auth) { // 判断是否需要权限
//     if(token) { // 再次判断是否已经有权限了
//       next()
//     } else {
//       next({ // 没有权限，导向登录页
//         path: "/home",
//         query: {redirect: to.fullPath} // 记录原本想访问的路由
//       })
//     }
//   } else {
//     next() // 想去哪就去哪
//   }
// })

export default router
