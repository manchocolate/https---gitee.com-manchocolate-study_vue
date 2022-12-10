<template>
  <div class="main">
      <div class="box"><router-view></router-view></div>
      <div class="footer">
        <tab-bar></tab-bar>
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
import tabBar from '@/components/tabBar.vue'
export default{
  components:{
    tabBar
  }
}

</script>

<style lang="scss">
// .main{
//   display: flex;
//   .box{}
//   .foter{}
// }
*{
  margin: 0;
  padding: 0;
}
a{
  color: rgb(102, 51, 55);
  text-decoration: none;
}
html,body{
  width: 100%;
  height: 100%;
}
.main{
  display: flex;
  -ms-flex-direction: column;
  width: 100%;
  height: 100%;
  background: #ccc;
}
.mian .box{
  flex: 1;
  padding-bottom: 60px;
}
.main .footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #fff;
}
</style>
