<template>
  <v-container fluid>
    <v-form method="post" ref="form" :lazy-validation="lazy">
      <v-text-field
        v-model="username"
        single-line
        name="user_name"
        label=""
        placeholder="请输入手机号"
        autocomplete="false"
        :rules="usernameRules"
        required
        validate-on-blur
      ></v-text-field>
      <v-text-field
        v-model="password"
        single-line
        validate-on-blur
        label=""
        placeholder="请输入密码"
        name="password"
        :rules="passwordRules"
        class="mt-n2"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1 = !show1"
        :type="show1 ? 'text' : 'password'"
        required
      ></v-text-field>
      <div class="field-verification-code">
        <v-text-field
          v-model="verificationCode"
          :rules="verificationCodeRules"
          single-line
          validate-on-blur
          label=""
          placeholder="请输入验证码"
          type="text"
          required
          class="mt-n2"
        >
        </v-text-field>
        <img width="80px" height="37px" src="../assets/images/ma.png" />
      </div>
      <v-btn
        text
        :disabled="!valid"
        class="ml-auto float-right mt-n3 caption px-0 mb-2"
      >
        忘记密码
      </v-btn>
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        block
        @click="submit_form()"
      >
        登录
      </v-btn>

      <v-btn
        block
        :disabled="!valid"
        class="mt-2"
        outlined
        color="primary"
        to="/reg"
      >
        注册</v-btn
      >
    </v-form>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'base',
  data: () => ({
    show1: false,
    valid: true,
    username: '',
    usernameRules: [
      (v) => !!v || '手机号是必须输入的',
      (v) =>
        /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(v) ||
        '请输入正确的手机号码'
    ],
    password: '',
    passwordRules: [
      (v) => !!v || '密码是必须输入',
      (v) => v.length >= 6 || '密码必须6个字符以上的'
    ],
    verificationCode: '',
    verificationCodeRules: [(v) => !!v || '邮箱是必须输入的'],
    checkbox: false,
    lazy: true
  }),
  computed: {
    ...mapState(['redirectPath'])
  },
  methods: {
    async submit_form() {
      let validate = this.$refs.form.validate()
      if (validate) {
        let formdata = new FormData()
        formdata.append('user_name', this.username)
        formdata.append('password', this.password)
        await this.$axios
          .post(`${process.env.baseUrl}/admin/login`, formdata)
          .then((res) => {
            console.log(res)
            if (res.data.err > 0) {
              alert(res.data.msg)
            } else {
              localStorage.token = res.data.token_value
              let userLogin = {
                user_name: res.data.user_name,
                nick_name: res.data.nick_name
              }
              let token = res.data.token_value
              this.$store.dispatch('setAuth', { userLogin, token })
              this.$router.push(this.redirectPath)
              // this.$router.replace(this.redirectPath)
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.field-verification-code {
  position: relative;
  img {
    position: absolute;
    right: 0;
    top: 6px;
    border: 1px solid #eeeeee;
  }
}
</style>
