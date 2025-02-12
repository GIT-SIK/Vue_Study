<template>
    <VEmitChild @emit-data="receiveData"></VEmitChild>  
    <v-btn @click="reset"> reset </v-btn>
    {{ childData }}
</template>
<script>
    import VEmitChild from './VEmitChild.vue';
    import { ref } from 'vue';

    export default {
    components: {
        VEmitChild
    },
    setup(){
        const childData = ref('');
        const receiveData = (data) =>{
            childData.value = data;
        }

        const reset = () => {
            childData.value = '';
        }

        return {
            childData,
            receiveData,
            reset
        }
    }
    }
</script>