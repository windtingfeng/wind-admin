<template>
  <div class="echartcontainer">
      <div id="echart-left"></div>
      <div id="echart-mid"></div>
      <div id="echart-right"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import { onMounted } from 'vue'
export default {
    name:'Echart',
    setup(){
        //封装左侧图表
        function initLeft(){
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(document.getElementById('echart-left'));
            const option = {
                    title: {
                        text: '用户投资类型',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                { value: 1048, name: '期货' },
                                { value: 735, name: '基金' },
                                { value: 580, name: '股票' },
                                { value: 484, name: '债券' },
                                { value: 300, name: '储蓄' }
                            ],
                            emphasis: {
                                itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            left:'100'
                        }
                    ]
                };
            myChart.setOption(option)
        }
        //封装中间图表
        function initMid(){
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(document.getElementById('echart-mid'));
            const option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                        }
                    },
                    legend: {
                        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        }
                    ],
                    yAxis: [
                        {
                        type: 'value'
                        }
                    ],
                    series: [
                        {
                        name: 'Email',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                        name: 'Union Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                        name: 'Video Ads',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                        name: 'Direct',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                        name: 'Search Engine',
                        type: 'line',
                        stack: 'Total',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                    };
            myChart.setOption(option)
        }
        //封装左侧图表
        function initRight(){
            // 基于准备好的dom，初始化echarts实例
            const myChart = echarts.init(document.getElementById('echart-right'));
            const option = {
                    title: {
                        text: '用户投资类型',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            radius: '50%',
                            data: [
                                { value: 1048, name: '期货' },
                                { value: 735, name: '基金' },
                                { value: 580, name: '股票' },
                                { value: 484, name: '债券' },
                                { value: 300, name: '储蓄' }
                            ],
                            emphasis: {
                                itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },
                            left:'100'
                        }
                    ]
                };
            myChart.setOption(option)
        }
        onMounted(()=>{
            //初始化
            initLeft()
            initMid()
            initRight()
        })
    }
}
</script>

<style lang="less" scoped>
.echartcontainer{
    margin-top: 20px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
    #echart-left{
        height: 100%;
        width: 31.5%;
        background-color: #fff;
        border-radius: 7px;
        padding: 30px;
        box-sizing: border-box;
    }
    #echart-mid{
        height: 100%;
        width: 35%;
        background-color: #fff;
        border-radius: 7px;
        padding: 30px;
        box-sizing: border-box;
    }
    #echart-right{
        height: 100%;
        width: 31.5%;
        background-color: #fff;
        border-radius: 7px;
        padding: 30px;
        box-sizing: border-box;
    }
}
</style>