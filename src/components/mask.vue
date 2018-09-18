<template>
    <div v-show="$store.state.showMask" class="mask">
      <div class="box">
        <!--删除按钮-->
        <span @click = 'hideMask' class="del"></span>
        <!--小图-->
        <div class="all_img">
          <div  @mouseleave = 'out' @mouseenter = 'over' @mousemove = 'move' class="small_img"><img class="img_small" src="" alt=""><span class="_mask"></span></div><!--大图--><div class="big_img"><img class="moveImg" src="" alt=""></div>
        </div>
        <!--介绍110-->
        <p></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "" ,
        data(){

          return {

          }
        },
        methods:{
          hideMask(){
            this.$store.state.showMask = false ;
            $('body').css('overflow','auto') ;
          } ,
          over(){
            $('.big_img').css('opacity',1) ;
            $('._mask').show().css('display','block')  ;


          } ,
          out(){
            $('.big_img').css('opacity',0) ;
            $('._mask').hide()  ;
          },
          move(e){
            let _left = e.clientX - ($('.img_small').offset().left -$(document).scrollLeft())  - $('._mask').width()/2;

            let _top = e.clientY - ($('.img_small').offset().top - $(document).scrollTop()) - $('._mask').height()/2;

            if(_left <= 0 ){
              _left = 0 ;
            }
            if (_top <= 0){
              _top = 0 ;
            }
            if (_left >= $('.img_small').width() - $('._mask').width()){
              _left = $('.img_small').width() - $('._mask').width() ;
            }
            if (_top >= $('.img_small').height() - $('._mask').height()){
              _top = $('.img_small').height() - $('._mask').height();
            }
            $('._mask').css({
              'left':_left ,
              'top':_top
            }) ;

            let scale = $('.img_small').width() / $('._mask').width() ;

            $('.moveImg').css({
              'left':-_left*scale*1.5,
              'top':-_top*scale*1.5
            })
          }
        },
        mounted(){

        }
    }
</script>

<style scoped>
  body{
    position: relative;
  }
  .mask{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
}
  .box{
    width: 700px;
    height: 500px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: white;
    border: 3px solid #cccccc;
    border-radius: 5px;
    text-align: center;
  }
  .del{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 16px;
    height: 16px;
    background: url(../assets/img/del.png) no-repeat center;
    background-size: 16px;
    cursor: pointer;
  }
  .all_img{
    display: inline-block;
  }
  .small_img,.big_img{
    border: 1px solid #cccccc;
    display: inline-block;
    border-radius: 5px;
    vertical-align: top;
    margin-right: 10px;
    margin-top: 50px;
    position: relative;
    overflow: hidden;
  }
  .small_img img,.big_img img{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .big_img {
    opacity: 0;
  }
  .box p{
    width: 90%;
    border: 1px solid #cccccc;
    border-radius: 3px;
    position: absolute;
    bottom: 5px;
    left: 5%;
    line-height: 24px;
    font-size: 14px;
    padding: 5px;
    text-indent: 28px;
    text-align: left;
  }
  ._mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: rgba(255,255,0,.5);
    display: none;
  }
</style>
