[判断JS数据类型的四种方法 ](https://www.cnblogs.com/onepixel/p/5126046.html)



在 ECMAScript 规范中，分为 基本类型 和 引用类型 两大类，如下所示：

**1. 七种基本数据类型**

- 布尔值（Boolean），有2个值分别是：true 和 false。
- null ， 一个表明 null 值的特殊关键字。 JavaScript 是大小写敏感的，因此 null 与 Null、NULL或变体完全不同。
- undefined ，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。
- 数字（Number），整数或浮点数，例如： 42 或者 3.14159。
- 任意精度的整数 (BigInt) ，可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。
- 字符串（String），字符串是一串表示文本值的字符序列，例如：“不染-何程龙” 。
- 代表（Symbol） ( 在 ECMAScript 6 中新添加的类型).。一种实例是唯一且不可改变的数据类型。

**2. 对象（Object）**



基本类型也称为简单类型，由于其占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈中，即按值访问。

引用类型也称为复杂类型，由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此，其值存储在堆(heap)中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问。引用类型除 Object 外，还包括 Function 、Array、RegExp、Date 等等。



# typeof操作符

typeof 是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括以下 7 种：number、boolean、symbol、string、object、undefined、function 等。

- `typeof` 用于检查一个变量的数据类型，返回一个表示变量类型的字符串。

- `typeof` 返回的结果包括："undefined"、"boolean"、"number"、"string"、"object"、"function" 和 "symbol"。

- 例如：

    ```javascript
    typeof 42; // "number"
    typeof "Hello"; // "string"
    typeof true; // "boolean"
    typeof undefined; // "undefined"
    typeof null; // "object"
    typeof [] ; // "object"
    typeof {}; // "object"
    typeof function(){}; // "function"
    typeof new Function(); // "function"
    typeof new Date(); // "object"
    typeof new RegExp(); // "object"
    typeof Symbol(); // "symbol"
    ```

有些时候，typeof 操作符会返回一些令人迷惑但技术上却正确的值：

- 对于基本类型，除 null 以外，均可以返回正确的结果。
- 对于引用类型，除 function 以外，一律返回 object 类型。
- 对于 null ，返回 object 类型。
- 对于 function 返回  function 类型。

其中，null 有属于自己的数据类型 Null ， 引用类型中的 数组、日期、正则 也都有属于自己的具体类型，而 typeof 对于这些类型的处理，只返回了处于其原型链最顶端的 Object 类型，没有错，但不是我们想要的结果。



# instanceof

instanceof 是用来判断 A 是否为 B 的实例，表达式为：A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。 在这里需要特别注意的是：**instanceof 检测的是原型**，我们用一段伪代码来模拟其内部执行过程：

```js
instanceof (A,B) = {
    var L = A.__proto__;
    var R = B.prototype;
    if(L === R) {
        // A的内部属性 __proto__ 指向 B 的原型对象
        return true;
    }
    return false;
}
```



```js
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true

function Person() {}
console.log(new Person() instanceof Person);

console.log([] instanceof Object); // true
console.log(new Date() instanceof Object); // true
console.log(new Person instanceof Object); // true
```

我们发现，虽然 instanceof 能够判断出 [ ] 是Array的实例，但它认为 [ ] 也是Object的实例，为什么呢？

因此，**instanceof 只能用来判断两个对象是否属于实例关系**， 而不能判断一个对象实例具体属于哪种类型。





# 检查一个对象中是否含有指定的属性

在 JavaScript 中，可以使用 `hasOwnProperty()` 方法或 `in` 操作符来检查一个对象中是否包含指定的属性。

## hasOwnProperty()

1. 使用 `hasOwnProperty()` 方法：

    - `hasOwnProperty()` 方法用于检查对象自身是否包含指定属性，**不会检查原型链上的属性**。

    - 语法：`object.hasOwnProperty(property)`

    - 示例：

        ```javascript
        const person = {
          name: 'Alice',
          age: 30
        };
        
        console.log(person.hasOwnProperty('name')); // true
        console.log(person.hasOwnProperty('gender')); // false
        ```

## in 操作符

1. 使用 `in` 操作符：

    - `in` 操作符用于检查对象及其**原型链**上是否包含指定属性。

    - 语法：`property in object`

    - 示例：

        ```javascript
        const person = {
          name: 'Alice',
          age: 30
        };
        
        console.log('name' in person); // true
        console.log('gender' in person); // false
        ```

通过使用 `hasOwnProperty()` 方法或 `in` 操作符，可以方便地检查一个对象中是否包含指定的属性。根据需要选择合适的方法来进行属性检查。









