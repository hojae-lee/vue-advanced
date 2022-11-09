import Vue from 'vue';
import VueRouter from 'vue-router';
import createListView from '@/views/CreateListView.js';
import bus from '@/utils/bus.js';
import { store } from '@/store'

Vue.use(VueRouter);

function getComponent (component) {
	return () => import(
		`@/views/${component}`
	)
}

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
      component: getComponent('NewsView'),
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
      component: getComponent('AskView'),
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
      component: getComponent('JobsView'),
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
      component: getComponent('UserView')
    },
    {
      path: '/item/:id',
      component: getComponent('ItemView')
    },
  ]
});