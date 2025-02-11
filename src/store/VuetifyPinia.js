import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePiniaStore = defineStore('vPinia', () => {
  const toggle = ref(null);
  const userName = ref(null);

  function setToggle(bool) {
    toggle.value = bool
    console.log("Pinia : 토글 값 변경")
    console.log(bool)
  } 
  function setUserName(newData) {
    userName.value = newData
    console.log("Pinia : 유저 값 변경 ")
    console.log(newData)
  } 

  return {
    toggle,
    userName,
    setToggle,
    setUserName,
  };
},)