import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Navi from '@/views/01-Navi/Navi.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/a'
    },
    {
      path: '/a',
      name: 'navi',
      component: Navi,
      children: [
        {
          path: '/a/aaa',
          name: 'home11',
          component: HomeView,
        },
      ],
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/md',
      name: 'md',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Section1-Demos/MarkdownVue/MarkdownComp.vue'),
    },
    {
      path: '/md2',
      name: 'md2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Section1-Demos/MarkdownVue/MarkdownComp2.vue'),
    },
  ],
})

export default router
