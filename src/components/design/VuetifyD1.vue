<template>
    <v-container>
        <v-row>
            <v-col>
                <v-text-field v-model="data1"/>
            </v-col>
            <v-col>
                <!-- https://vuetifyjs.com/en/components/buttons/ -->
                <v-btn size="large" variant="tonal" @click="clickMethod()">알람</v-btn>
            </v-col>
        </v-row>
        <v-row>
        <v-table>
            <thead> 
                <tr> 
                    <td>데이터1</td>
                    <td>데이터2</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>
        </v-table>
        </v-row>
        <v-row>

        </v-row>
    </v-container>
</template>

<script>
import {ref, inject} from 'vue';


export default {
    setup() {
        const showToast = inject('showToast')
        const data1 = ref('')
        const clickMethod = () => {
        showToast(data1.value)
    }


    return {
        clickMethod,
        data1,
    }
    }

}


</script>
