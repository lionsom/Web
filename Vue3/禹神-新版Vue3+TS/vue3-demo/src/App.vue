<template>
  <div class="app">
    <Person2/>
    <Person3/>
    <Person23/>
    <Person4/>
    <Person444/>
    <Person5/>
    <Person6/>
    <Person7/>
    <Person8/>
    <Person9/>
  </div>
</template>

<script lang="ts">

import Person2 from './setup-demo/01person-vue2.vue'
import Person3 from './setup-demo/02person-vue3.vue'
import Person23 from './setup-demo/03person-2-vs-3.vue'
import Person4 from './setup-demo/04person-setup-suger.vue'
import Person444 from './setup-demo/04person-name.vue'
import Person5 from './setup-demo/05person-ref-base.vue'
import Person6 from './setup-demo/06person-ref-object.vue'
import Person7 from './setup-demo/07person-reactive-object.vue'
import Person8 from './setup-demo/08person-ref-vs-reactive.vue'
import Person9 from './setup-demo/09toRefs-toRef.vue'

export default {
  name: 'App',  //组件名
  components: {
    Person2, // 注册组件
    Person3,
    Person23,
    Person4,
    Person444,
    Person5,
    Person6,
    Person7,
    Person8,
    Person9
  } 
}

</script>

<style scoped>
.app {
  width: 80vw;
  background-color: #ddd; 
  box-shadow: 0 0 10px; 
  border-radius: 10px; 
  padding: 20px;
}
</style>