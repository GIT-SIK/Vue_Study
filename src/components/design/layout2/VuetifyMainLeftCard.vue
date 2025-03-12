<template>
    <div class="mx-auto d-sm-flex flex-column main-container">
        <v-card class="w-100 mb-5 pl-4 pr-4" variant="text" style="background-color: #FFFFFF;"> 
            <v-text-field
          prepend-icon="mdi-magnify"
          single-line
          v-model="searchData"
          label="Search"
          class="main-search-input"
          variant="plain"
            ></v-text-field>
        </v-card>
        <v-card class="w-100 flex-grow-1 overflow-y-auto" variant="text" style="background-color: #FFFFFF;">
            <v-list lines="three">
                <v-list-subheader>List SubHeader</v-list-subheader>
                <v-list-item
                    v-for="item in items"
                    :key="item.value"
                    :subtitle="item.subtitle"
                    :title="item.title"
                ></v-list-item>
            </v-list>
        </v-card>
    </div>
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
.main-container {
 height : calc(100vh - 80px)
}

.main-search-input .v-input__prepend .v-icon,
.main-search-input .v-input__control .v-label {
    color: #3e2723 !important;
}

</style>