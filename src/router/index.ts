/*
 * @Description: 路由
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-11 19:57:28
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 13:09:56
 * @FilePath: \vue-cli3-github\src\router\index.ts
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import { dictionaryMapping, getDynamicRouter } from './dynamicRouter'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
getDynamicRouter((res: any) => {
  const result = res.map((item: any) => {
    return {
      path: '/' + item.name,
      name: item.name,
      meta: {
        title: item.name
      },
      id: item.id,
      component: dictionaryMapping[item.name]
    }
  });
  (router as any).options.routes.push(...result)
  router.addRoutes(result)
  store.commit('setDynamicNav', (router as any).options.routes)
})
export default router
