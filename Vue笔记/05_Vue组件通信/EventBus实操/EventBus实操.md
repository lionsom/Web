https://segmentfault.com/a/1190000039860587





## 补充

如果觉得新建一个文件夹用来存放bus文件有点麻烦，也可以把实例的vue对象放在Vue的原型上面，放在原型上面的话，每个.vue文件都可以访问到。所以上述的写法就会发生变化一下：

```javascript
// 在main.js中把实例化的vue对象放在vue的原型上
Vue.prototype.$bus = new Vue()

// 子组件一
methods:{
    sendData(){
        this.$bus.$emit("send",this.childOneData)
    }
}

// 子组件二
created(){
    this.$bus.$on("send",(payload)=>{
        console.log("来自兄弟组件的数据",payload)
        this.msg = payload
    })
}
```
