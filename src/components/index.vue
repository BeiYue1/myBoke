<template>
  <div class="cont">
    <nav class="nav">
      <a @click="changeIndex(index)" :class='{select:item.isShow}' v-for="(item,index) in data" :key="index" href="javaScript:;">{{ item.name }}</a>
    </nav>
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center"></el-amap>
    <div class="lb wrap w">
      <!--  -->
      <p v-for ='item in $store.state.p_list' :key="item">{{ item }}</p>
      <!-- 头像部分 -->
      <div><img src="../assets/img/1.png" alt=""></div>
    </div>

    <!-- 切换背景图部分 -->
    <div class="changeBg wrap w">
      <div class="w_title">
        <div class="bgTitle">个人博客背景图</div><div class="bgTitle"><span class="sys">上一首</span><span class="zt">暂停</span><span class="xys">下一首</span></div>
      </div>
      <div class="bgImg">
        <div :class="{bgSelect:index === $store.state.musicIndex }" v-for="(item ,index) in $store.state.bg"><img :src="item.bgImg" alt=""><span>{{item.title}}</span></div>
      </div>
    </div>

    <!-- 内容部分 -->
    <div class="content wrap w">
      <div class="content_left">
        <h2 class="_h"></h2>
        <div class="left_cont" v-for='(item , index) in $store.state.cont'>
          <h3> {{item.title}} </h3>
          <div class="left_conts">
            <img src="../../static/myImg/bg1.jpg" alt="" ><p class="left_p"> {{ fn(index) }}  </p>
            <a target="_blank" :href = "item.urls" >阅读全文>>></a>
          </div>

          <div class="left_bottom">
            <span><em class="time"></em><em>{{item.time}}</em></span><span>作者 : <em>{{item.author}}</em></span><span><em>{{item.contType}} : </em>[<em>{{item.contCont}}</em>]</span>
          </div>
        </div>



      </div>
      <div class="content_right">
        <!-- 日历 -->
        <h2 ></h2>
        <img class="date_img _date" src="../assets/img/date.png" alt="">

        <div id="date"></div>


        <!-- 天气 -->
        <h2 class="_h2">{{ $store.state.city_news.city_name }}: {{nowWeather.type}} {{ nowWeather.low }}- {{nowWeather.high}}  {{nowWeather.fengxiang}} </h2>
        <div class="gz weather">
          <div v-for = 'item in $store.state.weathers' :class="{ 'lzy':item.type === '雷阵雨' , 'zy':item.type === '阵雨' ,'qing':item.type === '晴' ,'dy':item.type === '多云','xiaoy':item.type==='小雨','zhongy':item.type==='中雨','dayu':item.type==='大雨','baoyu':item.type === '暴雨'}">
            <span>{{month}}月</span>
            <p>{{ item.date }}</p>
            <p>{{ item.low }} - {{item.high}}</p>
            <p>{{ item.type }}</p>
            <p>{{ item.fengxiang }}</p>
          </div>
        </div>

        <!-- 最新文章 -->
        <h2 class="_h2">我的文章</h2>
        <div class="gz">
          <ul class="gz_ul">
            <li v-for="(item , index) in $store.state.myWorks">{{ item.parent }}<span>  ({{getNum(item.childs)}})</span></li>
          </ul>
        </div>

        <!-- 最新文章 -->
        <h2 class="_h2">最新文章</h2>
        <div class="gz"></div>

        <!-- 点击排行 -->
        <h2 class="_h2">点击排行</h2>
        <div class="gz"></div>

        <!-- 链接 -->
        <h2 class="_h2">友情链接</h2>
        <div class="gz lj">
          <div class="lj_cont">
            <a target="_blank" href="#">个人博客</a>
            <a target="_blank" href="http://www.w3school.com.cn/jquery/">W3C Jquery</a>
            <a target="_blank" href="https://cn.vuejs.org/">Vue官网</a>
            <a target="_blank" href="https://blog.csdn.net/qq_37956730">我的CSDN博客</a>
          </div>
        </div>

        <!-- 关注我 -->
        <h2 class="_h2">关注我</h2>
        <div class="gz">
          <nav><a target="_blank" href="https://weibo.com/u/6191291775/home?wvr=5&sudaref=graph.qq.com"><img src="../assets/img/xl.png" alt=""></a><a target="_blank" href="https://user.qzone.qq.com/1182527245/infocenter"><img src="../assets/img/kj.png" alt=""></a><a href="javaScript:;" class="qq"><img src="../assets/img/qq.png" alt=""></a><a href="javaScript:;" class="_wx"><img src="../assets/img/wx.png" alt=""></a></nav>
          <div class="qq_wx">123</div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

  export default{
    created(){
      this.data = [{
          name:1,
          isShow:false,
        },{name:2,
        isShow:false,},{name:3,
        isShow:false,}]
    },
    data(){
      let self = this;
      self.$store.state.list[0].isSelect = true ;
      return {
          nowWeather: {
            'tx':'晴',
            'low':'25℃',
            'high':'25℃',
            'fengxiang':'无持续风向',
            'type':'晴'
          }  ,
          data:[],
          num:0 ,
          month:0,
          positions: {
          lng: '',
          lat: '',
          address: '',
          loaded: false
          },
          center: [121.59996, 31.197646],
          plugin: [{
          pName: 'Geolocation',
          events: {
           init(o) {
             // o 是高德地图定位插件实例

             o.getCurrentPosition((status, result) => {
               if (result && result.position) {
                 self.str = result.formattedAddress;
                 self.positions.address = self.str.substring(self.str.indexOf('市') + 1);
                 self.positions.lng = result.position.lng;
                 self.positions.lat = result.position.lat;
                 self.positions.loaded = true;
                 self.$nextTick();
                 self.$store.state.city_news.city_name = result.addressComponent.city;

                 (function(){
                    $.ajax({
                      url: 'http://wthrcdn.etouch.cn/weather_mini?city='+(result.addressComponent.city),

                    })
                    .done(function(data) {

                      data = $.parseJSON(data).data.forecast;

                      self.$store.state.weathers = data ;
                      console.log(data) ;

                      for(let i = 0 ; i < data.length ; i++){
                        data[i].high = data[i].high.substring(3) ;
                        data[i].low = data[i].low.substring(3) ;
                      }
                      self.nowWeather = data[0] ;
                    })
                 })() ;
               }
             });
           }
          }
       }]
      }
    },
    mounted(){

      $('body').css('overflow','auto') ;
      //日历
      $('#date').kalendar({
        'width':280
      })  ;
      //
      $('.lb').snowfall('clear').snowfall({
        image: "./static/myImg/huaban.png",
        flakeCount:15,
        minSize: 10,
        maxSize: 20
      }) ;


      //音乐播放器
      // audio
      let audio = document.getElementById('audio') ;

      let _this = this ;
      let onOff = true ;
      // audio.play() ;

      let num = 0 ;
      $('.zt').click(function () {
        if(onOff){
        //  暂停
          audio.pause() ;
          $(this).addClass('_play') ;

        } else{
        //  播放
          audio.play() ;
          $(this).removeClass('_play') ;
        }
        onOff = !onOff ;
      }) ;

      $('.xys').click(function () {
        num++ ;
        num %= 5 ;
        _this.$store.state.musicIndex = num ;
        changeBg(num) ;
        $('.bgImg div').eq(num).addClass('bgSelect').siblings().removeClass('bgSelect') ;
      }) ;

      $('.sys').click(function () {
        num-- ;
        if( num <= -1){
          num = 4 ;
        }
        _this.$store.state.musicIndex = num ;
        changeBg(num) ;
        $('.bgImg div').eq(num).addClass('bgSelect').siblings().removeClass('bgSelect') ;
      }) ;
      function changeBg(num) {
        $('body').css('backgroundImage','url('+ _this.$store.state.bg[num].bgImg +')') ;
        audio.pause() ;
        audio.src = _this.$store.state.bg[num].bgMusic;
        audio.play() ;
      }
      // 点击

      $('._h2').click(function(event) {
        let index = $(this).index('._h2') ;
        if($('.gz').eq(index).css('display') === 'block'){
          $(this).removeClass('addClick') ;
          $('.gz').eq(index).slideUp();
        } else{
          $(this).addClass('addClick') ;
          $('.gz').eq(index).slideDown();
        }
      });

      $('._date').click(function () {
        if($('#date').css('display') === 'block'){
          $('#date').slideUp()  ;

        }else{
          $('#date').slideDown()  ;

        }
      }) ;
      // 切换微信和qq图
      $('.qq').click(function(event) {

          $('.qq_wx').removeClass('wx') ;
      });
      $('._wx').click(function(event) {
        $('.qq_wx').addClass('wx') ;
      });

      // 月份
      let d = new Date() ;
      // 月
      let m = d.getMonth() + 1 ;
      // 年
      let y = d.getFullYear() ;

      _this.month = m ;

      // 当前时间
      function nowTime(){
        let data = new Date() ;
        let y = data.getFullYear() ;
        let m = add0(data.getMonth() + 1) ;
        let d = add0(data.getDate()) ;
        let h = add0(data.getHours()) ;
        let mm = add0(data.getMinutes()) ;
        let s = add0(data.getSeconds()) ;
        let w = data.getDay() ;

        w === 6 ? w = '六' :
        w === 1 ? w = '一' :
        w === 2 ? w = '二' :
        w === 3 ? w = '三' :
        w === 4 ? w = '四' :
        w === 5 ? w = '五' :
        w = '日' ;

        $('.content_right h2').eq(0).html(`${y}年${m}月${d}日(周${w}) ${h}:${mm}:${s}`) ;
      }
      function add0(num){
        if(num < 10){
          return '0' + num ;
        }else{
          return '' + num ;
        }
      }
      nowTime() ;
      setInterval(function(){
        nowTime() ;
      },1000) ;

      $('.bgImg div').click(function(event) {
        num = _this.$store.state.musicIndex = $(this).index() ;
        changeBg(num) ;
        $(this).addClass('bgSelect').siblings().removeClass('bgSelect') ;
      }).mouseenter(function(event) {
        $('.bgImg span').eq($(this).index()).slideDown().css('line-height','20px');
      }).mouseleave(function(event) {
        $('.bgImg span').eq($(this).index()).slideUp();
      });
      $('.lb p').eq(0).animate({
        'margin-left': '1.703704rem',
        'opacity' : 1
      },{
        duration:1000 ,
        complete:function(){
          $('.lb p').eq(1).animate({
            'margin-left': '1.903704rem',
            'opacity' : 1
          },{
            duration:1000 ,
            complete:function(){
              $('.lb p').eq(2).animate({
                'margin-left': '2.103704rem',
                'opacity' : 1
              },{
                duration:1000 ,
              })
            }
          })
        }
      });

    },
    //方法
    methods:{
      fn(index){
        this.$store.commit('getTtile' , index) ;
        return this.$store.state.cont[index].cont ;
      } ,
      getNum(parent) {
        return parent.length ;
      },
      changeIndex(index){
        alert(1);
        this.data[index].isShow = true;
      }
    } ,
    //计算属性
    computed:{

    }


  }


