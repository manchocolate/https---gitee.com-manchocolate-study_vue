import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta:{
      title:'首页',
    },
    redirect:"/welcome",
    component: ()=>import("@/views/HomeView.vue"),
    children:[
      {
        path:'/welcome',  
        name:'welcome',
        meta:{
          title:'欢迎页',
        },
        component:()=>import("@/views/welcomeView.vue"),
      },
      {
        path:'/goods',  
        name:'goods',
        meta:{
          title:'商品',
        },
        component:()=>import("@/views/goodsView.vue"),
      },
      {
        path:'/cates',  
        name:'cates',
        meta:{
          title:'分类',
        },
        component:()=>import("@/views/catesView.vue"),
      },
      {
        path:'/welcome',  
        name:'welcome',
        component:()=>import("@/views/welcomeView.vue"),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
