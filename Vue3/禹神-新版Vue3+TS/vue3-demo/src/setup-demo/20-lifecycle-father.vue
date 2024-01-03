<template>
  <div class="person">
    <h1>父亲 - 生命周期</h1> 
    <Son v-if="isShow"/>
  </div>
</template>

<script lang="ts" setup name="App">
  import Son from './20-lifecycle-son.vue'
  import {ref,onMounted} from 'vue'

  let isShow = ref(true)

  // 挂载完毕
  onMounted(()=>{
    console.log('父---挂载完毕')
  })

</script>

<style scoped>
  .person {
    background-color: gold;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
  }
</style>