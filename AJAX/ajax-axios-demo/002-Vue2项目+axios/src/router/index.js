import Vue from 'vue'
import VueRouter from 'vue-router'
//
import Login from '@/views/login/index.vue'
// 懒加载，避免内存过大
const Article = () => import('@/views/article/index.vue')

const ArticleDetail = () => import('@/views/article-detail/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: ArticleDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
