<template>
  <div id="app">


    <router-view>

    </router-view>
<!--    <player></player>-->
    <tab ></tab>
  </div>
</template>
<script>
  import MHeader from "@/components/m-header/m-header";
  import Tab from "@/components/tab/tab";
  import Player from "@/components/player/player"
  export default{
     components:{
       MHeader,
       Tab,
       Player

     }
  }
</script>

<style lang="stylus">

</style>
