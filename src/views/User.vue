<template>
    <div class="manager">
        <el-dialog v-model="state.dialogVisible" title="Tips" width="70%" :before-close="handleClose">
            <el-form :rules="state.rules" :inline="true" ref="form" :model="state.form" label-width="80px">
                <el-form-item prop="name" label="姓名">
                    <el-input placeholder="请输入姓名" v-model="state.form.name"></el-input>
                </el-form-item>
                <el-form-item prop="age" label="年龄">
                    <el-input placeholder="请输入年龄" v-model="state.form.age"></el-input>
                </el-form-item>
                <el-form-item prop="sex" label="性别">
                    <el-select v-model="state.form.sex" placeholder="请选择性别">
                        <el-option label="男" value="1" />
                        <el-option label="女" value="0" />
                    </el-select>
                </el-form-item>
                <el-form-item prop="birth" label="出生日期">
                    <el-date-picker v-model="state.form.birth" type="date" placeholder="选择日期" />
                </el-form-item>
                <el-form-item prop="addr" label="地址">
                    <el-input placeholder="请输入地址" v-model="state.form.addr"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click=" cancel">取消</el-button>
                    <el-button type="primary" @click="submit">确定</el-button>
                </span>
            </template>
        </el-dialog>
        <div class="manager-header">
            <el-button @click="state.dialogVisible = true" type="primary">
                + 新增
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// {
//             model: 'name',
//             label: '姓名',
//             type: 'input'
//         },
//         {
//             model: 'age',
//             lable: '年龄',
//             type: 'input'
//         },
//         {
//             model: 'sex',
//             label: '性别',
//             type: 'select',
//             opts: [
//                 {
//                     label: '男',
//                     value: 1
//                 },
//                 {
//                     label: '女',
//                     value: 2
//                 }
//             ]
//         },
//         {
//             model: 'birth',
//             label: '出生日期',
//             type: 'date'
//         },
//         {
//             model: 'addr',
//             label: '地址',
//             type: 'input'
//         }
const state = reactive({
    dialogVisible: false,
    form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: ''
    },
    rules: {
        name: [
            {required: true,message: '请输入姓名',trigger: 'blur'}
        ],
        age: [
            {required: true,message: '请输入年龄',trigger: 'blur'}
        ],
        sex: [
            {required: true,message: '请选择性别',trigger: 'blur'}
        ],
        birth: [
            {required: true,message: '请选择日期',trigger: 'blur'}
        ],
        addr: [
            {required: true,message: '请输入地址',trigger: 'blur'}
        ]
    }
})
const form = ref();
// 方法
const submit = () => {
    form.value.validate((valid) => {    // validate是form自带方法
        if(valid) {
            // 关闭弹窗
            handleClose();
            state.dialogVisible = false;
        }
    })
};
const handleClose = () => {
    form.value.resetFields();
    state.dialogVisible = false;
}
const cancel = () => {
    handleClose();
}
</script>

<style lang="less" scoped></style>