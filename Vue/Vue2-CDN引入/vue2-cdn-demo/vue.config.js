const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 解释：externals 配置告诉 Webpack 不要将 vue 和 element-ui 打包，而是直接使用全局变量 Vue 和 Element（CDN 版本会自动提供这些全局变量）。
    // cdn 版本的 element-ui 设置的全局变量是 ELEMENT
    externals: {
      // CDN 的 Element 依赖全局变量 Vue， 所以 Vue 也需要使用 CDN 引入
      vue: 'Vue',
      'element-ui': 'Element',
    }
  },
})
