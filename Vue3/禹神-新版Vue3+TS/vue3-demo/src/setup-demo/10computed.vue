<template>
  <div class="person3">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName">
    <h2>姓名：{{ fullName }}</h2>
    <h2>姓名：{{ fullName }}</h2>

    <button @click="changeFirstName">改 姓</button>
  </div>
</template>


<script lang="ts">
  export default {
    name: 'Person10',
  }
</script>

<!-- 计算属性 vs 方法
  1. 计算属性有缓存，方法没有缓存
  2. 计算属性是属性，可以直接使用，方法需要使用方法调用
 -->
<script lang="ts" setup>
  import { ref, computed } from 'vue'

  let firstName = ref('zhang')
  let lastName = ref('san')

  let fullName = computed(() => {
    console.log('计算属性触发了嘛');
    return `${firstName.value} ${lastName.value}`
  })

  function changeFirstName() {
    firstName.value = 'li'
  }
</script>

<style scoped>
.person3 {
  background-color: gold; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
  margin-top: 10px;
}
</style>