<template>
  <div class="article-page">
    <div class="article-item" v-for="(item, index) in articles" :key="item.id" @click="goToDetail(item.id)">
      <div class="header">
        <img :src="item.creatorAvatar" alt="">
        <div class="con">
          <div class="title">{{ item.stem }}</div>
          <div class="other">{{ item.creatorName }} | {{ item.createdAt }}</div>
        </div>
      </div>
      <div class="body">
        {{ index + 1 }}. {{ item.content }}
      </div>
      <div class="footer">
        点赞 {{ item.likeCount }} | 浏览 {{ item.views }}
      </div>
    </div>
  </div>
</template>

<script>
// 首页请求渲染
// 1. 安装 axios   pnpm add axios
// 2. 看接口文档，确认请求方式，请求地址，请求参数
//    请求地址: https://mock.boxuegu.com/mock/3083/articles
//    请求方式: get
// 3. created中发请求，获取数据，存起来
// 4. 页面动态渲染

// 跳转详情页传参 → 渲染
// 1. 查询参数传参 (更适合多个参数)
//    ?参数=参数值    =>  this.$route.query.参数名
// 2. 动态路由传参 (单个参数更优雅方便)
//    改造路由 => /路径/参数  =>  this.$route.params.参数名
//    细节优化：
//    (1) 访问 / 重定向到 /article   (redirect)
//    (2) 返回上一页 $router.back()

import axios from 'axios'

export default {
  name: 'ArticlePage',
  data() {
    return {
      articles: []
    }
  },
  async created() {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.result.rows
    console.log(this.articles)
  },
  methods: {
    goToDetail(value) {
      console.log(value)
      this.$router.push(`/detail/${value}`)
    }
  }
}
</script>

<style scoped lang="less">
.article-page {
  background: #f5f5f5;
}

.article-item {
  background: #fff;

  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 25px;
  border: 2px solid #8AC007;

  .header {
    display: flex;

    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;

    img {
      width: 50px;
      height: 50px;
    }

    .con {
      .title {
        height: 50%;
        vertical-align: bottom;
      }

      .other {
        height: 50%;
      }
    }
  }

  .body {
    // 多行文本 + 省略号
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;

    margin-left: 10px;
    margin-right: 10px;
  }

  .footer {
    text-align: right;

    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 10px;
  }

}
</style>
