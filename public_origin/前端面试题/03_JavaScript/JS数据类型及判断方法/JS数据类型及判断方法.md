# JavaScript 数据类型及判断方法

JavaScript 的数据类型可以分为两大类：**原始类型（基本类型）**和**对象类型（引用类型）**。

## 一、数据类型分类

### 原始类型（Primitive Types）
1. **Number** - 数字（包括整数和浮点数）
2. **String** - 字符串
3. **Boolean** - 布尔值（true/false）
4. **Undefined** - 未定义的值
5. **Null** - 空值
6. **Symbol** - ES6 新增的唯一标识符
7. **BigInt** - ES2020 新增的大整数类型

### 对象类型（Object Types）
1. **Object** - 普通对象
2. **Array** - 数组
3. **Function** - 函数
4. **Date** - 日期
5. **RegExp** - 正则表达式
6. **Set/Map** - ES6 新增的集合类型
7. 其他内置对象如 Error, Promise 等

## 二、类型判断方法

### 1. typeof 操作符
```javascript
typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (历史遗留问题)
typeof Symbol();    // "symbol"
typeof 10n;         // "bigint"
typeof {};          // "object"
typeof [];          // "object"
typeof function(){};// "function"
```

**局限性**：
- 无法区分数组和普通对象（都返回 "object"）
- null 被错误判断为 "object"

### 2. instanceof 操作符
用于检测构造函数的 prototype 属性是否出现在对象的原型链中。

```javascript
[] instanceof Array;       // true
{} instanceof Object;      // true
new Date() instanceof Date;// true
```

**局限性**：
- 只能用于对象类型
- 在多窗口或iframe环境下可能失效（因为构造函数不同）

### 3. Object.prototype.toString.call()
最准确的类型判断方法：

```javascript
Object.prototype.toString.call(42);         // "[object Number]"
Object.prototype.toString.call("hello");   // "[object String]"
Object.prototype.toString.call(true);      // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null);      // "[object Null]"
Object.prototype.toString.call(Symbol());  // "[object Symbol]"
Object.prototype.toString.call(10n);       // "[object BigInt]"
Object.prototype.toString.call({});        // "[object Object]"
Object.prototype.toString.call([]);        // "[object Array]"
Object.prototype.toString.call(function(){}); // "[object Function]"
```

### 4. 其他特定方法
- **Array.isArray()** - 专门判断数组
  ```javascript
  Array.isArray([]);  // true
  Array.isArray({});  // false
  ```

- **Number.isNaN()** - 判断是否为NaN
  ```javascript
  Number.isNaN(NaN);  // true
  Number.isNaN("NaN"); // false
  ```

## 三、实用类型判断函数

```javascript
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// 使用示例
getType(123);       // "number"
getType("abc");     // "string"
getType([]);        // "array"
getType(null);      // "null"
getType(undefined); // "undefined"
getType(Symbol());  // "symbol"
getType(10n);       // "bigint"
```

## 总结

- 对于原始类型，使用 `typeof` 最为方便（注意 `null` 的特殊情况）
- 对于对象类型，使用 `instanceof` 或 `Object.prototype.toString.call()`
- 对于数组，优先使用 `Array.isArray()`
- 最全面准确的方法是 `Object.prototype.toString.call()`
