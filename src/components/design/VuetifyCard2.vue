<template>
  <v-container style="background-color: #fffbf9">
    <v-row dense>
      <v-col cols="12" v-for="item in items">
        <v-card
          color="#3E2723"
          variant="outlined"
          :href="item.href"
          :prepend-avatar="item.avatar"
          :title="item.title"
          :subtitle="item.subtitle"
        >
          <v-card-actions>
            <v-btn text="Button" border variant="text" />
            <v-btn text="Button" border variant="text" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const items = [
        {
          title: 'title1',
          subtitle: 'subtitle1',
          href: 'https://github.com/vuetifyjs/vuetify/',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        },
        {
          title: 'title2',
          subtitle: 'subtitle2',
          href: '/',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        },
        {
          title: 'title3',
          subtitle: 'subtitle3',
          href: '/',
          avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
        },
      ]

      return {
        items,
      }
    },
  }
</script>
