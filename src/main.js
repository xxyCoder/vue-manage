import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import {
    ElMain,
    ElAside,
    ElHeader,
    ElContainer
} from 'element-plus'
import 'element-plus/dist/index.css';

const app = createApp(App);
app
    .use(router)
    .use(ElMain)
    .use(ElAside)
    .use(ElHeader)
    .use(ElContainer)
    .mount('#app');
