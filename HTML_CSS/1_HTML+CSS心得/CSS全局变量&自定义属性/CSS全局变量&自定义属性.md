* [:root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
* [自定义属性（--*）：CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)



# :root

**`:root`** 这个 CSS [伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)匹配文档树的根元素。对于 HTML 来说，**`:root`** 表示 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/html) 元素，除了[优先级](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity)更高之外，与 `html` 选择器相同。

```css
/* 选择文档的根元素（HTML 中的 <html>） */
:root {
  background: yellow;
}
```

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root#语法)

```css
:root {
  /* ... */
}
```

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root#示例)

### [声明全局 CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root#声明全局_css_变量)

在声明全局 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*)时 **`:root`** 会很有用：

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```



## GPT

在CSS中，`:root`伪类用于选择文档的根元素，在HTML文档中通常是`<html>`元素。通过`:root`伪类，可以方便地定义全局的CSS变量（也称为CSS自定义属性），这些变量可以在整个文档中使用。

下面是一个示例，展示如何使用`:root`伪类定义全局的CSS变量：

```css
:root {
  --main-color: #ff0000;
  --font-size: 16px;
}

body {
  color: var(--main-color);
  font-size: var(--font-size);
}

h1 {
  font-size: calc(var(--font-size) * 1.5);
}
```

在上面的示例中，通过`:root`伪类定义了两个全局的CSS变量`--main-color`和`--font-size`，分别表示主要颜色和字体大小。在`body`和`h1`元素的样式中，使用`var()`函数来引用这些变量，从而实现全局的样式控制。

使用`:root`伪类定义全局的CSS变量可以让样式更具灵活性和可维护性，可以在整个文档中方便地调整样式变量的值，而不需要一个个地修改每个元素的样式。





# CSS变量

带有前缀 `--` 的属性名，比如 `--example--name`，表示的是带有值的自定义属性，其可以通过 [`var()`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var) 函数在全文档范围内复用的。

CSS 自定义属性是可以级联的：每一个自定义属性可以多次出现，并且变量的值将会借助级联算法和自定义属性值运算出来。



## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*#语法)

```
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- [`declaration-value`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*#declaration-value)

    这个值将会由一个或者多个语法执行出来，只要这些语法是正确合理的，不包含非法语句。这个值就理应是有效语法执行出来的值。

* **备注：** 自定义属性名区分大小写——`--my-color` 会被视为与 `--My-color` 不同的自定义属性。



## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*#示例)

### [HTML](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*#html)

HTMLPlayCopy to Clipboard

```
<p id="firstParagraph">此段落应有蓝色背景和黄色文本。</p>
<p id="secondParagraph">此段落应有黄色背景和蓝色文本。</p>
<div id="container">
  <p id="thirdParagraph">此段落应有绿色背景和黄色文本。</p>
</div>
```

### [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS/--*#css)

CSSPlayCopy to Clipboard

```css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #48ff32;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```





## GPT

CSS变量（Custom Properties）是一种在CSS中定义和使用的变量，它们可以存储和重用值，使得样式表更加灵活和可维护。CSS变量以`--`开头，并在需要使用时通过`var()`函数引用。

定义CSS变量的语法如下：

```css
:root {
  --main-color: #ff0000;
  --font-size: 16px;
}
```

在上面的示例中，我们在`:root`伪类中定义了两个CSS变量`--main-color`和`--font-size`，分别表示主要颜色和字体大小。

使用CSS变量的语法如下：

```css
body {
  color: var(--main-color);
  font-size: var(--font-size);
}
```

在上面的示例中，我们在`body`元素的样式中使用了`var()`函数来引用之前定义的CSS变量，从而将`color`属性和`font-size`属性设置为CSS变量中存储的值。

通过使用CSS变量，我们可以实现以下几点好处：

- 提高代码的可维护性和重用性。
- 可以在不同元素中轻松地重用颜色、字体大小等数值。
- 可以动态地改变CSS变量的值，从而实现主题切换或响应式设计。

总之，CSS变量是一种非常有用的功能，可以帮助我们更好地管理和应用样式。
