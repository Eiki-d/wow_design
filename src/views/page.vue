<template>
  <div>
    <navbar></navbar>
    <pageheader></pageheader>
    <!-- <swiper :key="looplist.length" ref="myswiper">
      <router-link tag="li" to="/detail" class="swiper-slide" v-for="data in looplist" :key="data.id">
        <img :src="data.bannerImgSrc"/>
      </router-link>
    </swiper> -->
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar'
import pageheader from './page/pageHeader'
import navbar from '@/components/navbar'
// import swiper from '@/components/swiper'
import { Indicator } from 'mint-ui';
import axios from 'axios'
export default {
  data(){
    return {
      // looplist: []
    }
  },
  mounted () {
    Indicator.open({
      spinnerType: 'fading-circle'
    });
    axios({
      url: "/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1576916525082"
    }).then(res=>{
      Indicator.close();
    })
    window.onscroll = this.handleScroll
  },
  components: {
    pageheader,
    navbar,
    tabbar
  }
}
</script>
<style lang="scss" scoped>
  
</style>