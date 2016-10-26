<template lang="html">
  <div class="wrapper">
        <form method="post" action="#" id="loginForm" class="form form-inline">
            <h1 class="form-header">用户登录</h1>
            <div class="form-item">
                <label for="userName" class="form-lable">*用户名：</label>
                <input type="text" id="userName" name="userName" class="form-text" placeholder="可以使用企业名称、用户名登录">
            </div>
            <div class="form-item">
                <label for="passWd" class="form-lable">*密码：</label>
                <input type="password" id="passWd" name="passWd" class="form-text" placeholder="">
            </div>
            <div class="form-item item-rember">
               <label class="remeber-me"><input type="checkbox" name="remeber" value="" />记住我</label>
               <a class="forget-pw" href="javascript:;">忘记密码？</a>
           </div>
           <div class="form-item item-btn">
               <button class="loginBtn" type="button" name="login">登录</button>
           </div>
           <div class="form-item item-register">
               <p>没有帐号?请
                 <!-- <a class="register-text" href="register.html">马上注册</a> -->
                 <router-link to="/register" class="register-text">马上注册</router-link>
               </p>
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
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
