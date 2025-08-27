<template>
    <div class="container">
        <!-- 展示顶部组件 -->
        <HospitalTop/>
        <!-- 路由组件 -->
         <div class="content">
            <router-view></router-view>
         </div>
        <!-- 展示底部组件 -->
        <HospitalBottom/>

    </div>

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('当前路由:', route) // 在浏览器开发者工具中查看输出


</script>

<style scoped lang="scss">
.container{
    width: 100%;
    height: 100vh;
    // background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    padding-top: 70px;//顶部组件的高度
    .content{
        margin-top: 80px;
        width: 1200px;
        min-height:700px;
        background-color: rgb(247, 246, 247);
    }
}

</style>