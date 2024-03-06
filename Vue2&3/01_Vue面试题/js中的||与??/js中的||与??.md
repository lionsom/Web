# 异同

在 JavaScript 中，`||`（逻辑或）和 `??`（空值合并运算符）是两种不同的操作符，它们有不同的用途和行为。

1. `||`（逻辑或）：
    - `||` 是逻辑运算符，用于逻辑或操作，当两边的操作数中有一个为真（truthy）时，表达式的值为真。
    - 如果第一个操作数为真，则返回第一个操作数；如果第一个操作数为假（falsy），则返回第二个操作数。
    - 例如：`a || b`，如果 `a` 为真，则返回 `a`；如果 `a` 为假，则返回 `b`。
2. `??`（空值合并运算符）：
    - `??` 是空值合并运算符，用于检查左侧的操作数是否为 `null` 或 `undefined`，如果是，则返回右侧的操作数，否则返回左侧的操作数。
    - `??` 可以帮助简化对 `null` 或 `undefined` 值的判断，避免出现意外的错误。
    - 例如：`a ?? b`，如果 `a` 是 `null` 或 `undefined`，则返回 `b`；否则返回 `a`。

区别：

- `||` 是逻辑或操作符，用于逻辑判断，返回两个操作数中的一个；
    - 使用 || 时，`A||B`，A会先转化为布尔值判断，为true时返回A , false 返回B；
- `??` 是空值合并运算符，用于处理 `null` 或 `undefined` 值的情况，返回非空的操作数；
    - 使用 ?? 时，`A??B`，只有A为 **null** 或者 **undefined** 时才会返回 B。



# Demo代码

```js
// ??
console.log(undefined ?? 2);  // 2
console.log(null ?? 2);  // 2
console.log(0 ?? 2);  // 0
console.log("" ?? 2);  // ''
console.log(true ?? 2);  // true
console.log(false ?? 2);  // false

// ||
console.log(undefined || 2);  // 2
console.log(null || 2);  // 2
console.log(0 || 2);  // 2
console.log("" || 2);  // 2
console.log(true || 2);  // true
console.log(false || 2);  // 2
```



## 运行Demo

1. 打开项目

```sh
$ cd code-demo
$ code .
```

2. 安装node
3. 运行

```sh
$ npm run dev
# or
$ node index.js
```















