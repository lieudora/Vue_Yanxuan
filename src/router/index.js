import Vue from 'vue'
import VueRouter from 'vue-router'

import Maison from '../pages/Maison/Maison'
import Chose from '../pages/Chose/Chose'
import Classifier from '../pages/Classifier/Classifier'
import Order from '../pages/Order/Order'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
/* eslint-disable no-new */
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/maison',
      component: Maison,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/chose',
      component: Chose,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/classifier',
      component: Classifier,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/',
      redirect: '/maison'
    }
  ]
})
