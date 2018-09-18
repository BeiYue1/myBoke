<template>
	<!-- 图片部分 -->
	<div>
		<div class="phone_cont clearfix" v-show = 'show_phone'>
			<div v-for = 'item in $store.getters.getNowImg' class="cont_img"><img :src="item.urls" alt=""></div>
		</div>

		<div class="jz_phone" v-show = '!show_phone'></div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				show_phone:false , 
			}
		},
		mounted(){
			let _this = this ;
			let timer = setTimeout(function(){
				_this.show_phone = true ; 
				$(function(){
					init() ;	
				}) ;
				$(window).on("resize", function(){
				
					init() ; 
					
				}) ;
			},1000) ; 

			function init(){
				//获取列

				let bigW = $('.phone_cont').outerWidth() ;

				let smallW = $('.cont_img').outerWidth() ;
				let col = Math.floor(bigW / smallW) ;

				let len  = _this.$store.getters.getNowImg.length ;
				// 存放每一列的高度
				let arrH = [] ;
				// 最小高度
				let max = null ;
				
				// 设置父级的宽
				
				for (var i = 0; i < len; i++) {
					if( i < col ){
						arrH[i] = $('.cont_img').eq(i).outerHeight() ;
					}else{

						let minH = Math.min.apply(null , arrH) ;
						// 最小高度的索引
						let minIndex = getMinIndex(arrH , minH) ;
						max = Math.max.apply(null , arrH) ;
						$('.cont_img').eq(i).css('position', 'absolute').css('top',minH).css('left',minIndex*smallW);
						arrH[minIndex] += $('.cont_img').eq(i).outerHeight() ;
					}
				}
				$('.phone_cont').css('height', max);
				
			}

			// }

			
			
			
			// 获取最小值的下标
			function getMinIndex(arr , min){
				for(let i in arr){
					if(arr[i] === min){
						return i ;
					}
				}
			}
			
		},


		methods: {

        },

	}
</script>
<style>
	.jz_phone{
		height: 380px;
		background: url(../assets/img/1.gif) no-repeat center; 

	}
</style>
