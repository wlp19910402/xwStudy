<template>

  <div>
    <v-app-bar
      app
      flat
      elevation="1"
      color="white"
      height="48px"
    >
      <v-tabs fixed-tabs>
        <v-tab
          style="width:20%;min-width:20px;padding:0 "
          v-for="item in orderMenuList"
          :key="item.id"
        >
          {{item.title}}
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <div class="qm-bscroll-screen-box qm-bscroll-screen-box-py-order">
      <div class="qm-bscroll-screen">
        <div class="py-3">
          <v-card
            :loading="loading"
            flat
            class="mx-3 mb-3"
            v-for="(item,index) in orderList"
            :key="item.ID"
          >
            <v-card-title class="pb-0 subtitle-2">{{item.storeName}}</v-card-title>

            <v-card-text class="pb-1">
              <v-row
                align="center"
                class="mx-0 "
              >
                <div class="caption">
                  订单编号：{{item.ID}}
                </div>
                <v-spacer></v-spacer>
                <div class="green--text caption">{{item.state}}</div>
              </v-row>
            </v-card-text>
            <v-divider class="mx-2"></v-divider>

            <v-list two-line>
              <template v-for="(ite, index) in item.goodList">
                <v-list-item>
                  <v-list-item-avatar
                    tile
                    size="54px"
                    class="my-2 mr-2 "
                  >
                    <img :src="ite.avatar">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title
                      class="body-2"
                      v-html="ite.title"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      class="caption text-line2-ellipsis grey--text"
                      v-html="ite.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="ml-1">
                    <v-list-item-title class="text-right caption">{{ite.value}}</v-list-item-title>
                    <v-list-item-subtitle class="text-right overline">x{{ite.num}}</v-list-item-subtitle>
                  </div>
                </v-list-item>
                <v-divider
                  v-if="index!=item.goodList.length-1"
                  inset
                ></v-divider>
              </template>
            </v-list>

            <v-card-text class="pt-0">
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <!-- <v-chip>查看支付结果</v-chip>
            <v-chip>再来一单</v-chip> -->
                <v-btn
                  small
                  outlined
                  class="ml-auto mr-2"
                  color="grey"
                >查询账单结果</v-btn>
                <v-btn
                  outlined
                  small
                  color="primary"
                >再来一单</v-btn>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      orderMenuList: [
        { id: 0, title: '全部', link: '/order/list' },
        { id: 1, title: '待付款', link: '/order/list' },
        { id: 2, title: '待收货', link: '/order/list' },
        { id: 3, title: '已完成', link: '/order/list' },
        { id: 4, title: '已退货', link: '/order/list' }
      ],
      loading: false,
      selection: 1,
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
        }
      ],
    }
  },
  mounted () {
    let bscroll = document.querySelector('.qm-bscroll-screen')
    let bs = new BScroll(bscroll, {
      click: true
    });
  },
}
</script>
<style >
/* class="v-slide-group__prev v-slide-group__prev--disabled" */
/* .slide-group__prev,
.v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
  > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes)
  .v-slide-group__prev {
  display: none !important;
} */
</style>
<style scoped>
.v-tab:before {
  background: #ffffff;
}
.qm-bscroll-screen-box-py-order {
  padding: 48px 0 56px;
}
</style>