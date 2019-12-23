<template>
  <div class="bottom-tab">
    <ul>
      <router-link v-for="(data,index) in datalist" :key="index" :to="data.path" tag="li" activeClass="active">
        <i :class="'iconfont '+data.icon"></i>
        <span>{{data.title}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
   data () {
    return {
      datalist: [
        {
          path: '/page',
          title: '首页',
          icon: 'icon-shouye-1'
        },
        {
          path: '/classify',
          title: '分类',
          icon: 'icon-fenleishouye'
        },
        {
          path: '/cart',
          title: '购物车',
          icon: 'icon-gouwuche'
        },
        {
          path: '/message',
          title: '消息',
          icon: 'icon-xiaoxi'
        },
        {
          path: '/center',
          title: '我',
          icon: 'icon-wode'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .bottom-tab {
    width: 7.5rem;
    height: 0.88rem;
    position: fixed;
    margin: 0 auto;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #f5f5f5;
    z-index: 999;
    ul {
      width: 100%;
      height: 100%;
      li {
        float: left;
        width: 20%;
        height: 100%;
        // font-size: 0rem;
        color: #000;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span {
          font-size: 0.2rem;
        }
      }
    }
  }
</style>