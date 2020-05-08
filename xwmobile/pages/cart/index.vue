<template>
  <div>
    <v-app-bar
      app
      flat
      elevation="1"
      color="white"
      height="36px"
    >
      <v-checkbox
        v-model="checkbox"
        small
        width="10px"
        height="10px"
        class="mt-5 display-2 mx-0 my-0 py-0"
      ></v-checkbox>
      <div
        class="grey-text px-0 body-2"
        v-model="checkbox"
      >全选</div>
      <v-spacer></v-spacer>
      <v-btn
        text
        small
        class="grey-text px-0 body-2"
      >清空购物车</v-btn>
    </v-app-bar>
    <div class="qm-bscroll-screen-box qm-bscroll-screen-box-py-cart">
      <div class="qm-bscroll-screen">
        <div class="py-3">
          <v-card
            flat
            v-for="item,index in orderList"
            class="mx-3 mb-3"
          >

            <v-card-title class="pb-0 subtitle-2">{{item.storeName}}</v-card-title>

            <v-card-text class="pb-1">
              <v-row
                align="center"
                class="mx-0 "
              >
                <v-spacer></v-spacer>
                <v-icon>mid-bin</v-icon>
              </v-row>
            </v-card-text>
            <v-divider class="mx-2"></v-divider>

            <v-list two-line>
              <template v-for="(ite, index) in item.goodList">
                <v-list-item>
                  <v-checkbox
                    v-model="checkbox"
                    small
                    width="10px"
                    height="10px"
                    class="mt-5 display-2 mx-0 my-0 py-0"
                  ></v-checkbox>
                  <v-list-item-avatar
                    tile
                    size="38px"
                    class="my-2 mr-2 "
                  >
                    <img :src="ite.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="body-2 d-flex">{{ite.title}}</v-list-item-title>
                    <v-list-item-subtitle
                      class="caption grey--text"
                      v-html="ite.subtitle"
                    ></v-list-item-subtitle>

                  </v-list-item-content>
                  <div class="ml-1">
                    <v-list-item-title class="text-right caption">
                      <div class="ml-auto float-right">
                        <img
                          width="18px"
                          src="../../assets/images/lajixiang.svg"
                        />
                      </div>
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-right ">

                    </v-list-item-subtitle>
                  </div>
                </v-list-item>
                <div class="ml-12 pl-12 d-flex align-center mr-4 mt-n2 mb-2">
                  <div class="text-left body-2">￥{{ite.value}} </div>
                  <v-spacer></v-spacer>
                  <cart-contral
                    :goods="ite"
                    v-on:cart_add="cartAdd"
                  ></cart-contral>
                </div>
                <v-divider
                  v-if="index!=item.goodList.length-1"
                  class="ml-12"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </div>
      </div>
    </div>
    <shop-cart-bar
      ref="shopcartbar"
      :shopCartIsHome="shopCartIsHome"
    ></shop-cart-bar>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import CartContral from '~/components/CartContral'
import ShopCartBar from '~/components/ShopCartBar'
export default {
  data: () => ({
    shopCartIsHome: false,
    snackbar: true,
    checkbox: false,
    orderList: [
      {
        ID: 'DD222338888',
        storeName: '便利蜂',
        state: '待支付',
        goodList: [
          { num: '3', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
        ]
      },
      {
        ID: 'DD222338881',
        storeName: '我爱馒头',
        state: '已支付',
        goodList: [
          { num: '3', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
          { num: '2', value: '198.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335939418&di=d1c0b55b464dca09cd103050986f647b&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F08f790529822720e397728e170cb0a46f21fab74.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },

        ]
      },
      {
        ID: 'DD222338882',
        storeName: '爱美丽',
        state: '已完成',
        goodList: [
          { num: '3', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
          { num: '2', value: '198.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335939418&di=d1c0b55b464dca09cd103050986f647b&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F08f790529822720e397728e170cb0a46f21fab74.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述" },
          { num: '1', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },

        ]
      },
      {
        ID: 'DD222338882',
        storeName: '爱美丽',
        state: '已完成',
        goodList: [
          { num: '3', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
          { num: '2', value: '198.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335939418&di=d1c0b55b464dca09cd103050986f647b&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F08f790529822720e397728e170cb0a46f21fab74.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述" },
          { num: '1', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },

        ]
      }
    ],
  }),
  mounted () {
    let bscroll = document.querySelector('.qm-bscroll-screen')
    let bs = new BScroll(bscroll, {
      click: true
    });
  },
  components: { CartContral, ShopCartBar },
  methods: {
    cartAdd (el) {
      this.$nextTick(() => {
        this.$refs[ 'shopcartbar' ].drop(el)
      })
    }
  },
}
</script>
<style scoped>
.qm-bscroll-screen-box-py-cart {
  padding: 36px 0 92px;
}
</style>