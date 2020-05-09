import axios from 'axios'

export default async function({ route, store, redirect }) {
  const redirectUrl = route.path
  const nulogin = ['/login', '/reg', '/home', '/better-scroll']
  // console.log('dddd', store.state.user.user_name)
  console.log(11)
  if (!store.state.user.user_name) {
    // alert("store没有登录状态值。进来获取了一次");
    let res = await axios.get(`
      ${process.env.baseUrl}/admin/token/${localStorage.token_value}
    `)
    if (res.status === 200) {
      if (res.data.err > 0) {
        if (!nulogin.includes(route.path)) {
          store.dispatch('setRedirectPath', redirectUrl)
          alert(res.data.msg)
          return redirect('/login')
        }
      } else {
        let userLogin = {
          user_name: res.data.user_name,
          nick_name: res.data.nick_name
        }
        store.dispatch('setUser', userLogin)
      }
    } else {
      store.dispatch('setRedirectPath', redirectUrl)
      alert(res.data.msg)
      return redirect('/login')
    }
  }
}
