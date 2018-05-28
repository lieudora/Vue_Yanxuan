<template>
<div id="app">
  <router-view></router-view>
  <FooterGuide/>
</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    components: {
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #EDEDED
</style>
