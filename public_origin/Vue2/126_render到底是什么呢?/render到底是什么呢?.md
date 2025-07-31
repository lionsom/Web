* 官网：https://v2.cn.vuejs.org/v2/api/#render
* [官网 - 渲染函数 & JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html)



# render是什么？

**render** 选项用于自定义渲染函数，直接返回虚拟 DOM（VNode），是 Vue2 最底层的渲染方式。

通常我们用 `template` 选项编写模板，Vue 会将其编译为 render 函数。

但在某些高级场景下（如 JSX、动态组件、复杂结构等），可以直接使用 render 选项。

```js
new Vue({
  render(h) {
    return h('div', 'Hello Render!');
  }
}).$mount('#app');
```



# render 与 template 的区别

* **template** 是模板字符串，Vue 会自动编译为 render 函数。
* **render** 直接提供渲染函数，拥有更高的灵活性和动态性。

**注意：** 当同时存在 `template` 和 `render` 时，`render` 优先生效。

```
// template 写法
new Vue({
  template: '< div>Hello Template!< /div>'
});

// render 写法
new Vue({
  render(h) {
    return h('div', 'Hello Render!');
  }
});
      
```