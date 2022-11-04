<template>
  <div>
    <section>
      <!-- 사용자 상세 정보 -->
      <user-profile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time">{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
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
      fetchedItem: 'fetchedItem'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id);
  }
}
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>