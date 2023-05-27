<template>
    <el-dialog v-model="props.activeData.centerDialogVisible" title="设置当天的待办事项" width="50vw" center
        :before-close="handleClose">
        <el-form :label-position="labelPosition" label-width="50vw" :model="form" :rules="rules" status-icon
            style="max-width: 50vw">
            <el-form-item label="活动名称" prop="title">
                <el-input v-model="form.title" placeholder="请输入活动名称" />
            </el-form-item>
            <el-form-item label="活动标签" prop="type">
                <el-select v-model="form.type" placeholder="请选择活动标签">
                    <el-option label="工作" value="工作" />
                    <el-option label="娱乐" value="娱乐" />
                    <el-option label="饮食" value="饮食" />
                    <el-option label="旅游" value="旅游" />
                    <el-option label="学习" value="学习" />
                    <el-option label="生活" value="生活" />
                    <el-option label="健康" value="健康" />
                </el-select>
            </el-form-item>
            <el-form-item label="闹钟提醒">
                <el-switch v-model="form.clock" />
            </el-form-item>
            <el-form-item label="活动详情" prop="detail">
                <el-input v-model="form.detail" type="textarea" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="changeActive(false)">取消</el-button>
                <el-button type="primary" @click="changeActive(false, form)">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import type {FormRules}  from 'element-plus'
import { FormData } from '../../types/form.ts'
import { ref, reactive } from 'vue'
import { nanoid } from 'nanoid'

let props = defineProps(['activeData', 'changeActive'])
const labelPosition = ref('top')

let form = reactive<FormData>({
    id: nanoid(),
    title: '',
    detail: '',
    date: '',
    type: '',
    clock: false
})

const rules = reactive<FormRules>({
    title: [
        { required: true, message: '请输入活动标题', trigger: 'blur' },
    ],
    type: {
        required: true,
        message: '请选择其中一种活动标签',
        trigger: 'change',
    },
    detail: [
        { required: true, message: '请输入活动详情', trigger: 'blur' },
    ]
})

function handleClose() {
    props.changeActive(false)
}

const open2 = () => {
  ElMessage({
    message: '提交成功',
    type: 'success',
  })
}

</script>

<style>
.dialog-footer button:first-child {
    margin-right: 10px;
}

.el-dialog__body {
    padding: 10vh 5vw !important;
}
</style>
  