</script>
<style>
.nav{
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index: 999;
}
.nav a{
  flex: 1;
  background: orange;
  margin: 0 10px;
  line-height: 100px;
  text-align: center;
}
.nav .select{
  background: orangered;
}
.amap-demo{
  display: none ;
}

.lb{
    width: 980px;
    background: url(../assets/img/sun.jpg) no-repeat;
    background-size: 100% 265px;
    position: relative ;
}
@media all and (max-width: 2000px) {
  .w{
    width: 980px;
  }
  ._h::after{
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 440px;
    height: 10px;
    margin-left: 180px;
    margin-top: 20px;
    background: url(../assets/img/h_bg.jpg) repeat-x;
  }
  .left_p{
    width: 350px;
  }
}
@media all and (max-width: 1000px) {
  .w{
    width: 760px;
  }
  ._h::after{
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 260px;
    height: 10px;
    margin-left: 180px;
    margin-top: 20px;
    background: url(../assets/img/h_bg.jpg) repeat-x;
  }
  .left_p{
    width:190px;
  }
}
@media all and (max-width: 780px){
  .w{
    width: 550px;
  }
  ._h::after{
    content: '';
    vertical-align: middle;
    display: inline-block;
    width: 300px;
    height: 10px;
    margin-left: 180px;
    margin-top: 20px;
    background: url(../assets/img/h_bg.jpg) repeat-x;
  }
}
.lb p{
  font-size: 14px;
  color: black ;
  text-shadow: 3px 3px 1px white ;
  line-height: 30px;
  opacity: 0;
}
.lb p:first-of-type{
  padding-top: 65px;
}
.lb p:last-of-type{
  padding-bottom: 65px;
}
.lb div{
  position: absolute;
  top: 50%;
  transform: translate(0, -50%) ;
  right: 10% ;
  cursor: pointer;
}
.lb div img{
  width: 130px;
  height: 130px;
  box-sizing: border-box;
  border-radius: 50%;
  transition: transform 2s ;
  border: 0.059259rem solid white;
}
.lb div img:hover{
  transform: rotateY(360deg) ;
}
.changeBg{
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: #f1f0ee;
  margin-top: 15px;
}
.changeBg .w_title{
  height: 25px;
  margin-bottom: 20px;
}
.changeBg .bgTitle{
  font-size: 14px;
  background-color: rgba(0, 0, 0, 1) ;
  width: 180px;
  line-height: 25px;
  text-align: center;
  vertical-align: top;
  color: white;
  box-shadow: 5px 0 5px #cccccc;
  display: inline-block;
}
.changeBg .bgTitle:first-of-type{
  margin-left: 15px;
  margin-right: 20px;
}
.changeBg .bgTitle span{
  display: inline-block;
  font-size: 0;
  width: 23px;
  height: 23px;
  vertical-align: top;
  margin: 1px 10px 0 10px;
  cursor: pointer;
}
.changeBg .bgTitle span:first-of-type{
  background: url(../assets/img/prev.png) no-repeat;
  background-size: 100% 100%;
}
.changeBg .bgTitle .zt{
  background: url(../assets/img/play.png) no-repeat;
  background-size: 100% 100%;
}
.changeBg .bgTitle span:last-of-type{
  background: url(../assets/img/next.png) no-repeat;
  background-size: 100% 100%;
}
.changeBg .bgTitle  ._play{
  background: url(../assets/img/pause.png) no-repeat;
  background-size: 100% 100%;
}
.changeBg .bgImg{
  display: flex ;
  justify-content: space-evenly;
}
.changeBg .bgImg div{
  flex: 1 ;
  margin: 0 15px;
  height: 88px;
  cursor: pointer;
  border: 1px solid #cccccc;
  position: relative ;
  transition: 1s;
}
.changeBg .bgImg div:hover{
  box-shadow: 0 0 30px red;
}
.changeBg .bgSelect{
  box-shadow: 0 0 30px red;
}
.changeBg .bgImg div img{
  width: 100%;
  height: 88px;

}
.changeBg .bgImg div span{
  position: absolute ;
  bottom: 0;
  left: 0;
  width: 100% ;
  display: none;
  font-size:12px;
  color: white ;
  text-align: center ;
  background-color: rgba(0, 0, 0, 0.3) ;
}
.content{
  margin-top: 15px;
  display: flex ;
}
.content_left{
  background-color: white ;
  flex: 2.5 ;
  max-height: 1400px;
}
.content_left h2{
  display: inline-block;
  vertical-align: top ;
  font-size: 16px;
  width: 220px;
  height: 50px;
  padding-left: 35px;
  background: url(../assets/img/h_logo.png) no-repeat center;
  margin-bottom: 30px;
  background-size: 220px 50px;
}


