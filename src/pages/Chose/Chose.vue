<template>
  <div>
    <HeaderTop/>
    <!--严选内容-->
    <div class="chose">
      <!--轮播-->
      <div class="carousel">
        <div class="carousel_top">
          <div class="carousel_top_content" >
            <a href="javascropt:;" v-for="(ban, index) in chose.banner" :key="index" >
              <div class="carousel_top_text">
                <div top_text>
                  <div class="strict">
                    <i class="iconfont icon-yi"></i>
                    {{ban.subTitle}}
                    <i class="iconfont icon-yi"></i>
                  </div>
                  <div class="fairy"> {{ban.title}}</div>
                  <div class="subtrac"> {{ban.desc}}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="carousel_buttom">
          <div class="carousel_buttom_wrap">
            <div class="carousel_buttom_content">
              <a href="javascropt:;" v-for="(col, index) in chose.column" :key="index">
                <img :src="col.picUrl" >
                <div class="buttom_title">
                  <span>{{col.title}}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--严选推荐-->
      <div class="chose_recommend" v-if="chose.recommendOne">
        <div class="chose_recommend_title">
          <p>为你推荐</p>
        </div>
        <div class="chose_rec">
          <!--为你推荐-->
          <div class="chose_top">
            <a href="#">
              <div class="chose_top_img">
                <img :src="chose.recommendOne.picUrl" alt="">
                <div class="img_text">
                  <span>{{chose.recommendOne.nickname}}</span>
                </div>
              </div>
              <div class="how">{{chose.recommendOne.title}}</div>
              <div class="price">
                <span>{{chose.recommendOne.priceInfo}}</span>
                <span>元起</span>
              </div>
            </a>
          </div>
          <div class="chose_center_bottom" v-if="chose.recommendTwo">
            <a href="#">
              <div class="left">
                <div class="left_img">
                  <img :src="chose.recommendTwo.avatar" alt="">
                  <span>{{chose.recommendTwo.nickname}}</span>
                </div>
                <div class="left_text">
                  <span>{{chose.recommendTwo.subTitle}}</span>
                </div>
              </div>
              <div class="right">
                <div class="right_img">
                  <img :src="chose.recommendTwo.picUrl" alt="">
                  <div class="right_text">
                    <span>{{chose.recommendTwo.typeName}}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="chose_center_bottom" v-if="chose.recommendThree">
            <a href="#">
              <div class="left">
                <div class="left_img">
                  <img :src="chose.recommendThree.avatar" alt="">
                  <span>{{chose.recommendThree.nickname}}</span>
                </div>
                <div class="left_text">
                  <span>{{chose.recommendThree.subTitle}}</span>
                </div>
              </div>
              <div class="right">
                <div class="right_img">
                  <img :src="chose.recommendThree.picUrl" alt="">
                  <div class="right_text">
                    <span>{{chose.recommendThree.typeName}}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!--十点一刻-->
      <div class="ten">
        <div class="ten_content" >
          <div class="ten_title">
            <p>十点一刻</p>
          </div>
          <div class="talk_content">
            <div class="talk_slide" >
              <a href="javascropt:;" v-for="(ten, index) in chose.tenfifteen" :key="index">
                <div class="img" >
                  <div class="talk">
                    <i class="iconfont icon-yi"></i>
                    <span>今日话题</span>
                    <i class="iconfont icon-yi"></i>
                  </div>
                  <div class="talk_live">{{ten.title}}</div>
                  <div class="talk_need">{{ten.desc}}</div>
                  <div class="talk_name">
                    <div class="talk_img">
                      <!--头像-->
                      <img  alt="" v-for="(pic, index) in ten.participantAvatar" :key="index" v-if="pic" :src="pic">
                      <div class="talk_perple">
                        <span>2</span>
                        <span>人参加</span>
                      </div>
                      <!--参与话题-->
                      <div>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" >
                <div class="talk_two">
                  <div class="talk_text">
                    <p>查看全部话题</p>
                    <i class="iconfont icon-you1"></i>
                    <i></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

      <!--严选甄品-->
      <div class="chose_recommend" v-if="chose.zhenOne">
        <div class="chose_recommend_title">
          <p>严选甄品</p>
        </div>
        <div class="chose_rec">
          <!--严选甄品-->
          <div class="chose_top">
            <a href="#">
              <div class="chose_top_img">
                <img :src="chose.zhenOne.picUrl" alt="">
                <div class="img_text">
                  <span>{{chose.zhenOne.nickname}}</span>
                </div>
              </div>
              <div class="how">{{chose.zhenOne.title}}</div>
              <div class="price">
                <span>{{chose.zhenOne.priceInfo}}</span>
                <span>元起</span>
              </div>
            </a>
          </div>
          <div class="chose_center_bottom" v-if="chose.zhenTwo">
            <a href="#">
              <div class="left">
                <div class="left_img">
                  <img :src="chose.zhenTwo.avatar" alt="">
                  <span>{{chose.zhenTwo.nickname}}</span>
                </div>
                <div class="left_text">
                  <span>{{chose.zhenTwo.subTitle}}</span>
                </div>
              </div>
              <div class="right">
                <div class="right_img">
                  <img :src="chose.zhenTwo.picUrl" alt="">
                  <div class="right_text">
                    <span>{{chose.zhenTwo.typeName}}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="chose_center_bottom" v-if="chose.zhenThree">
            <a href="#">
              <div class="left">
                <div class="left_img">
                  <img :src="chose.zhenThree.avatar" alt="">
                  <span>{{chose.zhenThree.nickname}}</span>
                </div>
                <div class="left_text">
                  <span>{{chose.zhenThree.subTitle}}</span>
                </div>
              </div>
              <div class="right">
                <div class="right_img">
                  <img :src="chose.zhenThree.picUrl" alt="">
                  <div class="right_text">
                    <span>{{chose.zhenThree.typeName}}</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!--严选LOOK-->
      <div class="look" v-if="chose.yxLook">
        <div class="look_title">严选LOOK</div>
        <a href="#">
          <img :src="chose.yxLook.picUrl" alt="">
          <div class="look_content">
            <div class="look_con">
              <!--头像，名-->
              <div class="look_img">
                <img :src="chose.yxLook.avatar" alt="">
                <div class="look_name">{{chose.yxLook.nickname}}</div>
              </div>
              <p>{{chose.yxLook.content}}</p>
            </div>
          </div>

        </a>
      </div>

      <!--更多精彩-->
      <div class="more">
        <!--三张图-->
        <div class="more_content">
          <!--题目-->
          <div class="more_title">
            <div>题目</div>
          </div>
          <!--图片-->
          <div class="picture">
            <a href="#">
              <div class="more_img">
                <div class="img_left">
                  <img src="" alt="">
                </div>
                <div class="more_top">
                  <img src="" alt="">
                </div>
                <div class="more_bottom">
                  <img src="" alt="">
                </div>
                <div class="text">
                  夏天蚊虫细菌滋生，是最需要做好清洁的季节。然而天气这么热，随便一动就出汗，哪有心...
                </div>
              </div>
            </a>
          </div>
        </div>

        <!--一张图-->
        <div class="picture_One">
          <a href="#">
            <div class="more_img">
              <div class="img_conter">
                <img src="" alt="">
              </div>
              <div class="text">
                夏天蚊虫细菌滋生，是最需要做好清洁的季节。然而天气这么热，随便一动就出汗，哪有心...
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  export default {
    components: {
      HeaderTop,
    },
    mounted () {
      // 获得数据
       this.$store.dispatch('getChose')

      /*轮播*/
      let chose = new BScroll ('.carousel_top', {scrollX: true})
      let choseBottom = new BScroll ('.carousel_buttom_wrap', {scrollX: true})
      /*十刻*/
      let choseTen = new BScroll ('.talk_content', {scrollX: true})
    },
    computed: {
      ...mapState(['chose'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body
    overflow-x hidden
  .chose
    height 100%
    width 100%
    padding-top 40px
    margin-bottom 1300px
    .carousel // 轮播
      width 100%
      height 341px
      margin-top 15px
      .carousel_top
        width 100%
        height 192px
        overflow hidden
        display flex
        .carousel_top_content
          display flex
          justify-content space-between
          align-items center
          height 100%
          a
            display inline-block
            width 335px
            height 192px
            background-color white
            margin-left 15px
            img
              width 100%
            &:nth-Child(1)
              background-image url("//yanxuan.nosdn.127.net/c6a391ff65f798cbf51030cb35ccdb25.jpg")
              background-size 100%
            &:nth-Child(2)
              background-image url("//yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg")
              background-size 100%
            &:nth-Child(3)
              background-image url("//yanxuan.nosdn.127.net/b8cfc8fefa68033b9f458527bc6f1682.jpg")
              background-size 100%
            &:nth-Child(4)
              background-image url("//yanxuan.nosdn.127.net/3e3901015b3ea54ad751289513ba373c.jpg")
              background-size 100%
            .carousel_top_text
              width 223px
              height 100px
              margin auto
              margin-top 25px
              text-align center
              background-color white
              opacity 0.9
              .strict
                width 100%
                height 36px
                display inline-block
                line-height 36px
                font-size 12px
                .iconfont
                  display inline-block
              .fairy
                height 30px
                font-size 19px
                color black
              .subtrac
                height 20px
                font-size 13px
                color black
      .carousel_buttom
        width 100%
        height 143px
        .carousel_buttom_wrap
          width 100%
          height 143px
          white-space nowrap
          padding-left 8px
          border-bottom 9px solid #ededed
          overflow hidden
          display flex
          .carousel_buttom_content
            height 100%
            display flex
            justify-content space-between
            align-items center
            a
              display inline-block
              width 82px
              height 105px
              margin 24px 0 0 14px
              img
                display inline-block
                width 82px
                height 82px
              .buttom_title
                width 110%
                font-size 12px
                text-align center
                span
                  width 100%
                  display inline-block
                  margin 5px 0 0 -10px
                  color #222
    .chose_recommend // 为你推荐
      width 100%
      height 100%
      .chose_recommend_title
        width 100%
        height 54px
        font-size 16px
        line-height 54px
        text-align center
        color #333
        p
          display inline-block
      .chose_rec
        width 90%
        height 580px
        margin auto
        .chose_top
          width 100%
          height 270px
          border 1px solid #d9d9d9
          a
            width 100%
            height 100%
            .chose_top_img
              position relative
              width 100%
              height 193px
              background-color white
              img
                display inline-block
                width 100%
                height 100%
                background-size 100%
              .img_text
                width 65px
                height 16px
                font-size 12px
                text-align center
                color black
                margin -164px 0 0 16px
                z-index 1
                span
                  display inline-block
                  width 65px
                  background-color white !important
                  border 1px solid #d9d9d9
                  border-radius 10px
                  height 16px
                  line-height 16px
                  color #333
            .how
              float left
              width 70%
              height 30px
              font-size 18px
              line-height 30px
            .price
              float right
              width 30%
              height 30px
              font-size 18px
              line-height 30px
              span
                display inline-block
        .chose_center_bottom
          width 100%
          height 136px
          border 1px solid #d9d9d9
          margin-top 15px
          a
            position relative
            width 100%
            height 100%
            display block
            .left
              float left
              width 60%
              height 100%
              .left_img
                width 100%
                height 50px
                text-align center
                margin-top 27px
                line-height 50px
                img
                  display inline-block
                  width 23px
                  height 23px
                  border-radius 50%
                  vertical-align middle
                span
                  display inline-block
                  height 23px
                  line-height 23px
                  font-size 12px
              .left_text
                text-align center
                width 100%
                height 60px
                span
                  display inline-block
                  width 160px
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
            .right
              float right
              width 40%
              height 100%
              .right_img
                width 100%
                height 100%
                img
                  display inline-block
                  width 100%
                  height 100%
                  background-size 100%
                .right_text
                  width 80%
                  height 16px
                  font-size 13px
                  background-color white
                  color black
                  margin -124px 0 0 -2px
                  text-align center
                  span
                    display inline-block
                    background-color white !important
                    height 16px
                    line-height 16px
                    border-radius 10px
                    border 1px solid #d9d9d9
                    padding 0 7px
                    color #333

    .ten // 十点一刻
      width 100%
      height 285px
      border-top 9px solid #ededed
      margin auto
      .ten_content
        width 100%
        height 100%
        .ten_title
          width 100%
          height 54px
          font-size 16px
          line-height 54px
          text-align center
          color #333
        .talk_content
          width 100%
          height 230px
          display flex
          overflow hidden
          .talk_slide
            height 100%
            display flex
            justify-content space-between
            align-items center
            a
              display inline-block
              width 290px
              height 205px
              text-align center
              margin 10px
              .img
                width 100%
                height 100%
                background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
                background-size 100%
                .talk
                  width 100%
                  height 40px
                  font-size 12px
                  line-height 40px
                  color #333
                  span,.iconfont
                    display inline-block
                .talk_live
                  width 100%
                  height 40px
                  font-size 19px
                  line-height 50px
                  font-weight 700
                  color #333
                .talk_need
                  width 100%
                  height 30px
                  font-size 15px
                  color #333
                  span
                    display inline-block
                .talk_name
                  width 100%
                  height 30px
                  margin auto
                  .talk_img
                    display inline-block
                    width 200px
                    height 23px
                    img
                      display inline-block
                      width 23px
                      height 23px
                      vertical-align middle
                      border-radius 50%
                    .talk_perple
                      display inline-block
                      width 80px
                      height 23px
                      color #333
                      span
                        display inline-block
            a
              display inline-block
              width 290px
              height 205px
              text-align center
              margin 10px
              .talk_two
                position relative
                width 90%
                height 86%
                border 6px solid #e6e6e6
                background-color #fafafa
                .talk_text
                  position absolute
                  width 140px
                  height 20px
                  font-size 16px
                  left 0
                  right 0
                  top 0
                  bottom 0
                  margin auto
                  display flex
                  p
                    display inline-block
                    margin-right 5px
                  .iconfont
                    display inline-block
    .look //严选LOOK
      width 100%
      height 450px
      border-top 9px solid #ededed
      .look_title
        width 100%
        height 54px
        font-size 16px
        line-height 54px
        text-align center
        color #333
      a
        width 100%
        height 250px
        display inline-block
        img
          width 100%
          height 100%
          display inline-block
          background-size 100%
        .look_content
          width 90%
          height 140px
          margin auto
          .look_con
            width 100%
            height 40px
            line-height 40px
            img
              width 23px
              height 23px
              vertical-align middle
              border-radius 50%
            .look_name
              display inline-block
            p
              width 100%
              height 50px
              line-height normal

    .more // 更多精彩
      width 100%
      height 100%
      .more_content
        width 100%
        height 100%
        .more_title
          width 100%
          height 54px
          font-size 16px
          line-height 54px
          text-align center
          color #333
          background palegreen
        .picture
          width 90%
          height 250px
          margin auto
          a
            display block
            width 100%
            height 100%
            border  10px solid #fff
            box-sizing border-box
            .more_img
              position relative
              width 100%
              height 180px
              background red
              .img_left
                width 66.6%
                height 100%
                background-color pink
                display inline-block
              .more_top
                position absolute
                width 33.3%
                height 50%
                background-color palegreen
                display block
                right 0
                top 0
              .more_bottom
                position absolute
                width 33.3%
                height 50%
                background-color antiquewhite
                right 0
                bottom 0
                333
              .text
                width 100%
                height 50px
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                line-height 50px
                color black

      .picture_One
        width 90%
        height 250px
        margin auto
        a
          display block
          width 100%
          height 100%
          border  10px solid #fff
          box-sizing border-box
          .more_img
            position relative

            width 100%
            height 180px
            background red
            .img_conter
              width 100%
              height 100%
              background-color pink
              display inline-block
            .text
              width 100%
              height 50px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              line-height 50px
              color black

</style>
