* [vue3+vite项⽬搭建-配置环境变量env](https://huaweicloud.csdn.net/654cb9ce91098a10412755ce.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mzc0NTMyMiwiZXhwIjoxNzEwNzMyMjY2LCJpYXQiOjE3MTAxMjc0NjYsInVzZXJuYW1lIjoiTGlvbnNvbSJ9.F24tZFA-EoSgtGGqyfkbIZOeQrRK-maSpaIqMVHL--c)
* [vue 3 第三十六章：vite环境变量（.env文件的配置及使用）](https://blog.csdn.net/to_the_Future/article/details/131147098)
* [Vue3+Vite使用环境变量.env的一些配置](https://juejin.cn/post/7205477647269806141#heading-0)



# 创建Vu3项目

```sh
$ npm create vue@latest
Need to install the following packages:
  create-vue@3.9.2
Ok to proceed? (y)

Vue.js - The Progressive JavaScript Framework

✔ Project name: … vue3-env-demo
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /Users/qiyeyun/Study/Web/Vue2&3/Vue .env/vue3-env-demo...

Done. Now run:

  cd vue3-env-demo
  npm install
  npm run format
  npm run dev
```











# GPT 

在Vue 3中，可以通过`.env`文件来配置不同环境下的环境变量。通常会创建不同的`.env`文件来分别存储不同环境的配置，比如`.env.development`、`.env.production`等。Vue CLI会根据当前的环境自动加载对应的`.env`文件。

示例：

1. 创建`.env.development`文件，用于存储开发环境的配置：

```
VUE_APP_API_URL=https://api.example.com
VUE_APP_API_KEY=development_api_key
```

2. 创建`.env.production`文件，用于存储生产环境的配置：

```
VUE_APP_API_URL=https://api.example.com
VUE_APP_API_KEY=production_api_key
```

3. 在项目中，可以通过`process.env.NODE_ENV`来获取当前的环境，根据不同的环境加载对应的环境变量：

```vue
<template>
  <div>
    <p>API URL: {{ apiUrl }}</p>
    <p>API Key: {{ apiKey }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API_URL,
      apiKey: process.env.VUE_APP_API_KEY
    };
  }
};
</script>
```

在开发环境中，Vue CLI会自动加载`.env.development`文件中的配置；在生产环境中，会加载`.env.production`文件中的配置。这样可以方便地根据不同的环境加载对应的环境变量，同时保护敏感信息的安全性。
