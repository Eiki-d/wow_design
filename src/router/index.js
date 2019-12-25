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
import inner from '@/views/inner'
import date_new from '@/views/inner/Date_new'
import sale from '@/views/inner/Sale'
import price from '@/views/inner/Price'

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
    component: classify,
  },
  {
    path: '/inner',
    component: inner,
    children: [
      {
        path: 'date_new',
        name: "date_new",
        component: date_new
      },
      {
        path: 'sale',
        component: sale
      },
      {
        path: 'price',
        component: price
      },
      {
        path: '/inner',
        
        redirect: 'date_new'
      }

    ]
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
