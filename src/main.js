import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import './api/mock'

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
    ElTableColumn,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTag,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElSelect,
    ElOption,
    ElDatePicker,
    ElMessage
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
    .use(ElBreadcrumb)
    .use(ElBreadcrumbItem)
    .use(ElTag)
    .use(ElDialog)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElSelect)
    .use(ElOption)
    .use(ElDatePicker)
    .use(ElMessage)
    .use(store)
    .mount('#app');
