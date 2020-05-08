<template>
  <div class="text-right float-right d-flex">
    <transition name="slide-fade">
      <v-btn
        fab
        depressed
        x-small
        color="primary"
        width="18px"
        height="18px"
        v-show="goods.num>0"
        @click.prevent="decreaseCart()"
      >
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>
    </transition>
    <v-btn
      text
      x-small
      height="18px"
      class="mx-0 px-0 body-2 red--text text--darken-1"
      v-show="goods.num>0"
      disabled
    >
      {{goods.num}}
    </v-btn>
    <v-btn
      fab
      depressed
      x-small
      color="primary"
      width="18px"
      height="18px"
      @click.prevent="addCart()"
    >
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>

</template>
<script>
export default {
  props: {
    goods: {
      type: Object
    }
  },
  methods: {
    addCart () {
      if (!event._constructed) {
        return;
      }
      this.goods.num++;
      this.$emit('cart_add', event.target)
    },
    decreaseCart () {
      if (!event._constructed) {
        return;
      }
      if (this.goods.num) {
        this.goods.num--;
      }
    }
  }
}
</script>
<style lang="less" scope>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0, 0);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(16px) rotate(360deg);
  opacity: 0;
}
</style>