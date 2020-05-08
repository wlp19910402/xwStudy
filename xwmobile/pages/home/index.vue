<template>
  <div>

    <v-app-bar
      app
      flat
      elevation="1"
      color="white"
      class="px-0 py-0 qm-home-app-bar "
      height="116px"
      tile
    >
      <div
        class="qm-header-img"
        :style="'background: url('+$store.state.user.head_img_location+') left center/cover no-repeat;'"
      ></div>
      <v-list
        tile
        class="qm-header-img-filter"
      >
        <v-list-item>
          <v-list-item-avatar size="48">
            <img :src="$store.state.user.head_img_location">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{$store.state.user.user_name}}</v-list-item-title>
            <div
              class="white--text text-line2-ellipsis caption"
              v-for="item in card.declist"
            >{{item.text}}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-app-bar>
    <v-content class="qm-home-content">
      <div class="d-flex qm-home-content-flex ">
        <v-item-group
          v-model="window"
          class="shrink qm-home-left-menu"
          mandatory
        >
          <div class="algin-item">
            <v-item
              v-for="item,index in goodClassList"
              :key="item.id"
            >
              <div :class="['qm-left-menu-text',' font-weight-light',item.title.length>8?'caption':'body-2',index===1?'active':'']">
                <span>
                  {{item.title}}
                </span>
              </div>
            </v-item>
          </div>
        </v-item-group>

        <div
          class="qm-home-right-content"
          vertical
          ref="foodswrapper"
        >
          <div>
            <v-list
              two-line
              class="px-2"
            >
              <template v-for="ite,index in storeList.goodList">
                <v-list-item class="px-2">
                  <v-list-item-avatar
                    tile
                    size="38px"
                    class="my-2 mr-2"
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
                    <v-list-item-subtitle class="text-right ">
                    </v-list-item-subtitle>
                  </div>
                </v-list-item>
                <div class="ml-12 pl-4 d-flex align-center mr-4 mt-n2 mb-2">
                  <div class="text-left body-2">{{ite.value}} </div>
                  <v-spacer></v-spacer>
                  <cart-contral
                    :goods="ite"
                    v-on:cart_add="cartAdd"
                  ></cart-contral>
                </div>
                <v-divider
                  inset
                  v-if="index!=storeList.goodList.length-1"
                ></v-divider>
              </template>
            </v-list>
          </div>
        </div>
      </div>
    </v-content>
    <shop-cart-bar
      ref="shopcartbar"
      :shopCartIsHome="shopCartIsHome"
    ></shop-cart-bar>
  </div>
</template>

<script>

