<template lang="html">
  <div class="content">
      <!-- 信用动态 -->
      <div class="channelbox channelbox-left">
          <div class="titleBox">
              <h4 class="list-title"><a href="#">信用动态</a></h4>
              <span class="list-more"><a href="#">更多</a></span>
          </div>
          <div class="channel-content clearfix">
              <ul class="channel-block clearfix">
                <li class="ellipsistext" v-for="item of creditNewsLimit">
                  <a href="javascript:;" @click="watchNews(item.id)">{{item.title}}</a>
                </li>
              </ul>
          </div>
      </div>
      <!-- 政策法规 -->
      <div class="channelbox channelbox-right">
          <div class="titleBox">
              <h4 class="list-title"><a href="#">政策法规</a></h4>
              <span class="list-more"><a href="#">更多</a></span>
          </div>
          <div class="channel-content">
              <ul class="channel-block clearfix">
                <li class="ellipsistext" v-for="item of lawsNewsLimit">
                  <a href="javascript:;" @click="watchNews(item.id)">{{item.title}}</a>
                </li>
              </ul>
          </div>
      </div>
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
      'allNews',
      'creditNews',
      'lawsNews',
      'creditNewsLimit',
      'lawsNewsLimit'
    ])
  },
  mounted() {
    this.fetchAllNews()
    // this.fetchCreditNews()
    // this.fetchLawsNews()
    // setTimeout(() => {
    //   console.log(this.creditNews);
    // }, 2000)
  },
  methods: {
    ...mapActions([
      'fetchAllNews',
      // 'fetchCreditNews',
      // 'fetchLawsNews'
    ]),
    watchNews(newsID){
      if(newsID){
        this.$router.push({path: '/newsView/' + newsID});
      }
    }
  },
  components: {}
};
</script>

<style lang="css">
</style>
