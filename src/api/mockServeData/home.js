import Mock from 'mockjs';

let List = [];
export default {
    getStatiscalData: () => {
        for (let i = 0; i < 7; ++i) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: '苹果',
                        value: 2999
                    },
                    {
                        name: 'vivo',
                        value: 2999
                    },
                    {
                        name: '三星',
                        value: 2999
                    },
                    {
                        name: 'oppo',
                        value: 2999
                    },
                    {
                        name: '魅族',
                        value: 2999
                    }
                ],
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周三',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周四',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周五',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周六',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周日',
                        new: 5,
                        active: 200
                    }
                ],
                orderData: {
                    date: ['20230301', '20230302', '20230303', '20230304', '20230305', '20230306', '20230307',],
                    data: List
                },
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
                ]
            }
        }
    }
}