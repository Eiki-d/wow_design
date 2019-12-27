<template>
  <div>
    <skipbar></skipbar>
  </div>
</template>
<script>
import skipbar from '@/components/skipbar'
export default {
  components: {
    skipbar
  },
  data(){
    return {
      banner_id: localStorage.getItem('id'),
    }
  },
  methods: {
    handleClick(id){
      localStorage.setItem("banner_id",this.$route.params.id)
    }
  },
  mounted(){
    console.log(this.$route.params.id)
  }
}
</script>
<style lang="scss" scoped>

</style>

