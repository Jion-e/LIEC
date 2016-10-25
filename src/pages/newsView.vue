<template lang="html">
  <div class="news-view">
    <div class="news-view__nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- <el-breadcrumb-item>信用动态</el-breadcrumb-item> -->
        <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h1 class="news-view__title">{{newsItem.title}}</h1>
    <div class="news-view__cont" v-html="newsItem.cont"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'newsItem'
    ])
  },
  mounted() {
    const newsID = this.$route.params.id
    this.fetchNewsItem(newsID)
  },
  attached() {},
  methods: {
    ...mapActions([
      'fetchNewsItem'
    ])
  },
  components: {}
};
</script>

<style lang="less">
  .news-view{width: 80%;margin: 50px auto;}
  .news-view__nav .el-breadcrumb__item{font-size: 16px;}
  .news-view__title{text-align: center;margin-bottom: 30px;}
</style>
