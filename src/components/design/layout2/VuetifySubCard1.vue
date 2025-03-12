<template>
  <v-card variant="text" color="brown-darken-2">
    <v-tabs
      v-model="tab"
      bg-color="transparent"
      color="brown-darken-2"
      align-tabs="center"
    >
      <v-tab
        v-for="(item,index) in items"
        :key="index"
        :text="item.tabName"
        :value="item"
        >{{item.tabName}}
      </v-tab>
    </v-tabs>

    <v-tabs-window v-model="tab">
      <v-tabs-window-item
        v-for="(item,index) in items"
        :key="index"
        :value="item"
      >
        <v-card flat>
          <v-card-text>{{ item.tabText }}</v-card-text>
          <!-- <component :is="item.component" /> -->
        </v-card>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-card>
</template>

<script setup>
  import { ref } from 'vue'

  /* tab 유지 : pinia 처리 */
  const tab = ref('0')

  const items = [
    { tabName: 'Tab1', tabText: '텍스트1' },
    { tabName: 'Tab2', tabText: '텍스트2' },
    { tabName: 'Tab3', tabText: '텍스트3' },
    { tabName: 'Tab4', tabText: '텍스트4' },
  ]
</script>
