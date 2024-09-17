import Vue from 'vue'
import App from './App.vue'
import router from './router'

// api
import api from '@/api/api'
Vue.prototype.$api = api // 挂载api

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
