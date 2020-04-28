<!--
 * @Author: your name
 * @Date: 2020-04-28 23:47:26
 * @LastEditTime: 2020-04-28 23:47:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/components/BottomBar.vue
 -->

 <template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
};
</script>

<style lang="less" scoped>
#tab-bar {
  background-color: #f6f6f6;
  display: flex;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .3);
}
</style>
