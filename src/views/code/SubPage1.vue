<template>
  <div>SubPage1</div>
  <v-table>
    <tbody>
      <tr>
        <td>
          <span> id : 1 </span>
        </td>
        <td>
          <v-btn @click="fetchApi(1)">클릭</v-btn>
        </td>
      </tr>
      <tr>
        <td>
          <v-text-field v-model="val" placeholder="id 입력" />
        </td>
        <td>
          <v-btn @click="fetchApi(val)">클릭</v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>

  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>
    <v-table>
      <tbody>
        <tr>
          <td>id</td>
          <td>{{ apiData.id }}</td>
        </tr>
        <tr>
          <td>title</td>
          <td>{{ apiData.title }}</td>
        </tr>
        <tr>
          <td>content</td>
          <td>{{ apiData.content }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
span,
input {
  display: inline-block;
  width: 100px;
  height: 30px;
  padding: 0 5px 0 5px;
}
</style>

<script>
export default {
  name: 'SubPage1',

  data() {
    return {
      apiData: null,
      loading: true,
      error: null,
      val: null,
    }
  },

  inject: ['showToast'], 

  methods: {
    async fetchApi(id) {
      this.loading = true
      this.error = null
      try {
        const res = await this.$api.get(`/api/${id}`)
        this.apiData = res.data
        this.showToast(`id가 ` + res.data.id + `인 데이터를 가져옵니다.`)
        console.log(this.apiData)
      } catch (e) {
        this.showToast('해당 값이 없습니다.')
        console.error('[SubPage1] API ERROR:', e)
      } finally {
        this.loading = false
      }
    },
  },

  mounted() {
    this.fetchApi(1)
  },
}
</script>
