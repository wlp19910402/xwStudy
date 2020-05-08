<template>
  <v-bottom-navigation
    grow
    flat
    elevation="1"
    color="primary"
  >
    <v-btn
      v-for="item in footerBarList"
      :key="item.id"
      :to="item.link"
    >
      <span>{{item.name}}</span>
      <v-icon>{{item.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data () {
    return {
      footerBarList: [
        {
          id: 0, name: '首页', icon: "mdi-home", link: '/home'
        },
        {
          id: 1, name: '购物车', icon: "mdi-cart", link: '/cart'
        },
        {
          id: 2, name: '订单', icon: "mdi-menu", link: '/order'
        },
        {
          id: 3, name: '我的', icon: "mdi-account", link: '/my'
        }
      ]
    }
  }
}
</script>