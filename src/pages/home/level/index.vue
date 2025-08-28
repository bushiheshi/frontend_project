<template>
    <div class="level">
        <h1>医院</h1>
        <div class="content">
            <div class="left">等级:</div>
            <ul class="hospital-level">
                <li class="active">全部</li>
                <li>三级甲等</li>
                <li>三级乙等</li>
                <li>二级甲等</li>
                <li>二级乙等</li>
                <li>一级甲等</li>
            </ul>
        </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.level {
    color: #7f7f7f;

    h1 {

        font-weight: 900;
        margin: 10px 0;
        font-size: 20px;
    }

    .content {
        display: flex;

        .left {
            margin-right: 20px;
        }

        .hospital-level {
            display: flex;

            li {
                margin-right: 10px;

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