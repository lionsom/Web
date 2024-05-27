# 七、axios封装

axios安装

```bash
$ pnpm add axios
```

大致流程

```ts
import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'

const baseURL = 'http://www.baidu.com'

const instance = axios.create({
  // 基础配置
  baseURL,
  timeout: 10000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `AAAAA ${userStore.token}`
    }
    return config
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些事
    if (response.data.code === 0) {
      return response
    }
    // 处理业务失败，给错误提示
    ElMessage.error(response.data.message || '服务异常')
    return Promise.reject(response.data)
  },
  (error) => {
    // 请求错误处理
    if (error.response.status === 401) {
      ElMessage.error('登录已过期，请重新登录')
    }
    ElMessage.error(error.response.data.message || '服务异常')
    return Promise.reject(error)
  }
)

export default instance
export { baseURL }
```









# GPT - vue 请求有哪几种方式

在 Vue.js 中，可以使用多种方式来发起 HTTP 请求，与后端进行数据交互。以下是几种常见的方式：

### 1. 使用 Axios

Axios 是一个基于 Promise 的 HTTP 客户端，适用于浏览器和 Node.js。它是 Vue.js 应用中最常用的请求库。

#### 安装 Axios

首先，通过 npm 或 yarn 安装 Axios：

```bash
npm install axios
# 或者
yarn add axios
```

#### 在组件中使用 Axios

```javascript
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    axios.get('https://api.example.com/data')
      .then(response => {
        this.message = response.data.message;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
```

#### 创建 Axios 实例

你可以创建一个 Axios 实例以便配置全局默认设置：

```javascript
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'Authorization': 'Bearer token'}
});

export default instance;
```

在组件中使用这个实例：

```javascript
import api from './api';

export default {
  mounted() {
    api.get('/data')
      .then(response => {
        this.message = response.data.message;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
```

### 2. 使用 Fetch API

Fetch 是现代浏览器内置的 API，用于发起网络请求。它基于 Promise，并且相对于 XMLHttpRequest 更加简洁和灵活。

#### 在组件中使用 Fetch

```javascript
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        this.message = data.message;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
```

### 3. 使用 Vue Resource

Vue Resource 是 Vue.js 官方的 HTTP 客户端插件，但自 Vue 2.0 以来，官方推荐使用 Axios。尽管如此，Vue Resource 仍然是一个可选的方式。

#### 安装 Vue Resource

```bash
npm install vue-resource
# 或者
yarn add vue-resource
```

#### 在 Vue 项目中使用

```javascript
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

new Vue({
  el: '#app',
  data: {
    message: ''
  },
  mounted() {
    this.$http.get('https://api.example.com/data')
      .then(response => {
        this.message = response.body.message;
      })
      .catch(error => {
        console.error(error);
      });
  }
});
```

### 4. 使用其他 HTTP 客户端库

除了以上提到的几种方式，你还可以使用其他 HTTP 客户端库，比如：

- **jQuery AJAX**：虽然在现代前端开发中不推荐，但仍然是一个选择。
- **SuperAgent**：另一个基于 Promise 的 HTTP 请求库。
- **Request**：虽然主要用于 Node.js，但也可以用于浏览器。

#### 使用 SuperAgent

```bash
npm install superagent
# 或者
yarn add superagent
```

```javascript
import request from 'superagent';

export default {
  data() {
    return {
      message: ''
    };
  },
  mounted() {
    request.get('https://api.example.com/data')
      .then(response => {
        this.message = response.body.message;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
```

### 总结

在 Vue.js 应用中，发起 HTTP 请求的方式有很多，其中最常用的是 Axios 和 Fetch API。根据项目需求和个人偏好，可以选择适合的方式来处理网络请求。Axios 提供了更丰富的功能和配置选项，而 Fetch API 是现代浏览器内置的解决方案，使用简单且灵活。





# GPT - Promise 与 XMLHttpRequest 关系与区别

Promise 和 XMLHttpRequest 是 JavaScript 中处理异步操作的两种不同机制。它们在功能和用途上有一些重叠，但实现和用法上有显著区别。

### XMLHttpRequest

**XMLHttpRequest (XHR)** 是一种浏览器原生的 API，用于在客户端与服务器之间进行数据交互。它支持各种类型的请求，包括 GET、POST 等，可以处理响应并更新网页内容而无需重新加载整个页面。

#### 特点

- **异步请求**：默认情况下，XHR 是异步的，但也可以配置为同步。
- **广泛支持**：几乎所有现代浏览器都支持。
- **事件驱动**：使用事件监听器（如 `onload`、`onerror`）处理响应和错误。

#### 示例

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Success:', xhr.responseText);
  } else {
    console.log('Error:', xhr.statusText);
  }
};

xhr.onerror = function() {
  console.log('Request failed');
};

xhr.send();
```

### Promise

**Promise** 是一种用于处理异步操作的现代化机制，它更简洁、更具可读性。Promise 是 ES6 引入的原生对象，用于表示一个异步操作的最终完成（或失败）及其结果值。

#### 特点

- **链式调用**：Promise 支持 `then` 和 `catch` 方法，可以链式调用以处理成功和错误。
- **可组合性**：多个 Promise 可以组合在一起，处理复杂的异步操作链。
- **更好的错误处理**：可以通过 `catch` 方法集中处理错误，避免回调地狱。

#### 示例

```javascript
const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.example.com/data', true);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(xhr.responseText);
    } else {
      reject(new Error(xhr.statusText));
    }
  };

  xhr.onerror = function() {
    reject(new Error('Request failed'));
  };

  xhr.send();
});

promise.then(response => {
  console.log('Success:', response);
}).catch(error => {
  console.log('Error:', error);
});
```

### 关系与区别

1. **原生支持**：
   - XMLHttpRequest 是浏览器提供的原生对象。
   - Promise 是 ES6 提供的原生对象。

2. **处理异步操作的方式**：
   - XMLHttpRequest 使用回调函数处理异步操作，容易导致回调地狱。
   - Promise 使用 `then` 和 `catch` 方法，支持链式调用，代码更简洁。

3. **错误处理**：
   - XMLHttpRequest 需要在回调函数中手动处理错误。
   - Promise 提供了统一的错误处理方式，通过 `catch` 方法处理所有错误。

4. **代码可读性**：
   - 使用 XMLHttpRequest 进行复杂的异步操作时，代码可读性较差。
   - 使用 Promise 可以更清晰地表达异步操作的流程，提高代码可读性。

### 使用 Fetch API 结合 Promise

Fetch API 是现代浏览器提供的一种更简洁的 HTTP 请求方式，它基于 Promise，简化了使用 XMLHttpRequest 的很多操作。

#### 示例

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
```

### 总结

- **XMLHttpRequest** 是传统的方式，虽然功能强大，但使用起来比较繁琐。
- **Promise** 是现代 JavaScript 中处理异步操作的标准方式，更加简洁和可读。
- **Fetch API** 是一种基于 Promise 的新方式，简化了 HTTP 请求的过程，推荐在现代 Web 开发中使用。

理解 Promise 和 XMLHttpRequest 的关系和区别，可以帮助开发人员在实际项目中选择合适的方式处理异步操作，提高开发效率和代码质量。
