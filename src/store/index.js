import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mySocket: null,
    username: ''
  },
  mutations: {
    SET_MYSOCKET (state, payload) {
      state.mySocket = payload
    },
    SET_USERNAME (state, payload) {
      state.username = payload
    }
  },
  actions: {
    mySocket ({ commit }) {
      const data = io.connect('http://localhost:3000')
      commit('SET_MYSOCKET', data)
    }
  },
  modules: {
  }
})
