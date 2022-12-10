<template>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item,index) in breakList" :key="item.path">
        <a href="/welcome" v-if="index==0">{{item.meta.title}}</a>
        <span v-else>{{item.meta.title}}</span>
    </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        computed:{
            breakList(){
                console.log(this.$route.matched);
                return this.$route.matched;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>