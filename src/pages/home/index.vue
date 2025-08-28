<template>
    <div>
        <!-- 首页轮播图 -->
        <Carousel />
        <!-- 首页搜索框 -->
        <Search />
        <!-- 首页展示结构 -->
        <el-row :gutter="20">
            <el-col :span="20">
                <!-- 等级子组件 -->
                <Level />
                <!-- 地区子组件 -->
                <Region />
            </el-col>
            <el-col :span="4">2
            </el-col>
        </el-row>


    </div>
</template>
<script setup lang="ts">

import Carousel from './carousel/index.vue'
import Search from './search/index.vue'

import Level from './level/index.vue'
import Region from './region/index.vue'
</script>
<style scoped lang="scss"></style>