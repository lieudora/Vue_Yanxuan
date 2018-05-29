/*
* js入口
* */
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入mock
import './mock/mockServer'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
