<template>
    <span> 호출1 </span>
    <div>
        <label>{{ sData1 }}</label> <br>
        <label>{{ sData2 }}</label> <br>
        <button @click="getData">값 가져오기</button>
    </div>
    <span> 호출2 (자동) </span>
    <div> 
        <label>{{ pData1 }}</label> <br>
        <label>{{ pData2 }}</label>
    </div>
  </template>
  
  <script>
  import { usePiniaStore } from '@/store/pinia';
  import { computed, ref } from 'vue';
  
  export default {
    setup() {
      const piniaStore = usePiniaStore();
      const sData1 = ref('');
      const sData2 = ref('');
  
      const getData = () => {
        sData1.value = piniaStore.sData1;
        console.log('Fetched data:', sData1.value);

        sData2.value = piniaStore.sData2;
        console.log('Fetched data:', sData2.value);
      };

      const pData1 = computed (() => piniaStore.sData1) 
      const pData2 = computed (() => piniaStore.sData2) 
  
      return {
        pData1,
        pData2,
        sData1,
        sData2,
        getData,
      };
    },
  };
  </script>
  