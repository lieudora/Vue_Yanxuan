<template>
  <div class="classifier">
    <!--内容-->
    <div class="classifier_content">
        <!--头-->
      <div class="classifier_header">
        <div class="search">
          <div class="search_content">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品, 共9882款好物</span>
          </div>
        </div>
      </div>
      <!--左侧-->
      <div class="classifier_left">
        <ul class="lists">
          <li v-for="(L1List, index) in classifier.categoryL1List" :key="index" @click="getIndex(index)" :class="{active: indexActive === index}">{{L1List.name}}</li>
        </ul>
      </div>
      <!--右侧-->
      <Classright :indexActive="indexActive" :classifier="classifier"/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  import Classright from './Classright/Classright'
  export default {
    data(){
      return{
        indexActive : 3,

      }
    },
    mounted () {
      this.$store.dispatch('getClassifier')
    },
    computed: {
      ...mapState(['classifier'])
    },
    methods:{
      getIndex(index){
        // this.L1List = L1List
        this.indexActive = index
         // console.log(this.L1List)
      }
  },
    components: {
      Classright
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .classifier
    width 100%
    height 100%
    .classifier_content
      width 100%
      height 100%
      .classifier_header // 头部
        width 100%
        height 35px
        font-size 15px
        border-bottom 1px solid #d9d9d9
        .search
          width 90%
          height 100%
          margin 7px 0 0 19px
          .search_content
            width 100%
            height 27px
            background #ededed
            border-radius 5px
            line-height 27px
            color #333
            .iconfont
              display inline-block
              margin-left  23%
            span
              display inline-block
      .classifier_left
        width 21.5%
        height 100%
        display inline-block
        border-right 1px solid #d9d9d9
        vertical-align top
        .lists
          width 100%
          height 100%
          li
            width 100%
            height 25px
            text-align center
            margin-top 19px
            display block
            font-size 14px
            color #333
            letter-spacing 1px
            &.active
              border-left 3px solid #BE464A
              font-size 15px

</style>
