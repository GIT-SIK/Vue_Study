<template>
    <v-row>
        <v-col>
            <v-text-field v-model="inputData"> </v-text-field>
            <v-btn color="indigo-darken-3" @click="visible = !visible"> SET </v-btn>
        </v-col>
        <v-col>
            <template v-if="visible">
                <VPropsChild :propsData="inputData != '' ? inputData : 'No Data'" ></VPropsChild>
            </template>
        </v-col>
    </v-row>
</template>

<script>

import { ref } from 'vue'
import VPropsChild from './VPropsChild.vue';

export default {
    components : {
        VPropsChild
    },
    setup() {
        const inputData = ref('')
        const visible = ref(false);
        return {
            visible,
            inputData
        }
    }
}
</script>