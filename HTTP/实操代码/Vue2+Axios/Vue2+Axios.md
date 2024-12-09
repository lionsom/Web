在 **Vue 2** 项目中封装 `Axios`，可以帮助你集中管理所有的 HTTP 请求逻辑，使得代码更加清晰和可维护。下面将详细介绍如何在 **Vue 2** 项目中封装 `Axios` 并使用它。

### **1. 安装 Axios**

首先，你需要安装 `Axios` 依赖。

```bash
npm install axios
```

### **2. 创建 Axios 封装**

在项目中创建一个 `axios.js` 文件，封装所有的 HTTP 请求。通常可以将它放在 `src/utils` 目录下，文件名可以是 `axios.js`。

```javascript
// src/utils/axios.js
import axios from 'axios';

// 创建 Axios 实例
const instance = axios.create({
  baseURL: 'https://api.example.com',  // 设置基础 URL
  timeout: 10000,  // 设置请求超时（10秒）
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送前进行一些处理，比如添加 Authorization token
    const token = localStorage.getItem('token');  // 假设 token 存在 localStorage 中
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 处理响应数据
    return response.data;  // 直接返回数据部分，不返回整个响应对象
  },
  error => {
    // 请求失败时统一处理错误
    const errorMessage = error.response?.data?.message || '请求失败';
    console.error(errorMessage);
    return Promise.reject(errorMessage);  // 返回错误信息
  }
);

// 请求方法封装
const request = {
  get(url, params = {}) {
    return instance.get(url, { params });
  },
  post(url, data = {}) {
    return instance.post(url, data);
  },
  put(url, data = {}) {
    return instance.put(url, data);
  },
  delete(url, data = {}) {
    return instance.delete(url, { data });
  },
};

export default request;
```

### **3. 在 Vue 组件中使用封装的 Axios**

在 Vue 组件中引入封装后的 `axios.js`，并使用封装的请求方法。

#### **示例 1：在 Vue 组件中发送 GET 请求**

```javascript
// src/components/Example.vue
<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <p v-else>正在加载...</p>
  </div>
</template>

<script>
import { mapState } from 'vue';
import request from '@/utils/axios';  // 引入封装后的 axios

export default {
  data() {
    return {
      posts: [],  // 用于存储获取的 posts 数据
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    // 获取 posts 数据
    async fetchPosts() {
      try {
        const data = await request.get('/posts');  // 发起 GET 请求
        this.posts = data;  // 将数据存储到组件的 posts 中
      } catch (error) {
        console.error('请求失败:', error);
      }
    },
  },
};
</script>
```

#### **示例 2：在 Vue 组件中发送 POST 请求**

```javascript
<template>
  <div>
    <button @click="createPost">创建新帖子</button>
  </div>
</template>

<script>
import request from '@/utils/axios';  // 引入封装后的 axios

export default {
  data() {
    return {
      newPost: {
        title: '新帖子',
        body: '帖子内容',
      },
    };
  },
  methods: {
    async createPost() {
      try {
        const response = await request.post('/posts', this.newPost);  // 发起 POST 请求
        console.log('创建成功:', response);  // 处理成功后的响应
      } catch (error) {
        console.error('创建失败:', error);
      }
    },
  },
};
</script>
```

### **4. 全局使用 Axios 实例（可选）**

如果你想要在全局范围内使用封装的 `Axios` 实例，可以将它挂载到 Vue 实例上，方便每个组件直接使用。

#### **在 main.js 中全局注册 Axios**

```javascript
// src/main.js
import Vue from 'vue';
import App from './App.vue';
import request from '@/utils/axios';  // 引入封装的 axios

Vue.config.productionTip = false;

// 将 axios 实例挂载到 Vue 原型上
Vue.prototype.$axios = request;

new Vue({
  render: h => h(App),
}).$mount('#app');
```

#### **在 Vue 组件中使用全局 Axios**

现在，你可以在任何 Vue 组件中通过 `this.$axios` 来访问封装后的 `Axios` 实例。

```javascript
<template>
  <div>
    <h1>Posts</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
    <p v-else>正在加载...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const data = await this.$axios.get('/posts');  // 使用全局 axios 实例
        this.posts = data;
      } catch (error) {
        console.error('请求失败:', error);
      }
    },
  },
};
</script>
```

### **5. 请求取消（可选）**

如果你需要在请求过程中进行取消操作，可以使用 `CancelToken` 来实现：

#### **修改 Axios 配置以支持取消**

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// 创建一个 cancel token
const CancelToken = axios.CancelToken;
let cancel;

instance.get('/path/to/api', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;  // 存储取消的回调函数
  })
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  if (axios.isCancel(error)) {
    console.log('请求被取消');
  } else {
    console.error('请求失败:', error);
  }
});

// 在某个时刻调用 cancel 来取消请求
cancel('操作被用户取消');
```

------

### **总结**

1. **封装 Axios 实例**：通过创建一个专门的 `axios.js` 文件，可以封装请求逻辑，如请求拦截、响应拦截、错误处理、请求取消等。
2. **请求方法封装**：对常见的 HTTP 方法（如 GET、POST、PUT、DELETE）进行封装，简化代码使用。
3. **Vue 组件中使用封装**：在 Vue 组件中调用封装后的 `Axios`，简化 HTTP 请求过程。
4. **全局使用 Axios**：可以将封装后的 `Axios` 实例挂载到 Vue 原型上，在整个应用中使用。
5. **取消请求**：可以使用 `CancelToken` 来取消正在进行的请求，避免不必要的请求处理。

通过这种方式，你可以让项目中的 HTTP 请求逻辑更加集中和统一，增强可维护性。