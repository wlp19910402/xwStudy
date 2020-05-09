import avatars from '~/assets/images/avatars.jpg'
export default {
  state: {
    user: {
      user_name: '',
      head_img_location: avatars,
      nick_name: ''
    },
    redirectPath: '/home',
    shopcartBarIsHome: false
  },
  mutations: {
    setUser(state, userLogin) {
      state.user.user_name = userLogin.user_name
      state.user.nick_name = userLogin.nick_name
    },
    setRedirectPath(state, path) {
      state.redirectPath = path
    }
  },
  actions: {
    setUser({ commit }, userLogin) {
      commit('setUser', userLogin)
    },
    setRedirectPath({ commit }, path) {
      commit('setRedirectPath', path)
    }
  },
  getters: {},
  modules: {}
}
