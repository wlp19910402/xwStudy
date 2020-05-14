import routerguards from '~/plugins/routerguards'
// import VueRouter from 'vue-router'
describe('页面跳转触发全局前置守卫', () => {
  it('routerguards', async () => {
    // const router = new VueRouter({
    //   mode: 'history',
    //   base: process.env.BASE_URL
    // })
    const to = { name: 'login', path: '/login' }
    const from = { name: 'home', path: '/home' }
    const next = jest.fn()
    await routerguards({
      app: {
        router: {
          beforeEach: (async (to, from, next) => { console.log(to, from, next) })
        }
      }
    })
  })
})
