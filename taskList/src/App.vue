<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import { getTaskList, delTaskList } from './api/request.js';
import { useRoute } from "vue-router"
import { TaskList } from "./types/data.ts"

let taskList = ref<TaskList>([])
let today = ref('');
let todayArr = ref([]);

const now = new Date()
const year = now.getFullYear() // 获取当前年份
const month = now.getMonth() + 1
const day = now.getDate() // 获取当前日

function updateData():void {
  if(month < 10){
    today.value = year + '-' + '0' + month + '-' + day;
  }else{
    today.value = year + '-' + month + '-' + day;
  }

  getTaskList().then(result => {
    taskList.value = result.data;
    todayArr.value = taskList.value.filter(item => {
      return item.date == today.value
    })  
    console.log(taskList.value)
  })

}

function deleteTodo(id:string):void{
  delTaskList(id).then(() => {
    taskList.value = taskList.value.filter(item => {
      return item.id != id
    })
    todayArr.value = taskList.value.filter(item => {
      return item.date == today.value!
    })
  }).catch(error => {
    console.log(error)
  })
}

function getRandomColor():string{
  // 生成一个随机的颜色码（十六进制）
  const color = Math.floor(Math.random() * 16777215).toString(16);
  // 将颜色码转换为完整的六位值，前面补零
  return "#" + "0".repeat(6 - color.length) + color;
}

onMounted(() => {
  updateData()

})

provide('today', today)
provide('taskList', taskList)
provide('todayArr', todayArr)
provide('updateData', updateData)
provide('deleteTodo', deleteTodo)
provide('getRandomColor', getRandomColor)

</script>

<template>
  <div class="header flex">
    <div class="left card flex">
      <div style="background-color: rgba(219, 0, 0, 0.856);"></div>
      <div style="background-color: rgb(255, 119, 0);"></div>
      <div style="background-color: rgb(2, 217, 55);"></div>
    </div>
    <div class="right card">

    </div>
  </div>
  <div class="container">
    <div class="container-header">
      <div class="select" :class="{ active: useRoute().path === '/today' }"><router-link
          :to="{ path: '/today' }">今日待办</router-link></div>
      <div class="select" :class="{ active: useRoute().path === '/taskList' }"><router-link
          :to="{ path: '/taskList' }">定制任务</router-link></div>
      <div class="select" :class="{ active: useRoute().path === '/show' }"><router-link
          :to="{ path: '/show' }">数据展示</router-link></div>
    </div>
    <div class="container-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.header {
  justify-content: space-between;
  height: 5vh;
  width: 100%;
  border-bottom: 1px solid #dddd;
}

.card {
  gap: 1vw;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 5vh;
}

.card>div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.container {
  background-color: white;
  width: 95%;
  height: 85%;
  margin: 3vh auto;
  border-radius: 15px;
  overflow: hidden;
}

.container>.container-header {
  display: flex;
  width: 100%;
  height: 7vh;
  background-color: rgb(179, 179, 179);
}

.container>.container-header>.select {
  width: 10%;
  height: 100%;
  text-align: center;
  line-height: 7vh;
}

.container>.container-content {
  height:70vh;
  padding: 2vh 3vw;
}

.active {
  background-color: #3cd8ff;
}
</style>
