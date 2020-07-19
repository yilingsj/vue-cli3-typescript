/*
 * @Description: 请求后端接口获取动态导航数据
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-11 21:31:30
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 13:06:48
 * @FilePath: \vue-cli3-github\src\router\dynamicRouter2.ts
 */

import pageD from '../views/PageD.vue'
import pageE from '../views/PageE.vue'
import axios from 'axios'
const dictionaryMapping: { [key: string]: any } = {
  pageD: pageD,
  pageE: pageE
}
const getDynamicRouter2 = function (callback: any) {
  const url = '/api/dynamicNav2.json'
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

export { dictionaryMapping, getDynamicRouter2 }
