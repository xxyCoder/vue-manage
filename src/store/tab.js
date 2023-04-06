export default {
    state: {
        isCollapse: false,
        tableList: [
            {
                path: '/',
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home"
            }
        ]
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val) {
            // 判断添加的数据是否为首页
            if(val.name !== 'home') {
                const idx = state.tableList.findIndex(item => item.name === val.name);
                // 如果不存在
                if(idx === -1) {
                    state.tableList.push(val);
                }
            }
        },
        closeTag(state,payload) {
            const index = state.tableList.findIndex(item => item.name === payload.name);
            state.tableList.splice(index,1);
        }
    }
}