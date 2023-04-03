import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

import {
    ElMain,
    ElAside,
    ElHeader,
    ElContainer,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubMenu,
    ElButton,
    ElIcon,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElRow,
    ElCol,
    ElCard,
    ElTable,
    ElTableColumn
} from 'element-plus'
import 'element-plus/dist/index.css';
import './assets/common/resize.css'

const app = createApp(App);
app
    .use(router)
    .use(ElMain)
    .use(ElAside)
    .use(ElHeader)
    .use(ElContainer)
    .use(ElMenu)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElMenuItemGroup)
    .use(ElSubMenu)
    .use(ElButton)
    .use(ElIcon)
    .use(ElDropdown)
    .use(ElDropdownMenu)
    .use(ElDropdownItem)
    .use(ElRow)
    .use(ElCol)
    .use(ElCard)
    .use(ElTable)
    .use(ElTableColumn)
    .use(store)
    .mount('#app');
