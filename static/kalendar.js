;(function($){
  $.fn.extend({
    kalendar:function(options){
      //配置默认参数
      let defaults = {height:250,width:300,backgroundColor:'white'};
      let week = ['日','一','二','三','四','五','六'] ;


      //替换默认参数
      options = $.extend({},defaults, options);
      let _h = options.height*0.12;
      let parent = $(this) ;
      parent.html(` <div style="font-size: 18px;user-select: none;height: ${_h}px;background-color: black;color: white ; line-height: ${_h}px;text-align: center"> <div style="display: inline-block;vertical-align: top"><span style="cursor: pointer;font-size: 20px;"> < </span> <em style="font-style: normal">2018</em>年 <em style="font-style: normal">8</em>月 <span style="cursor: pointer;font-size: 20px;"> > </span> </div></div>

    <div style="height: 88%;">

    </div>`) ;

      let div0 = parent.children()[0] ;
      let divs = parent.children()[1] ;

      //左右
      let left = $($(div0).children()[0]).children()[0] ;
      let right = $($(div0).children()[0]).children()[3] ;

      let data = new Date() ;

      //年份和月份
      let Y = $($(div0).children()[0]).children()[1] ;
      let M = $($(div0).children()[0]).children()[2] ;

      let _y = data.getFullYear() ;
      let _m = data.getMonth() + 1 ;

      Y.innerHTML = _y ;
      M.innerHTML = _m ;

      $(left).click(function () {
        let y = Number(Y.innerHTML);
        let m = Number(M.innerHTML);
        m-- ;
        if(m <= 0 ){
          m = 12 ;
          y -- ;
        }
        Y.innerHTML = y ;
        M.innerHTML = m ;
        createDiv(y , m ) ;
      }) ;
      $(right).click(function () {
        let y = Number(Y.innerHTML);
        let m = Number(M.innerHTML);
        m++ ;
        if(m > 12){
          m = 1 ;
          y ++ ;
        }
        Y.innerHTML = y ;
        M.innerHTML = m ;
        createDiv(y , m ) ;
      }) ;



      function getTime(y,m) {
        let dataNews = {} ;
        let data = new Date() ;

        let nowY = data.getFullYear() ;
        let nowM = data.getMonth() + 1 ;
        let nowD = data.getDate() ;


        data.setFullYear(y) ;
        data.setMonth(m - 1) ;

        //本月第一天是周几
        data.setDate(1) ;
        let nowWeek = data.getDay() ;
        //上个月有多少天
        data.setDate(0) ;
        let prevDay = data.getDate() ;
        //上个月的第一天是周几
        data.setDate(1) ;
        let prevWeek = data.getDay() ;

        //下个月
        data.setMonth(m) ;
        //下个月第一天是周几
        data.setDate(1) ;
        let nextWeek = data.getDay() ;
        data.setMonth(m+1) ;
        data.setDate(0) ;
        let nextDay = data.getDate() ;
        //本月有多少天
        data.setDate(0) ;
        let nowDay = data.getDate() ;
        dataNews = {
          nowWeek ,
          nowDay ,
          prevWeek,
          prevDay ,
          nextWeek,
          nextDay,
          nowY,
          nowM,
          nowD,
        } ;
        return dataNews ;
      }
      createDiv(2018,8) ;

      function createDiv(y,m) {
        let str = '' ;
        let h = options.height*0.88 ;
        let w = options.width + 6 ;

        for (let i = 0 ; i < 49 ; i++){
          str += `<div style="user-select: none;display: inline-block ;height: ${h/7}px;width:${w/7}px;border: 1px solid #ccc ; box-sizing: border-box;text-align: center ; line-height: ${h/7}px ; vertical-align: top;margin-right: -1px;margin-bottom: -1px;font-size: 18px;">` ;
          if(i < 7){
            str += week[i] ;
          }
          str += `</div>` ;
        }
        $(divs).html(str) ;

        let child =  $($(parent.children()[1]).children()) ;
        let data = getTime(y,m) ;

        //今天的日期


        let ny = Number(Y.innerHTML);
        let nm = Number(M.innerHTML);

        //上个月
        for (let i = 7 ; i < data.nowWeek + 7  ; i++){
          child.eq(i).html(data.prevDay - data.nowWeek + ( i- 6 )).css('color','#ccc') ;
        }

        //本月
        for(let i = data.nowWeek + 7 ; i < data.nowDay + 7 + data.nowWeek ; i++){
          child.eq(i).html(i - 7 - data.nowWeek + 1) ;
          if(_y=== ny && _m===nm && Number(child.eq(i).html()) === data.nowD){
            child.eq(i).css('color','red') ;
          }
        }
        //下个月
        for(let i = data.nowDay + 7 + data.nowWeek ; i < 49 ;  i++){
          child.eq(i).html(i - (data.nowDay + 7 + data.nowWeek - 1)).css('color','#ccc') ;
        }

      }


      return $(this).each(function(){
        //$(this)为大盒子
        $(this).css({'height':options.height,'width':options.width,'backgroundColor':options.backgroundColor});

      });
    }
  });

})(window.jQuery);
