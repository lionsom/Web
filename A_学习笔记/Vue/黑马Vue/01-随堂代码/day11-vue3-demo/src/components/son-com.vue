<script setup>
// 注意：由于写了 setup，所以无法直接配置 props 选项
// 所以：此处需要借助于 “编译器宏” 函数接收子组件传递的数据
const props = defineProps({
  car: String,
  money: Number
})
const emit = defineEmits(['changeMoney'])
console.log(props.car)
console.log(props.money)

const buy = () => {
  // 需要 emit 触发事件
  emit('changeMoney', 5)
}
</script>

<template>
  <!-- 对于props传递过来的数据，模板中可以直接使用 -->
  <div class="son">
    我是子组件 - {{ car }} - {{ money }}
    <button @click="buy">花钱</button>
  </div>
</template>

<style scoped>
.son {
  border: 1px solid #000;
  padding: 30px;
}
</style>