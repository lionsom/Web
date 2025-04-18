<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="test-content">
      <lx-success-button class="success-button">成功</lx-success-button>
      <lx-warning-button>警告</lx-warning-button>
      <br />
      <lx-fail-button-ui>失败</lx-fail-button-ui>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .test-content {
    margin: 10px auto;
    background-color: beige;

    width: 200px;

    .success-button {
      margin: 10px auto;
      background-color: yellowgreen;

      width: 100px;
      height: 80px;
    }
  }
}
</style>
