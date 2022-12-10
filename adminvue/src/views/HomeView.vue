<template>
  <el-row class="tac">
    <el-col :span="2">
      <h5 class="mb-2">后台管理</h5>
      <!-- 
        default-active="2" 默认选择菜单
        router：是否启用 vue-router模式
        default-openeds	默认打开的 sub-menu 的 index 的数组	Array	—	—
       -->
      <el-menu
        default-active="/welcome"
        default-openeds="/Goods" 
        class="el-menu-vertical-demo"
        router
      >
        <el-sub-menu index="/Goods">
          <template #title>
            <!-- 图标 -->
            <el-icon><location /></el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/goods">商品列表</el-menu-item>
            <el-menu-item index="/cates">商品分类</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/admin">
          <el-icon><Setting /></el-icon>
          <span>管理员管理</span>
        </el-menu-item>
        <el-menu-item index="/order" disabled>
          <el-icon><document /></el-icon>
          <span>订单管理</span>
        </el-menu-item>
        <el-menu-item index="/sys">
          <el-icon><setting /></el-icon>
          <span>系统管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="22">
      <div class="top">
        <breadCrumb/>
      </div>
      <div class="main"><router-view></router-view></div>
    </el-col>
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { Setting } from '@element-plus/icons-vue';
import breadCrumb from '@/components/breadCrumb.vue';
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Setting,
    breadCrumb
}
}
</script>

<style lang="scss" scoped>
.mb-2{
  text-align: center;
  font-size: 20px;
  padding: 6px 0;
}
.top{
  height: 40px;
  line-height: 40px;
  padding: 10px;
  background: #0ff;
}
.main{
  padding: 10px;

}
</style>