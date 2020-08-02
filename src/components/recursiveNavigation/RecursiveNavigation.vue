<!--
 * @Description: 递归导航
 * @Author: yilingsj（315800015@qq.com）
 * @Date: 2020-07-19 15:34:46
 * @LastEditors: yilingsj（315800015@qq.com）
 * @LastEditTime: 2020-08-02 22:59:34
 * @FilePath: \vue-cli3-github\src\components\recursiveNavigation\RecursiveNavigation.vue
-->
<template>
  <div class="nav">
    <template v-for="(item, index) in navs">
      <!-- 无子路由时 -->
      <template v-if="!item.children">
        <router-link class="nav__link" :key="index" :to="item.path" @click.native="handleClick(item, index)">{{item.name}}</router-link>
      </template>
      <!-- 有子路由时 -->
      <template v-else>
        <div class="nav-select" :key="index" :class="{'nav-select_active': activeIndex === index}" @click.stop="handleClick(item, index)" @mouseenter="handleMouseenter(index)" @mouseleave="handleMouseleave">
          <!-- 点击父路由时可跳转 -->
          <template v-if="item.meta.noJump">
            <router-link class="nav__link" :key="index" :to="item.path" :class="{'router-link-exact-active': item.meta.checked}" @click.native="handleClick(item, index)">{{item.name}}</router-link>
          </template>
          <!-- 点击父路由时不可跳转 -->
          <template v-else>
            <a class="nav__link" :key="index">{{item.name}}</a>
          </template>
          <!-- 递归（实现无限级） -->
          <RecursiveNavigation :navs="item.children"></RecursiveNavigation>
        </div>
      </template>
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class RecursiveNavigation extends Vue {
  @Prop({ type: Array })
  navs!: any[]

  activeIndex = -1 // 激活的索引

  // 点击事件
  handleClick(item: any) {
    const newNavs: any[] = this.forEachNavs(item)
    this.$emit('click-stop', newNavs)
  }

  // 鼠标滑过
  handleMouseenter(index: number) {
    this.activeIndex = index
  }

  // 鼠标离开
  handleMouseleave() {
    this.activeIndex = -1
  }

  // 遍历导航，给当前的添加激活样式，其他的移除
  forEachNavs(item: any) {
    const newNavs: any[] = this.navs.map((ele: any) => {
      if (ele === item) {
        ele.meta.checked = true
        return ele
      } else {
        ele.meta.checked = false
        return ele
      }
    })
    this.activeIndex = -1
    return newNavs
  }
}
</script>
<style lang="stylus" scoped>
$color_primary = #3882f5
.nav
  width 100%
  max-width 1200px
  margin 0 auto
  text-align center
  display flex
  justify-content center
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
    background #fff
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
  &-select
    position relative
    .nav
      display none
      position absolute
      top 100%
    &_active
      .nav
        display block
/*  */
</style>