.content_left .left_cont{
  width: 85%;
  margin-left: 5%;
  background-color: rgba(240, 240, 240, 0.5);
  border-radius: 5px;
  margin-bottom: 20px;
}
.content_left .left_cont:first-of-type{
  margin-top: -20px;
}
.content_left .left_cont h3{
  font-size: 18px;
  line-height: 36px;
  padding-left: 20px;
}
.content_left .left_cont .left_conts{
  padding-left: 20px;
  position: relative ;
}
.content_left .left_cont .left_conts img{
  width: 175px;
  height: 116px;
  padding: 5px;
  border: 1px solid #ccc ;
  vertical-align: top;
  border-radius: 5px;
}
.content_left .left_cont .left_conts p{
  display: inline-block ;

  font-size: 14px;
  line-height: 20px;
  margin-left: 20px;
}
.content_left .left_cont .left_conts a{
  position: absolute ;
  font-size:12px;
  background-color: #fd8a61;
  padding: 10px;
  top: 90px;
  right: 40px;
  color: white ;
  border-radius: 5px;
}
.content_left .left_cont .left_bottom{
  line-height: 25px;
  background-color: rgba(0, 0, 0, 0.8) ;
  font-size:12px;
  color: white ;
  margin-top: 10px;
  padding-left: 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.content_left .left_cont .left_bottom span{
  margin-right: 20px;
}
.content_left .left_cont .left_bottom .time{
  display: inline-block ;
  width: 16px;
  height: 16px;
  background: url(../assets/img/time.png) no-repeat;
  background-size: 16px;
  vertical-align: top ;
  margin-top: 5px;
  margin-right: 5px;
}




.content_right{
  flex: 1 ;
  position: relative ;
  font-size: 0 ;
}
@media all and (max-width: 780px) {
  .content_right{
    display: none ;
  }
}
.content_right h2{
  line-height: 30px;
  font-size:12px;
  font-weight: normal ;
  color: white ;
  padding-left: 20px;
  margin-top: 20px;
  background-color:  rgba(0, 0, 0, 0.4) ;
  overflow: hidden ;
  text-overflow: ellipsis ;
  white-space:nowrap ;
}
.date_img{
  position: absolute ;
  top: 0;
  right:  5px ;
  width: 30px;
  height: 27px;
  cursor: pointer ;
}
#date{
  display: none;
}
.content_right ._h2::after{
  content: '' ;
  width: 20px;
  height: 20px;
  background: url(../assets/img/toTop.png) no-repeat;
  background-size: 20px;
  display: inline-block ;
  vertical-align: middle ;
  margin-left: 5px;
  cursor: pointer;
}
.content_right h2:first-of-type{
  margin-top: 0 ;
}
.content_right h2:first-of-type::after{
  width: 0;
  height: 0;
  content: '' ;
  display: inline-block ;
}
.content_right .addClick::after{
  content: '' ;
  width: 20px;
  height: 20px;
  background: url(../assets/img/toBottom.png) no-repeat;
  background-size: 20px;
  display: inline-block ;
  vertical-align: middle ;
  margin-left: 5px;
  cursor: pointer;
}
.content_right .gz{
  background-color: rgba(246, 246, 246, 0.3) ;
  padding-bottom: 20px;
  display: none;
}

