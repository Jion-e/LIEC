<template lang="html">
  <!-- 新闻横向滚动图 -->
  <div class="roll-pic">
      <div class="subject-pics clearfix">
          <span class="left-hander hander hidden">&lt;</span>
          <span class="right-hander hander hidden">&gt;</span>
          <div class="roll-pic-box">
              <ul class="roll-pics">
                  <a href="javascript:;" target="_blank">
                      <img src="../../assets/img/roll_pic1.jpg">
                      <div class="mask-hover" style="height: 0px;"><span>失信黑名单</span></div>
                  </a>
                  <a href="javascript:;" target="_blank">
                      <img src="../../assets/img/roll_pic2.jpg">
                      <div class="mask-hover" style="height: 0px;"><span>诚信</span></div>
                  </a>
                  <a href="javascript:;" target="_blank">
                      <img src="../../assets/img/roll_pic3.jpg">
                      <div class="mask-hover" style="height: 0px;"><span>企业信用评级</span></div>
                  </a>
                  <a href="javascript:;" target="_blank">
                      <img src="../../assets/img/roll_pic4.jpg">
                      <div class="mask-hover" style="height: 0px;"><span>信用记录</span></div>
                  </a>
                  <a href="javascript:;" target="_blank">
                      <img src="../../assets/img/roll_pic5.png">
                      <div class="mask-hover"><span>信用打分定级</span></div>
                  </a>
              </ul>

          </div>
      </div>
      <!-- end subject-pics -->

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
    this.maskAnimate()
    var scrWidth = window.screen.width;
    var sildeWidth = scrWidth / 2 + 7;
    if (scrWidth > 640) {
        this.slideAnimate(180, 500);
    } else {
        $('.roll-pics img').css({
            width: scrWidth / 2
        });
        $('.subject-pics a').css({
            width: scrWidth / 2
        });
        $('.mask-hover span').css({
            width: scrWidth / 2
        });
        $('.mask-hover').css({
            width: scrWidth / 2
        });
        this.slideAnimate(sildeWidth, 500);
    }

  },
  attached() {},
  methods: {
    slideAnimate(sWidth, speed) {
            var slideLi = $('.roll-pics a');
            var slideCur = slideLi.find('span');

            var item = slideLi.length;
            var slideMain = $('.roll-pics');
            var slideSection = sWidth;
            $('.subject-pics').hover(function() {
                $(this).find('.hander').removeClass('hidden');
            }, function() {
                $(this).find('.hander').addClass('hidden');
            });

            $('.right-hander').click(function() {
                if (!slideMain.is(':animated')) {
                    if (slideMain.position().left > (-slideSection * (item - 4))) {
                        slideMain.stop(false, true).animate({
                            left: '-=' + slideSection
                        }, speed);
                    } else {
                        return;
                    }
                }
            });

            $('.left-hander').click(function(e) {
                e.stopPropagation();
                if (!slideMain.is(':animated')) {
                    if (slideMain.position().left < 0) {
                        slideMain.stop(false, true).animate({
                            left: '+=' + slideSection
                        }, speed);
                    } else {
                        return;
                    }
                }
            });
        },
        maskAnimate() {
            var $hoverMain = $('.roll-pics a');

            $hoverMain.hover(function() {
                var $this = $(this);
                $this.find('.mask-hover').css('height', '75px');
            }, function() {
                var $this = $(this);
                $this.find('.mask-hover').css('height', '0');
            });
        },
  },
  components: {}
};
</script>

<style lang="css">
</style>
