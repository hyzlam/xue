<template>
   <transition name="slide">
      <music-list :songs="songs" :title="title" :bgImage="bgImage" v-if="songs"></music-list>
   </transition>
</template>

<script>
import {mapGetters} from "vuex";
  import MusicList from "@/components/music-list/music-list"
  import {url,params,ERR_OK,callback} from "@/api/getSingerDetail"
   import createSong from "@/common/js/song"
   export default {
      data(){
         return {
            songs:[]
         }
      },
      computed:{
         title(){
            //歌手的名字
            return this.getSinger.name;
         },
         bgImage(){
            //歌手的头像
            return this.getSinger.avatar;
         },
         ...mapGetters(['getSinger'])
      },
      methods:{
         _getDetail(){
            // let singermid = this.$route.params.id;
            let singermid = this.getSinger.id;
            if(!singermid){
               this.$router.push('/singer');
               return;
            }
            this.$http.jsonp(url,{
               params:{...params,singermid},
               "jsonp":callback
            }).then(res=>{

               if(res.data.code==ERR_OK){
                  // console.log(res.data.data.list);
                  this.songs = this._normalizeSongs(res.data.data.list);
                  console.log(this.songs)
               }
            })
         },
         _normalizeSongs(list){

           let ret = [];
           list.forEach(item=>{
                let {musicData}=item;
                if (musicData.songmid&&musicData.albummid) {
                      ret.push(createSong(musicData))
                }
           })
            // list.forEach(item=>{
            //    let {musicData} = item;
            //    if(musicData.songmid&&musicData.albummid){
            //       ret.push(createSong(musicData))
            //    }
            // });
           return ret;
         }
      },
      created(){
         this._getDetail()
      },
      components:{
         MusicList
      }
   }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   @import "~@/common/stylus/variable"
   .slide-enter-active, .slide-leave-active
      transition: all 0.3s


   .slide-enter, .slide-leave-to

      transform: translate3d(100%, 0, 0)

</style>