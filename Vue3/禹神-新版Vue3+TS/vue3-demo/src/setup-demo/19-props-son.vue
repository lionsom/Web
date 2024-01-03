<template>
  <div class="person">
    儿子 
    <!-- <h3>父传过来的值：{{ a }} {{ allProps.b }} </h3> -->
    <ul>
      <li v-for="item in allProps.list" :key="item.name">
        {{ item.name }} {{ item.age }} {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

  import { defineProps, withDefaults } from 'vue';
  import { type Persons } from './18-index'

  // 只接收list
  // let allProps2 = defineProps(['a', 'b'])
  // console.log(allProps2.b);

  // 接收list + 限制类型
  // let allProps1 = defineProps<{list:Persons}>()
  // console.log('aaaaaaaa = ', allProps1.list);

  //  接收list + 限制类型 + 限制必要性 + 指定默认值
  let allProps = withDefaults(defineProps<{list?:Persons}>(),{
    list:()=> [{name:'啊啊啊',age:55,gender:'男'}]
  })
  console.log('结果值：', allProps.list);
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
