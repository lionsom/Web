<template>
  <div class="app">

    <div v-show="true">
      <RouterDemo />
    </div> 

    <div v-show="true">
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
      <Person10/>
      <Person11/>
      <Person12/>
      <Person13/>
      <Person14/>
      <Person15/>
      <Person16/>
      <Person17/>
      <Person18/>
      <Person19/>
      <Person20/>
      <Person21/>
    </div>
  </div>
</template>

<script lang="ts">

import Person2 from './setup-demo/01-vue2.vue'
import Person3 from './setup-demo/02-vue3.vue'
import Person23 from './setup-demo/03-2-vs-3.vue'
import Person4 from './setup-demo/04-setup-suger.vue'
import Person444 from './setup-demo/04-name.vue'
import Person5 from './setup-demo/05-ref-base.vue'
import Person6 from './setup-demo/06-ref-object.vue'
import Person7 from './setup-demo/07-reactive-object.vue'
import Person8 from './setup-demo/08-ref-vs-reactive.vue'
import Person9 from './setup-demo/09-toRefs-toRef.vue'
import Person10 from './setup-demo/10-computed.vue'
import Person11 from './setup-demo/11-watch-ref-base.vue'
import Person12 from './setup-demo/12-watch-ref-object.vue'
import Person13 from './setup-demo/13-watch-reactive-object.vue'
import Person14 from './setup-demo/14-watch-property.vue'
import Person15 from './setup-demo/15-watch-mix.vue'
import Person16 from './setup-demo/16-watchEffect.vue'
import Person17 from './setup-demo/17-ref-father.vue'
import Person18 from './setup-demo/18-typescript.vue'
import Person19 from './setup-demo/19-props-father.vue'
import Person20 from './setup-demo/20-lifecycle-father.vue'
import Person21 from './setup-demo/21-hooks.vue'

import RouterDemo from './router-demo/index.vue'

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
    Person9,
    Person10,
    Person11,
    Person12,
    Person13,
    Person14,
    Person15,
    Person16,
    Person17,
    Person18,
    Person19,
    Person20,
    Person21,
    RouterDemo,
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