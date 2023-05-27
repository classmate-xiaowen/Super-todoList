<template>
    <div class="echarts-box">
        <div id="myEcharts" :style="{ width: '100%', height: '300px' }"></div>
    </div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, onUnmounted,watch ,inject} from 'vue'
/// 声明定义一下echart
let echart = echarts

let taskListChart = inject('taskListChart')

watch(taskListChart,()=>{
    initChart();
},{deep:true})

// onMounted(() => {
//     initChart();
//     console.log(taskListChart.value)
// });

onUnmounted(() => {
    echart.dispose;
});

// 基础配置一下Echarts
function initChart() {
    let chart = echart.init(document.getElementById("myEcharts"), "light");
    // 把配置和数据放这里
    chart.setOption({
        title: {
            text: '数据分析',
            // subtext: 'Fake Data',    
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
                name: '待办事项',
                type: 'pie',
                radius: '50%',
                data: taskListChart.value,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    );
    window.onresize = function () {
        //自适应大小
        chart.resize();
    };
}
</script>

<style lang="less" scoped></style>