# HTML `<script>` 标签详解

`<script>` 标签用于在 HTML 文档中嵌入或引用 **JavaScript 代码**，是网页实现交互功能的核心元素。

## 基本语法

```html
<script [属性]>
  // JavaScript代码
</script>

<!-- 或引用外部文件 -->
<script src="script.js" [其他属性]></script>
```

## 核心属性

| 属性          | 说明                               | 示例                      |
| ------------- | ---------------------------------- | ------------------------- |
| `src`         | 外部脚本URL                        | `src="app.js"`            |
| `type`        | 脚本类型（默认`text/javascript`）  | `type="module"`           |
| `async`       | 异步加载（下载不阻塞，执行仍阻塞） | `<script async>`          |
| `defer`       | 延迟执行（文档解析后执行）         | `<script defer>`          |
| `crossorigin` | 跨域请求处理                       | `crossorigin="anonymous"` |
| `integrity`   | 子资源完整性校验（SRI）            | `integrity="sha256-..."`  |

## 主要使用方式

### 1. 内联脚本
```html
<script>
  alert('页面加载中...');
  function sayHello() {
    console.log('Hello!');
  }
</script>
```

### 2. 外部脚本
```html
<!-- 基础引用 -->
<script src="app.js"></script>

<!-- 模块化脚本（ES6模块） -->
<script type="module" src="module.js"></script>

<!-- 兼容旧浏览器的模块 -->
<script nomodule src="fallback.js"></script>
```

### 3. 动态加载
```javascript
// 使用JavaScript动态创建
const script = document.createElement('script');
script.src = 'dynamic.js';
document.head.appendChild(script);
```

## 加载行为控制

| 加载方式        | 执行时机        | 是否阻塞HTML解析     | 顺序保证   |
| --------------- | --------------- | -------------------- | ---------- |
| **无属性**      | 遇到立即执行    | 阻塞                 | 按出现顺序 |
| `async`         | 下载完立即执行  | 下载不阻塞，执行阻塞 | 无顺序     |
| `defer`         | 文档解析后执行  | 不阻塞               | 按出现顺序 |
| `type="module"` | 默认类似`defer` | 不阻塞               | 按出现顺序 |

## 现代最佳实践

1. **默认使用 defer**
   ```html
   <script src="app.js" defer></script>
   ```

2. **ES模块化开发**
   ```html
   <script type="module">
     import { func } from './module.js';
   </script>
   ```

3. **性能优化组合**
   ```html
   <!-- 现代浏览器 -->
   <script type="module" src="modern.js"></script>
   <!-- 旧浏览器回退 -->
   <script nomodule src="legacy.js" defer></script>
   ```

4. **安全增强**
   ```html
   <script 
     src="https://cdn.example/lib.js"
     crossorigin="anonymous"
     integrity="sha384-...">
   </script>
   ```

## 注意事项

1. **文档位置**：
   - 传统：放在`<body>`底部（减少渲染阻塞）
   - 现代：使用`defer`可放在`<head>`

2. **XHTML要求**：
   ```html
   <script type="text/javascript">
   //<![CDATA[
     alert("Hello");
   //]]>
   </script>
   ```

3. **MIME类型**：
   - 现代浏览器默认支持`text/javascript`
   - 传统需要明确声明`type="text/javascript"`

4. **已废弃属性**：
   - `language`（如`language="JavaScript"`）
   - `xml:space`

## 完整示例

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>脚本示例</title>
  
  <!-- 使用defer的非关键脚本 -->
  <script src="analytics.js" defer></script>
  
  <!-- 预加载重要脚本 -->
  <link rel="preload" href="critical.js" as="script">
</head>
<body>
  <!-- 页面内容 -->
  
  <!-- 内联脚本 -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM已加载');
    });
  </script>
  
  <!-- 关键功能脚本 -->
  <script src="critical.js"></script>
  
  <!-- ES模块 -->
  <script type="module">
    import { init } from './app.js';
    init();
  </script>
  
  <!-- 旧浏览器回退 -->
  <script nomodule src="legacy-bundle.js"></script>
</body>
</html>
```

`<script>` 标签是现代Web开发的基石，合理使用其加载策略可以显著提升页面性能，而ES模块的支持更是带来了现代化的JavaScript开发体验。