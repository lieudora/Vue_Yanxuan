<template>
  <section class="maison">
    <!--头部-->
    <div class="header_nav">
      <div class="maison_header">
        <div class="logo">网易严选</div>
        <div class="search">
          <div class="search_content">
            <img src="./images/search.png"/>
            <span>搜索商品, 共9882款好物</span>
          </div>
        </div>
      </div>
      <!--导航-->
      <div class="nav" >
        <ul class="list">
          <li class="tab" v-for="(headList, index) in maison.headCateList" :key="index" @click="getIndex(index)" :class="{active: activeIndex === index}">
            <span class="text">
              {{headList.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!--无缝滑屏-->
    <div class="swiper">
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="(focus, index) in maison.focusList" :key="index">
            <a href="javascript:;" class="swiper-imgs">
              <div class="swiper-img">
                <img :src="focus.picUrl">
              </div>
            </a>
          </div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="service_policy">
        <ul class="service_policy_lists">
          <li class="item">
            <i class="iconfont icon-gouxuan"></i>
            <span class="text">网易自营品牌</span>
          </li>
          <li class="item">
            <i class="iconfont icon-gouxuan"></i>
            <span class="text">30天无忧退货</span>
          </li>
          <li class="item">
            <i class="iconfont icon-gouxuan"></i>
            <span class="text">48小时快速退款</span>
          </li>
        </ul>
      </div>
    </div>

    <!--品牌直供-->
    <div class="fabricant">
      <header class="fabricant_title">
        <a href="javascript:;">
          <div class="fabricant_text">
            <p>品牌制造商直供</p>
            <i class="iconfont icon-you1"></i>
          </div>
        </a>
      </header>
      <div class="fabricant_classer">
        <ul class="fabricant_lists" >
          <li class="fabricant_item left" v-for="(tag, index) in maison.tagList" :key="index">
            <a href="javascript:;">
              <div class="manufacturer">
                <h4 class="manufacturer_title">{{tag.name}}</h4>
                <div class="manufacturer_price">
                  <span>{{tag.floorPrice}}</span>
                  <span>元起</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!--新品首发-->
    <div class="nouveautes">
      <header class="nouveautes_title">
        <a href="javascript:;">
          <div class="new_title">
            <div class="title">新品首发</div>
          </div>
          <div class="complet">
            <p>查看全部</p>
            <i class="iconfont icon-you2"></i>
          </div>
        </a>
      </header>
      <div class="nouveautes_lists">
        <div class="pic-wrapper">
          <ul class="pic-list">
            <li class="pic-item" v-for="(newItem, index) in maison.newItemList" :key="index">
              <a href="javascript:;">
                <img width="120" height="90" :src="newItem.listPicUrl"/>
                <div class="brand_price">
                  <div class="present">
                    <p>满赠</p>
                  </div>
                  <div class="brand">
                    <span>{{newItem.name}}</span>
                  </div>
                  <div class="explosive">{{newItem.simpleDesc}}</div>
                  <div class="price">
                    <span>¥</span>
                    <span>{{newItem.retailPrice}}</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--人气推荐-->
    <div class="recommander">
      <header class="recommander_title">
        <a href="javascript:;">
          <div class="new_title">
            <div class="title">人气推荐 · 好物精选</div>
          </div>
          <div class="complet">
            <p>查看全部</p>
            <i class="iconfont icon-you2"></i>
          </div>
        </a>
      </header>
      <div class="recommander_lists">
        <div class="pic-wrapper-two">
          <ul class="pic-list">
            <li class="pic-item"  v-for="(popularItem, index) in maison.popularItemList" :key="index">
              <a href="javascript:;">
                <img width="120" height="90" :src="popularItem.listPicUrl"/>
                <div class="brand_price">
                  <div class="present">
                    <p>满赠</p>
                  </div>
                  <div class="brand">
                    <span>{{popularItem.name}}</span>
                  </div>
                  <div class="explosive">{{popularItem.simpleDesc}}</div>
                  <div class="price">
                    <span>¥</span>
                    <span>{{popularItem.retailPrice}}</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--严选限时购-->
    <div class="time_limit">
      <div class="time_limit_left">
        <div class="limit">
          <div class="limit_text">严选限时购</div>
        </div>
        <div class="time">
          <span class="hours">00</span>
          <span class="colon">:</span>
          <span class="mins">00</span>
          <span class="colon">:</span>
          <span class="secs">00</span>
        </div>
        <div class="rest_time">
          <span>
            <span>下一场 </span>
            <span>22:00</span>
            <span> 开始</span>
          </span>
        </div>
      </div>
      <div class="time_limit_right">
        <img src="http://yanxuan.nosdn.127.net/ff5af94280c6e588aa3d83304461460b.png?imageView&quality=85&thumbnail=330x330" alt="">
        <div class="price">
          <div class="details_price">
            <div class="unit_price">
              <span>¥</span>
              <span>45</span>
            </div>
            <div class="unit_price">
              <span>¥</span>
              <span>59</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--福利社-->
    <div class="welfare">
      <a href="javascript:;">
        <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt="">
      </a>
    </div>

    <!--专题精选-->
    <div class="selection">
        <header class="selection_title">
          <a href="javascript:;">
            <div class="selection_text">
              <p>专题精选</p>
              <i class="iconfont icon-you1"></i>
            </div>
          </a>
        </header>
        <div class="selection_content">
          <ul class="selection_lists">
            <div class="selection_list" >
              <li v-for="(topic, index) in maison.topicList" :key="index">
                <a href="javascript:;">
                  <img :src="topic.scenePicUrl" alt="">
                </a>
                <div class="selection_bottom">
                  <h4>{{topic.title}}</h4>
                  <span>
                    <span>元起</span>
                    <span>{{topic.priceInfo}}</span>
                  </span>
                </div>
                <div class="brief">{{topic.subtitle}}</div>
              </li>
            </div>
          </ul>
        </div>
    </div>

    <!--居家好物-->
    <div class="home" v-for="(cate, index) in maison.cateList" :key="index">
      <header class="home_title" >

        <a href="javascript:;">
          <div class="home_text" >
            <p>{{cate.name}}好物</p>
          </div>
        </a>
      </header>
      <div class="home_content" >
        <div class="home_con">
          <div class="home_lists"  v-for="(item, index) in cate.itemList" :key="index">
            <div class="home_img" >
              <img :src="item.listPicUrl" alt="">
            </div>
            <div class="home_brief">
              宽细夹排，升级爽滑凉感
            </div>
            <div class="home_name">
              <span>天然宽篾头层青碳化竹凉席</span>
            </div>
            <div class="home_price">
              <span>¥</span>
              <span>124</span>
            </div>
          </div>
        </div>
      </div>


    </div>
    <!--footer-->
    <footer>
      <div class="foot">
        <div class="foot_top">
          <div class="foot_left">下载APP</div>
          <div class="foot_right">电脑版</div>
        </div>
        <div class="foot_bottom">
          <div class="bottom_top">网易公司版权所有 © 1997-</div>
          <div class="bottom">食品经营许可证：JY13301080111719</div>
        </div>
      </div>
    </footer>
    <Gotop/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  import Gotop from '../../components/Gotop/Gotop'
  export default {
    data(){
      return{
        activeIndex:0
      }
    },
    mounted () {
       // 触发dispatch获得数据
      this.$store.dispatch('getMaison')
       // 导航
      let nav = new BScroll ('.nav', {scrollX: true})
      // 新品首发
      let scroll = new BScroll ('.pic-wrapper', {scrollX: true})
      // 人气推荐
      let scrollTwo = new BScroll ('.pic-wrapper-two', {scrollX: true})
      // 专题精选
      let scrollSelection = new BScroll ('.selection_lists', {scrollX: true})
    },
    computed: {
      ...mapState(['maison']),

    },
    watch: { // maison对象中有数据了, 在异步更新界面之前执行
      maison (value) {
        this.$nextTick(() => {
          // swiper
          new Swiper('.swiper-container', {
            autoplay: {
              delay: 5000,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      }
    },
   methods:{
     getIndex(index) {
       this.activeIndex = index
     }
   },
    components:{
      Gotop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    /*overflow-x hidden*/
  .maison
    position relative
    width 100%
    height 100%
    background #FFFFFF
    .header_nav // 头部
      width 100%
      height 85px
      position fixed
      background #fff
      z-index 10
      .maison_header
        width 100%
        position relative
        .logo
          float left
          width 20%
          height 27px
          font-size 16px
          font-family Arial "Microsoft YaHei"
          margin 18px 0 0 13px
        .search
          float right
          background #EDEDED
          width 70%
          height 31px
          border-radius 5px
          margin 12px 16px 0 0
          .search_content
            margin 7px 0 0 50px
            img
              width 13px
              height 13spx
            span
              color #666
              width 211px
              height 20px
              font-size 13px
      .nav
        width 100%
        height 40px
        display flex
        overflow hidden
        .list
          display flex
          justify-content space-between
          align-items center
          margin-top 13px
          .tab
            display inline-block
            padding 0 7px
            margin-left 8px
            .text
              display inline-block
              width 50px
              height 20px
              justify-content space-between
              text-align center
            &.active
              border-bottom 2px solid #BE464A
              color #BE464A
            .text
              font-size 16px
    .swiper // 无缝滑屏
      width 100%
      height 220px
      padding 85px 0  45px 0
    .swiper-container
      width 100%
      height 100%
      img
        width 100%
        height 220px
     .service_policy
       width 100%
       line-height 43px
       .service_policy_lists
         position relative
         width 100%
         height 43px
         line-height 43px
         .item
           float left
           width 32%
           height 45px
           display block
           font-size 13px
           text-align center
           line-height 43px
           color #333
           .icon-gouxuan
             display inline-block
             color #BE464A
    .fabricant // 品牌直供
      width 100%
      background white
      border-top 9.6px solid #EDEDED
      .fabricant_title
        width 100%
        height 54px
        .fabricant_text
          font-size 16px
          line-height 54px
          text-align center
          color #333
          p
            display inline-block
      .fabricant_classer
        width 100%
        height 235px
        .fabricant_lists
          width 100%
          height 235px
          .fabricant_item
            display inline-block
            width 48%
            height 113px
            margin 0 0 5px 1px
            &.left
              margin-left 5px
            &:nth-child(1)
              background url('//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png')
              background-size 100%
            &:nth-child(2)
              background url('//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png')
              background-size 100%
            &:nth-child(3)
              background url('//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png')
              background-size 100%
            &:nth-child(4)
              background url('//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png')
              background-size 100%
          .manufacturer
            width 175px
            height 60px
            padding 12px
            box-sizing border-box
            .manufacturer_title
              font-size 13px
              color black
              padding-bottom 9px
            .manufacturer_price
              span
                display inline-block
                font-size 14px
                color black
          .pliocene
            font-size 14px
            color #B4A078
            float left
            padding-left 13px

    .nouveautes // 新品首发
      width 100%
      height 386px
      .nouveautes_title
        display flex
        width 100%
        height 130px
        background-image url("./images/new.png")
        background-repeat no-repeat
        background-size 100%
        text-align center
        flex-direction column
        justify-content center
        align-items center
        .new_title
          position absolute
          font-size 16px
          text-align center
          margin -8px 0 0 19px
          .title
            color #8BA0B6
        .complet
          display inline-block
          font-size 13px
          color #8BA0B6
          width 120px
          height 28px
          text-align center
          background #D8E5F1
          margin 19px 4px 0 0
          p
            display inline-block
            line-height 28px
      .nouveautes_lists
        width 375px
        height 366px
        .pic-wrapper
          display flex
          width 100%
          height 250px
          overflow hidden
          white-space nowrap
          .pic-list
            display flex
            justify-content space-between
            align-items center
          .pic-item
            width 140px
            height 250px
            margin 16px 0 0 16px
            a
              img
                width 140px
                height 140px
    .recommander //人气推荐
      width 100%
      height 375px
      .recommander_title
        display flex
        width 100%
        height 130px
        background-image url("./images/hot.png")
        background-repeat no-repeat
        background-size 100%
        text-align center
        flex-direction column
        justify-content center
        align-items center
        .new_title
          position absolute
          font-size 16px
          text-align center
          margin-left -16px
          .title
            color #B4A078
        .complet
          display inline-block
          font-size 13px
          color #B4A078
          width 120px
          height 28px
          text-align center
          background #F4E9CB
          margin 33px 4px 0 0
          p
            display inline-block
            line-height 28px
      .recommander_lists
        width 375px
        height 240px
        .pic-wrapper-two
          width 100%
          height 250px
          overflow hidden
          white-space nowrap
          display flex
          .pic-list
            display flex
            justify-content space-between
            align-items center
          .pic-item
            width 140px
            height 250px
            display inline-block
            margin 16px 0 0 16px
            img
              width 140px
              height 140px
    .brand_price
      width 120px
      height 85px
      letter-spacing 1px
      font-size 13px
      .present
        width 38px
        height 19px
        font-size 12px
        background #F48F18
        line-height 19px
        text-align center
        border-radius 2px
        color white
        letter-spacing 2px
        margin-left 8px
      .brand
        width 120px
        height 20px
        line-height 20px
        span
          display inline-block
          width 120px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          color black
      .explosive
        width 120px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        color #7f7f7f
        height 20px
        line-height 20px
      .price
        width 120px
        span
          display inline-block
          height 20px
          line-height 20px
          color #b4282d
    .time_limit // 限时购
      border-top 9px solid #ededed
      background #fff
      width 100%
      height 215px
      text-align center
      display flex
      flex-direction row
      .time_limit_left
        display flex
        height 184px
        width 177px
        flex-direction column
        justify-content space-between
        margin-left 5px
        .limit
          width 100%
          height 30px
          color black
          margin-top 27px
          .limit_text
            width 100%
            font-size 19px
            line-height 30px
            letter-spacing 10px
            color black
        .time
          width 155px
          height 31px
          .hours,.mins,.secs
            width 34px
            height 31px
            color white
            background #444
            text-align center
            line-height 31px
            display inline-block
            border-radius 2px
          .colon,.colon
            display inline-block
            width 11px
            height 34px
            text-align center
            line-height 34px
            color black
        .rest_time
          width 100%
          height 40px
          line-height 40px
          span
            height 40px
            display inline-block
            font-size 14px

      .time_limit_right
        width 190px
        height 190px
        margin 13px 21px
        img
          width 150px
          height 150px
        .price
          width 53px
          height 53px
          background-color rgba(244,143,24,.95)
          border-radius 100%
          color white
          text-align center
          display flex
          position absolute
          flex-direction column
          margin -72px 0 0 116px
          .details_price
            width 45px
            height 45px
            margin 10px 0 0 2px
            .unit_price
              display inline-block
              span
                display inline-block
    .welfare // 福利社
      width 100%
      height 165px
      border-top 9px solid #ededed
      a
        width 100%
        height 100%
        img
          width 100%
          height 100%

    .selection // 专题精选
      width 100%
      background white
      border-top 9.6px solid #EDEDED
      .selection_title
        width 100%
        height 54px
        .selection_text
          font-size 16px
          line-height 54px
          text-align center
          color #333
          p
            display inline-block
      .selection_content
        width 100%
        height 250px
        .selection_lists
          width 100%
          height 250px
          display flex
          overflow hidden
          .selection_list
            display flex
            justify-content space-between
            align-items center
            height 230px
            border-bottom 9.6px solid #EDEDED
            li
              display inline-block
              width 287px
              height 220px
              margin-left 17px
              a
                display inline-block
                width 287px
                height 160px
                img
                  display inline-block
                  width 287px
                  height 160px
                  background-color pink
            .selection_bottom
              width 287px
              height 23px
              h4
                float left
                font-size 13px
                width 160px
                position relative
              span
                font-size 13px
                float right
                display inline-block
                color #b4282d
            .brief
              font-size 13px
              color #7F7F7F
    .home // 居家好物
      position relative
      width 100%
      height 100%
      .home_title
        width 100%
        height 54px
        .home_text
          font-size 16px
          line-height 54px
          text-align center
          color #333
          p
            display inline-block
      .home_content
        width 100%
        height 100%
        flex-direction row
        .home_lists
          display inline-block
          width 43%
          height 275px
          margin 0 10px 0 10px
        .home_img
          width 173px
          height 173px
          background-color #f4f4f4
          img
            width 100%
            height 100%
        .home_brief
          width 173px
          height 34px
          background-color #F1ECE2
          color #9F8A60
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          line-height 34px
          font-size 13px
          text-align center
        .home_name
          width 173px
          height 25px
          line-height 25px
          span
            display inline-block
            width 137px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
        .home_price

          span
            display inline-block
            color #b4282d
            height 25px
            line-height 25px


    footer // 页底部
      width 100%
      height 122px
      background-color #414141
      border-top 1px solid rgba(0,0,0,.15)
      margin-bottom 40px
      color white
      font-size 13px
      border-top
      .foot_top
        width 100%
        height 60px
        text-align center
        .foot_left
          width 80px
          height 32px
          border 1px solid #999
          display inline-block
          line-height 32px
          margin 15px
          border-radius 5px
        .foot_right
          width 80px
          height 32px
          border 1px solid #999
          display inline-block
          line-height 32px
          border-radius 5px
          margin 15px
      .foot_bottom
        width 80%
        height 50px
        margin 0 auto
        text-align center
        line-height 40px
        .bottom_top
          width 70%
          margin 0 auto
          height 20px
          color #999
        .bottom
          height 20px
          margin 0 auto
          color #999
</style>
