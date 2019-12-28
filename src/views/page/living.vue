<template>
  <div>
    <swiper :key="looplist.length" ref="myswiper">
      <router-link tag="li" to="/detail" class="swiper-slide" v-for="data in looplist" :key="data.id">
        <img :src="data.bannerImgSrc"/>
      </router-link>
    </swiper>
  </div>
</template>
<script>
import swiper from "@/components/swiper"
import Axios from 'axios'

export default {
  components: {
    swiper
  },
  data(){
    return {
      looplist: []
    }
  },
  mounted(){
    Axios({
      url: '/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1577352566939'
    }).then(res=>{
      // console.log(this.looplist)
      this.looplist = res.data.data.modules[0].moduleContent.banners
    })
  },
  methods: {

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

