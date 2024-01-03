<template>
  <div class="person">
    TypeScript
  </div>
</template>

<script lang="ts" setup>
  import { a, type PersonInfo, type Persons } from './18-index'

  let person: PersonInfo = { name: '张三', age: 20, gender: '男' }

  let personList: Persons = [
    {name: '张三', age: 20, gender: '男'},
    {name: '李四', age: 21, gender: '女'}
  ]

  console.log(a);
  console.log(person);
  console.log(personList);

</script>

<style scoped>
.person {
  background-color: greenyellow; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
  margin-top: 10px;
}
</style>