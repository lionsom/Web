# JS多层解构

在 JavaScript 中，多层解构是指从嵌套的数据结构中提取多个值并赋值给变量。以下是多层解构的一些示例：

1. 解构数组中的多层嵌套值：

```javascript
const arr = [1, [2, [3, 4]]];
const [a, [b, [c, d]]] = arr;
console.log(a); // 输出: 1
console.log(b); // 输出: 2
console.log(c); // 输出: 3
console.log(d); // 输出: 4
```

1. 解构对象中的多层嵌套值：

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4
    }
  }
};
const { a, b: { c, d: { e, f } } } = obj;
console.log(a); // 输出: 1
console.log(c); // 输出: 2
console.log(e); // 输出: 3
console.log(f); // 输出: 4
```

1. 结合数组和对象的多层解构：

```javascript
const obj = {
  arr: [1, 2, { x: 3 }]
};
const { arr: [a, b, { x }] } = obj;
console.log(a); // 输出: 1
console.log(b); // 输出: 2
console.log(x); // 输出: 3
```

多层解构可以帮助我们简化代码，并且提取嵌套数据结构中所需的值，使代码更加清晰和易读。
