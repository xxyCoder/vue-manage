<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
                text-color="#fff" @open="handleOpen" @close="handleClose">
                <el-menu-item v-for="item in noChild" :key="item.name" :index="item.name">
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ item.label }}</span>
                </el-menu-item>
                <el-sub-menu v-for="item in hasChild" :key="item.label" :index="item.label">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{ item.label }}</span>
                    </template>
                    <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
                        <el-menu-item :index="subItem.path">{{ subItem.label }}</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </el-menu>
        </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue';
import { reactive,watch,computed } from 'vue';
// 数据
const state = reactive({
    menuData: [
        {
            path: "/",
            name: "home",
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
        },
        {
            path: "/mall",
            name: "mall",
            label: "商品管理",
            icon: "video-play",
            url: "MallManage/MallManage",
        },
        {
            path: "/user",
            name: "user",
            label: "用户管理",
            icon: "user",
            url: "UserManage/UserManage",
        },
        {
            label: "其他",
            icon: "location",
            children: [
                {
                    path: "/page1",
                    name: "page1",
                    label: "首页1",
                    icon: "setting",
                    url: "Other/PageOne",
                },
                {
                    path: "/page2",
                    name: "page2",
                    label: "首页2",
                    icon: "setting",
                    url: "Other/PageTwo",
                },
            ],
        },
    ]
});
// 方法
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
// 计算属性
const noChild = computed(() => state.menuData.filter(item => !item.children));  // 没有子菜单
const hasChild = computed(() => state.menuData.filter(item => item.children));  // 有子菜单
</script>
  