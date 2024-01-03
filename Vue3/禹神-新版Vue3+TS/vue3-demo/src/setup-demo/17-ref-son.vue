<template>
  <div class="person">
    <h1 id="title1">儿子</h1>
    <h2 ref="title2">北京</h2>
    <h2 ref="title3">天津</h2>
    <h3>尚硅谷</h3>

    <button @click="showLog1">点我输出h1这个元素</button>
    <button @click="showLog2">点我输出h2这个元素</button>
  </div>
</template>

<!-- id vs ref
  id若出现同名，通过js代码获取dom元素，就会获取到其他同名的元素；
  ref则不会，通过ref获取的dom元素，是当前组件内的唯一元素。
 -->
<script lang="ts" setup name="Person">
  import { ref, defineExpose } from 'vue'

  // 创建一个title2，用于存储ref标记的内容
  let title2 = ref()
  let title3 = ref()
  let title4 = ref()  // undefined，title4不存在

  let a = ref(0)
  let b = ref(1)
  let c = ref(22222)
  let d = ref('失恋三十三天')

  function showLog1(){
    // js代码获取dom元素 
    console.log('获取到了其他组件的dom元素', document.getElementById('title1'))
  }

  function showLog2(){
    console.log(title2.value)
    console.log(title3.value)
    console.log(title4.value)
    
  }

  // 暴露给父组件
  defineExpose({a,c,d})
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