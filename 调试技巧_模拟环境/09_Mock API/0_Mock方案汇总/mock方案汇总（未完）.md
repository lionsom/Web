# 一、静态文件服务器

## 1. http-server

##2. serve

## 3. Live Server（VSCode插件）



# 二、模拟服务器框架

##1. json-server

**JSON Server** 是一个轻量级工具，用于快速创建一个可用于测试和原型开发的 **RESTful API**。它能够将本地的 JSON 文件直接模拟成一个后端 API，而不需要实际编写服务器代码。

## 2. wiremock

* https://www.wiremock.io/

**wiremock**：一个用于Java的灵活Mock API服务器，支持复杂的请求匹配和响应配置。

## 3. Prism

**Prism**：一个用于OpenAPI和API蓝图规范的Mock服务器，支持验证和模拟。

## 4. **MirageJS**

- **功能**：模拟前端应用的后端 API。
- **适用场景**：在 React、Vue、Ember 等前端框架中集成。
- **特点**：支持动态路由和关系数据建模。
- **官网**：[MirageJS](https://miragejs.com/)

## 5. JSONPlaceholder

**JSONPlaceholder**：一个免费、快速的 REST API，用于测试和原型设计。

- 访问：[JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [my-json-server.typicode.com](https://my-json-server.typicode.com/)



# 三、在线 Mock API 工具

## 1. Mocky

- **功能**：在线创建自定义的 Mock API。
- **适用场景**：快速测试各种请求和响应。
- **特点**：不需要本地设置，直接生成公共 API 链接。
- **官网**：[Mocky](https://www.mocky.io/)

## 2. Beeceptor

- **功能**：在线拦截并模拟 API 请求。
- **适用场景**：测试和调试前后端交互。
- **特点**：支持请求日志查看和快速自定义响应。
- **官网**：[Beeceptor](https://beeceptor.com/)

## **3. Postman Mock Server**

- **功能**：基于 Postman 创建 Mock API。
- **适用场景**：用于团队协作测试。
- **特点**：与 Postman 的请求集合无缝集成。
- **官网**：Postman Mock Server

## **4. MockAPI**

- **功能**：在线管理和模拟 RESTful API。
- **适用场景**：测试和开发时动态生成数据。
- **特点**：提供管理界面和 API 数据的结构化配置。
- **官网**：[MockAPI](https://mockapi.io/)

## 5. MockServer

- **MockServer**：一个强大的开源工具，可以在开发、测试和持续集成环境中使用。

## 6. Mockoon

- **Mockoon**：一个桌面应用程序，用于快速创建Mock API，支持多种HTTP方法和响应配置。



# 四、拦截真实 HTTP 请求

## 1. **Mock Service Worker (MSW)**

- **功能**：拦截网络请求并返回模拟数据。
- **适用场景**：适用于前端开发和测试。
- **特点**：在浏览器或 Node.js 环境中运行，无需修改代码。
- **官网**：[Mock Service Worker](https://mswjs.io/)

* [Mock Service Worker：可用于浏览器的 Mock 服务](https://xie.infoq.cn/article/ed4b11cb8cd021396cd475d4a)

拦截器方式的 Mock 工具，在 VUE 中常用的有 [axios-mock-adapter](https://xie.infoq.cn/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Faxios-mock-adapter) ，但是它对于 API 类型的支持不够，如 `REST` 或者 `GraphQL API`。

本文带大家来认识一下 [Mock Service Worke（MSW）](https://xie.infoq.cn/link?target=https%3A%2F%2Fmswjs.io%2F)，一个功能完善的 API Mock 工具，它可以使用 `Service Worker` 拦截 HTTP 请求，可以模拟真实的 HTTP 请求，可以使用浏览器的 `DevTools` 进行查看，并且是在 `Service Worker` 级别上工作。MSW 也可以用在项目的测试代码中，不必为项目的 HTTP 响应设置额外的测试。文章涉及的代码在[GitHub](https://xie.infoq.cn/link?target=https%3A%2F%2Fgithub.com%2FQuintionTang%2Fvue-msw)。

> Mock Service Worker 是一个 API 模拟库，它使用 Service Worker API 来拦截实际请求。 —— [MSW docs](https://xie.infoq.cn/link?target=https%3A%2F%2Fmswjs.io%2Fdocs%2F)



# 五、**高级 Mock 和测试工具**

## **1. Swagger Mock Server**

- **功能**：基于 OpenAPI/Swagger 文档自动生成 Mock API。
- **适用场景**：适合使用 API 文档驱动开发（DDD）的团队。
- **官网**：Swagger Mock Server

## **2. WireMock**

- **功能**：用于创建复杂的 Mock 和 Stub 服务。
- **适用场景**：模拟微服务、延迟、错误等复杂场景。
- **特点**：支持 HTTP/S 模拟和录制功能。
- **官网**：[WireMock](https://wiremock.org/)

## **3. Apimock**

- **功能**：自定义 Mock 端点，支持 REST 和 SOAP。
- **适用场景**：模拟复杂的企业级 API。
- **官网**：[Apimock](https://apimock.org/)



# 六、**动态数据生成工具**

## **1. Faker.js**

- **功能**：生成随机数据，可与 Mock API 集成。
- **特点**：支持姓名、地址、日期等多种数据类型。
- **官网**：[Faker.js](https://fakerjs.dev/)

## **2. Mockaroo**

- **功能**：生成大批量的虚拟数据。
- **特点**：支持多种数据类型和自定义格式。
- **官网**：[Mockaroo](https://www.mockaroo.com/)



# 七、其他乱七八糟

* mockjs
* easy-mock：https://github.com/easy-mock/easy-mock-cli
* better-mock：https://lavyun.github.io/better-mock/
* moco：https://github.com/dreamhead/moco
* Postman
* Apifox





# 八、编写自定义Mock服务器

## 1. Express.js

**Express.js**：在Node.js环境下使用Express.js框架，可以快速搭建一个自定义的Mock服务器，通过路由和中间件来处理模拟请求和响应。

## 2. Flask

**Flask**：在Python环境下使用Flask框架，可以轻松创建一个Mock服务器，用于处理API请求和响应。



# 九、接口管理工具

**个人开发和小团队**：Postman、Swagger、Insomnia、YApi。

**大规模企业项目**：Kong、Apigee、Amazon API Gateway。

**文档自动化和 Mock 服务**：Swagger、JSON Server、Mocky。



# 十、抓包工具

利用 Charles 、Fiddler等代理工具，

常见的处理方式有

- 将 URL 映射到本地文件；(调试APP混合开发等)
- debugger某个url，修改响应数据。
- 拦截后返回本地的数据，如Charles，直接采用Map locale 或者 Map Remote的方式。
- 右击url, copy response
- 在本地新建mock json数据，然后将response粘贴修改
- 再次访问url，观察api的变化。











