<template>
<div>
  <tabbar></tabbar>
  <router-view></router-view>
</div>
  
</template>

<script>
import tabbar from '@/components/tabbar'

export default {
  components: {
    tabbar
  }
}
</script>
<style lang="scss" scoped>
  
</style>