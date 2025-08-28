<template>
    <div class="region">
        
        <div class="content">
            <div class="left">地区:</div>
            <ul class="hospital-level">
                <li class="active">全部</li>
                <li>上海</li>
                <li>南京</li>
                <li>北京</li>
                <li>苏州</li>
                <li v-for="item in 50" :key="item">杭州</li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.region {
    color: #7f7f7f;
    margin-top:15px;

    

    .content {
        display: flex;

        .left {
            margin-right: 20px;
            width: 90px;
        }

        .hospital-level {
            display: flex;
            flex-wrap: wrap;//自动换行
            li {
                margin-right: 10px;
                margin-bottom:10px;

                &.active {
                    color: #409EFF;

                }

            }

            li:hover {
                cursor: pointer;
                color: #409EFF;
            }
        }

    }
}
</style>