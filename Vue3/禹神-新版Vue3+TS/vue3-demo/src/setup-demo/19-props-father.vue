<template>
  <div class="person">
    <h1>父亲 - props</h1>
    <!-- 务必看懂下面这一行代码 -->
    <!-- : 表示是表达式，而不是字符串  -->
    <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe">测试</h2>
    
    <Son a="aaa" b="bbb" :list="personList"/>
  </div>
</template>

<script lang="ts" setup>

import { reactive } from 'vue';
import { type Persons } from './18-index'
import Son from './19-props-son.vue';

let x = 99

let personList = reactive<Persons>([
  { name: 'aa', age: 22, gender: '男'},
  { name: 'bb', age: 33, gender: '男'},
  { name: 'cc', age: 44, gender: '女'}
])

</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
    margin-top: 10px;
  }
</style>
