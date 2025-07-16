# 一、HTML `<style>` 标签详解

`<style>` 标签用于在 HTML 文档中嵌入 **CSS 样式表**，通常放置在文档的 `<head>` 部分（但也可以出现在文档其他位置）。

## 1. 基本语法 + 书写位置

```html
<style [type="text/css"] [media="媒体查询"] [scoped]>
  /* CSS 样式规则 */
  selector {
    property: value;
  }
</style>
```

**书写位置**

结论：**`你的 <style> 最好写在 <head> 标签内，和 <title>、<script> 等标签并列。`**

1. 推荐位置：写在 `<head>` 标签内

这是最标准、最推荐的做法。这样样式会在页面内容渲染前就被加载，避免页面闪烁或样式失效。例如：

```html
<head>
    <!-- 其他内容 -->
    <style>
    	/* 你的样式 */
    </style>
</head>
```

2. 也可以写在 `<body>` 内，但不推荐

虽然浏览器允许你在 `<body>` 里写 `<style>`，但这样做不规范，可能导致样式应用延迟或维护混乱。只有在特殊场景（如动态插入样式）时才这样做。

* 动态插入样式示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>动态插入样式示例</title>
</head>
<body>
  <button id="changeColorBtn">点击变色</button>

  <script>
    document.getElementById('changeColorBtn').onclick = function() {
      // 创建 style 标签
      var style = document.createElement('style');
      style.innerHTML = `
        body {
          background: #ffe4b5;
        }
        button {
          color: red;
        }
      `;
      // 插入到 body 末尾
      document.body.appendChild(style);
    }
  </script>
</body>
</html>
```



## 2. 核心属性

| 属性     | 说明                                       | 示例                                            |
| -------- | ------------------------------------------ | ----------------------------------------------- |
| `type`   | 指定样式语言（默认为 `text/css`）          | `type="text/css"`                               |
| `media`  | 指定样式应用的媒体/设备条件                | `media="print"` 或 `media="(max-width: 600px)"` |
| `scoped` | 限制样式只作用于父元素及其子元素（已废弃） | `<style scoped>`                                |

## 3. 主要特点

1. **文档内嵌样式**：直接在HTML中编写CSS，无需外部文件
2. **渲染阻塞**：浏览器会暂停渲染直到样式表解析完成
3. **优先级**：与外部CSS具有相同优先级（遵循CSS层叠规则）

## 4. 使用示例

### a. 基础用法
```html
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
    }
    h1 {
      color: #333;
    }
  </style>
</head>
```

### b. 带媒体查询
```html
<style media="(max-width: 768px)">
  .sidebar {
    display: none;
  }
</style>
```

### c. 多类型样式（较少使用）
```html
<style type="text/css">
  /* 传统CSS */
</style>

<style type="text/less">
  /* LESS语法（需配合LESS解析器） */
</style>
```

## 5. 注意事项

1. **性能影响**：
   - 大段CSS代码应使用外部样式表（`.css`文件）
   - 适用于少量页面专用样式

2. **最佳实践**：
   ```html
   <!-- 推荐：添加type属性保证兼容性 -->
   <style type="text/css">
     /* 样式内容 */
   </style>
   
   <!-- 现代浏览器可简写 -->
   <style>
     /* 样式内容 */
   </style>
   ```

3. **替代方案**：
   - 行内样式（`style`属性）：仅限单个元素
   - 外部样式表：`<link rel="stylesheet" href="styles.css">`

4. **已废弃特性**：
   - `scoped` 属性（曾用于限定样式作用域）已被移除

## 6. 现代用法建议

1. **关键CSS内嵌**：首屏关键样式可内联提升加载速度
2. **配合工具使用**：Webpack等工具可自动提取CSS
3. **CSS-in-JS**：React等框架推荐使用Styled Components等方案

## 7. 完整示例

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>样式表示例</title>
  <style type="text/css">
    /* 全局样式 */
    body {
      background-color: #f5f5f5;
      line-height: 1.6;
    }
    
    /* 打印样式 */
    @media print {
      nav, footer {
        display: none;
      }
    }
  </style>
  
  <!-- 响应式样式 -->
  <style media="(max-width: 600px)">
    .container {
      padding: 10px;
    }
  </style>
</head>
<body>
  <!-- 内容区 -->
  
  <!-- 特定模块样式（不推荐，仅演示） -->
  <div class="widget">
    <style>
      .widget {
        border: 1px solid #ddd;
      }
    </style>
    Widget内容
  </div>
</body>
</html>
```

`<style>` 标签作为HTML与CSS结合的重要方式，适用于小型样式定义和特殊场景，但在大型项目中建议优先使用外部样式表以保持代码可维护性。