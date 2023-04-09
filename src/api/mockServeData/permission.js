import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username,password } = JSON.parse(config.body);
        if(username === 'admin' && password === 'admin') {
            return {
                code: 20000,
                data: {
                    menu: [
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            url: 'home/index'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            url: 'mall/index'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            url: 'user/index'
                        },
                        {
                            label: '其他',
                            children: [
                                {
                                    path: '/page1',
                                    name: 'pageOne',
                                    label: '页面1',
                                    url: 'other/pageOne'
                                },
                                {
                                    path: '/page2',
                                    name: 'pageTwo',
                                    label: '页面2',
                                    url: 'other/pageTwo'
                                }
                            ]
                        }
                    ],
                    Token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else {
            return {
                code: -999,
                data: {
                    message: '密码错误'
                }
            }
        }
    }
}