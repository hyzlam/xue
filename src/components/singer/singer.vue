<template>
    <div class="recommend">
        <scroll class="recommend-content" :data="zong.slider">
            <div>
                <slider v-if="dant.length" :loop="true" :autoplay="true">
                    <div v-for="item in zong.slider">
                        <a :href="item.webUrl">
                            <img :src="item.cover" alt="">
                        </a>
                    </div>
                </slider>
                <div class="search">
                    <div class="search-k" v-on:click="show = !show">
                        <!--                 <input class="search_input"  autocomplete="off"-->
                        <!--                        autocorrect="off" placeholder="搜索旅游目的地/攻略/旅行咨讯"-->
                        <!--                        ref="inpu">-->
                        <div class="search_input">搜索旅游目的地/攻略/旅行咨讯</div>
                    </div>
                </div>
                <div class="dao">
                    <ul>
                        <li v-for="item in zong.style"><a href="###"><img :src="item.icon"  class="s1" alt=""><p>{{item.name}}</p></a></li>

                    </ul>
                </div>

                <div class="two-s">

                    <div class="two" >

                        <toua>
                            <h2>新品&独家</h2>
                            <a href="###" class="right">更多</a>
                        </toua>
                        <div class="ac">
                            <ul>
                                <li v-for="it in zong.newProduct">
                                    <a href="###" class="ac-a">
                                    <img :src="it.cover" alt="">
                                        <p class="a">{{it.productName}}</p>
<!--                                        <p class="b">{{it.productArea+(it.productCity?'-':'')+it.productCity}}</p>-->
                                        <p class="c">{{'￥'+it.currentPrice+'起/'+it.unitCount+it.unit}}</p>
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div class="two" >

                        <toua>
                            <h2>本周特卖</h2>
                            <a href="###" class="right">更多</a>
                        </toua>
                        <div class="ac">
                            <ul>
                                <li v-for="it in zong.specialsProduct">
                                    <a href="###" class="ac-a">
                                        <img :src="it.cover" alt="">
                                        <p class="a">{{it.productName}}</p>
                                        <!--                                        <p class="b">{{it.productArea+(it.productCity?'-':'')+it.productCity}}</p>-->
                                        <p class="c">{{'￥'+it.currentPrice+'起/'+it.unitCount+it.unit}}</p>
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>


                </div>

                <div class="zhuti">
                    <biaot>
                        <div>
                            <h4 style="font-size: 15px">主题推荐</h4>
                            <p>给出最新的出游主题</p>
                        </div>
                    </biaot>
                    <div class="zhuti-x" v-for="item in zong.theme">
                        <img :src="item.cover" alt="">
                        <p>{{item.name}}</p>
                        <div class="zhuti-x-x"></div>
                    </div>
                </div>

                <div class="recommend-list">
                    <biaot>
                        <div>
                            <h4 style="font-size:15px">攻略资讯</h4>
                            <p>推荐城市深度游攻略</p>
                        </div>
                    </biaot>
                    <div class="recommend-list-main">
                        <ul class="recommend-ul">
                            <li v-for="item in dissList" class="item" >
                                <div class="icon">
                                    <img v-lazy="item.cover" width="87" height="84">
                                </div>
                                <div class="text">
                                    <h2 class="name" v-html="item.title"></h2>
                                    <p class="desc c" v-html="item.viewCount+'人阅读'+'/'+item.time"></p>

                                </div>
                            </li>
                        </ul>
                    </div>






                </div>


                <div class="two-xih" >

                    <biaot>
                        <div>
                            <h4 style="font-size: 15px">猜你喜欢</h4>
                            <p>这些也许是你喜欢的</p>
                        </div>
                    </biaot>
                    <div class="ac">
                        <ul>
                            <li v-for="it in zuihou">
                                <a href="###" class="ac-a">
                                    <img :src="it.cover" alt="">
                                    <p class="a">{{it.productName}}</p>
                                    <!--                                        <p class="b">{{it.productArea+(it.productCity?'-':'')+it.productCity}}</p>-->
                                    <p class="c">{{'￥'+it.currentPrice+'起/'+it.unitCount+it.unit}}</p>
                                </a>
                            </li>
                        </ul>

                    </div>

                </div>






                <div class="two-s">
                    <biaot>
                        <div>
                            <h4>目的地推荐</h4>
                            <p>开启城市深度游攻略</p>
                        </div>
                    </biaot>
                    <div class="two-ac" >


                        <div class="ac-ct" >
                            <ul>
                                <li v-for="item in xi" class="ac-lit">
                                    <a :href="aa(item.scenic)" class="ac-a">
                                        <img :src="item.cover" alt="">
                                        <p class="a">{{item.fxb}}位当地飞小编推荐</p>
                                        <p class="c">{{item.cityName}}</p>
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>
                    <div class="gend"><a href="###">更多旅行资讯</a></div>
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

                <transition name="fade">
                    <div class="motai" v-if="show">
                        <div class="searchs">
                            <div class="searchs-left" v-on:click="show = !show">
                                <div class="searchs-left-r"><</div>
                            </div>
                            <div class="searchs-right" v-on:click="souc" >搜索</div>
                            <div class="search-k">

                                <input class="search_input"  autocomplete="off"
                                       autocorrect="off" placeholder="搜索旅游目的地"
                                       ref="ina" v-on:keydown="jp">
                            </div>


                        </div>

                        <div class="souj">
                            <ul>
                                <li v-for="item in souj">
                                    <a :href="dd(item.id)">
                                        <span>{{item.site}}</span>
                                        <p>{{item.area}}</p>
                                        <div class="searchs-left" >
                                            <div class="searchs-left-r">></div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div class="motai-two">
                            <h1>—热门搜索—</h1>
                            <ul>
                                <li v-for="item in rm" v-on:click="hz" ref="hzl">{{item.title}}</li>
                            </ul>
                        </div>

                    </div>
                </transition>

            </div>
            <!--            <div class="loading-container" v-show="!dissList.length">-->
            <!--                <loading></loading>-->
            <!--            </div>-->
        </scroll>

    </div>
