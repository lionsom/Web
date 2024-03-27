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

- 数组是一种有序的数据集合，其中的元素可以是任意类型，并且可以动态增加或删除元素。
- 数组的元素访问通过索引来进行，索引从 0 开始，可以通过索引来读取或修改数组中的元素。
- TypeScript 中使用 `Array` 或者简写形式 `[]` 来定义数组类型。

## 1. 整个数组数据类型一致的情况

### a. 方式一: Array < number >

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];
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



# 联合类型（Union Types）

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







# 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

## 什么是类型推论

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



# 类型断言

* [类型断言](https://ts.xcatliu.com/basics/type-assertion.html)

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

在实际应用中，一般推荐使用 as 语法进行类型断言，因为它在 JSX/TSX 语法中不会与标签语法混淆。另外，当你在使用 TypeScript 与 JSX 时，只能使用 as 语法进行类型断言。

需要注意的是，类型断言不会在运行时进行任何的检查或转换，它只是在编译阶段告诉编译器将某个值视为特定的类型。因此，如果类型断言不正确，可能会导致运行时的错误。因此，在进行类型断言时，确保你对类型的了解是正确的，并且确保它是安全的。



# 十、TypeScript定义复杂类型

## 1. `interface`



## 2. `type`

在 TypeScript 中，`interface` 和 `type` 都可以用来定义数据类型，但它们有一些区别：

### Interface（接口）：

1. **声明合约（Contracts）**：接口主要用于声明对象的形状，即对象应该具有哪些属性以及它们的类型。
2. **扩展和实现**：接口可以被其他接口扩展，也可以由类来实现。
3. **合并（Merging）**：如果定义了多个同名的接口，它们会自动合并成一个接口。
4. **限制类型**：接口可以用来限制类、对象、函数等的形状和行为。

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

### Type（类型别名）：

1. **给类型取别名**：类型别名可以给任何类型取一个新的名字，这对于复杂类型或者联合类型非常有用。
2. **联合类型和交叉类型**：类型别名可以表示联合类型、交叉类型等复杂的类型组合。
3. **不能扩展和实现**：类型别名不能被扩展或实现，也不能被合并。

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

### 总结：

- 使用接口（`interface`）来定义对象的形状，以及类和对象的行为。
- 使用类型别名（`type`）来给复杂类型取别名，以及定义联合类型、交叉类型等复杂类型组合。
- 在选择使用接口还是类型别名时，取决于你的需求和个人偏好。通常情况下，如果你需要声明一个对象的形状，使用接口会更加合适；如果你需要给复杂类型取别名，或者定义联合类型和交叉类型，使用类型别名会更方便。





# 定义复杂嵌套类型

在 TypeScript 中，你可以使用数组类型来声明具有复杂嵌套类型的数组。你可以使用接口或类型别名来定义嵌套的复杂类型，然后将其用作数组元素的类型。下面是一个示例：

### 使用接口定义复杂嵌套类型：

```
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

### 使用类型别名定义复杂嵌套类型：

```
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











