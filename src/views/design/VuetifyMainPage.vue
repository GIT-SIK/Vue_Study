<template>
  <div>Bottom OpenList View</div>
  <!-- Props 로 자식에게 데이터 넘기기 -->
  <VuetifyOpenList :friendMenu="data" />


</template>

<script>
import VuetifyOpenList from '@/components/design/VuetifyOpenList.vue';

export default {
  components: {
    VuetifyOpenList,
  },
  setup() {

    /* OpenList Props 데이터 */
    const data = [
      { icon: 'home', title: 'Home', data: 'Home' },
    ];

    
    return {
       data,
    };
  },
};
</script>
