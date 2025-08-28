<template>
    <div class="search">
        <el-autocomplete clearable placeholder="input name" class="form" />
        <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    </div>
</template>

<script setup lang="ts">
//引入图标
import { Search } from '@element-plus/icons-vue';

</script>

<style lang="scss" scoped>
.search {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    :deep(.el-input__wrapper) {
        width: 30px;
        margin-right :10px;
        margin-left: 100px;
    }
}
</style>