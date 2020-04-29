<template>
  <div class="product-list">
    <product-item
      v-for="item in productData"
      :key="item.iid"
      :productItem="item"
    ></product-item>
  </div>
</template>

<script>
import ProductItem from "@/views/home/children/ProductItem";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  props: {
    productData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
