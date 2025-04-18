<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <button @click="onClick">Click me</button>
    
    <div @click="divClick">{{ computedMsg }}</div>
  </div>
</template>

<script>
export default {
  name: 'ABC',
  props: {
    msg: String
  },
  computed: {
    computedMsg() {
      // debugger;
      return this.msg + '!!!'
    }
  },
  onMounted() {
    debugger;
    console.log('Hello World 1');
    console.log('Hello World 2');
  },
  methods: {
    onClick(e) {
      /* eslint-disable no-debugger */
      debugger;
      // alert('Hello World');
      let aaa = e;
      console.log('Hello World', e, aaa);
      console.log('Hello World', e, aaa);
      console.log('Hello World', e, aaa);
    },
    divClick(e) {
      // debugger;
      console.log('Hello World', e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
