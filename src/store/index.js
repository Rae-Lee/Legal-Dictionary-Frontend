import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      account: '',
      name: '',
      email: ''
    },
    role: '',
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    setRole (state, role) {
      state.role = role
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.role = ''
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchUser ({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        const { id, account, name, role, email } = data.data
        commit('setUser', {
          id,
          account,
          name,
          email
        })
        commit('setRole', role)
      } catch (error) {
        commit('revokeAuthentication')
      }
    }
  },
  modules: {}
})
