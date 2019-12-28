<template>
  <div>
    <!-- 地址管理 -->
    <!-- address_message -->
    <skipbar></skipbar>
    <div class="address-list">
      <router-link tag="div" class="address-btn" to="/detailed_address">新增收获地址</router-link>
    </div>
  </div>
</template>
<script>
import skipbar from '@/components/skipbar'
import axios from 'axios'
export default {
  components:{
    skipbar
  },
}
</script>
<style scoped lang="scss">
  .address-list{
    margin-top: .8rem;
    .address-btn{
      color: #e42614;
      font-size: .35rem;
      width: 3.5rem;
      height: .8rem;
      line-height: .8rem;
      border: 1px solid #e42614;
      margin: 1rem auto 0;
      border-radius: .07rem;
      text-align: center;
    }
  }
</style>