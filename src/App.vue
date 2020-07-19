<!--
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 15:32:20
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 23:20:32
 * @FilePath: \vue-cli3-github\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pageA">PageA</router-link> |
      <router-link to="/pageB">PageB</router-link> |
      <router-link to="/pageC">PageC</router-link> | -->
      <router-link v-for="(item, index) in $router.options.routes" :key="index" :to="item.path">{{item.name}} | </router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
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
