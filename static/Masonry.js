function init(parent,child){

  // 获取最小值的下标
  function getMinIndex(arr , min){
    for(let i in arr){
      if(arr[i] === min){
        return i ;
      }
    }
  }

  //获取列
  let cont = $(parent) ;

  let cont_h = cont.parent() ;


  let cont_div = $(child) ;

  let bigW = cont_h.outerWidth() ;

  let smallW = cont_div.outerWidth() ;
  let col = Math.floor(bigW / smallW) ;
  let len  = cont_div.length ;
  // 存放每一列的高度
  let arrH = [] ;
  // 最小高度
  let max = null ;

  for (let i = 0; i < len; i++) {
    if( i < col ){
      arrH[i] = cont_div.eq(i).outerHeight() ;
      //窗口改变时不添加此处会有问题
      cont_div.eq(i).css('position', 'absolute').css('top',0).css('left',i*smallW);
    }else{

      let minH = Math.min.apply(null , arrH) ;
      // 最小高度的索引
      let minIndex = getMinIndex(arrH , minH) ;
      max = Math.max.apply(null , arrH) ;
      cont_div.eq(i).css('position', 'absolute').css('top',minH).css('left',minIndex*smallW);
      arrH[minIndex] += cont_div.eq(i).outerHeight() ;
    }

  }
  cont.css('height', max).css('width',col*smallW);
}


