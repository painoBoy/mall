<!--
 * @Author: your name
 * @Date: 2020-04-27 22:24:38
 * @LastEditTime: 2020-04-29 02:09:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/views/Home.vue
 -->
<template>
  <div class="home">
    <nav-bar>
      <div class="head" slot="center">购物街</div>
    </nav-bar>
    <scroll class="scroll-content"
    @scroll="scroll"
    ref="scroll"
    :probeType="3" 
    @pullingUp="loadMore"
    :pullUpLoad="true"
    >
      <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img
          width="375"
          height="180"
          :src="item.image"
          @click="bannerClick(index)"
          alt
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <recommend :recommend="recommend"></recommend>
    <div class="hot">
      <a href="http://act.mogujie.com/zzlx67">
        <img src="../../assets/images/home/recommend_bg.jpg" alt />
      </a>
    </div>
    <tab-control
      @changeTabs="changeTabs"
      :tabs="['流行', '新款', '精选']"
    ></tab-control>
    <product-list :productData="showProduct"></product-list>
    </scroll>
    <back-top class="back-top" @click.native="clickBackTop" v-show="isShowBackTop">
      <img src="../../assets/images/common/top.png" alt="">
    </back-top>
  </div>
</template>

<script>
// @ is an alias to /src
import Scroll from '../../components/scroll/Scroll'
import NavBar from "../../components/navbar/NavBar";
import Recommend from "./children/Recommend";
import TabControl from "../../components/tabcontrol/TabControl";
import ProductList from "./children/ProductList";
import BackTop from '@/components/backTop/BackTop'
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import "swiper/css/swiper.css";

import { getHomeMultidata, getGoodsData } from "../../network/api";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    Recommend,
    TabControl,
    ProductList,
    Scroll,
    BackTop
  },
  data() {
    return {
      isShowBackTop:false,
      defaultType: "pop", //默认显示pop
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: {
          page: 0,
          list: [],
        },
        sell: {
          page: 0,
          list: [],
        },
      },
      swiperList: [],
      recommend: [],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed:{
    showProduct(){
      return this.goods[this.defaultType].list
    }
  },
  created() {
    this._getHomeData();
    this._getGoodsData("pop");
    this._getGoodsData("new");
    this._getGoodsData("sell");
  },
  mounted() {
    console.log(this.$refs);
  },
  methods: {
    //上拉加载更多
    loadMore() {
      console.log("加载更多");
      this._getGoodsData(this.defaultType)
    },
    scroll(pos) {
      this.isShowBackTop = (-pos.y) >1000
    },
    //点击返回顶部按钮
    clickBackTop() {
      console.log(this)
      this.$refs.scroll.scrollTo(0 , 0 ,500)
    },
    //监听tabs切换
    changeTabs(index) {
      switch (index) {
        case 0:
          this.defaultType = "pop";
          break;
        case 1:
          this.defaultType = "new";
          break;
        case 2:
          this.defaultType = "sell";
          break;
        default:
          break;
      }
    },
    _getHomeData() {
      //获取首页数据
      getHomeMultidata().then((res) => {
        this.swiperList = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    _getGoodsData(type) {
      const page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        console.log(res);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    bannerClick(index) {
      console.log(index);
      this._getGoodsData("pop");
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-content{
  height: calc( 100vh - 93px );

}
.swiper {
  margin-top: 44px;
  width: 100%;
  height: 180px;
  img {
    width: 100%;
    height: 100%;
  }
  /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
  }
}
.hot {
  display: flex;
  a {
    flex: 1;
    img {
      width: 100%;
    }
  }
}
.tab-control {
  position: sticky;
  top: 44px;
  background: #fff;
}
.home{
  position: relative;
  .back-top{
  position: fixed;
  right: 10px;
  bottom: 60px;
}
}
</style>
