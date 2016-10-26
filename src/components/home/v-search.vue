<template lang="html">
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
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  mounted() {
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
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
