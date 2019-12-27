<template>
  <div>
    <div class="banner_center">
      <swiper :key="looplist.length" ref="myswiper">
        <router-link tag="li" to="/detail" class="swiper-slide" v-for="data in looplist" :key="data.id">
          <img :src="data.bannerImgSrc"/>
        </router-link>
      </swiper>
    </div>
    <!-- 横向菜单 -->
    <div class="menu-rol">
      <div class="menu-head">
        <h2 v-html="title1"></h2>
        <p></p>
      </div>
      <swiper :options="{
        loop:false,
        pagination:{},
        slidesPerView: 4,
        spaceBetween: 15,
        freeMode: true,
      }" class="actors" swipername="actors">
        <div class="swiper-slide" v-for="(item,index) in sofalist" :key="index">
          <img :src="item.productImg" style="height: 90px;"/>
          <!-- <p>{{item.role}}</p> -->
        <p></p>

        </div>
      </swiper>
    </div>
    <!-- 纵向菜单 -->
    <div class="menu-col">

    </div>
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
      looplist: [],
      sofalist: [],
      title1: []
    }
  },
  mounted(){
    Axios({
      url: '/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1577352566939'
    }).then(res=>{
      // console.log(this.looplist)
      this.looplist = res.data.data.modules[0].moduleContent.banners
      this.sofalist = res.data.data.modules[1]
      this.title1 = this.sofalist.moduleDescription
      console.log(this.title)
    })
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.banner_center {
  .swiper-slide {
    height: 4.98rem;
    img {
      height: 100%;
      width: 100%;
    }
  }

}

</style>

