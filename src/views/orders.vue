<template>
<!-- 全部订单 -->
  <div class="orders">
  <skipbar></skipbar>
  <homepage></homepage>
  </div>
</template>
<script>
import skipbar from '@/components/skipbar'
import homepage from '@/components/homepage_button'

export default {
  components: {
    skipbar,
    homepage
  }
}
</script>
