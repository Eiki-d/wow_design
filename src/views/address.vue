<template>
  <div>
    <!-- 收货地区 -->
    <!-- address -->
    <skipbar></skipbar>
    <div class="title-warpper">
      <p class="title">收获地区</p>
    </div>
    <div class="tabs-warp">
        <span class="tab">省</span>
        <span class="tab">市</span>
        <span class="tab">区</span>
        <span class="tab">街道</span>
      </div>
      <ul>
        <li v-for="data in childlist" :key="data"></li>
      </ul>

    
  </div>
</template>
<script>
import skipbar from '@/components/skipbar'
import axios from 'axios'
export default {
  components:{
    skipbar
  },
  data(){
    return {
      childlist:[]
    }
  },
//   mounted() {
//     axios(
//       'api/neptune/myopen/address/address',`provinc=${localStorage.getItem('proviceId')}&city=${this.cityId}&page=${this.number}&pageSize=10`,
      
//  ).then(res=>{
//       console.log(res.data)
//       this.childlist=res.data
//     })
//   },
}
</script>
<style lang="scss" scoped>
  .title-warpper{
    .title{
      margin-top: .5rem;
      font-size: .35rem;
      text-align: center;
      line-height: .73rem;
    }
  }
  .tabs-warp{
      display: flex;
      margin-top: .5rem;
      .tab{
        flex: 1;
        // padding-bottom: .07rem;
        text-align: center;
        line-height: .27rem;
      }
    }
</style>