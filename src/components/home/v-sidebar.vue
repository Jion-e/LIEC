<template lang="html">
  <!-- 头侧边栏 -->
  <div class="main-sidebar">
    <div class="apply-box">
        <a href="login.html">点击进入</a>
    </div>
    <div class="recordBox">
        <div class="record-header">
            <h2 class="record-title">失信企业公示</h2>
        </div>
        <div class="record-cont">
            <!-- <ul>
                <li><span><a href="http://www.stats.yn.gov.cn/TJJMH_Model/newsview.aspx?id=4082158" target="_blank" class="dishonest-name ellipsistext" title="云南云翔玻璃有限公司">云南云翔玻璃有限公司</a>
                      <a href="http://www.stats.yn.gov.cn/TJJMH_Model/newsview.aspx?id=4082158" target="_blank" class="dishonest-box" title="失信记录1条"> 失信(1)</a></span></li>
                <li><span><a href="http://www.jxstj.gov.cn/News.shtml?p5=7538858" target="_blank" class="dishonest-name ellipsistext" title="南昌众晶制衣有限公司">南昌众晶制衣有限公司</a>
                      <a href="http://www.jxstj.gov.cn/News.shtml?p5=7538858" target="_blank" class="dishonest-box" title="失信记录1条"> 失信(1)</a></span></li>
                <li><span><a href="http://www.zj.stats.gov.cn/ztzl/tjxygs/sxqygs/201601/t20160111_168043.html" target="_blank" class="dishonest-name ellipsistext" title="台州市万鼎置业有限公司">台州市万鼎置业有限公司</a>
                      <a href="http://www.zj.stats.gov.cn/ztzl/tjxygs/sxqygs/201601/t20160111_168043.html" target="_blank" class="dishonest-box" title="失信记录1条"> 失信(1)</a></span></li>
                <li><span><a href="http://www.zj.stats.gov.cn/ztzl/tjxygs/sxqygs/201601/t20160111_168044.html" target="_blank" class="dishonest-name ellipsistext" title="台州市万鼎置业有限公司">杭州萧山林宏服饰有限公司</a>
                      <a href="http://www.zj.stats.gov.cn/ztzl/tjxygs/sxqygs/201601/t20160111_168044.html" target="_blank" class="dishonest-box" title="失信记录1条"> 失信(1)</a></span></li>
            </ul> -->
        </div>
      </div>
      <div class="side-cont">
          <div class="side-item">
              <h4><a href="javascript:void(0)">失信行为举报</a></h4>
              <a class="item-icon" href="javascript:void(0)"><img src="../../assets/img/jubao.png" alt=""></a>
          </div>
          <div class="side-item">
              <h4><a href="javascript:void(0)">我要留言</a></h4>
              <a class="item-icon" href="javascript:void(0)"><img src="../../assets/img/comment.png" alt=""></a>
          </div>
          <div class="side-item" id="shareHover">
              <h4><a href="javascript:void(0)">分享</a></h4>
              <a class="item-icon" href="javascript:void(0)"><img src="../../assets/img/share.png" alt=""></a>
              <div class="share-icon-box">
                  <div class="share-button-box">
                      <a class="tieba-icon" href="javascript:void(0)"></a>
                      <a class="weixin-icon" href="javascript:void(0)"></a>
                      <a class="tsina-icon" href="javascript:void(0)"></a>
                      <a class="people-icon" href="javascript:void(0)"></a>
                  </div>
                  <ul class="share-icon-title">
                      <li class="index-tieba-title">百度贴吧</li>
                      <li class="index-weixin-title">微信</li>
                      <li class="index-xinlang-title">新浪微博</li>
                      <li class="index-people-title">人民微博</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  mounted() {
    //分享图标显隐
    $('#shareHover').hover(function(){
        $('.share-icon-box').toggle();
    });
  },
  attached() {},
  methods: {
    slideAnimate(sWidth, speed) {
           var slideLi = $('.roll-pics a');
           var slideCur = slideLi.find('span');

           var item = slideLi.length;
           var slideMain = $('.roll-pics');
           var slideSection = sWidth;
           $('.subject-pics').hover(function () {
               $(this).find('.hander').removeClass('hidden');
           }, function () {
               $(this).find('.hander').addClass('hidden');
           });

           $('.right-hander').click(function () {
               if (!slideMain.is(':animated')) {
                   if (slideMain.position().left > (-slideSection * (item - 4))) {
                       slideMain.stop(false, true).animate({left: '-=' + slideSection}, speed);
                   }
                   else {
                       return;
                   }
               }
           });

           $('.left-hander').click(function (e) {
               e.stopPropagation();
               if (!slideMain.is(':animated')) {
                   if (slideMain.position().left < 0) {
                       slideMain.stop(false, true).animate({left: '+=' + slideSection}, speed);
                   }
                   else {
                       return;
                   }
               }
           });
       },
  },
  components: {}
};
</script>

<style lang="css">
</style>
