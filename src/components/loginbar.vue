<template>
  <div class="container">
    <div class="login_nav">
      <router-link tag="li" to="/login/password" activeClass="active"><span>密码登录</span></router-link>
      <router-link tag="li" to="/login/note" activeClass="active"><span>短信登录</span></router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
   .login_nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 0.88rem;
    background: #fcfcfc;
    margin-top: 0.3rem;
    font-size: 0.28rem;
    li {
      padding: 0 0.24rem;
      height: 0.88rem;
      line-height: 0.88rem;
    }
    .active {
      border-bottom: 0.06rem solid #202020;
    }
  }
</style>
