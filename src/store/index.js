import { createStore } from 'vuex'
import tab from '../router/tab';

const store = createStore({
    state() {
        isCollapse: false   // 控制菜单的展开还是收起
    },
    mutations: {
        collapseMenu(state) {   // 控制菜单是收起还是展开
            state.isCollapse = !state.isCollapse;
        }
    }
})

export default store;