<template>
  <!--右侧-->
  <div class="right">
    <!--图-->
    <div class="right_title" v-if="classifier.categoryL1List">
      <img :src="classifier.categoryL1List[indexActive].bannerUrl" alt="">
      <div class="title">
        <i class="iconfont icon-yi"></i>
        <span>{{classifier.categoryL1List[indexActive].name}}分类</span>
        <i class="iconfont icon-yi"></i>
      </div>
    </div>
    <!--下标-->
    <div class="right_picture" v-if="classifier.categoryL1List">
      <ul class="right_lists">
        <li class="right_li"  v-for="(sub, index) in classifier.categoryL1List[indexActive].subCateList" :key="index">
          <a href="#">
            <img :src="sub.wapBannerUrl" alt="pic">
            <div class="right_text">
              {{sub.name}}
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
   props: {
     indexActive:Number,
     classifier:{}
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .right // 右侧
    width 76.5%
    height 100%
    display inline-block
    .right_title
      width 100%
      height 160px
      font-size 13px
      img
        display block
        width 90%
        height 100px
        margin 14px
      .title
        width 100%
        height 40px
        line-height 40px
        text-align center
        .iconfont,span
          display inline-block
    .right_picture
      width 100%
      height 100%
      .right_lists
        width 100%
        .right_li
          display inline-block
          width 32%
          height 118px
          overflow hidden
          img
            width 81px
            height 81px
            background-size 100%
            margin auto
          .right_text
            width 100%
            height 50px
            text-align center
            font-size 12px
            vertical-align top
            line-height 20px
</style>
