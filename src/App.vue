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
  },
  // beforeCreated(){
  //   var tabbar = document.querySelector(".bottom-tab")
  //     if(location.href==="/login" || location.href==="/login/password"){
  //       tabbar.style.display = "none";
  //     }
  // }
  // mounted(){
    
  // }
}

</script>
<style lang="scss" scoped>
  
</style>