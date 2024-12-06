**`Axios`** 和 **`XMLHttpRequest`** 都是用于在 JavaScript 中发送 HTTP 请求的工具，但它们的设计和使用方式有很大的不同。`Axios` 是一个现代化的 HTTP 客户端库，基于 `Promise` 实现，简化了许多传统的异步请求处理流程，而 `XMLHttpRequest` 是浏览器原生的 API，较为低级，需要编写更多的代码来处理异步请求。

### **1. XMLHttpRequest 简介**

**`XMLHttpRequest`**（XHR）是浏览器提供的原生 API，用于向服务器发送 HTTP 请求并接收响应。它是最早实现异步 HTTP 请求的技术，广泛用于 Web 开发中。

#### **基本用法：**

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);  // 设置请求类型和 URL

// 设置响应回调函数
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);  // 输出响应内容
  } else {
    console.error('请求失败:', xhr.statusText);
  }
};

// 处理请求错误
xhr.onerror = function() {
  console.error('请求出现错误');
};

// 发送请求
xhr.send();
```

#### **特点：**

- **回调地狱**：如果你需要处理多个异步请求，`XMLHttpRequest` 需要大量的回调函数，容易导致回调地狱（Callback Hell）。
- **低级接口**：开发者需要自己处理错误、状态码、请求头等，代码较为繁琐。
- **没有内置的 Promise 支持**：`XMLHttpRequest` 没有内建的 Promise 支持，导致在使用时需要显式地进行异步处理。

------

### **2. Axios 简介**

**`Axios`** 是一个基于 `Promise` 的 HTTP 客户端库，封装了底层的 `XMLHttpRequest` 或 `fetch`，使得发起请求更加简单和优雅。它提供了很多方便的功能，如请求和响应拦截器、自动转换 JSON 数据、并发请求支持等。

#### **基本用法：**

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);  // 处理成功的响应数据
  })
  .catch(error => {
    console.error(error);  // 处理错误
  });
```

#### **特点：**

- **基于 Promise**：`Axios` 使用 `Promise` 来处理异步请求，使得代码更加简洁，支持 `async/await`。
- **请求和响应拦截器**：可以在请求发送前或响应返回后对数据进行修改，或者统一处理错误。
- **简化的 API**：`Axios` 提供了一个简单且一致的 API，减少了复杂性。
- **自动转换 JSON**：对于 `GET` 请求，`Axios` 会自动将响应体中的 JSON 数据转换为 JavaScript 对象，而不需要手动解析。

------

### **3. Axios 与 XMLHttpRequest 的关系**

**`Axios` 是建立在 `XMLHttpRequest` 或 `fetch` 上的**，它们之间的关系可以从以下几点理解：

- **底层实现**：`Axios` 使用 `XMLHttpRequest` 作为底层实现来发起 HTTP 请求（在现代浏览器中，`Axios` 可以根据环境自动选择使用 `XMLHttpRequest` 或 `fetch`）。因此，`Axios` 实际上是在封装 `XMLHttpRequest` 的功能，提供了更加简洁的 API 和额外的功能。
- **简化使用**：`XMLHttpRequest` 的使用方式比较繁琐，需要手动设置回调函数来处理请求的状态和响应，而 `Axios` 通过 `Promise` 使得代码更加简洁，可以使用 `then()`、`catch()`、`async/await` 等现代异步编程方式。
- **功能增强**：
    - **`Axios`** 提供了很多 `XMLHttpRequest` 没有的功能，例如：请求拦截器、响应拦截器、取消请求、批量请求（`axios.all`）等。
    - **`Axios`** 自动处理 JSON 数据，而在使用 `XMLHttpRequest` 时，开发者需要手动解析 JSON。
- **浏览器兼容性**：`Axios` 可以在现代浏览器中使用 `fetch` API，而 `XMLHttpRequest` 是一种较老的浏览器 API，在旧版浏览器中有更好的兼容性。

------

### **4. 代码示例对比**

#### **XMLHttpRequest：**

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const posts = JSON.parse(xhr.responseText);
    console.log(posts);
  } else {
    console.error('Error: ' + xhr.status);
  }
};

xhr.onerror = function () {
  console.error('Network error');
};

xhr.send();
```

#### **Axios：**

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data);  // 自动解析为 JSON
  })
  .catch(error => {
    console.error(error);
  });
```

#### **总结**：

- 使用 `Axios` 时，我们不需要手动解析响应内容，也不需要编写大量的回调函数。代码更加简洁，容易维护。
- `Axios` 提供了请求拦截、响应拦截、错误处理等高级功能，封装了底层的 `XMLHttpRequest`，使得发起请求的过程更加灵活和强大。

------

### **5. `Axios` 背后的工作原理**

尽管 `Axios` 封装了底层的异步请求过程，它仍然使用 `XMLHttpRequest` 作为请求的执行引擎。在现代浏览器中，`Axios` 还可以选择使用 `fetch` API。无论是使用 `XMLHttpRequest` 还是 `fetch`，它们的目标都是进行 HTTP 请求和接收响应。

- **`XMLHttpRequest`** 主要是老式的、同步和异步的 HTTP 请求方法，它直接与浏览器的请求机制交互。
- **`Axios`** 则是对这些请求的封装，给开发者提供更高级的功能和更简洁的 API。

------

### **6. 总结对比**

| 特性             | **XMLHttpRequest**                  | **Axios**                            |
| ---------------- | ----------------------------------- | ------------------------------------ |
| **使用方式**     | 使用回调函数和事件处理              | 基于 `Promise`，支持 `async/await`   |
| **功能**         | 需要手动处理状态、错误、请求头等    | 自动处理 JSON、请求和响应拦截器等    |
| **错误处理**     | 通过 `onerror` 和 `status` 手动处理 | `catch()` 和 `try/catch` 均可        |
| **简洁性**       | 相对复杂，代码冗长                  | 代码简洁，易于阅读和维护             |
| **支持跨域请求** | 支持，但需要配置 `CORS`             | 自动处理跨域问题（前提是服务器支持） |
| **支持取消请求** | 需要手动实现                        | 支持请求取消功能                     |
| **兼容性**       | 浏览器原生支持较好                  | 现代浏览器支持（老版本 IE 不支持）   |

### **结论**

- **`Axios`** 是一个现代化的 HTTP 客户端，封装了 `XMLHttpRequest`，提供了更易用、更强大的功能。它基于 `Promise`，简化了异步请求的处理，同时增加了很多额外的功能，像请求拦截、响应拦截、请求取消等。
- **`XMLHttpRequest`** 是底层的浏览器 API，相比之下需要更多的手动配置和错误处理，使用上较为繁琐。

如果你在项目中需要进行大量的 HTTP 请求，**`Axios`** 是更好的选择，尤其是在需要处理复杂的请求逻辑时，它可以提高开发效率和代码可维护性。