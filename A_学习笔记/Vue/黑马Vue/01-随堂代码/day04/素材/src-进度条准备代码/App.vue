<template>
  <div id="app">
    <BaseProgress :w="width"></BaseProgress>
  </div>
</template>

<script>
import BaseProgress from './components/BaseProgress.vue'
export default {
  data () {
    return {
      width: 50
    }
  },
  components: {
    BaseProgress
  }
}
</script>

<style>

</style>
