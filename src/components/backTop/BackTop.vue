<template>
  <div class="back-top" @click="ClickBackTop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    ClickBackTop() {
      this.$emit("backTop");
    },
  },
};
</script>

<style lang="scss" scoped>
.back-top {
  img {
    width: 43px;
    height: 43px;
  }
}
</style>
