import { createRouter, createWebHashHistory } from 'vue-router';
import Cookie from 'js-cookie'
import Main from '../views/Main.vue'

// 配置路由映射
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('../views/Home.vue')
                },
                {
                    path: '/user',
                    name: 'User',
                    component: () => import('../views/User.vue')
                },
                {
                    path: '/mall',
                    name: 'mall',
                    component: () => import('../views/Mall.vue')
                },
                {
                    path: '/page1',
                    name: 'pageOne',
                    component: () => import('../views/PageOne.vue')
                },
                {
                    path: '/page2',
                    name: 'pageTwo',
                    component: () => import('../views/PageTwo.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        }
    ]
});

// 全局路由守卫
router.beforeEach((to,from,next) => {
    // 判断token是否存在
    const Token = Cookie.get('Token');
    if(!Token && to.name !== 'login') {    // 不存在则表示未登录，返回登录页面,如果是登录页面，要避免死循环
        next('/login');
    } else if(Token && to.name === 'login') {  // 说明用户登录，切要去首页，避免重复登录，此时去首页    
        next('/home')
    } else {
        next();
    }
})

export default router