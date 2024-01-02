<template>
  <div class="person3">
    ref - obj
    <h2>{{ car.brand }} + {{ car.color }} + {{ car.price }} 元</h2>
    <button @click="changeCar">改车价格</button>

    <div class="for-view">
      <div v-for="game in games" :key="game.name">
        <h3>* {{ game.name }} + {{ game.price }} 元</h3>
      </div>
    </div>
    <button @click="changeFirstGame">改第一个游戏</button>
  </div>  
</template>


<script lang="ts">
  export default {
    name: 'Person6',
  }
</script>

<!-- ref 与 reactive 关系
  ref 底层实现 还是依赖 reactive
 -->
<script lang="ts" setup>
  import { ref } from 'vue'
  
  // 数据
  let car = ref({
    brand: '宝马',
    color: '黑色',
    price: 111000,
  })

  // 数组
  let games = ref([
    {
      name: '王者荣耀',
      price: 100,
    },
    {
      name: '炉石传说',
      price: 200,
    },
    {
      name: '吃鸡',
      price: 300,
    }
  ])

  const changeCar = () => {
    car.value.price += 10
  }

  function changeFirstGame() {
    games.value[0].name += '名'
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