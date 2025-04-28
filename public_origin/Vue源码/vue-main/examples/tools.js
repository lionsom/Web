var App = Object.freeze({
  name: 'My App',
  version: '2.1.4',
  helpers: {
    // 这是我们之前见到过的 `$reverseText` 方法
    // 的一个纯函数版本
    reverseText: function (text) {
      return text
        .split('')
        .reverse()
        .join('')
    }
  }
})

window.MyApp = App;
