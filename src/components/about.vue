<template>
	<div class="about_cont wrap">
		<!-- 第一部分 -->
		<nav class="about_nav">
			<a href="javaScript:;">关于</a>
			<a href="javaScript:;">作品</a>
			<a href="javaScript:;"><img src="../assets/img/1.png" alt=""></a>
			<a href="javaScript:;">能力</a>
			<a href="javaScript:;">联系我</a>
		</nav>
		<div class="about_conts">
			<div class="all_cont first_cont">
				<p>Hi,我是北月</p>
				<p>欢迎光临我的博客！</p>
				<p>想了解更多，往下滚动哦 ^_^</p>
				<span class="toBottom"></span>
			</div>
			<!-- 第二部分 -->
			<div class="all_cont two_cont">
				<p>我是一名前端攻城狮</p>
				<p>目前处于离职状态</p>
				<p>以前是理科生,专业是材料成型及控制工程</p>
				<span class="toBottom"></span>
			</div>
			<!-- 第三部分 -->
			<div class="all_cont three_cont">
				<div class="three_div">
					<div class="cont_div1">
              <div>
                <h3>原生js高仿上海点硕官网</h3>
                <p>闲着无聊,发现点硕的官网挺好玩的,于是用原生js仿制了一次</p>
                <p>源码下载:<a target="_blank" href="https://github.com/BeiYue1/shanghai">github.com/BeiYue1/shanghai</a></p>
              </div>
          </div>
					<div class="cont_div1">
            <div>
              <h3>Vue实现点餐功能</h3>
              <p>点餐系统的一部分,有购物车功能,商家、产品详情等</p>
              <p>源码下载:<a target="_blank" href="https://github.com/BeiYue1/shanghai">github.com/BeiYue1/-</a></p>
            </div>
          </div>
					<div class="cont_div1">
            <div>
              <h3>个人博客官网设计</h3>
              <p>当然啦,就是你现在看见的博客啦,可惜是用的虚拟服务器,不能使用数据库,所以只能用纯前端来开发啦~~</p>
            </div>
          </div>
				</div>
				<span class="toBottom"></span>
			</div>
			<!-- 第四部分 -->
			<div class="all_cont four_cont">
				<div class="four_div">
					<h3>相关技能</h3>
					<p>熟练掌握语义化的 HTML 和具有兼容性的 CSS 模式,熟练手写符合 W3C 标准的结构和代码</p>
					<p>对 HTML5 和 CSS3 有一定了解。</p>
					<p>熟悉less等前端工具</p>
					<p>能够灵活运用 jQuery，实现日常需要的交互效果</p>
					<p>了解 Ajax 工作原理和实现方法</p>
					<p>对前端canvas,vue等有一定的了解</p>
					<p>喜欢接触新事物,新知识,有一定的自学能力。</p>
				</div>
				<span class="toBottom"></span>
			</div>

			<!-- 第五部分 -->
			<div class="all_cont five_cont">
				<div class="five_div">
					<h3>联系本人</h3>
					<p>邮 箱 : 1182527245@qq.com/aaaa1182527245@163.com</p>
					<p>电 话 : 15216690497</p>
					<p>扣 扣 : 1182527245</p>
					<p>微 信 : zhoux_yi</p>
				</div>
				<span class="toTop"></span>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		data(){

			return {
				index: 0 ,
			}
		},
		mounted(){

      let index = this.index ;

			let timer = null ;


			// 是否滚动
			let isScroll = true ;

			function init(){
				$('.about_nav').css('top','0.296296rem').css('backgroundColor','transparent') ;
				$('.about_conts').css('transform','translateY(0)') ;
				$('.about_nav a').removeClass('select') ;
				index = 0 ;
				isScroll = true ;
			}
			init() ;

			$('body').css('overflow','hidden') ;
			function setH(){
				let h = $(window).height() ;
				let minH = $('header').height() ;
				$('.about_cont').css('height',(h - minH)*0.9) ;
			}
			$(function(){
				setH() ;
				init() ;
			}) ;
			$(window).on("resize", function(){
				setH() ;
				init() ;
			}) ;

			// 下

			// console.log(_h) ;
			$('.toBottom').click(function(event) {
				let _h = $('.all_cont').height()/2 +  $('.all_cont').height() ;
				index = $(this).index('.toBottom') ;
				$('.about_nav').css('top',0).css('backgroundColor','black') ;
				if(index > 1){
					index += 1 ;
				}
				$('.about_nav a').eq(index).addClass('select').siblings().removeClass('select') ;

				if(index > 1){
					index -= 1 ;
				}
				$('.about_conts').css('transform','translateY(-'+ _h*(index + 1) +'px)') ;
			});
			// 上
			$('.toTop').click(function(event) {
				init();
			});

			// 点击
			$('.about_nav a').click(function(event) {
				let _h = $('.all_cont').height()/2 +  $('.all_cont').height() ;
				index = $(this).index('.about_nav a') ;
				$('.about_nav').css('top',0).css('backgroundColor','black') ;
				if( index === 2 ){
					return ;
				}
				$(this).addClass('select').siblings().removeClass('select') ;
				if(index > 1){
					index -= 1 ;
				}
				$('.about_conts').css('transform','translateY(-'+ _h*(index + 1) +'px)') ;
			});

			// 鼠标滚动
			$(window).mousewheel(function(event){

				// setTimeout(function(){
					let _h = $('.all_cont').height()/2 +  $('.all_cont').height() ;
					if(isScroll){
						isScroll = false ;

						$('.about_nav').css('top',0).css('backgroundColor','black') ;
						if(event.deltaY === 1){
						// 向上
							if(index <= 0){
								$('.about_nav').css('top','0.296296rem').css('backgroundColor','transparent') ;
								$('.about_conts').css('transform','translateY(0)') ;
								$('.about_nav a').removeClass('select') ;
								index = 0 ;
								isScroll = true ;
								return ;
							}
							index -= 1 ;

							if(index < 2){
								index -= 1 ;
							}
							$('.about_nav a').eq(index + 1).addClass('select').siblings().removeClass('select') ;
							if(index < 2){
								index += 1 ;
							}
							$('.about_conts').css('transform','translateY(-'+ _h*(index + 1) +'px)') ;

							timer = setTimeout(function(){
								isScroll = true ;

							},1000)

						}else{
							// 向下
							index += 1;

							if(index > 4){
								index = 4 ;
								isScroll = true ;
								return ;
							}
							if(index > 2){
								index += 1 ;
							}
							$('.about_nav a').eq(index - 1).addClass('select').siblings().removeClass('select') ;
							if(index > 2){
								index -= 1 ;
							}
							$('.about_conts').css('transform','translateY(-'+ _h*(index) +'px)') ;

							timer = setTimeout(function(){
								isScroll = true ;
							},1000)

						}
					}
			})
		}
	}
