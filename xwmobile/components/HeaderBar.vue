<template>
  <v-app-bar
    app
    color="white"
    elevation="1"
  >
    <v-toolbar-title>{{barTitile}}</v-toolbar-title>
  </v-app-bar>
</template>
<script>
export default {
  props: [ 'barTitile' ]
}
</script>