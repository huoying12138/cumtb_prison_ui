<template>
  <div id="chartPie" class="pie-wrap"></div>
</template>

<script>
import * as echarts from 'echarts';
import {request} from "@/utils/request";

require('echarts/theme/macarons');//引入主题

export default {
  data() {
    return {
      chartPie: null,
      value: 0.7
    }
  },
  mounted() {
    this.$nextTick(() => {
      //主页接入rank安全等级数据
      this.get_sum_data().then(res =>{
        this.value = res.data.data.score
        this.drawPieChart();

      }).catch(err =>{
        //todo
        this.drawPieChart();
      })
    })
  },
  methods: {
    get_sum_data(){
      return request({
        url: '/prison/scores',
        method: 'get',
      })
    },
    drawPieChart() {
      this.chartPie = echarts.init(document.getElementById('chartPie'), 'macarons');
      this.chartPie.setOption({
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, '#FF6E76'],
                  [0.5, '#FDDD60'],
                  [0.75, '#58D9F9'],
                  [1, '#7CFFB2']
                ]
              }
            },
            radius: "90%",
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '12%',
              width: 20,
              offsetCenter: [0, '-60%'],
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: 'auto',
                width: 2
              }
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: 'auto',
                width: 5
              }
            },
            axisLabel: {
              color: '#ffffff',
              fontSize: 20,
              distance: -60,
              formatter: function (value) {
                if (value === 0.875) {
                  return 'A';
                } else if (value === 0.625) {
                  return 'B';
                } else if (value === 0.375) {
                  return 'C';
                } else if (value === 0.125) {
                  return 'D';
                }
                return '';
              }
            },
            title: {
              offsetCenter: [0, '40%'],
              fontSize: 40,
              color: '#ffffff',
            },
            detail: {
              fontSize: 50,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + '分';
              },
              color: 'auto'
            },
            data: [
              {
                value: this.value,
                name: '安全等级'
              }
            ]
          }
        ]
      });
    }
  }
}
</script>

<style scoped>
.pie-wrap {
  width: 100%;
  height:3.24rem;
  /*padding-top: 0.3rem;*/
}
</style>
