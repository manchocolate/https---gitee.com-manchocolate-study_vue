<template>
  <div class="home">
    <button @click="runHandler">计数</button>
    <!-- 访问state -->
    {{this.$store.state.num}}
    <!-- 访问modules 下的 子cart -->
    {{this.$store.state.cart.cartNum}}
    <!-- 访问modules下的getters -->
    {{this.$store.getters.getNum}}
    {{mystate}}
  </div>
</template>

<script>
// @ is an alias to /src
// 引入子组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  computed:{
    mystate(){
      return this.$store.getters.getNum;
    }
  },
  methods:{
    runHandler(){
      // this.$store.state.num+=1 错误写法
      //this.$store.commit("addNum",1); //访问mutations同步方法
      //访问actions 异步方法
      this.$store.dispatch("addNumAction",1); // 访问action异步方法
    }
  },
  components: { //挂子组件
    HelloWorld
  }
}
</script>
