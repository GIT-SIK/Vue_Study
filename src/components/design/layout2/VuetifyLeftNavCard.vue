<!--

- 디자인 형태 : 왼쪽 메뉴 알림 연결 창 (v-card)
- 리스트 형태 : 유저 표시, 알림 타이틀, 내용
- 사용 색상 : 브라운+그레이 (#f5f2f1)

-->

<template>
    <template v-if="isVisible">
      <v-card class="mx-auto sub-card" max-width="300">
        <v-toolbar class="transparent-bg">
          <v-toolbar-title>Title</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon="mdi-close" @click="closeNotification" variant="text"></v-btn>
        </v-toolbar>
  
        <v-list class="transparent-bg" lines="three">
          <template v-for="(item, index) in items">
            <template v-if="item.prependAvatar !== undefined">
              <v-list-item :key="index">
                <template v-slot:prepend>
                  <v-avatar>
                    <img :src="item.prependAvatar" alt="Avatar" />
                  </v-avatar>
                </template>
  
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>
                  <div v-html="item.subtitle"></div>
                </v-list-item-subtitle>
              </v-list-item>
            </template>
            <template v-if="item.type !== undefined">
              <v-divider></v-divider>
            </template>
          </template>
        </v-list>
      </v-card>
    </template>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
    },
    setup(props, { emit }) {
      const items = [
        {
          prependAvatar: "https://picsum.photos/200/200",
          title: "List Title 1",
          subtitle: `<span class="text-primary">Subtitle 1</span> &mdash; Text`,
        },
        {
          prependAvatar: "https://picsum.photos/200/200",
          title: "List Title 2",
          subtitle: `<span class="text-primary">Subtitle 2</span> &mdash; Text`,
        },
        {
          prependAvatar: "https://picsum.photos/200/200",
          title: "List Title 3",
          subtitle: `<span class="text-primary">Subtitle 3</span> &mdash; Text`,
        },
        { type: "divider", inset: true },
        {
          prependAvatar: "https://picsum.photos/200/200",
          title: "List Title 4",
          subtitle: `<span class="text-primary">Subtitle 4</span> &mdash; Text`,
        },
      ];
  
      const closeNotification = () => {
        emit("closeNotification");
      };
  
      return {
        items,
        closeNotification,
      };
    },
  };
  </script>
  
  <style>
  .sub-card {
    background-color: #f5f2f1 !important;
  }
  
  .transparent-bg {
    background-color: transparent !important;
  }
  </style>
  