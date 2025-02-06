<template>
<v-app>
  <v-main>
    <ToastMessage ref="toast" />
    <router-view />
  </v-main>
</v-app>
</template>

<script>
import ToastMessage from '@/components/global/ToastMessage.vue'

export default {
  name: 'App',
  components: {
    ToastMessage,
  },
  provide() {
    return {
      showToast: this.showToast,
    }
  },
  methods: {
    // 메시지를 화면에 출력하기 위한 메서드
    showToast(message) {
      this.$refs.toast.addToast(message)
    }
  }
}
</script>



