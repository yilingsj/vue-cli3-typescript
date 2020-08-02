<!--
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 15:32:20
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-08-02 14:44:36
 * @FilePath: \vue-cli3-github\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav" class="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/pageA">PageA</router-link> |
      <router-link to="/pageB">PageB</router-link> |
      <router-link to="/pageC">PageC</router-link> | -->
      <router-link v-for="(item, index) in $router.options.routes" :key="index" :to="item.path" class="nav__link">{{item.name}}</router-link>
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
$color_primary = #3882f5
.nav
  width 100%
  max-width 1200px
  margin 0 auto
  text-align center
  display flex
  &__link
    cursor pointer
    font-size 14px
    color #626870
    text-decoration none
    line-height 20px
    font-family PingFangSC-Medium
    min-width 60px
    margin 0 20px
    padding 20px 0
    position relative
    transition .5s
    overflow hidden
    text-align center
    display block
    &:hover
      color #3882f5
    &::after
      content ''
      width 0
      height 2px
      background-color #3882f5
      position absolute
      bottom 0
      left 50%
      transform translateX(-50%)
      transition .35s
    &:hover::after
      width 100%
  .router-link-exact-active
    color #3882f5
    &::after
      width 100%
</style>
