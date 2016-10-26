

<template lang="html">

<div class="homePage">
    <v-search></v-search>
    <v-srollbar></v-srollbar>
    <!-- 主体内容 -->
    <div class="wrapper">
        <div class="main">
            <v-scrollNews></v-scrollNews>
            <v-sidebar></v-sidebar>
            <v-scrollPic></v-scrollPic>
            <v-newsList></v-newsList>
            <p class="main-bottom-banner">
                <a href="javascript:void(0)"><img src="../assets/img/banner715.jpg" alt=""></a>
            </p>
            <!-- 行业数据 -->
            <div class="business-data">
                <div class="titleBox">
                    <h4 class="list-title"><a href="#">行业数据</a></h4>
                </div>
                <div class="echartsBox">
                    <div id="echartsMap"></div>
                    <div id="echartsTable"></div>
                </div>
            </div>
            <v-units></v-units>
        </div>
        <div class="alert-box">
            <div class="alert-cont">
                <p class="alert-text">输入错误</p>
                <div class="alert-btns">
                    <button type="button" id="comfirBtn" name="comfirBtn">确定</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import vNewsList from '../components/home/v-newsList.vue'
import vSearch from '../components/home/v-search.vue'
import vSrollbar from '../components/home/v-srollbar.vue'
import vUnits from '../components/home/v-units.vue'
import vScrollNews from '../components/home/v-scrollNews.vue'
import vScrollPic from '../components/home/v-scrollPic.vue'
import vSidebar from '../components/home/v-sidebar.vue'
export default {
    data() {
      return {};
    },
    computed: {},
    mounted() {
      const vm = this
      $("#searchBtn").click(function() {
          vm.layerText('数据库正在建设中');
      });
    },
    attached() {},
    methods: {
    //显示layer
    showLayer() {
            $('.alert-box').show();
            $('body').append('<div class="alertBg"></div>');
        },
        //关闭layer
        closeLayer() {
            $('#comfirBtn').click(function() {
                $('.alert-box').hide();
                $('div.alertBg').remove();
            });
        },
        //设置layer显示文本
        layerText(msg) {
            $('.alert-text').html('<img src="http://www.xn--vuqp55ao8rg8x.com/cdn/img/warning.png" class="w-img">' + msg);
            this.showLayer();
            this.closeLayer();
        }
    },
    components: {
        vNewsList, vSearch, vSrollbar, vUnits, vSidebar, vScrollNews, vScrollPic
    }
};

</script>
