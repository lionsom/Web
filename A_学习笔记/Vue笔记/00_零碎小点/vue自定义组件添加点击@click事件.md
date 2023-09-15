# Vue 自定义组件添加点击(@click)事件

- 在 `Vue` 开发中自定义组件之后，需要往组件身上添加 `click` 之类的一些操作事件，但是加上之后会无效。

- 原因是因为没有加上 `native`,官网对于 `native` 的解释为:

    ```js
    // 监听组件根元素的原生事件。
    .native
    ```

- 因此正确的写法是：

    ```vue
    // 无效写法
    <custom @click="touchCustom"></custom>
    
    // 正确写法
    <custom @click.native="touchCustom"></custom>
    ```
