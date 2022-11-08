import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView.vue';
import AskView from '@/views/AskView.vue';
import JobsView from '@/views/JobsView.vue';
import UserView from '@/views/UserView.vue';
import ItemView from '@/views/ItemView.vue';
import createListView from '@/views/CreateListView.js';
import bus from '@/utils/bus.js';
import { store } from '@/store'

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
      component: NewsView,
      // component: createListView('NewsView'),
      beforeEnter: async (to, from, next) => {
        try {
          bus.$emit('start:spinner');
          await store.dispatch('FETCH_LIST', to.name);
          next();
        } catch (error) {
          console.log(err);
        }
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      // component: createListView('AskView'),
      beforeEnter: async (to, from, next) => {
        try {
          bus.$emit('start:spinner');
          await store.dispatch('FETCH_LIST', to.name);
          next();
        } catch (error) {
          console.log(err);
        }
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: createListView('JobsView'),
      beforeEnter: async (to, from, next) => {
        try {
          bus.$emit('start:spinner');
          await store.dispatch('FETCH_LIST', to.name);
          next();
        } catch (error) {
          console.log(err);
        }
      }
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