<template>
  <div class="quality" v-if="looplist">
    <div class="banner_center">
      <swiper :key="looplist.length" ref="myswiper">
        <router-link tag="li" to="/detail/:id" class="swiper-slide" v-for="data in looplist" :key="data.id">
          <img :src="data.bannerImgSrc"/>
        </router-link>
      </swiper>
    </div>
    <!-- 横向菜单 -->
    <div class="menu-rol">
      <div class="menu-head">
        <h2 v-html="title1"></h2>
        <h3 v-html="des1"></h3>
      </div>
      <swiper :options="{
        loop:false,
        pagination:{},
        slidesPerView: 3,
        spaceBetween: 15,
        freeMode: true,
      }" class="sofa" swipername="sofa" :key="sofalist.length">
        <div class="swiper-slide" v-for="(item,index) in sofalist" :key="index" @click="handleClick()">
          <img :src="item.productImg" style="height: 90px;"/>
          <p>{{item.productTitle}}</p>
          <span>￥{{item.sellPrice}}</span>
          <span v-if="item.sellPrice===item.originalPrice?true:false">￥{{item.originalPrice}}</span>
        </div>
      </swiper>
    </div>
    <!-- 纵向菜单 -->
    <div class="menu-col">
      <div class="desk">
        <div class="desk_menu-head">
          <h2 v-html="title2"></h2>
          <h3 v-html="des2"></h3>
        </div>
        <router-link tag="li" v-for="(item,index) in desklist" class="goodslist" :key="index" to="/detail/:id">
          <div class="pics">
            <img :src="item.productImg" alt="">
            <div class="list_title">
              <span>{{item.productName}}</span>
              <p>￥{{item.sellPrice}}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="chair">
        <div class="chair_menu-head">
          <h2 v-html="title3"></h2>
          <h3 v-html="des3"></h3>
        </div>
        <router-link tag="li" v-for="(item,index) in chairlist" class="goodslist" :key="index" to="/detail/:id">
          <div class="pics">
            <img :src="item.productImg" alt="">
            <div class="list_title">
              <span>{{item.productName}}</span>
              <p>￥{{item.sellPrice}}</p>
            </div>
          </div>
        </router-link>
      </div>
      <div class="hot">
        <div class="hot_menu-head">
          <h2 v-html="title4"></h2>
        </div>
        <div class="hot_list">
          <router-link to="data_new" tag="li" v-for="(data,index) in hotlist" :key="index">
            <img :src="data.bannerImgSrc" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <div class="bottom_end">已经到底了</div>
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
      // 轮播
      // looplist: [],
      sofalist: [],
      title1: '',
      title2: '',
      title3: '',
      title4: '',
      otherlist: [],
      chairlist: [],
      desklist: [],
      hotlist: [],
      des1: '',
      des2: '',
      des3: '',
      looplist:null
    }
  },
  mounted(){
    Axios({
      url: '/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1577448669826'
    }).then(res=>{
      // console.log(this.looplist)
      this.looplist = res.data.data.modules[0].moduleContent.banners

      this.sofalist = res.data.data.modules[1].moduleContent.products
      this.title1 = res.data.data.modules[1].moduleName
      this.des1 = res.data.data.modules[1].moduleDescription
      // console.log(this.sofalist.productImg)
      this.desklist = res.data.data.modules[2].moduleContent.products
      this.title2 = res.data.data.modules[2].moduleName
      this.des2 = res.data.data.modules[2].moduleDescription

      this.chairlist = res.data.data.modules[3].moduleContent.products
      this.title3 = res.data.data.modules[3].moduleName
      this.des3 = res.data.data.modules[3].moduleDescription

      this.hotlist = res.data.data.modules[4].moduleContent.banners
      console.log(this.hotlist)
      this.title4 = res.data.data.modules[4].moduleName
    })
  },
  methods: {
    handleClick(){
      this.$router.push('/detail/:id')
    }
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
.menu-rol {
  background: white;
  margin-top: .3rem;
  .menu-head {
    padding: 0.26rem 0rem 0rem;
    text-align: center;
    h2 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      // padding-bottom: 0.2rem;
      margin-bottom: 0px;
    }
  }
  .sofa {
    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    span:nth-of-type(1) {
      font-size: 0.24rem;
    }
    span:nth-of-type(2) {
      text-decoration: line-through;
      font-size: 0.22rem;
      color: #ccc;
    }
    .swiper-slide {
      width : 1.8rem !important;
    }
  }
}
.desk {
  background: white;
  width: 100%;
  margin-top: .3rem;
  overflow: hidden;
  // display: flex;
  // justify-content: space-around;
  .goodslist {
    width : 50%;
    float: left;
    background: white;
    border-bottom: 1px solid #F5F5F5;
    border-right: 1px solid #F5F5F5;
    .pics {
      // width: 50%;
      img {
        width: 100%;
      }
      .list_title {
        padding: 0rem 0.32rem;
        position: relative;
        margin-top: 0.2rem;
        // font-size: 0;
        span {
          display: block;
          width: 90%;
          padding-top: 0.1rem;
          color: #808080;
          font-size: 0.28rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        p {
          font-size: 0.32rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
  .desk_menu-head {
    padding: 0.26rem 0rem 0rem;
    text-align: center;
    h2 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      padding-bottom: 0.2rem;
      margin-bottom: 0px;

    }
  }
}
.chair {
  background: white;
  width: 100%;
  margin-top: .3rem;
  overflow: hidden;
  // display: flex;
  // justify-content: space-around;
  .goodslist {
    width : 50%;
    float: left;
    background: white;
    border-bottom: 1px solid #F5F5F5;
    border-right: 1px solid #F5F5F5;
    .pics {
      // width: 50%;
      img {
        width: 100%;
      }
      .list_title {
        padding: 0rem 0.32rem;
        position: relative;
        margin-top: 0.2rem;
        // font-size: 0;
        span {
          display: block;
          width: 90%;
          padding-top: 0.1rem;
          color: #808080;
          font-size: 0.28rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        p {
          font-size: 0.32rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
  .chair_menu-head {
    padding: 0.26rem 0rem 0rem;
    text-align: center;
    h2 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0
    }
    h3 {
      font-size: 0.24rem;
      color: #808080;
      padding-bottom: 0.2rem;
      margin-bottom: 0px;

    }
  }
}

  .hot {
    background: white;
    text-align: center;
    h2 {
      font-weight: bold;
      font-size: 0.36rem;
      color: #333;
      margin: 0.3rem 0;
    }
    .hot_menu-head {
      margin-top: .3rem;
      background: white;
      padding: 0.26rem 0rem 0rem; 
      h2 {
        font-weight: bold;
        font-size: 0.36rem;
        color: #333;
        margin: 0.3rem 0;
        padding-bottom: .3rem;
      }
    }
    .hot_list {
      padding-bottom: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        width:.75rem;
        height: .89rem;
        flex-grow: 1;
        margin-right: 0.3rem;
      }
      img {
        width :100%;
      }
    }
  }
  .bottom_end {
    height: 50px;
    line-height: 50px;
    text-align: center;
    
  }

</style>

