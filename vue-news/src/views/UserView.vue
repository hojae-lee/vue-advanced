<template>
  <div>
    <p>name: {{ fetchedUser.id }}</p>
    <p>karma: {{ fetchedUser.karma }}</p>
    <p>created: {{ fetchedUser.created }}</p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      fetchedUser: 'fetchedUser'
    })
  },
  created() {
    // console.log(this.$route.params.id);

    this.$store.dispatch('FETCH_USER', this.$route.params.id);

    // axios.get(`https://api.hnpwa.com/v0/user/${this.$route.params.id}.json`)
    // .then(res => this.users = res.data)
    // .catch(err => console.log(err))
  }
}
</script>

<style>

</style>