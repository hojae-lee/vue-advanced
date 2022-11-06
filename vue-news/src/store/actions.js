import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo } from '@/api'

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then((res) => {
        commit('SET_NEWS', res.data);
        return res;
      })
      .catch(err => {
        return err;
      })
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => commit('SET_ASK', data))
      .catch(err => console.log(err))
  },
  FETCH_JOB({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit('SET_JOB', data))
      .catch(err => console.log(err))
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit('SET_USER', data))
      .catch(err => console.log(err))
  },
  FETCH_ITEM({ commit }, id) {
    fetchItemInfo(id)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(err => console.log(err))
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch(err => console.log(err))
  }
}