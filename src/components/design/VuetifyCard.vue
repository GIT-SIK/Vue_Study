<template>
    <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12"
    max-width="380"
    >
        
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="brown-darken-2"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-card-title color="brown-darken-2">
        Card
    </v-card-title>
    <v-container>
        <v-text-field
            color="brown-darken-4"
            label="Id"
            variant="underlined"
          ></v-text-field>
          <v-text-field
            color="brown-darken-4"
            label="Password"
            variant="underlined"
          ></v-text-field>
      </v-container>
    <v-card-actions>
      <v-btn
        color="brown-darken-4"
        text="SUBMIT"
        block
        border
        @click="reserve"
      ></v-btn>
    </v-card-actions>
    </v-card>
</template>
<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
export default {
    setup() {
        const loading = ref(false);
        const router = useRouter();
        const reserve = () => {
                loading.value = true;
                setTimeout(() => (
                  loading.value = false,
                  router.push({path : '/v', query : {userName : 'props data'}})
                ), 2000)
                
        }
        return {
            reserve,
            loading,
            router
        }
    }   
}

</script>