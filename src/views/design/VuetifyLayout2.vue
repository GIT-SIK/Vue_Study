<!--

- 디자인 연결 폴더
components/design/layout2

-->

<template>
    <v-row class="vuetifylayout-container h-100" no-gutters>
      <v-col cols="1" class="d-none d-md-block"></v-col>
        <v-col cols="auto">
            <VuetifyLeftNav/>
        </v-col>
        <v-col cols="11" md="9">
            <v-row no-gutters> 
                <VuetifyToolBar/>
            </v-row>
            <v-row no-gutters> 
                 <RouterView/> 
            </v-row>
        </v-col>
    </v-row>
  </template>

<script>
import VuetifyToolBar from '@/components/design/layout2/VuetifyToolBar.vue';
import VuetifyLeftNav from '@/components/design/layout2/VuetifyLeftNav.vue'
import {useRoute} from 'vue-router'
export default {
  components: {
    VuetifyLeftNav,
    VuetifyToolBar,

  },
  setup() {
    const route = useRoute();
    console.log(route.query.userName)
  }
};
</script>

<style>
.vuetifylayout-container {
  background-color: #EFEBE9;
}
</style>
