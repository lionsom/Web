# v-bind绑定数据缩写 :  

```cobol
v-bind 指令可以用于响应式地更新 HTML 特性：
<span v-bind:title="message">
<span :title="message">
```

# v-on动作监听缩写 @

```cobol
v-on 指令，它用于监听 DOM 事件
<form v-on:submit.prevent="onSubmit">...</form>
<form @submit.prevent="onSubmit">...</form>
```

# v-[model](https://so.csdn.net/so/search?q=model&spm=1001.2101.3001.7020)双向绑定缩写 :model

```cobol
主要是用于表单上数据的双向绑定
input type="text" v-model="mes">  
此时mes值就与input的值进行双向绑定
```

# .修饰符  对数据和动作的二次处理 就是下属的数据或者动作

```cobol
修饰符 (Modifiers) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
例如
.prevent 修饰符告诉 v-on 指令对于触发的事件调用event.preventDefault()：
preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）。
<form v-on:submit.prevent="onSubmit">...</form>
```
