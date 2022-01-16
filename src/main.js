import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

// 挂载统一管理的api
Vue.prototype.$api = api


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
