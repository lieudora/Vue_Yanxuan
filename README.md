## 严选
   *  1. 项目描述
         1. 此项目是一个参考严选App的 Web App
         2. 包括商家，主页，购物车，用户等多个模块
         3. 使用 Vue全加桶+ES6+WebPack 等技术
         4. 采用模块化，组件化，工程化的模式开发
   *  2.技术选型
          1. 前台数据处理/交互/组件化：
             vue,vue-router,vuex,
          2. 模块化
             es6, babel
          3.项目构建/工程化  webpack,vue-cli,eslint
          4.前后台交互： mock数据：mock.js
                        接口测试：postman
                        ajax 请求

   *  3. 项目目录
        1.App  -- 应用组件
          main  -- 入口js
        2.src
          api  -- 后台接口
          common  --通用资源 foots/img
          components  --非路由组件文件夹
          mock  -- 模拟数据接口文档
          pages  -- 路由组件文件夹
          router  -- 路由器文件夹
   *  4. 前端路由
         一级路由： 首页： Maison        /maison                显示底部导航
                   识物：Recommander    /recommander           显示底部导航
                   分类：Classifier     /classifier            显示底部导航
                   购物车：Order        /order                 显示底部导航
                   个人：Profile        /profile
                   登陆：Login          /login
   * 5. API 接口
       API接口
       接口文档
       对接口
       联调
       前后台分离
       mock数据
   * 6. 样式： stylus 编写模块化css
   * 7. 拆分组件
          src
              |-- components------------非路由组件文件夹
                 |-- FooterGuide---------------底部组件文件夹
                    |-- FooterGuide.vue--------底部组件vue
                 |-- HeaderTop---------------头部组件文件夹
                    |-- HeaderTop.vue--------头部组件vue

              |-- pages-----------------路由组件文件夹
                 |-- Maison---------------首页组件文件夹
                    |-- Maison.vue--------首页组件vue
                 |-- Recommander----------------搜索组件文件夹
                    |-- Recommander.vue---------搜索组件vue
                 |-- Classifier--------------订单组件文件夹
                    |-- Classifier.vue-------订单组件vue
                 |-- Profile--------------个人组件文件夹
                    |-- Profile.vue-------个人组件vue
                 |-- Login--------------登陆组件文件夹
                    |-- Login.vue-------登陆组件vue
              |-- App.vue---------------应用根组件vue
              |-- main.js---------------应用入口js

