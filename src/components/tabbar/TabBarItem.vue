<!--
 * @Author: your name
 * @Date: 2020-04-28 23:44:59
 * @LastEditTime: 2020-04-28 23:46:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/components/tabbar/TabBar.vue
 -->
<template>
  <div class="tab-bar-item" @click="handleClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      path : String 
  },
  data() {
    return {
    //   isActive: true,
    };
  },
  methods:{
      handleClick (){ 
        if(this.$route.path != this.path ) this.$router.replace(this.path)
      }
  },
  computed:{
      isActive() {
          return this.$route.path.indexOf(this.path) !== -1
      }
  }
};
</script>

<style lang="less">
.tab-bar-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
  .item-bar-icon img {
    margin-top: 5px;
    width: 20;
    height: 20px;
  }
}
.active {
  color: rgb(255, 87, 119);
}
</style>
