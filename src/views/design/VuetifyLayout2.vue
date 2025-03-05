<!--

- 디자인 연결 폴더
components/design/layout2

-->

<template>
    <v-row style="height:100vh" no-gutters>
        <v-col cols="auto" md="0" class="pl-2 pr-2">
            <VuetifyLeftNav/>
        </v-col>
        <v-col>
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
