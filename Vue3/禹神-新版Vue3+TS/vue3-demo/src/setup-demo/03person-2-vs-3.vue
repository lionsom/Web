<template>
  <div class="person3">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{aaa}}</h2>
    <h2>电话：{{tel}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">杏看联系方式</button>
    <hr>
    <h2>性别：{{sex}}</h2>
    <button @click="changeData">修改名字、性别</button>
    <button @click="showName">Vue2获取setup中的值，显示姓名</button>
  </div>
</template>

<script lang="ts">
  // 总结：
  // 1. Vue2的选项式语法 可以与Vue3中setup语法共存
  // 2. Vue2旧语法可以读出Vue3中setup中的数据；但是setup中无法读取到vue2中的数据
  import { ref } from 'vue'
  export default {
    name: 'Person3',
    data() {
      return {
        sex: '男',
      }
    },
    methods: {
      showName() {
        console.log(this.name); // Vue2中可以使用this，可以获取到vue3中的setup的值
      },
      changeData() {
        this.name = "李四" // Vue2中可以使用this，修改setup中的值
        this.sex = '女' // Vue2中可以使用this
      }
    },
    setup() {
      const name = ref('张三')
      const age = ref(18)
      const tel = ref('123456789')
      
      const changeName = () => {
        name.value = 'zhang-san'
        console.log(name.value);
      }

      const changeAge = () => {
        age.value += 1
        console.log(age.value);
      }

      const showTel = () => {
        alert(tel.value)
      }

      return {
        name: name,
        aaa: age,
        tel,
        changeName,
        changeAge,
        showTel
      }
    }
  }
</script>

<style scoped>
.person3 {
  background-color: greenyellow; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
}
</style>