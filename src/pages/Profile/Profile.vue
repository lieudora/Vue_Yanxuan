<template>
  <div class="profile">
    <div class="profile_content">
      <!--严选-->
      <div class="strict">
        <div class="strict_text">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div>
          <a href="#">短信登录</a>
          <a href="#">密码登录</a>
        </div>
      </div>
      <!--登陆-->
      <div>
        <form>
          <div>
            <input type="tel" :maxlength="11" placeholder="手机号">
            <button>获取验证码</button>
          </div>
          <div>
            <input type="tel" maxlength="8" placeholder="验证码">
          </div>
          <div>
            温馨提示：未注册严选帐号的手机号，登录时将自动注册，且代表您已同意
            <a href="javascript:;">《用户服务协议》</a>
          </div>
          <button>登录</button>
          <a href="javascript:;">关于我们</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .profile
    width 100%
    height 100%
    .profile_content
      width 80%
      height 100%
      background antiquewhite
</style>
