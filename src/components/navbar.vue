<template>
  <div>
    <header class="header">
      <img src="https://m.wowdsgn.com/static/img/titleView.png" alt="">
      <div class="searchInfo">
        <i class="iconfont icon-sousuo-m"></i>
        <input type="search" name="searchInput" id="searchInput" placeholder="搜索我的尖叫好物">
      </div>
    </header>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .header {
    background: #fff;
    height: 0.88rem;
    line-height: 0.88rem;
    position: relative;
    padding: 0rem 0.2rem 0rem 0.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      display: inline-block;
      width: 1.3rem;
      vertical-align: middle;
      width: 1.3rem;
      // height: 100%;
      margin-top: 0.06rem;
      margin-bottom: 0.06rem;
    }
    .searchInfo {
      width: 5.4rem;
      height: 0.56rem;
      background-color: #F5F5F5;
      border-radius: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .iconfont {
        width: 0.4rem;
        margin: 0 0.1rem;
      }
      #searchInput {
        background-color: #F5F5F5;
        height: 0.54rem;
        border: 0px solid #000;
      }
    }
  }
</style>