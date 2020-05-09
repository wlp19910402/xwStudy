<template>
  <v-dialog v-model="dialog" max-width="290">
    <v-card>
      <v-card-title class="headline">安全退出</v-card-title>

      <v-card-text>
        请确认是否退出当前登录账号
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" text @click="this.$parent.dialog = false">
          否
        </v-btn>

        <v-btn color="green darken-1" text @click="this.$parent.dialog = false">
          是
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: ['parent', 'dialog']
}
</script>
