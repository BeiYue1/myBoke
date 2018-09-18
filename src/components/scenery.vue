<template>
  <div class="phone wrap clearFlex w">
    <phone-nav></phone-nav>
    <!--内容显示部分-->
    <div v-show="isShow" class="phone_cont clearfix">
      <div ref="_mask" @click = 'showMask(index)' class="phone_div" v-for="(item , index) in cont">
        <img :src="item.urls" alt="">
      </div>
    </div>
    <!--加载部分-->
    <div v-show="!isShow" class="jz_phone"></div>
  </div>
</template>
<script>
  import phoneNav from '../components/phone_nav' ;
  export default {
    data(){
      let arr = [] ;
      for(let i = 0 ; i < this.$store.state.newsImg.length ; i++ ){
        if(this.$store.state.newsImg[i].title === '风景'){
          arr.push(this.$store.state.newsImg[i]) ;
        }
      }
      return {
        cont: arr ,
        isShow:this.$store.state.showImg
      }
    },
    methods:{
      showMask(index){
        $('body').css('overflow-y','hidden') ;

        let _w = $(this.$refs._mask[index]).outerWidth() ;
        let _h = $(this.$refs._mask[index]).outerHeight() ;
        let small_img = $('.small_img') ;
        let scale = _w / 50 ;

        small_img.css({
          'width':_w,
          'height':_h
        }) ;
        $('.big_img').css({
          'width':_w*1.5,
          'height':_h*1.5
        }) ;
        $('.small_img img').attr('src',this.cont[index].urls) ;
        $('.big_img img').attr('src',this.cont[index].urls).css({
          'width':_w*scale*1.5,
          'height':_h*scale*1.5
        }) ;
        $('.box p').html(this.cont[index].p) ;
        this.$store.state.showMask = true ;
      }
    },
    components:{
      phoneNav ,
    } ,
    mounted(){
      let _this = this ;
      $('body').css('overflow','auto') ;
      $('.phone_class span').click(function () {
        $(this).addClass('phone_active').siblings().removeClass('phone_active') ;
      }) ;
      _this.$store.state.showFont = false ;
      setTimeout(function () {
        _this.isShow = true ;
        init('.phone_cont','.phone_div') ;
      },500) ;

      $(function () {
        setTimeout(function () {
          init('.phone_cont','.phone_div') ;
          _this.$store.state.showFont = true ;
        },520)
      }) ;
      $(window).resize(function () {
        // setTimeout(function () {
          init('.phone_cont','.phone_div') ;
        // },1000) ;
      }) ;

    }

  }
</script>
<style scoped>

  @media all and (max-width: 2000px) {
    .w{
      width: 980px;
    }
  }
  @media all and (max-width: 1000px) {
    .w{
      width: 760px;
    }
  }
  @media all and (max-width: 780px){
    .w{
      width: 550px;
    }
  }
  .phone_cont{
    margin-top: 20px;
    position: relative;
    padding-bottom: 40px;
  }
  .phone_cont .phone_div{
    float: left;
    width: 200px ;
    padding: 10px;
    cursor: pointer;
    transition: transform 1s;
  }
  .phone_cont .phone_div:hover{
    transform: scale(1.05,1.05);
  }
  .phone_cont img{
    width: 100%;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    vertical-align: top;
  }
  .jz_phone{
    width: 100%;
    height: 500px;
    background: url(../assets/img/1.gif) no-repeat center;
    margin-top: 20px;
  }
</style>
