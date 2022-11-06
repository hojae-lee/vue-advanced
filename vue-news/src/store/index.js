import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: []
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedUser(state) {
      return state.user;
    },
    fetchedItem(state) {
      return state.item;
    },
    fetchedJob(state) {
      return state.jobs;
    },
    fetchedNews(state) {
      return state.news;
    },
    fetchedList(state) {
      return state.list;
    }
  },
  mutations,
  actions
});
