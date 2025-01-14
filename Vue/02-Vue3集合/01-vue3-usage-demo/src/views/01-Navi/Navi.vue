<script setup lang="ts">

</script>


<template>
  全局导航入口
  <div>
    <router-link to="/home">首页</router-link>

    <router-link to="/aaa"></router-link>
  </div>

  <div>
    <router-view />
  </div>
</template>


<style scoped>

</style>