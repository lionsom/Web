<template>
  <div class="article-page">
    <div
      class="article-item">
      <div class="head">
        <img src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png" alt="" />
        <div class="con">
          <p class="title">百度前端面经</p>
          <p class="other">靑春，那么骚 | 2022-01-20</p>
        </div>
      </div>
      <div class="body">
        虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，
        面试还是相当有难度和水准的。一面
        1.询问你的项目经验、学习经历、主修语言（照实答）
        2.解释ES6的暂时性死区（ let 和 var 的区别）
        3.箭头函数、闭包、异步（老生常谈，参见上文）
        4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）
        5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数
      </div>
      <div class="foot">点赞 44 | 浏览 315</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePage'
};
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