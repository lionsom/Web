* [img 的data-src 属性及懒加载 ](https://www.cnblogs.com/moxiaowohuwei/p/7908877.html)



# 一、IntersectionObserver API 使用教程

* [IntersectionObserver API 使用教程 - 阮一峰](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

传统的实现方法是，监听到`scroll`事件后，调用目标元素（绿色方块）的[`getBoundingClientRect()`](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect)方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于`scroll`事件密集发生，计算量很大，容易造成[性能问题](https://www.ruanyifeng.com/blog/2015/09/web-page-performance-in-depth.html)。

目前有一个新的 [IntersectionObserver API](https://wicg.github.io/IntersectionObserver/)，可以自动"观察"元素是否可见，Chrome 51+ 已经支持。由于可见（visible）的本质是，目标元素与视口产生一个交叉区，所以这个 API 叫做 **"交叉观察器"**。



# 二、项目实战 - 图片懒加载

懒加载监听事件

```js
const lazyLoadImg = () => {
  // 图片懒加载
  let img = document.getElementsByTagName('img')
  const observer = new IntersectionObserver((changes) => {
    // changes 是被观察的元素集合
    for (let i = 0, len = changes.length; i < len; i++) {
      let change = changes[i]
      // 通过这个属性判断是否在视口中
      if (change.isIntersecting) {
        const imgElement = change.target
        if (imgElement.getAttribute('data-src')) {
          imgElement.src = imgElement.getAttribute('data-src');
        }
        observer.unobserve(imgElement)
      }
    }
  })
  Array.from(img).forEach((item) => {
    observer.observe(item)
  })
}
```

图片

```html
<img v-for="item in s" :key="item" :data-src="report.imgUrlHandle(item)" alt="现场照片">
```

