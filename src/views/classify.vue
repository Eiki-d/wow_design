<template>
  <div>
    <navbar></navbar>
    <!-- <div>classify</div> -->
    <div>
      <!-- 家具 -->
    <img src="https://m.wowdsgn.com/static/img/furniture.png">
    <ul>
      <div v-for="(data,index) in classlist" tag='li' :key="index"  @click="handleClick(data.myid,data.title)">
        {{data.title}}<i :class="'iconfont '+data.icon"></i>
        <!-- <img src="./public.jiantou.png"> -->
      </div>
    </ul>
    <!-- 家居 -->
    <img src="https://m.wowdsgn.com/static/img/household.png">
    <ul class="two">
      <div v-for="(data,index) in classlist1" tag='li' :key="index"  @click="handleClick(data.myid,data.title)">
        {{data.title}}<i :class="'iconfont '+data.icon"></i>
        <!-- <img src="./public.jiantou.png"> -->
      </div>
    </ul>
    </div>
    <tabbar></tabbar>
  </div>
  
</template>

<script>
import Axios from 'axios'
import navbar from '@/components/navbar'
import tabbar from '@/components/tabbar'
// import inner from '@/classify/inner'
export default {
  mounted () {
   
   
  },
  data () {
    return {
      classlist : [
        {
          path: '/inner',
          title: '沙发',
          icon: 'icon-arrow',     
          myid:20
        },
        {
          path: '/inner',
          title: '椅凳',
          icon: 'icon-arrow',
          myid:21
        },
        {
          path: '/inner',
          title: '床',
          icon: 'icon-arrow',
          myid:2310
        },
        {
          path: '/inner',
          title: '柜架',
          icon: 'icon-arrow',
          myid:24
        },
        {
          path: '/inner',
          title: '餐桌',
          icon: 'icon-arrow',
          myid:2210
        },
        {
          path: '/inner',
          title: '茶几和边桌',
          icon: 'icon-arrow',
          myid:2211
        },
        {
          path: '/inner',
          title: '书桌',
          icon: 'icon-arrow',
          myid:2212
        }
      ],
      classlist1:[
        {
          path: '/inner',
          title: '灯具',
          icon: 'icon-arrow',
          myid:25
        },
        {
          path: '/inner',
          title: '用餐',
          icon: 'icon-arrow',
          myid:26
        },
        {
          path: '/inner',
          title: '时尚生活',
          icon: 'icon-arrow',
          myid:32
        },
        {
          path: '/inner',
          title: '收纳',
          icon: 'icon-arrow',
          myid:33
        },
        {
          path: '/inner',
          title: '烹饪',
          icon: 'icon-arrow',
          myid:27
        },
        {
          path: '/inner',
          title: '纺织品',
          icon: 'icon-arrow',
          myid:28
        },
        {
          path: '/inner',
          title: '家饰',
          icon: 'icon-arrow',
          myid:29
        },
        {
          path: '/inner',
          title: '卫浴',
          icon: 'icon-arrow',
          myid:31
        }
      ]
    }
  },
  methods:{
    handleClick(myid,title){
        // console.log(myid)
      this.$router.push({name:"date_new",params: {myid : myid, title:title}}),
      
      // myid本地存储
      localStorage.setItem("asd",this.$route.params.myid)
      localStorage.getItem("asd")||this.$route.params.myid

      // title本地存储
      localStorage.setItem("asd_title",this.$route.params.title)
      localStorage.getItem("asd_title") || this.$route.params.title
      // localStorage.setItem(JSON.stringify(this.$route.params.myid))
    }
  },
  components: {
    navbar,
    tabbar
    // inner
  },
}
</script>

<style lang="scss" scoped>
div{
  padding: 0 .16rem 0 .16rem;
  background: #fff;
  img{
  width: 100%;
  padding-top: .16rem;
  }
  ul{
    width: 100%;
    div{
      height: 1rem;
      
      border-bottom: .02rem solid #f0f0f0;
      line-height: 1rem;
      font-size: .3rem;
      padding-left: .3rem;
      color: #202020;
      i{
        float: right;
        // font-size: 15px;
        color: #ccc;
      }
    }
  }
  .two{
    padding-bottom:2rem; 
  }
}


</style>
