<template>
    <div class="tabs">
        <el-tag 
            v-for="(tag,index) in tags" 
            :key="tag.path" 
            :closable="tag.name !== 'home'" 
            :effect="route.name === tag.name ? 'dark':'plain'" 
            @click="changeMenu(tag)"
            @close="handleClose(tag,index)"
            size="small"
        >
            {{ tag.label }}
        </el-tag>
    </div>
</template>

<script setup>
import { reactive,onMounted,computed } from 'vue'
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router'

const store = useStore();
const route = useRoute();
const router = useRouter();
const tags = computed(() => store.state.tab.tableList);

const changeMenu = (item) => {
    router.push({ name: item.name });
};
const handleClose = (item,index) => {
    // 删除数据
    store.commit('closeTag',item);
    // 删除当前激活标签则跳一个
    const length = tags.value.length;
    if(item.name === route.name) {
        if(index === length) {  // 删除的最后一个，往左跳
            router.push({
                name: tags.value[index - 1].name
            });

        } else {
            router.push({   
                name: tags.value[index].name
            })
        }
    }
}
</script>

<style lang="less" scoped>
.tabs {
    padding: 20px;
    .el-tag  {
        margin-right: 20px;
        cursor: pointer;
    }
}
</style>