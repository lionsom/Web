<template>
  <div class="person3">
    reactive VS ref
    <h2>{{ car111.brand }} + {{ car111.price }} 元</h2>
    <button @click="changeCar111_brand">reactive 改车 逐个替换</button>
    <button @click="changeCar111">reactive 改车 整体赋值</button>

    <h2>{{ car222.brand }} + {{ car222.price }} 元</h2>
    <button @click="changeCar222_brand">ref 改车 逐个替换</button>
    <button @click="changeCar222">ref 改车 整体赋值</button>
  </div>  
</template>

<script lang="ts">
  export default {
    name: 'Person8',
  }
</script>

<!-- 
  •区别：
    1.ref 创建的变量必须使用.value（可以使用 volar 插件自动添加. value）。
    2.reactive 重新分配一个新对象，会失去响应式（可以使用 Object.assign 去整体替换）
  •使用原则：
    1.若需要一个基本类型的响应式数据，必须使用ref。
    2.者需要一个响应式对象，层级不深，ref、reaetzve都可以。
    3.若需要一个响应式对象，且层级较深，推荐使用 reactive。
 -->
<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  
  // 数据
  let car111 = reactive({
    brand: '宝马',  
    price: 111000,
  })

  let car222 = ref({
    brand: '奔驰',  
    price: 222000,
  })

  const changeCar111_brand = () => {
    // reactive 逐个赋值
    car111.brand = '奥迪'
    car111.price += 10
  }
  const changeCar111 = () => {
    // reactive 整体赋值
    // car111 = { brand: '奥拓', price: 11 } // 这么写不生效
    // car111 = reactive({ brand: '奥拓', price: 11 }) // 这样也不生效

    // 正确写法
    Object.assign(car111, { brand: '奥拓', price: 11 })
  }

  const changeCar222_brand = () => {
    // ref 逐个赋值
    car222.value.brand = '奥迪'
    car222.value.price += 10
  }
  const changeCar222 = () => {
    car222.value = { 
      brand: '奥拓',  
      price: 11,
    }
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