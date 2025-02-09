import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout.vue'
import MainPage from '../views/MainPage.vue'
import SubPage1 from '../views/SubPage1.vue'
import VuetifyOpenListPage from '../views/design/VuetifyOpenListPage.vue'
import InputPinia from '@/components/pinia/InputPinia.vue'
import OutputPinia from '@/components/pinia/OutputPinia.vue'
import vuetify1 from '@/components/design/VuetifyD1.vue'
import VuetifyOpenList from '@/components/design/VuetifyOpenList.vue'

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
        { path: 'vtfolp', component: VuetifyOpenListPage },
        { path: 'ip', component: InputPinia },
        { path: 'op', component: OutputPinia },
        { path: 'vtf1', component: vuetify1},
        { path: 'vtfol', component: VuetifyOpenList},
      ],
    },
    {
      path: '/about',
      name: 'about',
    },
  ],
})

export default router
