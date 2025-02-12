<template>
    <v-btn color="indigo-darken-3" @click="$emit('emit-data', 'EMIT DATA (btn)')"> GET </v-btn>
    <v-btn color="indigo-darken-3" @click="sendData"> GET </v-btn>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

    setup(props, {emit}) {
        const sendData = () => {
            emit('emit-data', 'EMIT DATA (method)')
        }

        return {
            sendData
        }
    }
})
</script>