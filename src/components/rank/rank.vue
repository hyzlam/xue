<template>
    <div class="recommend">
        <scroll class="recommend-content" :data="recommends">
            <div>
                <div class="search">
                    <div class="search-k">

                        <div class="search_input">搜索的目的</div>
                    </div>
                </div>
                <div class="two-s-two">
                    <h1 class="hx">-当季小众推荐-</h1>
                    <div class="two-ac" >


                        <div class="ac-ct" >
                            <ul>
                                <li v-for="item in xi" class="ac-lit">
                                    <a :href="aa(item.scenic)" class="ac-a">
                                        <img :src="item.cover" alt="">

                                        <p class="c">{{item.cityName}}</p>
                                        <p class="a">{{item.fxb}}位当地飞小编推荐</p>
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

                <div class="three" v-for="item in recommends">
                    <h1>{{item.area}}</h1>
                    <p>{{item.desc}}</p>
                    <ul>
                        <li v-for="it in item.city">
                            <a :href="cc(it.id)">
                                <img v-lazy="it.cover" alt="">
                                <p>{{it.name}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="three-s">
                </div>












                <div class="zuix">
                    <biaot>
                        <div>
                            <h4>编辑精选</h4>
                            <p>推荐最具小众特色的旅行体验</p>
                        </div>
                    </biaot>
                    <div class="two-tc" v-for="item in zuix" >

                        <toua>
                            <h2 class="h">{{item.column}}</h2>
                            <a :href="bb(item.columnId)" class="right">更多</a>
                        </toua>
                        <div class="ac">
                            <ul>
                                <li v-for="it in item.article">
                                    <a :href="cc(it.id)" class="ac-a">
                                        <p class="a">{{it.title}}</p>
                                        <div class="ac-a-x">
                                            <img :src="it.cover" alt="">
                                            <div class="ac-x-r">
                                                <p class="b">{{it.desc}}</p>
                                                <p class="c">{{(it.tag[0]?it.tag[0]:"")+(it.tag[1]?it.tag[1]:"")}}</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <p></p>
                        </div>

                    </div>
                    <div class="gend"><a href="###">更多旅行资讯</a></div>
                </div>


            </div>
            <!--            <div class="loading-container" v-show="!dissList.length">-->
            <!--                <loading></loading>-->
            <!--            </div>-->
        </scroll>

    </div>
</template>

<script>
    import axios from "axios";

    import Slider from '@/base/slider/slider';
    import Biaot from '@/base/biaot/biaot';
    import {urlf,urlb,urlc,urld,urle} from "@/api/gonl";
    import Scroll from "@/base/scroll/scroll";
    import Loading from "@/base/loading/loading"
    import Toua from "@/base/toua/toua";

    export default {
        data(){
            return{
                recommends:[],
                dissList:[],
                product:[],
                xi:[],
                zuix:[]
            }
        },
        methods:{
            aa(id){
                return `https://wap.feekr.com/guide/detail?id=${id}&pv_from=index-rec`

            },
            bb(id){
                return `https://wap.feekr.com/column/officialColumnNew?id=${id}&pv_from=index-rec`

            },
            cc(id){
                return `https://wap.feekr.com/guide/detail?id=${id}&pv_from=guide_index_area`

            },

            getDissList(){

                axios(urlf).then(response=>{
                    this.recommends = response.data.result.list
                    console.log(response.data.result.list)

                })
            },
            getDissLista(){

                axios(urlb).then(response=>{
                    this.dissList = response.data.result.list
                    // console.log(response.data.result.list)


                })
            },
            getDissListc(){

                axios(urlc).then(response=>{
                    this.product = response.data.result.product
                    // console.log(response.data.result.product)


                })
            },
            getDissListd(){

                axios(urld).then(response=>{
                    this.xi = response.data.result.list
                    // console.log(response.data.result.list)


                })
            },
            getDissListc(){

                axios(urlc).then(response=>{
                    this.product = response.data.result.product
                    // console.log(response.data.result.product)


                })
            },
            getDissListe(){

                axios(urle).then(response=>{
                    this.zuix = response.data.result.list



                })
            },
            fn(){
                console.log(1)
            }

        },
        created(){
            // this.getRecommends();
            this.getDissList();
            this.getDissLista();
            this.getDissListc()
            this.getDissListd()
            this.getDissListe()


        },
        computed:{

        },
        components:{
            Slider,
            Scroll,
            Loading,
            Biaot,
            Toua
        }

    }
</script>

<style scoped lang="stylus">
    /*@import "~@/common/stylus/variable"*/
    .recommend
        position: fixed
        width: 100%
        top: 0px
        bottom: 0


        .three-s
             background #fff
             height 100px
        .dao
            height:100px
            width: 100%
            background #fff
            ul
                width:100%
                height: 100%
                overflow :hidden
                li
                    width 20%
                    height: 100%
                    float left
                    a
                        width :100%
                        height: 100%
                        span
                            display block
                            background: url("./p1.png") no-repeat center

                            margin 0 auto;
                            height: 50%
                        .s1
                            background: url("./p1.png") no-repeat center
                        .s2
                            background: url("./p2.png") no-repeat center
                        .s3
                            background: url("./p3.png") no-repeat center

                        .s4
                            background: url("./p4.png") no-repeat center
                        .s5
                            background: url("./p5.png") no-repeat center
                        p
                            display block
                            text-align center



        .search
            background: #fff
            width: 100%
            height: 45px
            padding 17px 0px 8px 0px
            .search-k
                width: 90%
                height: 35px
                border: 1px solid #EAEAEA
                border-radius: 20px
                position:relative;
                margin: 0 auto
                background #F5F5F5
                .search_input
                    width: 80%
                    height: 35px
                    display block
                    line-height: 35px
                    margin-left: 15%
                    font-size: 13px

                    color :#707070

            .search-k::before
                content :""
                position: absolute
                top:9px
                left :30px
                width: 16px;
                height: 16px;
                background: url("./ser.svg") no-repeat
                background-size :100% 100%
        .recommend-content

            height: 100%
            overflow: hidden
            .slider-wrapper
                position: relative
                width: 100%
                overflow: hidden
            .recommend-list-main
                width 100%
                margin-top 1px
                .recommend-ul
                    width 100%
                    overflow hidden
                    background #fff
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
                        padding: 10px 0px 20px 0px
                        margin 0px 15px
                        background #fff
                        border-top 1px solid #F6F6F6

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
                            padding-left 25px
                            .name
                                margin-bottom: 10px
                                color: $color-text
                                width 220px
                                overflow:hidden
                                text-overflow:ellipsis
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                font-size 14px;
                                height 38px;
                            .desc
                                color: $color-text-d
                                font-size 12px
                                display block
            .gend
                width 100%
                height 65px
                a
                    width 100%
                    height 100%
                    display block
                    text-align center
                    line-height 65px;
                    font-size 14px
                    color #1ABC9C
                    background #fff
                    margin-top 1px




            .loading-container
                position: absolute
                width: 100%
                top: 50%
                transform: translateY(-50%)


        .two
            width 100%
            overflow hidden
            .ac
                height 180px
                padding 15px 12px
                background #fff
                ul
                    overflow hidden
                    width 100%
                    display flex
                    margin-left -4px

                    li
                        float left
                        width 31%
                        height 180px
                        padding-left 8px

                        .ac-a
                            width 100%
                            height 100%
                            display block
                            img
                                height 95px
                                width 100%
                                background-origin content-box
                                background-clip content-box
                            p
                                width 100%
                                font-size 10px
                                color #2d2d2d
                                height 20px
                            .a
                                overflow:hidden
                                white-space:nowrap
                                text-overflow:ellipsis
                                width 100%
                                display block
                                padding-top 8px
                            .b
                                text-align center
                                display block
                                text-align center
                                color #666
                                overflow:hidden
                                white-space:nowrap
                                text-overflow:ellipsis
                                width 100%
                            .c
                                text-align center
                                display block
                                text-align center
                                color #000



        .two-ac
            width 100%
            overflow hidden

            .ac-ct
                padding 15px 12px
                background #fff
                height 310px
                overflow hidden

                ul
                    overflow hidden
                    width 100%
                    display flex
                    margin-left -4px
                    display block
                    height 310px

                    li
                        float left
                        width 47.5%
                        height 155px
                        display block
                        padding-left 8px


                        .ac-a
                            width 100%
                            height 100%
                            display block


                            img
                                height 95px
                                width 100%
                                background-origin content-box
                                background-clip content-box
                            p
                                width 100%
                                font-size 10px
                                color #2d2d2d
                                height 18px
                            .a
                                overflow:hidden
                                white-space:nowrap
                                text-overflow:ellipsis
                                width 100%
                                display block
                                padding-top 4px
                                text-align center

                            .c
                                text-align center
                                display block
                                text-align center
                                padding-top 8px

                                font-size 14px


        .hx
            display block
            height 50px
            width 100%
            margin-top 10px
            background #fff
            font-size 16px
            color #2d2d2d
            text-align center
            line-height 60px
        .two-tc
            width 100%
            overflow hidden
            .ac

                padding 15px 12px
                background #fff
                overflow hidden
                ul
                    overflow hidden
                    width 100%

                    margin-left -4px

                    li

                        width 100%
                        height 180px
                        padding-left 8px
                        display block
                        border-bottom 1px solid #f6f6f6
                        margin-bottom 20px
                        .ac-a
                            width 100%

                            display block
                            p
                                width 100%
                                font-size 15px
                                color #2d2d2d
                                height 42px
                            .a

                                width 100%
                                display block
                                padding-bottom  12px
                            .ac-a-x
                                width 100%
                                overflow hidden
                                height 100px
                                img
                                    height 110px
                                    width 50%
                                    background-origin content-box
                                    background-clip content-box
                                    float left
                                .ac-x-r
                                    float right
                                    width 45%
                                    p
                                        width 100%
                                        font-size 10px
                                        color #2d2d2d
                                        height 20px
                                        float right
                                        display block

                                    .b

                                        color #000

                                        width 100%
                                        float right
                                        height 40px
                                        margin-top 10px;
                                    .c



                                        color #999999
                                        height 20px

                    li:nth-child(2)
                        border-bottom 0px solid #f6f6f6
                        margin-bottom 0px


        .three
            height 220px
            padding 10px
            margin-top 10px
            background #fff


            h1
                 display block
                 text-align center
                 padding-top 15px
                 width 100%
                 font-size 16px
                 color #2d2d2d
                 height 20px
                 line-height 20px
            p
                 width 100%
                 text-align center
                 color #666666
                 font-size 12px
                 height 20px
                 line-height 20px
                 padding 10px 0px 15px 0px
            ul
                 width 100%
                 overflow hidden
                 li
                     height 110px
                     float left
                     width 31%
                     padding-left 2%
                     img
                          width 100%
                          height 80px
                     p
                          display block
                          text-align center
                          font-size 14px
                          color #2d2d2d
                          width 100%
                          height 20px
                          line-height 20px
                          padding-top 5px



</style>