<template>
  <div class="d-flex white align-center qm-cart-fixed">
    <div class="ml-3">
      <v-badge bordered color="primary" content="198" overlap>
        <v-btn icon class="primary">
          <v-icon color="white" size="24">mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </div>
    <span v-if="shopCartIsHome" class="text-center  mx-1 body-2">
      ￥330.0
    </span>
    <v-spacer></v-spacer>
    <v-divider v-if="shopCartIsHome" vertical></v-divider>
    <span class="text-right mr-1 body-2" v-if="!shopCartIsHome">
      <span class="grey-text caption">总计:</span>￥1330.0
    </span>

    <v-btn v-if="shopCartIsHome" text small color="primary">收藏</v-btn>
    <v-btn color="primary" depressed tile class="pr-6 pl-6">去结算 </v-btn>
    <div class="ball-container">
      <transition
        v-for="(ball, index) in balls"
        :key="index"
        name="drop"
        @before-enter="beforeDrop"
        @enter="dropping"
        @after-enter="afterDrop"
      >
        <div class="ball" v-show="ball.show" :css="false">
          <div class="inner inner-hook primary"></div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    shopCartIsHome: {
      type: Boolean
    }
  },
  data() {
    return {
      balls: [
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        },
        {
          show: false
        }
      ],
      dropBalls: []
    }
  },
  methods: {
    drop(el) {
      for (let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i]
        if (!ball.show) {
          ball.show = true
          ball.el = el
          this.dropBalls.push(ball)
          return
        }
      }
    },
    beforeDrop(el) {
      let count = this.balls.length
      while (count--) {
        let ball = this.balls[count]
        if (ball.show) {
          let rect = ball.el.getBoundingClientRect()
          let x = rect.left - 14
          let y = -(window.innerHeight - rect.top - 60)
          el.style.webkitTransform = `translate3d(0,${y}px,0)`
          el.style.transform = `translate3d(0,${y}px,0)`
          let inner = el.getElementsByClassName('inner-hook')[0]
          inner.style.webkitTransform = `translate3d(${x}px,0,0)`
          inner.style.transform = `translate3d(${x}px,0,0)`
        }
      }
    },
    dropping(el) {
      let rf = el.offsetHeight
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)'
        el.style.transform = 'translate3d(0,0,0)'
        let inner = el.getElementsByClassName('inner-hook')[0]
        inner.style.webkitTransform = 'translate3d(0,0,0)'
        inner.style.transform = 'translate3d(0,0,0)'
      })
    },
    afterDrop(el) {
      let ball = this.dropBalls.shift()
      if (ball) {
        ball.show = false
        el.style.display = 'none'
      }
    }
  }
}
</script>

<style lang="less" scope>
.qm-cart-fixed {
  position: fixed;
  left: 0;
  bottom: 3.5rem;
  width: 100%;
  background: #fff;
  box-shadow: 0px -1px 1px 0px rgba(0, 0, 0, 0.08) !important;
}
.ball-container {
  .ball {
    position: fixed;
    z-index: 200;
    left: 14px;
    bottom: 60px;
    transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    .inner {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transition: all 0.6s linear;
    }
  }
}
</style>
