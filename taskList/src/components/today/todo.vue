<template>
    <div class="todo">
        <div class="aside" :style="todoStyle"></div>
        <div class="container">
            <div class="container-left table">
                <input type="checkbox" id="check" v-model="isFinish" @click="">
                <div class="content">
                    <span>{{ item.title }}</span>
                    <div class="time">{{ item.date }}</div>
                </div>
            </div>
            <div class="container-right table">
                <el-popconfirm title="确定要删除此项?" @confirm="deleteTodo(item.id)">
                    <template #reference>
                        <button>X</button>
                    </template>
                </el-popconfirm>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue'
let props = defineProps(['item'])
let isFinish = ref(false)
let getRandomColor = inject('getRandomColor')
let deleteTodo = inject('deleteTodo')

let todoStyle = {
    borderColor: getRandomColor()
}
</script>

<style scoped>
.todo {
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 7vh;
}

.aside {
    width: 2%;
    height: 70%;
    border-right: 5px solid #3cd8ff;
}

.container {
    display: flex;
    justify-content: space-between;
    width: 96%;
    height: 100%;
}

.table {
    display: flex;
    align-items: center;
    height: 100%;
}

.container-left {
    width: 50%;
}

.container-left #check {
    border-radius: 50%;
    appearance: none;
    -moz-appearance: none;
    background-color: white;
    border: 4px solid #3cd8ff;
    height: 3vh;
    aspect-ratio: 1/1;
}

.container-left #check:checked {
    background-color: #3cd8ff;
    border-color: white;
}

.container-left .content {
    margin-left: 1vw;
    height: 80%;
    width: 100%;
}

.container-right {
    width: 20%;
}

.content span {
    font-weight: 800;
}

.time {
    font-size: 12px;
    color: rgba(126, 126, 126, 0.867);
}

button {
    border-radius: 50%;
    width: 2vw;
    aspect-ratio: 1/1;
    border: 0;
    background-color: rgba(255, 255, 255, 255);
    cursor: pointer;
}
</style>