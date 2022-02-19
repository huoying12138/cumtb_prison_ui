<template>
  <div class="demo">
    <div class="header">头部</div>
    <div class="body">
      <div class="body-left">
        <dv-border-box-10>
          <alarm></alarm>
        </dv-border-box-10>
      </div>
      <div class="body-center">
        <dv-border-box-10>
          <mappic></mappic>
        </dv-border-box-10>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <dv-border-box-10>
          <sum></sum>
        </dv-border-box-10>
      </div>
      <div class="footer-center">
        <dv-border-box-10>
          <trend></trend>
        </dv-border-box-10>
      </div>
      <div class="footer-right">
        <dv-border-box-10>
          <rank></rank>
        </dv-border-box-10>
      </div>
    </div>
  </div>
</template>


<script>
import alarm from "./alarm";
import mappic from "./mappic";
import sum from "./sum"
import trend from "./trend";
import rank from "./rank";
export default {
  name: "index",
  props: {},
  components: {alarm, mappic, sum, trend, rank},
  data() {
    return {}
  },
  methods: {},
}
</script>


<style scoped >

.demo {
  display: flex;
  flex-direction: column;
  background: #e3e0e0;
}
.demo div{
  flex: 1;
}
.body ,.footer{
  display: flex;
}
.header{
  background: #4b738f;
  line-height: 100px;
  text-align: center;
}
.body-left, .body-center{
  line-height: 1000px;
  text-align: center;
}
.footer-left, .footer-center, .footer-right{
  line-height: 600px;
  text-align: center;
}
.footer-left,.footer-right, .body-left{
  flex: 0 0 30%!important;
}
</style>


