* [Vue3 - 官方 - 工具链](https://cn.vuejs.org/guide/scaling-up/tooling.html)
* [Vite 官方中文文档](https://cn.vitejs.dev/)
* [Vue3入门指南与实战案例 - 脚手架](https://vue3.chengpeiquan.com/upgrade.html#create-vite)

* Vue2 -> [Vue CLI](https://cli.vuejs.org/zh/#%E8%B5%B7%E6%AD%A5) -> Webpack
* Vue3 -> [create-vue](https://cn.vuejs.org/guide/scaling-up/tooling.html#project-scaffolding)  -> Vite



# Vue2

## 1. vue-cli - 选择vue2

1. 全局安装（只需安装一次即可）： `npm i @vue/cli -g`
2. 查看vue/cli版本：`vue --version`
3. 创建项目架子：`vue create project-name` (项目名不能使用中文)
4. 启动项目：`npm run serve` (命令不固定，找package.json)

```bash
# 安装Vue CLI
$ npm i @vue/cli -g

# 查看
$ vue -V
@vue/cli 5.0.8

# Vue CLI 创建Vue2项目
$ vue create hello-world
# OR
vue ui
```



## 2. Vue UI - 选择vue2

我们可以通过 **vue ui** 命令来打开图形化界面创建和管理项目：

```bash
$ vue ui
```



## 3. create-vue - Vite + Vue2

[create-vue](https://github.com/vuejs/create-vue)

### 方式一

```bash
$ npm init vue@2

Need to install the following packages:
  create-vue@2.2.0
Ok to proceed? (y)

Vue.js - The Progressive JavaScript Framework

✔ Project name: … 222
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/qiyeyun/222...

Done. Now run:

  cd 222
  npm install
  npm run dev
```



### 方式二

```bash
# Or, if you need to support IE11, you can create a Vue 2 project with:
$ npm create vue@legacy

Need to install the following packages:
  create-vue@2.2.0
Ok to proceed? (y)

Vue.js - The Progressive JavaScript Framework

✔ Project name: … 22222
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/qiyeyun/22222...

Done. Now run:

  cd 22222
  npm install
  npm run dev
```





# Vue3



## 1. vue-cli - 选择vue3

```bash
## 安装或者升级
$ npm install -g @vue/cli
## 保证 vue cli 版本在 4.5.0 以上
$ vue --version
## 创建项目
$ vue create my-project

Vue CLI v5.0.8
? Please pick a preset: (Use arrow keys)
❯ Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
  Manually select features
```



## 2. Vue UI - 选择vue3

我们可以通过 **vue ui** 命令来打开图形化界面创建和管理项目：

```bash
$ vue ui
```



## 3. create-vue - Vite + Vue3

[create-vue](https://github.com/vuejs/create-vue) 是 Vue 官方推出的一个新脚手架，用以代替基于 Webpack 的 Vue CLI ，它可以创建基于 Vite 的 Vue 基础模板。

* 前提环境条件：已安装 16.0 或更高版本的 Node.js
    * `node -v`

* 创建一个Vue应用
    * `npm init vue@latest`
    * `npm create vue@latest`
    * 这一指令将会安装并执行 create-vue



### 方式一

```bash
$ npm init vue@3

Need to install the following packages:
  create-vue@3.9.1
Ok to proceed? (y)

Vue.js - The Progressive JavaScript Framework

✔ Project name: … 333
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/qiyeyun/333...

Done. Now run:

  cd 333
  npm install
  npm run dev
```



### 方式二

```bash
# 这一指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具。
$ npm init vue@latest

Vue.js - The Progressive JavaScript Framework

✔ Project name: … test-demo
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/qiyeyun/test-demo...

Done. Now run:

  cd test-demo
  npm install
  npm run dev
```



### 方式三

```bash
# create-vue 创建Vue3项目。这个命令会安装和执行 create-vue，它是 Vue 提供的官方脚手架工具。
$ npm create vue
$ npm create vue@latest
# Or, if you need to support IE11, you can create a Vue 2 project with:
$ npm create vue@legacy

Vue.js - The Progressive JavaScript Framework

✔ Project name: … 3333
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … No / Yes

Scaffolding project in /Users/qiyeyun/3333...

Done. Now run:

  cd 3333
  npm install
  npm run dev
```



## 4. [create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite) 是 Vite 官方推荐的一个脚手架工具，可以创建基于 Vite 的不同技术栈基础模板。

### 方式一

```bash
$ npm create vite

Need to install the following packages:
  create-vite@5.1.0
Ok to proceed? (y)
✔ Project name: … vite-project
✔ Select a framework: › Vue
✔ Select a variant: › TypeScript

Scaffolding project in /Users/qiyeyun/vite-project...

Done. Now run:

  cd vite-project
  npm install
  npm run dev
```



### 方式二

```bash
# 使用 Vite 快速构建 Vue 项目
$ npm init vite-app test-demo

Scaffolding project in /Users/qiyeyun/test-demo...

Done. Now run:

  cd test-demo
  npm install (or `yarn`)
  npm run dev (or `yarn dev`)
```



## 5. 其他脚手架 - Create Preset

[Vue3入门指南与实战案例 - Create Preset](https://vue3.chengpeiquan.com/upgrade.html#create-preset)

[create-preset](https://github.com/awesome-starter/create-preset) 是 Awesome Starter 的 CLI 脚手架，提供快速创建预设项目的能力，可以创建一些有趣实用的项目启动模板，也可以用来管理的常用项目配置。

```bash
$ npm create preset

Need to install the following packages:
  create-preset@0.13.1
Ok to proceed? (y)

---------------------------------------------------------------
   ____                _         ____                     _
  / ___|_ __ ___  __ _| |_ ___  |  _ \ _ __ ___  ___  ___| |_
 | |   | '__/ _ \/ _` | __/ _ \ | |_) | '__/ _ \/ __|/ _ \ __|
 | |___| | |  __/ (_| | ||  __/ |  __/| | |  __/\__ \  __/ |_
  \____|_|  \___|\__,_|\__\___| |_|   |_|  \___||___/\___|\__|

                    https://preset.js.org
---------------------------------------------------------------

* If requests are slow, proxy download can be enabled:
  1. Run "npm i -g create-preset" to install globally
  2. Run "preset proxy on" to turn on proxy downloads
  3. Run "preset i" to create preset, it should be very fast now

.................
```



### [create-preset 全局安装](https://vue3.chengpeiquan.com/upgrade.html#全局安装)

也可以像使用 @vue/cli 一样，全局安装到本地，通过 `preset init` 命令来创建项目。

推荐全局安装它，用起来更方便，请先全局安装：

bash

```bash
$ npm install -g create-preset
```

可以通过下面这个命令来检查安装是否成功，如果成功，将会得到一个版本号：

bash

```bash
$ preset -v
```

然后可以通过 `--template` 选项直接指定一个模板创建项目，在这里使用 `vue3-ts-vite` 模板创建一个名为 `hello-vue3` 的项目：

bash

```bash
$ preset init hello-vue3 --template vue3-ts-vite
```

常用的项目模板也可以绑定为本地配置，点击 [Create Preset 官方文档](https://preset.js.org/zh/) 查看完整使用教程。





