[原文](https://cloud.tencent.com/developer/article/2154338)

# 在vue中引入外部的css文件

在项目的src文件下，新建一个style文件夹，存放css文件。



## 1. 全局引入

将外部的css文件放到style文件下，引入外部文件只需在main.js文件中

```javascript
// js文件
import '@/style/reset.css'
```

我引入的是清除默认样式的css文件



## 2. 局部引入相对路径

```javascript
<style scoped>
  @import '../../assets/iconfont/iconfont.css';   // 这个分号一定要写，要不会报错

  // 新版
  @use '@/xx/xx.css'; 

</style>
```



## 3. 局部引入绝对路径

```javascript
<style scoped>
 @import '@/styles/scroll-bar.scss';   // 这个分号一定要写，要不会报错
</style>
```

**注意**

使用@import引入样式文件，就算加scoped，其它没有引入的模块还是可以访问到你的样式，如果某个组件的类名一致，则就会被污染到。 如果不想被污染，修改引入方式

```javascript
<style src="@/style/reset.css" scoped></style>
```

要是在写新的样式，要重新写一个新的`style`标签

```javascript
<style src="@/style/reset.css" scoped></style>
<style scoped>
  // 新的css样式
</style>
```

我引入一个 download.scs 文件：

```javascript
<style src="./download.scss" scoped>
```

像上边引入的时候报：`style-loader: Adds some css to the DOM by adding a \<style> tag`

添加上lang即可：

```javascript
<style src="./download.scss"  lang="scss" scoped>
```
