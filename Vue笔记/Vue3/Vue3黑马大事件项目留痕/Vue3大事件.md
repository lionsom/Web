# pnpm创建Vue3大事件项目

![](images/01.png)



# 配置ESLint + Prettier

* <font color=red>禁止Prettier插件，使用Prettier包</font>，关闭  `format on save`
* 安装ESLint插件，并配置保存时自动修复
* 在 `eslintrc.cjs` 中配置 `prettier规则` 和 `eslint规则`

![](images/02.png)



```json
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // 前置条件:
    // 1. 禁用Prettier插件，关闭 format on save
    // 2. 安装ESLint插件，并配置保存时自动修复
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true, // 单引号
        semi: false, // 无分号
        printWidth: 80, // 一行最多80个字符
        trailingComma: 'none', // 不加对象、数组最后一个逗号
        endOfLine: 'auto' // 换行符号不限制
      }
    ],
    // ESLint
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index'] // vue组件名称多个单词组成（忽略index.vue）
      }
    ],
    // 关闭props解构的校验 (props解构会丢失响应式，所以要提示报错，但是我们有解决办法，所以可以关闭)
    'vue/no-setup-props-destructure': ['off'],
    // 添加未定义变量错误提示，create-vue@3.6.3关闭
    'no-undef': 'error'
  }
}
```



# hosky + lint-staged

























