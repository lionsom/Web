import Vue from 'vue'
import App from './App.vue'

// 通过 CDN 引入的 Element UI 是全局变量 ELEMENT，因此这里手动使用 Vue.use
// Vue.use(Element);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
