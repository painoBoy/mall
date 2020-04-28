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
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
        <img width="375" height="180" :src="item.image" @click="bannerClick(index)" alt />
        <!-- {{item.image}} -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <recommend :recommend="recommend"></recommend>
    <div class="hot">
      <a href="http://act.mogujie.com/zzlx67">
        <img src="../../assets/images/home/recommend_bg.jpg" alt />
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import NavBar from "../../components/navbar/NavBar";
import Recommend from "./children/Recommend";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

import "swiper/css/swiper.css";

import { getHomeMultidata } from "../../network/api";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    Recommend
  },
  data() {
    return {
      pop: "",
      swiperList: [],
      recommend: [],
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    this._getHomeData();
  },
  methods: {
    _getHomeData() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.swiperList = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    bannerClick(index) {
      console.log(index);
    }
  }
};
</script>

<style lang="scss" >
.swiper {
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
}
.hot {
  display: flex;
  img {
    width: 100%;
  }
}
</style>