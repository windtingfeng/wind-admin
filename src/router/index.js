import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout'

export const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/index',
    children:[
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/index'),
        meta:{
          title:'首页',
          icon:'House'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login'),
  },
  {path:'/:pathMatch(.*)*',redirect:'/error/404'},
  {path:'/:pathMatch(.*)',redirect:'/error/404'},
]

//异步路由
export const asyncRouters = [
  //用户管理
  {
    path: '/usermanager',
    name: 'usermanager',
    component: Layout,
    meta:{
      title:'用户管理',
      icon:'icon-geren'
    },
		noDropdown:true,
    children:[
      {
        path: '/usermanager/myinfo',
        name: 'myinfo',
        component: () => import('../views/usermanager'),
        meta:{
          title:'用户管理',
          icon:'user'
        }
      }
    ]
  },
  //分享功能
  {
    path: '/share',
    name: 'share',
    component: Layout,
    meta:{
      title:'分享功能',
      icon:'icon-fenxiang'
    },
		noDropdown:true,
    children:[
      {
        path: '/share/share',
        component: () => import('../views/share'),
        meta:{
          title:'分享功能',
          icon:'Share'
        }
      }
    ]
  },
  //信息管理
  {
    path: '/infomanager',
    name: 'infomanager',
    component: Layout,
    meta:{
      title:'信息管理',
      icon:'icon-info-circle'
    },
    children:[
      {
        path: '/infomanager/personal',
        component: () => import('../views/infomanager/personal.vue'),
        meta:{
          title:'个人信息',
        }
      },
      {
        path: '/infomanager/editinfo',
        component: () => import('../views/infomanager/editinfo.vue'),
        meta:{
          title:'修改信息',
        }
      }
    ]
  },
  //资金管理
  {
    path: '/capitalmanager',
    name: 'capitalmanager',
    component: Layout,
    meta:{
      title:'资金管理',
      icon:'icon-YUAN'
    },
    children:[
      {
        path: '/capitalmanager/capitalflow',
        component: () => import('../views/capitalmanager/capitalflow.vue'),
        meta:{
          title:'资金流水',
        }
      },
      {
        path: '/capitalmanager/invest',
        component: () => import('../views/capitalmanager/invest.vue'),
        meta:{
          title:'区域投资',
        }
      }
    ]
  },
  //资金数据
  {
    path: '/capitalinfo',
    name: 'capitalinfo',
    component: Layout,
    meta:{
      title:'资金数据',
      icon:'icon-linechart'
    },
    children:[
      {
        path: '/capitalinfo/investdistribution',
        component: () => import('../views/capitalinfo/investdistribution.vue'),
        meta:{
          title:'投资分布',
        }
      },
      {
        path: '/capitalinfo/projectdistribution',
        component: () => import('../views/capitalinfo/projectdistribution.vue'),
        meta:{
          title:'项目分布',
        }
      },
      {
        path: '/capitalinfo/incomedistribution',
        component: () => import('../views/capitalinfo/incomedistribution.vue'),
        meta:{
          title:'收支分布',
        }
      }
    ]
  },
  //权限设置
  {
    path: '/permission',
    name: 'permission',
    component: Layout,
    meta:{
      title:'权限设置',
      icon:'icon-setting'
    },
    children:[
      {
        path: '/permission/pagerule',
        component: () => import('../views/permission/pagerule.vue'),
        meta:{
          title:'页面权限',
        },
        rule:['admin']
      },
      {
        path: '/permission/btnrule',
        component: () => import('../views/permission/btnrule.vue'),
        meta:{
          title:'按钮权限',
        },
        rule:['admin','editor']
      }
    ]
  },
  //错误页面
  {
    path: '/error',
    name: 'error',
    component: Layout,
    meta:{
      title:'错误页面',
      icon:'icon-warning'
    },
    children:[
      {
        path: '/error/401',
        component: () => import('../views/error/401.vue'),
        meta:{
          title:'401',
        }
      },
      {
        path: '/error/404',
        component: () => import('../views/error/404.vue'),
        meta:{
          title:'404',
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
