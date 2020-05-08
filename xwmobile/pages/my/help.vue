<template>
  <div>
    <header-bar barTitile='帮助中心'></header-bar>
    <v-content>
      <v-row
        justify="center"
        class="mx-4 py-4"
      >
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(item,index) in helpList"
            :key="item.id"
          >
            <v-expansion-panel-header>
              <div>Q{{index+1}}:{{item.problem}}</div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="d-flex flex-row grey lighten-4 ">
                <v-divider
                  vertical
                  style="border-left:2px solid #EF5350;"
                  class="mr-2"
                ></v-divider>
                <div class="py-2 pr-1">
                  <p
                    class="grey-text"
                    v-for="ite,idx in item.answer"
                  >{{idx+1}}.{{ite}}</p>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-content>
  </div>
</template>
<script>
import HeaderBar from '~/components/HeaderBar'
export default {
  data () {
    return {
      helpList: [
        {
          id: 0, problem: '如何修改个人信息?', answer: [
            '点击下方导航栏中的个人中心，选择个人信息，即可编辑您的个人信息。'
          ]
        },
        {
          id: 1, problem: '如何修改密码?', answer: [
            '点击下方导航栏中的个人中心，选择密码修改，进入修改密码页面，输入旧密码、新密码、确认新密码',
            '点击[确定修改]按钮，即可修改密码，修改密码成功后，需要您重新登录。'
          ]
        },
        {
          id: 2, problem: '如何添加收货地址?', answer: [
            '点击下方导航栏中的个人中心，选择收货地址管理，点击[新增收货地址]',
            '进入新增收货地址页面，输入收货人、联系方式、配送地址，点击[保存]按钮。',
            '弹出确定[保存]提示，点击[确定]按钮，新增成功，则提示新增成功',
            '在地址管理中可以管理您的地址。'
          ]
        },
        {
          id: 3, problem: '如何修改收货地址?', answer: [
            '点击下方导航栏中的个人中心，选择收货地址管理，找到需要修改的地址，点击[编辑]',
            '进入编辑收货地址页面，可修改收货人、联系方式、配送地址以及是否默认，点击[保存]按钮。',
            '弹出确定[保存]提示，点击[确定]按钮，编辑成功，则提示编辑成功'
          ]
        },
        {
          id: 4, problem: '如何提交订单?', answer: [
            '选择购物车内的商品，点击[提交订单] 或 点击首页下方的[去结算]按钮',
            '进入提交订单页面',
            '默认使用第一个地址或手动选择地址或添加新地址',
            '输入您的备注(非必填)',
            '点击[提交订单]按钮，付款后您即可在订单列表中查看您的订单'
          ]
        },
        {
          id: 5, problem: '如何查看订单信息?', answer: [
            '点击下方导航栏中的订单，可以查看您的订单',
            '点击下方导航栏中的个人中心，选择我的订单，可以查看您的订单',
            '点击上方导航栏，可以按订单状态查看订单',
            '选择您想要查看的订单，点击，即可查看订单详情'
          ]
        },
        {
          id: 6, problem: '如何收藏商城并查看我的收藏?', answer: [
            '点击下方导航栏中的首页，点击界面右上角的[收藏]按钮，当按钮变为[已收藏]，表示收藏成功',
            '若想取消收藏，点击[已收藏]按钮，当按钮变为[收藏]，表示取消收藏成功',
            '查看我的收藏请点击下方导航栏中的个人中心，选择我的收藏',
            '浏览您收藏过的商城，点击即可切换商城'
          ]
        },
        {
          id: 7, problem: '如何退货?', answer: [
            '选择想要退货的订单，点击[申请退货]按钮',
            '或者进入商品详情页面，点击页面下方的[申请退款]按钮',
            '请您耐心等待商家同意退款，或与商家沟通'
          ]
        },
        {
          id: 8, problem: '已经支付但是订单状态为待付款怎么办?', answer: [
            '在订单列表中找到代付款的订单',
            '点击右下角的[查询支付结果]按钮，订单状态变为代发货，则表明您已成功支付'
          ]
        },
        {
          id: 9, problem: '订单状态为已完成，但是没有收到货怎么办?', answer: [
            '当订单状态为已完成，但没有收到货',
            '您需要与商家进行沟通，询问未收到商品的原因'
          ]
        },
        {
          id: 10, problem: '怎么查看商品详情?', answer: [
            '在首页点击商品或点击购物车内的商品或点击订单详情内的商品',
            '均可查看商品详情'
          ]
        },
        {
          id: 11, problem: ' 忘记密码怎么办?', answer: [
            '点击登录页面的[忘记密码?]，进入找回密码页面',
            '输入手机号、短信验证码、新密码、确认新密码，点击[确定修改密码]按钮',
            '提示修改密码成功，进入登录页面，即可用新密码登录'
          ]
        },
        {
          id: 12, problem: '购物车内有已下架商品，无法提交订单怎么办?', answer: [
            '购物车内有下架的商品，您无法购买该商品',
            '删除购物车内已下架的商品',
            '或者下单时不选择已下架的商品，即可提交订单'
          ]
        },
        {
          id: 13, problem: '收货地址填错怎么办?', answer: [
            '请您及时联系商家，告知商家您的正确地址。'
          ]
        },
        {
          id: 14, problem: '我该如何联系商家?', answer: [
            '商家的联系方式在首页顶部，联系电话一栏，您可拨打电话与商家沟通'
          ]
        }
      ]
    }
  },
  components: { HeaderBar }
}
</script>