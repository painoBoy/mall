<!--
 * @Author: your name
 * @Date: 2020-04-29 02:39:57
 * @LastEditTime: 2020-04-29 02:39:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/components/tabcontrol/TabControl.vue
 -->

<template>
  <div class="tab-control">
    <div
      class="item"
      v-for="(item, index) in tabs"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="tabClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
      tabClick(index) {
          this.currentIndex = index;
          this.$emit("changeTabs",index);
      }
  },
};
</script>

<style lang="scss" scoped>
.tab-control {
  height: 40px;
  line-height: 40px;
    z-index: 10;
  display: flex;
  text-align: center;

  .item {
    flex: 1;
    span {
      padding: 4px;
    }
  }
  .active {
    color: #ff5777;
    span {
      border-bottom: 3px solid #ff5777;
    }
  }
}
</style>
