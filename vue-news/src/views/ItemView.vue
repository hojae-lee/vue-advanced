<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
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
.user-container {
  display: flex;
  text-align: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>