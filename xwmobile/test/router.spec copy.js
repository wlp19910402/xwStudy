import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '~/pages/App'
import NestedRoute from '~/pages/App/NestedRoute'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App', () => {
  it('测试组件的路由', () => {
    // const router = new VueRouter({ routes })
    const wrapper = mount(App)

    // router.push('/NestedRoute')
    expect(wrapper.find(NestedRoute).exists()).toBe(true)
  })
})

// const $route = {
//   path: '/some/path',
//   requireAuth: true
// }
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (store.state.token) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }
//   } else {
//     next()
//   }
// })

// axios.interceptors.request.use(
//   (config) => {
//     if (store.state.token) {
//       config.headers.Authorization = `token ${store.state.token}`
//     }
//     return config
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

// // http response 拦截器
// axios.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           // 401 清除token信息并跳转到登录页面
//           store.commit(types.LOGOUT)
//           // 只有在当前路由不是登录页面才跳转
//           router.currentRoute.path !== 'login' &&
//             router.replace({
//               path: 'login',
//               query: { redirect: router.currentRoute.path }
//             })
//       }
//     }
//     // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//     return Promise.reject(error.response.data)
//   }
// )

//1-----------
// const $route = {
//   path: '/some/path',
//   hash: '',
//   params: { id: '123' },
//   query: { q: 'hello' }
// }

// const wrapper = shallowMount(App, {
//   mocks: {
//     $route
//   }
// })

// wrapper.vm.$route.path // /some/path

//2-----------
//创建一个扩展的'VUE'构造函数
// const localVue = createLocalVue()
// //正常安装插件
// localVue.use(MyPlugin)

// //在挂载选项中传入 'localVue'
// mount(Component, {
//   localVue
// })
