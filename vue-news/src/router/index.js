import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const rotuer = new VueRouter({
  routes: [
    {
      /**
       * @param path: url
       * @param components: url 주소로 갔을 때 표시될 컴포넌트
       */
      path: '/news',
      components: ''
    },
    {
      path: '/ask',
      components: ''
    },
    {
      path: '/jobs',
      components: ''
    },
  ]
});