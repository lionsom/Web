在 **Cursor 编辑器** 中，**Emmet** 是一个强大的工具，可以帮助你通过缩写快速生成 HTML、CSS 和其他代码。Cursor 是基于 VS Code 的编辑器，因此 Emmet 的使用方式与 VS Code 完全相同。以下是关于如何在 Cursor 中使用 Emmet 展开缩写的详细指南。

---

### 1. **启用 Emmet**
默认情况下，Emmet 在 Cursor 中是启用的。如果你发现 Emmet 无法正常工作，可以检查以下设置：

#### 检查 Emmet 是否启用
1. 打开 Cursor 编辑器。
2. 按下 `Ctrl + ,`（Windows/Linux）或 `Cmd + ,`（Mac）打开设置。
3. 搜索 `emmet`，确保以下设置已启用：
   - `Emmet: Enabled`：设置为 `true`。
   - `Emmet: Trigger Expansion On Tab`：设置为 `true`（允许按 `Tab` 键展开缩写）。

---

### 2. **使用 Emmet 展开缩写**
在 Cursor 中，你可以通过以下步骤使用 Emmet 展开缩写：

#### (1) **HTML 缩写**
- 在 HTML 文件中输入 Emmet 缩写。
- 按下 `Tab` 键，缩写会自动展开为完整的 HTML 代码。

**示例**：
- 输入 `div.container>ul.list>li.item*3`，然后按 `Tab` 键。
- 展开结果：
  ```html
  <div class="container">
    <ul class="list">
      <li class="item"></li>
      <li class="item"></li>
      <li class="item"></li>
    </ul>
  </div>
  ```

#### (2) **CSS 缩写**
- 在 CSS 文件中输入 Emmet 缩写。
- 按下 `Tab` 键，缩写会自动展开为完整的 CSS 代码。

**示例**：
- 输入 `m10`，然后按 `Tab` 键。
- 展开结果：
  ```css
  margin: 10px;
  ```

#### (3) **其他语言的缩写**
Emmet 也支持其他语言（如 JavaScript、JSX 等），使用方法与 HTML 和 CSS 类似。

---

### 3. **常用 Emmet 缩写**
以下是一些常用的 Emmet 缩写示例：

#### (1) **HTML 缩写**
| 缩写            | 展开结果                               |
| --------------- | -------------------------------------- |
| `div`           | `<div></div>`                          |
| `div.container` | `<div class="container"></div>`        |
| `ul>li*3`       | `<ul><li></li><li></li><li></li></ul>` |
| `a[href="#"]`   | `<a href="#"></a>`                     |
| `form#login`    | `<form id="login"></form>`             |
| `input:text`    | `<input type="text" name="" id="">`    |

#### (2) **CSS 缩写**
| 缩写     | 展开结果              |
| -------- | --------------------- |
| `m10`    | `margin: 10px;`       |
| `p20-30` | `padding: 20px 30px;` |
| `bg#f00` | `background: #f00;`   |
| `w100p`  | `width: 100%;`        |
| `fz14`   | `font-size: 14px;`    |

#### (3) **高级缩写**
| 缩写                             | 展开结果                                                     |
| -------------------------------- | ------------------------------------------------------------ |
| `ul>li.item$*3`                  | `<ul><li class="item1"></li><li class="item2"></li><li class="item3"></li></ul>` |
| `div#header+div#main+div#footer` | `<div id="header"></div><div id="main"></div><div id="footer"></div>` |

---

### 4. **自定义 Emmet 缩写**
你可以自定义 Emmet 缩写，以满足个人或团队的开发需求。

#### (1) **添加自定义缩写**
1. 打开 Cursor 编辑器。
2. 按下 `Ctrl + ,`（Windows/Linux）或 `Cmd + ,`（Mac）打开设置。
3. 搜索 `Emmet: Abbreviations`。
4. 在 `settings.json` 中添加自定义缩写：
   ```json
   "emmet.variables": {
     "lang": "zh-CN"
   },
   "emmet.abbreviations": {
     "foo": "<div class='foo'></div>"
   }
   ```

#### (2) **使用自定义缩写**
- 输入自定义缩写（如 `foo`），然后按 `Tab` 键。
- 展开结果：
  ```html
  <div class="foo"></div>
  ```

---

### 5. **Emmet 的高级功能**
#### (1) **数学运算**
在缩写中使用数学运算：
- 输入 `ul>li.item$@-*3`，然后按 `Tab` 键。
- 展开结果：
  ```html
  <ul>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
  </ul>
  ```

#### (2) **嵌套缩写**
使用 `()` 进行嵌套：
- 输入 `div>(header>ul>li*2)+footer`，然后按 `Tab` 键。
- 展开结果：
  ```html
  <div>
    <header>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </header>
    <footer></footer>
  </div>
  ```

#### (3) **属性操作**
使用 `[]` 添加属性：
- 输入 `a[href="#" title="Home"]`，然后按 `Tab` 键。
- 展开结果：
  ```html
  <a href="#" title="Home"></a>
  ```

---

### 6. **注意事项**
- **语言支持**：确保当前文件的语言模式正确（如 HTML、CSS），Emmet 才能正常工作。
- **快捷键冲突**：如果 `Tab` 键无法展开缩写，检查是否有其他快捷键冲突。

---

### 总结
在 Cursor 编辑器中使用 Emmet 展开缩写可以显著提高开发效率。通过掌握常用的 Emmet 缩写和高级功能，你可以快速生成复杂的 HTML 和 CSS 代码。如果需要，还可以自定义缩写以满足特定需求。