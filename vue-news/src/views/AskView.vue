<template>
  <div>
    <p v-for="(item, index) in askItems" :key="index">
      <router-link :to="`/user/${item.user}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askItems: 'fetchedAsk'
    })

    // ...mapState({
    //   ask: state => state.ask
    // })

    // ask() {
    //   return this.$store.state.ask
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>