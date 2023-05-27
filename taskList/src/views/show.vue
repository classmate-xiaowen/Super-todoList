<template>
    <echarts></echarts>
</template>

<script setup>
import {onMounted,provide, inject, ref } from 'vue'
import echarts from '../components/show/echarts.vue'

let taskList = inject('taskList');

let taskListChart = ref([
    { value: 0, name: '工作' },
    { value: 0, name: '娱乐' },
    { value: 0, name: '饮食' },
    { value: 0, name: '旅游' },
    { value: 0, name: '学习' },
    { value: 0, name: '生活' },
    { value: 0, name: '健康' }
])

provide('taskListChart',taskListChart)

function dataFilter() {
    taskList.value.forEach(item1 => {
        taskListChart.value.forEach(item2 => {
            if(item2.name ===  item1.type){
                item2.value++
            }
        })
    })
}



onMounted(() => {
    dataFilter();
})

</script>

<style lang="less" scoped></style>