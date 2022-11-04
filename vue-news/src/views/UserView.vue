<template>
  <div>
    <user-profile :info="fetchedUser">
      <div slot="username">{{ fetchedUser.id }}</div>
      <span slot="time">{{ 'Joined ' + fetchedUser.created }}, </span>
      <span slot="karma">{{ fetchedUser.karma }}</span>
    </user-profile>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters({
      fetchedUser: 'fetchedUser'
    })
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  }
}
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>