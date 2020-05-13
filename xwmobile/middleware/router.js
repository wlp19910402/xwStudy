export class Res {
  constructor(name, path, isAuth = true) {
    this.name = name
    this.path = path
    this.isAuth = isAuth
  }
}

const LoginRes = new Res('登录页面', '/login', false)

const ResArray = [
  new Res('注册', '/reg', false),
  new Res('首页', '/home', false),
  new Res('默认', '/', false),
  new Res('购物车', '/cart'),
  new Res('我的订单', '/order'),
  new Res('我的', '/my'),
  new Res('帮助中心', '/my/help'),
  new Res('用户信息', '/account/info'),
  LoginRes
]

// export async function authDoFilter(
//   path,
//   redirect,
//   setFristAuth,
//   isAuth,
//   setRedirectPath
// ) {
//   await setFristAuth()
//   const needLogin = ResArray.find((res) => {
//     return res.path === path && res.isAuth && !isAuth()
//   })
//   if (needLogin) {
//     setRedirectPath()
//     redirect(LoginRes.path)
//   }
// }

export default async ({ route, redirect, store }) => {
  const path = route.path
  await store.dispatch('setFristAuth')
  const needLogin = ResArray.find((res) => {
    return res.path === path && res.isAuth && !store.getters['isAuth']
  })
  if (needLogin) {
    store.dispatch('setRedirectPath', path)
    redirect(LoginRes.path)
  }
  // authDoFilter(
  //   route.path,
  //   redirect,
  //   () => store.dispatch('setFristAuth'),
  //   () => store.dispatch('setRedirectPath', route.path),
  //   () => store.getters['isAuth']
  // )
}
