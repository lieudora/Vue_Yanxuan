<template>
  <div class="order">
    <div class="order_top">
      <div class="order_title">
        <span>购物车</span>
      </div>
      <div class="order_lists">
        <ul class="order_rule">
          <li>
            <i class="iconfont icon-dian"></i>
            30天无忧退货
          </li>
          <li>
            <i class="iconfont icon-dian"></i>
            48小时快速退款
          </li>
          <li>
            <i class="iconfont icon-dian"></i>
            满88元免邮费
          </li>
        </ul>
      </div>
    </div>
    <div class="order_content">
      <img src="./image/char.png" alt="">
      <div class="order_content_text">去添加点什么吧</div>
      <div class="order_btn">登录</div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  width 100%
  background-color #F4F4F4
  height 100%
  .order
    width 100%
    height 100%
    .order_top
      width 100%
      height 100px
      .order_title
        height 45px
        width 100%
        text-align center
        line-height 40px
        background-color white
        span
          font-size 18px
      .order_lists
        width 100%
        height 80px
        .order_rule
          display inline-block
          width 100%
          height 40px
          line-height 40px
          text-align center
          font-size 12px
          li
            display inline-block
            width 33.3%
            float left
            color  #666
    .order_content
      position relative
      width 100%
      height 220px
      text-align center
      margin-top 140px
      img
        display inline-block
        width 124px
        height 124px
      .order_content_text
        width 100%
        height 40px
        font-size 12px
        color  #999
      .order_btn
        margin auto
        width 65%
        height 45px
        font-size 18px
        background-color #B4282D
        line-height 40px
        color white
        border-radius 3px
  .iconfont
    display inline-block
    font-size 15px
    color  #D9D9D9
</style>
