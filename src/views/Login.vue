<template>
    <el-form ref="form" label-width="70px" class="login-container" :model="state.form" :rules="state.rules">
        <h3 class="login_title">系统登录</h3>
        <el-form-item  label="用户名" prop="username">
            <el-input v-model="state.form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="state.form.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="submit" type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import Mock from 'mockjs';
import Cookie from 'js-cookie'; // 跨页面使用

import { getMenu } from '../api'; 

const state = reactive({
    form: {
        username: '',
        password: ''
    },
    rules: {
        username: [{required: true,trigger: 'blur',message: '请输入用户名'}],
        password: [{required: true,trigger: 'blur',message: '请输入密码'}]
    }
})
const router = useRouter();

const submit = () => {
    // const Token = Mock.Random.guid();
    getMenu(state.form)
    .then(({data}) => {
        if(data.code === 20000) {
            Cookie.set('Token',data.data.Token);    // 将Token信息存入cookie
            router.push('/home');
        } else {
            ElMessage.error(data.data.message)
        }
    })
}
</script>

<style lang="less" scoped>
.login-container {
    width: 350px;
    box-sizing: border-box;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 13px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6; 
    .login_title {
        text-align: center;
        margin-bottom: 40px;
        color: #505458;
    }
    .el-button {
        position: relative;
        left: 50%;
        transform: translateX(-80%);
    }
}
</style>