<!--
 * @Description: 启动页
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-11 19:57:28
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 13:11:36
 * @FilePath: \vue-cli3-github\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div>
      若开启此行注释，请注释掉 /router/index.ts中的第51~53行 <br>
      <button @click="handleSendAxios">axios获取动态导航数据</button> | <button @click="handlePushRouter">添加动态路由</button>
    </div> -->
    <div id="nav">
      <template v-if="$store.state.dynamicNav.length">
        <router-link v-for="(item, index) in $store.state.dynamicNav" :key="index" :to="item.path">{{item.name}} | </router-link>
      </template>
      <template v-else>
        <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { dictionaryMapping, getDynamicRouter2 } from './router/dynamicRouter2'

@Component
export default class APP extends Vue {
  handleSendAxios() {
    /**
     * @author: yilingsj（315800015@qq.com）
     * @description: 点击获取动态导航数据
     * @param {type}
     * @return:
     * @Date: 2020-07-12 17:41:31
     */
    getDynamicRouter2((res: any) => {
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
      })
      ;(this.$router as any).options.routes.push(...result)
      this.$router.addRoutes(result)
    })
  }

  /**
   * @author: yilingsj（315800015@qq.com）
   * @description: 将动态路由追加到路由中
   * @param {type}
   * @return:
   * @Date: 2020-07-12 17:41:13
   */
  handlePushRouter() {
    this.$store.commit('setDynamicNav', (this.$router as any).options.routes)
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
