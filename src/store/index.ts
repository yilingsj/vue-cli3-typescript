/*
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-11 19:57:28
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 13:10:13
 * @FilePath: \vue-cli3-github\src\store\index.ts
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dynamicNav: [] // 要渲染的动态路由导航
  },
  mutations: {
    setDynamicNav (state: any, value: []) {
      state.dynamicNav = value
    } // 修改dynamicNav的值
  },
  actions: {},
  modules: {}
})
