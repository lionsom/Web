

# JavaScript 作用域

* [JavaScript变量与常量 - 变量作用域](../JavaScript变量与常量/JavaScript变量与常量.md)
    * 在 JavaScript 中，**对象和函数同样也是变量**。



<font color='red' size=5>在 ES6 之前，JavaScript 只有两种作用域： **全局变量** 与 **函数内的局部变量**。</font>

<font color='red' size=5>ES6 可以使用 let 关键字来实现块级作用域。</font>

① 全局变量：不在任何函数内声明的变量（显式定义）或在函数内省略var声明的变量（隐式定义）都称为全局变量，它在同一个页面文件中的所有脚本内都可以使用。

② 局部变量：在函数体内利用var关键字定义的变量称为局部变量，它仅在该函数体内有效。

③ 块级变量：ES 6提供的let关键字声明的变量称为块级变量，仅在“{}”中间有效，如if、for或while语句等。



## 一、JavaScript 局部作用域

* 变量在函数内声明，变量为局部变量，具有局部作用域。
* 局部变量：只能在函数内部访问。
* 局部变量在函数开始执行时创建，函数执行完后局部变量会自动销毁。

```js
// 此处不能调用 carName 变量
function myFunction() {
    var carName = "Volvo";
    // 函数内可调用 carName 变量
}
```



## 二、JavaScript 全局变量

* 变量在函数外定义，即为全局变量。

* 全局变量有 **全局作用域**: 网页中所有脚本和函数均可使用。 

```js
var carName = " Volvo";
 
// 此处可调用 carName 变量
function myFunction() {
    // 函数内可调用 carName 变量
}
```



### 1. 函数内未声明的变量为全局变量

如果变量在函数内没有声明（没有使用 var 关键字），该变量为全局变量。

以下实例中 carName 在函数内，但是为全局变量。

demo: https://www.runoob.com/try/try.php?filename=tryjs_local_global

```js
function myFunction() {
  carName = "Volvo";
}

myFunction();

// 此处可使用 carName
console.log(carName);
```



## 三、JavaScript 变量生命周期

JavaScript 变量生命周期在它声明时初始化。

局部变量在函数执行完毕后销毁。

全局变量在页面关闭后销毁。



## 四、HTML 中的全局变量

* 在 JavaScript 中，全局作用域是针对 JavaScript 环境。

* 在 HTML 中，全局作用域是针对 window 对象。

    * **注意：**所有全局变量都属于 window 对象。

    ```js
    var carName = "Volvo";
    
    // 可以使用 window.carName 访问变量
    console.log(window.carName);
    ```

* 在 HTML 中, 全局变量是 window 对象，所以 window 对象可以调用函数内的未声明（未加 var）的局部变量。

    Demo：https://www.runoob.com/try/try.php?filename=tryjs_scope_window

    ```js
    function myFunction() {
        carName = "Volvo";
    }
    
    myFunction();
    
    //此处可使用 window.carName
    console.log(window.carName);
    ```

* 使用 **let** 关键字声明的全局作用域变量不属于 window 对象:

    ```js
    let carName = "Volvo";
    // 不能使用 window.carName 访问变量
    ```















