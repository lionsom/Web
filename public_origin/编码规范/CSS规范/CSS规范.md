* [百度CSS规范指南](https://github.com/ecomfe/spec/blob/master/css-style-guide.md)
* [腾讯CSS规范指南](http://alloyteam.github.io/CodeGuide/#css)
* [Google CSS规范指南](http://iischajn.github.io/trans/htmlcss-guide/)





## 分号

每个属性声明后面都要加分号。



## 命名

1. 不使用id选择器
2. 适用有意义的名词命名
3. 单词全部小写，名词超过1个时，使用`-`分隔符



## 属性顺序

* 原则：**整体到局部，外部到内部，重要属性优先**
    1. 布局相关(display, position, float, overflow, clear)，因为元素的布局会对对相邻元素产生影响，自身甚至会脱离原来的文档流，所以比较重要。
    2. 盒模型相关(width, height, margin, padding)
    3. 外观 (color, background, border, box-shadow)
    4. 文字排版 (font-size, font-family, text-align, text-transform)
    5. 其他 (cursor, z-index)


```css
/* bad */
 .box {
  font-family: 'Arial', sans-serif;
  border: 3px solid #ddd;
  left: 30%;
  position: absolute;
  text-transform: uppercase;
  background-color: #eee;
  right: 30%;
  isplay: block;
  font-size: 1.5rem;
  overflow: hidden;
  padding: 1em;
  margin: 1em;
}

/* good */
.box {
  display: block;
  position: absolute;
  left: 30%;
  right: 30%;
  overflow: hidden;
  
  margin: 1em;
  padding: 1em;
  
  background-color: #eee;
  border: 3px solid #ddd;
  font-family: 'Arial', sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
}
```



## prettier

使用prettier格式化工具约束，推荐配置如下：

- 格式自动化
- 4个缩进
- 全部单引号
- 属性`:`后有空格
- 颜色全部小写
- 小数点前面0自动添加

```js
module.exports = {
    printWidth: 100, // 设置prettier单行输出（不折行）的（最大）长度

    tabWidth: 4, // 设置工具每一个水平缩进的空格数

    useTabs: false, // 使用tab（制表位）缩进而非空格

    semi: false, // 在语句末尾添加分号

    singleQuote: true, // 使用单引号而非双引号

    trailingComma: 'none', // 在任何可能的多行中输入尾逗号

    bracketSpacing: true, // 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格

    arrowParens: 'avoid', // 为单行箭头函数的参数添加圆括号，参数个数为1时可以省略圆括号

    // parser: 'babylon', // 指定使用哪一种解析器

    jsxBracketSameLine: true, // 在多行JSX元素最后一行的末尾添加 > 而使 > 单独一行（不适用于自闭和元素）

    rangeStart: 0, // 只格式化某个文件的一部分

    rangeEnd: Infinity, // 只格式化某个文件的一部分

    filepath: 'none', // 指定文件的输入路径，这将被用于解析器参照

    requirePragma: false, // (v1.7.0+) Prettier可以严格按照按照文件顶部的一些特殊的注释格式化代码，这些注释称为“require pragma”(必须杂注)

    insertPragma: false, //  (v1.8.0+) Prettier可以在文件的顶部插入一个 @format的特殊注释，以表明改文件已经被Prettier格式化过了。

    proseWrap: 'preserve' // (v1.8.2+)
}
```



