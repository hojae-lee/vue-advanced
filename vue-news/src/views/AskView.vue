<template>
  <div>
    <div v-for="(item, idx) in ask" :key=idx>{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api'

export default {
  data() {
    return {
      ask: []
    }
  },
  created() {
    fetchAskList()
    .then(res => this.ask = res.data)
    .catch(err => console.log(err))
  }
}
</script>

<style>

</style>