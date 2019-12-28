<template>
<div>
  <swiper :key="looplist.length" ref="myswiper">
    <router-link tag="li" to="/detail" class="swiper-slide" v-for="data in looplist" :key="data.id">
      <img :src="data.bannerImgSrc"/>
    </router-link>
  </swiper>
  <div class="page_index" v-infinite-scroll="myLoadMore" infinite-scroll-disabled="loading"
      infinite-scroll-distance="100" infinite-scroll-immediate-check	="false">
    <ul class="page-content">
      <li class="page-banner-list" v-for="item in datalist" :key="item.moduleId">
        <div class="banner-img">
          <img :src="item.moduleContent.bannerImgSrc" alt="">
        </div>
        
        <div class="page-module-banner-group-fixed-landscape">
          <div v-for="i in item.moduleContent.banners" :key="i.bannerLinkTargetId" @click="i.bannerLinkType==6?handleClick(i.bannerLinkTargetId):(i.bannerLinkType==10||i.bannerLinkType==11?handleClick2(i.bannerLinkTargetId):handleClick3(i.bannerLinkTargetId))">
            <img :src="i.bannerImgSrc" alt="">
          </div>
        </div>
      </li>
    </ul>
  </div>
  </div>
</template>
<script>
import Axios from 'axios'
import swiper from '@/components/swiper'
import Vue from 'vue'
// import { Indicator } from 'mint-ui';
Vue.filter('myfilter', function (list) {
  return list.map(item => item.name).join(' ')
})
export default {
  components: {
    swiper
  },
  data(){
    return {
      titlelist: [],
      datalist: [],
      looplist: [],
      current: 3,
      total:0,
      loading:false
    }
  },
  mounted(){
    // console.log(this.$route)
    Axios({
      url: '/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1577178267979'
    }).then(res=>{
      // console.log(res.data.data.modules[0].moduleContent.banners)
        this.looplist = res.data.data.modules[0].moduleContent.banners
        this.datalist = res.data.data.modules
        this.total = res.data.data.total
        // console.log(this.datalist)
    })
  },
  methods: {
    handleClick2(bannerLinkTargetId){
      // console.log("asd")
      this.$router.push({name:"productGroup",params: {id : bannerLinkTargetId}}),
      localStorage.setItem("banner_id",this.$route.params.id)
      localStorage.getItem("banner_id")||this.$route.params.id

      // console.log(this.$route)
      // this.$router.back() //返回上一页
    },

    handleClick(bannerLinkTargetId){
      // console.log("132")
      this.$router.push({name:"detail",params: {id : bannerLinkTargetId}}),
      localStorage.setItem("banner_id",this.$route.params.id)
      localStorage.getItem("banner_id")||this.$route.params.id
    },
    handleClick3(bannerLinkTargetId){
      // console.log("132")
      this.$router.push({name:"brand",params: {id : bannerLinkTargetId}}),
      localStorage.setItem("brand_id",this.$route.params.id)
      localStorage.getItem("brand_id")||this.$route.params.id
    },

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
        // console.log(res.data.data)
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
    .swiper-slide {
      height: 4.98rem;
      img {
        height: 100%;
        width: 100%;
      }
    }

</style>
