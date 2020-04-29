<template>
  <div class="warrper" ref="warrper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    data() {
        return {
            scroll: null,
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.warrper, {
            click:true
        })
    }
}
</script>

<style>

</style>