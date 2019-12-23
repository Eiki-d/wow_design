<template>
  <div class="swiper-container amy">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper' // swiper js文件
import 'swiper/css/swiper.min.css' // swiper css
export default {
    mounted(){
      console.log(this.swipername)
      var defaultProps = {
        loop:true,

        pagination: {
          el: ".swiper-pagination"
        }
      }
      //console.log("mounted")
      new Swiper ("." + (this.swipername
      ? this.swipername : 'amy'),{...defaultProps, ...this.options})
  },
  props: ['options', 'swipername']
}
</script>
<style lang="scss" scoped>
   
</style>
