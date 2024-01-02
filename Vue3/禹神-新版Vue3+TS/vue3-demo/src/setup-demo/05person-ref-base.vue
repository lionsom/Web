<template>
  <div class="person3">
    ref - base
    <h2>姓名：{{name}}</h2>
    <button @click="changeName">修改名字</button>
  </div>
</template>


<script lang="ts">
  export default {
    name: 'Person5',
  }
</script>

<script lang="ts" setup>
  /** 总结：
   * 1. ref定义的变量，在js中使用必须添加value；
   * 2. 在template中使用不需要添加value，已经默认添加了value；
   */
  import { ref } from 'vue'

  const name = ref('张三')
  
  const changeName = () => {
    name.value = 'zhang-san'
    console.log(name.value);
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