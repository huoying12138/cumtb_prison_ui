<template>
  <div class="demo">
    <div class="header"></div>
    <div class="body">
      <div class="body-left">
        <dv-border-box-11 class="border11" title="报警事件">
          <alarm></alarm>
        </dv-border-box-11>
      </div>
      <div class="body-center">
        <dv-border-box-10>
          <mappic></mappic>
        </dv-border-box-10>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <dv-border-box-11 class="border11" title="事件总计">
          <sum></sum>
        </dv-border-box-11>
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
  height: 10.8rem;
  width: 19.2rem;
  background-image: url("../../assets/background.png");
  background-size: cover;
}
/*.demo div{*/
/*  flex: 1;*/
/*}*/
.body ,.footer{
  display: flex;
}
.header{
  margin-top: 6%;
  text-align: center;
}
.body-left {
  width: 30%;
  /*width: 7.09rem;*/
  height: 6.048rem;
  text-align: center;
  margin: 0 2% 2% 3%;
}

.body-center{
  width: 60%;
  height: 6.048rem;
  text-align: center;
  margin: 0 2% 2% 1%;
}

.footer-left {
  width: 30%;
  height: 3.24rem;
  text-align: center;
  margin: 0 2% 0 3%;
}

.footer-center {
  width: 40%;
  height: 3.24rem;
  text-align: center;
  margin: 0 2% 0 0;
}

.footer-right {
  width: 20%;
  height: 3.24rem;
  text-align: center;
}
.border11 >>>.dv-border-box-11-title{
  font-family:黑体;
  font-size: 0.32rem;
  color: #a4a1a1;
}
</style>


