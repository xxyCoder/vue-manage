import { createRouter, createWebHashHistory } from 'vue-router';
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
            component: () => import('../views/Login.vue')
        }
    ]
})

export default router