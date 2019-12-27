<template>
  <div class="skipbar">
    <div class="center_header">
      <router-link tag="a" to="/page" class="right-top-wrap iconfont icon-shouye-1"></router-link>
      <i @click="handleClick()" class="left-top-wrap iconfont icon-jiantou1"></i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .left-top-wrap {
    position: fixed;
    top: .26rem;
    left: .26rem;
    z-index: 9;
    font-size: .34rem;
    color: #111; 
    font-weight: 600;
  }
  .right-top-wrap {
    position: fixed;
    top: .26rem;
    right: .26rem;
    z-index: 9;
    font-size: .34rem;
    color: #111; 
    font-weight: 600;
  }
</style>
