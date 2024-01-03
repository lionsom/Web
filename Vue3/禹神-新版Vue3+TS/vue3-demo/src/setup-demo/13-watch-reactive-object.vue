<template>
  <div class="person3">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h1>需要开启【深度监视】</h1>
    <h2>{{ person.name }} {{ person.age }}</h2>
    <button @click="changeName">改名</button>
    <button @click="changeAge">改年纪</button>
    <button @click="changePerson">全改</button>

    <hr>
    <h2>测试深层数据：{{ obj.a.b.c }}</h2>
    <button @click="test">修改obj.a.b.c</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person11',
  }
</script>

<script lang="ts" setup>
  import { reactive, watch } from 'vue'

  // 数据
  let person = reactive({
    name: '张三',
    age: 18
  })

  let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
  })

  // 方法

  function changeName() {
    person.name += '~'
  }

  function changeAge() {
    person.age += 1
  }

  function changePerson() {
    Object.assign(person, {
      name: '王五',
      age: 22
    })
  }

  function test(){
    obj.a.b.c += 1
  }

  // 监视，情况三：监视【reactive】定义的【对象类型】数据，
  // 默认是开启深度监视的
  watch(person, (newVal, oldVal) => {
    // 新值 == 旧值，对象地址没有边，获取到的都是一个对象。
    console.log('person对象值改变了, 新的值是: ', newVal, '，旧值：', oldVal)
  })
  watch(obj, (newValue, oldValue)=>{
    console.log('Obj变化了', newValue, oldValue)
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