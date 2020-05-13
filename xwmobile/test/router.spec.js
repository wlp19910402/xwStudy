import auth from '~/middleware/router'

describe('auth2的测试', () => {
  it('测试默认的', () => {
    auth({
      route: { path: '/my' },
      redirect: (path) => {
        console.log(path)
      },
      store: {
        dispatch: async (str, path) => console.log(str, path),
        getters: {
          isAuth: false
        }
      }
    })
  })
})
// describe('auth2的测试', () => {
//   it('执行啦', () => {
//     authDoFilter(
//       '/my',
//       (redirect) => {
//         console.log('重定向之后的值', redirect)
//       },
//       () => {
//         console.log('setFristAuth 执行了')
//       },
//       () => {
//         console.log('isAuth 执行了')
//         return true
//       },
//       () => {
//         console.log('setRedirectPath 执行了')
//         return false
//       }
//     )
//   })
// })
