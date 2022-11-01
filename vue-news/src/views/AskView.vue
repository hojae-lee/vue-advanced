<template>
  <div>
    <div v-for="(item, idx) in askItems" :key=idx>{{ item.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

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