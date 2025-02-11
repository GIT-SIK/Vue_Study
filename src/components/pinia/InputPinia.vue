<template>
    <div class="pinia-container">
        <div> pinia-plugin-persistedstate 사용 페이지 </div>
        <!-- 페이지 테스트
        값 입력 후 상태 변화 
        네비 이동 : 값 O
        주소 이동 : 값 O
        새로고침 : 값 O
        -->
        <v-text-field v-model="sData1" placeholder="값 1"/>
        <v-text-field v-model="sData2" placeholder="값 2"/>
        <v-btn @click="inputData"> 입력 </v-btn>
    </div>
</template>


<script>
import { usePiniaStore } from '@/store/pinia';
import {ref} from 'vue'

export default {
setup() {
    const sData1 = ref('');
    const sData2 = ref('');
    const piniaStore = usePiniaStore();
    const inputData = () => {
        console.log("Pinia 저장되는 값")
        console.log(sData1.value)
        console.log(sData2.value)
        console.log(sData1)
        console.log(sData2)
        piniaStore.setSData1(sData1.value);
        piniaStore.setSData2(sData2.value);
    }
    return {
    sData1,
    sData2,
    inputData
}
},
}
</script>

<style>
.pinia-container {
    width: 50vw;
}

</style>