<template>
  <div>
    <!-- 收货地区 -->
    <!-- address -->
    <skipbar></skipbar>
    <div class="title-warpper">
      <p class="title">收货地区</p>
    </div>
    <!-- <div class="tabs-warp">
      <span class="tab">省</span>
      <span class="tab">市</span>
      <span class="tab">区</span>
      <span class="tab">街道</span>
    </div> -->
      <ul>
        <li>
          <div class="right r">
          <div class="city" @click="toAddress">{{city}}</div>
          <i class="arrow-r"> </i>
        </div>
        </li>
      </ul>
      <v-distpicker type="mobile" @selected='selected' v-show="addInp"></v-distpicker>
      <div class="mask" v-show="mask"></div>
    
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import skipbar from '@/components/skipbar'
import axios from 'axios'
export default {
  components:{
    VDistpicker,
    skipbar
  },
  data(){
      return {
        city:'请选择',
        addInp :false,
        mask:false
      }
  },
  methods: {
    toAddress(){
    this.mask = true;
    this.addInp = true;
    },
    selected(data){
      this.mask =false;
      this.addInp = false;
      this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value
    },
  }
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
  // .tabs-warp{
  //     display: flex;
  //     margin-top: .5rem;
  //     .tab{
  //       flex: 1;
  //       // padding-bottom: .07rem;
  //       text-align: center;
  //       line-height: .27rem;
  //     }
  //   }
</style>