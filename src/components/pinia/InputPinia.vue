<template>
<input type="text" v-model="sData1">
<input type="text" v-model="sData2">
<button @click="inputData"> 입력 </button>
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