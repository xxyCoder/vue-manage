<template>
    <el-row>
        <el-col :span="8">
            <el-card shadow="always">
                <div class="user">
                    <img src="../assets/images/avatar.jpg" alt="" />
                    <div class="userinfo">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间<span>2023-4-3</span></p>
                    <p>上次登录地点<span>北京</span></p>
                </div>
            </el-card>
            <el-card shadow="always" style="margin-top:20px;">
                <el-table :data="state.tableData" style="width: 100%">
                    <el-table-column v-for="(val, key) in state.tableLable" :prop="key" :label="val" :key="key" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card :body-style="{ display: 'flex',padding: '0' }" v-for="item in state.countData" :key="item.name">
                    <el-icon :style="{ background: item.color }">
                        <CircleCheck />
                    </el-icon>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive } from 'vue'
import {
    CircleCheck
} from '@element-plus/icons-vue';

const state = reactive({
    tableData: [
        {
            name: 'oppo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
        },
        {
            name: 'vivo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
        },
        {
            name: 'huawei',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
        },
        {
            name: 'apple',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
        }
    ],
    tableLable: {
        name: '品牌',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
    },
    countData: [
        {
            name: '今日支付订单',
            value: 1234,
            color: '#2ec7c9'
        },
        {
            name: '今日收藏订单',
            value: 210,
            color: '#ffb890'
        },
        {
            name: '今日支付订单',
            value: 1234,
            color: '#5ab1ef'
        },
        {
            name: '今日支付订单',
            value: 1234,
            color: '#2ec7c9'
        },
        {
            name: '今日支付订单',
            value: 1234,
            color: '#ffb890'
        },
        {
            name: '今日支付订单',
            value: 1234,
            color: '#5ab1ef'
        },
    ]
})

</script>

<style lang="less" scoped>
.user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .userinfo {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: #999;
        }
    }
}

.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999;

        span {
            color: #666;
            margin-left: 60px;
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .el-card {
        margin-bottom: 20px;
        width: 32%;
        .el-icon {
            width: 80px;
            height: 80px;
            font-size: 30px;
            text-align: center;
            line-height: 80px;
            color: #fff;
        }
        .detail {
            display: flex;
            margin-left: 15px;
            flex-direction: column;
            justify-content: center;

            .price {
                height: 30px;
                line-height: 30px;
                font-size: 30px;
                margin-bottom: 10px;
            }
            .desc {
                font-size: 14px;
                color: #999;
                text-align: center;
            }
        }
    }

}</style>