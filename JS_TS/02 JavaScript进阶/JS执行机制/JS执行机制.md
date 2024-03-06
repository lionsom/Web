- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.im/post/59e85eebf265da430d571f89)
- [Chrome: Multi-process Architecture](https://blog.chromium.org/2008/09/multi-process-architecture.html)
- [Is multithreading concurrent or parallel?](https://www.quora.com/Is-multithreading-concurrent-or-parallel)
- [关于JavaScript单线程的一些事](https://github.com/JChehe/blog/blob/master/posts/%E5%85%B3%E4%BA%8EJavaScript%E5%8D%95%E7%BA%BF%E7%A8%8B%E7%9A%84%E4%B8%80%E4%BA%9B%E4%BA%8B.md)



JavaScript 的执行是**单线程**的，意味着只有一个主线程在执行 JavaScript 代码，因此 JavaScript 需要注意避免长时间的占用主线程，否则会阻塞用户界面。同时，JavaScript 也支持异步操作，如定时器、事件监听等，这些异步操作可以增强用户体验，同时不会阻塞主线程。
