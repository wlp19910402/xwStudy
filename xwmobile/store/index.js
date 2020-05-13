export const avatars = require('~/assets/images/avatars.jpg')
export default {
  state: {
    user: {
      user_name: '',
      head_img_location: avatars,
      nick_name: '',
      id: ''
    },
    token: localStorage.token || '',
    redirectPath: '/home'
  },
  mutations: {
    setAuth(state, { userLogin, token }) {
      state.token = token
      state.user.user_name = userLogin.user_name
      state.user.nick_name = userLogin.nick_name
    },
    setRedirectPath(state, path) {
      state.redirectPath = path
    },
    cleanAuth(state) {
      state.user.user_name = ''
      state.user.nick_name = ''
      state.user.id = ''
      state.token = ''
      state.redirectPath = '/home'
      localStorage.removeItem('token')
    }
  },
  actions: {
    setAuth({ commit }, { userLogin, token }) {
      commit('setAuth', { userLogin, token })
    },
    setRedirectPath({ commit }, path) {
      commit('setRedirectPath', path)
    },
    async setFristAuth({ commit }) {
      console.log('token_value进行后台请求了一次')
      let res = await this.$axios.get(
        `${process.env.baseUrl}/admin/token/${localStorage.token}`
      )
      if (res.status === 200 && res.data.err == 0) {
        let userLogin = {
          user_name: res.data.user_name,
          nick_name: res.data.nick_name
        }
        let token = localStorage.token
        commit('setAuth', { userLogin, token })
      }
    }
  },
  getters: {
    isAuth(state) {
      return state.token.trim() != ''
    }
  },
  modules: {}
}
