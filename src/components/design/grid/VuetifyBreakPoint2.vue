<template>
  <v-row>
    <v-col
      v-if="$vuetify.display.smAndUp"
      cols="2"
      class="left-nav"
    >
        <v-list>
          <v-list-item>메뉴 1</v-list-item>
          <v-list-item>메뉴 2</v-list-item>
          <v-list-item>메뉴 3</v-list-item>
        </v-list>

    </v-col>

    <v-col
      v-if="!$vuetify.display.smAndUp"
      cols="12"
    >
      <v-app-bar app>
        <v-toolbar-title>상단 툴바</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
    </v-col>

    <v-col :cols="!$vuetify.display.smAndUp ? 12 : 10" class="content">
      <v-card>
        <v-card-title>콘텐츠 제목</v-card-title>
        <v-card-text>콘텐츠 내용</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script setup>

  </script>
  
  <style scoped>
  .left-nav {
    padding-top: 10px;
  }
  .content {
    padding-top: 20px;
  }
  </style>
  