</template>

<script>
    import axios from "axios";
    import {url,params,callback,ERR_OK} from "@/api/getRecommend"
    import Slider from '@/base/slider/slider';
    import Biaot from '@/base/biaot/biaot';
    import {urla,urlb,urlc,urld,urle,urlh,urlv,urlp} from "@/api/lvy";
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
                zuix:[],
                show: false,
                rm:[],
                souj:[],
                dant:[],
                zong:{},
                zuihou:[]
            }
        },
        methods:{
            jp(e){
                if (e.keyCode == 13) {
                    var zhi = encodeURI(this.$refs.ina.value)
                    this.getDissListhsous(zhi)
                }
            },
            souc(){
                var zhi=encodeURI(this.$refs.ina.value)
                this.getDissListhsous(zhi)
            },
            hz(e){
                // console.log(e.target.innerHTML)
                this.$refs.ina.value=e.target.innerHTML
            },
            aa(id){
                return `https://wap.feekr.com/guide/detail?id=${id}&pv_from=index-rec`

            },
            bb(id){
                return `https://wap.feekr.com/column/officialColumnNew?id=${id}&pv_from=index-rec`

            },
            cc(id){
                return `https://wap.feekr.com/column/article?id=${id}&pv_from=index-rec`

            },
            dd(id){
                return `https://wap.feekr.com/guide/search_result?id=${id}`
            },
            getRecommends(){

                this.$http.jsonp(url,{
                    params:params,
                    'jsonp':callback
                }).then(res => {
                    if (res.body.code==ERR_OK) {
                        this.recommends = res.body.data.slider;
                    }

                    // get body data
                    // this.someData = response.body;
                    this.getDissList();
                },res => {
                    // error callback
                });

            },
            getDissList(){

                axios(urla).then(response=>{
                    this.recommends = response.data.result.slideItem
                    console.log(response.data.result.slideItem)

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

            getDissListe(){

                axios(urle).then(response=>{
                    this.zuix = response.data.result.list
                    // console.log(response.data.result.list)


                })
            },
            getDissListh(){

                axios(urlh).then(response=>{
                    this.rm = response.data.result.list
                    // console.log(response.data.result.list)


                })
            },
            getDissListp(){

                axios(urlp).then(response=>{
                    this.zuihou = response.data.result.list
                    console.log(response.data.result.list)


                })
            },

            getDissListhsous(zhi){
                var sous=`http://192.168.3.35:3000/sous?keyword=${zhi}`
                axios(sous).then(response=>{
                    this.souj = response.data.result.list
                    console.log(response.data.result.list)


                })
            },
            getDissListv(){

                axios(urlv).then(response=>{
                    this.zong = response.data.result
                    this.dant = response.data.result.slider
                    console.log(response.data.result)


                })
            },
            fn(){
                console.log(1)
            },


        },

        created(){
            // this.getRecommends();
            this.getDissList();
            this.getDissLista();
            this.getDissListc()
            this.getDissListd()
            this.getDissListe()
            this.getDissListh()
            this.getDissListv()
            this.getDissListp()




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
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform :translateX(100%)
    }
    /*@import "~@/common/stylus/variable"*/

    .recommend
        position: fixed
        width: 100%
        top: 0px
        bottom: 0
        .dao
            /*height:100px*/
            width: 100%
            background #fff
            padding 2px 0px
            ul
                width:100%

                overflow :hidden
                padding-top 15px
                li
                    width 25%
                    height: 80px
                    float left
                    a
                        width :100%
                        height: 100%
                        img
                            display block


                            margin 0 auto;
                            height: 50%

                        p
                            display block
                            text-align center
                            font-size 13px
                            padding-top 10px



        .search
            background: #F6F6F6
            width: 100%
            height: 45px
            padding-top 10px
            .search-k
                width: 90%
                height: 35px
                border: 1px solid #EAEAEA
                border-radius: 10px
                position:relative;
                margin: 0 auto
                background #fff
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
            border-top 1px solid #F6F6F6
            .ac-ct
                padding 15px 12px
                background #fff
                height 280px

                ul
                    overflow hidden
                    width 100%
                    display flex
                    margin-left -4px
                    display block
                    height 280px

                    li
                        float left
                        width 47.5%
                        height 180px
                        display block
                        padding-left 8px
                        height 140px

                        .ac-a
                            width 100%
                            height 100%
                            display block
                            position relative

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
                                text-align center

                            .c
                                text-align center
                                display block
                                text-align center
                                color #FFF
                                position absolute
                                top 40px
                                font-size 14px


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


        .motai
            position fixed
            top 0px

            width 100%
            height 100%
            z-index 10
            background #F6F6F6
            .souj

                overflow hidden
                background #fff
                padding 10px 0px

                ul
                    display block

                    padding 0px 20px
                    li
                        display block
                        width 100%
                        height 20px
                        position relative
                        a
                            display block
                            width 100%
                            height 100%
                            span
                                height 100%
                                display block
                                float left
                                font-size 13px
                                line-height 20px
                                padding 0px 10px
                                color #1ABC9C
                            p
                                height 100%
                                display block
                                float left
                                font-size 13px
                                line-height 20px
                                height 20px
                                padding 0px 10px
                            .searchs-left
                                width 22px;
                                height 22px


                                border-radius 50%
                                float right

                                margin-left 15px
                                .searchs-left-r
                                    width 22px
                                    height 22px
                                    color #222
                                    text-align center
                                    line-height 22px



            .searchs
                background: #fff
                width: 100%
                height: 45px
                padding 17px 0px 8px 0px
                display block
                .searchs-right
                    width 42px
                    height 25px
                    color #fff
                    float right
                    background #1ABC9C
                    text-align center
                    line-height 25px
                    font-size 11px
                    border-radius 7px
                    margin-right 13px
                    margin-top 6px
                .searchs-left
                    width 22px;
                    height 22px

                    border 1px solid #E9E9E9
                    border-radius 50%
                    float left
                    margin-top 6px
                    margin-left 15px
                    .searchs-left-r
                        width 22px
                        height 22px
                        color #ECECEC
                        text-align center
                        line-height 22px

                .search-k
                    width: 65%
                    height: 35px
                    border: 1px solid #EAEAEA
                    border-radius: 20px

                    margin: 0 auto
                    background #F5F5F5

                    .search_input
                        width: 75%
                        height: 35px
                        display block
                        line-height: 35px
                        margin-left 10%
                        font-size: 13px
                        background #F5F5F5
                        color :#707070
                        border: 0;  // 去除未选中状态边框
                        outline: none; // 去除选中状态边框
                        background-color: rgba(0, 0, 0, 0);//
            .motai-two
                width 100%
                height 220px
                background #fff
                margin-top 10px
                h1
                    font-size 16px
                    text-align center
                    padding-top 40px
                ul
                    overflow hidden
                    display block
                    width 100%
                    padding-top 30px
                    padding-left 40px
                    width 80%
                    li
                        float left

                        height 20px
                        text-align center
                        line-height 20px
                        font-size 14px
                        color #1a1a1a
                        border 1px solid #e5e5e5
                        margin 10px 10px
                        border-radius 10px
                        padding 3px 7px


        .two-s
             margin-top 10px
        .zhuti
             background #fff
             margin-top 10px
             .zhuti-x
                 padding 0px 13px

                 img
                     width 100%
                     height 135px
                 p
                     font-size 14px
                     display block
                     padding-top 12px
                     padding-left 15px
                     padding-bottom 20px
                 .zhuti-x-x
                     width 100%
                     height 1px
                     margin-bottom 18px
                     background #e5e5e5


        .two-xih
            width 100%
            overflow hidden
            .ac

                padding 15px 12px
                background #fff
                ul
                    overflow hidden
                    width 100%
                    display block
                    margin-left -2px

                    li
                        float left
                        width 47%
                        height 160px
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
                                color #1ABC9C

</style>