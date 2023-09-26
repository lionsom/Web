

# 1. 接口管理工具

**rap（阿里，已停止维护，使用rap2）**

> 地址: https://github.com/thx/RAP

**swagger**

> 地址: https://swagger.io/

**moco（和前端处理mock类似，json假数据+服务）**

> 地址: https://github.com/dreamhead/moco

**yapi（去哪儿网开发 yapi 官网）**

> 地址：https://github.com/YMFE/yapi



# 2. 本地 node 服务器

**代表：json-server**



# 3. 抓包工具

利用 Charles 、Fiddler等代理工具，

常见的处理方式有

- 将 URL 映射到本地文件；(调试APP混合开发等)
- debugger某个url，修改响应数据。
- 拦截后返回本地的数据，如Charles，直接采用Map locale 或者 Map Remote的方式。
- 右击url, copy response
- 在本地新建mock json数据，然后将response粘贴修改
- 再次访问url，观察api的变化。



# 4. 组合模式

代表：easy-mock（提供在线服务和接口代理，支持mockjs、Swagger、restapi风格） node 框架生成器 + json-server + mockjs。



# 5. Postman & Apifox

