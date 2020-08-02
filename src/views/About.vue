<!--
 * @Description:
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 20:18:45
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-08-02 23:01:08
 * @FilePath: \vue-cli3-github\src\views\About.vue
-->
<template>
  <!-- 没有嵌套路由时 -->
  <div class="about" v-if="!isChildren">
    <h1>This is an about page</h1>
  </div>
  <!-- 有嵌套路由时 -->
  <router-view v-else></router-view>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class About extends Vue {
  isChildren = false // 是否有子导航

  @Watch('$route')
  watchRoute(to: any) {
    this.isChildren = to.matched.length > 1
  }
}
</script>
