<template>
    <diaLog :changeActive="changeActive" :activeData="activeData"></diaLog>

    <el-calendar ref="calendar">
        <template #header="{ date }">
            <span class="calendar-header">{{ date }}</span>
            <span class="calendar-header">计划定制</span>
            <el-button-group>
                <el-button size="small" @click="selectDate('prev-year')">
                    上一年
                </el-button>
                <el-button size="small" @click="selectDate('prev-month')">
                    上一个月
                </el-button>
                <el-button size="small" @click="selectDate('today')">今天</el-button>
                <el-button size="small" @click="selectDate('next-month')">
                    下一个月
                </el-button>
                <el-button size="small" @click="selectDate('next-year')">
                    下一年
                </el-button>
            </el-button-group>
        </template>
        <template #date-cell="{ data }">
            <div class="selectDiv" @click="changeActive(true, null, data)">
                <p>{{ data.day.split('-').slice(2).join('') }}</p>
                <div class="content">
                    <div v-for="task in taskList" :key="task.id" @click.stop>
                        <bar :task="task" v-if="task.date == data.day"></bar>
                    </div>
                </div>
            </div>
        </template>
    </el-calendar>
</template>

<script lang="ts" setup>

import bar from '../components/taskList/bar.vue'
import { addTaskList } from '../api/request.js'
import { FormData } from "../types/form.ts"
import { ActiveData } from "../types/active.ts"
import diaLog from '../components/Element-Plus/diaLog.vue'
import { inject, provide, reactive, ref } from 'vue'
import { nanoid } from 'nanoid'
import { ElMessage } from 'element-plus'
let taskList = inject('taskList')

// elm
const calendar = ref()

const selectDate = (val: string): void => {
    calendar.value.selectDate(val)
}

let updateData = inject('updateData');

const activeData = reactive<ActiveData>({
    centerDialogVisible: false,
    date: ''
})

provide('activeData', activeData)
provide('changeActive', changeActive)

function changeActive(bool: boolean, form?: FormData | null, data?: { type: string, isSelected: boolean, day: string }): void {
    activeData.centerDialogVisible = bool;
    if (data) {
        activeData.date = data.day
    }
    if (form != null) {
        form.date = activeData.date
        if(form.title === '' || form.detail === '' || form.type === ''){
            return;
        }
        addTaskList(form).then(data => {
            form.id = nanoid()
            form.title = ''
            form.detail = ''
            form.date = ''
            form.type = ''
            form.clock = false
            updateData();
            ElMessage({
                message: '提交成功',
                type: 'success',
            })
            console.log(data)
        }).catch(err => {
            console.log(err) 
        })
    }
}
</script>

<style>
.calendar-header,
.current {
    color: black !important;
}

.is-selected,
.is-today {
    color: rgb(0, 81, 255) !important;
}

.selectDiv {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.expand-fade-leave-active {
    margin-left: 20px;
    opacity: 0;
}

.selectDiv .content {
    overflow: auto;
    width: 80%;
    height: 100%;
}

.selectDiv .content::-webkit-scrollbar-thumb {
  background-color: #888888;
  border-radius: 5px;
}

.selectDiv .content::-webkit-scrollbar {
    width: 5px;
}
</style>