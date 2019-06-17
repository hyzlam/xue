<template>
    <div class="zhu">
        <div class="ma">
        <span></span>

        <slot ></slot>

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="stylus">
    .zhu
       width 100%
       background: #FFF
       height: 65px

       margin-top: 10px

    .ma

       padding 0px 15px
       height 24px
       margin 0 auto
       padding-top :20px;
       span
           width 3px;
           height 17px
           background:#1ABC9C
           float left
           border-radius 5px
           margin-top 4px
       div
           width: 80%
           height 24px;
           h4
               font-size 17px
               float left
               line-height 24px;
               height 24px
               padding-left 10px
           p
              font-size 12px;
              float left
              padding-left 10px
              margin-top 5px
              color #999999






</style>