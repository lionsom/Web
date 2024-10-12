<template>
  <div class="detail-page">

    <div class="navi">

      <div class="popBtn" @click="pop">返回</div>
      <div class="topTitle">{{ article.stem }}</div>

    </div>

    <div class="content">
      {{ article.content }}
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MJ-DetailPage',
  data () {
    return {
      article: {}
    }
  },
  // 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
  // 请求方式: get
  async created () {
    const id = this.$route.params.iddddd
    if (id) {
      const dddata = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${id}`)
      this.article = dddata.data.result
      console.log(this.article)
    } else {
      alert('数据异常')
    }
  },
  methods: {
    pop () {
      console.log('234234')
      // this.$router.push('/')
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">

.detail-page {
  background: #f5f5f5;

  width: 100vw;
  height: 100vh;

  .navi {
    display: flex;
    font-weight: 700;

    height: 60px;

    .popBtn {
      left: 10px;

      width: 60px;
      text-align: center;
      line-height: 60px;
    }

    .topTitle {

      padding-left: 10px;
      padding-right: 10px;
      // margin-left: 10px;
      // margin-right: 10px;

      text-align: center;
      line-height: 60px;
    }
  }

}

</style>
