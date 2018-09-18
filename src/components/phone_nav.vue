<template>
  <!--导航栏-->
  <div class="phone_class">
    <router-link to="/phone">全部</router-link>
    <router-link to="/phone/scenery">风景</router-link>
    <router-link to="/phone/figure">人物</router-link>
  </div>
</template>

<script>
    export default {
        name: ""
    }
</script>

<style scoped>
  /* 照片墙部分的样式 */
  .phone_class{
    height: 40px;
    padding-left: 10px;

    position: relative;
  }

  .phone_class a{
    display: inline-block ;
    width: 100px;
    cursor: pointer ;
    line-height: 40px;
    margin-right: 20px;
    text-align: center ;
    border: 2px solid #ccc;
    border-radius: 5px;
    background-color: white ;
    color: black ;
  }
  .phone_class .router-link-exact-active{
    color: white ;
    background-color: black ;
  }
</style>
