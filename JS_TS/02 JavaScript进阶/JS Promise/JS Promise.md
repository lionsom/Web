# [ECMAScript 6入门 - Promise - 阮一峰](https://es6.ruanyifeng.com/#docs/promise)



# JavaScript Promise - GPT

Promise 是 JavaScript 中用于处理异步操作的强大工具。它表示一个异步操作的最终完成或失败的结果。

**工作原理：**

Promise 有三种状态：

- **Pending：**初始状态，表示操作尚未完成。
- **Fulfilled：**操作成功完成，并返回一个结果值。
- **Rejected：**操作失败，并返回一个错误值。

Promise 可以通过 `new Promise()` 构造函数创建。它接受一个执行器函数作为参数，该函数有两个参数：

- **resolve：**当操作成功完成时调用，传递结果值。
- **reject：**当操作失败时调用，传递错误值。

**使用 Promise：**

可以使用 `then()` 方法来处理 Promise 的结果：

- **then(onFulfilled, onRejected)：**当 Promise 被兑现时调用 `onFulfilled`，当 Promise 被拒绝时调用 `onRejected`。
- **catch(onRejected)：**只处理拒绝的情况，与 `then(null, onRejected)` 相同。

**示例：**

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作...
  if (success) {
    resolve("操作成功");
  } else {
    reject("操作失败");
  }
});

promise.then(
  (result) => {
    console.log("操作成功：", result);
  },
  (error) => {
    console.log("操作失败：", error);
  }
);
```

**特点：**

- **链式调用：**Promise 可以链式调用，允许轻松地处理多个异步操作。
- **错误处理：**Promise 提供了一种统一的方式来处理异步操作中的错误。
- **并发性：**Promise 允许并行执行多个异步操作。

**重要性：**

Promise 是处理异步操作的现代且强大的方式。它们使代码更易于阅读、维护和测试。
