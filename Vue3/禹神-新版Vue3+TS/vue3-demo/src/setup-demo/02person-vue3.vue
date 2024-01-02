<template>
  <div class="person3">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{aaa}}</h2>
    <h2>电话：{{tel}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">杏看联系方式</button>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  export default {
    name: 'Person3',
    setup() {
      // setup函数中的this是undefined， vue3中已经弱化this了
      console.log(this);
      
      // 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据，需要加上ref包裹起来
      const name = ref('张三')
      const age = ref(18)
      const tel = ref('123456789')
      
      // 修改姓名
      const changeName = () => {
        name.value = 'zhang-san'
        console.log(name.value);
      }

      // 修改年龄
      const changeAge = () => {
        age.value += 1
        console.log(age.value);
      }

      // 显示电话
      const showTel = () => {
        alert(tel.value)
      }

      // 将数据、方法交出去，模板才可以使用
      return {
        name: name,
        aaa: age,
        tel,
        changeName,
        changeAge,
        showTel
      }

      /*
      // setup返回值也可以是一个渲染函数
      return function() {
        return '哈哈哈哈哈哈'
      }

      return ()=> '哈哈哈哈哈哈'
      */
    }
  }
</script>

<style scoped>
.person3 {
  background-color: greenyellow; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
  margin-top: 10px;
}
</style>