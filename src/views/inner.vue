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
.activeheader{
    color: #000;
    // width: 30px;
    border-bottom: 1px solid #000;
}
ul{
    display: flex;
    li{
        flex: 1;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        text-align: center;
        color: #808080;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
    }
}
</style>
