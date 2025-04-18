Hello，大家好，我是 Sunday。

`async + await` 可以让 **异步的操作拥有同步的写法**。所以在日常开发中，通过 `async + await` 来处理异步编程（比如：接口请求）是非常常见的一种方案。

但是，只要是异步操作，那么就会存在出现 **错误** 的可能。当 `promise` 出现错误时，我们可以直接通过 `.catch` 的方式进行捕获，那么 `async + await` 应该怎么做呢？每次都使用 `try-catch` 进行完整的包裹吗？有没有更好地方案呢？

今天这篇文章，咱们就来说下这个问题~

## **01：使用 try/catch 进行捕获**

```
function getUserInfo() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             reject('请求出现错误')
         }, 1000)
     })
}

async function loggedIn() {
     try {
         // 执行中断
         let userInfo = await getUserInfo()
         console.log('不会继续执行')
     } catch(e) {
         console.log(e)
     }
}
loggedIn()
```

上面的代码在执行时，会通过 `try-catch` 捕获到“请求异常”并中断执行`getUserInfo`。这也是日常开发中常见处理方式。

但是如果我们存在多次的请求，就必须要通过多次的 `try-catch` 进行捕获，特别是在请求需要具备连续性的时候：

```
async function loggedIn() {
     try {
         let userInfo = await getUserInfo()
         console.log('不会继续执行')
         let pageInfo = await getPageInfo(userInfo?.userId)
     } catch(e) {
         console.warn(e)
     }
}
loggedIn()
```

这样的处理，在当前场景下并没有什么问题，但是如果每一个接口的请求都这么进行调用，那么就会显得冗余了。所以，我们就可以延伸出一些其他的处理方案。

## **02：直接捕获**

```
function getUserInfo() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             reject('请求出现错误')
         }, 1000)
     })
}

async function loggedIn() {
     let userInfo = await getUserInfo().catch(e => console.log(e))
     console.log('程序会继续执行')
     if (!userInfo) return
     let pageInfo = await getPageInfo(userInfo?.userId)
}
loggedIn()
```

在上面的代码中，我们通过 `catch`捕获了异常，但程序会继续执行，所以我们只需要在后续进行 `if` 判断，从而完成连续的逻辑。

如果你不希望程序继续执行，那么可以按照下面的方式进行处理

```
function getUserInfo() {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             reject('请求出现错误')
         }, 1000)
     })
}

async function loggedIn() {
     let userInfo = await getUserInfo().catch(e => {
         console.log(e)
         return Promise.reject(e)
     })
     console.log('程序不会继续执行')
     let pageInfo = await getPageInfo(userInfo?.userId)
}
loggedIn()
```

这种方式会执行通过 在`catch`块中的`Promise.reject(e)`来中断执行。

## **如何选择？**

#### **1、如果错误不需要中断程序执行，那么可以使用如下方式**

```
let userInfo = await getUserInfo().catch(e => console.log(e))
if (!userInfo) return
```

#### **2、如果发生错误时需要中断，并且通过控制台明确一个统一的错误**

```
try {
   let userInfo = await getUserInfo()
   console.log('不会继续执行')
   let pageInfo = await getPageInfo(userInfo?.userId)
} catch(e) {
   console.warn(e)
}
```

#### **3、如果发生错误时需要中断，但是不需要控制台显示统一的错误**

```
let userInfo = await getUserInfo().catch(e => {
   console.log(e)
   return Promise.reject(e)
})
console.log('程序不会继续执行')
let pageInfo = await getPageInfo(userInfo?.userId)
```