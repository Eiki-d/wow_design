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
      </div>
        <textarea name="" id="" cols="36" rows="5">详细地址：</textarea>
        <button class="btn">保存地址</button>

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
      margin-left: .6rem;
      margin-right: .6rem;
    //   border: 1px sloid black;
      input{
        border: none;
        background: none;
        padding-top: .3rem;
        padding-bottom: .3rem;
      }
      .receiver{
        border: 1px solid rgb(177, 166, 166);
        font-size: .33rem;
        background: white;
        padding-left: .3rem;
        border-radius: .1rem .1rem 0 0;
      }
      .tel{
        border: 1px solid rgb(177, 166, 166);
        font-size: .33rem;
        background: white;
        padding-left: .3rem;
      }
      .left{
        font-size: .33rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        padding-left: .3rem;
        float: left;
        background: white;
        border: 1px solid rgb(177, 166, 166);
        border-right: none;
        border-radius: 0rem 0rem 0rem .1rem;
      }
      .city{
        border: 1px solid rgb(177, 166, 166);
        font-size: .33rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        padding-left: .3rem;
        background: white;
        border-radius: 0rem 0rem 0.1rem .1rem;
      }
  }
  textarea{
        margin-top: .3rem;
        padding-left: .3rem;
        font-size: .33rem;
        margin-right: .6rem;
        margin-left: .6rem;
        border-radius: .1rem
      }
  .btn{
    // background: rgb(252, 2, 2);
    border: 1px solid rgb(252, 2, 2);
    background: white;
    width: 6rem;
    height: 1rem;
    font-size: .4rem;
    margin: 2rem 0.74rem;
    color: rgb(252, 2, 2);
  }
</style>