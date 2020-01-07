import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Sports from '@/components/Sports'
import Business from '@/components/Business'
import Entertainment from '@/components/Entertainment'
import Health from '@/components/Health'
import Science from '@/components/Science'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/entertainment',
      name: 'Entertainment',
      component: Entertainment
    },
    {
      path: '/health',
      name: 'Health',
      component: Health
    },
    {
      path: '/science',
      name: 'Science',
      component: Science
    }
  ]
})