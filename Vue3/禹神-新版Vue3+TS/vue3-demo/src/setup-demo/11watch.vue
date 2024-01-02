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
    name: 'Person11',
  }
</script>

<!-- watch
  •作用：监视数据的变化（和Vue2 中的watch 作用一致）
  •特点：vue3 中的watch 只能监视以下四种数据：
    1. ref 定义的数据。
    2. reactive 定义的数据。
    3. 函数返回一个值（getter 西数）。
    4. 一个包含上述内容的数组。
  
  我们在 vue3 中使用watch 的时候，通常会遇到以下几种情况： 
  (1).监视ref 定义的【基木类型】数据：直按写数据名即可，监视的是其value 值的改变。
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