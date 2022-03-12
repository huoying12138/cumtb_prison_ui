<template>
  <!-- cont 总是按高度或宽度铺满屏幕（cover） -->
  <div ref="cont" class="fit-screen-cont" >
    <!-- content 通过 scale(实际尺寸/设计尺寸) 来缩放实现等比适配  -->
    <div class="fit-content" :style="getFitContentStyle()" >
      <slot ref="content"  class="fit-content">
        <testI></testI>
      </slot>
    </div>

  </div>
</template>
<script>
import testI from '@/views/event/index.vue'
export default {
  name: 'test',
  components: {testI,},
  data(){
    return {
      width:1920,
      height:1080,
      currentRatio:1
    }
  },
  mounted(){
    window.addEventListener('resize',()=>{
      this.updateScaleRatio();
    })
    this.updateScaleRatio();
  },
  methods:{
    updateScaleRatio(){
      var rect = this.$refs.cont && this.$refs.cont.getBoundingClientRect();
      var ratio = rect.width / rect.height;
      var innerRatio = this.width / this.height;
      if(ratio < innerRatio){
        //Scale width
        var scaleRatio = rect.width/ this.width ;
        this.currentRatio = scaleRatio;
      }
      else{
        scaleRatio = rect.height / this.height ;
        this.currentRatio = scaleRatio;
      }
    },
    getFitContentStyle(){
      return {
        width:this.width + 'px',
        height:this.height + 'px',
        transform:`scale(${this.currentRatio})`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.fit-screen-cont{
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  flex:1;
  overflow:hidden;
  .fit-content{
    flex:1;
    transform-origin: center;
    overflow: hidden;
    position: absolute;
  }
}
</style>
