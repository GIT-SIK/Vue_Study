import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  define: {
    global: 'globalThis',
    process: {
      env: {
        // ...
      },
    },
  },
  plugins: [
    vue(),
    vueDevTools(),
    vuetify()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
