<template>
    <diaLog :changeActive="changeActive" :activeData="activeData"></diaLog>
    <div class="header">
        <h2>备忘录</h2>
        <div class="right" @click="changeActive(true)">+</div>
    </div>
    <div class="todo-container">
        <todo v-for="item in todayArr" :key="item.id" :item="item"></todo>
        <hr style="margin-top: 10vh;">
    </div>
</template>

<script lang="ts" setup>

import { FormData } from "../types/form.ts"
import { addTaskList } from '../api/request.js'
import diaLog from '../components/Element-Plus/diaLog.vue'
import { inject, reactive } from 'vue'
import todo from '../components/today/todo.vue'
import { ElMessage } from 'element-plus'
let updateData = inject('updateData')
let today = inject('today')

const activeData = reactive({
    centerDialogVisible: false,
    date: ''
})

function changeActive(bool: boolean, form?: FormData | null): void {
    activeData.centerDialogVisible = bool;
    // console.log(data.day.split('-').slice(0).join(''))
    if (form != null) {
        form.date = today
        if(form.title === '' || form.detail === '' || form.type === ''){
            return;
        }
        addTaskList(form).then(data => {
            form.title = ''
            form.detail = ''
            form.date = ''
            form.type = ''
            form.clock = false
            ElMessage({
                message: '提交成功',
                type: 'success',
            })
            updateData();
            console.log(data)
        })
    }
}

let todayArr = inject('todayArr')
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 10vh;
}

.right {
    border-radius: 50%;
    color: white;
    text-align: center;
    font-size: 35px;
    line-height: 5vh;
    height: 6vh;
    background-color: #3cd8ff;
    aspect-ratio: 1/1;
    cursor: pointer;
}

.todo-container{
    overflow: auto;
    height:60vh;    
}
</style>