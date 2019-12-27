<template>
  <div class="quality" v-infinite-scroll="myLoadMore" infinite-scroll-disabled="loading"
      infinite-scroll-distance="100" infinite-scroll-immediate-check	="false">
      <!-- <swiper :key="looplist.length" ref="myswiper">
        <router-link tag="li" to="/detail" class="swiper-slide center_banner" v-for="data in looplist" :key="data.id">
          <img :src="data.bannerImgSrc"/>
        </router-link>
      </swiper> -->
    <!-- 横向菜单 -->
    <div class="menu-h">
      <!-- <div class="page-module-title">
        <h2>{{data.moduleContent.name}}</h2>
        <h3>{{data.moduleDescription}}</h3>
      </div> -->
      <swiper class="sofaSwiper" :key="sofalist.length" ref="myswiper" :options="{
        loop:false,
        pagination:{},
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
      }">
        <router-link tag="li" to="/detail" class="swiper-slide goods_banner" v-for="(data,index) in sofalist" :key="index">
        <img :src="data.productImg"/>
        <p>{{data.productTitle}}</p>
        <span>￥{{data.sellPrice}}</span>
      </router-link>
      </swiper>
    </div>
    <!-- 纵向菜单 -->
    <!-- <menucontent>
      <div v-for="data in datalist" :key="data.moduleContent.id" class="quality-page-module">
        <div class="page-module-title">
          <h2>{{data.moduleContent.name}}</h2>
          <h3>{{data.moduleDescription}}</h3>
        </div>
        <ul class="complex">
          <li v-for="i in data.moduleContent.products" :key="i.id" class="center_li" @click="handleClick()">
            <div>
              <img :src="i.productImg" alt="">
              <span>{{i.productTitle}}</span>
              <p>￥{{i.sellPrice}}</p>
            </div>
          </li>
        </ul>
        <div class="page-module-more">
        </div>
      </div>
    </menucontent> -->

  </div>
</template>
<script>
import swiper from "@/components/swiper"
import menucontent from "@/components/quality/menu"
import Axios from 'axios'
import Vue from 'vue'
// import { Indicator } from 'mint-ui';
Vue.filter('myfilter', function (list) {
  return list.map(item => item.name).join(' ')
})

export default {
  components: {
    swiper
    // menucontent
  },
  data(){
    return {
      looplist: [],
      datalist: [],
      current:1,
      total: [],
      sofalist: []
    }
  },
  mounted(){
    Axios({
      url: '/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1577347160087'
    }).then(res=>{
      // console.log(this.looplist)
        this.looplist = res.data.data.modules[0].moduleContent.banners
        this.datalist = res.data.data.modules
        this.sofalist = res.data.data.modules[1].moduleContent.products
        console.log(this.sofalist)
        // this.menulist = res.data.data.modules[1]
        this.total = res.data.data.total
        // console.log(this.menulist)
        console.log(this.total)
    })
  },
  methods: {
    handleClick(id){
      // console.log("asd")
      this.$router.push({name:"productGroup",params: {id : id}}),
      localStorage.setItem("banner_id",this.$route.params.id)
      localStorage.getItem("banner_id")||this.$route.params.id

      // console.log(this.$route)
      // this.$router.back() //返回上一页
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
  }
}
</script>
<style lang="scss" scoped>
.quality {
  margin-bottom: 1rem;
  .center_banner {
      height: 4.98rem;
      width : 100%;
      img {
        height: 100%;
        width: 100%;
      }
  }
  .sofaSwiper {

      background: white;
    .goods_banner {
      // width: 1.8rem !important;
      img {
        width: 100%;
      }  
    }
  }
  .menu-h {
    .goods_banner {
      margin-right: .3rem !important;
      p {
        width: 90%;
        font-size: 0.24rem;
        color: #808080;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .complex {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // justify-content: space-around;
    .center_li {
      align-content: center;
      width: 50%;
      box-sizing: border-box;
      background: white;
      border-bottom: .01rem solid #F5F5F5;
      border-right: .01rem solid #F5F5F5;
      img {
        width: 100%;
        display: block;
      }
      span {
        display: block;
        width: 90%;
        font-size: 0.24rem;
        color: #808080;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

}

</style>
