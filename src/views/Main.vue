<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="auto"><c-aside /></el-aside>
            <el-container>
                <el-header><c-header/></el-header>
                <c-tag/>
                <el-main>
                    <!-- 子路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import CAside from '../components/CAside.vue';
import CHeader from '../components/CHeader.vue';
import CTag from '../components/CTag.vue';
</script>

<style lang="less" scoped>
.el-header {
    padding: 0;
}
</style>