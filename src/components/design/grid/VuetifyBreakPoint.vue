<template>
  <v-card :height="height" title="Responsive Card" subtitle="screen size">
  </v-card>
</template>


<script setup>
  import { computed, ref, inject } from 'vue'
  import { useDisplay } from 'vuetify'

  const { name } = useDisplay()
  const showToast = inject('showToast')

  const height = computed(() => {
    showToast("DISPLAY SIZE : " + name.value)

    switch (name.value) {
      case 'xs': return 220
      case 'sm': return 400
      case 'md': return 500
      case 'lg': return 600
      case 'xl': return 800
      case 'xxl': return 1200
    }

    return undefined
  })
</script>

