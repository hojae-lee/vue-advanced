<template>
  <div>
    <p v-for="(item, index) in news" :key="index">
      <a :href="item.url">{{ item.title }}</a>
      <small>
        {{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
