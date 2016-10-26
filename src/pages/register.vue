<template lang="html">
  <div class="wrapper">
        <form method="post" action="#" id="contForm" class="form form-inline">
            <div class="form-item">
                <label for="companyName" class="form-lable">*企业名称：</label>
                <input type="text" id="companyName" name="companyName" class="form-text" placeholder="">
            </div>
            <div class="form-item">
                <label for="userName" class="form-lable">*用户名：</label>
                <input type="text" id="userName" name="userName" class="form-text" placeholder="">
            </div>
            <div class="form-item">
                <label for="passWd" class="form-lable">*密码：</label>
                <input type="password" id="passWd" name="passWd" class="form-text" placeholder="">
            </div>
            <div class="form-item">
                <label for="confirm_passWd" class="form-lable">*确认密码：</label>
                <input type="password" id="confirm_passWd" name="confirm_passWd" class="form-text" placeholder="">
            </div>
            <div class="form-item">
                <label for="contacter" class="form-lable">*联系人：</label>
                <input type="text" id="contacter" name="contacter" class="form-text">
            </div>
            <div class="form-item">
                <label for="telephone" class="form-lable">*联系电话</label>
                <input type="tel" id="telephone" name="telephone" class="form-text">
            </div>
            <div class="form-item">
                <label for="phoneNo" class="form-lable">手机号码：</label>
                <input type="tel" id="phoneNo" name="phoneNo" class="form-text">
            </div>
            <div class="form-item">
                <label for="area" class="form-lable">*区域：</label>
                <select id="area" name="area" class="form-text">
                    <option value=""></option>
                    <option value="成都市">成都市</option>
                    <option value="北京市">北京市</option>
                    <option value="上海市">上海市</option>
                    <option value="天津市">天津市</option>
                </select>
            </div>
            <div class="form-item">
                <label for="businessCategory" class="form-lable">行业分类：</label>
                <input type="text" id="businessCategory" name="businessCategory" class="form-text">
            </div>
            <div class="form-item">
                <label for="email" class="form-lable">*email地址：</label>
                <input type="email" id="email" name="email" class="form-text">
            </div>
            <div class="form-item item-uploader">
                <label class="form-lable">档案图片：</label>
                <div id="uploader" class="wu-example">
                    <div class="btns">
                        <div id="picker">选择文件</div>
                        <button id="ctlBtn" type="button">开始上传</button>
                    </div>
                    <div id="imgWrap"></div>
                </div>
            </div>
            <div class="form-item item-verify">
                <label for="verifyCode" class="form-lable">验证码：</label>
                <input type="text" id="verifyCode" name="verifyCode" class="form-text" placeholder="请输入验证码">
                <input type="text" name="checkCode" id="checkCode"  class="form-text verify-text"  readonly="readonly"/>
                <a href="javascript:;" id="switchCode">换一张</a>
            </div>
            <div class="form-item item-btns item-diff">
                <button type="submit" id="submitBtn" name="submitBtn" class="submit-btn">提交</button>
                <button type="reset" id="resetBtn" name="resetBtn" class="reset-btn" onclick="window.location.reload()">重置</button>
            </div>
        </form>
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
    this.createCode()
  },
  attached() {},
  methods: {
    //生产验证码
     createCode() {
         var code = "";
         var codeLength = 6; //验证码的长度
         var checkCode = $("#checkCode");
         var codeArr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的

         for (var i = 0; i < codeLength; i++) {
             var pos = Math.floor(Math.random() * 36);
             code += codeArr[pos];
         }
         if (checkCode) {
             checkCode.val(code);
         }
     },
  },
  components: {}
};
</script>

<style lang="css">
</style>
