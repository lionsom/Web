<template>
  <div class="person">
    <h1 id="title1">父亲 - 标签上的ref属性</h1>
    <h2 ref="title2">你好</h2>
    <button @click="showLog">测试</button>
    <RefSon ref="ren"/>
  </div>
</template>

<!-- ref属性
  * 用在普通`DOM`标签上，获取的是`DOM`节点。
  * 用在组件标签上，获取的是组件实例对象。
 -->
<script lang="ts" setup name="App">
  import RefSon from './17-ref-son.vue'
  import { ref } from 'vue'

  // ref属性 - 普通DOM标签
  let title2 = ref()
  // ref属性 - 组件标签
  let ren = ref()

  function showLog() {
    console.log(title2.value)
    console.log(ren.value)

    // 子组件defineExpose 暴露属性才可以获取到，否则获取不到
    console.log(ren.value.b)  // undefined
    console.log(ren.value.d)  // 失恋三十三天
  }
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>