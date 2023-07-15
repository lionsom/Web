<template>
  <div class="article-page">
    <div
      v-for="item in articles"
      :key="item.id"
      @click="$router.push(`/detail/${item.id}`)"
      class="article-item">
      <div class="head">
        <img :src="item.creatorAvatar" alt="" />
        <div class="con">
          <p class="title">{{ item.stem }}</p>
          <p class="other">{{ item.creatorName }} | {{ item.createdAt }}</p>
        </div>
      </div>
      <div class="body">
        {{ item.content }}
      </div>
      <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.views }}</div>
    </div>
  </div>
</template>

<script>
// 首页请求渲染
// 1. 安装 axios   yarn add axios
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
  data () {
    return {
      articles: []
    }
  },
  async created () {
    const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    this.articles = res.data.result.rows
    // console.log(this.articles);
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>