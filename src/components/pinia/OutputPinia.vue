<template>
    <v-col> 
    <span> 호출1 </span>
    <div>
        <v-label>{{ sData1 }}</v-label> <br>
        <v-label>{{ sData2 }}</v-label> <br> <br>
        <v-btn @click="getData(false)">No Persist 값 가져오기</v-btn>
        <v-btn @click="getData(true)">Persist 값 가져오기</v-btn>
    </div>
    <v-divider></v-divider>
    <br>
    <template v-if="$route.query.chk == null ? true : false">
      <span> 호출2-Persist (자동) </span>
      <div> 
          <v-label>{{ pData1 }}</v-label> <br>
          <v-label>{{ pData2 }}</v-label>
      </div>
  </template>
   <template v-else>
    <span> 호출2-NoPersist (자동) </span>
    <div> 
        <v-label>{{ pData1NP }}</v-label> <br>
        <v-label>{{ pData2NP }}</v-label>
    </div>
  </template>
   </v-col>
  <v-col>

  </v-col>
  </template>
  
  <script>
  import * as pinia from '@/store/pinia';
  import { computed, ref } from 'vue';
  
  export default {
    setup() {
      const piniaStore = pinia.usePiniaStore();
      const usePiniaStoreNoPersist = pinia.usePiniaStoreNoPersist();
      const sData1 = ref('');
      const sData2 = ref('');
      const chk = ref('');
  
      const getData = (bool) => {
        chk.value = bool;
        if(bool) {
        console.log('Persist')
        sData1.value = piniaStore.sData1;
        console.log('Fetched data:', sData1.value);

        sData2.value = piniaStore.sData2;
        console.log('Fetched data:', sData2.value);
      } else {
        console.log('No Persist')
        sData1.value = usePiniaStoreNoPersist.sData1;
        console.log('Fetched data:', sData1.value);

        sData2.value = usePiniaStoreNoPersist.sData2;
        console.log('Fetched data:', sData2.value);
      }
      };

      const pData1 = computed (() => piniaStore.sData1) 
      const pData2 = computed (() => piniaStore.sData2) 
      const pData1NP = computed (() => usePiniaStoreNoPersist.sData1) 
      const pData2NP = computed (() => usePiniaStoreNoPersist.sData2) 
  
      return {
        chk,
        pData1,
        pData2,
        sData1,
        sData2,
        pData1NP,
        pData2NP,
        getData,
      };
    },
  };
  </script>
  