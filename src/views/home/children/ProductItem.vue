<template>
  <div class="product-item">
    <img :src="productItem.show.img" alt="" />
    <div class="prodict-info">
      <div class="item-title">{{ productItem.title }}</div>
      <span class="price">¥{{ productItem.price }}</span>
      <span class="collect">{{ productItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.product-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
  img {
    border-radius: 5px;

    width: 100%;
  }
  .prodict-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
    .item-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price {
      padding-left:5px;
      float: left;
      color: #ff5777;
      margin-right: 20px;
    }
    .collect {
      padding-right: 5px;
      float: right;
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: 0;
      width: 14px;
      height: 14px;
      background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>
