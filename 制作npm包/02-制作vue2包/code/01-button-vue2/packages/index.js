// 导入组件
import LXSuccessButton from './lx-success-button/index.vue';
import LXFailButton from './lx-fail-button/index.vue';
import LXWarningButton from './lx-warning-button/index.vue';

// 组件列表
const components = {
  LXSuccessButton,
  LXFailButton,
  LXWarningButton,
};

/** 函数的几种方式
 * function install(Vue) {} // 方式一
 * const install = function (Vue) {} // 方式二
 * const install = (Vue) => {} // 方式三
*/

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = (Vue) => {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    // 第一个参数：全局组件的名字（字符串类型），第二个参数：哪一个组件（引入的组件名）
    console.log('注册的组件名称：', component.name || name);
    Vue.component(component.name || name, component);
  });
}

// 这里export default是提供给全局引入使用
export default {
  install,
  ...components,
};

// 这里export是提供给按需引入使用
export {
  LXSuccessButton,
  LXFailButton,
  LXWarningButton,
};
