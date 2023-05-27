<template>
    <el-tooltip :disabled="disabled" :content="props.task.detail" placement="bottom" effect="light">
        <div class="todoCard">
            <div :style="cardObj">
            </div>
            <p class="title">{{ props.task.title }}</p>
            <el-popconfirm title="确定要删除此项?" @confirm="deleteTodo(props.task.id)">
                <template #reference>
                    <div class="delete">x</div>
                </template>
            </el-popconfirm>      
        </div>
    </el-tooltip>
</template>

<script setup>
import { ref, inject } from 'vue'
let props = defineProps(['task'])
let getRandomColor = inject('getRandomColor')
let deleteTodo = inject('deleteTodo')
const disabled = ref(false)

let cardObj = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: getRandomColor()
}


</script>

<style scoped>
.todoCard {
    border-radius: 5px;
    margin-top: 2px;
    height: 2.5vh;
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    background-color: #f2f2f2dd;
}

.title {
    width: 75%;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}



.delete {
    width: 12px;
    height: 12px;
    text-align: center;
    line-height: 10px;
    background-color: rgb(169, 169, 169);
    color: white;
    font-size: 5px;
    border-radius: 50%;
}
</style>