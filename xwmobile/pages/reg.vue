<template>
  <v-container fluid>
    <v-form
      action="http://localhost:8081/api/login"
      method="post"
      enctype="multipart/form-data"
      ref="form"
      :lazy-validation="lazy"
    >

      <v-text-field
        v-model="username"
        single-line
        label=""
        placeholder="请输入手机号"
        :rules="usernameRules"
        required
        validate-on-blur
        autofocus
      ></v-text-field>
      <div class="field-verification-code">
        <v-text-field
          v-model="verificationCode"
          :rules="verificationCodeRules"
          single-line
          validate-on-blur
          label=""
          placeholder="请输入短信验证码"
          type="text"
          required
          class="mt-n2"
        >
        </v-text-field>
        <v-btn
          :disabled="!valid"
          color="primary"
          class="verification-code-btn body-2 px-2"
          outlined
        >
          获取验证码
        </v-btn>
      </div>
      <v-text-field
        v-model="nickname"
        single-line
        label=""
        placeholder="请输入昵称"
        :rules="nicknameRules"
        required
        validate-on-blur
        class="mt-n2"
      ></v-text-field>
      <v-text-field
        v-model="password"
        single-line
        validate-on-blur
        label=""
        placeholder="请输入密码"
        :rules="passwordRules"
        class="mt-n2"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1 = !show1"
        :type="show1 ? 'text' : 'password'"
        required
      ></v-text-field>
      <v-text-field
        v-model="repassword"
        single-line
        validate-on-blur
        label=""
        placeholder="请再次输入密码"
        :rules="repasswordRules"
        class="mt-n2"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show1 = !show1"
        :type="show1 ? 'text' : 'password'"
        required
      ></v-text-field>

      <v-btn
        text
        :disabled="!valid"
        class="mt-n3 caption px-0 mb-2"
        to="/login"
      >
        <v-icon left>mdi-arrow-left</v-icon>
        去登陆
      </v-btn>
      <v-btn
        :disabled="!valid"
        color="primary"
        class="mr-4"
        block
        @click="submit_form()"
      >
        注册
      </v-btn>

    </v-form>
  </v-container>

</template>
<script>
import axios from '@nuxtjs/axios'
export default {
  layout: 'base',
  data: () => ({
    show1: false,
    valid: true,
    username: '',
    usernameRules: [
      v => !!v || '手机号是必须输入的',
      v => /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(v) || '请输入正确的手机号码',
    ],
    nickname: '',
    nicknameRules: [
      v => !!v || '昵称是必须输入的',
    ],
    password: '',
    passwordRules: [
      v => !!v || '密码是必须输入',
      v => (v.length >= 6) || '密码必须6个字符以上的',
    ],
    repassword: '',
    repasswordRules: [
      v => !!v || '密码是必须输入',
      v => (v.length >= 6) || '密码必须6个字符以上的',
      // v => v == this.password || '两次密码必须是一样的'
    ],
    verificationCode: '',
    verificationCodeRules: [
      v => !!v || '验证码是必须输入的'
    ],
    checkbox: false,
    lazy: true,
  }),

  methods: {
    async submit_form () {
      let validate = this.$refs.form.validate();
      if (validate) {
        let formdata = new FormData();
        formdata.append('user_name', this.username);
        formdata.append('password', this.password);
        formdata.append('nick_name', this.nickname);
        await this.$axios.post(`${ process.env.baseUrl }/admin/reg`, formdata).then(res => {
          console.log(res);
          if (res.data.err > 0) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg + "，去登录吧");
            this.$router.push('/login');
          }
        }).catch(err => {
          console.log(err);
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.field-verification-code {
  position: relative;
  .verification-code-btn {
    position: absolute;
    right: 0;
    top: 6px;
    border: 1px solid #eeeeee;
  }
}
</style>