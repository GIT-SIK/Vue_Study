<!-- 
 
Cols

-->
<template>
    <v-row class="fill-height" no-gutters>
        <v-col 
            cols="12" 
            sm="6" 
            md="5" 
            offset-md="1" 
            class="cols-size bgc-dog">
        </v-col>
        <v-col 
            cols="12" 
            sm="6" 
            md="5" 
            class="cols-size 
            bgc-dg">
        </v-col>
    </v-row>
</template>
<!-- 
최대 : 12
기본 : 12
sm : 6,6
md : 1,5,5
-->
<style>

.cols-size {
    width: 200px;
}

.bgc-yg {
    background-color: yellowgreen;
}

.bgc-dg {
    background-color: darkgrey;
}

.bgc-dog {
    background-color: darkolivegreen;
}
</style>
