import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePiniaStore = defineStore('sPinia', () => {
  const sData1 = ref(null);
  const sData2 = ref(null);

  function setSData1(newData) {
    sData1.value = newData
    console.log("Pinia setSData1")
    console.log(newData)
  } 
  function setSData2(newData) {
    sData2.value = newData
    console.log("Pinia setSData2")
    console.log(newData)
  } 

  return {
    sData1,
    sData2,
    setSData1,
    setSData2,
  };
}, {
    persist: true ,
})

export const usePiniaStoreNoPersist = defineStore('sPiniaNP', () => {
  const sData1 = ref(null);
  const sData2 = ref(null);

  function setSData1(newData) {
    sData1.value = newData
    console.log("Pinia setSData1")
    console.log(newData)
  } 
  function setSData2(newData) {
    sData2.value = newData
    console.log("Pinia setSData2")
    console.log(newData)
  } 

  return {
    sData1,
    sData2,
    setSData1,
    setSData2,
  };
})