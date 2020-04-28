<!--
 * @Author: your name
 * @Date: 2020-04-27 22:24:38
 * @LastEditTime: 2020-04-29 00:50:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/App.vue
 -->
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "./components/tabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>
<style lang="scss">
</style>
