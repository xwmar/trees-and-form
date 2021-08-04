import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/tree'
  },
  {
    path: '/tree',
    name: 'Tree',
    component: () => import('@/views/Tree')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form')
  }
]

const router = new VueRouter({
  routes
})

export default router
