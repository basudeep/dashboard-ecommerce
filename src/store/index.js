import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error:null,
    token: null,
    user: null
  },
  mutations: {
    SET_ERROS: (state, data) => {
      state.error = data

    }
  },
  actions: {
  },
  modules: {
  }
})
