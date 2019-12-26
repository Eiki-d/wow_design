<template>
  <div class="page_index" v-infinite-scroll="myLoadMore" infinite-scroll-disabled="loading"
      infinite-scroll-distance="100" infinite-scroll-immediate-check	="false">
    <ul class="page-content">
      <li class="page-banner-list" v-for="item in datalist" :key="item.moduleId">

        <div class="banner-img">
          <img :src="item.moduleContent.bannerImgSrc" alt="">
        </div>

        <div class="page-module-banner-group-fixed-landscape">
          <div v-for="i in item.moduleContent.banners" :key="i.id">
            <img :src="i.bannerImgSrc" alt="">
          </div>
        </div>

      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
import Vue from 'vue'
import { Indicator } from 'mint-ui';

export default {
  data(){
    return {
      titlelist: [],
      datalist: [],
      current: 3,
      total:0,
      loading:false
    }
  },
  mounted(){
    Axios({
      url: '/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1577178267979'
    }).then(res=>{
        
        this.datalist = res.data.data.modules
        this.total = res.data.data.total
        console.log(this.datalist)
    })
  },
  methods: {
    myLoadMore(){
      console.log('到底了！！！')
      this.current++;
      this.loading = true;
      if(this.datalist.length>=this.total){
          return;
      }

      Axios({
        url: `/v2/page?pageId=1&tabId=1&currentPage=${this.current}&pageSize=8&_=1577178267979`
      }).then(res => {
        console.log(res.data.data)
        this.datalist = [...this.datalist,...res.data.data.modules]
        this.loading = false;
        // console.log(this.datalist)
      })
    }
  },

}
</script>
<style lang="scss" scoped>
  .page_index {
    width:100%;
    .page-content {
      margin-top: .4rem;
    }
    .banner-img {
      img {width: 100%;}
    }
    .page-banner-list:nth-of-type(1) {
        display: none;
      }
    .page-module-banner-group-fixed-landscape {
      width:100%;
      // padding: 0 0.3rem;
      display: flex;
      justify-content: space-around;
      background: white;
      // div:nth-of-type(1) {
      //   display: none;
      // }
      div {
        padding: 0.3rem;
      }
      img {
        width: 100%;
      }
    }
  }

</style>
