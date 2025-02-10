<template>
    <div>
        <VuetifyNav/>
        <RouterView/>
    </div>
</template>

<script>
import VuetifyNav from '@/components/design/VuetifyNav.vue'
export default {
  components: {
    VuetifyNav,
  },
};
</script>