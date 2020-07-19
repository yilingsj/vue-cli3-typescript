/*
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 15:32:20
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 22:21:24
 * @FilePath: \vue-cli3-github\src\router\index.ts
 */
import Vue from 'vue'
import VueRouter, { Route, RouteConfig, NavigationGuardNext } from 'vue-router'
import navList from './list'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = []
routes.push(...navList) /* 将数据追加进来 */

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext<Vue>) => {
  if (to.meta) {
    document.title = to.meta.title || '无标题' // 动态设置页面标题
  }
  next()
})
export default router
