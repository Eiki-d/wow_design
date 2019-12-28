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
        <router-link to='/page/index' tag='i' class="iconfont icon-shouye-1 icon1"></router-link>
        <h3 class="header" @click="handleClick(data.title)">{{title}}</h3>
        <router-link to='/classify' tag='i' class="iconfont icon-fenleishouye icon1"></router-link>
        </div>
        <ul>
            <router-link to='/inner/date_new' tag='li' activeClass='activeheader'>上新</router-link>
            <router-link to='/inner/sale' tag='li' activeClass='activeheader'>销量</router-link>
            <router-link to='/inner/price' tag='li' activeClass='activeheader'>价格
                <span class="icon">
                    <!-- <i class="iconfont icon-tri-up-mini"></i> -->
                    <router-link to='/inner/price' tag='i' activeClass='activeicon' class="iconfont icon-tri-up-mini icon2"></router-link>
                    <!-- <i class="iconfont icon-arrow-bottom-small"></i> -->
                    <router-link to='/inner/price' tag='i' activeClass='activeicon' class="iconfont icon-arrow-bottom-small icon2"></router-link>
                </span>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import classify from './classify'
export default {

    data () {
        return {
            datalist:[],
            title: '',
        }
    },

    mounted () {
        console.log(this.$route.params.title,222)
        this.title = this.$route.params.title ||localStorage.getItem('asd_title')

        this.title1 = this.$route.params.title1 ||localStorage.getItem('asd_title1')

        this.title2 = this.$route.params.title2 ||localStorage.getItem('asd_title2')
    },
    methods: {
        handleClick(title){
            localStorage.setItem("asd_title",this.$route.params.title)

            localStorage.setItem("asd_title1",this.$route.params.title1)

            localStorage.setItem("asd_title2",this.$route.params.title2)
        }
    }
}
</script>

<style lang="scss" scoped>
.inner_header{
    // box-sizing: border-box;
    display: flex;
    height: 1rem;
    // width: 100%;
    background: #fff;
    .header{
        flex: 1;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    // color: #000;
    font-size: .34rem;
    font-weight: bold;
    margin: 0;
    }
    .icon1{
        // z-index: 1;
        display: block;
        justify-content: center;
        align-items: center;
        display:flex;
        font-size: .4rem;
        font-weight: bold;
        // flex: 1;
    }
    .icon-shouye-1{
        margin-left: .3rem;
    }
    .icon-fenleishouye{
        align-content: flex-end;
        margin-right: .3rem;
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
        display: flex;
        justify-content: center;
        height: .8rem;
        line-height: .8rem;
        font-size: .28rem;
        text-align: center;
        color: #808080;
        background: #fff;
        border-bottom: .02rem solid #f0f0f0;
        .icon{
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: .1rem;
            flex-wrap: wrap;
            .icon2{
                display: block;
                height: 14%;
                line-height: 0.2rem;
                color: #808080;
            }
            .activeicon{
                color: #000;
                // width: 30px;
                // border-bottom: .02rem solid #000;
            }
        }
    }
}
</style>
