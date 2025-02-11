<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
      <v-list>
        <v-list-item :prepend-avatar="defaultUserImage" :title="userName">
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="openRail()"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>
        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item 
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon" 
          :title="item.title" 
          :value="item.val"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
  import { ref, inject } from 'vue'
  import defaultUserImage from '@/assets/default_user.png'

  export default {
    props: {
      userName: {
      type : String
      }
    },
    setup(props) {
      /* Props Data */
      const userName = ref(props.userName); 
      console.log(userName)

      /* 알람 */
      const showToast = inject('showToast')
      const clickMethod = (data) => { 
            showToast(`${data}이 클릭되었습니다.`)
      }    

      /* 네비 전체 보이기 여부 */
      const drawer = ref(true);


      /* 네비 서브 보이기 여부 */
      const rail = ref(!(false));

      const openRail = () => {
          rail.value = !rail.value
      }

      /* 네비 컨텐츠 데이터 */
      const items = ref([]);

      items.value = [
        { title: 'Home', icon: 'mdi-home-city',val: 'home' },
        { title: 'My Account', icon: 'mdi-account',val: 'account' },
        { title: 'Friend', icon: 'mdi-account-group-outline',val: 'friend' },
      ]     



      return {
        clickMethod,

        drawer,
        rail,
        openRail,

        defaultUserImage,
        items
      }
    }
    
    
  }
</script>