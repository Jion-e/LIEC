<template lang="html">
  <div class="homePage">

  <!-- 搜索框 -->
  <div class="container">
      <div class="search-form-block">
          <p>
              <a class="current" href="#" tab="all" tip="可以按企业名称、注册号、地址、品牌查询"><strong>全部</strong><b></b></a>
              <em>|</em>
              <a href="javascript:;" tab="companyContent" tip="按企业名称查询">企业<b></b></a>
              <em>|</em>
              <a href="javascript:;" tab="addressContent" tip="按地址查询">地址<b></b></a>
              <em>|</em>
              <a href="javascript:;" tab="scopeContent" tip="按经营范围查询">经营范围<b></b></a>
              <em>|</em>
              <a href="javascript:;" tab="trademarkContent" tip="按品牌/产品查询"> 品牌/产品<b></b></a>
          </p>
          <form method="get" id="searchForm" action="#">
              <input class="" name="key" type="text" id="searchKey" placeholder="可以按企业名称、注册号、地址、品牌查询" />
              <input type="hidden" name="searchType" id="searchType" value="all" />
              <button id="searchBtn" class="submitBtn">查询</button>
          </form>
      </div>
      <!-- end search-form-block -->
  </div>
  <!-- 覆盖行业 -->
  <div class="container">
      <div class="row" style="text-align:center;">
          <h4 class="list-title scroll-title">
                  <a href="#">覆盖行业</a>
              </h4>
      </div>
      <div class="row">
          <!-- 焦点图轮播 -->
          <div class="mis-stage">
              <ol class="mis-slider">
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic1.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic2.png" alt="Pond with Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic3.png" alt="Hidden Pond"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic4.png" alt="Shrine"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic5.png" alt="White Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic6.png" alt="Garden Walkway"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic7.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic8.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic9.png" alt="Pond with Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic10.png" alt="Hidden Pond"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic11.png" alt="Shrine"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic12.png" alt="White Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic13.png" alt="Garden Walkway"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic14.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic15.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic16.png" alt="Pond with Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic17.png" alt="Hidden Pond"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic18.png" alt="Shrine"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic19.png" alt="White Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic20.png" alt="Garden Walkway"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic21.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic22.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic23.png" alt="Pond with Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic24.png" alt="Hidden Pond"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic25.png" alt="Shrine"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic26.png" alt="White Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic27.png" alt="Garden Walkway"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic28.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic29.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic30.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic31.png" alt="Pond with Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic32.png" alt="Hidden Pond"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic33.png" alt="Shrine"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic34.png" alt="White Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic35.png" alt="Garden Walkway"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic36.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic37.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic38.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic39.png" alt="Hidden Pond"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic40.png" alt="Shrine"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic41.png" alt="White Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic42.png" alt="Garden Walkway"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic43.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic44.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic45.png" alt="Lilly with Bee"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic46.png" alt="Pink Water Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic47.png" alt="Pond with Lillies"></a>
                  </li>
                  <li class="mis-slide">
                      <a href="#" class="mis-container"><img src="../assets/images/scrollPic48.png" alt="Hidden Pond"></a>
                  </li>
              </ol>
          </div>
      </div>
      <!-- end row -->
  </div>
  <!-- 主体内容 -->
  <div class="wrapper">
      <div class="main">
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
                  <!-- <li role="presentation"><a href="#creditBox" aria-controls="creditBox" role="tab" data-toggle="tab">一周信用评价</a></li> -->
              </ul>

              <!-- Tab panes -->
              <div class="tab-content">
                  <div role="tabpanel" class="tab-pane active" id="newsBox">
                      <div class="newsPicBox">
                          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                              <!-- Indicators -->
                              <ol class="carousel-indicators">
                                  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                  <!-- <li data-target="#carousel-example-generic" data-slide-to="2"></li> -->
                              </ol>

                              <!-- Wrapper for slides -->
                              <div class="carousel-inner" role="listbox">
                                  <div class="item active">
                      <a href="news/news_15.html" target="_blank"><img src="../assets/img/news_15_4.jpg" alt="信用轻工"></a>
                                      <div class="carousel-caption">
                                            <a href="news/news_15.html" target="_blank">信用轻工</a>
                                      </div>
                                  </div>
                                  <!-- <div class="item">
                                      <a  href="javascript:;" target="_blank"><img src="../assets/img/news2.jpg" alt="诚信为本"></a>
                                      <div class="carousel-caption">
                                          <a href="javascript:;" target="_blank">诚信为本</a>
                                      </div>
                                  </div> -->
                                  <div class="item">
                                      <a href="news/news_3.html" target="_blank"><img src="../assets/img/news3.jpg" alt="信用无价"></a>
                                      <div class="carousel-caption">
                                          <a href="news/news_3.html" target="_blank">信用无价</a>
                                      </div>
                                  </div>
                              </div>

                              <!-- Controls -->
                              <!-- <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                                </a> -->
                          </div>
                      </div>
                      <div class="newsItemBox">
                          <ul>
                              <li>
                                 <p class="newsItemTitle"><a href="news/news_15.html" target="_blank">信用轻工</a></p>
                                 <p class="newsItemCont currentNews"><a href="news/news_15.html" target="_blank">中国轻工行业企业信用数据中心由中国轻工业信息中心发起成立，星数科技（北京）有限公司提供技术和运营支持，是中国轻工行业企业信用数据管理、研究的专业机构。</a></p>
                              </li>
                              <!-- <li>
                                  <p class="newsItemTitle"><a href="javascript:;" target="_blank">诚信为本</a></p>
                                  <p class="newsItemCont"><a href="javascript:;" target="_blank">诚信是社会的润滑剂，是人生的护身符。无论是在政治、经济、文化，还是在社会交往中，诚信都具有无可替代的巨大社会价值。然而，随着我国社会主义市场经济的深入拓展，许多违背诚信的现象开始逐步凸显。这些诚信缺失现象，破坏了社会生活和社会秩序的正常运行，危害甚大。</a></p>
                              </li> -->
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
                      <a class="item-icon" href="javascript:void(0)"><img src="../assets/img/jubao.png" alt=""></a>
                  </div>
                  <div class="side-item">
                      <h4><a href="javascript:void(0)">我要留言</a></h4>
                      <a class="item-icon" href="javascript:void(0)"><img src="../assets/img/comment.png" alt=""></a>
                  </div>
                  <div class="side-item" id="shareHover">
                      <h4><a href="javascript:void(0)">分享</a></h4>
                      <a class="item-icon" href="javascript:void(0)"><img src="../assets/img/share.png" alt=""></a>
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
          <!-- 新闻横向滚动图 -->
          <div class="roll-pic">
              <div class="subject-pics clearfix">
                  <span class="left-hander hander hidden">&lt;</span>
                  <span class="right-hander hander hidden">&gt;</span>
                  <div class="roll-pic-box">
                      <ul class="roll-pics">
                          <a href="javascript:;" target="_blank">
                              <img src="../assets/img/roll_pic1.jpg">
                              <div class="mask-hover" style="height: 0px;"><span>失信黑名单</span></div>
                          </a>
                          <a href="javascript:;" target="_blank">
                              <img src="../assets/img/roll_pic2.jpg">
                              <div class="mask-hover" style="height: 0px;"><span>诚信</span></div>
                          </a>
                          <a href="javascript:;" target="_blank">
                              <img src="../assets/img/roll_pic3.jpg">
                              <div class="mask-hover" style="height: 0px;"><span>企业信用评级</span></div>
                          </a>
                          <a href="javascript:;" target="_blank">
                              <img src="../assets/img/roll_pic4.jpg">
                              <div class="mask-hover" style="height: 0px;"><span>信用记录</span></div>
                          </a>
                          <a href="javascript:;" target="_blank">
                              <img src="../assets/img/roll_pic5.png">
                              <div class="mask-hover"><span>信用打分定级</span></div>
                          </a>
                      </ul>

                  </div>
              </div>
              <!-- end subject-pics -->

          </div>
          <v-newsList></v-newsList>
          <p class="main-bottom-banner">
              <a href="javascript:void(0)"><img src="../assets/img/banner715.jpg" alt=""></a>
          </p>
          <!-- 信用企业展示 -->
        <!--   <div class="credit-box">
              <div class="titleBox">
                  <h4 class="list-title"><a href="#">信用企业展示</a></h4>
              </div>
              <div id="carousel-credit" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                      <li data-target="#carousel-credit" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-credit" data-slide-to="1"></li>
                      <li data-target="#carousel-credit" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner" role="listbox">
                      <div class="item active">
                          <div class="container-fluid">
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="中国轻工行业企业信用数据中心" />
                                  <p class="company-name">中国轻工行业企业信用数据中心</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                          </div>
                      </div>
                      <div class="item">
                          <div class="container-fluid">
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="中国轻工行业企业信用数据中心" />
                                  <p class="company-name">中国轻工行业企业信用数据中心</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                          </div>
                      </div>
                      <div class="item">
                          <div class="container-fluid">
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="中国轻工行业企业信用数据中心" />
                                  <p class="company-name">中国轻工行业企业信用数据中心</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                              <a class="company-box" href="index.html" target="_blank">
                                  <img src="img_credit/xyqg.jpg" alt="此版块待添加企业logo及名称" />
                                  <p class="company-name">此版块待添加企业logo及名称</p>
                              </a>
                          </div>

                      </div>
                  </div>

                  <a class="left carousel-control" href="#carousel-credit" role="button" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#carousel-credit" role="button" data-slide="next">
                      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                  </a>
              </div>
          </div> -->
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
          <!-- 会议成员 -->
          <div class="container-fluid unit-list">
              <div class="row">
                  <div class="col-md-12">
                      <p class="unit-list-header">社会信用体系建设部际联席会议成员单位(排名不分先后)</p>
                  </div>
              </div>
              <div class="row">
                  <div class="unit-item col-md-2 col-xs-4">
                      <a href="http://www.ndrc.gov.cn/" alt="发展改革委" target="_blank">发展改革委</a>
                      <a href="#" alt="中央宣传部" target="_blank">中央宣传部</a>
                      <a href="http://www.nhfpc.gov.cn/" alt="卫生计生委" target="_blank">卫生计生委</a>
                      <a href="http://www.wenming.cn/" alt="税务总局" target="_blank">中央文明办</a>
                      <a href="http://www.sipo.gov.cn/" alt="知识产权局" target="_blank">知识产权局</a>
                      <a href="http://www.chinapeace.gov.cn/" alt="中央政法委" target="_blank">中央政法委</a>
                      <a href="http://www.acfic.org.cn/" alt="全国工商联" target="_blank">全国工商联</a>
                  </div>
                  <div class="unit-item col-md-2 col-xs-4">
                      <a href="http://www.pbc.gov.cn/" alt="人民银行" target="_blank">人民银行</a>
                      <a href="http://www.scopsr.gov.cn/" alt="中央编办" target="_blank">中央编办</a>
                      <a href="http://www.customs.gov.cn/" alt="海关总署" target="_blank">海关总署</a>
                      <a href="http://www.chinatax.gov.cn/" alt="税务总局" target="_blank">税务总局</a>
                      <a href="http://www.saic.gov.cn/" alt="工商总局" target="_blank">工商总局</a>
                      <a href="http://www.aqsiq.gov.cn/" alt="质检总局" target="_blank">质检总局</a>
                      <a href="http://www.scs.gov.cn/" alt="公务员局" target="_blank">公务员局</a>
                  </div>
                  <div class="unit-item col-md-1 col-xs-4">
                      <a href="http://www.court.gov.cn/" alt="高法院" target="_blank">高法院</a>
                      <a href="http://www.mca.gov.cn/" alt="民政部" target="_blank">民政部</a>
                      <a href="http://www.mcprc.gov.cn/" alt="文化部" target="_blank">文化部</a>
                      <a href="http://www.spp.gov.cn/" alt="高检院" target="_blank">高检院</a>
                      <a href="http://www.moj.gov.cn/" alt="司法部" target="_blank">司法部</a>
                      <a href="http://www.chinalaw.gov.cn/" alt="法制办" target="_blank">法制办</a>
                      <a href="http://www.mofcom.gov.cn/" alt="商务部" target="_blank">商务部</a>
                      <!-- <a href="#" alt="安全部" target="_blank">安全部</a> -->
                  </div>
                  <div class="unit-item col-md-2 col-xs-3">
                      <a href="http://www.moe.gov.cn/" alt="教育部" target="_blank">教育部</a>
                      <a href="http://www.mof.gov.cn/" alt="财政部" target="_blank">财政部</a>
                      <a href="http://www.cbrc.gov.cn/" alt="银监会" target="_blank">银监会</a>
                      <a href="http://www.moa.gov.cn/" alt="农业部" target="_blank">农业部</a>
                      <a href="http://www.csrc.gov.cn/" alt="证监会" target="_blank">证监会</a>
                      <a href="http://www.mps.gov.cn/" alt="公安部" target="_blank">公安部</a>
                      <a href="http://www.safe.gov.cn/" alt="外汇局" target="_blank">外汇局</a>
                      <a href="http://www.circ.gov.cn/" alt="保监会" target="_blank">保监会</a>
                  </div>
                  <div class="unit-item col-md-2 col-xs-4">
                      <a href="http://www.cac.gov.cn/" alt="中央网信办" target="_blank">中央网信办</a>
                      <a href="http://www.ccyl.org.cn/" alt="全国工商联" target="_blank">共青团中央</a>
                      <a href="http://www.mep.gov.cn/" alt="环境保护部" target="_blank">环境保护部</a>
                      <a href="http://www.china-railway.com.cn/" alt="铁路总公司" target="_blank">铁路总公司</a>
                      <a href="http://www.moc.gov.cn/" alt="交通运输部" target="_blank">交通运输部</a>
                  </div>
                  <div class="unit-item col-md-3 col-xs-5">
                      <a href="http://www.chinasafety.gov.cn/" alt="安全监管总局" target="_blank">安全监管总局</a>
                      <a href="http://www.miit.gov.cn/" alt="工业和信息化部" target="_blank"> 工业和信息化部</a>
                      <a href="http://www.mohurd.gov.cn/" alt="住房城乡建设部" target="_blank">住房城乡建设部</a>
                      <a href="http://www.sda.gov.cn/" alt="食品药品监管总局" target="_blank">食品药品监管总局</a>
                      <a href="http://www.mohrss.gov.cn/" alt="人力资源和社会保障部" target="_blank">人力资源和社会保障部</a>
                  </div>
              </div>
          </div>
      </div>
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
export default {
  data() {
    return {
    };
  },
  computed: {},
  mounted(){
    const vm = this
    $('#carousel-credit').carousel({
      interval: 10000
    })
    this.misliderEvent()
    this.maskAnimate()
    //搜索导航栏切换
    $(".search-form-block a").click(function() {
        $(".search-form-block").find("a").removeClass("current");
        $(this).addClass("current");

        var key = $("#searchKey").val();
        if (key === "" || key == "可以按企业名称、注册号、地址、品牌查询" || key == "按企业名称查询" || key == "按董高监查询" || key == "按地址查询" || key == "按经营范围查询" || key == "按品牌/产品查询") {
            // $("#searchKey").val($(this).attr("tip"));
            $("#searchKey").attr('placeholder', $(this).attr("tip"));
        }
    });

    $("#searchBtn").click(function() {
        vm.layerText('数据库正在建设中');
    });

    var scrWidth = window.screen.width;
     var sildeWidth = scrWidth/2 + 7;
     if(scrWidth>640){
         this.slideAnimate(180,500);
     }else{
         $('.roll-pics img').css({width:scrWidth/2});
         $('.subject-pics a').css({width:scrWidth/2});
         $('.mask-hover span').css({width:scrWidth/2});
         $('.mask-hover').css({width:scrWidth/2});
         this.slideAnimate(sildeWidth, 500);
     }
     $('.newsItemBox li').each(function() {
           $(this).mouseover(function(){
               $(this).find('.newsItemCont').addClass('currentNews');
               $(this).siblings('li').find('.newsItemCont').removeClass('currentNews');
           });
       });
       //分享图标显隐
       $('#shareHover').hover(function(){
           $('.share-icon-box').toggle();
       });
  },
  attached() {},
  methods: {
    misliderEvent() {
       var scrWidth = window.screen.width;
       if (scrWidth > 640) {
           $('.mis-stage').miSlider({
               speed: 200, //轮播速度
               stageHeight: 250, //轮播高度
               slidesOnStage: false, //滚动图片显示张数
               slidePosition: 'center', //图片位置
               slideStart: 'mid', //开始滚动图片位置
               slideScaling: 150, //缩放比例
               navList: false, //原点按钮是否显示
               navButtons: true, //箭头按钮是否显示
               navButtonsShow: true, //箭头按钮一直显示
               navButtonsOpacity: 1 //箭头按钮透明度
           });
       } else {
           $('.mis-stage').miSlider({
               speed: 200, //轮播速度
               stageHeight: 250, //轮播高度
               slidesOnStage: 3, //滚动图片显示张数
               slidePosition: 'center', //图片位置
               slideStart: 'mid', //开始滚动图片位置
               slideScaling: 300, //缩放比例
               navList: false, //原点按钮是否显示
               navButtons: true, //箭头按钮是否显示
               navButtonsShow: true, //箭头按钮一直显示
               navButtonsOpacity: 1 //箭头按钮透明度
           });
       }
     },
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
        maskAnimate() {
            var $hoverMain = $('.roll-pics a');

            $hoverMain.hover(function () {
                var $this = $(this);
                $this.find('.mask-hover').css('height', '75px');
            }, function () {
                var $this = $(this);
                $this.find('.mask-hover').css('height', '0');
            });
        },
        //显示layer
       showLayer(){
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
  components: {vNewsList}
};
</script>

<style lang="less">
</style>
