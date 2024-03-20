<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- 使用组件 -->
    <LXSuccessButton>成功</LXSuccessButton>
    <lx-fail-button-ui>失败</lx-fail-button-ui>
    <LXWarningButton>警告</LXWarningButton>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
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
