import { createRouter, createWebHashHistory } from 'vue-router'

import home from '@/views/Home/Home.vue'
const hesuan = () => import('@/views/Hesuan/Hesuan.vue')
const area = () => import('@/views/Area/Area.vue')
const wuzi = () => import('@/views/Wuzi/Wuzi.vue')
const travel = () => import('@/views/Travel/Travel.vue')
const select = () => import('@/views/Select/Select.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/hesuan',
    name: 'hesuan',
    component: hesuan
  },
  {
    path: '/area',
    name: 'area',
    component: area
  },
  {
    path: '/wuzi',
    name: 'wuzi',
    component: wuzi
  },
  {
    path: '/travel',
    name: 'travel',
    component: travel
  },
  {
    path: '/select',
    name: 'select',
    component: select
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  //切换路由时页面回到顶部
  scrollBehavior() {
    //vue2.0
    // return { x: 0, y: 0 }
    //vue3.0
    return { left: 0, top: 0 }
  }
})

export default router
