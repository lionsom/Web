* [prefers-color-scheme](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme)



# MDN prefers-color-scheme

**`prefers-color-scheme`** [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) [媒体特性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_media_queries/Using_media_queries#media_features)用于检测用户是否有将系统的主题色设置为亮色或者暗色。

## [语法](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme#语法)

- [`no-preference`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme#no-preference)

    表示系统未得知用户在这方面的选项。在[布尔值上下文](https://drafts.csswg.org/mediaqueries-5/#boolean-context)中，其执行结果为 `false`。

- [`light`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme#light)

    表示用户已告知系统他们选择使用浅色主题的界面。

- [`dark`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme#dark)

    表示用户已告知系统他们选择使用暗色主题的界面。

## [示例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme#示例)

这个例子使用了一个有黑色背景和白色文字的元素，当用户使用浅色主题时，会翻转黑白颜色。

### [HTML](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme#html)

```html
<div class="day">Day (initial)</div>
<div class="day light-scheme">Day (changes in light scheme)</div>
<div class="day dark-scheme">Day (changes in dark scheme)</div>
<br />

<div class="night">Night (initial)</div>
<div class="night light-scheme">Night (changes in light scheme)</div>
<div class="night dark-scheme">Night (changes in dark scheme)</div>
```

### [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme#css)

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```





# GPT

`prefers-color-scheme`是一个CSS媒体功能，用于检测用户系统的主题偏好（明亮模式或暗黑模式），从而让网站或应用可以根据用户的主题偏好选择相应的样式。

`prefers-color-scheme`可以接受三个值：

- `light`：表示用户偏好明亮模式。
- `dark`：表示用户偏好暗黑模式。
- `no-preference`：表示用户没有指定特定的主题偏好。

使用`prefers-color-scheme`，可以为不同主题模式下设置不同的样式，提供更好的用户体验。以下是一个示例：

```css
body {
  background-color: white;
  color: black;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
    color: white;
  }
}
```

在上面的示例中，我们首先为`body`元素设置了明亮模式下的样式（白色背景，黑色文字），然后通过`@media`查询和`prefers-color-scheme`媒体特性，为暗黑模式下设置了不同的样式（黑色背景，白色文字）。

通过使用`prefers-color-scheme`，我们可以让网站或应用根据用户系统的主题偏好自动调整样式，提供更加个性化和舒适的用户体验。这在支持主题切换的网站和应用中尤其有用。
