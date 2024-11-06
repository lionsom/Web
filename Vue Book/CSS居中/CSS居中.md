# CSS居中

在 Vue 3 中，CSS 居中元素有多种方案，取决于你想要**水平居中**、**垂直居中**，或**水平垂直同时居中**。以下是几种常用的居中方案：

## 1. 使用 `flex` 布局

这是最推荐的方法，`flex` 布局支持内容在容器内灵活居中，适合各种场景。

```html
<template>
  <div class="flex-center">
    <p>居中内容</p>
  </div>
</template>

<style scoped>
.flex-center {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  height: 100vh;           /* 视口高度居中 */
}
</style>
```

## 2. 使用 `grid` 布局

`grid` 布局也支持居中，适合一些复杂布局的场景。

```html
<template>
  <div class="grid-center">
    <p>居中内容</p>
  </div>
</template>

<style scoped>
.grid-center {
  display: grid;
  place-items: center; /* 水平和垂直居中 */
  height: 100vh;
}
</style>
```

## 3. 使用 `position` + `transform`

这种方法可以将绝对定位的元素进行居中，对现代浏览器兼容性较好。

```html
<template>
  <div class="position-center">
    <p>居中内容</p>
  </div>
</template>

<style scoped>
.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 水平和垂直居中 */
  width: 200px; /* 内容宽度可根据需要设置 */
  height: 100px; /* 内容高度可根据需要设置 */
}
</style>
```

## 4. 使用 `margin: auto`（水平居中）

`margin: auto` 是水平居中的经典方法，适用于块级元素，前提是元素有固定宽度。

```html
<template>
  <div class="margin-center">
    <p>水平居中内容</p>
  </div>
</template>

<style scoped>
.margin-center {
  width: 200px;  /* 固定宽度 */
  margin: 0 auto;
}
</style>
```

## 5. 使用 `text-align: center`（仅用于文本）

对于水平居中对齐的文本或行内元素，可以使用 `text-align: center`。

```html
<template>
  <div class="text-center">
    <p>水平居中的文本</p>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
</style>
```

## 6. 使用 `line-height`（适合单行文本的垂直居中）

对于单行文本可以利用 `line-height` 设置垂直居中。

```html
<template>
  <div class="line-height-center">
    单行垂直居中
  </div>
</template>

<style scoped>
.line-height-center {
  height: 100px;         /* 容器高度 */
  line-height: 100px;    /* 与容器高度相等 */
  text-align: center;    /* 水平居中 */
}
</style>
```

## 7. 使用 `table-cell`（兼容旧版浏览器）

对于一些旧版浏览器，`display: table-cell` 是一个不错的选择。

```html
<template>
  <div class="table-cell-center">
    <p>居中内容</p>
  </div>
</template>

<style scoped>
.table-cell-center {
  display: table-cell;
  vertical-align: middle; /* 垂直居中 */
  text-align: center;     /* 水平居中 */
  height: 100vh;
  width: 100vw;
}
</style>
```

## 小结

| 方法                     | 场景                 | 适用范围       |
| ------------------------ | -------------------- | -------------- |
| `flex` 布局              | 水平和垂直居中       | 常用，推荐     |
| `grid` 布局              | 水平和垂直居中       | 常用，推荐     |
| `position` + `transform` | 绝对定位居中         | 绝对定位元素   |
| `margin: auto`           | 水平居中（块级元素） | 固定宽度元素   |
| `text-align: center`     | 水平居中文本         | 文本或行内元素 |
| `line-height`            | 单行文本垂直居中     | 单行文本       |
| `table-cell`             | 水平和垂直居中       | 兼容旧版浏览器 |

在 Vue 项目中，`flex` 和 `grid` 布局较为现代、灵活，优先推荐。