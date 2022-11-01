<template>
  <div>
    <div v-for="user in news">{{ user.title }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>

<style>

</style>
