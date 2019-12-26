<template>
  <div>
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
          <li v-for="data in datalist" :key="data.productId" @click="handleClick(data.productId)">
              <img :src="data.productImg">
              <p class="title">{{data.productTitle}}</p>
              <span class="pri">￥{{data.sellPrice}}</span>
              <span class="del">￥{{data.originalPrice}}</span>
              <p class="slogan">{{data.prizeOrSlogan}}</p>
          </li>
           <p class="more">没有更多了</p>
      </ul>
       <!-- <p>{{data.productTitle}}</p> -->
       
  </div>
</template>

<script>
import Axios from "axios";
export default {
    data () {
        return {
            datalist:[],
            myid: localStorage.getItem('myid'),
            number:1,
            loading:false,
            total:0
        }
    },
    methods: {
        loadMore(){
            this.number++,
            this.loading=true
            if(this.number === this.total){
                return
            }
            Axios({
                url: `/pages/category/${localStorage.getItem("asd")||this.$route.params.myid}?currentPage=${this.number}&sort=onShelfTime&order=desc&_=1577100628198`,
            })
        },
        handleClick(myid){
            localStorage.setItem("asd",this.$route.params.myid)
        }
    },
  mounted() {
    //   localStorage.setItem("asd",this.$route.params.myid)
    console.log(this.$route.params.myid, 11111111111);
    // localStorage.setItem(this.$route.params.myid)
    // https://m.wowdsgn.com/pages/category/21?currentPage=1&sort=onShelfTime&order=desc&_=1577166291935
    Axios({
      url: `/pages/category/${localStorage.getItem("asd")||this.$route.params.myid}?currentPage=1&sort=onShelfTime&order=desc&_=1577100628198`
    }).then(res => {
      console.log(res.data);
      this.datalist = res.data.data
    });
  }
};
</script>

<style lang="scss" scoped>
div{
    

ul{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // border: 1px solid #f0f0f0;
    margin-bottom:100px; 
    li {
        // flex: 1;
        flex-wrap: wrap;
        box-sizing: border-box;
        // text-align: center;
        align-content:center;
        overflow: hidden;
        height: 280px;
        width: 50%;
        border-bottom: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
        // border-top: 1px solid #f0f0f0;
        // padding: 5px;
        img {
            // float: left;
            width:100%;
            // height: 280px;
        }
    }
    .title{
        width: 90%;
        // padding-left: 15px;
        // padding-right: 10px;
        // padding-top: 23px;
        padding: 23px 10px 2px 15px;
        color: #808080;
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .pri{
        padding-left: 15px;
        // margin-top: 20px;
        font-size: 13px;
        color: #000;
    }
    .del{
        color: #aaa;
        padding-left: 5px;        
        font-size: 11px;
        text-decoration: line-through;
    }
    .slogan{
        padding-left: 15px;
        font-size: 11px;
        color: #808080;
        padding-top: 3px;
    }
    .more{
    font-size: 14px;
    height: 50px;
    width: 100%;
    line-height: 50px;
    text-align: center;
    padding: 0;
    border-bottom: 1px solid #f0f0f0;
    }
}

}
</style>
 