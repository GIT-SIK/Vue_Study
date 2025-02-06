import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import api from '@/utils/api'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


const app = createApp(App)

/* pinia 설정 */
const pinia = createPinia()

/* pinia 상태 유지를 위한 설정 */
pinia.use(piniaPluginPersistedstate);

/* 공통 Axios 전역 지정 */
app.config.globalProperties.$api = api

loadFonts()

const globalComponents = import.meta.glob('@/components/global/*.vue')

const loadComponents = async () => {
  // async -> await
  try {
    for (const [path, loader] of Object.entries(globalComponents)) {
      const module = await loader()
      console.log('path: ', path)
      const componentName = path
      .split('/')
      .pop()
      .replace(/\.\w+$/, '');

      console.log('공통 컴포넌트 등록: ', module.default.name)

      app.component(componentName, module.default)
    }
  } catch (error) {
    console.error('[main.js] Error loading global components:', error)
  }
}
loadComponents().then(() => {
  app.use(router)
  app.use(pinia)
  app.use(vuetify)
  app.mount('#app')
})