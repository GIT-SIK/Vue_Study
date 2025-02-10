<template>
  <v-layout class="rounded rounded-md">
        <VuetifyNav/>
        <v-main class="align-center justify-center vuetify-content" fluid>
          <RouterView/>
        </v-main>
  </v-layout>
</template>

<script>
import VuetifyNav from '@/components/design/VuetifyNav.vue'
import VuetifyNav2 from '@/components/design/VuetifyNav2.vue'
export default {
  components: {
    VuetifyNav,
    VuetifyNav2
  },
};
</script>

<style>
.vuetify-container {
  /* display : flex; */
  /* height : 100vh; */
}
.vuetify-content {
  padding : 0 5px 0 5px;
}
</style>