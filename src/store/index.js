import { createStore } from 'vuex'
import tab from './tab.js'

const store = createStore({
    modules: {
        tab
    }
})

export default store;