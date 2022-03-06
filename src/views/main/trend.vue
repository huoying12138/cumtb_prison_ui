<template>
  <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
  <div id="chartLine" class="line-wrap"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  data() {
    return {
      chartLine: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLineChart();
    })
  },
  methods: {
    drawLineChart() {
      this.chartLine = echarts.init(this.$el, 'dark');// 基于准备好的dom，初始化echarts实例
      let option = {
        backgroundColor:'transparent',
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            axisTick: {
              show: false
            },
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value',
            axisTick: {
              show: false
            },
            name: '（人）'
          }
        ],
        series : [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表
      this.chartLine.setOption(option);
    }
  }
}
</script>

<style scope>
.line-wrap{
  width:100%;
  height:3.24rem;
  /*padding-top: 0.2rem;*/
  /*去掉背景色*/
  /*background: #ffffff;*/
  /*border-radius: 0.5rem;*/
}
</style>
