<template>
  <check-box :value="value" :checked="checked" @fetchChecked="fetchChecked"></check-box>
</template>

<script>
import CheckBox from './components/CheckBox.vue';

export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checked: true,
      value: true
    }
  },
  methods: {
    fetchChecked() {
      this.value = !this.value;
      this.checked = !this.checked;
    }
  }
}
</script>