# HTML `<link>` 标签详解

`<link>` 标签是 HTML 中用于**定义当前文档与外部资源关系**的空元素（没有闭合标签），通常位于文档的 `<head>` 部分。

## 基本语法

```html
<link rel="关系类型" href="资源URL" [其他属性]>
```

## 主要用途

### 1. 引入CSS样式表（最常用）
```html
<link rel="stylesheet" href="styles.css">
```

### 2. 引入网站图标（favicon）
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon" href="icon.png"> <!-- iOS设备 -->
```

### 3. 预加载资源（性能优化）
```html
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
```

### 4. 定义规范URL（SEO优化）
```html
<link rel="canonical" href="https://example.com/main-page">
```

### 5. 其他关系类型
```html
<link rel="alternate" hreflang="en" href="https://example.com/en">
<link rel="dns-prefetch" href="//cdn.example.com">
```

## 关键属性

| 属性             | 说明           | 示例                              |
| ---------------- | -------------- | --------------------------------- |
| `rel` (必需)     | 定义链接关系   | `stylesheet`, `icon`, `preload`   |
| `href` (必需)    | 资源URL        | `"styles.css"`                    |
| `type`           | 资源MIME类型   | `"text/css"`, `"image/x-icon"`    |
| `media`          | 应用媒体的条件 | `"print"`, `"(max-width: 600px)"` |
| `as` (预加载用)  | 资源类型       | `"font"`, `"script"`, `"image"`   |
| `crossorigin`    | 跨域请求处理   | `"anonymous"`                     |
| `sizes` (图标用) | 图标尺寸       | `"32x32"`, `"any"`                |

## 现代浏览器支持的高级用法

### 1. 响应式加载（根据设备条件）
```html
<link rel="stylesheet" href="mobile.css" media="(max-width: 768px)">
```

### 2. 多格式图标适配
```html
<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="alternate icon" href="favicon.ico" type="image/x-icon">
```

### 3. 资源预连接（加速第三方资源）
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
```

### 4. 模块预加载
```html
<link rel="modulepreload" href="app.js">
```

## 最佳实践

1. **CSS优先**：将CSS链接放在`<head>`顶部（避免渲染阻塞）
2. **预加载关键资源**：对首屏关键资源使用`preload`
3. **图标优化**：提供多种格式的favicon
4. **跨域资源**：使用`crossorigin`属性正确加载CDN资源
5. **类型声明**：始终包含`type`属性（特别是非CSS资源）

## 完整示例

```html
<head>
  <!-- 主CSS -->
  <link rel="stylesheet" href="main.css" type="text/css">
  
  <!-- 打印样式 -->
  <link rel="stylesheet" href="print.css" media="print">
  
  <!-- 网站图标 -->
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  
  <!-- 预加载关键资源 -->
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="hero-image.jpg" as="image">
  
  <!-- SEO优化 -->
  <link rel="canonical" href="https://example.com/current-page">
  
  <!-- 多语言版本 -->
  <link rel="alternate" hreflang="en" href="https://example.com/en">
  <link rel="alternate" hreflang="es" href="https://example.com/es">
</head>
```

`<link>` 标签是构建现代高性能网页的关键元素，合理使用可以显著提升页面加载速度、SEO效果和用户体验。