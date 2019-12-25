<template>
  <div class="page_index">
    <div class="page-module">
      <img src="https://img.wowdsgn.com/page/banners/ad782eca-7d30-45cf-a20b-7a79707637ca_2dimension_1125x210.jpg?imageslim" alt="">
    </div>
    <div class="page-group">
      <div class="page-group-banner">
        <div class="little_banner" v-for="data in itemlist" :key="data.id">
          <img :src="data.bannerImgSrc">
        </div>
      </div>
    </div>
    <div class="discounts">
      <img src="https://img.wowdsgn.com/page/banners/68b3f2c4-444c-41e6-82f0-cb7682c2d05c_2dimension_1125x450.jpg?imageslim" alt="">
    </div>
    <div class="inspired">
      <img src="https://img.wowdsgn.com/page/banners/59172e58-af6a-4032-956b-6f3586552017_2dimension_1125x204.jpg?imageslim" alt="">
    </div>
    <div class="good_thing">
      <div class="good_thing_list" v-for="(data,index) in goodslist" :key="index">
        <div v-for="i in data" :key="i.moduleId">
          <img :src="i.moduleContent.bannerImgSrc" alt="">
        </div> 
      </div>
    </div>
    <div class="inspired">
      <img src="https://img.wowdsgn.com/page/banners/88802682-562d-4e1e-bfee-621ec22b85cc_2dimension_1125x204.jpg?imageslim" alt="">
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return {
      goodslist: [],
      itemlist: []
    }
  },
  mounted(){
    axios({
      url: '/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1577178267979'
    }).then(res=>{
      // console.log(res.data.data.modules)
        
        this.itemlist=res.data.data.modules[2].moduleContent.banners
        // console.log(this.itemlist)
        this.goodslist = this.pageList(res.data.data.modules)
        // console.log(this.goodslist[0][0])

    })
  },
  methods: {
    pageList(modules){
      var goodsArr = []
      for(var i=3485; i<3488; i++){
        goodsArr.push(i)
      }
      // console.log(goodsArr)

      var detailList =[]
      for( var m=0;m<goodsArr.length;m++){
        var list = modules.filter(item=>item.moduleId===goodsArr[m])
        // console.log(item.moduleId)
        // console.log(list)
        if(list.length>0){
          detailList.push(list)
        }
      }
      return detailList
    }
  }
}
</script>
<style lang="scss" scoped>
  .page_index {
    .page-module {
      width: 100%;
      background-color: #fff;
      margin-bottom: 0.3rem;
      margin-top: .3rem;
      img {
        width: 100%;
        height: 1.4rem;
      }
    }
  .page-group{
      margin-bottom: 0.3rem;
      // margin-top: .6rem;
      background: white;
      padding-top: .6rem;
      .page-group-banner{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0.3rem;
        .little_banner{
          img{
            width: 2.1rem;
          }
        }
      }
    }
    .discounts {
      margin-bottom:.3rem;
      img {
        height: 3rem;
      }
    }
    .inspired {
      margin-bottom:.3rem;
      img {
        height: 1.36rem;
      }
    }
    .good_thing {
      .good_thing_list {
        margin-bottom: .3rem;
        img {
          height: 3.4rem;

        }
      }
    }
  }

</style>
