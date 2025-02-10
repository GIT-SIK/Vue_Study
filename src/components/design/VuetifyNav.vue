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
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Friend" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<script>
  import { ref, inject } from 'vue'
  import defaultUserImage from '@/assets/default_user.png'

  export default {
    setup () {
      const showToast = inject('showToast')
      const drawer = ref(true);
      const rail = ref(true);
      const userName = ref('UserName');

      console.log(rail)
      const items = [{ title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' }] 

      const clickMethod = (data) => {
            showToast(`${data}이 클릭되었습니다.`)
        }        
      const openRail = () => {
          rail.value = !rail.value
      }


      return {
        clickMethod,
        drawer,
        rail,
        userName,
        defaultUserImage,
        openRail,
        items
      }
    }
    
    
  }
</script>

<style>

.v-navigation-drawer {
  border-style : none !important; 
}

</style>