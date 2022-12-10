// 导入 vue-router
import { createRouter, createWebHistory } from 'vue-router'
// 引入子组件
import HomeView from '../views/HomeView.vue'
// 路由配置
const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/',
    name: 'home',
    component:()=>import('../views/HomeView.vue')
  },
  {
    path: '/cates',
    name: 'cates',
    component:()=>import('../views/catesView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component:()=>import('../views/cartView.vue')
  },
  {
    path: '/my',
    name: 'my',
    component:()=>import('../views/myView.vue')
  },
]
// 实例化
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),//history模式
  routes
})

export default router
