<template>
  <div class="profile">
    <HeaderTop/>
    <div class="profile_content">
      <!--严选-->
      <div class="strict">
        <div class="strict_img">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
      </div>
      <!--登陆-->
      <div class="login">
        <div class="login_phone" @click="goLogin(true)">
          <i class="iconfont icon-19" ></i>
          <span>手机号码登录</span>
        </div>
        <div class="login_mail" @click="goLogin(false)">
          <i class="iconfont icon-xin"></i>
          <span>邮箱帐号登录</span>
        </div>
        <div class="register">
          <span>手机号快捷注册</span>
          <i class="iconfont icon-you2"></i>
        </div>
      </div>

      <!--底部-->
      <div class="foot">
        <div class="foot_content">
          <div class="footwei" >
            <i class="iconfont icon-weixin"></i>
            <span>微信</span>
          </div>
          <div class="footqq">
            <i class="iconfont icon-QQ"></i>
            <span>QQ</span>
          </div>
          <div class="footbo">
            <i class="iconfont icon-weibo"></i>
            <span>微博</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    data () {
      return {
        loginWay: null
      }
    },
    components: {
      HeaderTop,
    },
    methods: {
      goLogin (loginWayT) {
        this.loginway = loginWayT
        this.$router.replace('/register')
        this.$store.dispatch('getloginWay',this.loginway)
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background  #F2F5F4
    .profile
      width 100%
      height 100%
      .profile_content
        width 90%
        height 100%
        padding-top 40px
        margin auto
        .strict
          width 100%
          height 200px
          text-align center
          .strict_img
            width 100%
            height 200px
            line-height 200px
            img
              width 150px
              display inline-block
              background-size 100%
        .login
          width 100%
          height 150px
          .login_phone
            width 100%
            height 45px
            background #b4282d
            border 1px solid #b4282d
            text-align center
            line-height 45px
            margin-bottom 10px
            .iconfont
              color #fff
            span
              display inline-block
              width 103px
              height 45px
              color white
              font-size 14px
          .login_mail
            width 100%
            height 45px
            border 1px solid #b4282d
            text-align center
            line-height 45px
            color #b4282d
            span
              display inline-block
              width 103px
              height 45px
              color #b4282d
              font-size 14px
            .icon-xin
              color #b4282d
              font-size 14px
          .register
            width 100%
            height 45px
            text-align center
            line-height 45px
            span
              display inline-block
              width 115px
              height 45px
              font-size 14px
        .foot
          width 100%
          height 100px
          margin-top 168px
          .foot_content
            width 80%
            margin auto
            display flex
            text-align center
            .footwei
              width 100px
              border-right 1px solid #979797
            .footqq
              width 100px
              border-right 1px solid #979797
            .footbo
              width 100px
      .iconfont
        display inline-block
        font-size 16px
        color #333
</style>
