<!--
 * @Author: your name
 * @Date: 2020-04-29 01:37:49
 * @LastEditTime: 2020-04-29 02:11:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-mall/src/views/home/children/Recommend.vue
 -->


<template>
  <div class="recommend">
    <ul>
      <li v-for="(item) in recommend" :key="item.acm" @click="handleLink(item.link)">
        <img :src="item.image" alt />
        <div class="item-name">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods:{
      handleLink(url) {
          window.location.href = url;
      }
  }
};
</script>

<style lang="scss">
ul {
  padding: 0 0 10px 0;
  border-bottom:10px solid #efefef;
  margin-top: 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      flex: 1;
      width: 70px;
    }
  }
}
.item-name {
    padding: 5px 0;
  text-align: center;
}
</style>