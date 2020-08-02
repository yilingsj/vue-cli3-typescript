<!--
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 15:32:20
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-08-02 22:59:12
 * @FilePath: \vue-cli3-github\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <RecursiveNavigation :navs="navs" @click-stop="handleClickStop"></RecursiveNavigation>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import RecursiveNavigation from '@/components/recursiveNavigation/RecursiveNavigation.vue'

@Component({
  components: {
    RecursiveNavigation
  }
})
export default class App extends Vue {
  navs: any = []

  mounted() {
    this.navs = (this.$router as any).options.routes
  }

  // 监听组件中的数据
  handleClickStop(newNavs: any) {
    this.navs = newNavs // 更新导航
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
</style>
