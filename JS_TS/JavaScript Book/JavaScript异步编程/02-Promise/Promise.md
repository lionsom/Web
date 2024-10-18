[MDN - Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

[ECMAScript 6入门 - Promise - 阮一峰](https://es6.ruanyifeng.com/#docs/promise)



# Promise

> 与 AJAX 文档有重合！！



## 1. 认识Promise

在 JavaScript 中，**`Promise`** 是一种用于处理异步操作的对象。



## 2. Promise 的状态

一个 `Promise` 可以有三种状态：

1. **`pending`（待定）**：初始状态，操作尚未完成，也没有结果。
2. **`fulfilled`（已完成/已兑现）**：操作成功完成，Promise 拥有一个结果值。
3. **`rejected`（已拒绝）**：操作失败，Promise 拥有一个错误原因。

一旦 `Promise` 状态变为 `fulfilled` 或 `rejected`，状态就不会再改变。

![](images_promise/002.png)

![](images_promise/001.png)



## 3. Promise 的用法

创建一个 `Promise` 时，必须传递一个回调函数给构造函数，这个回调函数接受两个参数：`resolve` 和 `reject`。

- 当异步操作成功时，调用 `resolve()`，将结果传递给 `Promise`。
- 当异步操作失败时，调用 `reject()`，将错误信息传递给 `Promise`。

**`Promise` 的方法**

* `.then`
* `.catch`
* `.finally`：无论 `Promise` 最终是成功还是失败，`finally` 方法都会在处理结束后执行。它不接受参数，只执行一次。

```js
// 1. 创建 Promise 对象
const p = new Promise((resolve, reject) => {
    // 2. 执行异步任务-并传递结果
    let success = true; // 模拟异步操作的结果
  	if (success) {
        // 成功调用: resolve(值) 触发 then() 执行
    	resolve("操作成功");
  	} else {
        // 失败调用: reject(值) 触发 catch() 执行
    	reject("操作失败");
  	}
})
// 3. 接收结果
p.then(result => {
	// 成功
}).catch(error => {
    // 失败
}).finally(() => {
    // 无论成功还是失败都会执行
})
```

示例代码：

```js
/**
 * 目标：使用Promise管理异步任务
*/
// 1. 创建Promise对象
const p = new Promise((resolve, reject) => {
    // 2. 执行异步代码
    setTimeout(() => {
    	// resolve('模拟AJAX请求-成功结果')
    	reject(new Error('模拟AJAX请求-失败结果'))
    }, 2000)
})

// 3. 获取结果
p.then(result => {
  	console.log(result)
}).catch(error => {
  	console.log(error)
}).finally(() => {
    alert('finally 输出：无论成功还是失败都会执行')
})
```



## 4. Promise 链式调用

`Promise` 最大的优势是支持链式调用，使得异步操作的流程更加清晰和可读。在每次调用 `.then()` 方法时，可以返回一个新的 `Promise`，从而实现链式调用。

```js
let promise = new Promise((resolve, reject) => {
  resolve(1);
});

promise
  .then(result => {
    console.log(result); // 输出 1
    return result * 2;   // 返回新的结果 2
  })
  .then(result => {
    console.log(result); // 输出 2
    return result * 3;   // 返回新的结果 6
  })
  .then(result => {
    console.log(result); // 输出 6
  });
```



## 5. Promise 的常用静态方法

除了可以创建实例外，`Promise` 还提供了一些静态方法，常用于处理多个异步操作的场景：

- **`Promise.resolve(value)`**
    返回一个状态为 `fulfilled` 的 `Promise`，并将给定的值作为结果。
- **`Promise.reject(error)`**
    返回一个状态为 `rejected` 的 `Promise`，并将给定的错误原因作为结果。
- **`Promise.all(promises)`**
    接收一个 `Promise` 数组，返回一个新的 `Promise`。当所有传入的 `Promise` 都成功时，返回的 `Promise` 状态为 `fulfilled`，结果为所有 `Promise` 结果组成的数组；如果有任何一个 `Promise` 失败，返回的 `Promise` 状态为 `rejected`，并将第一个失败的结果作为错误返回。
- **`Promise.race(promises)`**
    接收一个 `Promise` 数组，返回第一个成功或失败的 `Promise`，并将其结果或错误传递给返回的 `Promise`。



### a. Promise.all()

接收一个 `Promise` 数组，返回一个新的 `Promise`。当所有传入的 `Promise` 都成功时，返回的 `Promise` 状态为 `fulfilled`，结果为所有 `Promise` 结果组成的数组；如果有任何一个 `Promise` 失败，返回的 `Promise` 状态为 `rejected`，并将第一个失败的结果作为错误返回。

```js
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results); // [1, 2, 3]
  })
  .catch(error => {
    console.error(error);
  });

// ===================================================

// 对比 async await
async function processData() {
  try {
    const result1 = await getData1();
    const result2 = await getData2(result1);
    const result3 = await getData3(result2);
    console.log(result3);
  } catch (error) {
    console.error(error);
  }
}
```



### b. Promise.race()

接收一个 `Promise` 数组，返回第一个成功或失败的 `Promise`，并将其结果或错误传递给返回的 `Promise`。

```js
let p1 = new Promise((resolve) => setTimeout(resolve, 100, "A"));
let p2 = new Promise((resolve) => setTimeout(resolve, 200, "B"));

Promise.race([p1, p2])
  .then(result => {
    console.log(result); // A
  })
  .catch(error => {
    console.error(error);
  });
```



## 6. async/await 和 Promise 的关系

虽然 `Promise` 提供了强大的异步处理能力，但嵌套和链式调用在复杂情况下仍可能让代码不够简洁。为此，JavaScript 引入了 `async/await` 语法，**它基于 `Promise`，让异步代码看起来更像同步代码。**

- **`async`**：定义一个异步函数，返回的是一个 `Promise` 对象。
- **`await`**：用于等待一个 `Promise` 完成，它可以暂停异步函数的执行，直到 `Promise` 完成。

```js
async function fetchData() {
  try {
    let result = await axios.get('https://api.example.com/data');
    console.log(result.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

在上面的例子中，`await` 使得代码看起来更像同步代码，减少了 `.then()` 链式调用带来的复杂性。

使用 `async/await` 可以让基于 `Promise` 的异步代码更加简洁和清晰。



## 7. axios 与 Promise 的关系

* **Axios 是基于 `Promise` 的 HTTP 请求库，所有的 Axios 请求返回的都是 `Promise` 对象。**

* Axios 封装了浏览器中的 `XMLHttpRequest` 对象，简化了发送 HTTP 请求的操作。
* Axios 使用 `Promise` 来处理异步操作的结果。因此，每次调用 Axios 进行请求时，都会返回一个 `Promise`。

* **Axios** 使用了 `Promise`，所以你可以通过 `then()` 方法处理请求成功的结果，通过 `catch()` 方法处理请求失败的结果。这个模式比传统的回调函数更加清晰，并且可以避免“回调地狱”。



### a. 使用 Axios 的 GET 请求

```js
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);  // 处理请求成功后的数据
  })
  .catch(error => {
    console.error(error);  // 处理请求失败时的错误
  });
```



### b. 并行发送多个请求

```js
const request1 = axios.get('https://api.example.com/data1');
const request2 = axios.get('https://api.example.com/data2');

Promise.all([request1, request2])
  .then(responses => {
    const data1 = responses[0].data;
    const data2 = responses[1].data;
    console.log(data1, data2);  // 同时处理多个请求的结果
  })
  .catch(error => {
    console.error(error);  // 处理任何一个请求失败时的错误
  });
```



### c. async/await 与 Axios

因为 Axios 是基于 `Promise` 的，它也可以很方便地与 `async/await` 语法一起使用，使得异步代码看起来更加简洁和直观。

使用 `async/await` 进行 Axios 请求：

```js
async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);  // 处理成功的响应
  } catch (error) {
    console.error(error);  // 处理错误
  }
}

fetchData();
```

在这个例子中，`await` 会暂停函数的执行，直到 Axios 请求完成，结果会像同步代码一样被处理。同时，如果请求失败，`try/catch` 块能够捕获并处理错误。









