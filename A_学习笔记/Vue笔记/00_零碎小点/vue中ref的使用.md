# ref 注意点

1. `$refs` 只会在组件渲染完成之后生效，并且它们不是响应式的。这仅作为一个用于直接操作子组件的“逃生舱”—— **你应该避免在模板或计算属性中访问 `$refs`。**
2. 获取ref一定要**注意是在dom元素生成之后**，否则获取到的是undefined，或者报没有“getAtrribute”方法的错误，解决办法是使用`$nextTick`。



# ref 使用

在 Vue.js 中，`ref` 是一个特殊的属性或函数，用于在模板或组件中创建响应式的引用。

1. 在模板中使用 `ref` 属性：

```html
<template>
  <div>
    <input ref="myInput" type="text">
    <button @click="handleClick">获取输入的值</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      const input = this.$refs.myInput;
      console.log(input.value); // 输出输入框的值
    }
  }
}
</script>
```

在上面的例子中，`ref` 属性被用于给 `<input>` 元素创建一个引用。通过 `this.$refs` 来访问该引用，并可以使用引用的 DOM 元素或组件实例。

1. 在组件中使用 `ref` 函数：

```html
<template>
  <div>
    <my-component ref="myComponentRef"></my-component>
    <button @click="handleClick">调用子组件的方法</button>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent
  },
  methods: {
    handleClick() {
      const myComponent = this.$refs.myComponentRef;
      myComponent.myMethod(); // 调用子组件的方法
    }
  }
}
</script>
```

在上面的例子中，`ref` 函数被用于给子组件 `<my-component>` 创建一个引用。通过 `this.$refs` 访问该引用，并且可以直接调用子组件的方法。

需要注意的是，`ref` 的值应该是唯一的，并且不能在循环中使用。当然，也可以通过 `ref` 动态绑定的方式来实现更灵活的使用。



# ref 动态绑定

Vue.js中的`ref`是一个用于在组件中引用DOM元素或组件实例的特殊属性。通常情况下，`ref`属性用于在组件内部获取对特定元素或组件实例的引用，以便在需要时进行操作或访问。

动态绑定`ref`意味着可以通过动态地设置`ref`属性的值来实现对不同元素或组件的引用。这样可以根据需要在运行时动态地绑定和更新`ref`引用。

例如，假设有一个动态生成的列表，我们想要为每个列表项设置一个`ref`引用以便在需要时进行操作。可以使用`v-for`指令结合动态绑定`ref`来实现：

```html
<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index" :ref="'itemRef_' + index">{{ item }}</li>
    </ul>
  </div>
</template>
```

在上面的示例中，`v-for`指令用于遍历`items`数组，并为每个列表项动态设置一个`ref`引用，引用的命名方式为`itemRef_`加上当前索引。

然后，可以在组件的方法中通过`this.$refs`来访问这些动态绑定的`ref`引用。例如，可以通过`this.$refs.itemRef_0`来访问第一个列表项的引用。

需要注意的是，动态绑定的`ref`引用在组件渲染完成后才会被设置，所以在组件的生命周期钩子函数`mounted`或后续的更新钩子函数中才能访问到这些引用。
