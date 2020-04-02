<template>
  <div class="lyj-admin-login-wrapper">
    <a-form
      :form="loginForm"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="用户名">
        <a-input v-model="loginForm.username" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item label="密码">
        <a-input v-model="loginForm.password" placeholder="请输入密码" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" @click="onLogin">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onLogin() {
      const res = await this.$auth.loginWith('local', {
        data: this.loginForm
      })
      console.log('user', res)
      if (!res.data.token) {
        this.$message.error(res.data.msg)
      }
    }
  }
}
</script>

<style>
</style>
