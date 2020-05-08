<template>
  <div>

    <v-card
      class="mx-auto mb-3"
      outlined
      tile
    >
      <v-list two-line>
        <v-list-item>
          <v-list-item-avatar size="60">
            <img :src="$store.state.user.head_img_location">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{$store.state.user.nick_name}}</v-list-item-title>
            <v-list-item-subtitle>{{$store.state.user.user_name}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card
      outlined
      tile
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-item
            v-if="item.title"
            :key="item.title"
            :to="item.link=='/login'? '':item.link"
            @click="item.link=='/login'? dialog=true:''"
          >

            <!-- @click=`${item.link=='/login'
            ?'clearStore':''}` -->
            <v-list-item-avatar size="28">
              <img :src="item.avatar">
            </v-list-item-avatar>
            <v-list-item-content class="ml-3">
              <v-list-item-title
                class="subtitle-2"
                v-html="item.title"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-divider
            inset
            v-if="items.length!=(index+1)"
          ></v-divider>
        </template>
      </v-list>
    </v-card>
    <!-- <Dialog
      :dialog="dialog"
      :parent="this"
    /> -->
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">安全退出</v-card-title>

        <v-card-text>
          请确认是否退出当前登录账号
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            否
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="clearStore()"
          >
            是
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import passwordIcon from "~/assets/images/menu/password.png"
import adressIcon from "~/assets/images/menu/adress.png"
import exitIcon from "~/assets/images/menu/exit.png"
import helpIcon from "~/assets/images/menu/help.png"
import collectIcon from "~/assets/images/menu/collect.png"

import Dialog from '~/components/Dialog'
export default {
  data: () => ({
    items: [
      { avatar: passwordIcon, title: '密码修改', link: '/home' },
      { avatar: adressIcon, title: '收货地址管理', link: '/home' },
      { avatar: collectIcon, title: '我的收藏', link: '/home' },
      { avatar: helpIcon, title: '帮助中心', link: '/my/help' },
      { avatar: exitIcon, title: '退出账号', link: '/login' }
    ],
    dialog: false
  }),
  methods: {

    clearStore () {
      localStorage.clear();
      let userLogin = { user_name: '', nick_name: '' }
      this.$store.dispatch('setUser', userLogin);
      this.$store.state.redirectPath = '/home';
      this.dialog = false
      this.$router.push('/login');
    }
  },
  components: { Dialog }
}
</script>