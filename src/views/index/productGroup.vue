<template>
  <div>
    <!-- <skipbar></skipbar> -->
    <!-- 固定图片 -->
    <img src="https://img.wowdsgn.com/product-group/images/1342dfa2-f69c-4f0a-95da-ce127ae58ded_2dimension_1125x750.jpg?imageslim" class="headerImg">
    <!-- 产品列表 -->
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100" infinite-scroll-immediate-check="false">
      <router-link v-for="data in datalist" :key="data.banner_id" @click="handleClick(data.banner_id)" tag="li" to="/detail/:id">
          <img :src="data.productImg">
          <p class="title">{{data.productTitle}}</p>
          <span class="pri">￥{{data.sellPrice}}</span>
          <span class="del" v-if="data.originalPrice==data.sellPrice?false:true">￥{{data.originalPrice}}</span>
          <p class="slogan">{{data.prizeOrSlogan}}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
// import skipbar from '@/components/skipbar'
import Axios from 'axios'
import { Indicator } from 'mint-ui';
export default {
  components: {
    // skipbar
  },
  data(){
    return {
      banner_id: localStorage.getItem('id'),
      datalist:[],
      current:1,
      loading:false,
      total:0,
      content:''
    }
  },
  
  methods: {
    handleClick(id){
      localStorage.setItem("banner_id",this.$route.params.id)
    },

    loadMore(){
      // console.log('到底了！！！')
      this.current++;
      this.loading = true;
      if(this.datalist.length>=this.total){
          return;
    }
      

      Axios({
        url:  `/pages/productGroup/${localStorage.getItem("banner_id")||this.$route.params.id}/products?currentPage=${this.current}&_=1577434002691`
      }).then(res => {
        console.log(res.data.data)
        this.datalist = [...this.datalist,...res.data.data]
        Indicator.close();
        this.loading = false;
        // console.log(this.datalist)
      })
    },
  },

  mounted(){
    Indicator.open({
      spinnerType: 'fading-circle'
    })
    console.log(this.$route.params.id,111)
    Axios({
      url : `/pages/productGroup/${localStorage.getItem("banner_id")||this.$route.params.id}/products?currentPage=1&_=1577434002691`
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.data
      this.total = res.data.data.total
      Indicator.close()
    })
  }
}
</script>
<style lang="scss" scoped>
.headerImg{
  width: 100%;
}
ul{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom:2rem; 
    background: #fff;
    margin: 0;
    li {
        flex-wrap: wrap;
        box-sizing: border-box;
        align-content:center;
        overflow: hidden;
        height: 5.6rem;
        width: 50%;
        border-bottom: .02rem solid #f0f0f0;
        border-right: .02rem solid #f0f0f0;
        img {
            width:100%;
        }
    }
    p{
        margin: 0 !important;
    }
    .title{
        width: 90%;

        padding: .25rem .05rem .05rem .3rem;
        color: #808080;
        font-size: .25rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .pri{
        padding-left: .3rem;
        font-size: .26rem;
        color: #000;
    }
    .del{
        color: #aaa;
        padding-left: .1rem;        
        font-size: .2rem;
        text-decoration: line-through;
    }
    .slogan{
        width: 90%;
        padding-left: .3rem;
        font-size: .22rem;
        color: #808080;
        padding-top: .05rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>

