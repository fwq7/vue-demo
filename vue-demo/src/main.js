// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import apiUrl from './apiUrl'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
global.apiUrl = apiUrl.apiUrl
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
