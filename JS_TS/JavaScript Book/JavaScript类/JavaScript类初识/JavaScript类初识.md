

# JavaScript 类(class)

<font color='red' size=5>类是用于创建对象的模板。</font>

每个类中包含了一个特殊的方法 **constructor()**，它是类的构造函数，这种方法用于创建和初始化一个由 **class** 创建的对象。

```js
/*
 * 以下创建了一个类，名为 "Runoob"。
 * 类中初始化了两个属性： "name" 和 "url"。
 */
class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
```



## 定义类的几种方式







### 类方法

| 方法                                                         | 描述                         |
| :----------------------------------------------------------- | :--------------------------- |
| [constructor()](https://www.runoob.com/js/jsref-constructor-class.html) | 构造函数，用于创建和初始化类 |

### 类关键字

| 关键字                                                       | 描述                   |
| :----------------------------------------------------------- | :--------------------- |
| [extends](https://www.runoob.com/js/jsref-class-extends.html) | 继承一个类             |
| [static](https://www.runoob.com/js/jsref-class-static.html)  | 在类中定义一个静态方法 |
| [super](https://www.runoob.com/js/jsref-class-super.html)    | 调用父类的构造方法     |