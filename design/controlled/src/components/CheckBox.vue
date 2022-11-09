<template>
  <input type="checkbox" :value="value" :checked="getCheck" @click="ToggleCheckBox">
</template>

<script>
export default {
  props: {
    value: Boolean,
    checked: Boolean
  },
  computed: {
    getCheck() {
      return this.checked;
    }
  },
  methods: {
    ToggleCheckBox() {
      this.$emit('fetchChecked');
    }
  }
}
</script>