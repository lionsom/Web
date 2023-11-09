

Chinese(Simplified)(简体中文) Language Pack for Visual Studio Code



Auto Close Tag（自动补全html标签）



Auto Rename Tag （修改html标签，自动完成尾部闭合标签的同步修改）



Code Runner



Open In Browser

这个插件能让你从 vscode 打开 html 文件，并且可以自由选择用哪个浏览器打开
VS Code不像IDE一样能够直接在浏览器中打开html，而该插件支持快捷键与鼠标右键快速在浏览器中打开html文件，支持自定义打开指定的浏览器，包括：Firefox，Chrome，Opera，IE以及Safari设置默认浏览器



#### Open In Default Browser





#### Vetur

语法错误检查：包括 CSS、LESS、JavaScript、TypeScript
语法高亮：包括HTML、Pug CSS、LESS、Stylus JS、TS emmet
代码自动补全（目前还是初级阶段）：包括HTML、CSS、LESS、JavaScript、TypeScript



##  Volar

相信使用 VSCode 开发 Vue2 的同学一定对 Vetur 插件不会陌生，作为 Vue2 配套的 VSCode 插件，它的主要作用是对 Vue 单文件组件提供高亮、语法支持以及语法检测。

而随着 Vue3 正式版发布，Vue 团队官方推荐Volar 插件来代替 Vetur 插件，不仅支持 Vue3 语言高亮、语法检测，还支持 TypeScript 和基于vue-tsc 的类型检查功能。



**使用时需要注意：**

首先要禁用 Vetur 插件，避免冲突；

推荐使用css /less /scss 作为<style> 的语言，因为这些基于vscode-css-language 服务提供了可靠的语言支持；

如果使用postcss /stylus /sass 的话，需要安装额外的语法高亮扩展。postcss 使用language-postcss，stylus 使用language-stylus 拓展，sass 使用Sass 拓展；

Volar 不包含 ESLint 和 Prettier，而官方的ESLint 和Prettier 扩展支持 Vue，所以需要自行安装。



## Vue VSCode Snippets

Vue VSCode Snippets 插件旨在为开发者提供最简单快速的生成 Vue 代码片段的方法，通过各种快捷键就可以在 .vue 文件中快速生成各种代码片段。简直是 Vue3 开发必备神器。

该插件支持：Volar、Vue2 和 Vue3。



### **Vue Peek**



### Debugger for Chrome

映射vscode上的断点到chrome上，方便调试



### Prettier-Code formatter插件



#### Bracket Pair Colorizer（用于颜色匹配括号）



Image preview



#### Codesnap（在编辑器中直接截图）



#### Code Spell Checker（代码拼写检查器）



#### CSS peak（用于查看样式CSS）



#### cssrem(px to rem & [rpx](https://so.csdn.net/so/search?q=rpx&spm=1001.2101.3001.7020))

在VSCode中的px和rem单位之间转换，并支持WXSS
这个插件默认的html文字大小 cssroot 为16px。
修改默认的16px为其他数值。设置(`Ctrl + ,`)——>在搜索框输入cssroot
可以看到默认的16px，修改为你想要的值就可以了。



#### Debugger for Chrome



#### Document This（注释文档生成）



#### EditorConfig for Visual Studio Code



#### filesize

> 在底部状态栏显示文件大小，点击后还可以看到详细创建、修改时间





#### Guides（显示代码对齐辅助线，很好用）



#### Git History（以图表的形式查看Git日志）（Git提交历史）



#### GitLens----- Git Supercharged

查看git文件提交历史。
git功能增强插件，鼠标放到代码行上，每一行代码的变动都一清二楚



#### Highlight Matching Tag（高亮匹配标签）



#### indent-rainbow（用于（彩虹色）缩进管理）



#### Live Server

在 vscode 中就可以直接启动一个本地服务，并且能监听文件变化自动刷新网页
这个插件很有用，安装之后可以打开一个简单的服务器，而且还会自动更新。
安装之后，打开项目文件夹，再在文件上点击右键>就会出现一个Open with Live Server的选项，就会自动打开浏览器了。
默认端口号是5500



#### Npm Intellisense

> require 时的包提示。
> 用于在 import 语句中自动填充 npm 模块



#### Markdown Preview Enhanced

> 实时预览Markdown，Markdown使用者必备







#### One Monokai Theme

> 能够选择自己喜欢的颜色主题来编写代码，比较喜欢用的是monokai。



#### Path Intellisense（自动补全路径）

在编辑器中输入路径时，自动补全。
智能路径提示，可以在你输入文件路径时智能提示



#### Project Manager

> 多个项目之间快速切换的工具，安装这个插件之后会在你的左栏中新建一个图标



#### Todo Tree

它不仅帮助我们高亮一些的特定的注释，在左侧菜单栏还可以快速定位到该注释的位置。
使用的时候需要打开配置文件，在里面添加配置：



#### View In Browser

> 在浏览器中查看静态文件。





#### vscode-icons

> 能够选择自己喜欢的图标主题，比较推荐vscode icons





10、vscode-elm-jump

常规的代码跳转定义，按ctrl，和webstrom一样

11、Vue CSS Peek

和webstrom一样，按ctrl可以跳转css定义，按ctrl，和webstrom一样

12、vue-helper

让你在vue单文件里面的变量函数跳转定义，按ctrl，和webstrom一样





























