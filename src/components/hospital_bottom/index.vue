<template>
    <div class="bottom">
        <div class="content">
            <div class="left">底部</div>

            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>用户协议</span>
                <span>隐私协议</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">
.bottom {
    width: 100%;
    height: 50px;
    background: #f5f5f5;
    display: flex;
    justify-content: center;

    .content {
        width: 1200px;
        height: 100%;
        background: cyan;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right{
            span{
                margin-left: 20px;
                color: #666;
                font-size: 14px;
                cursor: pointer;
            }
        }
    }
}
</style>