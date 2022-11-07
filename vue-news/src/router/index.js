import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';
import createListView from '@/views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      /**
       * @param path: url
       * @param components: url 주소로 갔을 때 표시될 컴포넌트
       */
      path: '/news',
      name: 'news',
      component: NewsView
      // component: createListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView
      // component: createListView('AskView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
      // component: createListView('JobsView')
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    },
  ]
});