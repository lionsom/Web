<script setup lang="ts">

</script>


<template>
  全局导航入口
  <div>
    <router-link to="/home">首页</router-link>

    <router-link to="/aaa">aaa</router-link>

    <router-link to="/a/aaa">aaa</router-link>

  </div>

  <div style="background: #f5f5f5; width: 100%; height: 500px;">
    <!-- <router-view /> -->

    <RouterView></RouterView>
  </div>
</template>


<style scoped>

</style>