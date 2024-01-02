<template>
  <div class="person3">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="changePerson">修改Person</button>

    <br>
    <h2>姓名：{{brand}} {{ xm }}</h2>
    <h2>年龄：{{price}}</h2>
    <button @click="changeCar">修改Car</button>
  </div>
</template>


<script lang="ts">
  export default {
    name: 'Person9',
  }
</script>

<script lang="ts" setup>
  import { reactive, toRefs, toRef } from 'vue'

  let person = reactive({
    name: '张三',
    age: 18,
  })

  let car = reactive({
    brand: '宝马',
    price: 15000,
  })

  // 这样取值没有了响应式
  let { name, age } = person
  // 正确方式
  let { brand, price } = toRefs(car)
  
  let xm = toRef(car, 'brand')
  console.log('toRef = ' + xm.value)

  const changePerson = () => {
    name += '!'
    age += 1
  }

  const changeCar = () => {
    brand.value += '!'
    price.value += 1
    xm.value += '+'
  }
</script>

<style scoped>
.person3 {
  background-color: greenyellow; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
  margin-top: 10px;
}
</style>