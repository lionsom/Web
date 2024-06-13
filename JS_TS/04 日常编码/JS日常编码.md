

# 1. number -> string

在 JavaScript 中，将一个数字转换为字符串有多种方法。以下是几种常用的方法：

### 方法一：使用 `toString` 方法

```javascript
let num = 123;
let str = num.toString();
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

### 方法二：使用 `String` 函数

```javascript
let num = 123;
let str = String(num);
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

### 方法三：使用模板字符串（ES6）

```javascript
let num = 123;
let str = `${num}`;
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

### 方法四：使用 `JSON.stringify`

```javascript
let num = 123;
let str = JSON.stringify(num);
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

### 方法五：使用 `+` 操作符（隐式转换）

```javascript
let num = 123;
let str = num + '';
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

### 示例代码

为了更清楚地展示这些方法，我们可以把它们写在一起并测试：

```javascript
let num = 123;

let str1 = num.toString();
console.log(str1); // 输出 "123"
console.log(typeof str1); // 输出 "string"

let str2 = String(num);
console.log(str2); // 输出 "123"
console.log(typeof str2); // 输出 "string"

let str3 = `${num}`;
console.log(str3); // 输出 "123"
console.log(typeof str3); // 输出 "string"

let str4 = JSON.stringify(num);
console.log(str4); // 输出 "123"
console.log(typeof str4); // 输出 "string"

let str5 = num + '';
console.log(str5); // 输出 "123"
console.log(typeof str5); // 输出 "string"
```

### 选择适合的方法

- **`toString` 方法**：这是最常用的方法，直接将数字转换为字符串。
- **`String` 函数**：适用于需要处理多种类型的数据，因为 `String` 函数可以处理任意类型的输入。
- **模板字符串**：适用于需要在字符串中嵌入变量的场景，语法简单直观。
- **`JSON.stringify`**：通常用于将对象转换为 JSON 字符串，但也可以处理基本类型。
- **隐式转换**：利用 `+` 操作符的隐式转换，语法简洁，但可读性较低。

根据具体场景和代码风格，可以选择最适合的方法。