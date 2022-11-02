<template>
  <div>
    Item
  </div>
</template>

<script>
export default {
  computed: {

  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id);
  }
}
</script>

<style>

</style>