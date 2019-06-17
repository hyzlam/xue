<template>
    <div class="tab" v-if="qu">
        <router-link to="/recommend" class="tab-item">
            <span class="tu tu1"></span>
        <span class="tab-link">推荐</span>

        </router-link>
        <router-link to="/singer" class="tab-item">
            <span class="tu tu2"></span>
            <span class="tab-link">旅游</span>
        </router-link>
        <router-link to="/rank" class="tab-item">
            <span class="tu tu3"></span>
            <span class="tab-link">攻略</span>
        </router-link>
        <router-link to="/search" class="tab-item">
            <span class="tu tu4"></span>
            <span class="tab-link"  @click="meiy">搜索</span>
        </router-link>
    </div>
</template>

<script>
    import { mapGetters,mapMutations} from 'vuex'
    export default {
        data(){
            return {
                qu:this.getXiaoqu
            }
        },
        methods:{
            meiy(){

              this.me(false)
               this.qu=this.getXiaoqu()
            },
            ...mapMutations({"me":"XIAOQU"}),
            ...mapGetters(["getXiaoqu"])

        }
    }
</script>

<style scoped lang="stylus">
    @import "~@/common/stylus/variable"
    .tab
        display: flex

        position: fixed
        left: 0
        bottom: 0
        z-index: 180
        width: 100%

        height: 47px

        font-size: 12px
        background :#EEEEEE

        .tab-item
            flex: 1
            text-align: center
            .tu
                display block
                height: 20px
                margin 0 auto
                margin-top 5px
                background: url("./sou.svg") no-repeat
                background-size 100% 100%

            .tu1
                background: url("./stx.svg") no-repeat
                background-size 100% 100%
            .tu2
                background: url("./lyx.svg") no-repeat
                background-size 100% 100%
            .tu3
                background: url("./glx.svg") no-repeat
                background-size 100% 100%
            .tu4
                background: url("./wdx.svg") no-repeat
                background-size 100% 100%
            .tab-link
                padding-bottom: 5px
                color:#666666
                line-height: 25px
                height: 25px
                margin-bottom 2px
            &.router-link-active
                .tu1
                    background: url("./sou.svg") no-repeat
                    background-size 100% 100%
                .tu2
                    background: url("./ly.svg") no-repeat
                    background-size 100% 100%
                .tu3
                    background: url("./gl.svg") no-repeat
                    background-size 100% 100%
                .tu4
                    background: url("./wd.svg") no-repeat
                    background-size 100% 100%
                .tab-link
                    color: #1BBC9C

</style>