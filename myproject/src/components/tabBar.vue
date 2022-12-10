<template>
    <div class="tabs">
          <router-link to="/">首页</router-link>
          <router-link to="/cates">分类</router-link>
          <router-link to="/cart">购物车</router-link>
          <router-link to="/my">我的</router-link>
    </div>
</template>

<script>
    export default {
        name:"tabBar",
    }
</script>

<style lang="scss" scoped>
.tabs{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    align-items: center;
}
.router-link-active{
    color: #f60;
}
</style>