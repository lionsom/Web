<script setup lang="ts">

const files = import.meta.glob("/public/**/*");
let filesPbulic = Object.keys(files);

console.log('AAAAAa =', filesPbulic);

</script>


<template>
  <div>

    我是MarkdownHome

  </div>
</template>


<style scoped>

</style>