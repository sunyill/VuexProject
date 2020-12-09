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
    incrementData (state) {
      return state.count++
    },
    incrementSingleData (state, one) {
      state.count += one
    },
    incrementMultiData (state, payload) {
      state.count += payload.num
    },
    // mutation 必须是同步的, 不能操作异步,  如果操作异步,必须在action中
    syncIncrementData (state, one) {
      setTimeout(() => {
        state.count += one
      }, 2000)
    }
  },
  actions: {
  },
  modules: {
  }
})
