<template>
    <v-row style="height:100vh">
        <v-col cols="auto" style="margin-left: 12px;">
            <VuetifyNav2/>
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
        <!-- <v-row>
            <v-col cols="auto" style="margin-left: 15px;">
                <VuetifyNav2/>
                <VuetifyToolBar/>
            </v-col>
            <v-col>
                <RouterView/>
            </v-col>
        </v-row> -->
  </template>

<script>
import VuetifyToolBar from '@/components/design/VuetifyToolBar.vue';
import VuetifyNav2 from '@/components/design/VuetifyNav2.vue'
import {useRoute} from 'vue-router'
export default {
  components: {
    VuetifyNav2,
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