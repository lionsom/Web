<template>
  <div class="base-one">
    BaseOne
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 
  1.style中的样式 默认是作用到全局的
  2.加上scoped可以让样式变成局部样式

  组件都应该有独立的样式，推荐加scoped（原理）
  -----------------------------------------------------
  scoped原理：
  1.给当前组件模板的所有元素，都会添加上一个自定义属性
  data-v-hash值
  data-v-5f6a9d56  用于区分开不通的组件
  2.css选择器后面，被自动处理，添加上了属性选择器
  div[data-v-5f6a9d56]
*/
div{
  border: 3px solid blue;
  margin: 30px;
}
</style>