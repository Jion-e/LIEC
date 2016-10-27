<template lang="html">
  <!-- 覆盖行业 -->
  <div class="container">
      <div class="row" style="text-align:center;">
          <h4 class="list-title scroll-title">
            <a href="#">覆盖行业</a>
          </h4>
      </div>
      <div class="row">
          <!-- 焦点图轮播 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <a href="#" class="swiper-slide" v-for="n of 48">
                  <img :src="'http://www.xn--vuqp55ao8rg8x.com/cdn/img/busIcon/scrollPic'+''+n + '.png'" alt="scrollPic">
                </a>
            </div>
            <!-- 控制器 -->
            <!-- <div class="swiper-button-prev swiper-btn el-icon-arrow-left"></div>
            <div class="swiper-button-next swiper-btn el-icon-arrow-right"></div> -->
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
      </div>
      <!-- end row -->
  </div>
</template>

<script>
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.swiperInit()
  },
  attached() {},
  methods: {
    //判断是否为pc浏览器
    isPc() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
     swiperInit() {
       if(this.isPc()){
         const mySwiper = new Swiper('.swiper-container', {
             direction: 'horizontal',
             loop: true,
             slidesPerView: 9,
             autoplay: 5000,
             paginationClickable: true,
             // 分页器
             // pagination: '.swiper-pagination',
             autoplayDisableOnInteraction: false,
             // 前进后退按钮
             nextButton: '.swiper-button-next',
             prevButton: '.swiper-button-prev',
             onSlideChangeEnd: function(swiper){
               const el = $('.swiper-slide-active').nextAll('.swiper-slide').eq(3)
               el.find('img').addClass('moreBg')
               el.siblings('.swiper-slide').find('img').removeClass('moreBg')
             }
         })
       }else{
         const mySwiper = new Swiper('.swiper-container', {
             direction: 'horizontal',
             loop: true,
             slidesPerView:3,
             autoplay: 5000,
             paginationClickable: true,
             // 分页器
             // pagination: '.swiper-pagination',
             autoplayDisableOnInteraction: false,
             // 前进后退按钮
             nextButton: '.swiper-button-next',
             prevButton: '.swiper-button-prev',
             onSlideChangeEnd: function(swiper){
               const el = $('.swiper-slide-active').nextAll('.swiper-slide').eq(0)
               el.find('img').addClass('moreBg')
               el.siblings('.swiper-slide').find('img').removeClass('moreBg')
             }
         })
       }

    },
  },
  components: {}
};
</script>

<style lang="css">
</style>
