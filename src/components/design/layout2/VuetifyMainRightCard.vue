<template>
        <v-card class="mx-auto d-sm-flex flex-column right-card" variant="">
            <v-card-title class="d-sm-flex align-sm-center justify-center">List SubHeader</v-card-title>
            <v-list lines="three" class="pa-0 flex-grow-1 overflow-y-auto right-card-list">
                <v-list-item
                    v-for="item in items"
                    :key="item.value"
                    :subtitle="item.subtitle"
                    :title="item.title"
                ></v-list-item>

            </v-list>
         
            <v-card-actions>
                <v-text-field
                density="compact"
                single-line
                hide-details
                label="Message"
                class="main-message-input"
                variant=""
                >
                </v-text-field>
                <v-btn
                  icon
                  @click="btn_click"
                  size="x-small"
                >
                <v-avatar color="#FFFFFF" size="small">
                 <v-icon icon="mdi-chevron-up" size="x-large"></v-icon>    
                 </v-avatar>
                 </v-btn>
            </v-card-actions>
        </v-card>
</template>
<script>
export default {
    setup() {
        
     const items = [
        { title: 'Title', subtitle: 'SubTitle' },
        { title: 'Title', subtitle: 'SubTitle' },
        { title: 'Title', subtitle: 'SubTitle' },
        { title: 'Title', subtitle: 'SubTitle' },
        { title: 'Title', subtitle: 'SubTitle' },
        { title: 'Title', subtitle: 'SubTitle' },
      ]

        return {
            items
        }
    }
}
</script>
<style>

.right-card {
    background-color: #FFFFFF;
    height : calc(100vh - 80px)
}

.right-card .v-card-title {
    font-size: 18px;
    vertical-align: center;
    height : 63px;
    background-color: #CCD5AE;
}

.right-card .v-card-actions {
    background-color: #CCD5AE;
    height : 63px;
}

.main-message-input .v-input__control {
    background-color: #FFFFFF;
    border-radius: 5px;
    border : 1px solid #ffffff;
}

</style>