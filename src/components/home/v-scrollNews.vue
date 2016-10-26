<template lang="html">
<!-- 新闻动态 -->
<div class="main-left">
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
            <a href="#newsBox" aria-controls="newsBox" role="tab" data-toggle="tab">
                <div class="titleBox">
                    <h4 class="list-title"><a href="#">新闻动态</a></h4>
                </div>
            </a>
        </li>
    </ul>

    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active" id="newsBox">
            <div class="newsPicBox">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <a href="news/news_15.html" target="_blank">
                                <img src="../../assets/img/news_15_4.jpg" alt="信用轻工">
                            </a>
                            <div class="carousel-caption">
                                <a href="news/news_15.html" target="_blank">信用轻工</a>
                            </div>
                        </div>

                        <div class="item">
                            <a href="news/news_3.html" target="_blank"><img src="../../assets/img/news3.jpg" alt="信用无价"></a>
                            <div class="carousel-caption">
                                <a href="news/news_3.html" target="_blank">信用无价</a>
                            </div>
                        </div>
                    </div>
                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div class="newsItemBox">
                <ul>
                    <li>
                        <p class="newsItemTitle"><a href="news/news_15.html" target="_blank">信用轻工</a></p>
                        <p class="newsItemCont currentNews"><a href="news/news_15.html" target="_blank">中国轻工行业企业信用数据中心由中国轻工业信息中心发起成立，星数科技（北京）有限公司提供技术和运营支持，是中国轻工行业企业信用数据管理、研究的专业机构。</a></p>
                    </li>
                    <li>
                        <p class="newsItemTitle"><a href="news/news_3.html" target="_blank">信用无价</a></p>
                        <p class="newsItemCont"><a href="news/news_3.html" target="_blank">随着中国加入WTO，“诚信”这个话题火爆起来，许多企业都提出要以“诚信为本”、“诚信经营”，“打造诚信企业”等口号喊得很响亮。</a></p>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div role="tabpanel" class="tab-pane" id="creditBox">...</div> -->
    </div>
    <!-- end tab-content -->
</div>

</template>

<script>

export default {
    data() {
      return {};
    },
    computed: {},
    mounted() {
      $('.newsItemBox li').each(function() {
          $(this).mouseover(function() {
              $(this).find('.newsItemCont').addClass('currentNews');
              $(this).siblings('li').find('.newsItemCont').removeClass('currentNews');
          });
      });
      $('#carousel-credit').carousel({
          interval: 10000
      })
    },
    attached() {},
    methods: {},
    components: {}
};

</script>
