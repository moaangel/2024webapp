<template>
    <div class="conWrap">
        <div class="container menu">
            <a href="#" class="subMenu">빠른분야찾기</a>
            <a href="#">베스트</a>
            <a href="#">신상품</a>
            <a href="#">이벤트</a>
            <a href="#">바이백</a>
            <a href="#">매장안내</a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.conWrap{
    width: 100%;
    // background: pink;
    border-bottom: 1px solid #888;
    .menu{
        display: flex;
        gap: 10px;
        a{
            padding: 16px;
            display: block;
            width: calc((100%-50px)/6);
            position: relative;
        }
    }
}
</style>