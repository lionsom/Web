在 **Vue 3** 项目中封装 `Axios`，可以帮助你集中管理 HTTP 请求，统一处理请求和响应的逻辑，提升代码的可读性和可维护性。以下是如何在 Vue 3 中封装和使用 `Axios` 的详细步骤。

### **1. 安装 Axios**

首先，安装 `Axios`：

```bash
npm install axios
```

### **2. 创建 Axios 封装文件**

在 `src/utils` 目录下创建一个 `axios.js` 文件，封装所有的 HTTP 请求配置和功能。

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
  (config) => {
    // 在请求发送之前进行处理，如添加 Authorization token
    const token = localStorage.getItem('token');  // 从 localStorage 获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 在响应成功时直接返回数据
    return response.data;
  },
  (error) => {
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

### **3. 在 Vue 3 组件中使用封装后的 Axios**

你可以通过引入封装后的 `Axios` 方法来在 Vue 3 组件中发送 HTTP 请求。

#### **示例 1：在 Vue 3 组件中发送 GET 请求**

```vue
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
import { ref, onMounted } from 'vue';
import request from '@/utils/axios';  // 引入封装的 axios

export default {
  setup() {
    const posts = ref([]);  // 用于存储获取的 posts 数据

    // 获取 posts 数据
    const fetchPosts = async () => {
      try {
        const data = await request.get('/posts');  // 发起 GET 请求
        posts.value = data;  // 将数据存储到响应式变量 posts 中
      } catch (error) {
        console.error('请求失败:', error);
      }
    };

    onMounted(() => {
      fetchPosts();  // 组件加载时获取数据
    });

    return {
      posts,
    };
  },
};
</script>
```

#### **示例 2：在 Vue 3 组件中发送 POST 请求**

```vue
<template>
  <div>
    <button @click="createPost">创建新帖子</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import request from '@/utils/axios';  // 引入封装的 axios

export default {
  setup() {
    const newPost = ref({
      title: '新帖子',
      body: '帖子内容',
    });

    // 创建新帖子
    const createPost = async () => {
      try {
        const response = await request.post('/posts', newPost.value);  // 发起 POST 请求
        console.log('创建成功:', response);
      } catch (error) {
        console.error('创建失败:', error);
      }
    };

    return {
      createPost,
    };
  },
};
</script>
```

### **4. 全局注册 Axios 实例（可选）**

如果你希望在整个 Vue 3 项目中都能使用封装后的 `Axios`，可以将它作为插件全局注册，使得每个组件都能直接访问。

#### **在 `main.js` 中全局注册 Axios 实例**

```javascript
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import request from '@/utils/axios';  // 引入封装的 axios

const app = createApp(App);

// 将封装的 axios 实例挂载到全局属性 $axios 上
app.config.globalProperties.$axios = request;

app.mount('#app');
```

#### **在 Vue 组件中使用全局 Axios 实例**

```vue
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
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const posts = ref([]);  // 用于存储获取的 posts 数据

    // 获取 posts 数据
    const fetchPosts = async () => {
      try {
        const data = await this.$axios.get('/posts');  // 使用全局 $axios 实例
        posts.value = data;
      } catch (error) {
        console.error('请求失败:', error);
      }
    };

    onMounted(() => {
      fetchPosts();  // 组件加载时获取数据
    });

    return {
      posts,
    };
  },
};
</script>
```

### **5. 请求取消（可选）**

如果你需要在请求过程中进行取消操作，可以使用 `CancelToken`。

#### **修改 Axios 配置以支持取消**

```javascript
// src/utils/axios.js
import axios from 'axios';

const CancelToken = axios.CancelToken;
let cancel;

const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

// 创建请求实例，支持取消
const request = {
  get(url, params = {}) {
    return instance.get(url, {
      params,
      cancelToken: new CancelToken(function executor(c) {
        cancel = c;  // 存储取消回调
      }),
    });
  },
  // 其他方法...
};

// 用于取消请求
const cancelRequest = () => {
  if (cancel) {
    cancel('请求被用户取消');
  }
};

export { request, cancelRequest };
```

然后在 Vue 组件中调用 `cancelRequest` 来取消请求：

```javascript
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { request, cancelRequest } from '@/utils/axios';

export default {
  setup() {
    const posts = ref([]);
    
    const fetchPosts = async () => {
      try {
        const data = await request.get('/posts');
        posts.value = data;
      } catch (error) {
        console.error('请求失败:', error);
      }
    };

    onMounted(() => {
      fetchPosts();
    });

    onBeforeUnmount(() => {
      cancelRequest();  // 组件销毁时取消请求
    });

    return {
      posts,
    };
  },
};
```

### **总结**

1. **Axios 封装**：通过在 `src/utils/axios.js` 文件中封装 `Axios`，集中管理请求配置、拦截器、错误处理等功能，简化了每个组件中的请求逻辑。
2. **全局使用 Axios**：通过 `app.config.globalProperties.$axios` 全局注册封装后的 `Axios` 实例，使得任何组件都能方便地使用它。
3. **Vue 3 Composition API**：通过 `setup()` 函数和 `ref` 来声明响应式变量，并使用 `async/await` 来简化请求处理。
4. **请求取消**：通过 `CancelToken` 来实现请求取消，避免在不需要的情况下进行网络请求。

封装 `Axios` 后，你的 Vue 3 项目将能够更方便地处理 HTTP 请求，同时提高代码的可维护性和可扩展性。