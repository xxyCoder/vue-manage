import { createRouter,createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import User from '../views/User.vue';

// 配置路由映射
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
})

export default router