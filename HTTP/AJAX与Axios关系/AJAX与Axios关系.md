**AJAX** 和 **Axios** 都是用于在浏览器中发送 HTTP 请求的技术，但它们之间有一些重要的区别。可以把 **Axios** 看作是对 **AJAX** 的封装，它简化了许多操作，提供了更易于使用的 API。

### **1. AJAX 简介**

**AJAX**（Asynchronous JavaScript and XML）是一种用于在不重新加载整个页面的情况下，向服务器发送请求并接收响应的技术。AJAX 本质上是通过 `XMLHttpRequest`（或现代浏览器中的 `Fetch API`）来实现的。

AJAX 是一种**原生 JavaScript 技术**，通常通过以下方式发送请求：

- `XMLHttpRequest`：传统的原生方法，用于发送 HTTP 请求。
- `Fetch API`：现代浏览器提供的新 API，具有更简洁的语法和更强大的功能。

### **2. Axios 简介**

**Axios** 是一个基于 Promise 的 JavaScript 库，用于向服务器发送 HTTP 请求。它简化了发送 HTTP 请求的过程，并为开发者提供了一个更加友好和功能丰富的 API。

- **Axios 是封装了 XMLHttpRequest 和 Fetch 的第三方库**，简化了异步请求的过程，提供了更多功能，如请求和响应拦截器、请求取消、自动转换 JSON 数据等。
- **Axios 基于 Promise**，并且支持 async/await，因此它提供了比传统的 `XMLHttpRequest` 或 `Fetch API` 更好的可读性和可维护性。

### **3. AJAX 与 Axios 的关系**

- **本质上的关系**：Axios 是基于 `XMLHttpRequest`（或 `Fetch API`）封装的，它简化了发起 HTTP 请求的过程，并提供了更多的功能和便利性。

- 功能上的区别

    ：

    - **AJAX**：原生的请求方式，使用 `XMLHttpRequest` 或 `Fetch API` 来发送 HTTP 请求。它需要手动处理很多事情，比如设置请求头、处理请求和响应的格式、手动解析 JSON 等。
    - **Axios**：基于 AJAX 技术（`XMLHttpRequest` 或 `Fetch`）的第三方库，封装了许多常见的请求任务，提供了更简洁的 API 和更多的功能，如自动转换 JSON 数据、请求和响应拦截器、取消请求、并发请求等。

### **4. 核心区别**

| 特性           | **AJAX (XMLHttpRequest/Fetch)**                              | **Axios**                                               |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| **库类型**     | 原生 JavaScript API，主要通过 `XMLHttpRequest` 或 `Fetch` 实现 | 第三方库，基于 Promise 封装 `XMLHttpRequest` 和 `Fetch` |
| **返回值**     | `XMLHttpRequest` 对象，通过回调函数获取响应结果              | 返回 `Promise`，可与 `async/await` 一起使用             |
| **JSON 解析**  | 需要手动解析 JSON 数据                                       | 自动将 JSON 响应转换为 JavaScript 对象                  |
| **请求拦截器** | 不支持                                                       | 支持请求拦截器和响应拦截器                              |
| **取消请求**   | 需要手动实现请求取消逻辑                                     | 支持取消请求（通过 `CancelToken` 或 `AbortController`） |
| **浏览器支持** | 兼容所有浏览器，特别是老版本的浏览器                         | 需要引入库，兼容现代浏览器（不支持旧版浏览器）          |
| **简洁性**     | 使用起来相对繁琐，代码较长，尤其是需要处理复杂的请求配置时   | 更简洁易用，支持 Promise 和 async/await，使得代码更易读 |
| **错误处理**   | 需要手动处理 HTTP 错误                                       | 自动处理错误，统一的错误处理机制                        |

### **5. 示例对比**

#### **使用 AJAX（XMLHttpRequest）发送 GET 请求**

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};

xhr.send();
```

#### **使用 Axios 发送 GET 请求**

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);  // 自动解析为 JSON 数据
  })
  .catch(error => {
    console.error('请求失败:', error);
  });
```

#### **使用 Fetch 发送 GET 请求**

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())  // 手动解析 JSON 数据
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('请求失败:', error);
  });
```

#### **使用 Axios 发送 POST 请求**

```javascript
import axios from 'axios';

axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'New Post',
  body: 'This is a new post.'
})
  .then(response => {
    console.log('创建成功:', response.data);
  })
  .catch(error => {
    console.error('请求失败:', error);
  });
```

### **6. 总结**

- **AJAX** 是一种基础技术，它通过 `XMLHttpRequest` 或 `Fetch API` 来发起 HTTP 请求，广泛应用于前端开发中。
- **Axios** 是对 AJAX 技术的封装，提供了更简洁、易用的 API，自动处理 JSON 数据、支持请求拦截器和响应拦截器、支持请求取消等功能，是现代 JavaScript 项目中常用的 HTTP 请求库。
- **关系**：Axios 是基于 AJAX 的第三方库，它通过封装 `XMLHttpRequest` 或 `Fetch`，提供了更好的功能和更便捷的接口。