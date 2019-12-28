<template>
    <div>
        <!-- detail-address -->
      <skipbar></skipbar>
      <div class="address_list">
          <form action="">
              <div class="receiver">
                收件人：<input type="text" placeholder="请输入收件人">
              </div>
              <div class="tel">
                联系电话：<input type="text" placeholder="请输入联系电话">
              </div>
        </form>

        <li class="address">
        <div class="left">
          <span>所在地区：</span>
        </div>
        <div class="right r">
          <div class="city" @click="toAddress">{{city}}</div>
          <i class="arrow-r"> </i>
        </div>
      </li>
        <textarea name="" id="" cols="33" rows="5">详细地址：</textarea>
      </div>

      <v-distpicker type="mobile" @selected='selected' v-show="addInp"></v-distpicker>
      <div class="mask" v-show="mask"></div>
    </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
import skipbar from '@/components/skipbar'
import axios from 'axios'
export default {
  components: { 
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
<style scoped lang="scss">
  .address_list{
      margin-top: 1rem;
      margin-left: .8rem;
      margin-right: .8rem;
      input{
        border: none;
        background: none;
        padding-top: .3rem;
        padding-bottom: .3rem;
        // font-size: .3rem;
      }
      .receiver{
        //   border-bottom: 1px solid black;
        border-top: 1px solid black;
        font-size: .33rem;
      }
      .tel{
          border-bottom: 1px solid black;
          border-top: 1px solid black;
          font-size: .33rem;
      }
      .left{
        //   border-bottom: 1px solid black;
        font-size: .33rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        float: left;
        //   z-index: 111;
      }
      .city{
        border-bottom: 1px solid black;
        font-size: .33rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        //   margin-left: .3rem
      }
      textarea{
        margin-top: .3rem;
        padding-left: .3rem;
        font-size: .33rem;
        margin-right: .8rem;
      }
  }
</style>