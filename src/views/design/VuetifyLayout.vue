<template>
  <v-layout class="rounded rounded-md">
        <VuetifyNav :userName = "$route.query.userName"/>
        <v-main class="align-center justify-center vuetify-content" fluid>
          <RouterView/>
        </v-main>
  </v-layout>
</template>

<script>
import VuetifyNav from '@/components/design/VuetifyNav.vue'
import VuetifyNav2 from '@/components/design/VuetifyNav2.vue'
import {useRoute} from 'vue-router'
export default {
  components: {
    VuetifyNav,
    VuetifyNav2
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