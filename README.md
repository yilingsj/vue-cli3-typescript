# 新增demo：二级导航菜单的实现
分支：dev-recursive-navigation-2-20200802

## 说明：这篇我们以实现给二级导航添加激活样式为主。通过mouseenter和mouseleave的组合使用，来实现鼠标滑过和离开时显示和隐藏子菜单的效果。通过多个添加click事件来监听用户点击操作，然后遍历整个数组并给当前对象添加checked=true属性来实现激活样式的效果。通过使用watch监听route变化来实现子路由和父路由使用不同的模板，避免组件同时渲染的bug

[父路由和子路由内容同时显示了.gif](https://img.alicdn.com/imgextra/i2/759415648/O1CN01xQIKaX1rapaviPuvf_!!759415648.gif)
[使用to.matched来判断当前路由是否有嵌套路由.gif](https://img.alicdn.com/imgextra/i2/759415648/O1CN014zeQCT1rapatNoZci_!!759415648.gif)

## 详细文章
[@vue/cli3+typescript项目实战之二级导航菜单的实现及潜在的坑](http://www.yilingsj.com/xwzj/2020-07-19/vue-cli3-recursive-navigation-2.html)
