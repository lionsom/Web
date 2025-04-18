# 类型转换

# 一、显示转换

* 强制类型转换
    * 	指将一个数据类型强制转换为其他的数据类型
    * 	类型转换主要指，将其他的数据类型，转换为：`String` `Number` `Boolean`



## 1. 转换为String

### a. 隐式转换

```javascript
// 方式1：利用“+”拼接字符串（最常用的一种方式）
var str = num + '';
console.log(str, typeof str);        // 输出结果：3.14 string
```



### b. 方式一：toString()

```js
/*
 * 将其他的数据类型转换为String
 * 	方式一：
 * 		- 调用被转换数据类型的toString()方法
 * 		- 该方法不会影响到原变量，它会将转换的结果返回
 * 		- 但是注意：null和undefined这两个值没有toString()方法，
 * 			如果调用他们的方法，会报错
 */
var a = 123;
a = a.toString();

a = true;
a = a.toString();

a = null;
a = a.toString(); // 报错

a = undefined;
a = a.toString(); // 报错
```



### c. 方式二：String()

```js
/*
 * 将其他的数据类型转换为String 
 *  方式二：
 * 		- 调用String()函数，并将被转换的数据作为参数传递给函数
 * 		- 使用String()函数做强制类型转换时，
 * 			对于Number和Boolean实际上就是调用的toString()方法
 * 			但是对于null和undefined，就不会调用toString()方法
 * 				它会将 null 直接转换为 "null"
 * 				将 undefined 直接转换为 "undefined"
 */
var a = 123;
a = String(a);	// "123"

a = null;
a = String(a);  // "null"
typeof a				// string

a = undefined;
a = String(a);  // "undefined"
typeof a				// string
```



## 2. 转换为Number

* 有三个函数可以把非数值转换为数值：Number()、parseInt() 、parseFloat()
    * `Number()` 可以用来转换任意类型的数据，而后两者只能用于转换字符串
    * `parseInt()` 只会将字符串转换为整数
    * `parseFloat()` 可以转换为浮点数
* 再加操作符的隐式转换

| **待转数据**     | Number()和隐式转换 | **parseInt()** | **parseFloat()** |
| ---------------- | ------------------ | -------------- | ---------------- |
| 纯数字字符串     | 转成对应的数字     | 转成对应的数字 | 转成对应的数字   |
| 空字符串         | 0                  | NaN            | NaN              |
| 数字开头的字符串 | NaN                | 转成开头的数字 | 转成开头的数字   |
| 非数字开头字符串 | NaN                | NaN            | NaN              |
| Null             | 0                  | NaN            | NaN              |
| undefined        | NaN                | NaN            | NaN              |
| False            | 0                  | NaN            | NaN              |
| True             | 1                  | NaN            | NaN              |







### a. 字符串 --> 数字

#### **Ⅰ. Number()函数**

* 1.如果是纯数字的字符串，则直接将其转换为数字
* 2.如果字符串中有非数字的内容，则转换为 `NaN`
* 3.如果字符串是一个空串或者是一个全是空格的字符串，则转换为0



#### **Ⅱ. parseInt() 函数 与parseFloat() 函数**

* parseInt() 把一个字符串转换为一个整数
* parseFloat() 把一个字符串转换为一个浮点数

```js
//调用Number()函数来将a转换为Number类型
var a = "123";
a = Number(a);

/*
 * parseInt()可以将一个字符串中的有效的整数内容去出来，
 * 	然后转换为Number
 */
a = parseInt(a);

/*
 * parseFloat()作用和parseInt()类似，不同的是它可以获得有效的小数
 */
a = "123.456.789px";
a = parseFloat(a);
```

**非String使用parseInt()或parseFloat()**

```js
/*
 * 如果对非String使用parseInt()或parseFloat()
 * 	它会先将其转换为String然后在操作
 */
a = true;
a = parseInt(a);
console.log(typeof a);  // number
console.log(a);	// NaN

a = 198.23;
a = parseInt(a);
console.log(typeof a); // number
console.log(a); // 198
```



##### 【拓】设置转换的进制

使用parseInt()还可以利用第2个参数设置转换的进制，示例代码如下：

```js
// 代码表示将字符“F”转换为十六进制数，结果为15。
console.log(parseInt('F', 16));      // 输出结果：15
```



#### Ⅲ. 隐式转换

```js
// 利用算术运算符（-、*、/）隐式转换
console.log('12' - 1);          // 输出结果：11
```



### b. 布尔 --> 数字

```js
/*
  true 转成 1
	false 转成 0
*/
a = false;
a = Number(a);
```



### c. null --> 数字

```js
// null --> 数字     0
a = null;
a = Number(a);  // 0
```



### d. undefined --> 数字

```js
// undefined --> 数字 NaN
a = undefined;
a = Number(a);  // NaN
```



## 3. 转换为Boolean

**记忆**： **空串、0、NaN、null、undefined 转换为布尔值后都是false, 其余则为 true** 

```js
/*
 * 将其他的数据类型转换为Boolean
 * 	- 使用Boolean()函数
 * 		- 数字 ---> 布尔
 * 			- 除了0和NaN，其余的都是true
 * 
 * 		- 字符串 ---> 布尔
 * 			- 除了空串，其余的都是true
 * 
 * 		- null和undefined都会转换为false
 * 
 * 		- 对象也会转换为true
 * 		
 */

Boolean("")	//false
Boolean(0)	//false
Boolean(NaN)	//false
Boolean(null)	//false
Boolean(undefined)	//false

// 其他都是true
Boolean(123)	//true
Boolean(-123)	//true
Boolean(Infinity)	//true
```



#  二、隐式转换

利用算术运算符（-、*、/）隐式转换。

```js
console.log(1 + 1)	// 2
console.log('pink' + 1)	// pink1

console.log(2 + 2)	// 4
console.log(2 + '2') // 22

console.log(2 - 2)	// 0
console.log(2 - '2')  // 0  

console.log(+12)	// 12
console.log(+'123')  // 123
```



# 三、实战 - `number -> string`

在 JavaScript 中，将一个数字转换为字符串有多种方法。以下是几种常用的方法：

## 1. 使用 `toString` 方法

```javascript
let num = 123;
let str = num.toString();
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

## 2. 使用 `String` 函数

```javascript
let num = 123;
let str = String(num);
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

## 3. 使用模板字符串（ES6）

```javascript
let num = 123;
let str = `${num}`;
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

## 4. 使用 `JSON.stringify`

```javascript
let num = 123;
let str = JSON.stringify(num);
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

## 5. 使用 `+` 操作符（隐式转换）

```javascript
let num = 123;
let str = num + '';
console.log(str); // 输出 "123"
console.log(typeof str); // 输出 "string"
```

## 示例代码

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

## 选择适合的方法

- **`toString` 方法**：这是最常用的方法，直接将数字转换为字符串。
- **`String` 函数**：适用于需要处理多种类型的数据，因为 `String` 函数可以处理任意类型的输入。
- **模板字符串**：适用于需要在字符串中嵌入变量的场景，语法简单直观。
- **`JSON.stringify`**：通常用于将对象转换为 JSON 字符串，但也可以处理基本类型。
- **隐式转换**：利用 `+` 操作符的隐式转换，语法简洁，但可读性较低。

根据具体场景和代码风格，可以选择最适合的方法。







