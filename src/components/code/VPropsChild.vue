<template>
    <v-label> {{ printData }}</v-label>
</template>


<script>

import { defineComponent, onMounted, ref  } from 'vue';

export default defineComponent({
    props : {
        propsData : {
            type : String
        }
    },
    setup(props) {
        console.log(props.propsData)
        const receiveData = props.propsData;
        const printData = ref('');
        onMounted (() => {
            printData.value = receiveData;
        })
        return {
            receiveData,
            printData,
        }
    }
})
</script>