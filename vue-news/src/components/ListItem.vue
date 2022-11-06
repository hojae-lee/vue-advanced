<template>
  <div>
    <ul class="list-list">
      <li v-for="(item, index) in listItems" :key="index" class="post">
        <div class="points">
          {{ item.points || 0}}
        </div>
        <div>
          <p class="list-title">
            <template v-if="item.domain">
              <a :href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
            <a v-else :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.getters['fetchedList'];
    }
  },
  // created() {
  //   const name = this.$route.name;

  //   let actions = '';

  //   switch (name) {
  //     case 'news':
  //       actions = 'FETCH_NEWS';
  //       break;
  //     case 'ask':
  //       actions = 'FETCH_ASK';
  //       break;
  //     case 'jobs':
  //       actions = 'FETCH_JOB';
  //       break;
  //     default:
  //   }
  //   this.$store.dispatch(actions);
  // }
}
</script>

<style scoped>
.list-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42a883;
}
.list-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>