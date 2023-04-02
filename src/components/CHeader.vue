<template>
    <div class="header-content">
        <div class="l-content">
            <el-button :icon="Menu" @click="handleMenu"></el-button>
            <span class="text">首页</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/avatar.jpg" alt="头像"/>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>个人中心</el-dropdown-item>
                        <el-dropdown-item>退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import {
    Menu,
    ArrowDown
} from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const store = useStore();
// 方法
const handleMenu = () => {
    store.commit('collapseMenu');
}
</script>

<style lang="less" scoped>
.header-content {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>