<template>
  <div class="sum">
    <div class="com-chart" ref="'sum_ref"></div>
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
    this.initChart()
   // this.getData()
    window.addEventListener("resize",this.screenAdapter)
    this.screenAdapter()
  },

  destroyed(){
    window.removeEventListener('resize',this.screenAdapter)
  },

  methods: {
    initChart(){
      this.chartInstance = echarts.init(this.$refs.sum_ref)
      const initOption = {}
      this.chartInstance.setOption(initOption)
      this.updateChart()
    },
    /*async getData(){
      //获取服务器数据，对this.allData进行赋值之后，调用updateChart方法来更新图表
      const {data: ret } = await this.$http.get('event')//获取data，也就是各个事件event
      this.allData = ret
      console.log(this.allData)

    },*/
     updateChart(){
      const centerArr = [
          ['18%','40%'],
          ['30%','40%'],
          ['62%','40%'],
          ['85%','40%'],
          ['18%','75%'],
          ['30%','75%'],
          ['62%','75%'],
      ]
      const colorArr = [
        ['#4FF778','#0ba82c'],
        ['#E5DD45','#E8B11C'],
        ['#E8821C','#E55445'],
        ['#5052EE','#AB6EE5'],
        ['#23E5E5','#2E728F'],
        ['#4FF778','#0ba82c'],
        ['#4FF778','#0ba82c'],
      ]
      //处理图表需要的数据
      const seriesArr = this.allData.map((item,index) => {  //7个圆环，循环遍历的索引.
        return{
          type:'pie',
          radius:[110,100],
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
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
            { value: 300 },
          ]
        }
      })
      const dataOption = {
        series:seriesArr
      }
      this.chartInstance.setOption(dataOption)
    },

    screenAdapter(){  //分辨率适配
      const adapterOption = {}
      this.chartInstance.setOption(adapterOption)
      this.chartInstance.resize()
    }
  },
}



</script>

<style scoped>
.sum {
  /*background-image: url("../../assets/event.png");*/
  /*background-size: cover;*/
  /*width: 7.09rem;*/
  /*height: 4.72rem;*/
}
</style>


/*  UI的调整
{
name: item.name + '\n'+item.event, //event对应”事件“传过来的参数
value: item.event, //对应
itemStyle:{
color: new echarts.graphic.LinearGradient(0, 1, 0, 0 [
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
*/