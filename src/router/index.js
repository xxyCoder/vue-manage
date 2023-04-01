import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/Main.vue'

// 配置路由映射
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Main,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('../views/Home.vue')
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('../views/User.vue')
                }
            ]
        }
    ]
})

export default router