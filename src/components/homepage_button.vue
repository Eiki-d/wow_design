<template>
  <div class="homepage">
    <p>您还没有订单</p>
    <button @click="handleClick()">去首页逛逛</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick(){
      this.$router.push('/page')
    }
  }
}
</script>
<style lang="scss" scoped>
.homepage {
  min-height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    // flex: 1;
    width: 4.8rem;
    margin-top: 0 auto;
    font-size: .42rem;
    background-color: #f3b059;
    border: none;
  }
}
</style>
