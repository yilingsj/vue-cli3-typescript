<!--
 * @Description: pageB页面
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-11 21:32:01
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-07-19 13:10:55
 * @FilePath: \vue-cli3-github\src\views\PageB.vue
-->
<template>
  <div class="about">
    PageB 页面，我是动态添加的，不信你看控制台中的请求
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class PageB extends Vue {}
</script>
