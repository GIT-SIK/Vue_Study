<template>
    <v-row  class="ml-2 main-page-container">
        <v-col cols="4">
            <VuetifyMainLeftCard/>
        </v-col>
        <v-col cols="8">
            <VuetifyMainRightCard/>
        </v-col>
    </v-row>
</template>
  
  <script>
  import VuetifyMainLeftCard from '@/components/design/layout2/VuetifyMainLeftCard.vue';
  import VuetifyMainRightCard from '@/components/design/layout2/VuetifyMainRightCard.vue';
  
  export default {
    components: {
        VuetifyMainLeftCard,
        VuetifyMainRightCard
    },
  }
  </script>

  <style>
    .main-page-container {
        height : calc(100vh - 60px)
    }
</style>
  