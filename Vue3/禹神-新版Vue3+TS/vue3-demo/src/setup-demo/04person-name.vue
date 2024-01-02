<template>
  <div class="person3">
    组件名字
    <h2>姓名：{{name}}</h2>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<!-- <script lang="ts">
  export default {
    name: 'Person444',
  }
</script> -->

<!-- 总结：组件名称
  1.只有文件名，此时在Vue Devtools中，组件名称为文件名;
  2.只有name属性，没有标签名，此时在Vue Devtools中，组件名称为name属性的值
  3.有name属性，同时也有标签名，此时在Vue Devtools中，组件名称为name属性的值
  4.没有name属性，只有标签名，此时在Vue Devtools中，组件名称为标签名

  对于第四种情况，无法显示标签名，需要配合插件，才能正常显示。
  $ npm i vite-plugin-vue-setup-extend -D
  配置 vite.config.js
  import vueSetupExtend from 'vite-plugin-vue-setup-extend'
  export default defineConfig({
    plugins: [
      vueSetupExtend()
    ],
  })
 -->
<script lang="ts" setup name="Person444444">
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