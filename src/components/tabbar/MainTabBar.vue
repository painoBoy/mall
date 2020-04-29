<!--
 * @Author: your name
 * @Date: 2020-04-28 23:48:54
 * @LastEditTime: 2020-04-29 00:19:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/components/MainTabBar.vue
 -->

 <template>
  <bottom-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="../../assets/images/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="../../assets/images/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="../../assets/images/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="../../assets/images/tabbar/category_active.svg" alt />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="../../assets/images/tabbar/shopcart.svg" alt />
      <img slot="item-icon-active" src="../../assets/images/tabbar/shopcart_active.svg" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="../../assets/images/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="../../assets/images/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </bottom-bar>
</template>
 
 <script>
import BottomBar from "./BottomBar";
import TabBarItem from "./TabBarItem";
export default {
  components: {
    BottomBar,
    TabBarItem,
  },
};
</script>
<style lang="scss" scoped>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
  img {
    margin-top: 5px;
    width: 20px;
    height: 20px;
  }
}
</style>
