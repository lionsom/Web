import Vue from 'vue'
import App from './App.vue'


/*********** 全局引入组件库 ***********/
import XXXUI from "lx-button-vue2";
// 全局注册组件库，Vue.use()提供注册插件，插件对象需包含一个install函数。具体可查看官方文档
Vue.use(XXXUI);
/***********************************/


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
