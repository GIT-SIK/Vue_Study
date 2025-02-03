<template>
    <div class="toast-container">
      <!-- 여러 메시지 출력을 위한 그룹 설정 -->
      <transition-group name="toast">
        <div v-for="(toast, index) in toasts" :key="index" class="toast">
          {{ toast.message }}
        </div>
      </transition-group>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToastMessage',
  
    data() {
      return {
        toasts: []  
      }
    },
    
    methods: {
   
      addToast(message) {
        this.toasts.push({ message })
        
        // 3초 후 자동으로 메시지 제거
        setTimeout(() => {
          this.toasts.shift()
        }, 3000)
      }
    }
  }
  </script>
  
  <style scoped>
  .toast-container {
    position: fixed;
    top: 10px;
    right: 0;
    transform: translateX(-5%);
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .toast {
    background: #666;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    opacity: 1;
    margin-bottom: 0 !important;
    transition: opacity 0.5s ease-in-out;
    display: block !important;
  }
  
  /* 애니메이션 효과 */
  .toast-enter-from,
  .toast-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
  
  .toast-enter-to,
  .toast-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
  
  .toast-enter-active,
  .toast-leave-active {
    transition: all 0.5s ease-in-out;
  }
  </style>
  