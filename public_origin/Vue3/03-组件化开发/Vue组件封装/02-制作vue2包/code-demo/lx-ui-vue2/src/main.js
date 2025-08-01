import Vue from "vue";
import App from "./App.vue";
// 注册组件
import lxUI from "./components/index";
Vue.use(lxUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
