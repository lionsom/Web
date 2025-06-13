# HTML `<meta>` 标签详解

`<meta>` 标签是 HTML 文档中用于提供网页元数据（metadata）的重要元素，它位于文档的 `<head>` 部分，不会直接显示在页面上，但对网页的显示、搜索引擎优化（SEO）和行为有重要影响。

## 基本语法

```html
<meta name="属性名" content="属性值">
<!-- 或 -->
<meta http-equiv="属性名" content="属性值">
<!-- 或 -->
<meta charset="字符编码">
```

## 主要用途分类

### 1. 字符编码声明
```html
<meta charset="UTF-8">
```
- 定义文档的字符编码
- 必须放在 `<head>` 的最前面
- 现代网页推荐使用 UTF-8 编码

### 2. 视口(viewport)设置
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- 控制移动设备上的显示方式
- 常用属性值：
  - `width=device-width` - 宽度等于设备宽度
  - `initial-scale=1.0` - 初始缩放比例为1
  - `maximum-scale=1.0` - 最大缩放比例
  - `user-scalable=no` - 禁止用户缩放

### 3. 搜索引擎优化(SEO)
```html
<meta name="description" content="网页描述内容">
<meta name="keywords" content="关键词1, 关键词2, 关键词3">
<meta name="author" content="作者名">
<meta name="robots" content="index,follow">
```
- `description`：网页描述，搜索引擎结果中常显示
- `keywords`：网页关键词（现代搜索引擎已不太重视）
- `author`：文档作者
- `robots`：控制搜索引擎爬虫行为
  - `index`/`noindex` - 是否允许索引
  - `follow`/`nofollow` - 是否跟踪链接

### 4. HTTP头部信息模拟
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="refresh" content="5;url=https://example.com">
```
- `X-UA-Compatible`：强制IE使用最新渲染模式
- `refresh`：自动刷新或跳转（慎用，可能影响用户体验）

### 5. 社交媒体分享优化
```html
<!-- Open Graph (Facebook等) -->
<meta property="og:title" content="页面标题">
<meta property="og:description" content="页面描述">
<meta property="og:image" content="图片URL">
<meta property="og:url" content="页面URL">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="页面标题">
<meta name="twitter:description" content="页面描述">
<meta name="twitter:image" content="图片URL">
```

### 6. 其他常用meta标签
```html
<!-- 禁止电话号码自动识别 -->
<meta name="format-detection" content="telephone=no">

<!-- 禁止邮箱地址自动识别 -->
<meta name="format-detection" content="email=no">

<!-- 禁止Safari浏览器自动将数字识别为电话号码 -->
<meta name="format-detection" content="telephone=no">

<!-- 设置主题颜色(主要影响移动浏览器) -->
<meta name="theme-color" content="#4285f4">

<!-- 禁止百度转码 -->
<meta http-equiv="Cache-Control" content="no-siteapp">
```

## 最佳实践建议

1. 必须包含字符编码声明
2. 移动端必须设置viewport
3. 为SEO提供有意义的description
4. 社交媒体分享时使用Open Graph协议
5. 避免过多的meta标签，只包含必要的
6. 避免使用自动刷新/跳转，除非有特殊需求

## 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="这是一个关于HTML meta标签的详细介绍页面">
    <meta name="keywords" content="HTML,meta标签,SEO,网页开发">
    <meta name="author" content="Web开发团队">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://example.com/meta-tags/">
    <meta property="og:title" content="HTML Meta标签详解">
    <meta property="og:description" content="学习如何使用HTML meta标签优化您的网页">
    <meta property="og:image" content="https://example.com/images/meta-tags.jpg">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="HTML Meta标签详解">
    <meta name="twitter:description" content="学习如何使用HTML meta标签优化您的网页">
    <meta name="twitter:image" content="https://example.com/images/meta-tags.jpg">
    
    <title>HTML Meta标签详解</title>
</head>
<body>
    <!-- 页面内容 -->
</body>
</html>
```

通过合理使用 `<meta>` 标签，可以显著提升网页的可用性、可访问性和在搜索引擎中的表现。