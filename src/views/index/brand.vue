<template>
<div class="all">
  <div class="header">
    <img style="border-radius:1rem" src="https://img.wowdsgn.com/brand/logo/normaAPP800.jpg?imageslim">
    <h3>Normann Copenhagen</h3>
    <span class="jianjie">Normann Copenhagen是丹麦设计公司，公司在简约时尚的设计领域中秉承原创，突破和优异的设计理念。或者换句话来说，就是公司致力于突破传统观念的束缚，通过创新和优秀的设计理念来达到发扬公司品牌形象的目的。
公司代表的作品集是由广泛且持续发展的多功能家具系列，灯具系列，纺织品系列和家具备件组成。
Normann Copenhagen展现的独特产品设计包括配饰、吊灯、橱柜、边桌、玻璃器皿和钟表。1999年Jan Andersen和Poul Madsen强强联手，力争在设计领域发挥作用。Normann Copenhagen从一间小店铺起步，2005年搬到了一座1700平米的老影院。有旗舰店是事实，Normann Copenhagen除荣获时髦店铺的称号外，还靠产品设计赢得了超过40个奖项。</span>
  </div>

  <div class="lie">
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100" infinite-scroll-immediate-check="false">
          <router-link v-for="data in datalist" :key="data.brand_id" @click="handleClick(data.brand_id)" tag="li" to="/detail/:id" class="list">
              <img :src="data.productImg">
              <p class="title">{{data.productTitle}}</p>
              <span class="pri">￥{{data.sellPrice}}</span>
              <span class="del" v-if="data.originalPrice==data.sellPrice?false:true">￥{{data.originalPrice}}</span>
              <p class="slogan">{{data.prizeOrSlogan}}</p>
          </router-link>
           <p class="more">上拉加载更多</p>
      </ul>
  </div>

</div>
</template>
<script>
import Axios from 'axios'
import Vue from 'vue'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return{
      datalist:[],
      brand_id: localStorage.getItem('brand_id'),
      current:1,
      loading:false,
      total:0,
      content:''
    }
  },
  mounted(){
    Indicator.open({
      spinnerType: 'fading-circle'
    })
    Axios({
      url: `/brand/${ localStorage.getItem('brand_id') || this.$route.params.id}/products?pageSize=10&currentPage=1&_=1577495938714`,
    }).then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data
      this.total = res.data.data.total
      Indicator.close()
    })
  },

  methods: {
    handleClick(id){
      localStorage.setItem("brand_id",this.$route.params.id)
    }
  },
  loadMore(){
    this.current++;
    this.loading = true;
    if(this.datalist.length>=this.total){
      return;
    }
    Axios({
      url: `/brand/${ localStorage.getItem('brand_id') || this.$route.params.id}/products?pageSize=10&currentPage=${this.current}&_=1577495938714`,
    }).then(res => {
      console.log(res.data.data)
      this.datalist = [...this.datalist, ...res.data.data]
      Indicator.close();
      this.loading = false;
    })
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  padding: .3rem .3rem 0;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  img{
    width: 2rem;
    height: 2rem;
    margin: .2rem 0;
  }
  h3{
    text-align: center;
    font-size: .34rem;
    color: #000;
    margin: 0;
    font-weight: bold;
    padding-bottom:.2rem;
  }
  .jianjie{
    font-size: .3rem;
    color: #666;
    text-align: justify;
    line-height: .5rem;
    margin-bottom: .4rem;
  }
}

// 列表
.lie{
    background: #fff;
ul{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom:2rem; 
    background: #fff;
    margin: 0;
    .list {
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
    .more{
    font-size: .26rem;
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    text-align: center;
    padding: 0;
    border-bottom: 1px solid #f0f0f0;

    }
}

}
</style>
