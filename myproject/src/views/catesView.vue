<template>
    <div>
        <!-- 1布局 :span="数值" 24列-->
        <!-- 2 按钮 size=small|large ：icon=“search” -->
        <!-- 一行三列 -->
        <el-row>
        <el-col :span="8"><div style="background: #ff0" />1</el-col>
        <el-col :span="8"><div style="background: #ff0" />2</el-col>
        <el-col :span="8"><div style="background: #ff0;" />3</el-col>
  </el-row>
    </div>
    
</template>

<script>
export default {
    name: 'catesView',
}
</script>
<style class="scss" scoped>

</style>