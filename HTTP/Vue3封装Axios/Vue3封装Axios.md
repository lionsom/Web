在 **Vue 3** 项目中，封装 `Axios` 是一种常见的做法，它能帮助你集中管理 API 请求，提高代码复用性、可维护性，并且可以统一处理请求和响应的拦截、错误处理等。

以下是如何在 **Vue 3** 中进行 `Axios` 的二次封装的基本步骤：

### **1. 安装 Axios**

首先，你需要安装 `Axios` 依赖：

```bash
npm install axios
```

------

### **2. 创建 Axios 封装文件**

在项目中创建一个 `axios.js` 文件，放在 `src` 目录下（比如：`src/utils/axios.js`）。

```javascript
// src/utils/axios.js
import axios from 'axios';

// 创建 axios 实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com', // 基础 URL
  timeout: 10000,  // 请求超时设置（10秒）
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在请求发送之前做些什么，比如添加 token
    const token = localStorage.getItem('token');  // 从本地存储中获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);  // 请求错误时，返回错误信息
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 在这里可以处理响应数据，或者根据返回的状态码做一些通用的错误处理
    return response.data;  // 只返回响应的 data 部分，简化后续使用
  },
  (error) => {
    // 处理请求失败的情况
    const errorMessage = error.response?.data?.message || '请求失败';
    console.error(errorMessage);
    return Promise.reject(errorMessage);  // 返回错误信息
  }
);

export default instance;
```

------

### **3. 在 Vue 组件中使用封装的 Axios**

现在，你已经封装了 `Axios`，可以在 Vue 组件中引入并使用这个封装后的实例。

```javascript
// 在 Vue 组件中使用封装后的 axios
import { ref } from 'vue';
import axios from '@/utils/axios';  // 引入封装后的 axios

export default {
  setup() {
    const data = ref(null);
    const error = ref(null);

    // 发起请求
    const fetchData = async () => {
      try {
        const response = await axios.get('/path/to/your/api');  // 请求接口
        data.value = response;  // 将请求结果存储到响应数据中
      } catch (err) {
        error.value = err;  // 错误处理
      }
    };

    // 调用 fetchData 方法获取数据
    fetchData();

    return {
      data,
      error,
    };
  },
};
```

------

### **4. 优化封装：支持更多 HTTP 请求方法**

为了让封装的 `Axios` 更加通用，我们可以支持更多的 HTTP 请求方法（如 POST、PUT、DELETE 等）。

```javascript
// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorMessage = error.response?.data?.message || '请求失败';
    console.error(errorMessage);
    return Promise.reject(errorMessage);
  }
);

// 支持封装常见的请求方法
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

在 Vue 组件中调用时，就可以直接通过封装的 `request` 对象来发起 HTTP 请求了：

```javascript
import { ref } from 'vue';
import request from '@/utils/axios';  // 使用封装后的 axios

export default {
  setup() {
    const data = ref(null);
    const error = ref(null);

    // 发起 GET 请求
    const fetchData = async () => {
      try {
        const response = await request.get('/path/to/your/api');
        data.value = response;
      } catch (err) {
        error.value = err;
      }
    };

    fetchData();

    return {
      data,
      error,
    };
  },
};
```

------

### **5. 使用 `async/await` 简化请求**

如果你使用了 `async/await`，你的请求和响应处理就显得更加简洁和清晰。下面是一个常见的 `async/await` 的应用场景：

```javascript
// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const request = {
  async get(url, params = {}) {
    try {
      const response = await instance.get(url, { params });
      return response;
    } catch (error) {
      throw error;
    }
  },
  async post(url, data = {}) {
    try {
      const response = await instance.post(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  },
  // 其他方法...
};

export default request;
```

------

### **6. 全局注册 Axios 实例（可选）**

如果你希望在全局范围内使用 Axios 实例，而不需要每个组件都导入它，可以在 `main.js` 中将它作为插件全局注册：

```javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import axios from '@/utils/axios';

const app = createApp(App);
app.config.globalProperties.$axios = axios;  // 注册 axios 到全局属性

app.mount('#app');
```

这样，在任何 Vue 组件中，你就可以直接通过 `this.$axios` 访问封装后的 Axios 实例：

```javascript
export default {
  setup() {
    const data = ref(null);
    const error = ref(null);

    const fetchData = async () => {
      try {
        const response = await this.$axios.get('/path/to/api');
        data.value = response;
      } catch (err) {
        error.value = err;
      }
    };

    fetchData();

    return {
      data,
      error,
    };
  },
};
```

------

### **总结**

1. **Axios 封装**：通过封装 `Axios`，你可以集中管理 API 请求、请求拦截、响应拦截、错误处理等，简化代码和提升可维护性。
2. **支持常见 HTTP 方法**：可以封装常用的 HTTP 请求方法（如 `get`、`post`、`put`、`delete`）。
3. **支持 `async/await`**：通过 `async/await`，使得请求处理更加简洁。
4. **全局注册**：可以选择将 `Axios` 实例全局注册，方便在任何组件中访问。

通过这种方式，你的 Vue 3 项目中所有的 HTTP 请求将统一管理，并且易于维护和扩展。