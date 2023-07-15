<script setup>
import { onMounted } from 'vue';

// beforeCreate 和 created 的相关代码
// 一律放在 setup 中执行

const getList = () => {
  setTimeout(() => {
    console.log('发送请求，获取数据')
  }, 2000)
}
// 一进入页面的请求
getList()

// 如果有些代码需要在mounted生命周期中执行
onMounted(() => {
  console.log('mounted生命周期函数 - 逻辑1')
})

// 写成函数的调用方式，可以调用多次，并不会冲突，而是按照顺序依次执行
onMounted(() => {
  console.log('mounted生命周期函数 - 逻辑2')
})

</script>

<template>
  <div></div>
</template>