</script>
<style>
.about_cont{
	width: 72%;
	font-size: 16px;
	border: 30px solid red;
	padding-bottom: 30px;
	box-sizing: border-box ;
	height: 100%;
	background: linear-gradient(#fff9fd , white);
	border-image: url(../assets/img/border.png) 50 40 70 40 round;
	overflow: hidden ;
	position: relative ;
  	min-width: 983px;
}
.about_conts{
	transition: 1s;
}
.all_cont{
	width: 100% ;
	height: 475px ;
	padding-top: 168px ;
	padding-bottom: 68px ;
}
.first_cont{
	background: url(../assets/img/home-bg.jpg);
	background-size: 100% 100% ;
}
.two_cont{
	background:linear-gradient(orange,pink);
}

.three_cont{
	background:linear-gradient(pink , red);
}
.four_cont{
	background:linear-gradient(red , rgba(255,0,255,.5));
}
.five_cont{
	background:linear-gradient(rgba(255,0,255,.5),orange);
}
.three_div{
	height: 180px;
	display: flex ;
	justify-content: space-evenly ;
}
.four_div,.five_div{
	height: 180px;
	position: relative ;
}
.four_div h3,.five_div h3{
	font-size: 30px ;
	position: absolute ;
	top: -40px;
	left:  20px;
	color: white ;
}
.four_div p,.five_div p{
	color: white ;
	font-size: 20px;
	padding-left: 20px;
	line-height: 30px ;
}
.three_div .cont_div1{
	width: 280px ;
	display: inline-block ;
	position: relative ;
  overflow: hidden;
}
.three_div .cont_div1 div{
  width: 100%;
  height: 100%;
  color: white;
  transform: translateY(150px);
  background-color: rgba(0,0,0,.5);
  transition: transform 1s;
}
.three_div .cont_div1:hover div{
  transform: translateY(0);
}
.three_div .cont_div1 div h3{
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  background-color: rgba(0,0,0,.5);
}
.three_div .cont_div1 div p{
  padding: 10px;
  line-height: 30px;
  font-size: 16px;
}
.three_div .cont_div1 div a{
  font-size: 12px;
  color: white;
}
.three_div .cont_div1 div a:hover{
  color: blue;
}
.three_div .cont_div1:first-of-type{
  background: url(../assets/img/ds.jpg) no-repeat;
  background-size: 100%;
}
.three_div .cont_div1:nth-of-type(2){
  background: url(../assets/img/dc.jpg) no-repeat;
  background-size: 100% 100%;
}
.three_div .cont_div1:nth-of-type(3){
  background: url(../../static/myImg/bg5.jpg) no-repeat;
  background-size: 100% 100%;
}
.three_div .cont_div1 span{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: white;
  font-size: 16px;
  text-align: center;
  background-color: rgba(0,0,0,.8);
}
.two_cont p{
	font-size: 30px ;
	color: white ;
	line-height: 60px ;
	font-family: '宋体' ;
	text-align: center ;
}
.about_nav{
	/* display: flex ;
	display: -webkit-flex ; 
	display: -ms-flex ; 
	justify-content: space-evenly ;
	-ms-justify-content: space-evenly ;   */
	position: absolute;
	width: 100% ; 
	height: 100px;
	top: 20px ;
	left: 0;
	transition: 1s;
	z-index: 9;
}

.about_nav a{
	float: left ; 
	width: 100px;
	height: 100px;
	font-family: '宋体' ;
	border-radius: 50% ;
	text-align: center ;
	line-height:  100px;
	font-size: 20px;
	color: white ;
	transition: color 1s;
}
.about_nav a:first-of-type{
	margin-left: 200px ; 
}
.about_nav a:hover{
	color: red;
}
.about_nav .select{
	color: pink ;
}
.about_nav a:nth-of-type(3){
	border: 3px solid #ccc;
	box-sizing: border-box ;
}
.about_nav a img{
	width: 100% ;
	height: 100% ;
	border-radius: 50% ;
}
.first_cont  p{
	color: white ;
	font-size: 30px;
	font-family: '宋体' ;
	text-align: center;
	line-height: 60px;
}
.toBottom{
	display: block ;
	width: 32px;
	height: 32px;
	font-size: 0;
	background: url(../assets/img/bottom.png) no-repeat;
	background-size: 100% 100% ;
	margin: 0 auto ;
	margin-top: 20px;

	cursor: pointer ;
	transition: transform 1s ;
}
.toTop{
	display: block ;
	width: 32px;
	height:  32px;
	font-size: 0;
	background: url(../assets/img/top.png) no-repeat;
	background-size: 100% 100% ;
	margin: 0 auto ;
	margin-top: 20px;
	cursor: pointer ;
	transition: transform 1s ;
}
.toBottom:hover,.toTop:hover{
	transform: scale(1.5, 1.5) ;
}

</style>
