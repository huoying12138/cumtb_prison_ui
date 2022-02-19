<template>
  <div class="login">
    <el-form class="login-form" ref="loginForm" :model="loginForm" :rules="loginRules">
      <h3 class="title">智慧地铁后台管理系统</h3>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" type="text" placeholder="账号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" type="password" placeholder="密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="code" v-if="captchaOnOff">
        <el-input v-model="loginForm.code" placeholder="验证码" autocomplete="off"></el-input>
        <div class="login-code">
          <img src="@/assets/test.gif" class="login-code-img">
        </div>
      </el-form-item>
      <el-checkbox  v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
      <el-form-item style="width: 100%">
        <el-button size="medium" type="primary" style="width:100%;">登陆</el-button>
        <div>
          <router-link>立即注册</router-link>
        </div>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2021-2023 cumtb.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {},
  components: {},
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin123',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      // 验证码开关
      captchaOnOff: true,
      loginRules: {
        username: [
          { required: true, trigger: 'blur', message: '请输入您的账号'}
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入您的密码'}
        ],
        code: [
          { required: true, trigger: 'blur', message: '请输入验证码'}
        ]
      }
    }
  },
  methods: {},
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../../assets/login-background.jpg");
  background-size: cover;
}

.login-form {
  border-radius: 6px;
  background: aquamarine;
  width: 400px;
  padding: 25px 25px 25px 25px;
}

.el-input {
  height: 38px;
  margin-top: 5px;
}

.title {
  margin: 0px auto 30px auto;
  text-align-all: center;
  color: black;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}

.login-code-img {
  height: 38px;
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: darkgray;
  font-size: 12px;
  letter-spacing: 1px;
}


</style>

