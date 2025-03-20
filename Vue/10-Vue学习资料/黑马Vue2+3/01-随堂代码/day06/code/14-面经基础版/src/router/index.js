import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout'
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'
import ArticleDetail from '@/views/ArticleDetail'
Vue.use(VueRouter)

const router = new VueRouter({
  // /article 路径 → Article组件
  routes: [
    { 
      path: '/',
      component: Layout,
      redirect: '/article',
      // 通过 children 配置项，可以配置嵌套子路由
      // 1. 在children配置项中，配规则
      // 2. 准备二级路由出口
      children: [
        {
          path: '/article',
          component: Article
        },
        {
          path: '/collect',
          component: Collect
        },
        {
          path: '/like',
          component: Like,
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/detail/:id',
      component: ArticleDetail
    }
  ]
})

export default router