// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import './vuex/modules/filters'

Vue.config.productionTip = false

//引入轮播图插件样式表
import '../node_modules/swiper/dist/css/swiper.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
