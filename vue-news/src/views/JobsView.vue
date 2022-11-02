<template>
  <div>
    <p v-for="(job, index) in jobs" :key="index">
      <a :href="job.url">{{ job.title }}</a>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      jobs: state => state.jobs
    })
    // jobs() {
    //   return this.$store.state.jobs;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_JOB');
  }
}
</script>

<style>

</style>