import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1,
    msg: 'hello aZan'
  },
  getters: {
    handleData (state) {
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
