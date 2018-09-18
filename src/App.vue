<template>
  <div id="app">
    <audio id="audio" autoplay="autoplay" loop src="../static/myMusic/sszj.mp3">
      <!--<source  />-->
    </audio>
    <!--<div id="hb"></div>-->
    <heads></heads>
    <router-view></router-view>
    <fonts v-show="$store.state.showFont"></fonts>
    <masks></masks>

  </div>

</template>

<script>
  import heads from '@/components/header';
  import fonts from '@/components/footer';
  import mask from '@/components/mask'



  export default {

    components:{
      'heads':heads ,
      'fonts':fonts,
      'masks':mask
    } ,
    mounted(){

    },
    watch:{
      '$route.path': function (newVal, oldVal) {

      }
    }
  }

</script>

<style>
body{
  font-family: '宋体' ;
  background-image: url(../static/myImg/bg1.jpg) ;
  background-position:top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}

</style>

