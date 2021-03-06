import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import "./assets/global.css"

import requestGen from '@/utils/requestGen' // api: https://github.com/axios/axios

Vue.prototype.$http = requestGen // ajax请求方法


require('./mock/mock.js')
//利用全局Bus实现跨组件通信$on $emit  createDocument in index及editDocument in emergencyTable in index之间通信
export const globalBus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
// 100px=1rem
const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;  //100px
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();


