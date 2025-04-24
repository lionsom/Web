在 HTML 文件中，`<link>` 和 `<script>` 标签的放置位置会影响页面的加载性能和渲染行为。以下是它们的推荐放置位置及原因：

---

# 一、`<link>` 标签
`<link>` 标签通常用于引入外部资源，如 CSS 文件、图标等。

## 1. 推荐位置：`<head>` 标签内
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- 推荐将 <link> 放在 <head> 中 -->
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
</head>
<body>
  <!-- 页面内容 -->
</body>
</html>
```

## 2. 原因
- **尽早加载 CSS**：将 CSS 文件放在 `<head>` 中可以让浏览器尽早加载样式，避免页面渲染时出现无样式内容（FOUC，Flash of Unstyled Content）。
- **符合标准**：HTML 规范建议将 `<link>` 放在 `<head>` 中。

---



# 二、`<script>` 标签

`<script>` 标签用于引入 JavaScript 文件或编写内联 JavaScript 代码。它的放置位置会影响页面的加载和渲染。

## **1. 普通 `<script>` 标签**
- **推荐位置：`<body>` 标签的底部（`</body>` 之前）**
  
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <!-- 页面内容 -->
    <!-- 推荐将普通 <script> 放在 <body> 底部 -->
    <script src="app.js"></script>
  </body>
  </html>
  ```
  
- **原因：**
  - **避免阻塞渲染**：浏览器在解析到 `<script>` 标签时会暂停 HTML 解析，直到脚本下载并执行完毕。将 `<script>` 放在底部可以确保页面内容先渲染出来，提升用户体验。
  - **确保 DOM 已加载**：如果脚本需要操作 DOM，放在底部可以保证 DOM 已经完全加载。

## **2. 异步 `<script>` 标签**
- 如果脚本不需要立即执行，可以使用 `async` 或 `defer` 属性。
  - **`async`**：脚本异步加载，加载完成后立即执行。
    ```html
    <script src="app.js" async></script>
    ```
  - **`defer`**：脚本异步加载，但会等到 HTML 解析完成后才执行。
    ```html
    <script src="app.js" defer></script>
    ```

- **推荐位置：`<head>` 中**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 推荐将带有 async 或 defer 的 <script> 放在 <head> 中 -->
    <script src="app.js" async></script>
  </head>
  <body>
    <!-- 页面内容 -->
  </body>
  </html>
  ```

- **原因：**
  - **异步加载**：`async` 和 `defer` 不会阻塞 HTML 解析，适合放在 `<head>` 中以便尽早开始加载。

## **3. 内联 `<script>` 标签**
- 如果是内联脚本（直接写在 HTML 中的 JavaScript 代码），可以根据需要放在 `<head>` 或 `<body>` 中。
  - 如果脚本需要在页面加载时立即执行，可以放在 `<head>` 中。
  - 如果脚本需要操作 DOM，建议放在 `<body>` 底部。

---

# **三、总结**
| 标签类型        | 推荐位置                          | 原因                                |
| --------------- | --------------------------------- | ----------------------------------- |
| `<link>`        | `<head>` 中                       | 尽早加载 CSS，避免无样式内容闪烁。  |
| 普通 `<script>` | `<body>` 底部（`</body>` 前）     | 避免阻塞页面渲染，确保 DOM 已加载。 |
| 异步 `<script>` | `<head>` 中                       | 异步加载，不阻塞渲染。              |
| 内联 `<script>` | 根据需要放在 `<head>` 或 `<body>` | 根据脚本的执行时机和需求决定。      |

通过合理放置 `<link>` 和 `<script>` 标签，可以优化页面的加载性能和用户体验。