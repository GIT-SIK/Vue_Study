<!--

- 디자인 연결 폴더
components/design/layout2

-->

<template>
    <v-row style="height:100vh">
        <v-col cols="auto" style="margin-left: 12px;">
            <VuetifyLeftNav/>
        </v-col>
        <v-col>
            <v-row rows="auto"> 
                <VuetifyToolBar/>
            </v-row>
            <v-row> 
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
.vuetify-content {
  padding : 0 5px 0 5px;
}
</style>