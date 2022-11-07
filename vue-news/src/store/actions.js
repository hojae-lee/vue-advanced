import { fetchList, fetchUserInfo, fetchItemInfo } from '@/api'

export default {
  async FETCH_USER({ commit }, name) {
    try {
      const { data } = await fetchUserInfo(name)
      return commit('SET_USER', data)
    } catch (err) {
      return console.log(err)
    }
  },
  async FETCH_ITEM({ commit }, id) {
    try {
      const { data } = await fetchItemInfo(id)
      return commit('SET_ITEM', data)
    } catch (err) {
      return console.log(err)
    }
  },
  async FETCH_LIST({ commit }, pageName) {
    try {
      const { data } = await fetchList(pageName)
      return commit('SET_LIST', data)
    } catch (err) {
      return console.log(err)
    }
  }
}