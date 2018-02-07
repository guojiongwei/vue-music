import Vue from 'vue'
import App from './App'
import Es6Promise from 'es6-promise'
import FastClick from 'fastclick'

FastClick.attach(document.body)
import IScroll from 'iscroll'
Es6Promise.polyfill();

import router from './router'
import store from './store'
Vue.config.productionTip = false
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
/* eslint-disable no-new */
Vue.prototype.$bus = new Vue()
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
