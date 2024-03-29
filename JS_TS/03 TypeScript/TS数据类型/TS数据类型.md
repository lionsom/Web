1. [一份不可多得的 TS 学习指南（1.8W字）](https://link.segmentfault.com/?enc=1PwZ32DW3kYeDlWRWCwOWA%3D%3D.NHbsu%2Fv%2FRKW4%2BfI%2B0FZ4eAQOaevciA75P5RQr4EHY6XR7F8XDtNqxeFbOSuaGMuc)
2. [了不起的 TypeScript 入门教程](https://link.segmentfault.com/?enc=JrSBhPWPXTbP0QzqtM4Q7Q%3D%3D.cElMDlEdRGp2jFc6JZOJx6zwcJFWbkoBJb%2FihAQGNY%2BqxFZGezKj4VXwqv3j%2FUYe)

* [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/)
* [TypeScript 入门教程](https://ts.xcatliu.com/)
* [TypeScript 中文手册](https://typescript.bootcss.com/advanced-types.html)



# 一、JS/TS数据类型

## 1. JS数据类型

**原始值（*[Primitive](https://developer.mozilla.org/zh-CN/docs/Glossary/Primitive)*）/ 值类型 / 基本数据类型**，JavaScript 中有 7 种：

1. **Undefined**：表示一个未定义的值。
2. **Null**：表示空值或者没有值。
3. **Boolean**：表示逻辑上的 true 或 false。
4. **Number**：表示数字，包括整数和浮点数。
5. **String**：表示文本数据，用单引号或双引号表示。
6. **Symbol**：表示独一无二的值，ES6 新增（ES2015）。
7. **BigInt**：表示任意精度的整数，ES11 新增（ES2020）。

**引用数据类型（对象类型）**：

1. **Object**：对象
2. **Array**：数组
3. **Function**：函数
4. **RegExp**：正则
5. **Date**：日期



## 2. TS数据类型

| **数据类型**      | **JavaScript** | **TypeScript** |
| ----------------- | -------------- | -------------- |
| **null**          | ✅              | ✅              |
| **bigint**        | ✅              | ✅              |
| **string**        | ✅              | ✅              |
| **symbol**        | ✅              | ✅              |
| **boolean**       | ✅              | ✅              |
| **number**        | ✅              | ✅              |
| **undefined**     | ✅              | ✅              |
| **Object**        | ✅              | ✅              |
| **Array**         | ✅              | ✅              |
| **tuple(元组[])** | ❌              | ✅              |
| **enum**          | ❌              | ✅              |
| **any**           | ❌              | ✅              |
| **void**          | ❌              | ✅              |
| **never**         | ❌              | ✅              |



# 二、基础数据类型

```ts
/**
 * @description: 基本数据类型
 */
let a: number = 10;
console.log('number = ', a);

let name22: string = 'LBJ' 
console.log('string = ', name22);

const isTrue: boolean = true
console.log('boolean = ', isTrue);

let n1: null = null
let u1: undefined = undefined
console.log('null = ', n1);
console.log('undefined = ', u1);

const symbol1: Symbol = Symbol('相关描述')
console.log('Symbol = ', symbol1);

// bigint数值可以在数字后面加字母n
let b1: bigint = 999999999999999999n
// 也可以使用BigInt构造函数来表示
const b2: bigint = BigInt('9999999999999')
console.log('bigint = ', b1, b2);
```



# 三、数组（Array）：

* 数组是一种有序的数据集合，其中的元素可以是任意类型，并且可以动态增加或删除元素。

- 数组的元素访问通过索引来进行，索引从 0 开始，可以通过索引来读取或修改数组中的元素。
- TypeScript 中使用 `Array` 或者简写形式 `[]` 来定义数组类型。

## 1. 整个数组数据类型一致的情况

### a. 方式一: Array < number >

使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：

```typescript
const numbers: Array<number> = [1, 2, 3, 4, 5];
const names: Array<string> = ["Alice", "Bob", "Charlie"];
```

### b. 方式二: string[ ] （建议）

```ts
// 需求: 要求定义一个数组, 这个数组中将来只能存储字符串类型的数据
let arr2: string[];
arr2 = ['a', 'b', 'c'];
// arr2 = [1, 'b', 'c']; // 报错
console.log(arr2);
```



## 2. 整个数组数据类型不一致的情况

### a. 联合类型声明数组 (number | string)[ ]

```ts
let arr3: (number | string)[];
// 表示定义了一个名称叫做arr3的数组, 这个数组中将来既可以存储数值类型的数据, 也可以存储字符串类型的数据
arr3 = [1, 'b', 2, 'c'];
// arr3 = [1, 'b', 2, 'c', false]; // 报错
console.log(arr3);
```

### b. 自由任意类型元素的数组 any[]

```ts
let arr4: any[]; // 表示定义了一个名称叫做arr4的数组, 这个数组中将来可以存储任意类型的数据
arr4 = [1, 'b', false];
console.log(arr4);
```



# 四、元组（Tuple）：

- 元组是一种固定长度、固定类型的数组，每个位置的元素类型是预先定义好的。
- 元组可以看作是具有确定元素数量和类型的数组，元组中的元素位置具有固定的意义。
- TypeScript 中使用元组类型 `[type1, type2, ...]` 来定义元组。

```typescript
const person: [string, number, boolean] = ["Alice", 30, false];
const coordinates: [number, number] = [10, 20];
// 赋值
person[1] = 110;

// 访问
console.log('person = ', person);
console.log('person[0] = ', person[0]);
console.log('person[1] = ', person[1]);
console.log('coordinates = ', coordinates);

// Log
person =  [ 'Alice', 110, false ]
person[0] =  Alice
person[1] =  110
coordinates =  [ 10, 20 ]
```



## 1. 数组 vs 元组

- 数组是一种动态的数据结构，可以包含任意数量的任意类型的元素，并且元素的顺序是有意义的。
- 元组是一种固定长度、固定类型的数组，每个位置的元素类型是预先定义好的，元组中的元素位置具有固定的意义。

虽然元组在某种程度上类似于数组，但它们有不同的用途和行为。使用元组时，你希望固定每个位置的元素类型和数量，而数组则更适合于动态地存储和操作元素。



# 五、枚举（enum）

`enum`类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

默认情况下，从`0`开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从`1`开始编号：

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```

或者，全部都采用手动赋值：

```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName);  // 显示'Green'因为上面代码里它的值是2
```

**完整代码**

```ts
/**
 * @description: 枚举
 */
enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Green;
console.log('c1 = ', c1);

enum Color2 {Red = 5, Green, Blue}
let c2: Color2 = Color2.Green;
console.log('c2 = ', c2);

enum Color3 {Red = 1, Green = 15, Blue = 4}
let c3: Color3 = Color3.Green;
console.log('c3 = ', c3);


enum Color4 {Red = 10, Green, Blue}
let colorName1: string = Color4[12];
let colorName2: string = Color4[13];
console.log('colorName = ', colorName1, colorName2);  // 显示'Blue'因为上面代码里它的值是12


// Log
c1 =  1
c2 =  6
c3 =  15
colorName =  Blue undefined
```



# 六、任意类型（any）

any表示任意类型, 当我们不清楚某个值的具体类型的时候我们就可以使用any，**任何数据类型的值都可以赋值给any类型**；

一般用于定义一些通用性比较强的变量，或者用于保存从其它框架中获取的不确定类型的值。

```ts
/**
 * 任意类型
 */
let value: any; // 定义了一个可以保存任意类型数据的变量
value = 123;
value = "abc";
value = true;
value = [1, 3, 5];
console.log('value = ', value);

// 数组
let list: any[] = [1, true, "free"];
console.log('list = ', list);
```



# 七、void类型

void与any正好相反, 表示没有任何类型, 一般用于函数返回值。**在TS中只有null和undefined可以赋值给void类型**。

声明一个`void`类型的变量没有什么大用，因为你只能为它赋予`undefined`和`null`。

```ts
// 函数
function test(): void {
  console.log("hello world");
}
test();

// 变量
let unusable: void = undefined;
unusable = unll;
```



# 八、never类型

在 TypeScript 中，`never` 类型表示那些永远不会发生的值的类型。通常情况下，`never` 类型用于表示永远不会返回的函数的返回值类型，或者用于标识永远不可能存在的情况。以下是一些使用 `never` 类型的常见情况：

## 1. 函数返回值类型为 `never`：

当一个函数永远不会正常返回时，可以将其返回类型标注为 `never`。

```typescript
function throwError(message: string): never {
    throw new Error(message);
}
```

在上面的例子中，`throwError` 函数抛出一个错误并且永远不会返回，因此其返回类型为 `never`。

## 2. 永远不可能到达的终点：

在某些情况下，TypeScript 可能会推断出一个代码分支永远不会被执行，可以使用 `never` 类型来明确表示这种情况。

```typescript
function infiniteLoop(): never {
    while (true) {
        // 无限循环，永远不会到达终点
    }
}
```

## 3. 永远不可能有值的类型：

有些函数可能会返回一个永远不会被使用的值，这时可以将其类型标注为 `never`。

```typescript
function returnNever(): never {
    return throwError('This function always throws an error');
}
```

## 4. 类型保护中的 `never`：

`never` 类型还可以在类型保护中使用，帮助 TypeScript 推断正确的类型。

```typescript
function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
}

function processValue(value: string | number) {
    if (typeof value === "string") {
        // 处理字符串
    } else if (typeof value === "number") {
        // 处理数字
    } else {
        // 此处 value 的类型为 never
        assertNever(value);
    }
}
```

在上面的例子中，当 `value` 的类型为 `never` 时，`assertNever` 函数用于抛出错误，因为这种情况是不可能发生的。

总之，`never` 类型在 TypeScript 中主要用于表示不可能发生的值或情况，例如永远不会返回的函数、永远不可能到达的终点或者在类型保护中作为辅助工具来处理未知情况。



# 九、Object对象类型

在 TypeScript 中，`Object` 类型通常用来表示任意非原始类型（即不是 `number`、`string`、`boolean`、`symbol`、`null` 或 `undefined`）的对象。这意味着 `Object` 类型可以包括普通对象、数组、函数、正则表达式以及其他对象。

在 TypeScript 中，有两种方式可以使用 `Object` 类型：

## 1. 作为类型注解：

在这个例子中，`obj` 变量的类型被注解为 `Object`，可以被赋值为任何非原始类型的对象。

```typescript
let obj: Object;
obj = { name: "John", age: 30 }; // 普通对象
obj = [1, 2, 3]; // 数组
obj = function() { console.log("Hello"); }; // 函数
obj = /test/g; // 正则表达式
```

## 2. 作为泛型参数：

`Object` 类型还可以作为泛型参数传递给泛型类型或泛型函数，以表示任意非原始类型的对象。

```typescript
function getObjectValue<T extends Object>(obj: T, key: keyof T) {
    return obj[key];
}

const person = { name: "Alice", age: 30 };
const value = getObjectValue(person, "name"); // 正确
const value2 = getObjectValue(person, "age"); // 正确
const value3 = getObjectValue(person, "email"); // 错误，因为"email"不是person对象的键之一
```

在这个例子中，`getObjectValue` 函数接受一个对象 `obj` 和一个键 `key`，并返回 `obj[key]` 的值。`T extends Object` 约束确保 `obj` 参数必须是 `Object` 类型或其子类型。

需要注意的是，`Object` 类型并不包括原始类型，例如 `number`、`string`、`boolean` 等，也不包括 `null` 或 `undefined`。如果你想要包括所有可能的值，包括原始类型和 `null`、`undefined`，可以使用 `any` 类型。



# 十、联合类型（Union Types）

联合类型（Union Types）表示取值可以为多种类型中的一种。

## 1. 简单的例子[§](https://ts.xcatliu.com/basics/union-types.html#简单的例子)

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
let myFavoriteNumber: string | number;
myFavoriteNumber = true;

// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

联合类型使用 `|` 分隔每个类型。

这里的 `let myFavoriteNumber: string | number` 的含义是，允许 `myFavoriteNumber` 的类型是 `string` 或者 `number`，但是不能是其他类型。

## 2. 访问联合类型的属性或方法[§](https://ts.xcatliu.com/basics/union-types.html#访问联合类型的属性或方法)

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们**只能访问此联合类型的所有类型里共有的属性或方法**：

```ts
function getLength(something: string | number): number {
    return something.length;
}

// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
// Property 'length' does not exist on type 'number'.
```

上例中，`length` 不是 `string` 和 `number` 的共有属性，所以会报错。

访问 `string` 和 `number` 的共有属性是没问题的：

```ts
function getString(something: string | number): string {
    return something.toString();
}
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

上例中，第二行的 `myFavoriteNumber` 被推断成了 `string`，访问它的 `length` 属性不会报错。

而第四行的 `myFavoriteNumber` 被推断成了 `number`，访问它的 `length` 属性时就报错了。



# 十一、字面量类型

字符串字面量类型用来约束取值只能是某几个字符串中的一个。

## 1. 简单的例子[§](https://ts.xcatliu.com/advanced/string-literal-types.html#简单的例子)

```ts
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'

// index.ts(7,47): error TS2345: Argument of type '"dblclick"' is not assignable to parameter of type 'EventNames'.
```

上例中，我们使用 `type` 定了一个字符串字面量类型 `EventNames`，它只能取三种字符串中的一种。

注意，**类型别名与字符串字面量类型都是使用 `type` 进行定义。**



## 2. 其他字面量类型

TypeScript 同样也提供 `boolean` 和 `number` 的字面量类型：

```ts
type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;
```



# 十二、可辨识联合（Discriminated Unions）

1. 具有普通的单例类型属性—*可辨识的特征*。
2. 一个类型别名包含了那些类型的联合—*联合*。
3. 此属性上的类型保护。

```ts
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}
```

首先我们声明了将要联合的接口。 每个接口都有`kind`属性但有不同的字符串字面量类型。 `kind`属性称做*可辨识的特征*或*标签*。 其它的属性则特定于各个接口。 注意，目前各个接口间是没有联系的。 下面我们把它们联合到一起：

```ts
type Shape = Square | Rectangle | Circle;
```

现在我们使用可辨识联合:

```ts
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}
```



# 十三、交叉类型（Intersection Types）

交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。 例如，`Person & Serializable & Loggable`同时是`Person`*和*`Serializable`*和*`Loggable`。 就是说这个类型的对象同时拥有了这三种类型的成员。

## 1. 简单的例子

```ts
interface A {
  a: number;
}
interface B {
  b: string;
}
let ab: A & B = {a: 1, b: "string"};
```

## 2. 同名属性情况

```ts
interface ClassA{
    name:string;
    age:number
}
interface ClassB{
    name:string;
    phone:number;
}

// 合并
type ClassC = ClassA & ClassB
let info: ClassC = {
    name:'zhagsan',
    age:18,
    phone:1573875555
}
```

问：**任何类型都能通过`&`合并成新的类型吗？**

- 这肯定是不行的，原子类型进行合并是没有任何意义，因为它们合并后的类型是`never`，比如 `string & number`，这肯定是错误的，因为不可能有既满足字符串又满足数字类型。

问：**合并的接口类型中具有同名属性，该怎么处理？**

- 这里分两种情况，如果同名属性的类型相同则合并后还是原本类型，如果类型不同，则合并后类型为`never`

## 3. 进阶例子

```ts
interface A {
    inner: D;
}
interface B {
    inner: E;
}
interface C {
    inner: F;
}

interface D {
    d: boolean;
}
interface E {
    e: string;
}
interface F {
    f: number;
}
```

```ts
type ABC = A & B & C;
let abc: ABC = {
    inner: {
        d: false,
        e: 'className',
        f: 5
    }
};
```

## 4. 高级例子[§](https://typescript.bootcss.com/advanced-types.html)

我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。 （在JavaScript里发生这种情况的场合很多！） 下面是如何创建混入的一个简单例子：

```ts
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
```



# 十四、类型别名（Type Aliases）

类型别名用来给一个类型起个新名字。

## 简单的例子[§](https://ts.xcatliu.com/advanced/type-aliases.html#简单的例子)

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

上例中，我们使用 `type` 创建类型别名。

类型别名常用于联合类型。



# 十五、映射类型（Mapped types）

* [搞懂 TypeScript 中的映射类型（Mapped Types）](https://segmentfault.com/a/1190000041715281)

* https://cloud.tencent.com/developer/article/2017548



# 十六、类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查**：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```



# 十七、类型断言

* [类型断言](https://ts.xcatliu.com/basics/type-assertion.html)
* https://jkchao.github.io/typescript-book-chinese/typings/typeAssertion.html#as-foo-%E4%B8%8E-foo

TypeScript 允许你覆盖它的推断，并且能以你任何你想要的方式分析它，这种机制被称为「类型断言」。TypeScript 类型断言用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误。

类型断言的一个常见用例是当你从 JavaScript 迁移到 TypeScript 时：

```ts
const foo = {};
foo.bar = 123; // Error: 'bar' 属性不存在于 ‘{}’
foo.bas = 'hello'; // Error: 'bas' 属性不存在于 '{}'
```

这里的代码发出了错误警告，因为 `foo` 的类型推断为 `{}`，即没有属性的对象。因此，你不能在它的属性上添加 `bar` 或 `bas`，你可以通过类型断言来避免此问题：

```ts
interface Foo {
  bar: number;
  bas: string;
}

const foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hello';
```

在 TypeScript 中，类型断言（Type Assertion）是一种方式，用于告诉编译器某个值的具体类型。它类似于其他语言中的类型转换，但是在编译阶段不会对数据进行特殊的检查或者转换。类型断言有两种形式：**尖括号语法** 和 **as 语法**。

## 1. 尖括号语法：

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

在上面的例子中，`<string>someValue` 是一种尖括号语法的类型断言，它将 `someValue` 断言为字符串类型。

## 2. as 语法：

```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

在这个例子中，`(someValue as string)` 是 as 语法的类型断言，也将 `someValue` 断言为字符串类型。

## 3. `as` or `<>`

最初的断言语法如下所示：

```ts
let foo: any;
let bar = <string>foo; // 现在 bar 的类型是 'string'
```

然而，当你在 JSX 中使用 `<foo>` 的断言语法时，这会与 JSX 的语法存在歧义：

```ts
let foo = <string>bar;</string>;
```

因此，为了一致性，我们建议你使用 `as foo` 的语法来为类型断言。

在实际应用中，一般推荐使用 as 语法进行类型断言，因为它在 JSX/TSX 语法中不会与标签语法混淆。另外，当你在使用 TypeScript 与 JSX 时，只能使用 as 语法进行类型断言。

## 4. 类型断言与类型转换

它之所以不被称为「类型转换」，是因为转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法。

## 5. 注意

需要注意的是，**类型断言不会在运行时进行任何的检查或转换，它只是在编译阶段告诉编译器将某个值视为特定的类型。**

因此，如果类型断言不正确，可能会导致运行时的错误。因此，在进行类型断言时，确保你对类型的了解是正确的，并且确保它是安全的。



# 十八、类型保护

https://jkchao.github.io/typescript-book-chinese/typings/typeGuard.html#instanceof

类型保护与区分类型（Type Guards and Differentiating Types）

类型保护允许你使用更小范围下的对象类型。

## 1. typeof

TypeScript 熟知 JavaScript 中 `instanceof` 和 `typeof` 运算符的用法。如果你在一个条件块中使用这些，TypeScript 将会推导出在条件块中的的变量类型。如下例所示，TypeScript 将会辨别 `string` 上是否存在特定的函数，以及是否发生了拼写错误：

```ts
function doSome(x: number | string) {
  if (typeof x === 'string') {
    // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
    console.log(x.subtr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
    console.log(x.substr(1)); // ok
  }

  x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}
```

## 2. instanceof

这有一个关于 `class` 和 `instanceof` 的例子：

```ts
class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  }
  if (arg instanceof Bar) {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff(new Foo());
doStuff(new Bar());
```

TypeScript 甚至能够理解 `else`。当你使用 `if` 来缩小类型时，TypeScript 知道在其他块中的类型并不是 `if` 中的类型：

```ts
class Foo {
  foo = 123;
}

class Bar {
  bar = 123;
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    // 这个块中，一定是 'Bar'
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff(new Foo());
doStuff(new Bar());
```

## 3. in

`in` 操作符可以安全的检查一个对象上是否存在一个属性，它通常也被作为类型保护使用：

```ts
interface A {
  x: number;
}

interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    // q: A
  } else {
    // q: B
  }
}
```

## 4. 字面量类型保护

当你在联合类型里使用字面量类型时，你可以检查它们是否有区别：

```ts
type Foo = {
  kind: 'foo'; // 字面量类型
  foo: number;
};

type Bar = {
  kind: 'bar'; // 字面量类型
  bar: number;
};

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    // 一定是 Bar
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}
```

## 5. 使用定义的类型保护

JavaScript 并没有内置非常丰富的、运行时的自我检查机制。当你在使用普通的 JavaScript 对象时（使用结构类型，更有益处），你甚至无法访问 `instanceof` 和 `typeof`。在这种情景下，你可以创建*用户自定义的类型保护函数*，这仅仅是一个返回值为类似于`someArgumentName is SomeType` 的函数，如下：

```ts
// 仅仅是一个 interface
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

// 用户自己定义的类型保护！
function isFoo(arg: Foo | Bar): arg is Foo {
  return (arg as Foo).foo !== undefined;
}

// 用户自己定义的类型保护使用用例：
function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ok
    console.log(arg.bar); // Error
  } else {
    console.log(arg.foo); // Error
    console.log(arg.bar); // ok
  }
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });
```



# 十九、类型兼容性

https://typescript.bootcss.com/type-compatibility.html

## 1. 介绍

TypeScript里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。 它正好与名义（nominal）类型形成对比。（译者注：在基于名义类型的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。这与结构性类型系统不同，它是基于类型的组成结构，且不要求明确地声明。） 看下面的例子：

```ts
interface Named {
    name: string;
}

class Person {
    name: string;
}

let p: Named;
// OK, because of structural typing
p = new Person();
```

在使用基于名义类型的语言，比如C#或Java中，这段代码会报错，因为Person类没有明确说明其实现了Named接口。

TypeScript的结构性子类型是根据JavaScript代码的典型写法来设计的。 因为JavaScript里广泛地使用匿名对象，例如函数表达式和对象字面量，所以使用结构类型系统来描述这些类型比使用名义类型系统更好。

## 2. 深入

TypeScript结构化类型系统的基本规则是，如果`x`要兼容`y`，那么`y`至少具有与`x`相同的属性。比如：

```ts
interface Named {
    name: string;
}

let x: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;
```

这里要检查`y`是否能赋值给`x`，编译器检查`x`中的每个属性，看是否能在`y`中也找到对应属性。 在这个例子中，`y`必须包含名字是`name`的`string`类型成员。`y`满足条件，因此赋值正确。

检查函数参数时使用相同的规则：

```ts
function greet(n: Named) {
    alert('Hello, ' + n.name);
}
greet(y); // OK
```

注意，`y`有个额外的`location`属性，但这不会引发错误。 只有目标类型（这里是`Named`）的成员会被一一检查是否兼容。

这个比较过程是递归进行的，检查每个成员及子成员。



# 二十、readonly

* https://jkchao.github.io/typescript-book-chinese/typings/readonly.html#readonly

在TypeScript中，`readonly`关键字用于使 **属性** 或 **索引签名** 只读。这意味着一旦属性被赋值，就不能再被修改。`readonly`属性在编译时进行检查，以确保它们不会被重新赋值。

## 1. 修饰类的属性

当你在类中使用`readonly`修饰属性时，这些属性必须在声明时或构造函数里初始化，并且之后不能被修改。

```typescript
class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("John");
console.log(person.name); // John
// person.name = "Doe"; // 错误: 无法分配到 "name" ，因为它是只读属性。
```

## 2. 修饰 `interface` 和 `type `中的属性

你也可以在接口或类型别名中使用`readonly`，以确保实现接口的对象或符合类型别名的对象的相应属性不会被修改。

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
console.log(point.x); // 10
// point.x = 5; // 错误: 无法分配到 "x"，因为它是只读属性。
```

```ts
type Foo = {
  readonly bar: number;
  readonly bas: number;
};

// 初始化
const foo: Foo = { bar: 123, bas: 456 };

// 不能被改变
foo.bar = 456; // Error: foo.bar 为仅读属性
```

## 3. 修饰数组 - ReadonlyArray

TypeScript提供了`ReadonlyArray<T>`类型来确保数组创建后不会被修改（即不能添加、删除或替换数组中的元素）。

```typescript
let numbers: ReadonlyArray<number> = [1, 2, 3, 4];
console.log(numbers[0]); // 1
// numbers.push(5); // 错误: 属性 "push" 不存在于类型 "ReadonlyArray<number>" 上。
// numbers[2] = 10; // 错误: 类型 "ReadonlyArray<number>" 中的索引签名仅允许读取。
```

上面代码的最后一行，可以看到就算把整个`ReadonlyArray`赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：

```ts
a = ro as number[];
```

## 4. 修饰映射类型

你还可以在映射类型中使用`readonly`，以使映射类型的所有属性都变为只读。

```typescript
type ReadonlyPoint = {
  readonly [P in keyof Point]: Point[P];
};

let readonlyPoint: ReadonlyPoint = { x: 10, y: 20 };
// readonlyPoint.x = 5; // 错误: 无法分配到 "x"，因为它是只读属性。
```

这有一个 `Readonly` 的映射类型，它接收一个泛型 `T`，用来把它的所有属性标记为只读类型：

```ts
type Foo = {
  bar: number;
  bas: number;
};

type FooReadonly = Readonly<Foo>;

const foo: Foo = { bar: 123, bas: 456 };
const fooReadonly: FooReadonly = { bar: 123, bas: 456 };

foo.bar = 456; // ok
fooReadonly.bar = 456; // Error: bar 属性只读
```

`readonly`是TypeScript中一个非常有用的特性，它可以帮助你写出更安全、更易于理解的代码，通过防止不必要的修改来减少运行时的错误。

## 5. 与 `const` 的不同

* const

    - 用于变量；

    - 变量不能重新赋值给其他任何事物。

* readonly

    - 用于属性；

    - 用于别名；

简单的例子 1：

```ts
const foo = 123; // 变量
let bar: {
  readonly bar: number; // 属性
};
```

简单的例子 2：

```ts
const Arr = [1,2,3];

Arr[0] = 10;  // OK
Arr.push(12); // OK
Arr.pop();    // Ok

//But
Arr = [4,5,6] // ERROR


arr1: readonly Array<number> = [10,11,12];

arr1.pop();    // ERROR
arr1.push(15); // ERROR
arr1[0] = 1;   // ERROR
```

简单的例子 3：

```ts
const foo: {
  readonly bar: number;
} = {
  bar: 123
};

function iMutateFoo(foo: { bar: number }) {
  foo.bar = 456;
}

iMutateFoo(foo);
console.log(foo.bar); // 456
```

`readonly` 能确保“我”不能修改属性，但是当你把这个属性交给其他并没有这种保证的使用者（允许出于类型兼容性的原因），他们能改变它。当然，如果 `iMutateFoo` 明确的表示，他们的参数不可修改，那么编译器会发出错误警告：

```ts
interface Foo {
  readonly bar: number;
}

let foo: Foo = {
  bar: 123
};

function iTakeFoo(foo: Foo) {
  foo.bar = 456; // Error: bar 属性只读
}

iTakeFoo(foo);
```



# 二十一、索引签名

* https://jkchao.github.io/typescript-book-chinese/typings/indexSignatures.html#typescript-%E7%B4%A2%E5%BC%95%E7%AD%BE%E5%90%8D



# 二十二、类

* [阮一峰  - ECMAScript 6 入门 - Class](https://es6.ruanyifeng.com/#docs/class)
* https://ts.xcatliu.com/advanced/class.html
* https://typescript.bootcss.com/classes.html

传统方法中，JavaScript 通过构造函数实现类的概念，通过原型链实现继承。而在 ES6 中，我们终于迎来了 `class`。

TypeScript 除了实现了所有 ES6 中的类的功能以外，还添加了一些新的用法。

## 1. ES6 中类的用法[§](https://ts.xcatliu.com/advanced/class.html#es6-中类的用法)

下面我们先回顾一下 ES6 中类的用法，更详细的介绍可以参考 [ECMAScript 6 入门 - Class](http://es6.ruanyifeng.com/#docs/class)。

### a. 属性和方法[§](https://ts.xcatliu.com/advanced/class.html#属性和方法)

使用 `class` 定义类，使用 `constructor` 定义构造函数。

通过 `new` 生成新实例的时候，会自动调用构造函数。

```js
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
```

### b. 类的继承[§](https://ts.xcatliu.com/advanced/class.html#类的继承)

使用 `extends` 关键字实现继承，子类中使用 `super` 关键字来调用父类的构造函数和方法。

```js
class Cat extends Animal {
  constructor(name) {
    super(name); // 调用父类的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
  }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
```

### c. 存取器[§](https://ts.xcatliu.com/advanced/class.html#存取器)

使用 getter 和 setter 可以改变属性的赋值和读取行为：

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return 'Jack';
  }
  set name(value) {
    console.log('setter: ' + value);
  }
}

let a = new Animal('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log(a.name); // Jack
```

### d. 静态方法[§](https://ts.xcatliu.com/advanced/class.html#静态方法)

使用 `static` 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

```js
class Animal {
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

let a = new Animal('Jack');
Animal.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function
```

## 2. ES7 中类的用法[§](https://ts.xcatliu.com/advanced/class.html#es7-中类的用法)

ES7 中有一些关于类的提案，TypeScript 也实现了它们，这里做一个简单的介绍。

### a. 实例属性[§](https://ts.xcatliu.com/advanced/class.html#实例属性)

ES6 中实例的属性只能通过构造函数中的 `this.xxx` 来定义，ES7 提案中可以直接在类里面定义：

```js
class Animal {
  name = 'Jack';

  constructor() {
    // ...
  }
}

let a = new Animal();
console.log(a.name); // Jack
```

### b. 静态属性[§](https://ts.xcatliu.com/advanced/class.html#静态属性)

ES7 提案中，可以使用 `static` 定义一个静态属性：

```js
class Animal {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal.num); // 42
```



## 3. TypeScript 中类的用法[§](https://ts.xcatliu.com/advanced/class.html#typescript-中类的用法)

### a. 类介绍

我们声明一个`Greeter`类。这个类有3个成员：一个叫做`greeting`的属性，一个构造函数和一个`greet`方法。

```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

我们在引用任何一个类成员的时候都用了`this`。 它表示我们访问的是类的成员。

最后一行，我们使用`new`构造了`Greeter`类的一个实例。 它会调用之前定义的构造函数，创建一个`Greeter`类型的新对象，并执行构造函数初始化它。

### b. 继承

#### 1. 简单继承

```ts
class Animal {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里，`Dog`是一个*派生类*，它派生自`Animal`*基类*，通过`extends`关键字。 派生类通常被称作*子类*，基类通常被称作*超类*。

因为`Dog`继承了`Animal`的功能，因此我们可以创建一个`Dog`的实例，它能够`bark()`和`move()`。

#### 2. 复杂继承

```ts
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```

这一次，我们使用`extends`关键字创建了`Animal`的两个子类：`Horse`和`Snake`。

与前一个例子的不同点是，派生类包含了一个构造函数，它*必须*调用`super()`，它会执行基类的构造函数。 而且，在构造函数里访问`this`的属性之前，我们*一定*要调用`super()`。 这个是TypeScript强制执行的一条重要规则。

这个例子演示了如何在子类里可以重写父类的方法。 `Snake`类和`Horse`类都创建了`move`方法，它们重写了从`Animal`继承来的`move`方法，使得`move`方法根据不同的类而具有不同的功能。 注意，即使`tom`被声明为`Animal`类型，但因为它的值是`Horse`，调用`tom.move(34)`时，它会调用`Horse`里重写的方法：

```
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```



### c. 多继承 - 不支持

* TypeScript 一次只能继承一个类，**不支持继承多个类**，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。

* 多继承的毛病

    - TypeScript 不支持多重继承，这意味着一个类只能继承自一个类，因为他会潜在地增加程序的复杂性。

    - 倘若，在支持多继承的环境下，一个子类所继承的两个父类都拥有一个同名的方法，子类在调用父类方法的时候，哪一个父类的方法被调用是不清楚或者说是有歧义的。

```ts
// 以下代码为错误代码
class Bat extends WingeAnimal, Mammal {
    // ...
}
```

#### 1. 模拟多继承 - 接口和交叉类型

可以使用接口和交叉类型来创建具有多个父接口的类。例如：

```typescript
interface Animal {
  name: string;
}

interface Mammal {
  hasFur: boolean;
}

class Pet implements Animal, Mammal {
  name: string;
  hasFur: boolean;
}
```

现在，`Pet` 类实现了 `Animal` 和 `Mammal` 接口，并具有这两个接口的所有成员。

#### 2. 模拟多继承 - Mixin（待）

TypeScript 中的 Mixin 是一个类，它提供了一组可以与其他类组合的附加功能。这可以用来模拟多继承，因为一个类可以从多个 Mixin 中获取功能。

// TODO



### d. 访问修饰符：public、private、protected[§](https://ts.xcatliu.com/advanced/class.html#public-private-和-protected)

TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 `public`、`private` 和 `protected`。

- `public` 修饰的属性或方法是公有的，可以在任何地方被访问到，**默认**所有的属性和方法都是 `public` 的
- `private` 修饰的属性或方法是私有的，不能在声明它的类的外部访问
- `protected` 修饰的属性或方法是受保护的，它和 `private` 类似，区别是它在子类中也是允许被访问的

下面举一些例子：

```ts
class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom
```

上面的例子中，`name` 被设置为了 `public`，所以直接访问实例的 `name` 属性是允许的。

很多时候，我们希望有的属性是无法直接存取的，这时候就可以用 `private` 了：

```ts
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';

// index.ts(9,13): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
// index.ts(10,1): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
```

需要注意的是，TypeScript 编译之后的代码中，并没有限制 `private` 属性在外部的可访问性。

上面的例子编译后的代码是：

```js
var Animal = (function () {
  function Animal(name) {
    this.name = name;
  }
  return Animal;
})();
var a = new Animal('Jack');
console.log(a.name);
a.name = 'Tom';
```

使用 `private` 修饰的属性或方法，在子类中也是不允许访问的：

```ts
class Animal {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}

// index.ts(11,17): error TS2341: Property 'name' is private and only accessible within class 'Animal'.
```

而如果是用 `protected` 修饰，则允许在子类中访问：

```ts
class Animal {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}
```

当构造函数修饰为 `private` 时，该类不允许被继承或者实例化：

```ts
class Animal {
  public name;
  private constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let a = new Animal('Jack');

// index.ts(7,19): TS2675: Cannot extend a class 'Animal'. Class constructor is marked as private.
// index.ts(13,9): TS2673: Constructor of class 'Animal' is private and only accessible within the class declaration.
```

当构造函数修饰为 `protected` 时，该类只允许被继承：

```ts
class Animal {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
class Cat extends Animal {
  constructor(name) {
    super(name);
  }
}

let a = new Animal('Jack');

// index.ts(13,9): TS2674: Constructor of class 'Animal' is protected and only accessible within the class declaration.
```

### e. readonly[§](https://ts.xcatliu.com/advanced/class.html#readonly)

你可以使用`readonly`关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```ts
class Animal {
  readonly name;
  public constructor(name) {
    this.name = name;
  }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';

// index.ts(10,3): TS2540: Cannot assign to 'name' because it is a read-only property.
```

注意如果 `readonly` 和其他访问修饰符同时存在的话，需要写在其后面。

```ts
class Animal {
  // public readonly name;
  public constructor(public readonly name) {
    // this.name = name;
  }
}
```

### f. 参数属性[§](https://ts.xcatliu.com/advanced/class.html#参数属性)

修饰符和`readonly`还可以使用在构造函数参数中，等同于类中定义该属性同时给该属性赋值，使代码更简洁。

参数属性可以方便地让我们在一个地方定义并初始化一个成员。

* before

```ts
class Animal {
    private name: string;
    constructor(theName: string) { 
        this.name = theName; 
    }
}
```

* after

```ts
class Animal {
	constructor(private name: string) {
    }
}
```

注意看我们是如何舍弃了`theName`，仅在构造函数里使用`private name: string`参数来创建和初始化`name`成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数添加一个访问限定符来声明。 使用`private`限定一个参数属性会声明并初始化一个私有成员；对于`public`和`protected`来说也是一样。

### g. 存取器 - set / get

TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

* before，无存取器，我们可以随意的设置`fullName`，这是非常方便的。

```ts
class Employee {
    fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
console.log(employee.fullName);
```

* after，有存取器

```ts
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
alert(employee.fullName);
```

* 注意事项
    * 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 
    * 其次，只带有`get`不带有`set`的存取器自动被推断为`readonly`。 这在从代码生成`.d.ts`文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。

### h. 静态属性 / 方法

* 静态属性

我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 

```ts
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

* 静态方法

使用 `static` 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

```js
class Animal {
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

let a = new Animal('Jack');
Animal.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function
```

### i. 抽象类[§](https://ts.xcatliu.com/advanced/class.html#抽象类)

* `abstract`关键字是用于定义抽象类和在抽象类内部定义抽象方法。
* 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 
* 不同于接口，抽象类可以包含成员的实现细节。
* 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 

1. 首先，抽象类是不允许被实例化的：

```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

let a = new Animal('Jack');

// index.ts(9,11): error TS2511: Cannot create an instance of the abstract class 'Animal'.
```

上面的例子中，我们定义了一个抽象类 `Animal`，并且定义了一个抽象方法 `sayHi`。在实例化抽象类的时候报错了。

2. 其次，抽象类中的抽象方法必须被子类实现：

```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public eat() {
    console.log(`${this.name} is eating.`);
  }
}

let cat = new Cat('Tom');

// index.ts(9,7): error TS2515: Non-abstract class 'Cat' does not implement inherited abstract member 'sayHi' from class 'Animal'.
```

上面的例子中，我们定义了一个类 `Cat` 继承了抽象类 `Animal`，但是没有实现 **抽象方法 `sayHi`**，所以编译报错了。

3. 下面是一个正确使用抽象类的例子：

```ts
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  // 普通方法，可以包含实现细节，这是与inferface的差别
  printName(): void {
    console.log('Department name: ' + this.name);
  }
  // 抽象方法
  public abstract sayHi();   // 必须在派生类中实现
}

class Cat extends Animal {
  constructor(name: string) {
    // 在派生类的构造函数中必须调用 super()
    super(name);
    this.name = name + ' cat';
    console.log('Cat constructor = ', this.name);
  }
    
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
    
  public eat(): void {
    console.log(`${this.name} is eating.`);
  }
}

let cat = new Cat('Tom');
cat.sayHi();
cat.printName();

let animal: Animal; // 允许创建一个对抽象类型的引用
animal = new Animal(); // ❎错误: 不能创建一个抽象类的实例
animal = new Cat(); // 允许对一个抽象子类进行实例化和赋值
animal.printName();
animal.sayHi();
animal.eat(); // ❎错误: 方法在声明的抽象类中不存在
```

上面的例子中，我们实现了抽象方法 `sayHi`，编译通过了。

需要注意的是，即使是抽象方法，TypeScript 的编译结果中，仍然会存在这个类，上面的代码的编译结果是：

```js
var __extends =
  (this && this.__extends) ||
  function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
var Animal = (function () {
  function Animal(name) {
    this.name = name;
  }
  return Animal;
})();
var Cat = (function (_super) {
  __extends(Cat, _super);
  function Cat() {
    _super.apply(this, arguments);
  }
  Cat.prototype.sayHi = function () {
    console.log('Meow, My name is ' + this.name);
  };
  return Cat;
})(Animal);
var cat = new Cat('Tom');
```

### j. 对象比较

类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型。 比较两个类类型的对象时，只有实例的成员会被比较。 静态成员和构造函数不在比较的范围内。

```ts
class Animal {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size {
    feet: number;
    constructor(numFeet: number) { }
}

let a: Animal;
let s: Size;

a = s;  //OK
s = a;  //OK
```



## 4. 单例模式

**单例模式可以简单的理解为只生成一个实例**

1. **私有化构造函数**：确保不能从类外部通过`new`关键字创建实例。
2. **静态属性保存实例**：类自身维护一个私有静态属性来保存单例实例。
3. **公共静态方法获取实例**：通过一个公共的静态方法来获取这个单例实例。如果实例不存在，则在这个方法内部创建实例。

下面是一个TypeScript中单例模式的示例：

```ts
class Singleton {
    private static instance: Singleton;

    // 私有化构造函数，防止外部通过new创建实例
    private constructor() {}

    // 公共静态方法，用于获取单例实例
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// 使用
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();
console.log(singletonInstance1 === singletonInstance2); //true
```



# 二十三、接口（interface）

在TypeScript中，接口（Interfaces）用于定义对象的结构，包括对象的属性和方法。

接口运行时的影响为 0。

## 1. 简单例子

```ts
// 下面两个是等效的声明，示例 A 使用内联注解，示例 B 使用接口形式：

// 示例 A
declare const myPoint: { x: number; y: number };

// 示例 B
interface Point {
  x: number;
  y: number;
}
declare const myPoint: Point;
```

## 2. 接口合并

示例 B 的好处在于，如果有人创建了一个基于 `myPoint` 的库来添加新成员, 那么他可以轻松将此成员添加到 `myPoint` 的现有声明中:

```ts
// Lib a.d.ts
interface Point {
  x: number,
  y: number
}
declare const myPoint: Point

// Lib b.d.ts
interface Point {
  z: number
}

// Your code
myPoint.z // Allowed!
```

## 3. 使用接口

```ts
// 定义一个接口
interface Person {
  name: string;
  age: number;
  greet: () => void;
}

// 使用接口
const person: Person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.greet();
```

## 4. 可选属性

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

// 调用
let mySquare = createSquare({color: "black"});
```

## 5. 只读属性

一些对象属性**只能在对象刚刚创建的时候修改其值**。 你可以在属性名前用`readonly`来指定只读属性:

```ts
interface Point {
    readonly x: number;
    readonly y: number;
}
```

你可以通过赋值一个对象字面量来构造一个`Point`。 赋值后，`x`和`y`再也不能被改变了。

```ts
let p1: Point = { x: 10, y: 20 }; // 创建时候可以修改
p1.x = 5; // error! 赋值后，不能修改
```

TypeScript具有`ReadonlyArray<T>`类型，它与`Array<T>`相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：

```ts
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```

上面代码的最后一行，可以看到就算把整个`ReadonlyArray`赋值到一个普通数组也是不可以的。 但是你可以用类型断言重写：

```ts
a = ro as number[];
```

## 6. 接口继承

### a. 继承

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

### b. 多继承

#### 1. extends

```ts
interface A {
  name: string;
  age: number;
}

interface B {
  sex: string;
}

interface C extends A, B {
  height: number;
}

const uuser: C = {
  name: 'LBJ',
  age: 18,
  sex: 'male',
  height: 1.88
}
console.log('uuser = ', uuser);

// uuser =  { name: 'LBJ', age: 18, sex: 'male', height: 1.88 }
```

#### 2. 交叉类型

```ts
interface A {
  a: number;
}
interface B {
  b: string;
}

type C = A & B;

let ab: A & B = {a: 1, b: "string"};
let c: C = {a: 2, b: "string2"};
```

现在，Pet 类型继承了 Animal 和 Mammal 接口的所有成员。



# 二十四、类与接口

## 1. 对比

在TypeScript中，接口（Interfaces）和类（Classes）是两个不同的概念，它们有一些相似之处，也有一些明显的区别。以下是它们之间的异同点：

* 相同点：
    * **成员定义：** 接口和类都可以定义属性和方法，用于描述对象的结构。
    * **可继承性：** 接口和类都支持继承，可以扩展已有的接口或类。
    * **类型检查：** 接口和类都可以用于进行类型检查，帮助捕获编码过程中的潜在错误。

* 不同点：
    * **实现方式：** 接口主要用于定义对象的结构，而类则用于创建对象的实例。
    * **实例化：** 接口本身不能被实例化，而类可以被实例化为对象。
    * **抽象性：** 接口只描述对象的结构，不包含具体实现；类既可以描述对象的结构，又可以包含具体实现。
    * **继承：** 类支持单继承和多实现，而接口支持多继承。
    * **访问修饰符：** 类中可以使用访问修饰符（public、private、protected）来限制成员的访问权限，而接口中的成员默认为 public。

综上所述，接口用于定义对象的结构，提供了一种契约，而类用于创建对象的实例，包含了对象的结构和行为。在实际开发中，通常会将接口用于描述对象的形状，而将类用于实现对象的具体功能。

## 2. 类实现接口

与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。

你也可以在接口中描述一个方法，在类里实现它，如同下面的`setTime`方法一样：

```ts
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

## 3. 把类当做接口使用

```ts
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```



# 二十五、接口与类型别名

在 TypeScript 中，`interface` 和 `type` 都可以用来定义数据类型，但它们有一些区别：

## 1. Interface（接口）：

1. **声明合约（Contracts）**：接口主要用于声明对象的形状，即对象应该具有哪些属性以及它们的类型。
2. **扩展和实现**：接口可以被其他接口扩展，也可以由类来实现。
3. **合并（Merging）**：如果定义了多个同名的接口，它们会自动合并成一个接口。
4. **限制类型**：接口可以用来限制类、对象、函数等的形状和行为。

### a. 简单类型

```ts
interface Person {
    name: string;
    age: number;
}

interface Teacher extends Person {
    teach(): void;
}

class Student implements Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    console.log(`Hello, ${person.name}!`);
}
```

### b. 复杂嵌套类型

```ts
// 定义一个嵌套类型的接口
interface Address {
    city: string;
    postalCode: string;
}

interface Person {
    name: string;
    age: number;
    address: Address; // 使用 Address 接口作为嵌套类型
}

// 声明一个数组，其元素为复杂嵌套类型
const people: Person[] = [
    {
        name: "John",
        age: 30,
        address: { city: "New York", postalCode: "10001" }
    },
    {
        name: "Alice",
        age: 25,
        address: { city: "Los Angeles", postalCode: "90001" }
    }
];
```

在这个例子中，我们首先定义了 `Address` 接口来描述地址的结构，然后定义了 `Person` 接口来描述一个人的结构，其中 `address` 属性的类型为 `Address` 接口。接着，我们声明了一个 `people` 数组，其元素为 `Person` 类型。

## 2. Type（类型别名）

1. **给类型取别名**：类型别名可以给任何类型取一个新的名字，这对于复杂类型或者联合类型非常有用。
2. **联合类型和交叉类型**：类型别名可以表示联合类型、交叉类型等复杂的类型组合。
3. **不能扩展和实现**：类型别名不能被扩展或实现，也不能被合并。

### a. 简单类型

```ts
type Person = {
    name: string;
    age: number;
};

type Teacher = Person & {
    teach(): void;
};

type Age = number | string;

type Point = {
    x: number;
    y: number;
};

function logPoint(p: Point) {
    console.log(`x: ${p.x}, y: ${p.y}`);
}
```

### b. 复杂嵌套类型

```ts
// 定义一个嵌套类型的类型别名
type Address = {
    city: string;
    postalCode: string;
}

type Person = {
    name: string;
    age: number;
    address: Address; // 使用 Address 类型别名作为嵌套类型
}

// 声明一个数组，其元素为复杂嵌套类型
const people: Person[] = [
    {
        name: "John",
        age: 30,
        address: { city: "New York", postalCode: "10001" }
    },
    {
        name: "Alice",
        age: 25,
        address: { city: "Los Angeles", postalCode: "90001" }
    }
];
```

这个例子与上面的例子类似，只是使用了类型别名 `Address` 和 `Person` 来定义复杂嵌套类型。

无论你选择使用接口还是类型别名，都可以声明具有复杂嵌套类型的数组。选择哪种方式取决于你的需求和个人偏好。

## 3. 总结

- 使用接口（`interface`）来定义对象的形状，以及类和对象的行为。
- 使用类型别名（`type`）来给复杂类型取别名，以及定义联合类型、交叉类型等复杂类型组合。
- 在选择使用接口还是类型别名时，取决于你的需求和个人偏好。通常情况下，如果你需要声明一个对象的形状，使用接口会更加合适；如果你需要给复杂类型取别名，或者定义联合类型和交叉类型，使用类型别名会更方便。



# 二十六、泛型（Generics）

* https://jkchao.github.io/typescript-book-chinese/typings/generices.html#%E5%8A%A8%E6%9C%BA%E5%92%8C%E7%A4%BA%E4%BE%8B

* https://juejin.cn/post/7083101542307332104
* https://ts.xcatliu.com/advanced/generics.html
* https://typescript.bootcss.com/generics.html



> **泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。** 

## 1. 简单例子

首先，我们来实现一个函数 `createArray`，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：

```ts
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```

这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：

`Array<any>` 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 `value` 的类型。

这时候，泛型就派上用场了：

```ts
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']
```

上例中，我们在函数名后添加了 `<T>`，其中 `T` 用来指代任意输入的类型，在后面的输入 `value: T` 和输出 `Array<T>` 中即可使用了。

**使用泛型函数**

我们定义了泛型函数后，可以用两种方法使用。

* 第一种是，传入所有的参数，包含类型参数：

```ts
let output = identity<string>("myString");  // type of output will be 'string'
```

这里我们明确的指定了`T`是`string`类型，并做为一个参数传给函数，使用了`<>`括起来而不是`()`。

* 第二种方法更普遍。利用了*类型推论* – 即编译器会根据传入的参数自动地帮助我们确定T的类型：

```ts
let output = identity("myString");  // type of output will be 'string'
```

注意我们没必要使用尖括号（`<>`）来明确地传入类型；编译器可以查看`myString`的值，然后把`T`设置为它的类型。 类型推论帮助我们保持代码精简和高可读性。如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入T的类型，在一些复杂的情况下，这是可能出现的。

## 2. 类型参数 - 数组

这可以让我们把泛型变量T当做类型的一部分使用，而不是整个类型，增加了灵活性。

```ts
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

or

```ts
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}
```

## 3. 多个类型参数[§](https://ts.xcatliu.com/advanced/generics.html#多个类型参数)

定义泛型的时候，可以一次定义多个类型参数：

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```

上例中，我们定义了一个 `swap` 函数，用来交换输入的元组。

## 4. 泛型约束[§](https://ts.xcatliu.com/advanced/generics.html#泛型约束)



泛型类型



泛型类





# 混合

https://jkchao.github.io/typescript-book-chinese/typings/mixins.html#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0



# 函数



## 函数重载





# 异常处理

https://jkchao.github.io/typescript-book-chinese/typings/exceptionsHanding.html#%E9%94%99%E8%AF%AF%E5%AD%90%E7%B1%BB%E5%9E%8B
