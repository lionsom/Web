<template>
  <div class="article-detail-page">
    <nav class="nav"> <span class="back">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>百度前端面经</h1>
      <p>2022-01-20 | 315 浏览量 | 44 点赞数</p>
      <p>
        <img src="http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png" alt=""> 
        <span>靑春少年</span> 
      </p>
    </header>
    <main class="body">  
      虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。
      一面 1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）
      3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）
      5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数  
    </main>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailPage',
};
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
     padding: 0 15px;
     p {
       color: #999;
       font-size: 12px;
       display: flex;
       align-items: center;
     }
     img {
       width: 40px;
       height: 40px;
       border-radius: 50%;
       overflow: hidden;
     }
  }
  .body {
     padding: 0 15px;
  }
}
</style>