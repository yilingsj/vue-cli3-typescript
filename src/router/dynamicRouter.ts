/*
 * @Description: 请求后端接口获取动态导航数据
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-11 21:31:30
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 13:06:24
 * @FilePath: \vue-cli3-github\src\router\dynamicRouter.ts
 */

import pageA from '../views/PageA.vue'
import pageB from '../views/PageB.vue'
import axios from 'axios'
const dictionaryMapping: { [key: string]: any } = {
  pageA: pageA,
  pageB: pageB,
  pageC: () => import(/* webpackChunkName: "pageC" */ '../views/PageC.vue') /* 懒加载的方式也是可以的 */
}
const getDynamicRouter = function (callback: any) {
  const url = '/api/dynamicNav.json'
  axios
    .get(url)
    .then((res: any) => {
      console.log('res=', res)
      callback && callback(res.data)
    })
    .catch((err: any) => {
      console.log('err=', err)
    })
}

export { dictionaryMapping, getDynamicRouter }
