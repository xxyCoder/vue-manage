<template>
    <div class="header-content">
        <div class="l-content">
            <el-button style="margin-right: 20px" :icon="Menu" @click="handleMenu"></el-button>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in store.state.tab.tableList" :key="item.path" :to="{ path: item.path }">
                    {{ item.label }}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/images/avatar.jpg" alt="头像" />
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

    .l-content {
        display: flex;
        align-items: center;

        :deep(.el-breadcrumb__item) {
            .el-breadcrumb__inner {
                font-weight: normal;

                &.is-link {
                    color: #666
                }
            }
            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff
                }
            }
        }
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