

# ESLint

## 一、ESlint代码规范

### JavaScript Standard Style 规范说明

ESLint:是一个代码检查工具，用来检查你的代码是否符合指定的规则(你和你的团队可以自行约定一套规则)。在创建项目时，我们使用的是 [JavaScript Standard Style](https://standardjs.com/readme-zhcn.html) 代码风格的规则。

建议把：https://standardjs.com/rules-zhcn.html 看一遍，然后在写的时候,  遇到错误就查询解决。



例如：

- *字符串使用单引号* – 需要转义的地方除外
- *无分号* – [这](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding)[没什么不好。](http://inimino.org/~inimino/blog/javascript_semicolons)[不骗你！](https://www.youtube.com/watch?v=gsfbh17Ax9I)
- *关键字后加空格* `if (condition) { ... }`
- *函数名后加空格* `function name (arg) { ... }`
- 坚持使用全等 `===` 摒弃 `==` 一但在需要检查 `null || undefined` 时可以使用 `obj == null`
- ......



### 库

```
2022年10月11日18:21

+ prettier 2.7.1：prettier核心代码库

+ eslint 8.25.0 ：ESlint核心代码库
+ eslint-config-airbnb-base 15.0.0 ：airbnb的代码规范（依赖eslint-plugin-import ）
+ eslint-config-prettier 8.5.0 ：eslint 结合prettier的格式化
+ eslint-plugin-import 2.26.0 ：项目里支持eslint
+ eslint-plugin-prettier 4.2.1 ： 将prettier结合进入eslint的插件
+ eslint-plugin-vue 9.6.0 ：eslint在vue里的代码规范

+ @types/eslint 8.4.6
+ @types/node 18.8.4
+ @typescript-eslint/eslint-plugin 5.40.0 ：ESLint插件，包含各类定义好的检测ts代码的规范
+ @typescript-eslint/parser 5.40.0 : ESLint的解析器，用于解析ts，从而检查和规范ts代码
+ eslint-import-resolver-alias 1.1.2 ：让我们在import的时候可以使用@别名

2022年10月11日 20:19

发现还需要安装一个包 ：eslint/create-config
```



## 二、代码规范错误

## 1. 模拟错误

下面我们在main.js中随意做一些改动：添加一些空行、空格

```js
import Vue from 'vue'
import App from './App.vue'

import './styles/index.less'
import router from './router'
Vue.config.productionTip = false

new Vue ( {
  render: h => h(App),
  router
}).$mount('#app')
```

![](images/001.png)



## 2. 手动修正

如果你不认识命令行中的语法报错是什么意思，你可以根据错误代码（func-call-spacing, space-in-parens,.....）去 ESLint 规则列表中查找其具体含义。

打开 [ESLint 规则表](https://zh-hans.eslint.org/docs/latest/rules/)，使用页面搜索（Ctrl + F）这个代码，查找对该规则的一个释义。

![](images/002.png)



## 3. 通过eslint插件来实现自动修正

> 1. eslint会自动高亮错误显示；
> 2. 通过配置，eslint会自动帮助我们修复错误。

### 3.1 安装ESLint插件

![](images/003.png)

### 3.2 配置

```json
// 当保存的时候，eslint自动帮我们修复错误
"editor.codeActionsOnSave": {
    "source.fixAll": true
},
// 保存代码，不自动格式化
"editor.formatOnSave": false
```

### 3.3 注意点

+ 注意：eslint的配置文件必须在根目录下，这个插件才能才能生效。打开项目必须以根目录打开，一次打开一个项目
+ 注意：使用了eslint校验之后，把vscode带的那些格式化工具全禁用了 Beatify 、Prettier

