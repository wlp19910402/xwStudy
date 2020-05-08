<template>
  <v-app class="grey lighten-3">
    <nuxt />
    <v-footer
      padless
      :fixed="
    fixed"
      app
      flat
      elevation="1"
    >
      <footer-bar />
    </v-footer>
  </v-app>
</template>

<script>
import FooterBar from '~/components/FooterBar.vue'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: { FooterBar },
}
</script>
<style>
body {
  background: #f0f0f0;
}
.theme--light.v-application {
  background: transparent;
}
</style>
