<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/global.css'
export default {
  name: 'App',
}
</script>

<style scoped>
#app {
  /*test*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  width: 100vw;
  height: 100vh;
  background-color:  #2c3e50;
  overflow: hidden;
}
</style>
