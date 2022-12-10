/*
  vux状态管理：
  作用：实现非父子传值（全局变量）；实现缓存
  五大对象： state，getters，mutations，actions，modules
*/
import { createStore } from 'vuex'
import cart from './modules/cart';
export default createStore({
  state: { //状态树
    num:1,
  },
  getters: {// 等于computed
    getNum(state){
      return state.num+1;
    }
  },
  mutations: { // 修改state
    // 同步方法
    addNum(state,data){
      state.num+=data;
    },
  },
  actions: { //异步方法调取  action-->mutations-->修改state
    // addNumAction({commit},data){
    //   commit('addNum',data)
    // },
    addNumAction(store,data){
      store.commit("addNum",data);
    },
  },
  modules: {
      cart,
  }
})
