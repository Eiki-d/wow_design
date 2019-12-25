<template>
<!-- 个人中心 -->
  <div class="center">
    <div class="user_center_header">
      <skipbar></skipbar>
      <div class="user_icon" @click="handleClick()"></div>
      <div class="user_name">用户名</div>
    </div>

    <ul class="user_status_list">
      <router-link to="/orders" tag="li" class="status">
        <i class="iconfont icon-ziyuan"></i>
        <p>全部订单</p>
      </router-link>
      <router-link to="/unpaid" tag="li" class="status">
        <i class="iconfont icon-dengdaizhifu"></i>
        <p>待支付</p>
      </router-link>
      <router-link to="/receiving" tag="li">
        <i class="iconfont icon-daishouhuo"></i>
        <p>待收货</p>
      </router-link>
    </ul>
    <router-view></router-view>
    <ul class="user_home_list">
      <router-link to="/address_message" tag="li" class="address_message">
        <i class="iconfont icon-weibiaoti2fuzhi08"></i>
        <span>地址管理</span>
        <i class="iconfont icon-jiantou"></i>
      </router-link>
      <router-link to="/address" tag="li" class="address">
        <i class="iconfont icon-shouhuodizhi"></i>
        <span>收货地区</span>
        <i class="iconfont icon-jiantou"></i>
      </router-link>
      <router-link to="/about" tag="li" class="about">
        <i class="iconfont icon-biaoqian"></i>
        <span>关于我们</span>
        <i class="iconfont icon-jiantou"></i>
      </router-link>
      <router-link to="/information" tag="li" class="message">
        <i class="iconfont icon-erji"></i>
        <span>资讯</span>
        <i class="iconfont icon-jiantou"></i>
      </router-link>
    </ul>
  </div>
</template>
<script>
import skipbar from '@/components/skipbar'
export default {
  components: {
    skipbar
  },
  methods: {
    handleClick(){
      
    }
  },
  mounted(){
  },
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem('123')){
      next()
    }else{
      next('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
  .user_center_header {
    height: 4.11rem;
    background: url("https://img.wowdsgn.com/product-group/images/0e42a539-b9ab-4a28-9a80-1fe2516c727a_2dimension_750x500.jpg?imageslim") no-repeat;
    .user_icon {
      width: 1.36rem;
      height: 1.28rem;
      margin: 0 auto;
      position: relative;
      top: .8rem;
      background-image: url("//h5rsc.vipstatic.com/hhcstatic/static/img/default_avatar.6458599.png");
      background-size: 100%;
      border: .03rem solid #eca6ac;
      border-radius: 50%;
    }
    // .center_header {
      
    // }
    .user_name {
      text-align: center;
      color: #fff;
      position: relative;
      top: 1.06rem;
    }
  }
  .user_status_list {
    background: white;
    display: flex;
    justify-content: space-around;
    .status::after {
      content: "";
      width: .02rem;
      height: .94rem;
      background: #cdcdcf;
      display: block;
      position: absolute;
      right: 0;
      top: .54rem;
    }
    li {
      float: left;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 1.54rem;
      padding-top: .48rem;
      i {
        font-size: .4rem;
      }
    }
    li:nth-of-type(3) i {
      font-size: .5rem !important;
      line-height: .5rem;
      padding-bottom: .05rem;
    }
    li:nth-of-type(2) i {
      font-weight: 600;
    }
  }
  .user_home_list {
    background: #fff;
    padding: 0 .36rem;
    margin-top: .13rem;
    li {
      height: 1.3rem;
      display: flex;
      justify-content: space-between;
      border-bottom: .02rem solid #ebebeb;
      align-items: center;
      i {
        font-size: .38rem;
      }
      span {
        padding-left: .55rem;
        flex: 1;
      }
    }
  }
</style>
