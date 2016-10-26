<template lang="html">
  <div class="header">
    <header class="header">
        <div class="header-top clearfix">
            <p class="header-top-box">
                <router-link to="/login">登录</router-link>
                <em>|</em>
                <router-link to="/register">注册</router-link>
            </p>
        </div>
        <div class="header-mid clearfix">
            <a class="logo-left" href="#"><img src="../assets/img/logo.png" alt="信用轻工"></a>
            <a class="logo-right" href="#"><img src="../assets/img/ygxy-logo.png" alt="中国轻工行业企业信用数据平台"></a>
        </div>
        <div class="header-nav">
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- <a class="navbar-brand" href="#">
                            <img src="../assets/img/logo.png" style="width:213px;height:54px;">
                        </a> -->
                </div>
                <div class="collapse navbar-collapse site-navbar" id="navigation1">
                    <ul class="nav navbar-nav">
                        <li class="nav-item-active">
                          <router-link to="/" class="active">首页</router-link></li>
                        <li><router-link to="/">信用动态</router-link></li>
                        <li><router-link to="/">政策法规</router-link></li>
                        <li><router-link to="/">行业数据</router-link></li>
                        <!-- <li><a href="index.html">信用动态</a></li>
                        <li><a href="index.html">政策法规</a></li>
                        <li><a href="index.html">行业数据</a></a></li> -->
                    </ul>
                </div>
            </nav>
        </div>
        <!-- end header-nav -->
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="less">
</style>
