# 7. vue3+vite用proxy解决跨域及proxy原理解析

[vue3+vite用proxy解决跨域及proxy原理解析](https://blog.csdn.net/Android_boom/article/details/125387464?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EOPENSEARCH%7EPaidSort-1-125387464-blog-130919316.235%5Ev43%5Epc_blog_bottom_relevance_base7&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EOPENSEARCH%7EPaidSort-1-125387464-blog-130919316.235%5Ev43%5Epc_blog_bottom_relevance_base7&utm_relevant_index=1)

[Vite配置Proxy代理解决跨域问题](https://blog.csdn.net/weixin_43288600/article/details/130919316)





# 8、vite proxy 生产环境有用吗？？？

https://blog.csdn.net/imqdcn/article/details/133351735

### 接口在生产环境下，还能使用proxy代理地址吗？

请注意，这也是很多人会忽略的。只有在开发环境才会走`vue.config.js`里面的代码，`proxy`的代理才会生效。在生产环境下，因为前端代码已经被工程化构建化了（即`dist`目录下的文件），只有纯前端代码，他通常会部署到和后端服务一样的域名下，用的是相对地址，就不存在跨域了。`.env.production`中设置的变量也在构建过程中体现并分布到了各个接口中，



```tsx
export default defineConfig({
  // 解决在路径中用@代替src目录
  resolve: {
    alias: { "@": resolve("src") },
  },
  // 这个是新增的本地服务器与proxy代理设置
  server: {
  	....
  }
})
```



### 接口如何区分.env.development开发和.env.production生产环境

其实对应的就是如何使用`.env.development`和`.env.production`环境。

可以在`package.json`中看到`vite`的`script`：

```json
"scripts": {
    "dev": "vite --mode development",
    "start": "vite --host 192.168.8.87",
    "build": "vite build"
},
```

默认情况下，`'npm run dev'`即为开发环境，`npm run build`即为生产环境，不管在哪种环境下，你可以通过在代码中使用`import.meta.env.VITE_BASE_API`来调用两种开发环境的`env`文件下的`VITE_BASE_API`变量的值，如果是开发环境，就会读取`.env.development`中的值，生产环境，就会读取`.env.production`中的值。





# 9.Vite配置Proxy代理解决跨域问题

https://blog.csdn.net/weixin_43288600/article/details/130919316



