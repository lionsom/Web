# CSS 属性顺序最佳实践

良好的 CSS 属性排序可以提高代码的可读性、维护性和团队协作效率。以下是推荐的 CSS 属性分类和排序方法：

## 推荐属性分类顺序

### 1. 布局属性 (Layout)
```css
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 10;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
float: left;
clear: both;
overflow: hidden;
visibility: hidden;
```

### 2. 盒模型属性 (Box Model)
```css
width: 100px;
height: 100px;
margin: 10px;
padding: 10px;
border: 1px solid #000;
border-radius: 5px;
box-sizing: border-box;
box-shadow: 0 2px 5px rgba(0,0,0,0.1);
```

### 3. 文本与排版 (Typography)
```css
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
line-height: 1.5;
color: #333;
text-align: center;
text-decoration: none;
text-transform: uppercase;
letter-spacing: 1px;
white-space: nowrap;
```

### 4. 视觉效果 (Visual)
```css
background-color: #fff;
background-image: url(image.jpg);
background-repeat: no-repeat;
background-position: center;
opacity: 0.8;
filter: blur(2px);
transition: all 0.3s ease;
transform: rotate(45deg);
```

### 5. 其他属性 (Miscellaneous)
```css
cursor: pointer;
pointer-events: none;
user-select: none;
resize: none;
```

## 为什么要有顺序？

1. **可读性**：相关属性分组，便于快速定位
2. **可维护性**：减少合并冲突，团队协作更顺畅
3. **性能**：某些浏览器对特定顺序的解析更高效
4. **一致性**：统一代码风格，降低认知负担

## 实用排序工具

1. **VS Code 插件**：
   - [CSScomb](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb)
   - [Sort CSS](https://marketplace.visualstudio.com/items?itemName=PeterMekhaeil.vscode-sort-css-properties)

2. **在线工具**：
   - [CSS Property Sorter](https://www.cleancss.com/css-sort/)
   - [CSScomb Online](https://csscomb.com/online)

3. **构建工具插件**：
   - PostCSS 的 [postcss-sorting](https://github.com/hudochenkov/postcss-sorting)
   - Stylelint 的 [stylelint-order](https://github.com/hudochenkov/stylelint-order)

## 示例代码

```css
/* 推荐的属性顺序示例 */
.button {
  /* 布局属性 */
  position: relative;
  display: inline-block;
  z-index: 1;
  
  /* 盒模型 */
  width: 120px;
  height: 40px;
  margin: 10px 0;
  padding: 0 15px;
  border: 2px solid #3498db;
  border-radius: 4px;
  
  /* 文本属性 */
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 40px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  
  /* 视觉效果 */
  background-color: #3498db;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: all 0.3s ease;
  
  /* 其他 */
  cursor: pointer;
  user-select: none;
}
```

## 团队协作建议

1. **制定规范**：团队统一采用同一种排序方式
2. **工具辅助**：配置编辑器自动排序
3. **代码审查**：在PR中检查属性顺序
4. **文档记录**：将规范写入团队开发文档

记住，属性顺序没有绝对的对错，最重要的是保持一致性。选择一种适合你团队的方式并坚持使用。