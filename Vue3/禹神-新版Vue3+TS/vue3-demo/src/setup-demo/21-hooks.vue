<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}, 放大10倍后: {{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog,index) in dogList" :src="dog" :key="index" alt="代替文本">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {onMounted} from 'vue'
  import useSum from './21-hooks-useSum'
  import useDog from './21-hooks-useDog'

  const {sum,add,bigSum} = useSum()
  const {dogList,getDog} = useDog()

  // 钩子
  onMounted(()=>{
    console.log('父亲 - onMounted');
  })
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
  img {
    height: 100px;
    margin-right: 10px;
  }
</style>