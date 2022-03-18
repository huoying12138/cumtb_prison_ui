<template>
  <div class="login" ref="cont">
    <el-form class="login-form"  ref="loginForm" :model="loginForm" :rules="loginRules">
      <h3 class="title">监所突发事件预警系统</h3>
      <el-form-item prop="username">
        <el-input class="inputbox" v-model="loginForm.username" type="text" placeholder="请输入用户名" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input class="inputbox" v-model="loginForm.password" type="password" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-checkbox class="checkbox1" v-model="loginForm.rememberMe">记住密码</el-checkbox>
      <el-form-item>
        <el-button class="button" @click="gotoMain">登陆</el-button>
      </el-form-item>
    </el-form>
    <!--  底部  -->
    <div class="el-login-footer">
      <span>Copyright © 2021-2023 cumtb.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>
import {useIndex} from "@/utils/useDraw";
import {request} from "@/utils/request";

export default {
  name: "index",
  props: {},
  components: {},
  computed:{
    //设置初始页面放缩比例
    scaleFun:function () {
      return `transform:translate(-50%, -50%) scale(1.2)`
    }
  },
  mounted() {
    //适配屏幕
    const {calcRate, windowDraw } = useIndex(this.$refs.cont)
    // todo 屏幕适应
    windowDraw()
    calcRate()
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        rememberMe: false,
        code: '',
        uuid: ''
      },
      // // 验证码开关
      // captchaOnOff: true,
      // loginRules: {
      //   username: [
      //     { required: true, trigger: 'blur', message: '请输入您的账号'}
      //   ],
      //   password: [
      //     { required: true, trigger: 'blur', message: '请输入您的密码'}
      //   ],
      //   code: [
      //     { required: true, trigger: 'blur', message: '请输入验证码'}
      //   ]
      // }
    }
  },
  methods: {

    //验证登录，成功则跳转至主页
    gotoMain(){
      this.$router.push({
        path: '/main',
      })
    },
  },
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: flex-end;
  height: 10.8rem;
  width: 19.2rem;
  background-image: url("../../assets/login-background.png");
  background-size: cover;
  position: absolute;
  /*top: 50%;*/
  /*left: 50%;*/
  /*transform-origin: center center;*/

  top: 49%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
}

.login-form {
  border-radius: 0.06rem;
  background: #ffffff;
  width: 9.6rem;
  margin: 2.2rem 0 auto 0;
}

.inputbox {
  text-align: center;
}

.inputbox>>>.el-input__inner {
  height: 0.94rem;
  width: 7.33rem;
  margin-top: 0.43rem;
  font-family:黑体;
  font-size: 0.24rem;
  color: #a4a1a1;
}


.checkbox1>>>.el-checkbox__label {
  font-family:黑体;
  font-size: 0.14rem;
  color: black;
}

.checkbox1>>>.el-checkbox__inner {
  margin-top: 0;
  margin-left: 1.135rem;
}


.el-button {
  font-family:黑体;
  font-size: 0.3rem;
  width: 7.33rem;
  height: 0.94rem;
  margin-left: 1.135rem;
  background: #072559;
  color: #ffffff;
}

.title {
  margin: 0rem auto 0.43rem auto;
  font-family:黑体;
  font-size: 0.44rem;
  color: black;
  text-align: center;
}


.el-login-footer {
  height: 0.40rem;
  line-height: 0.40rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: darkgray;
  font-size: 0.12rem;
  letter-spacing: 0.01rem;
}


</style>

