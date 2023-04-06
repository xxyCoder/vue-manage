<template>
    <div class="manager">
        <el-dialog v-model="state.dialogVisible" title="Tips" width="30%" :before-close="handleClose">
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        Confirm
                    </el-button>
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
import { reactive } from 'vue'

const state = reactive({
    dialogVisible: false
})
</script>

<style lang="less" scoped></style>