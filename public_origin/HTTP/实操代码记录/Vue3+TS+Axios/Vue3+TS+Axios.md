在 **Vue 3 + TypeScript** 项目中封装 `Axios`，可以帮助你集中管理所有的 HTTP 请求逻辑，并提供类型安全的支持。下面是如何在 Vue 3 和 TypeScript 中封装和使用 `Axios` 的详细步骤。

### **1. 安装依赖**

首先，确保安装了 `Axios` 和相关的类型定义。

```bash
npm install axios
npm install --save-dev @types/axios
```

### **2. 创建 Axios 封装文件**

在 `src/utils` 目录下创建一个 `axios.ts` 文件，封装所有的 HTTP 请求配置和方法，同时为类型提供支持。

#### **src/utils/axios.ts**

```typescript
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',  // 设置基础 URL
  timeout: 10000,  // 设置请求超时（10秒）
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');  // 假设 token 存在 localStorage 中
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
  (response: AxiosResponse) => {
    return response.data;  // 直接返回数据部分，不返回整个响应对象
  },
  (error) => {
    const errorMessage = error.response?.data?.message || '请求失败';
    console.error(errorMessage);
    return Promise.reject(errorMessage);  // 返回错误信息
  }
);

// 封装请求方法，支持泛型，自动处理响应数据类型
const request = {
  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    const response: T = await instance.get(url, { params });
    return response;
  },
  async post<T>(url: string, data?: Record<string, any>): Promise<T> {
    const response: T = await instance.post(url, data);
    return response;
  },
  async put<T>(url: string, data?: Record<string, any>): Promise<T> {
    const response: T = await instance.put(url, data);
    return response;
  },
  async delete<T>(url: string, data?: Record<string, any>): Promise<T> {
    const response: T = await instance.delete(url, { data });
    return response;
  },
};

export default request;
```

### **3. 在 Vue 3 组件中使用 Axios 封装**

你可以通过在 Vue 3 组件中引入封装后的 `Axios`，并利用 TypeScript 的类型检查来确保请求和响应的正确性。

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

<script lang="ts">
import { ref, onMounted } from 'vue';
import request from '@/utils/axios';  // 引入封装的 axios

// 定义返回数据的类型
interface Post {
  id: number;
  title: string;
  body: string;
}

export default {
  setup() {
    const posts = ref<Post[]>([]);  // 用于存储获取的 posts 数据

    // 获取 posts 数据
    const fetchPosts = async () => {
      try {
        const data = await request.get<Post[]>('/posts');  // 发起 GET 请求并指定返回类型
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

#### **示例 2：在 Vue 3 组件中发送 POST 请求**

```vue
<template>
  <div>
    <button @click="createPost">创建新帖子</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import request from '@/utils/axios';  // 引入封装的 axios

// 定义请求数据和响应数据的类型
interface PostRequest {
  title: string;
  body: string;
}

interface PostResponse {
  id: number;
  title: string;
  body: string;
}

export default {
  setup() {
    const newPost = ref<PostRequest>({
      title: '新帖子',
      body: '帖子内容',
    });

    // 创建新帖子
    const createPost = async () => {
      try {
        const response = await request.post<PostResponse>('/posts', newPost.value);  // 发起 POST 请求并指定返回类型
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

如果你希望在整个 Vue 3 项目中都能使用封装后的 `Axios`，可以将它作为插件全局注册，这样每个组件都能直接访问。

#### **在 `main.ts` 中全局注册 Axios 实例**

```typescript
// src/main.ts
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

<script lang="ts">
import { ref, onMounted } from 'vue';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default {
  setup() {
    const posts = ref<Post[]>([]);

    const fetchPosts = async () => {
      try {
        const data = await this.$axios.get<Post[]>('/posts');  // 使用全局 $axios 实例
        posts.value = data;
      } catch (error) {
        console.error('请求失败:', error);
      }
    };

    onMounted(() => {
      fetchPosts();
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

```typescript
// src/utils/axios.ts
import axios, { AxiosInstance, AxiosRequestConfig, CancelTokenSource } from 'axios';

// 创建 Axios 实例
const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
});

let cancelSource: CancelTokenSource;

const request = {
  async get<T>(url: string, params?: Record<string, any>): Promise<T> {
    // 创建一个新的 cancelToken
    cancelSource = axios.CancelToken.source();
    const response: T = await instance.get(url, {
      params,
      cancelToken: cancelSource.token,  // 使用 cancelToken
    });
    return response;
  },

  cancelRequest() {
    if (cancelSource) {
      cancelSource.cancel('请求已取消');
    }
  },

  // 其他请求方法...
};

export default request;
```

然后在 Vue 组件中调用 `cancelRequest` 来取消请求：

```typescript
import { ref, onMounted, onBeforeUnmount } from 'vue';
import request from '@/utils/axios';

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
      request.cancelRequest();  // 组件销毁时取消请求
    });

    return {
      posts,
    };
  },
};
```

### **总结**

1. **Axios 封装**：通过在 `src/utils/axios.ts` 文件中封装 `Axios`，我们集中管理请求配置、拦截器、错误处理等功能，并且使用了泛型来确保请求和响应数据类型的安全。
2. **Vue 3 Composition API**：通过 `setup()` 函数和 `ref` 来声明响应式变量，并使用 `async/await` 来简化请求逻辑，增强代码可读性。
3. **类型安全**：使用 TypeScript 的