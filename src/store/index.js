import Vue from 'vue' ;
import Vuex from 'vuex' ;
import router from '@/router' ;
Vue.use(Vuex) ;
Vue.use(router) ;
let store = new Vuex.Store({
  state:{
    list:[{l1:'首页',isSelect:true,id:0,English:'Home'},{l1:'关于我',isSelect:false,id:1,English:'About'},{l1:'动态',isSelect:false,id:2,English:'Dynamic'},{l1:'照片墙',isSelect:false,id:3,English:'Phone'},{l1:'前端集合',isSelect:false,id:4,English:'Assemblage'}] ,
    p_list:['打了死结的青春,捆死一颗苍白绝望的灵魂','为自己掘一个坟墓来葬心,红尘一梦,不在追寻','加了锁的青春,不会再因谁而推开心门'] ,

    city_news:{
    	city_name:'北京'
    } ,

    weathers:[] ,
    cont:[{
      time:'2018-05-15',
      author:'yyyy0101',
      contType:'文章故事',
      contCont:'励志文章',
      title:'发掘更好的自己，才能遇见最好的别人',
      cont:'记忆深处里，小时候体育课，老 师组织我们男生搞了一个跳高比赛，标竿上升到90厘米时，总有几个男生跳不过',
      urls:'http://www.duwenzhang.com/wenzhang/lizhiwenzhang/20180515/388781.html'
    },{
      time:'2007-07-16',
      author:'pingzhongsha',
      contType:'文章故事',
      contCont:'友情文章',
      title:'淡淡的友情，淡淡的爱',
      cont:'有一种朋友,我想那是一种介乎于爱情与友情之间的感情，你会在偶尔的一时间默默地想念他，想起他时，心里暖暖的，有一份美好，有一份感动。在忧愁和烦恼的时候，你会想起他，你很希望他能在你的身边，给你安慰，给你理解，而你却从没有向他倾诉，你怕属于自己的那份忧伤会妨碍他平静的生活。',
      urls:'http://www.duwenzhang.com/wenzhang/youqingwenzhang/20070716/275.html'
    },{
      time:'2018-06-08',
      author:'程媛小妖',
      contType:'文章故事',
      contCont:'励志文章',
      title:' 别再说...',
      cont:'别再说，地铁太挤工作不易，你可曾见过火车上肩扛手提，许多我们叫爸的人拖着比自己都高的行李奔赴生计压力太大生活艰辛，你可曾知道有人已经年逾古稀依然起早贪黑，只为解决一家温饱！灯红酒绿索然无味，你可曾想过穿梭城市的民工也许连一瓶矿泉水都狠拥有心珍惜！',
      urls:'http://www.duwenzhang.com/wenzhang/lizhiwenzhang/20180608/389679.html'
    },{
      time:'2018-02-13',
      author:'笔砚先生',
      contType:'文章故事',
      contCont:'友情文章',
      title:'如果我死了·若是有来生',
      cont:'很久都不曾写过文章了，上一篇文章还是四个月之前的。以此去命题，并非有什么轻生的念头，只是有感而发，勿念。其实我很想做个自私的人，因为这会让你吃尽苦头又吃足了甜头。而你却依然活的天真活的开心——序。 如果我死了 如果我死了，那些愧对我的人会很开心：终于',
      urls:'http://www.duwenzhang.com/wenzhang/youqingwenzhang/20180213/385395.html'
    },{
      time:'2018-07-04',
      author:'春暖花开文',
      contType:'文章故事',
      contCont:'人生哲理',
      title:'人这一辈子，请活好你自己',
      cont:'人这一辈子，总会有高潮低谷，追求不一定都能实现，付出的不一定就有回报，你要学会面对，用心甘情愿的态度，过随遇而安的生活。 很喜欢一句话：一朵花的凋零荒芜不了整个春天，一次挫折也荒废不了整个人生。人活一世，是从稚嫩走向成熟，从懵懂走向平凡的心态，生命，',
      urls:'http://www.duwenzhang.com/wenzhang/renshengzheli/ganwu/20180704/390610.html'
    },{
      time:'2016-08-12',
      author:'平湖之鹰',
      contType:'文章故事',
      contCont:'亲情文章',
      title:'锁不住的目送',
      cont:'我锁着母亲，锁着她半年了。我把她的白发和叨唠锁在了四楼。她趴在阳台边，像一棵半枯的藤蔓，在阳光里呼吸，在风雨里憔悴。她，在淡然地承接着岁月的眷顾。',
      urls:'http://www.duwenzhang.com/wenzhang/qinqingwenzhang/ganwuqinqing/20160812/357486.html'
    }] ,
    newsImg:[{
      title:"风景",
      urls:'./static/myImg/1.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/2.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/3.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/4.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/5.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/6.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/7.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/8.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
      urls:'./static/myImg/9.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"风景",
       urls:'./static/myImg/10.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"风景",
       urls:'./static/myImg/11.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"人物",
      urls:'./static/myImg/12.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"人物",
      urls:'./static/myImg/13.jpg' ,
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"人物",
      urls:'./static/myImg/14.jpg' ,
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"人物",
      urls:'./static/myImg/15.jpg' ,
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    },{
      title:"人物",
       urls:'./static/myImg/16.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"人物",
       urls:'./static/myImg/17.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"人物",
       urls:'./static/myImg/18.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.用以平衡轻浮的生用以平衡轻浮的生'

    },{
      title:"人物",
       urls:'./static/myImg/19.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"人物",
       urls:'./static/myImg/20.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"人物",
       urls:'./static/myImg/21.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"人物",
       urls:'./static/myImg/22.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'

    },{
      title:"人物",
      urls:'./static/myImg/23.jpg',
      p:'有时侯明白人的一生当中,深刻的思念是维系自己与记忆的纽带.它维系着所有的过往.悲喜.亦指引我们深入茫茫命途.这是我们宿命的背负.但我始终甘之如饴地承受它的沉沉重量,用以平衡轻浮的生.'
    }] ,
    musicIndex: 0 ,
    showImg:false ,
    showFont:true ,
    showMask: false,
    myWorks:[{
      parent:'HTML/HTML5',
      childs:[{
        title:'',
        content:''
      },{
        title:'',
        content:''
      }]
    },{
      parent:'CSS/CSS3',
      childs:[{
        title:'',
        content:''
      }]
    },{
      parent:'JS/JQ',
      childs:[{
        title:'',
        content:''
      }]
    },{
      parent:'Vue/React/Angular',
      childs:[{
        title:'',
        content:''
      }]
    },{
      parent:'其他',
      childs:[{
        title:'',
        content:''
      }]
    }] ,
    bg:[{
      title:'山水之间(许嵩)' ,
      bgImg: './static/myImg/bg1.jpg',
      bgMusic:'./static/myMusic/sszj.mp3'
    },{
      title:'起风了(买辣椒也用券)' ,
      bgImg: './static/myImg/bg2.jpg',
      bgMusic:'./static/myMusic/qfl.mp3'
    },{
      title:'谁记得(柳妍熙)' ,
      bgImg: './static/myImg/bg3.jpg',
      bgMusic:'./static/myMusic/sjd.mp3'
    },{
      title:'花非花(昆玉)' ,
      bgImg: './static/myImg/bg4.jpg',
      bgMusic:'./static/myMusic/hfh.mp3'
    },{
      title:'别有天(排骨教主)' ,
      bgImg: './static/myImg/bg5.jpg',
      bgMusic:'./static/myMusic/byt.mp3'
    }] ,
    //动态
    dynamicNews:[{
      cont:'山峦像被笼罩层层轻纱,迷雾朦胧着你的脸颊',
      imgs:[{
        url:'./static/myImg/bg1.jpg',
      },{
        url:'./static/myImg/bg2.jpg'
      }],
      time:'2018-8-15 12:23:00'
    },{
      cont:'有太多心事却无言表达,只见风中你飘扬的发',
      imgs:[{
        url:'./static/myImg/bg3.jpg',
      },{
        url:'./static/myImg/bg4.jpg'
      },{
        url:'./static/myImg/bg1.jpg'
      }],
      time:'2018-8-15 13:23:00'
    },{
      cont:'你说要为我再泡碗花茶,一起去看羞红的晚霞',
      imgs:[{
        url:'./static/myImg/bg5.jpg',
      }],
      time:'2018-8-15 12:23:00'
    },{
      cont:'等到那年华,褪变成白发,残落满园芳菲又发芽。惊过多少次梦魇,花已不像花,你还在那个路口等我回家',
      imgs:[],
      time:'2018-8-15 12:23:00'
    }],

  },
  getters:{

  },
  mutations:{
    getTtile(state , index){
      let cont = state.cont ;
      cont[index].cont =  cont[index].cont.substr(0,50) + '...' ;
    } ,

  }
}) ;
export default store ;