.content_right .gz nav{
  padding-left: 20px;
  margin-bottom: 10px;
  padding-top: 10px;
}
.content_right .gz nav a{
  font-size:12px;
  width: 24px;
  height: 24px;
  display: inline-block ;
  margin-right: 5px;

}
.content_right .gz .qq_wx{
  display: block ;
  margin-left: 20px;
  width: 200px;
  height: 200px;
  background: url(../assets/img/qqerweima.png) no-repeat;
  background-size: 100% 100%;
}
.content_right .gz .wx{
  background: url(../assets/img/wxerweima.png) no-repeat;
  background-size: 100% 100%;
}
.content_right .gz nav img{
  vertical-align: top ;
  width: 24px;
  height: 24px;
  margin: 0 ;

}

.content_right .gz .gz_ul{
  font-size: 14px;
  color: black;
  cursor: pointer;

}
.content_right .gz .gz_ul li{
  line-height: 28px;
  text-indent: 20px;
}
.content_right .gz .gz_ul li:hover{
  background-color: pink;
  color: orangered;
}
.content_right .lj{
  padding: 20px 0 ;
}
.content_right .lj .lj_cont{

  height: 90px ;
  background-color: orange ;
  border-radius: 50% ;
}
.lj_cont a{
  display: block;
  font-size:12px;
  text-align: center;
  line-height: 22px;
  transition: 0.5s ;
}
.lj_cont a:hover{
  font-size: 14px;
  color: pink ;
}
.content_right .weather{
  background: linear-gradient(rgba(24, 50, 89, 1) , rgba(64, 117, 162, 1));
  padding-bottom: 0;
  color: white ;

}
.content_right .weather div{
  font-size: 14px;
  height: 100px;
  position: relative ;

  border-bottom: 2px solid rgba(204, 204, 204, 0.5) ;
}
/* 天气 */
.content_right .weather .lzy{
  background: url(../assets/img/lzy.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .zy{
  background: url(../assets/img/zyu.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .dy{
  background: url(../assets/img/duoyun.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .qing{
  background: url(../assets/img/tqing.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .xue{
  background: url(../assets/img/xue.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .ying{
  background: url(../assets/img/ying.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .xiaoy{
  background: url(../assets/img/xy.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .zhongy{
  background: url(../assets/img/zy.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}
.content_right .weather .dayu{
  background: url(../assets/img/dy.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}

.content_right .weather .baoyu{
  background: url(../assets/img/dy.png) no-repeat;
  background-position: 182px center;
  background-size: 64px;
}


.content_right .weather div:hover{
  background-color: orange ;
}
.content_right .weather div:last-of-type{
  border-bottom-color: transparent ;
}
.content_right .weather div p{
  text-indent: 40px;

  font-size: 14px;
  line-height: 25px;
}
.content_right .weather div span{
  width: 40px;
  position: absolute;
  font-size: 30px;
  top: 0;
  left: 0;
  text-align: center;
  padding-top: 5px;
}

</style>

