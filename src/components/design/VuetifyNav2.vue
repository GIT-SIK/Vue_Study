
<!--

- 디자인 형태 : 왼쪽 메뉴
- 리스트 형태 : 아이콘
- 사용 색상 : brown ( brown-darken-2, brown-lighten-5 )

-->

<template>
    <v-card class="mx-auto" max-width="75" variant="flat">
      <v-item-group selected-class="selected-item">
        <v-item
          v-slot="{ isSelected, selectedClass, toggle }"
          v-for="(item, i) in items"
          :key="i"
        >
          <template v-if="item.icon !== undefined">
            <template v-if="item.tooltip !== undefined">
              <v-tooltip location="right">
                <template v-slot:activator="{ props }">
                  <v-btn
                    variant="text"
                    icon
                    v-bind="props"
                    :class="['d-flex align-center', selectedClass]"
                    @click="toggle"
                    class="my-1"
                    size="large"
                  >
                    <v-icon color="brown-darken-2">{{item.icon}}</v-icon>
                  </v-btn>
                </template>
                <span>{{item.tooltip}}</span>
              </v-tooltip>
            </template>

            <template v-else>
              <v-btn
                variant="flat"
                icon
                :class="['d-flex align-center', selectedClass]"
                class="my-1"
                size="large"
              >
                <v-icon color="brown-darken-2">{{item.icon}}</v-icon>
              </v-btn>
            </template>
          </template>

          <template v-if="item.tab !== undefined">
            <div style="height: 30px"></div>
          </template>
        </v-item>
      </v-item-group>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { tab: '' },
        { icon: 'mdi-home', tooltip: 'Home' },
        { icon: 'mdi-bell' },
        { tab: '' },
        { icon: 'mdi-account-group-outline', tooltip: 'Friends' },
        { icon: 'mdi-chat-outline', tooltip: 'Chat' },
        { tab: '' },
        { tab: '' },
        { icon: 'mdi-cog-outline', tooltip: 'My Account' },
        { icon: 'mdi-logout', tooltip: 'Logout' },
      ],
    }),
  }
</script>

<style>
  .selected-item {
    background-color: #efebe9; /* brown-lighten-5 */
  }
</style>
