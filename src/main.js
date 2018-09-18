// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' ;
import App from './App' ;
import router from './router' ;
import store from './store' ;
import '../src/assets/css/comment.css' ;
import '../src/assets/css/index.css' ;
 


import AMap from 'vue-amap';
Vue.use(AMap);



  // 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '66f362441b28df39c8b0ffe2caa64220',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});



Vue.config.productionTip = false ;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
}) ;
