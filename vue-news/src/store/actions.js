import { fetchList, fetchUserInfo, fetchItemInfo } from '@/api';

export default {
  async FETCH_USER({ commit }, name) {
    const res = await fetchUserInfo(name);
    commit('SET_USER', res.data);
    return res;
  },
  async FETCH_ITEM({ commit }, id) {
    const res = await fetchItemInfo(id);
    commit('SET_ITEM', res.data);
    return res;
  },
  async FETCH_LIST({ commit }, pageName) {
    const res = await fetchList(pageName);
    commit('SET_LIST', res.data);
    return res;
  }
}