<template>
<div>
  <div class="inner_header">
    <router-link to='/page/index' tag='i' class="iconfont icon-shouye-1 icon1"></router-link>
    <h3 class="header">商品详情</h3>
    <router-link to='/classify' tag='i' class="iconfont icon-fenleishouye icon1"></router-link>
  </div>
  <ul>
    <!-- <router-link v-for="data in datalist" :key="data.productId">detail -->
      <!-- <img :src="data.content"> -->
    <!-- </router-link> -->
  </ul>
</div>
</template>

<script>
import Axios from 'axios'
export default {
  props:[],
  data () {
    return{
      // datalist:[]
    }
  },
  mounted () {
    Axios({
      url: `/itemdetail/spuInfos/10395?_=1577428034899`
    }).then(res => {
      console.log(res.data);
      this.datalist = res.data.data
      // this.total = res.data.data.total
      // Indicator.close();
    });
  }
}
</script>

<style lang="scss" scoped>
.inner_header{
    // box-sizing: border-box;
    display: flex;
    height: 1rem;
    // width: 100%;
    background: #fff;
    .header{
        flex: 1;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    // color: #000;
    font-size: .34rem;
    font-weight: bold;
    margin: 0;
    }
    .icon1{
        // z-index: 1;
        display: block;
        justify-content: center;
        align-items: center;
        display:flex;
        font-size: .4rem;
        font-weight: bold;
        // flex: 1;
    }
    .icon-shouye-1{
        margin-left: .3rem;
    }
    .icon-fenleishouye{
        align-content: flex-end;
        margin-right: .3rem;
    }
}
</style>
