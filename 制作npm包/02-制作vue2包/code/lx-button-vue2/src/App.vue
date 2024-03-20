<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- <my-button type="primary" @click="handleClick">Button</my-button> -->
  </div>
</template>

<script>

import MyButton from './components/button'

export default {
  name: 'App',
  comments: {
    MyButton
  },
  methods: {
    handleClick () {
      console.log('click111111111111')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
