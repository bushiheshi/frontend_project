<template>
    <div>
        <el-carousel height="350px">
            <el-carousel-item v-for="item in 4" :key="item">
                <img src="../../../assets/realScene.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Carousel'
}
</script>

<style scoped lang="scss">
img {
    width: 100%;
    height: 350px;
    object-fit: cover;
}
</style>