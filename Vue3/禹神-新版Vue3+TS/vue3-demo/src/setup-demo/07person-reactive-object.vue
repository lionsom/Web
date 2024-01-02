<template>
  <div class="person3">
    reactive - obj
    <h2>{{ car.brand }} + {{ car.color }} + {{ car.price }} 元</h2>
    <button @click="changeCar">改车价格</button>

    <div class="for-view">
      <div v-for="game in games" :key="game.name">
        <h3>* {{ game.name }} + {{ game.price }} 元</h3>
      </div>
    </div>
    <button @click="changeFirstGame">改第一个游戏</button>

    <h2> {{ obj.a.b.c.d }} </h2>
    <button @click="changeObj">改obj</button>
  </div>  
</template>


<script lang="ts">
  export default {
    name: 'Person7',
  }
</script>

<script lang="ts" setup>
  import { reactive } from 'vue'
  
  // 数据
  let car = reactive({
    brand: '宝马',
    color: '黑色',
    price: 111000,
  })

  // 数组
  let games = reactive([
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

  // 深层对象
  let obj = reactive({
    a: {
      b: {
        c: {
          d: 6666666
        }
      }
    }
  })
  
  const changeCar = () => {
    car.price += 10
  }

  function changeFirstGame() {
    games[0].name = '王者荣耀改名'
  }

  function changeObj() {
    obj.a.b.c.d = 7777777
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