/*
 * @Description: 路由list
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 15:32:20
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 22:07:43
 * @FilePath: \vue-cli3-github\src\router\list.ts
 */
import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

const navList: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/pageA',
    name: 'PageA',
    component: () => import(/* webpackChunkName: "PageA" */ '../views/PageA.vue'),
    meta: {
      title: '页面A'
    }
  },
  {
    path: '/pageB',
    name: 'PageB',
    component: () => import(/* webpackChunkName: "PageB" */ '../views/PageB.vue'),
    meta: {
      title: '页面B'
    }
  },
  {
    path: '/pageC',
    name: 'PageC',
    component: () => import(/* webpackChunkName: "PageC" */ '../views/PageC.vue'),
    meta: {
      title: '页面C'
    }
  }
]

export default navList
