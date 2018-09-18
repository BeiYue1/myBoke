<template>
  <header>

    <img src="../assets/img/logo.png" alt=""><nav class="header_nav"> <a @click='fn(item.id)' v-for = "item , index in $store.state.list" :class = '{a_select:item.isSelect , dy:index === 2}' href="javaScript:;">{{item.l1}}<span>{{item.English}}</span></a>
  </nav>
  </header>
</template>
<script>
  export default {
    name: "" ,
    data() {

      return {
        index : 0
      }
    },
    mounted(){
      let _this = this ;
      $(window).resize(function(event) {
          if($(window).outerWidth() <= 770 ){
            $('header img').hide() ;

          } else{
            $('header img').show() ;

          }
      });

      $('.dy').mouseenter(function () {
        $('.dy em').slideDown() ;
        return false ;
      }).mouseleave(function () {
        $('.dy em').slideUp() ;
        return false ;
      }) ;

      let path = this.$router.history.current.path;

      for(let i = 0 ; i < this.$store.state.list.length ; i++ ){
          this.$store.state.list[i].isSelect = false ;
      }
      if(path === '/index'){this.index = 0 }
      if(path === '/about'){this.index = 1 }
      if(path === '/dynamic'){this.index = 2 }
      if(path === '/phone' || path === '/phone/scenery' || path === '/phone/figure'){this.index = 3 }
      if(path === '/essay'){this.index = 4 }
      this.$store.state.list[this.index].isSelect = true ;
    },


    methods:{
      fn(index){
        for(let i = 0 ; i < this.$store.state.list.length ; i++ ){
          this.$store.state.list[i].isSelect = false ;
        }
        this.$store.state.list[index].isSelect = true ;

        if(index === 0){
          this.$router.push('/index') ;
        }
        if(index === 1){
          this.$router.push('/about') ;
        }
        if(index === 2){
          this.$router.push('/dynamic') ;
        }
        if(index === 3){
          this.$router.push('/phone') ;
        }
        if(index === 4){
          this.$router.push('/essay') ;
        }

      }
    }
  }

</script>
<style>

header{

  height: 80px;
  display: flex ;
}

header img{
  height: 80px;
  float: left;
  flex: 1;
}
.header_nav{
  flex: 3 ;
  vertical-align: top;
  height: 80px;
  display: flex;
}
.header_nav a{
  flex: 1;
  height: 80px;
  vertical-align: middle;
  text-align: center;
  line-height: 80px;
  font-size: 16px;
  position: relative ;
  transition: 1s;
}

.header_nav a:hover span{
  color: orange ;
  opacity: 1 ;
  transform: translate(-50%, 20px) ;
}
.header_nav span{

  position: absolute ;
  top: 0;
  left: 50% ;
  transition: 1s ;
  opacity: 0;
  transform: translate(-50%, 0) ;
}
.header_nav a em{

  display: none;
  width: 100%;
  line-height: 30px;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

}
.header_nav a em strong{
  display: block;
}
.header_nav a em strong:hover{
  font-size: 18px;
  color: red;
}
.header_nav .dy{
  position: relative;
}
.header_nav .a_select{
  color: #e157a0;
}
.phone{
 width: 980px;
 font-size: 16px;
 border: 30px solid red;
 padding-left: 20px;
 padding-top: 20px;
  padding-right: 20px;
 padding-bottom: 20px;
 box-sizing: border-box ;
 background: linear-gradient(#fff9fd , white);
 border-image: url(../assets/img/border.png) 50 40 70 40 round;

}
</style>
