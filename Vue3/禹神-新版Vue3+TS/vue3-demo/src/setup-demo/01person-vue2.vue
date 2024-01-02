
<template>
  <div class="person2">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>电话：{{tel}}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年齡</button>
    <button @click="showTel">杏看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person2',
    data(){
      return {
        name: '张三',
        age: 18,
        tel: '123456789'
      }
    },
    methods: {
      // 修改姓名
      changeName() {
        this.name ='zhang-san'
      },
      // 修改年龄
      changeAge() {
        this.age += 1
      },
      // 显示联系方式
      showTel() {
        alert(this.tel)
      }
    }
  }
</script>

<style scoped>
.person2 {
  background-color: skyblue;
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
}
</style>