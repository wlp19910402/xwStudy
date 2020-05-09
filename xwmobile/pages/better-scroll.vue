<template>
  <div class="gougou">
    <ul>
      <li>
        <v-btn @click="duigouFun">对勾对勾</v-btn>
      </li>
    </ul>
    <div class="gouanimatebox">
      <transition
        name="du"
        @before-enter="duigoubefore"
        @enter="duigou"
        @after-enter="duigouafter"
      >
        <div v-show="gou" class="duigou-box">
          <div class="duigou"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gou: true
    }
  },
  methods: {
    duigouFun() {
      this.gou = true
      return
    },
    duigoubefore() {
      const el = document.querySelector('.duigou')
      const elp = document.querySelector('.duigou-box')
      elp.style.webkitTransform = 'translate3d(60px,-130px,0)'
      elp.style.transform = 'translate3d(50px,-130px,0)'
      el.style.webkitTransform = 'translate3d(96px,0,0)'
      el.style.transform = 'translate3d(96px,0,0)'
    },
    duigou() {
      const el = document.querySelector('.duigou')
      const elp = document.querySelector('.duigou-box')
      elp.style.webkitTransform = 'translate3d(0,-230px,0)'
      elp.style.transform = 'translate3d(0,-230px,0)'

      el.style.webkitTransform = 'translate3d(220,0,0)'
      el.style.transform = 'translate3d(220,0, 0)'
    },
    duigouafter() {
      let el = document.querySelector('.duigou')
      // el.style.transform = "translate3d(236px, 10px, 0)"
    }
  }
}
</script>

<style scoped>
.gougou {
  padding: 100px 0;
  width: 100%;
}
.duigou-box {
  transition: all 0.6s cubic-bezier(0.4, -0.4, 0.1, 0.2);

  /* z-index: 200;
  position: fixed;
  left: 36px;
  bottom: 120px;
  transition: all 3s cubic-bezier(0.49, -0.29, 0.75, 0.41); */

  position: fixed;
  z-index: 200;
  left: 14px;
  bottom: 120px;
  /* transition: all 0.6s cubic-bezier(0.49, -0.29, 0.75, 0.41); */
}
.duigou {
  /* width: 16px;
  height: 16px; */
  background: #fa4848;
  /* transition: all 3s linear; */

  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: all 0.6s linear;
}
</style>
