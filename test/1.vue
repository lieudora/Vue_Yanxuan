<template>
  <div>
    v-for="(cate, index) in maison.cateList" :key="index"
    v-for="(item, index) in cate.itemList" :key="index"
    <div class="home_img" >
      <img :src="item.bannerUrl" alt="">
    </div>
    <div class="home_brief">
      {{item.simpleDesc}}
    </div>
    <div class="home_name">
      <span>{{item.name}}</span>
    </div>
    <div class="home_price">
      <span>¥</span>
      <span>{{item.retailPrice}}</span>
    </div>
  </div>

  &:nth-child(1)
  background-image url("//yanxuan.nosdn.127.net/edb7f81b6262124a02de2a18c1da772c.jpg")
  background-size 100%
  &:nth-child(2)
  background-image url("//yanxuan.nosdn.127.net/e462daf8fece47aed8cfb8a8d0af8fb8.jpg")
  background-size 100%
  &:nth-child(3)
  background-image url("//yanxuan.nosdn.127.net/0e6cc440246db5f3ea2e908c16554ec1")
  background-size 100%

  <div class="right_title" v-if="classifier.categoryL1List">
    <img :src="classifier.categoryL1List[indexActive].bannerUrl" alt="">
    <div class="title">
      <i class="iconfont icon-yi"></i>
      <span>{{classifier.categoryL1List[indexActive].name}}分类</span>
      <i class="iconfont icon-yi"></i>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
