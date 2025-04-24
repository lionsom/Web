# HTML `<html>` 标签详解

`<html>` 标签是 HTML 文档的**根元素**，所有其他 HTML 元素（除了 `<!DOCTYPE>` 声明）都必须包含在其中。它是网页结构的顶层容器。

## 基本语法

```html
<!DOCTYPE html>
<html lang="语言代码">
  <head>...</head>
  <body>...</body>
</html>
```

## 核心属性

### 1. `lang` 属性

根据HTML5规范：

> 应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉他们应该怎么去发音和翻译。

更多关于`lang`属性的说明[在这里](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element)；

在sitepoint上可以查到[语言列表](http://reference.sitepoint.com/html/lang-codes)；

但sitepoint给出了但是语言的大类，例如中文只给出了zh，没有区分香港、台湾、大陆。而微软则给出了一个更[详细的语言列表](http://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx)，其中详细说明了zh-cn、zh-hk、zh-tw。

- **作用**：定义文档的主要语言

- **示例**：
  
  ```html
  <html lang="zh-CN">  <!-- 简体中文 -->
  <html lang="en-US">  <!-- 美式英语 -->
  ```
  
- **重要性**：影响屏幕阅读器、搜索引擎和浏览器行为

### 2. `xmlns` 属性 (XHTML 需要)
- **作用**：定义 XML 命名空间
- **示例**：
  ```html
  <html xmlns="http://www.w3.org/1999/xhtml">
  ```
- **注意**：普通 HTML5 文档不需要此属性

## 功能特点

1. **文档容器**：
   - 包含整个 HTML 文档内容
   - 只有两个直接子元素：`<head>` 和 `<body>`

2. **语言声明**：
   - 通过 `lang` 属性实现国际化支持
   - 影响翻译工具、拼写检查等功能

3. **浏览器解析**：
   - 帮助浏览器识别文档类型
   - 与 `<!DOCTYPE>` 声明配合确定渲染模式

## 最佳实践

1. **必须包含**：所有 HTML 文档必须有 `<html>` 标签
2. **语言声明**：始终添加正确的 `lang` 属性
3. **结构清晰**：
   ```html
   <!DOCTYPE html>
   <html lang="zh-CN">
     <head>
       <!-- 元数据 -->
     </head>
     <body>
       <!-- 可见内容 -->
     </body>
   </html>
   ```
4. **XHTML 兼容**：如需 XHTML 兼容，添加 XML 命名空间

## 注意事项

- 现代 HTML5 中，`<html>` 开始和结束标签可以省略（但不推荐）
- 但 `lang` 属性建议始终明确声明
- 在 XML 序列化中（如 XHTML），必须包含 `<html>` 标签

`<html>` 标签作为文档根元素，虽然简单，但为整个网页提供了基础结构和重要上下文信息。