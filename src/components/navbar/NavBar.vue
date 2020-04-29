<!--
 * @Author: your name
 * @Date: 2020-04-29 00:21:29
 * @LastEditTime: 2020-04-29 01:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/components/navbar/NavBar.vue
 -->

<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color:#ff5777;
  border-bottom: 1px;
  box-shadow: 0px 1px 1px rgba(100,100,100,.4);
  position: fixed;
  z-index: 9;
  top:0;
  left:0;
  right: 0;
  color:#fff;
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
}
</style>