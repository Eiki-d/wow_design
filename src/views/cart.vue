<template>
  <div>cart</div>
</template>
<script>
export default {
  mounted(){
  },
  beforeRouteEnter (to, from, next) {
    if(localStorage.getItem("token")){
      next()
    }else{
      next('/login')
    }
  }
}
</script>
