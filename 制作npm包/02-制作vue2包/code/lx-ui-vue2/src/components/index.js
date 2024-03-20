import lxSuccessButton from "./lx-success-button/index.vue";
import lxWarningButton from "./lx-warning-button/index.vue";
import lxFailButton from "./lx-fail-button/index.vue";

const components = {
  lxSuccessButton,
  lxWarningButton,
  lxFailButton,
};

function install(Vue) {
  const keys = Object.keys(components);
  keys.forEach((name) => {
    const component = components[name];
    Vue.component(component.name || name, component);
  });
}

export default {
  install,
  ...components,
};
