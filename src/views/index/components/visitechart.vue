<template>
  <div id="visitechart">

  </div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted } from 'vue'
export default {
    name:'VisitEchart',
    setup(){
        onMounted(()=>{
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(document.getElementById('visitechart'));
            const option = {
                  tooltip: {},
                  legend: {
                      data: ['访问量', '下载量']
                  },
                    xAxis: {
                        data: ['1月', '2月', '3月', '4月', '5月','6月','7月','8月','9月','10月','11月','12月']
                    },
                    yAxis: {
                        type:'value'
                    },
                    series: [
                        {
                        name:'访问量',
                        type: 'bar',
                        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                        itemStyle: {
                            color: "#516B91"
                        },
                        markPoint: {
                            data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                            ]
                        }
                        },
                        {
                        name:'下载量',
                        type: 'bar',
                        itemStyle: {
                            color: "#59C4E6"
                        },
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                        markPoint: {
                            data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                            ]
                        }
                        }
                    ]
                    };
            myChart.setOption(option)
        })
    }
}
</script>

<style lang="less" scoped>
#visitechart{
    width: 66%;
    height: 370px;
    background-color: #fff;
    border-radius: 7px;
    padding: 10px;
}
</style>