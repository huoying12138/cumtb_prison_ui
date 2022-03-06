<template>
  <div class="sum">
    <div id="pie-chart" class="sum" ref="'sum_ref"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: "sum",
  data() {
    return {
      chartInstance: null,
      allData: null
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.initChart()
    })
    // this.getData()
    window.addEventListener("resize",this.screenAdapter)
    // this.screenAdapter()
  },

  destroyed(){
    window.removeEventListener('resize',this.screenAdapter)
  },

  methods: {
    initChart(){
      this.chartInstance = echarts.init(document.getElementById('pie-chart')) //chalk
      const initOption = {
        // backgroundColor:'transparent',
      }
      this.chartInstance.setOption(initOption)
      this.updateChart()
    },

    updateChart(){
      const centerArr = [
        ['18%','36%'],
        ['40%','36%'],
        ['62%','36%'],
        ['85%','36%'],
        ['18%','76%'],
        ['40%','76%'],
        ['62%','76%'],
      ]
      const colorArr = [
        ['#90F7EC','#32CCBC'],
        ['#FAD7A1','#E96D71'],
        ['#5052EE','#AB6EE5'],
        ['#E5DD45','#E8B11C'],
        ['#23E5E5','#2E728F'],
        ['#FCCF31','#F55555'],
        ['#81FBB8','#28C76F'],
      ]
      //处理图表需要的数据
      const seriesArr = centerArr.map((item,index) => {  //7个圆环，循环遍历的索引.
        return{
          type:'pie',
          radius:[50,60],
          center:centerArr[index],
          hoverAnimation:false,//关闭鼠标移入到饼图时的动画效果
          labelLine: {
            show: false //隐藏指示线
          },
          label: {
            position: 'center', //字放中间
            color: colorArr[index][0] //变字体的颜色
          },

          data: [
            {
              name:'人员逃脱' + '\n' + '\n'+'20',  //不同事件则用变量名 item.name+item.number
              value: 100, //接入后台数据，可将value写成item.number,number代表传入的数字的变量名
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0,[
                  {
                    offset: 0,
                    color:colorArr[index][0]
                  },
                  {
                    offset: 1,
                    color:colorArr[index][1]
                  }

                ])
              }
            },
          ]
        }
      })
      const dataOption = {
        series:seriesArr,
      }
      console.log(seriesArr)
      this.chartInstance.setOption(dataOption)
    },

    // screenAdapter(){  //分辨率适配
    //   const adapterOption = {}
    //   this.chartInstance.setOption(adapterOption)
    //   this.chartInstance.resize()
    // }
  },
}



</script>

<style scoped>
.sum {
  /*background-image: url("../../assets/event.png");*/
  /*background-size: cover;*/
  /*width: 7.09rem;*/
  /*height: 4.72rem;*/
  width:100%;
  height:3.2rem;
  /*padding-top: 0.2rem;*/
  /*去掉背景色*/
  /*background: #ffffff;*/
}
</style>
