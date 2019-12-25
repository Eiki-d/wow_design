<template>
  <div>
    <navbar></navbar>
    <pageheader></pageheader>
    <swiper :key="looplist.length" ref="myswiper">
      <router-link tag="li" to="/detail" class="swiper-slide" v-for="data in looplist" :key="data.id">
        <img :src="data.bannerImgSrc"/>
      </router-link>
    </swiper>
    <router-view></router-view>
  </div>
</template>
<script>
import pageheader from './page/pageHeader'
import navbar from '@/components/navbar'
import swiper from '@/components/swiper'
import axios from 'axios'
export default {
  data(){
    return {
      looplist: []
    }
  },
  mounted () {
    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'fading-circle'
    // });
    axios({
      url: "/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1576916525082"
    }).then(res=>{
      // console.log(res.data.data.modules[0].moduleContent.banners)
      this.looplist = res.data.data.modules[0].moduleContent.banners
      // Indicator.close();
    })
    window.onscroll = this.handleScroll
  },
  components: {
    pageheader,
    navbar,
    swiper
  }
}
</script>
<style lang="scss" scoped>
  .swiper-slide {
    height: 4.98rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
</style>