import { createRouter, createWebHistory } from 'vue-router'
//** */ 기본 페이지
import MainLayout from '../views/MainLayout.vue'
import MainPage from '../views/MainPage.vue'


//**  일반 페이지
import SubPage1 from '../views/code/SubPage1.vue'
import VEmit from '../components/code/VEmitParent.vue'
import VProps from '../components/code/VPropsParent.vue'

//** Pinia 페이지
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

//** VuetifyLayout2 Router */
import VuetifyLayout2 from '@/views/design/VuetifyLayout2.vue'
import VuetifyLayout2MainPage from '@/views/design/VuetifyLayout2MainPage.vue'

import VuetifyCols from '@/views/design/VuetifyCols.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/c',
      name: 'vCode',
      component: MainLayout,
      children: [
        { path: '', component: MainPage },
        { path: 'sub-page1', component: SubPage1 },
        { path: 'emit', component: VEmit },
        { path: 'props', component: VProps }
      ],
    },

    {
      path: '/p',
      name: 'vPinia',
      component: MainLayout,
      children: [
        { path: '', component: MainPage },
        { path: 'pi', component: InputPinia },
        { path: 'pinp', component: InputPiniaNP },
        { path: 'po', component: OutputPinia },
      ],
    },

    {
      path: '/v',
      name: 'vVuetify',
      component: VuetifyLayout,
      children: [
        { path: '', component: VuetifyMainPage },
        { path: 'd1', component: VuetifyD1},
        { path: 'ol', component: VuetifyOpenList},
      ],
    },
    

    { path : '/v3',
      name : 'vVuetify3',
      component : VuetifyCols
    },

    {
      path: '/v2',
      name: 'vVuetify2',
      component: VuetifyLayout2,
      children: [
        { path: '', component: VuetifyMainPage },
        { path: 'sub', component: VuetifyLayout2MainPage },
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
