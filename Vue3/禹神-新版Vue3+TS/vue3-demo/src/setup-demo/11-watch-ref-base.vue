<template>
  <div class="person3">
    <h1>情况一：监视【ref】定义的【基础类型】数据</h1>
    <h2>当前求和：{{ sum }}</h2>
    <button @click="addSum">+++1</button>
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
    3. 函数返回一个值（getter函数）。
    4. 一个包含上述内容的数组。
  
  我们在 vue3 中使用watch 的时候，通常会遇到以下几种情况： 
  (1).监视ref 定义的【基木类型】数据：直按写数据名即可，监视的是其value 值的改变。
-->
<script lang="ts" setup>
  import { ref, watch } from 'vue'

  let sum = ref(0)

  function addSum() {
    sum.value += 1
  }

  // 监视 watch 
  // watch(谁？, 回调函数)
  watch(sum, (newVal) => {
    console.log('sum 值改变了，新的值是：', newVal)
  })
  watch(sum, (newVal, oldVal) => {
    console.log('sum 值改变了，新的值是：', newVal, '，旧值：', oldVal)
  })

  // 关闭监视
  const stopWatch = watch(sum, (newVal) => {
    console.log('sum 值改变了，新的值是：', newVal, '新值大于10停止！！！')
    if (newVal > 10) {
      stopWatch()
    }
  })

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