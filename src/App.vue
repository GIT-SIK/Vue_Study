<template>
  <div>
    <ToastMessage ref="toast" />
    <router-view />
  </div>
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
      showToast: this.showToast, // showToast 메서드 전달
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
