<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const nickname = ref('张三')

const changeCount = () => {
  count.value++
}
const changeNickname = () => {
  nickname.value = '李四'
}

// 1. 监视单个数据的变化
//    watch(ref对象, (newValue, oldValue) => { ... })
// watch(count, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })

// 2. 监视多个数据的变化
//    watch([ref对象1, ref对象2], (newArr, oldArr) => { ... })
// watch([count, nickname], (newArr, oldArr) => {
//   console.log(newArr, oldArr)
// })

// 3. immediate 立刻执行
// watch(count, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// }, {
//   immediate: true
// })
// --------------------------------------------
// 4. deep 深度监视, 默认 watch 进行的是 浅层监视
//    const ref1 = ref(简单类型) 可以直接监视
//    const ref2 = ref(复杂类型) 监视不到复杂类型内部数据的变化
const userInfo = ref({
  name: 'zs',
  age: 18
})
const setUserInfo = () => {
  // 修改了 userInfo.value 修改了对象的地址，才能监视到
  // userInfo.value = { name: 'ls', age: 50 }
  userInfo.value.age++
}

// deep 深度监视
// watch(userInfo, (newValue) => {
//   console.log(newValue)
// }, {
//   deep: true
// })

// 5. 对于对象中的单个属性，进行监视
watch(() => userInfo.value.age, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
</script>

<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ nickname }}</div>
  <button @click="changeNickname">改昵称</button>
  <div>-----------------------</div>
  <div>{{ userInfo }}</div>
  <button @click="setUserInfo">修改userInfo</button>
</template>