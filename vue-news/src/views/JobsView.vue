<template>
  <div>
    <p v-for="(job, index) in jobs" :key="index">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      jobs: 'fetchedJob'
    })
  },
  created() {
    this.$store.dispatch('FETCH_JOB');
  }
}
</script>

<style>

</style>