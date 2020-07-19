/*
 * @Description: 手动添加一个配置文件
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-12 10:05:10
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 15:14:19
 * @FilePath: \vue-cli3-github\vue.config.js
 */
console.log('环境', process.env.NODE_ENV !== 'production')
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8088', // 代理的host
        pathRewrite: {
          '^/api': '/mock' // 访问/api/xxx时定向到/mock
        }
      }
    }
  }
}
