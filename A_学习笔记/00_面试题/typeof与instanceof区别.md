

**值类型(基本类型)**：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。

**引用数据类型（对象类型）**：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）。

```js
const a = "str";
console.log("typeof a :>> ", typeof a); // typeof a :>>  string

const b = 999;
console.log("typeof b :>> ", typeof b); // typeof b :>>  number

const c = BigInt(9007199254740991);
console.log("typeof c :>> ", typeof c); // typeof c :>>  bigint

const d = false;
console.log("typeof d :>> ", typeof d); // typeof d :>>  boolean

const e = undefined;
console.log("typeof e :>> ", typeof e); // typeof e :>>  undefined

const f = Symbol("f");
console.log("typeof f :>> ", typeof f); // typeof f :>>  symbol

const g = null;
console.log("typeof g :>> ", typeof g); // typeof g :>>  object

const h = () => {};
console.log("typeof h :>> ", typeof h); // typeof h :>>  function

const i = [];
console.log("typeof i :>> ", typeof i); // typeof i :>>  object
```



* typeof 能识别所有的值类型，识别函数，能区分是否是引用类型。

* instanceof 用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

