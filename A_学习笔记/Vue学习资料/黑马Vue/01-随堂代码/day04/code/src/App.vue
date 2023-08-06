<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="editFn">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    editFn() {
      // 1.显示文本框
      this.isShowEdit = true
      // 2.让文本框聚焦 （会等dom更新完之后 立马执行nextTick中的回调函数）
      // this.$nextTick(() => {
      //   console.log(this.$refs.inp)
      //   this.$refs.inp.focus()
      // })

      setTimeout(() => {
        this.$refs.inp.focus()
      }, 0)
    },
  },
}
</script>

<style>
</style>