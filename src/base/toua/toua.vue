<template>
    <div class="xue">
        <slot class="left" ></slot>


        <div class="main"></div>
    </div>
</template>

<script>
    export default {
        name: "toua"
    }
</script>

<style scoped lang="stylus">
    .xue
        height 25px

        padding 10px 12px;
        background #fff
        h2
             float left
             display block
             font-size 13px
             padding 0px 4px 0px 3px
             background #fff
        .h
            font-size 10px
        .right
             height 100%
             float right
             display block
             font-size 13px
             color #7DD9C7
             padding 0px 3px 0px 3px
             background #fff

        .main
              height 1px
              width 100%
              background #f6f6f6
              margin-top 6px





</style>