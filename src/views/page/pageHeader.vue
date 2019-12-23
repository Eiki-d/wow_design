<template>
  <div class="pageHeader">
    <div class="pageNav">
      <ul class="tabUl">
        <router-link to="/page/index" tag="li" activeClass="active">推荐</router-link>
        <router-link to="/page/quality" tag="li" activeClass="active">品质空间</router-link>
        <router-link to="/page/living" tag="li" activeClass="active">居家好物</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .pageHeader {
    .pageNav {
      height: 0.8rem;
      line-height: 0.8rem;
      font-size: 0.28rem;
      background: #fff;
      .tabUl {
        background: #fff;
        height: 0.8rem;
        overflow: hidden;
        display: flex;
        justify-content: space-around;
        list-style: none;
        li {
          float: left;
          color: #808080;
          // margin: 0rem 0.43rem;
          font-size: 0.28rem;
          // padding: 0 0.22rem;
        }
        .active {
          color: #000;
          border-bottom: 0.06rem solid #202020;
        }
      }
    }
  }
</style>
