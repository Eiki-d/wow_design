<template>
  <div>
    <div class="header_other">
      <router-link tag="a" to="page/index" class="iconfont icon-shouye-1"></router-link>
      <h3>登录</h3>
      <router-link tag="a" to="/register">注册</router-link>
    </div>
    <loginbar></loginbar>
    <router-view></router-view>
  </div>
</template>
<script>
import loginbar from '@/components/loginbar'
export default {
  components: {
    loginbar
  }
}
</script>
<style lang="scss" scoped>
  // .bottom-tab {
  //   display: none;
  // }
  .header_other {
    display: flex;
    background: #fff;
    height: 0.88rem;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.2rem 0rem 0.2rem;
    border-bottom: 1px solid #f5f5f5;
    font-size: .28rem;
    a {
      display: inline-block;
      width: 0.64rem;
      height: 0.64rem;
      line-height: 0.64rem;
      color: #2C3030;
      font-size: .3rem;
    }
    .iconfont {
      font-size: .5rem;
    }
    h3 {
      color: #000;
      font-size: 0.34rem;
      font-weight: bold;
      margin: 0; 
      line-height: 0.34rem;
    }
  }
  
</style>
