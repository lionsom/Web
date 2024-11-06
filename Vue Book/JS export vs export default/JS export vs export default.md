* https://stackoverflow.com/questions/33305954/typescript-export-vs-default-export
* https://www.amitmerchant.com/difference-between-export-and-export-default-in-typescript/



## export default

```ts
// MyClass.ts -- using default export
export default class MyClass { /* ... */ }
```

主要区别在于每个文件只能有一个默认导出，并且可以像这样导入它：

```ts
import MyClass from "./MyClass";
```

您可以给它提供任何喜欢的名字。例如，这很好：

```ts
import MyClassAlias from "./MyClass";
```



## export

```ts
// MyClass.ts -- using named exports
export class MyClass { /* ... */ }
export class MyOtherClass { /* ... */ }
```

当您使用命名导出时，每个文件可以有多个导出，并且需要 **导入括号中包围的出口** ：

```ts
// 括号中指定的名称需要匹配导出的名称
import { MyClass } from "./MyClass";

// or 连续导出多个文件
import { MyClass, MyOtherClass } from "./MyClass";

// 或者，您可以在此文件中给他们一个不同的名称：
import { MyClass, MyOtherClass as MyOtherClassAlias } from "./MyClass";

// 或者，您可以通过使用 * as 导入所有导出的内容：
import * as MyClasses from "./MyClass";
// use MyClasses.MyClass and MyClasses.MyOtherClass here
```

































