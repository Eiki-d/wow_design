<template>
    <div>
        <!-- <swiper :options="{
          loop: false,
          pagination: {},
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
        }">
        </swiper> -->
        <div class="inner_header">
        
        <p class="header" v-for="(data,index) in datalist" :key="index"></p>
        <i class="iconfont icon-fenleishouye" @click="handleClick()"></i>
        </div>
        <ul>
            <router-link to='/inner/date_new' tag='li' activeClass='activeheader'>上新</router-link>
            <router-link to='/inner/sale' tag='li' activeClass='activeheader'>销量</router-link>
            <router-link to='/inner/price' tag='li' activeClass='activeheader'>价格</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
// import Axios from 'axios'
export default {
    data () {
        return {
            datalist:[]
        }
    },

    // mounted () {
        // Axios({
        //     url: '/pages/category/20?currentPage=1&sort=onShelfTime&order=desc&_=1577155009332'
        // }).then(res =>{
        //     console.log(res.data)
        // })
    // }
}
</script>

<style lang="scss" scoped>
.inner_header{
    height: 1rem;
    width: 100%;
    background: #fff;
    .header{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    // background: #fff;
    margin: 0;
    }
    i{
        z-index: 1;
    }
}

.activeheader{
    color: #000;
    // width: 30px;
    border-bottom: .02rem solid #000;
}
ul{
    display: flex;
    li{
        flex: 1;
        height: .8rem;
        line-height: .8rem;
        font-size: .28rem;
        text-align: center;
        color: #808080;
        background: #fff;
        border-bottom: .02rem solid #f0f0f0;
    }
}
</style>
