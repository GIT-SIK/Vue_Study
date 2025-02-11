import { createRouter, createWebHistory } from 'vue-router'

//**  일반 페이지
import MainLayout from '../views/MainLayout.vue'
import MainPage from '../views/MainPage.vue'
import SubPage1 from '../views/SubPage1.vue'
import InputPinia from '@/components/pinia/InputPinia.vue'
import InputPiniaNP from '@/components/pinia/InputPiniaNoPersist.vue'
import OutputPinia from '@/components/pinia/OutputPinia.vue'

//**  Vuetify 페이지 
// 레이아웃 및 Prop 전달 페이지
import VuetifyLayout from '@/views/design/VuetifyLayout.vue'
import VuetifyMainPage from '../views/design/VuetifyMainPage.vue'

// 컴포넌트 디자인
/* Table,   */ import VuetifyD1 from '@/components/design/VuetifyD1.vue'
/* Bottom Open List */ import VuetifyOpenList from '@/components/design/VuetifyOpenList.vue'

// 일반 디자인
/* Card */ import VuetifyCard from '@/components/design/VuetifyCard.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        { path: '', component: MainPage },
        { path: 'sub-page1', component: SubPage1 },
        { path: 'pi', component: InputPinia },
        { path: 'pinp', component: InputPiniaNP },
        { path: 'po', component: OutputPinia },
      ],
    },

    {
      path: '/v',
      name: 'vuetify',
      component: VuetifyLayout,
      children: [
        { path: '', component: VuetifyMainPage },
        { path: 'd1', component: VuetifyD1},
        { path: 'c1', component: VuetifyOpenList},
      ],
    },

    {
      path: '/card',
      name: 'VuetifyCard',
      component: VuetifyCard
    },
  ],
})

export default router
