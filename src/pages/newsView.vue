<template lang="html">
  <div class="news-view">
    <div class="news-view__nav">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{mTypeName}}</el-breadcrumb-item>
        <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <h1 class="news-view__title">{{newsItem.title}}</h1>
    <div class="news-view__source">
      <span class="news-view__date">{{date}}</span>
      <span>来源：{{newsItem.source}}</span>
    </div>
    <div class="news-view__cont" v-html="newsItem.cont"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'newsItem'
    ]),
    date(){
      // console.log(this.newsItem);
      return moment(this.newsItem.date).format('YYYY年MM月DD日')
    },
    mTypeName(){
      const mType = parseInt(this.newsItem.mType)
      switch (mType) {
        case 0:
          return '信用动态'
          break;
        case 1:
          return '政策法规'
          break;
        default:
          return '新闻动态'
      }
    }
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
  .news-view{width: 80%;margin: 50px auto;font-size: 16px;}
  .news-view__nav .el-breadcrumb__item{font-size: 16px;}
  .news-view__title{text-align: center;margin-bottom: 20px;}
  .news-view__source{text-align: right;font-size: 16px;margin-bottom: 20px;}
  .news-view__date{margin-right: 10px;}
  @media (max-width: 640px) {
    .news-view{width: 100%;padding: 10px 5px;margin: 0;}
    .news-view__title{font-size: 24px;}
    .news-view__source{text-align: center;}
    .news-view__cont p{font-size: 14px;text-indent: 28px;}
    .news-view__cont img{max-width: 100%}
  }
</style>
