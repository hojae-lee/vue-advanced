<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <div class="time">
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  },
  // UserView 에서 데이터를 dispatch 했음으로 가져와서 사용만 하면 됨.
  computed: {
  },
}
</script>

<style scoped>
.user-container {
  display: flex;
  /* text-align: center; */
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
  color: #828282;
}
</style>