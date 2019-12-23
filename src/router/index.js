import Vue from 'vue'
import VueRouter from 'vue-router'
import page from '@/views/page'
// import Home from '../views/Home.vue'
import index from '@/views/page/index'
import living from '@/views/page/living'
import quality from '@/views/page/quality'

import cart from '@/views/cart'
import center from '@/views/center'
import classify from '@/views/classify'
import message from '@/views/message'

import login from '@/views/login'


Vue.use(VueRouter)

const routes = [
  {
    path: '/page',
    component: page,
    // component: Home
    children: [
      {
        // path: '/film/nowPlaying',
        path: 'index',
        component: index
      },
      {
        path: 'living',
        component: living
      },
      {
        path: 'quality',
        component: quality
      },
      {
        path: '/page',
        redirect: 'index'
      }
    ]
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/center',
    component: center
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/message',
    component: message
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/*',
    redirect: '/page'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
