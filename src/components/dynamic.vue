<template>
	<div class="phone wrap w">

    <!--大图的遮罩层-->
    <div class="bigWrap" v-show="showTake">
      <!--轮播图部分-->
      <div class="bigWrap_left">
        <!--图片部分-->
        <div class="bigWrap_take">
          <img class="take_img" :src="cont.imgs[0].url" alt="">
          <span class="take_next"></span><span class="take_prev"></span>
        </div>

        <!--小图片部分-->
        <div class="bigWrap_smallImg wrap">
          <img @click = 'tabImg(index)' :class="{imgSelect:index === 0}" v-for="(i,index) in cont.imgs" :src="i.url" alt="">
        </div>
      </div><div class="bigWrap_right">
      <!--删除按钮-->
        <div @click = 'delTake' class="bigWrap_right_del"></div>
        <img src="../assets/img/1.png" alt=""><div>
        <p>Diana丶北月</p>
        <p>{{cont.time}}</p>
    </div>
        <p class="bigWrap_right_p">{{cont.cont}}</p>

    </div>
    </div>


    <div class="dynamic">
      <div class="dy_right">
        <img src="../assets/img/1.png" alt="">
        <p>Diana丶北月</p>
        <p><span>{{getLen()}}</span>条说说</p>
      </div>

      <!--发表内容部分-->
      <textarea class="dy_text"></textarea>
      <div class="dy_div">
        <input type="file" multiple accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
      </div>
      <div class="dy_font">
        <i class="smaile"></i><span @click = 'pushDynamicNews' class="publish">发表</span>
      </div>

      <!--内容部分-->
      <div class="dy_cont">

        <div class="dy_content" v-for="(item , index) in $store.state.dynamicNews">

          <img class="dy_tx" src="../assets/img/1.png" alt=""><div class="dy_nr">
            <div class="dy_three"></div>
            <!--动态内容区域-->
            <div class="dy_ss">
              <span @click = 'delDynamicNews(index)' class="dy_content_span"></span>
              <p><a href="javaScript:;">Diana丶北月</a>{{item.cont}}</p>
              <div class="dy_img">
                <img @click = 'showBigImg(index)' v-for="(img_item,_index) in item.imgs" :src="img_item.url" alt="" title="查看大图">
              </div>
            </div>
            <!--发布时间区域-->
            <div class="dy_time"><span>{{item.time}}</span></div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
<script>
	export default {
	  data(){
	    return {
	      showTake:false ,
        cont:{
	        time: '' ,
          cont:'',
          imgs:[{
	          url:''
          }] ,
        } ,
        _index: 0 ,
        urls:[] ,
      }
    },
	  mounted(){
	    let _this = this ;
	    $('body').css('overflow','auto') ;
	    $('.take_next').click(function () {
        _this._index++ ;
        _this._index %= _this.cont.imgs.length ;
        changeBg(_this._index) ;
      }) ;
      $('.take_prev').click(function () {
        _this._index -- ;
        if (_this._index < 0){
          _this._index = _this.cont.imgs.length - 1 ;
        }
        changeBg(_this._index) ;
      }) ;

      // let urls = [] ;

      $('.dy_div input').change(function () {
        let f  = this.files ;
        for (let  i = 0 ; i < f.length ; i++ ){
          let l = new FileReader()  ;
          l.readAsDataURL(f[i]) ;
          l.onload = function () {
            _this.urls.push({
              url:l.result ,
            }) ;
          }
        }
      }) ;

      function changeBg(index) {
        let src = _this.cont.imgs[index].url ;
        $('.take_img').attr('src' , src) ;
        $('.bigWrap_smallImg img').eq(index).addClass('imgSelect').siblings().removeClass('imgSelect') ;
      }
    },
    methods:{
	    getLen(){
	      return this.$store.state.dynamicNews.length ;
      } ,
      showBigImg(index){
	      this.showTake = true ;
        this.cont = this.$store.state.dynamicNews[index] ;
        this._index = 0 ;
        $('body').css('overflow','hidden') ;
      } ,
      delTake(){
        this.showTake = false ;
        $('body').css('overflow','auto') ;
      } ,
      tabImg(index){
	      let src = this.cont.imgs[index].url ;
	      $('.take_img').attr('src' , src) ;
        $('.bigWrap_smallImg img').eq(index).addClass('imgSelect').siblings().removeClass('imgSelect') ;
      } ,
      pushDynamicNews(){
	      let text = $('.dy_text') ;
	      let cont = text.val() ;
	      let data = new Date() ;
	      let y = data.getFullYear() ;
	      let m = add0(data.getMonth() + 1) ;
	      let d = add0(data.getDate() );
	      let h = add0(data.getHours() );
	      let mm = add0(data.getMinutes() );
	      let s = add0(data.getSeconds() );

	      function add0(num) {
          if(num < 10){
            return '0' + num ;
          }else{
            return '' + num ;
          }
        }

        let time = `${y}-${m}-${d} ${h}:${mm}:${s}` ;

	      for(let i = 0 ; i < cont.length ; i++){
	        if(cont[i] !== ' '){
            this.$store.state.dynamicNews.unshift({
              cont,
              time ,
              imgs:this.urls ,
            }) ;
            text.val('') ;
            this.urls = [] ;
            return ;
          }
        }
        text.val('') ;
        this.urls = [] ;
      } ,
      delDynamicNews(index){
        this.$store.state.dynamicNews.splice(index , 1) ;
      }
    }
  }
