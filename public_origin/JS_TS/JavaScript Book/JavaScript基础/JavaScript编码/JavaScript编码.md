[Unicode与JavaScript详解 - 阮一峰](https://www.ruanyifeng.com/blog/2014/12/unicode.html)





# 一、Unicode 编码

**Unicode 编码** 是一种字符编码标准，它为世界上所有的文字和符号提供了唯一的编码。在 JavaScript 中，所有字符串都是以 Unicode 编码的形式存储的。

JavaScript 使用 Unicode 编码处理字符串，这意味着它能够表示几乎所有的书写系统的字符。每个字符都有一个唯一的 Unicode 代码点，例如 `'A'` 的代码点是 `U+0041`，而 `'中'` 的代码点是 `U+4E2D`。



## 1. 在 JavaScript 中的表示
- JavaScript 和 CSS 中的语法很像，只是多了一个字母`u`。
  
- JavaScript 字符串可以直接使用 Unicode 字符，通过 `\u` 或 `\U` 表示 Unicode 码点。例如：
  
  语法：`'\u + 16进制的unicode编码'`
  
  ```javascript
  const unicodeChar = '\u4E2D';  // '中'
  console.log(unicodeChar);      // 输出: 中
  ```



### a. 使用 `charCodeAt/codePointAt` 和 `fromCharCode/fromCodePoint`

- `charCodeAt()`：用于获取字符串中某个字符的 Unicode 编码。
- `codePointAt()`：es6新增（处理高位字符）
- `String.fromCharCode()`：用于从 Unicode 编码生成字符串字符。
- `String.fromCodePoint()`：es6新增（处理高位字符）

```javascript
const str = 'A';
console.log(str.charCodeAt(0));         // 输出: 65 (Unicode 编码)
console.log(str.codePointAt(0));	    // 输出: 65 (Unicode 编码)
console.log(String.fromCharCode(65));   // 输出: 'A'
console.log(String.fromCodePoint(65));  // 输出: 'A'
```



### b. 高位字符 (Supplementary Characters)

对于超出基本多文种平面的 Unicode 字符（代码点超过 `U+FFFF` 的字符），需要使用两个 16 位的代码单元进行表示，称为代理对（Surrogate Pair）。例如：

```javascript
const smiley = '😊';  // U+1F60A
console.log(smiley.length);  // 输出: 2（代理对占用了两个字符位置）
```



## 2. 在 CSS 中的表示

CSS 中一般会在伪元素中使用 Unicode 字符，用于显示一个特殊的字符或 icon。

语法：`'\16进制的unicode编码'`

比如，一段很常见的 bootstrap 的字体图标代码：

```css
.glyphicon-home:before {
    content: "\e021";
}
```

上面代码中的`e021`就是这个字符的 Unicode 码，是 16 进制。



## 3. 在 HTML 中的表示

HTML 特殊一点，使用的是 10 进制，而且格式也不太一样。

语法：`'&# + 10 进制的 unicode 编码 + 英文分号;'`

比如，`安`表示中文中的“安”。

另外，HTML 一些特殊字符还有其它表示，也就是常说的 HTML 转义字符，如：`$nbsp;`表示` `，也就是空格。

完整的 HTML 转义字符可以看这里：[站长工具](http://tool.oschina.net/commons?type=2)。





# 二、URL 编码

**URL 编码**（也叫做百分号编码，Percent Encoding）是用于在 URL 中表示特殊字符的编码方式。由于 URL 只允许使用 ASCII 字符集，其他字符（如空格、中文、特殊符号等）需要进行编码，以便安全传输。

| 方法                   | 说明                                                 |
| :--------------------- | :--------------------------------------------------- |
| escape()               | 使用转义序列替换某些字符来对字符串进行编码           |
| unescape()             | 对使用 escape() 编码的字符串进行解码                 |
| encodeURI()            | 通过转义某些字符对 URI 进行编码                      |
| decodeURI()            | 对使用 encodeURI() 方法编码的字符串进行解码          |
| encodeURIComponent()   | 通过某些转义字符对 URI 的组件进行编码                |
| deencodeURIComponent() | 对使用 encodeURIComponent() 方法编码的字符串进行解码 |



## 1. URL字符的组成部分

URL的组成部分有：26的英文字母、10个阿拉伯数字、连号（`-`）、句点（`.`）、下划线（`_`）。



## 2. URL 编码原理
- **非 ASCII 字符** 以及部分特殊字符会被编码为 `%` 后面跟随两个十六进制数字的形式，代表该字符的字节值。
- 例如，空格 (`' '`) 会被编码为 `%20`，`#` 会被编码为 `%23`，中文字符会被编码为一系列 `%` 和十六进制数字。

    - `!`：%21

    - `#`：%23

    - `$`：%24

    - `&`：%26

    - `'`：%27

    - `(`：%28

    - `)`：%29

    - `*`：%2A

    - `+`：%2B

使用方法：比如，字母`a`的十六进制 ASCII 码是`61`，转义形式后就是`%61`。因此，`www.apple.com` 又可以写成 `www.%61pple.com`，浏览器一样识别。



## 3. URL 编码与解码在 JavaScript 中的使用

- `encodeURIComponent()`：对整个字符串进行编码，将特殊字符和非 ASCII 字符转成合法的 URL 编码。
- `decodeURIComponent()`：对编码后的字符串进行解码，恢复成原始字符串。

#### 示例：
```javascript
const url = 'https://example.com/search?q=中文 编码';
const encodedUrl = encodeURIComponent(url);  
console.log(encodedUrl);  
// 输出: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3D%E4%B8%AD%E6%96%87%20%E7%BC%96%E7%A0%81'

const decodedUrl = decodeURIComponent(encodedUrl);
console.log(decodedUrl);  
// 输出: 'https://example.com/search?q=中文 编码'
```



## 4. `encodeURIComponent` 与 `encodeURI` 区别

- **`encodeURIComponent`**：会编码所有非字母数字字符（包括 `:`、`/`、`?`、`&` 等）。适用于编码 URL 参数或查询字符串。
- **`encodeURI`**：只编码特殊字符，不编码 URL 中的符号（如 `:`, `/`, `?`, `&` 等），适用于编码整个 URL。

```javascript
const param = '中文 编码';
console.log(encodeURIComponent(param));  // 输出: %E4%B8%AD%E6%96%87%20%E7%BC%96%E7%A0%81
console.log(encodeURI(param));           // 输出: %E4%B8%AD%E6%96%87%20%E7%BC%96%E7%A0%81

const fullUrl = 'https://example.com/search?q=中文 编码';
console.log(encodeURI(fullUrl));  
// 输出: https://example.com/search?q=%E4%B8%AD%E6%96%87%20%E7%BC%96%E7%A0%81
```

#### 示例：

```js
let str = 'https://www.baidu.com/s?returnURL=http://www.test.com/'

let a = encodeURI(str)
console.log('AAA = ', a)
// AAA = https://www.baidu.com/s?returnURL=http://www.test.com/

let b = decodeURI(a)
console.log('BBB = ', b)
// BBB = https://www.baidu.com/s?returnURL=http://www.test.com/

let c = encodeURIComponent(str)
console.log('CCC = ', c)
// CCC = https%3A%2F%2Fwww.baidu.com%2Fs%3FreturnURL%3Dhttp%3A%2F%2Fwww.test.com%2F

let d = decodeURIComponent(str)
console.log('DDD = ', d)
// DDD = https://www.baidu.com/s?returnURL=http://www.test.com/
```





# 三、`Unicode编码` 与 `URL编码` 区别

在 JavaScript 中，**Unicode 编码**和**URL 编码**是两种不同的编码方式，它们各自用于不同的场景：

- **Unicode 编码**：用于处理和表示世界上各种字符的编码系统，是 JavaScript 内部使用的字符编码标准。每个字符都有一个唯一的 Unicode 码点，可以通过 `\u` 来表示。
- **URL 编码**：用于将非 ASCII 字符和特殊字符转换为合法的 URL 表示形式，以便在 URL 中传输。使用 `encodeURIComponent` 和 `decodeURIComponent` 方法来对字符串进行编码和解码。

这两种编码方式用于不同的场景，Unicode 编码解决的是字符表示问题，而 URL 编码解决的是 URL 中的字符传输问题。

