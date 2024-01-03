<template>
  <div class="person3">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h1>需要开启【深度监视】</h1>
    <h2>{{ person.name }} {{ person.age }}</h2>
    <button @click="changeName">改名</button>
    <button @click="changeAge">改年纪</button>
    <button @click="changePerson">全改</button>

  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person11',
  }
</script>

<script lang="ts" setup>
  import { ref, watch } from 'vue'

  let person = ref({
    name: '张三',
    age: 18
  })

  function changeName() {
    person.value.name += '~'
  }

  function changeAge() {
    person.value.age += 1
  }

  function changePerson() {
    person.value = {
      name: '李四',
      age: 20
    }
  }

  // 监视，此时修改内部name和age的值，无法触发watch，只有修改person的值，才会触发watch
  watch(person, (newVal, oldVal) => {
    // 新值 == 旧值，对象地址没有边，获取到的都是一个对象。
    console.log('person对象值改变了，新的值是：', newVal, '，旧值：', oldVal)
  })

  // 开启深度监视，才能监控到内部的name和age的值
  /* 
    监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：监视的回调
    watch的第三个参数是：配置对象（deep、immediate等等.....） 
  */
  watch(person, (newVal, oldVal) => {
    console.log('person.name/age值改变了，新的值是：', newVal, '，旧值：', oldVal)
  }, {
    deep: true
  }) 

</script>

<style scoped>
.person3 {
  background-color: gold; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
  margin-top: 10px;
}
</style>