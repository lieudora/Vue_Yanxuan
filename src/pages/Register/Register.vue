<template>
  <div class="register_wrap">
    <HeaderTop/>
    <div class="register">
      <div class="register_content">
        <!--严选-->
        <div class="strict">
          <div class="strict_img">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
        </div>
      </div>
      <!--登录切换-->
      <div class="login_header_title">
        <a href="javascript:;" class="on" v-show="loginway">
          <span>短信登录</span>
        </a>
        <a href="javascript:;" class="on" v-show="!loginway">
          <span>用户名登录</span>
        </a>
      </div>
      <!--验证-->
      <div class="verify">
        <form @submit.prevent="login">
          <!--登陆-->
          <div class="on showinput" v-show="!loginway">
            <div class="verify_login">
              <input type="tel" placeholder="请输入手机号" maxlength="11" v-model="phone">
            </div>
            <div class="verify_register">
              <input type="password" placeholder="密码" v-model="pwd">
            </div>
            <div class="captcha">
              <input type="text" placeholder="验证码" maxlength="6" v-model="captcha">
            </div>
          </div>
          <!--用户名登录-->
          <div class="on showinput" v-show="loginway" >
            <div class="verify_login">
              <input placeholder="用户名注册"  v-model="name">
            </div>
            <div class="verify_register">
              <input type="password" placeholder="密码" v-model="pwd">
            </div>
          </div>

          <div class="btn">
            <div class="btn_login" @click="logins">
              <a href="#">登录</a>
            </div>
            <div class="btn_else">
              <a href="javascript:;">其他登录方式</a>
            </div>
            <div class="btn_register">
              <a href="javascript:;">
                注册帐号
                <i class="iconfont icon-you2"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <AlertTip :alertText="alertText" v-show="alertShow" @closeTip="closeTip"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import AlertTip from '../../components/AlertTip/AlertTip'
  export default {
    data () {
      return {
       // loginway: true, // true代表短信登陆, false代表密码
        phone:'',
        pwd:'',
        captcha:'',
        name:'',
        alertText:'', // 提示文本
        alertShow: false, // 是否显示警告框
      }
    },
    computed: {
      ...mapState(['loginway']),
      rightPhone () {
        return /^1\d{10}$/.test(this.phone)
      },

    },
    methods: {
      // 登录验证
      showAlert(alertText) {
        this.alertShow = true
        this.alertText = alertText
      },
      logins () {
        // 前台验证
        if(!this.loginway){
          if(!this.rightPhone){
            MessageBox({
              title: '提示',
              message: '手机号不正确！',
              showCancelButton: true
            })
            return
          } else if(!/^\d{6}$/gi.test(this.captcha)){
            // 验证必须是6位数字
            MessageBox({
              title: '提示',
              message: '验证必须是6位数字！',
              showCancelButton: true
            })
            return
          }
        } else {
          // 用户登录
          if (!this.name) {
            MessageBox({
              title: '提示',
              message: '用户必须指定！',
              showCancelButton: true
            })
            return
          } else if(!this.pwd){
            MessageBox({
              title: '提示',
              message: '密码必指定！',
              showCancelButton: true
            })
            return
          }
        }
        this.showAlert('登陆成功,即将跳转到首页')
        setTimeout(() => {
          this.$router.replace('/maison')
          this.closeTip ()
        },1000)
      },
      // 关闭警告框
      closeTip () {
        this.alertShow = false
        this.alertText = ''
      }
    },
    components: {
      HeaderTop,
      AlertTip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    width 100%
    height 100%
    .register
      width 80%
      height 100%
      padding-top 40px
      margin auto
      .register_content
        height 150px
        line-height 200px
        .strict
          width 130px
          margin auto
          img
            display inline-block
            background-size 100%
            width 100%
      .login_header_title
        height 30px
        margin auto
        width 60%
        display flex
        text-align center
        a
          width 100px
          flex 1
          margin 0 5px
          &.on
            border-bottom 2px solid #b4282d
      .verify
        width 100%
        height 340px
        form
          width 100%
          height 340px
          .showinput
            width 100%
            height 160px
            display none
            &.on
              display block
            .verify_login
              width 100%
              height 50px
              background #f4f4f4
              border-bottom 1px solid #777
              input
                background #f4f4f4
                height 100%
                width 100%
            .verify_register
              width 100%
              height 50px
              border-bottom 1px solid #777
              input
                background #f4f4f4
                height  100%
                width 100%
            .captcha
              width 100%
              height 50px
              border-bottom 1px solid #777
              input
                background #f4f4f4
                height  100%
                width 100%
            .issue
              position relative
              width 100%
              height 40px
              line-height 40px
              color #333
              .left
                position absolute
                width 49%
                height 40px
                left 0
                top 0
              .right
                width 49%
                height 50px
                right 0
                span
                  position absolute
                  display inline-block
                  right 0

          .btn
            width 100%
            height 100px
            .btn_login
              width 100%
              height 45px
              text-align center
              line-height 45px
              background #b4282d
              border-radius 2px
              a
                display inline-block
                color white
            .btn_else
              width 100%
              height 45px
              text-align center
              line-height 45px
              border-radius 2px
              border 1px solid #b4282d
              box-sizing border-box
              margin-top 10px
              a
                display inline-block
                color #b4282d
            .btn_register
              width 100%
              height 45px
              text-align center
              line-height 45px
              a
                display inline-block
                color #333


</style>
