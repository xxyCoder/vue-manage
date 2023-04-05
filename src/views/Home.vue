<template>
    <el-row>
        <el-col :span="8" style="padding-right: 10px">
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
        <el-col :span="16" style="padding-left: 10px">
            <div class="num">
                <el-card :body-style="{ display: 'flex', padding: '0' }" v-for="item in state.countData" :key="item.name">
                    <el-icon :style="{ background: item.color }">
                        <CircleCheck />
                    </el-icon>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px">
                <div ref="echarts1" style="height: 280px;"></div>
            </el-card>
            <div class="graph">
                <el-card style="height: 260px;">
                    <div ref="echarts2" style="height: 260px;"></div>
                </el-card>
                <el-card style="height: 260px;">
                    <div ref="echarts3" style="height: 190px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import {
    CircleCheck
} from '@element-plus/icons-vue';
import * as echarts from 'echarts';
import { getData } from '../api/index'
import { use } from 'echarts';

const echarts1 = ref();
const echarts2 = ref();
const echarts3 = ref();

onMounted(async () => {
    const data = await getData();
    const { tableData } = data.data.data;
    state.tableData = tableData;

    const myEcharts1 = echarts.init(echarts1.value);
    const { orderData,userData,videoData } = data.data.data;
    const xAxis = Object.keys(orderData.data[0]);
    let echarts1Option = {
        // 处理x轴数据
        xAxis: {
            data: xAxis
        },
        legend: {
            data: xAxis
        },
        series: [],
        yAxis: {}
    };
    xAxis.forEach(key => {
        echarts1Option.series.push({
            name: key,
            data: orderData.data.map(item => item[key]),
            type: 'line'
        });
    });
    myEcharts1.setOption(echarts1Option);

    const myEcharts2 = echarts.init(echarts2.value);
    const echarts2Option = {
        legend: {
            textStyle: {
                color: "#333"
            },
        },
        grid: {
            left: "20%"
        },
        tooltip: {
            trigger: "axis"
        },
        xAxis: {
            type: "category",
            data: userData.map(item => item.data),
            axisLine: {
                lineStyle: {
                    color: '#17b3a3'
                }
            },
            axisLabel: {
                interval: 0,
                color: '#333'
            }
        },
        yAxis: [
            {
                type: "value",
                axisLine: {
                    lineStyle: {
                        color: "#17b3a3"
                    }
                }
            }
        ],
        color: ["#2ec7c9","#b6a2de"],
        series: [
            {
                name: '新增用户',
                data: userData.map(item => item.new),
                type: 'bar'
            },
            {
                name: '活跃用户',
                data: userData.map(item => item.active),
                type: 'bar'
            }
        ]
    };
    myEcharts2.setOption(echarts2Option);

    const myEcharts3 = echarts.init(echarts3.value);
    const echarts3Option = {
        tooltip: {
            trigger: 'item'
        },
        color: [
            "0f78f4",
            "dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf"
        ],
        series: [
            {
                data: videoData,
                type: 'pie'
            }
        ]
    };
    myEcharts3.setOption(echarts3Option);
})

const state = reactive({
    tableData: [],
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

}

.graph {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .el-card {
        width: 48%;
    }
}</style>