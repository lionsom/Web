const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: "examples/main.js",  // 主页面文件路径
      template: "public/index.html",
      filename: "index.html",
    },
  },
  transpileDependencies: true,
  lintOnSave: false, // 是否开启eslint
})
