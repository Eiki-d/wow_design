<template>
  <div>
      <!-- <p>{{this.$route.params.myid}}</p> -->
      
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100" infinite-scroll-immediate-check="false">
          <router-link v-for="data in datalist" :key="data.myid" @click="handleClick(data.myid,data.productId)" tag="li" to="/detail/:id" class="list">
              <img :src="data.productImg">
              <p class="title">{{data.productTitle}}</p>
              <span class="pri">￥{{data.sellPrice}}</span>
              <span class="del" v-if="data.originalPrice==data.sellPrice?false:true">￥{{data.originalPrice}}</span>
              <p class="slogan">{{data.prizeOrSlogan}}</p>
          </router-link>
           <p class="more">没有更多了</p>
      </ul>
       <!-- <p>{{data.productTitle}}</p> -->
       
  </div>
</template>

<script>
import Axios from 'axios'
import Vue from 'vue'
import { Indicator } from 'mint-ui';
export default {
    data () {
        return {
            datalist:[],
            myid: localStorage.getItem('myid'),
            // id: localStorage.getItem('proid'),
            current:1,
            loading:false,
            total:0,
            content:''
        }
    },
    methods: {
        loadMore(){
    //   console.log('到底了！！！')
      this.current++;
      this.loading = true;
      if(this.datalist.length>=this.total){
          return;
      }
      

      Axios({
        url:  `/pages/category/${localStorage.getItem("asd")||this.$route.params.myid}?currentPage=${this.current}&sort=onShelfTime&order=desc&_=1577100628198`
      }).then(res => {
        // console.log(res.data.data)
        this.datalist = [...this.datalist,...res.data.data]
        Indicator.close();
        this.loading = false;
        // console.log(this.datalist)
      })
    },

        handleClick(myid,productId){
            localStorage.setItem("asd",this.$route.params.myid)
            localStorage.setItem("proid",this.$route.params.id)
            this.$router.push({params: {myid : myid, id : productId, title:title}})
        }
    },
  mounted() {
      
      Indicator.open({
    //   text: '加载中...',
      spinnerType: 'fading-circle'
    });
    //   localStorage.setItem("asd",this.$route.params.myid)
    // console.log(this.$route);
    Axios({
      url: `/pages/category/${localStorage.getItem("asd")||this.$route.params.myid}?currentPage=1&sort=onShelfTime&order=desc&_=1577100628198`
    }).then(res => {
      this.datalist = res.data.data
      console.log(this.datalist);
      this.total = res.data.data.total
      Indicator.close();
    });
  }
};
</script>

<style lang="scss" scoped>
div{
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
 