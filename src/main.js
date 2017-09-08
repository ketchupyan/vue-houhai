// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//axios  this.$http api通信
import VueResource from 'vue-resource'
Vue.use(VueResource)
//PC VUE 界面框架  适合于做后台
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
