<template>
<!--    <div class="search">-->
<!--        <div class="searchk">-->
<!--            <div class="searchk-l">-->
<!--            <form method="get" action="#">-->
<!--                <input class="search_input" type="search" autocomplete="off" autocorrect="off" placeholder="搜索歌曲、歌单、专辑" @focus="fou"-->
<!--                       ref="inpu" @keydown="key">-->
<!--                <div class="icon_search"></div>-->

<!--            </form>-->
<!--            </div>-->
<!--            <div class="searchk-r" v-if="xia" @click="cq">-->
<!--                取消-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="rm" v-if="!xia">-->
<!--            <h4>热门搜索</h4>-->
<!--            <ul >-->
<!--                <li v-for="item in hotkey" @click.stop="cli">{{item.k}}</li>-->
<!--            </ul>-->

<!--        </div>-->
<!--        <scroll class="recommend-content" :data="lis" v-if="xia"  >-->
<!--        <div class="recommend-list" >-->

<!--            <ul>-->
<!--                <li v-for="item in lis" class="item" >-->
<!--                    <div class="icon">-->
<!--                        <img v-lazy="item.pur" width="100" height="100">-->
<!--                    </div>-->
<!--                    <div class="text">-->
<!--                        <p class="name" v-text="item.albumname"></p>-->
<!--                        <p class="desc" v-text="item.singer[0].name"></p>-->

<!--                    </div>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->
<!--        </scroll>-->
<!--    </div>-->

<!--    <div class="denl">-->
<!--        <div class="denl-a">-->
<!--            <div class="denl-a-one"></div>-->
<!--            <div class="denl-a-one"></div>-->
<!--        </div>-->
<!--        <div class="denl-b"></div>-->
<!--    </div>-->
    <div class="search">





    </div>
    </template>

<script>
    import {url,params,callback,ERR_OK} from '@/api/search'
    import {url2,params2,callback2,ERR_OK2} from '@/api/search2'
    import Scroll from "@/base/scroll/scroll";
    // import { Button, Table } from 'iview';
    // Vue.component('Button', Button);
    // Vue.component('Table', Table);
    export default {
        data(){
            return{
                hotkey:[],
                xia:false,
                htm:"1111",
                lis:[],

            }
        },
        methods: {
            fou(){
                this.xia=true

            },
            cq(){
                this.xia=false
                // console.log(1)



                this.$refs.inpu.value=null
            },
            key(e){
                if (e.keyCode == 13) {
                    var c=this.$refs.inpu.value
                    this.getRecommends2(c);
                }

            },
            cli(e){
                console.log(e.target.innerHTML)
                var h=e.target.innerHTML
                console.log(this.$refs.inpu)
                this.$refs.inpu.value=h
                this.$refs.inpu.focus()
            },


            getRecommends() {

                this.$http.jsonp(url, {
                    params: params,
                    'jsonp': callback
                }).then(res => {
                    console.log(res.body.data.hotkey)
                  this.hotkey=res.body.data.hotkey
                    //

                }, res => {

                });

            },
            getRecommends2(c) {

                this.$http.jsonp(url2, {
                    params: {...params2,w:c},
                    'jsonp': callback2
                }).then(res => {
                    console.log(res.body.data.song.list)
                    var a=res.body.data.song.list
                    a.forEach((item)=>{
                        item.pur=`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.albummid}.jpg?max_age=2592000`
                    })

                    this.lis=a
                    console.log(a)
                    //

                }, res => {

                });

            },
        },
        components:{
            // Slider,
            Scroll,
            // Loading\

        },

        created(){
            this.getRecommends();
            // this.getRecommends2();



        },
    }
</script>

<style scoped lang="stylus">
    @import "~@/common/stylus/variable"

    .search
        position: fixed
        width: 100%
        height 120%
        background #1ABC9C

        /*top: 88px*/
        /*bottom: 0*/
        z-index 100
        .rm
            width 90%;
            height 200px;
            margin 0 auto
            margin-top 30px;
            ul
                display block
                width 100%;
                li
                   display block
                   float left
                   margin 6px 8px;
                   border 1px solid #e5e5e5
                   border-radius 5px
                   padding 4px 6px



        .searchk
            margin: 0 auto
            margin-top :17px
            width: 94%
            height: 42px
            border :1px solid #fff
            border-radius :3px
            .searchk-r
                display block
                width 60px;
                line-height 42px;

                float right
                height 42px
                text-align center

            .searchk-l
                width :80%
                height 42px
                float :left
                position: relative
                .icon_search
                    display: block
                    width: 20px;
                    height: 20px;
                    background: url("./1.png") no-repeat
                    background-size: 100% 100%
                    position: absolute
                    top: 10px
                    left: 5px
                    border: none
                .search_input
                    margin-top: 10px
                    margin-left: 40px
                    padding-left 5px;
                    display: block
                    height: 25px
                    line-height: 25px
                    width: 100%
                    color: #fff
                    background black
                    border: none
                    font-size: 14px
                    outline: none;
                    -webkit-tap-highlight-color: rgba(0,0,0,0)
        .recommend-content
            padding-top 30px
            height: 100%
            overflow: hidden

            .slider-wrapper
                position: relative
                width: 100%
                overflow: hidden
            .recommend-list
                .list-title
                    height: 65px
                    line-height: 65px
                    text-align: center
                    font-size: $font-size-medium
                    color: $color-theme
                .item
                    display: flex
                    box-sizing: border-box
                    align-items: center
                    padding: 0 20px 20px 20px
                    .icon
                        flex: 0 0 60px
                        width: 60px
                        padding-right: 20px
                    .text
                        display: flex
                        flex-direction: column
                        justify-content: center
                        flex: 1
                        line-height: 20px
                        overflow: hidden
                        font-size: $font-size-medium
                        padding-left: 50px
                        .name
                            margin-bottom: 10px
                            color: $color-text



                        .desc
                            color: $color-text-d
                            width:90%
                            overflow:hidden
                            white-space:nowrap
                            text-overflow:ellipsis



    .html
         height 100%
         body
             height 100%
             .denl
                     width 100%
                     height:100%
                     background #1ABC9C
</style>