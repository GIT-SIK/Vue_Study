
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

<!-- 
setup() 으로 props로 받을 때 setup(props)로 받아야하며 
script setup일때 defineProps()로 받으면 된다.
-->
<!-- 해당 소스는 비동기식 처리 방식 -->
<script>
import { ref, inject, onMounted } from 'vue';


export default {
  // props 타입 설정 (필수)
  props: {
    friendMenu: {
      type: Array,  
      required: true
    }
  },

    setup(props) {
        const showToast = inject('showToast')
        const sheet = ref(false);
        const tiles = ref([]);
        const clickMethod = (data) => {
            showToast(`${data}이 클릭되었습니다.`)
            sheet.value = false;
        }
        onMounted(() => { 
          tiles.value = props.friendMenu
         })

        return {
        clickMethod,
        tiles,
        sheet
        }
    }
}
</script>

<!-- 해당 소스는 동기식 방식 / 즉시 렌더링하여 출력하게 함. -->
<!--
<script>
import { ref, inject } from 'vue';


export default {
  // props 타입 설정 (필수)
  props: {
    friendMenu: {
      type: Array,  
      required: true
    }
  },

  setup(props) {
      const showToast = inject('showToast')
      const sheet = ref(false);
      const tiles = ref(props.friendMenu);
      const clickMethod = (data) => {
          showToast(${data}이 클릭되었습니다.)
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
-->