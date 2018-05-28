import Vue from 'vue'
import VueRouter from 'vue-router'

import Maison from '../pages/Maison/Maison'
import Chose from '../pages/Chose/Chose'
import Classifier from '../pages/Classifier/Classifier'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'


/* eslint-disable no-new */
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/maison',
      component: Maison
    },
    {
      path: '/chose',
      component: Chose
    },
    {
      path: '/classifier',
      component: Classifier
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },

    {
      path: '/',
      redirect: '/maison'
    }
  ]
})
