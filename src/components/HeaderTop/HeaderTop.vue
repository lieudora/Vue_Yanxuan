<template>
  <div class="headertop">
    <div class="header">
      <div class="left">
        <router-link href="jacascript:;" to="/maison">
          <i class="iconfont icon-shouye"></i>
        </router-link>
      </div>
      <div class="centre">
        <a href="jacascript:;">网易严选</a>
      </div>
      <div class="right">
        <span>
          <router-link to="/maison">
              <i class="iconfont icon-sousuo"></i>
          </router-link>
        </span>
        <span>
          <router-link to="/order">
            <i class="iconfont icon-gouwuche1"></i>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headertop
    width 100%
    height 40px
    display flex
    text-align center
    position fixed
    border-bottom 1px solid #f1f1f1
    background-color #FAFAFA
    z-index 10
    .header
      line-height 40px
      position relative
      width 90%
      .left
        float left
        display inline-block
        width 20%
        height 100%
        font-size 24px
        .icon-shouye
          font-size 24px
          color #777
      .centre
        float left
        display inline-block
        width 59%
        font-size 18px
        margin-left 10px
        a
          color #444
      .right
        float right
        display inline-block
        width 18%
        height 100%
        span
          display inline-block
          &:nth-child(2)
            margin 0 -24px 0 23px
          .icon-sousuo,.icon-gouwuche1
            font-size 24px
            color #777

</style>
