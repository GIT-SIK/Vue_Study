import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import MainPage from '../views/MainPage.vue'
import SubPage1 from '../views/SubPage1.vue'
import SubPage2 from '../views/SubPage2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        { path: '', component: MainPage },
        { path: 'sub-page1', component: SubPage1 },
        { path: 'sub-page2', component: SubPage2 },
      ],
    },
    {
      path: '/about',
      name: 'about',
    },
  ],
})

export default router
