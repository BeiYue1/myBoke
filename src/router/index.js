import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Phone from '@/components/phone'
import About from '@/components/about'
import Dynamic from '@/components/dynamic'
import Essay from '@/components/essay'
import Scenery from '@/components/scenery'
import Figure from '@/components/figure'
Vue.use(Router) ;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    } ,
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },{
      path:'/phone',
      name:'Phone',
      component:Phone,
    },{
      path:'/about',
      name:'About',
      component:About,
    },{
      path:'/dynamic',
      name:'Dynamic',
      component:Dynamic ,
    },{
      path:'/essay',
      name:'Essay',
      component:Essay ,
    },{
      path:'/phone/scenery',
      name:'Scenery',
      component:Scenery
    },{
      path:'/phone/figure',
      name:'Figure',
      component:Figure
    }
  ]
})