</script>
<style>
  @media all and (max-width: 2000px) {
    .w{
      width: 980px;
    }
    .dy_content{
      width: 664px;
    }
  }
  @media all and (max-width: 1000px) {
    .w{
      width: 760px;
    }
    .dy_content{
      width: 488px;
    }
  }
  @media all and (max-width: 780px){
    .w{
      width: 550px;
    }
    .dy_right{
      display: none;
    }
    .dy_content{
      width: 400px;
    }
    .dynamic{
      width: 550px;
    }
  }
  .dynamic{
    position: relative;
  }
  .dy_right{
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    text-align: center;
  }
  .dy_right img{
    width: 100px;
    height: 100px;
  }
  .dy_right P{
    line-height: 30px;
    font-family: '微软雅黑 Light';
  }
  .dy_right p span{
    font-size: 20px;
  }
  .dy_text{
    width: 70%;
    height: 80px;
    padding-left: 20px;
    padding-right: 20px;
    line-height: 20px;
  }
  .dy_div{
    display: inline-block;
    width: 10% ;
    height: 80px;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    background:url(../assets/img/phone.png) no-repeat center #eeeeee;
    background-size: 48px 48px;
    margin-left: -9px;
    cursor: pointer;
    position: relative;
  }
  .dy_div input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    opacity: 0;
    cursor: pointer;
  }
  .dy_font{
    width: 79.5%;
    height: 30px;
    border: 1px solid #cccccc;
    margin-top: -1px;
    padding-right: 1px;
    margin-bottom: 20px;
  }
  .smaile{
    width: 28px;
    height: 28px;
    display: inline-block;
    vertical-align: top;
    margin-top: 1px;
    margin-left: 20px;
    background:url(../assets/img/smaile.png) no-repeat center;
    background-size: 100%;
    cursor: pointer;
  }
  .smaile:hover{
    background:url(../assets/img/_smaile.png) no-repeat center;
    background-size: 100%;
  }
  .publish{
    display: inline-block;
    width: 12.3%;
    height: 28px;
    background-color: blue;
    color: white;
    border-radius: 5px;
    text-align: center;
    line-height: 28px;
    float: right;
    margin-top: 1px;
    cursor: pointer;
  }
  .dy_content{
    background-color: #00F7DE;
    padding:20px;
    position: relative;
  }
  .dy_content_span{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 18px;
    height: 18px;
    background: url(../assets/img/del.png) no-repeat;
    background-size: 18px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.3;
    transition: opacity 1s;
  }
  .dy_content_span:hover{
    opacity: 1;
  }
  .dy_content .dy_tx{
    width: 50px;
    height: 50px;
    border: 1px solid #cccccc;
    border-radius: 5px;
  }
  .dy_content .dy_nr{
    display: inline-block;
    border: 1px solid #cccccc;
    border-radius: 5px;
    width: 80%;
    margin-left: 10px;
    position: relative;
  }
  .dy_three{
    position: absolute;
    width: 7px;
    height: 7px;
    border: 1px solid #cccccc;
    border-right-color: transparent;
    border-bottom-color: transparent;
    top: 10px;
    left: -4.5px;
    background-color: #00F7DE;
    transform: rotateZ(-45deg);
  }
  .dy_ss{
    padding: 10px;
    font-size: 14px;
    position: relative;
    font-family: '微软雅黑 Light';
  }

  .dy_ss a{
    font-size: 14px;
    color: #007DDB;
    margin-right: 10px;
  }
  .dy_ss a:hover{
    text-decoration: underline;

  }
  .dy_ss p{
    line-height: 20px;
    padding-right: 20px;
  }
  .dy_img{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    margin-top: 10px;
  }
  .dy_img img{
    width: 180px;
    height: 200px;
    margin:10px;
    cursor: pointer;
  }
  .dy_time{
    padding-left: 20px;
    line-height: 28px;
    margin-top: -10px;
    padding-bottom: 10px;
  }
  .bigWrap{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #171717;
    z-index: 999;
    padding-top: 20px;
  }
  .bigWrap_left{
    text-align: center;
    width: 828px;
    padding-top: 50px;
    height: 570px;
    display: inline-block;
    background-color: black;
    margin-left: 130px;
    vertical-align: top;
  }
  .bigWrap_right{
    display: inline-block;
    width: 300px;
    height: 600px;
    background-color: white;
    vertical-align: top;
    padding-top: 20px;
    position: relative;
  }
  .bigWrap_right img{
    width: 64px;
    height: 64px;
    vertical-align: top;
    margin-left: 20px;
    margin-right: 20px;
  }
  .bigWrap_right div{
    display: inline-block;
    vertical-align: top;
    padding-top: 10px;
  }
  .bigWrap_right div p{
    font-family: '微软雅黑 Light';
    line-height: 25px;
    color: #8c8c8c;
    font-size: 14px;
  }
  .bigWrap_right div p:first-of-type{
    color: #246ab0;
    font-size: 16px;
  }
  .bigWrap_right div p:first-of-type:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  .bigWrap_right_p{
    font-family: '微软雅黑 Light';
    line-height: 20px;
    padding-left: 20px;
    margin-top: 20px;
    font-size: 14px;
    padding-bottom: 20px;
    box-shadow: 0 5px 5px #cccccc;
  }
  .bigWrap_right .bigWrap_right_del{
    position: absolute;
    width: 32px;
    height: 32px;
    background:url(../assets/img/take_del.png) no-repeat center;
    background-size: 32px 32px;
    top: 0;
    right: 0;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
  }
  .bigWrap_right .bigWrap_right_del:hover{
    background:url(../assets/img/take_dels.png) no-repeat center;
    background-size: 32px 32px;
  }
  .bigWrap_take{
    width: 810px;
    height: 450px;
    background-color: white;
    margin-left: 9px;
    position: relative;
  }
  .bigWrap_take span{
    width: 64px;
    height: 64px;
    cursor: pointer;
    position: absolute;
    top: 50% ;
    transform: translateY(-50%);
    z-index: 999;
    opacity: 0.3;
    transition: opacity 1s;
  }
  .bigWrap_take span:hover{
    opacity: 1;
  }
  .bigWrap_take span:nth-of-type(1){
    left: 0;
    background: url(../assets/img/takeNext.png) no-repeat center;
    background-size: 64px 64px;
  }
  .bigWrap_take span:nth-of-type(2){
    right: 0;
    background: url(../assets/img/takePrev.png) no-repeat center;
    background-size: 64px 64px;
  }
  .bigWrap_take img{
    position: absolute;
    width: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .bigWrap_smallImg{
    display: inline-block;
    margin-top: 30px;
  }
  .bigWrap_smallImg img{
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    margin: 0 3px;
    cursor: pointer;
  }
  .bigWrap_smallImg .imgSelect{
    border: 5px solid #73b4e0;
  }
</style>
