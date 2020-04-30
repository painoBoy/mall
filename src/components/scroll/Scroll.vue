<template>
  <div class="warrper" ref="warrper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 1,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this._initScroll();
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.warrper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      });
      // 2.将监听事件回调
      this.scroll.on("scroll", (pos) => {
        this.$emit("scroll", pos);
      });

      // 3.监听上拉到底部
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style></style>
