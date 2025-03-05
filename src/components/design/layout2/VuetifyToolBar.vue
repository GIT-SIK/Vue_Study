<!--

- 디자인 형태 : 상단 메뉴 (v-toolbar)
- 리스트 형태 : 검색, 유저 표시
- 사용 색상 : brown ( brown-lighten-5 )

-->

<template>
      <v-toolbar color="transparent">
        <v-text-field
          prepend-icon="mdi-magnify"
          single-line
          v-model="searchData"
          label="Search"
          class="toolbar-search-input"
          variant="plain"
          @click:prepend="search"
          @keyup.enter="search"
        />
        <v-spacer></v-spacer>
        <div class="toolbar-user">
          <v-avatar size="32">
            <img :src="userImage" alt="user" />
          </v-avatar>
          <div class="ml-4 mr-9 toolbar-username">{{ userName }}</div>
        </div>
      </v-toolbar>
</template>

<script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const searchData = ref('')

      const search = () => {
        alert(searchData.value)
        searchData.value = ''
      }

      return {
        userImage: 'https://www.example.com/user-image.jpg',
        userName: 'name',
        search,
        searchData,
      }
    },
  }
</script>

<style>
  .toolbar-search-input .v-input__prepend .v-icon,
  .toolbar-search-input .v-input__control .v-label,
  .toolbar-username {
    color: #3e2723 !important;
  }

  .toolbar-user {
    display:flex;
    align-items: center;
  }
</style>