import CartContral from '~/components/CartContral'
import ShopCartBar from '~/components/ShopCartBar'
import BScroll from '@better-scroll/core'
export default {
  data: () => ({
    shopCartIsHome: true,
    card:
    {
      title: '便利蜂',
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      flex: 12,
      declist: [
        {
          id: 0,
          text: '营业时间：24小时营业'
        },
        {
          id: 1,
          text: '起送费：￥1.00'
        },
        {
          id: 2,
          text: '联系电话：188888888888'
        }, {
          id: 3,
          text: '地址：朝阳区地址朝阳区地址朝阳区地址朝阳区地址朝阳区地址朝阳区地址朝阳区地址朝阳区地址朝阳区地址'
        }
      ]
    },
    length: 3,
    window: 0,
    storeList:
    {
      ID: 'DD222338882',
      storeName: '爱美丽',
      state: '已完成',
      goodList: [
        { num: '3', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
        { num: '0', value: '198.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335939418&di=d1c0b55b464dca09cd103050986f647b&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F08f790529822720e397728e170cb0a46f21fab74.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述" },
        { num: '0', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },
        { num: '0', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
        { num: '0', value: '198.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335939418&di=d1c0b55b464dca09cd103050986f647b&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F08f790529822720e397728e170cb0a46f21fab74.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述" },
        { num: '0', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },
        { num: '0', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },
        { num: '0', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
        { num: '0', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },
        { num: '3', value: '28.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588334036746&di=aebbfee8278ed29d85161c9bfd98c3d2&imgtype=0&src=http%3A%2F%2Fimg.daimg.com%2Fuploads%2Fallimg%2F141018%2F3-14101Q61544.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述描述" },
        { num: '0', value: '198.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335939418&di=d1c0b55b464dca09cd103050986f647b&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fbaike%2Fpic%2Fitem%2F08f790529822720e397728e170cb0a46f21fab74.jpg', title: '新鲜草莓', subtitle: "今天新摘的哦，很香甜，美味等你哦。继续描述描述描述描述" },
        { num: '0', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },
        { num: '0', value: '8.80', avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588335980600&di=2445d5efff279fc9bd29b3e4ff8f0be2&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D187315319%2C1716361749%26fm%3D214%26gp%3D0.jpg', title: '新鲜草莓i', subtitle: "今天新摘的哦，" },

      ]
    },
    goodClassList: [
      { id: 1, title: '商品名称', sales: '3', salesValue: false },
      { id: 2, title: '商品名称商品名称商品名称', sales: '1', salesValue: '5折' },
      { id: 3, title: '商品名称商品名称', sales: '1', salesValue: '5折' },
      { id: 4, title: '商品名称商品名称', sales: '1', salesValue: '5折' },
      { id: 5, title: '商品', sales: '1', salesValue: '5折' },
      { id: 6, title: '商品名称', sales: '1', salesValue: '5折' },
      { id: 7, title: '商品名称商品名称', sales: '1', salesValue: '5折' },
      { id: 8, title: '商品名称1', sales: '1', salesValue: '5折' },
      { id: 9, title: '商品名称商品名称商品名称', sales: '1', salesValue: '5折' },
      { id: 10, title: '商品名称', sales: '1', salesValue: '5折' },
      { id: 11, title: '商品名称商品名称', sales: '1', salesValue: '5折' },
      { id: 12, title: '商品名称', sales: '2', salesValue: false }
    ],
    scrollY: 0,

  }),
  created () {
  },
  computed: {
    selectGoods () {
      let goodsArr = [];
      this.storeList.forEach((store) => {
        store.goodList.forEach((good) => {
          if (good.num) {
            goodsArr.push(good);
          }
        })
      });
      return goodsArr;
    },

  },
  mounted () {
    let menuwrapper = document.querySelector('.qm-home-left-menu')
    let bs = new BScroll(menuwrapper);
    let foodwrapper = document.querySelector('.qm-home-right-content')
    let fs = new BScroll(foodwrapper, {
      click: true
    });
  },
  methods: {
    cartAdd (el) {
      this.$nextTick(() => {
        this.$refs[ 'shopcartbar' ].drop(el)
      })
    }
  },
  components: { CartContral, ShopCartBar }
}
</script>
<style lang="less">
.qm-home-left-menu {
  flex: 0 0 4.8rem;
  overflow: hidden;
}
.qm-home-right-content {
  flex: 1;
  overflow: hidden;
  background: #fafafa;
}
.qm-home-content {
  padding-top: 116px !important;
  padding-bottom: 92px !important;
  position: absolute;
  width: 100%;
  height: 100%;
}
.qm-home-content-flex {
  display: flex;
  height: 100%;
}
.qm-left-menu-text {
  width: 100%;
  padding: 0 7px;
  line-height: 1rem !important;
  &.active {
    background: #ffffff;
    position: relative;
    span {
      border-bottom: 1px solid #ffffff;
      &::before {
        padding: 6px 0;
        margin-top: -1px;
        border-top: 1px solid #ffffff;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        content: "";
      }
    }
  }
  span {
    padding: 8px 0;
    width: 100%;
    min-height: 54px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    &::after {
      padding: 6px 0;
    }
  }
}
.qm-home-app-bar {
  overflow: hidden;
}
.qm-header-img {
  width: 120%;
  position: absolute;
  height: 120%;
  left: -10%;
  top: -10%;
  filter: blur(10px);
}

.v-application .caption {
  line-height: 0.9rem;
}
.qm-header-img-filter {
  background-color: rgba(0, 0, 0, 0.6) !important;
  width: 100%;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  padding: 0;
  border-radius: 0;
}
</style>