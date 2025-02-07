
<!-- https://vuetifyjs.com/en/components/bottom-sheets/#open-in-list -->
<template>
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ props }">
        <div class="text-center">
          <v-btn
            v-bind="props"
            variant="tonal"
            size="large"
            text="click"
          ></v-btn>
        </div>
      </template>
  
      <v-list>
        <v-list-subheader>Open in</v-list-subheader>
  
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title" 
          :prepend-icon="`mdi-${tile.icon}`"
          :title="tile.title"
          @click="clickMethod(tile.data)"
        ></v-list-item>
      </v-list>
    </v-bottom-sheet>
  </template>

<script>
import { ref, inject } from 'vue';


export default {
    setup() {
        const showToast = inject('showToast')
        const sheet = ref(false);
        const tiles = ref([
        { icon: 'home', title: 'HOME', data: 'HOME' },
        { icon: 'plus-circle-outline', title: 'Plus-Circle-Outline', data: 'Plus-Circle-Outline' },
        { icon: 'close-circle', title: 'Close-Circle', data: 'Close-Circle' },
        ]);

        const clickMethod = (data) => {
            console.log("클릭")
            showToast(`${data}이 클릭되었습니다.`)
            sheet.value = false;
        }
        return {
        clickMethod,
        tiles,
        sheet
        }
    }
}


</script>