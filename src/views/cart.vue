<template>
  <div>
    <!-- cart -->
    <div class="cart-warp">
      <div class="header clearfix">
        <skipbar></skipbar>
      </div>
      <!-- <div class="empty-cart">
        <img src="//h5rsc.vipstatic.com/hhcstatic/static/img/empty-cart.deb7938.png" alt="">
        <p class="tips">好货那么多，一件都不抢吗？</p>
        <div class="btn" @click="handleClick()">抢好货</div>
      </div> -->
    </div>
    <div class="cart-item">
      <p class="title"></p>
      <div class="product-warp">
        <div class="item-group">
          <div class="item-warp">
            <!-- <div class="item clearfix"> -->
              <div id="cart" class="container-fluid">
        <div class="container">
            <div class="cart_title">
                <div><input class="cart_title_selectAll" type="checkbox"> 全选</div>
                <div>商品</div>
                <div>单价</div>
                <div>数量</div>
                <!-- <div>小计</div>
                <div>操作</div> -->
            </div>
            <ul class="cart_list"></ul>
            <div class="cart_computed">
                <div class="cart_computed_price">
                    <p>总计：¥ 0.00</p>
                    <p>已选择 0件商品</p>
                </div>
                <div class="cart_computed_btn">
                    <a href="#">立即结算</a>
                </div>
            </div>
        </div>
    </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import skipbar from '@/components/skipbar'
import axios from 'axios'
export default {
  components:{
    skipbar
  },
  data(){
    return {
      datalist:[]
    }
  },
  mounted(){
  },
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem("token")){
      next()
    }else{
      // next('/login')
      next()
    }
  },
  methods:{
    handleClick(){
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
<style scoped lang="scss">
.cart-warp{
  position: relative;
  padding-bottom: .8rem;
  .empty-cart{
    margin-top: 2rem;
    text-align: center;
    img{
      width: 3.6rem;
      margin: 0 auto;
      display: block;
      max-width: 100%;
    }
    .tips{
        color: #a4a4a4;
        font-size: .3rem;
      }
    .btn{
      width: 3.5rem;
      margin-top: .8rem;
      font-size: .3rem;
      color: #fff;
      line-height: 2.5em;
      background-color: #e42615;
      padding: 0 .07rem;
    }
  }
}
.cart-item{
  .footer{
    position: fixed;
    bottom: .5rem;
    width: 100%;
    height: 1rem;
    background-color: #333;
    color: #fff;
    z-index: 9;
    .pay-amount{
      float: left;
      margin: 0 .17rem;
      font-size: .3rem;
      line-height: 1rem;
      label{
        color: #d0d0d0
      }
    }
    .btn-submit{
      float: right;
      width: 3.3rem;
      color: #fff;
      font-size: .3rem;
      line-height: 1rem;
      padding: 0 .07rem;
      background-color: #dd2628;
      text-align: center;
      text-decoration: none;
    }
  }
  #cart{
    background: #f5f5f5;
    overflow: hidden;
    .cart_title{
        height:.6rem;
        display: flex;
        align-items: center;
        background:white;
        margin:.2rem 0;
        div{
            width:1.5rem;
            text-align: center;
        }
        div:nth-of-type(2){
            // flex:1;
            text-align: left;
        }
    }
    .cart_list{
        li{
            display: flex;
            align-items: center;
            background : white;
            margin:.1rem 0;
            padding:.2rem .1rem;
            div{
                width:1.5rem;
                text-align: center;
                .cart_list_text{ width:.4rem; height:.2rem; border:0.01rem #ccc solid; text-align: center;}
                span{ border:1rem #ccc solid; padding:0.02rem 0.05rem; cursor: pointer; user-select: none;}
            }
            div:nth-of-type(2){
                flex:1;
                text-align: left;
            }
            div:nth-of-type(5){
                color : red;
            }
            div:nth-of-type(6){
                cursor: pointer;
            }
        }
    }
    .cart_computed{
        height:1rem;
        background:white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: .2rem;
        .cart_computed_btn{
            width:1.8rem;
            background: #ca151e;
            line-height: 1rem;
            text-align: center;
            font-size:.3rem;
            margin-left:.3rem;
            a{ 
              text-decoration: none;
              color:white;
              }
        }
    }
  }
}
</style>